"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { REVEAL_ABORT_ATTR, REVEAL_ARM_ATTR } from "@/lib/reveal-init";

/**
 * All scroll motion on the site, in one observer and one rAF loop.
 *
 * Content ships visible. The hidden state exists only under `html.js-reveal`,
 * armed by the head script under exactly the conditions this controller needs
 * — JavaScript running, IntersectionObserver present, reduced motion not
 * requested — so a crawler and a no-JS reader always get the full page, and
 * this file can rely on the hidden state already being the painted one.
 *
 * Four behaviours share one pass:
 *
 *   opening   elements already on screen play their composed entrance,
 *             released together on the second frame
 *   reveal    elements marked `data-reveal` transition in as they enter
 *   stagger   a container marked `data-reveal-stagger` hands its children
 *             incremental delays, so a grid resolves in sequence without any
 *             template hand-writing delay values
 *   drift     elements marked `data-drift` move slightly against the scroll
 */
const STAGGER_STEP = 70;
const STAGGER_MAX = 6;
const DRIFT_RANGE = 40;

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    // The head script's failsafe already gave up and un-hid the page. Re-arming
    // now would hide content the reader is currently looking at.
    if (root.hasAttribute(REVEAL_ABORT_ATTR)) return;

    root.setAttribute(REVEAL_ARM_ATTR, "");
    // Normally a no-op — the head script armed this before first paint. It is
    // still needed for a client-side navigation into a page whose reveal
    // targets did not exist when that script ran.
    root.classList.add("js-reveal");

    /* --- Stagger: assign delays before anything is observed --------------- */
    for (const group of document.querySelectorAll<HTMLElement>("[data-reveal-stagger]")) {
      [...group.children].forEach((node, i) => {
        const child = node as HTMLElement;
        // A template-authored delay always wins; this only fills the gaps.
        if (child.style.getPropertyValue("--reveal-delay")) return;
        if (!child.hasAttribute("data-reveal")) child.setAttribute("data-reveal", "");
        child.style.setProperty("--reveal-delay", `${Math.min(i, STAGGER_MAX) * STAGGER_STEP}ms`);
      });
    }

    /* An element is only ever revealed through here, so the observer and the
       sweep below can never fight over the same node. */
    const pending = new Set<HTMLElement>();
    const reveal = (el: HTMLElement) => {
      el.classList.add("is-revealed");
      observer.unobserve(el);
      pending.delete(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    const onScreen: HTMLElement[] = [];
    for (const el of document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-revealed), [data-reveal-lines]:not(.is-revealed)",
    )) {
      // Anything already in view never waits for a scroll event that may never
      // come; it plays its entrance on arrival instead.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        onScreen.push(el);
      } else {
        pending.add(el);
        observer.observe(el);
      }
    }

    /* The opening is the one sequence every reader is guaranteed to see, so it
       is the one place authored delays matter. Releasing on the second frame is
       what makes them work: the hidden state has to be committed to a painted
       frame before the class that transitions out of it lands, or the browser
       coalesces both into one style recalculation and the elements simply
       appear. */
    const opening = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        for (const el of onScreen) el.classList.add("is-revealed");
      }),
    );

    /* --- Safety sweep -----------------------------------------------------
       An IntersectionObserver reports an element's state at the end of a frame,
       not every position it passed through. A fast scroll — a wheel fling, a
       held PageDown, a scrollbar drag, an anchor jump — can move a section from
       below the fold to above it within one frame, and the observer legitimately
       never sees it intersect. That element would then stay at opacity 0 for the
       rest of the session: not a missed animation but missing content.

       So the observer decides *when* something animates and this decides *that*
       it animates. It shares the scroll listener's rhythm rather than adding
       one, and the set empties as the page is read, so a fully revealed page
       costs one emptiness check per scroll frame. */
    let queued = false;
    const sweep = () => {
      queued = false;
      if (pending.size === 0) return;
      const limit = window.innerHeight * 0.92;
      for (const el of [...pending]) {
        if (el.getBoundingClientRect().top < limit) reveal(el);
      }
    };
    const onScroll = () => {
      if (queued || pending.size === 0) return;
      queued = true;
      requestAnimationFrame(sweep);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(opening);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  /* --- Drift and reading progress, one rAF loop -------------------------- */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    let layers: HTMLElement[] = [];
    let frame = 0;
    let queued = false;

    const collect = () => {
      layers = [...document.querySelectorAll<HTMLElement>("[data-drift]")];
    };

    const draw = () => {
      queued = false;
      const viewport = window.innerHeight;

      for (const layer of layers) {
        const box = layer.getBoundingClientRect();
        if (box.bottom < -200 || box.top > viewport + 200) continue;
        // -1 below the fold, +1 once it has passed above.
        const travel = (viewport / 2 - (box.top + box.height / 2)) / (viewport / 2 + box.height / 2);
        layer.style.setProperty("--drift", `${(travel * DRIFT_RANGE).toFixed(1)}px`);
      }

      if (progress) {
        const scrollable = document.documentElement.scrollHeight - viewport;
        const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
        progress.style.setProperty("--progress", ratio.toFixed(4));
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      frame = requestAnimationFrame(draw);
    };

    collect();
    draw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Routes are client-navigated, so the layer set has to be rebuilt after the
    // new page paints rather than only on mount.
    const settle = window.setTimeout(() => {
      collect();
      draw();
    }, 120);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settle);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
