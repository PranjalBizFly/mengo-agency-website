"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { buttonClass } from "@/components/ui/primitives";
import { primaryNav, type NavGroup } from "@/lib/nav";
import { routes } from "@/lib/site";

/**
 * Enterprise header for a large site.
 *
 * Desktop: a mega panel opened by hover or keyboard, one at a time, rendered
 * inside the header's own stacking context so page content can never clip it.
 * Mobile: a full-height drawer built from native disclosures, which gets the
 * interaction accessible without hand-rolling a focus trap.
 *
 * The panel mounts on open rather than living hidden in the DOM. That costs a
 * render and buys two things: the entrance can be an animation rather than a
 * transition, and five panels' worth of links are not sitting in the tab order
 * of every page.
 */
export function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // A route change closes everything. Without this a menu link navigates and
  // the panel stays open over the new page.
  useEffect(() => {
    setOpenIndex(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The drawer owns the scroll lock, and it is the only thing that does.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenIndex(null);
      setMobileOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    // A short grace period so the pointer can cross the gap to the panel.
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 130);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={scheduleClose}
        className={`sticky top-0 z-50 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] ${
          condensed || openIndex !== null
            ? "border-b border-line bg-paper/92 shadow-[0_10px_30px_-24px_rgb(2_32_24/0.5)]"
            : "border-b border-transparent bg-paper/75"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-on-dark"
        >
          Skip to content
        </a>

        <div className="wrap flex h-(--header-h) flex-nowrap items-center justify-between gap-3">
          <Logo />

          <nav aria-label="Primary" className="hidden min-w-0 lg:block">
            <ul className="flex flex-nowrap items-center">
              {primaryNav.map((group, index) => (
                <li key={group.label}>
                  {group.columns ? (
                    <button
                      type="button"
                      aria-expanded={openIndex === index}
                      aria-haspopup="true"
                      data-open={openIndex === index}
                      onMouseEnter={() => {
                        cancelClose();
                        setOpenIndex(index);
                      }}
                      onFocus={() => setOpenIndex(index)}
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className={`nav-item type-nav flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2.5 transition-colors xl:px-3 ${
                        openIndex === index || isCurrent(group.href)
                          ? "text-lime-deep"
                          : "text-ink hover:text-lime-deep"
                      }`}
                    >
                      {group.label}
                      <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        aria-hidden
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                      >
                        <path d="M1 1l3.5 3.5L8 1" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={group.href}
                      className="nav-item type-nav inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-2.5 text-ink transition-colors hover:text-lime-deep xl:px-3"
                    >
                      {group.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <Link
              href={routes.howItWorks()}
              className="nav-item type-nav hidden whitespace-nowrap rounded-full px-3 py-2.5 text-ink transition-colors hover:text-lime-deep xl:inline-flex xl:items-center"
            >
              How it works
            </Link>
            <ThemeToggle />
            <Link
              href={routes.getStarted()}
              className={buttonClass("primary", "shrink-0 whitespace-nowrap", "sm")}
            >
              Get started
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((open) => !open)}
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-ink"
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-6" aria-hidden>
                <span
                  className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ease-[var(--ease-out-expo)] ${
                    mobileOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ease-[var(--ease-out-expo)] ${
                    mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {openIndex !== null && primaryNav[openIndex].columns ? (
          <div
            className="mega-panel absolute inset-x-0 top-full hidden border-t border-line bg-paper shadow-lg lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {/* Keyed on the open group so moving between menus re-runs the
                column stagger. The panel surface itself does not flash. */}
            <MegaPanel key={openIndex} group={primaryNav[openIndex]} />
          </div>
        ) : null}
      </header>

      {/* The drawer sits outside <header>: the header's backdrop-filter makes it
          the containing block for fixed descendants, which would collapse the
          drawer into the header's own 5rem box. */}
      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-(--header-h) z-40 overflow-y-auto overscroll-contain border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Primary mobile" className="wrap pb-12 pt-2">
          {primaryNav.map((group) => (
            <details key={group.label} className="group rule-b">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between py-4 type-title text-h7 [&::-webkit-details-marker]:hidden">
                {group.label}
                <svg
                  width="11"
                  height="7"
                  viewBox="0 0 9 6"
                  aria-hidden
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-lime-deep transition-transform duration-300 group-open:rotate-180"
                >
                  <path d="M1 1l3.5 3.5L8 1" />
                </svg>
              </summary>
              <div className="pb-5">
                {group.columns?.map((column) => (
                  <div key={column.heading} className="mb-5 last:mb-0">
                    {column.heading.trim() ? <p className="label mb-2">{column.heading}</p> : null}
                    <ul>
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="flex min-h-11 items-center py-2.5 text-body text-ink-soft transition-colors hover:text-lime-deep"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      {column.seeAll ? (
                        <li>
                          <Link
                            href={column.seeAll.href}
                            className="flex min-h-11 items-center py-2.5 text-body font-semibold text-lime-deep"
                          >
                            {column.seeAll.label} →
                          </Link>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}

          <Link href={routes.howItWorks()} className="rule-b flex min-h-14 items-center py-4 type-title text-h7">
            How it works
          </Link>
          <Link href={routes.why()} className="rule-b flex min-h-14 items-center py-4 type-title text-h7">
            Why Mengo
          </Link>

          <div className="mt-8 grid gap-3">
            <Link href={routes.getStarted()} className={buttonClass("primary", "w-full")}>
              Get started
            </Link>
            <Link href={routes.contact()} className={buttonClass("secondary", "w-full")}>
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

function MegaPanel({ group }: { group: NavGroup }) {
  const columns = group.columns ?? [];
  return (
    <div
      className={`wrap grid gap-x-8 gap-y-9 py-9 xl:gap-x-10 ${
        group.feature
          ? "lg:grid-cols-[1fr_1fr_1fr_minmax(0,16rem)] xl:grid-cols-[1fr_1fr_1fr_minmax(0,18rem)]"
          : "lg:grid-cols-3"
      }`}
    >
      {columns.map((column, index) => (
        <div
          key={column.heading}
          data-mega-col
          className="min-w-0"
          style={{ "--mega-index": String(index) } as React.CSSProperties}
        >
          {/* A blank heading is a deliberate continuation column: the group has
              more links than one column reads comfortably, and repeating the
              heading would announce a second section that does not exist. */}
          {column.heading.trim() ? (
            <p className="label mb-4">
              {column.headingHref ? (
                <Link href={column.headingHref} className="transition-colors hover:text-lime-deep">
                  {column.heading}
                </Link>
              ) : (
                column.heading
              )}
            </p>
          ) : (
            <p className="mb-4 h-[1.2em]" aria-hidden />
          )}
          <ul>
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-index group -mx-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-paper-warm"
                >
                  <span className="block text-body font-medium text-ink transition-colors group-hover:text-lime-deep">
                    {link.label}
                  </span>
                  {link.blurb ? (
                    <span className="mt-0.5 block text-fine leading-snug text-ink-soft">{link.blurb}</span>
                  ) : null}
                </Link>
              </li>
            ))}
            {column.seeAll ? (
              <li>
                <Link
                  href={column.seeAll.href}
                  className="link-index -mx-2.5 mt-2 px-2.5 py-2 text-small font-semibold text-lime-deep transition-colors hover:text-ink"
                >
                  {column.seeAll.label} →
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      ))}

      {group.feature ? (
        <div
          data-mega-col
          className="on-dark rounded-2xl bg-forest p-7"
          style={{ "--mega-index": String(columns.length) } as React.CSSProperties}
        >
          <p className="label">{group.feature.kicker}</p>
          <p className="mt-4 type-title text-h5 leading-tight text-on-dark">{group.feature.title}</p>
          <p className="mt-3 text-small leading-relaxed text-sage-bright">{group.feature.body}</p>
          <Link
            href={group.feature.href}
            className="mt-5 inline-flex items-center gap-1.5 text-small font-semibold text-lime transition-colors hover:text-lime-bright"
          >
            {group.feature.cta} →
          </Link>
        </div>
      ) : null}
    </div>
  );
}
