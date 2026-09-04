"use client";

import { useEffect, useState } from "react";

/**
 * The in-page section rail.
 *
 * An entity page here runs eight or nine bands and about nine thousand pixels.
 * Without a rail the only way to find out whether it answers your question is
 * to scroll all of it, which is what makes a long page read as a document
 * dumped on a screen rather than as something built to be used. The product
 * site puts a rail directly under every entity opening for exactly this reason,
 * and it is the single strongest signal that a page has a structure worth
 * exploring.
 *
 * It reads the page rather than being told about it. On mount it walks the
 * bands, takes each one's own eyebrow as the label — those are already written
 * as short names for what the band is ("Why it matters", "In and out", "By
 * stage") — and gives the band an id if it has not got one. That means a
 * template gets a rail by rendering this once, with no per-section wiring to
 * fall out of step with the sections.
 *
 * Progressive enhancement: the server renders the shell at its final height, so
 * nothing moves when the labels arrive, and a reader without JavaScript loses a
 * convenience rather than any content — every destination is a heading further
 * down the same page.
 */

interface Mark {
  id: string;
  label: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

export function SectionRail() {
  const [marks, setMarks] = useState<Mark[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const found: Mark[] = [];
    for (const band of main.querySelectorAll<HTMLElement>(":scope > section, :scope > div")) {
      const heading = band.querySelector("h2");
      if (!heading) continue;
      /* The band's eyebrow is its short name; the heading is its argument. The
         rail wants the name. Where a band opens at label scale it has no
         eyebrow, and the heading is already short enough to be one. */
      const named = band.querySelector<HTMLElement>("[data-band-label]");
      const kicker = band.querySelector<HTMLElement>(".kicker");
      const raw = (
        named?.dataset.bandLabel ||
        kicker?.textContent ||
        heading.textContent ||
        ""
      )
        .replace(/\s+/g, " ")
        .trim();
      if (!raw || raw.length > 34) continue;
      if (!band.id) band.id = slugify(raw);
      if (found.some((mark) => mark.id === band.id)) continue;
      found.push({ id: band.id, label: raw });
    }

    /* Under four bands there is nothing to navigate and the rail is furniture. */
    if (found.length < 4) return;
    setMarks(found);
    setActive(found[0].id);

    /* The band whose top has most recently passed under the header is the one
       being read. rootMargin pins the trigger line just below the header
       rather than at the viewport middle, so the rail changes when a heading
       arrives rather than when it is halfway up the screen. */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    for (const mark of found) {
      const el = document.getElementById(mark.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-(--header-h) z-30 border-b border-line bg-paper/92 backdrop-blur-xl">
      <div className="wrap">
        {/* The shell keeps its height whether or not the labels arrive, so the
            page below it never jumps. */}
        <nav
          aria-label="On this page"
          className="-mx-(--spacing-gutter) flex h-14 items-center gap-1 overflow-x-auto px-(--spacing-gutter) [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {marks.map((mark) => (
            <a
              key={mark.id}
              href={`#${mark.id}`}
              aria-current={active === mark.id ? "true" : undefined}
              className={`inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full px-3.5 text-fine font-medium transition-colors duration-300 [@media(pointer:coarse)]:h-11 ${
                active === mark.id
                  ? "bg-lime/20 text-ink"
                  : "text-ink-soft hover:bg-paper-warm hover:text-ink"
              }`}
            >
              {mark.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
