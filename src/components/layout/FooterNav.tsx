"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { FooterColumn } from "@/lib/nav";

/**
 * The footer's primary navigation.
 *
 * Fifty links across seven columns is the right density for a five-hundred-page
 * site on a wide screen and the wrong one on a phone, where it becomes a
 * thousand pixels of list under every page. So the columns are a grid from `lg`
 * up and an accordion below it — the same markup either way, with the
 * disclosure state ignored once there is room to show everything.
 *
 * The switch is at `lg` rather than `md` because 768px is a tablet held in a
 * hand. Above the breakpoint the heading stops being a control and its 44px
 * minimum goes with it, which is correct for a pointer and wrong for a thumb —
 * so the breakpoint has to sit above every width that is plausibly touched.
 *
 * The lists are always in the document. Collapsing hides them from view; it
 * never removes a link from the page, from a crawler, or from the accessibility
 * tree beyond the standard `aria-expanded` contract. Server and client both
 * render the collapsed state, so there is no hydration mismatch and no flash of
 * an open accordion on first paint.
 */
export function FooterColumns({ columns }: { columns: FooterColumn[] }) {
  return (
    <nav
      aria-label="Footer"
      className="grid gap-x-8 lg:grid-cols-3 lg:gap-y-10 xl:grid-cols-4"
      data-reveal-stagger
    >
      {columns.map((column) => (
        <FooterGroup key={column.heading} column={column} />
      ))}
    </nav>
  );
}

function FooterGroup({ column }: { column: FooterColumn }) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <div data-reveal className="border-b border-sage/15 lg:border-0">
      {/* A heading that is also the control below `lg`, and only a heading
          above it — pointer events are dropped rather than the button being
          swapped for a `<p>`, so the two layouts stay one piece of markup. */}
      <h2>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={listId}
          className="label flex min-h-11 w-full items-center justify-between gap-4 py-3 text-left transition-colors hover:text-lime lg:pointer-events-none lg:min-h-0 lg:py-0 lg:pb-4 lg:hover:text-sage"
        >
          {column.heading}
          <svg
            aria-hidden
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`shrink-0 transition-transform duration-300 ease-[var(--ease-out-expo)] lg:hidden ${
              open ? "" : "-rotate-90"
            }`}
          >
            <path d="M2.5 4.25 6 7.75l3.5-3.5" />
          </svg>
        </button>
      </h2>

      <ul id={listId} className={`footer-links pb-4 lg:block lg:pb-0 ${open ? "block" : "hidden"}`}>
        {column.links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="link-index text-small leading-snug text-sage-bright transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime motion-safe:hover:translate-x-0.5"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
