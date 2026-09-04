"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { ExplorerItem, ExplorerStage } from "@/lib/explorer";

/**
 * The capability explorer.
 *
 * Sixty-four capabilities is a taxonomy, not an answer. This turns it into one:
 * pick the week that sounds like yours and the set collapses to what is worth
 * doing now, what follows once that is running, and — the part that matters —
 * what to leave alone, with the thing to do instead.
 *
 * A tablist rather than a set of filter chips, because the five stages are
 * mutually exclusive and the arrow keys should behave the way a reader who
 * uses them expects. The first stage is selected on the server, so the panel
 * carries real, indexable content before any JavaScript runs.
 */
export function CapabilityExplorer({ stages }: { stages: ExplorerStage[] }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const stage = stages[active];

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = stages.length - 1;
    let next = active;
    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    setActive(next);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  };

  return (
    <div>
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="Stage"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {stages.map((entry, index) => (
          <button
            key={entry.slug}
            type="button"
            role="tab"
            id={`explorer-tab-${entry.slug}`}
            aria-selected={index === active}
            aria-controls={`explorer-panel-${entry.slug}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            className={`inline-flex min-h-11 items-center rounded-full border px-5 text-small font-medium transition-colors ${
              index === active
                ? "border-lime-deep bg-lime-deep text-on-accent"
                : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"
            }`}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`explorer-panel-${stage.slug}`}
        aria-labelledby={`explorer-tab-${stage.slug}`}
        tabIndex={0}
        className="mt-9 outline-none"
      >
        <div className="rule-b flex flex-wrap items-end justify-between gap-x-8 gap-y-3 pb-6">
          <p className="max-w-[52ch] text-lead text-ink">{stage.shape}</p>
          <Link
            href={stage.href}
            className="link-index text-small font-semibold text-lime-deep transition-colors hover:text-ink"
          >
            The full {stage.label.toLowerCase()} page →
          </Link>
        </div>

        <Band
          heading="Worth doing now"
          note="The capabilities that carry the constraint at this point. Start here."
          items={stage.core}
          empty="Nothing is marked core at this stage."
        />

        <Band
          heading="Once that is running"
          note="Useful, and cheaper to add after the core is in place than alongside it."
          items={stage.useful}
          empty="Nothing additional is marked useful at this stage."
        />

        <Band
          heading="Not yet — and what to do instead"
          note="These cost more than they return at this size. The line under each one is the thing worth doing first."
          items={stage.later}
          empty="Nothing is being held back at this stage."
          muted
        />

        {stage.workflows.length > 0 ? (
          <section className="mt-12">
            <h3 className="label rule-b pb-4">The workflows this stage runs</h3>
            <ul className="mt-4 grid gap-x-10 gap-y-1 sm:grid-cols-2">
              {stage.workflows.map((workflow) => (
                <li key={workflow.href}>
                  <Link
                    href={workflow.href}
                    className="link-index group text-small text-ink transition-colors hover:text-lime-deep"
                  >
                    <span className="font-medium">{workflow.t}</span>
                    <span className="ml-2 text-fine text-ink-soft">{workflow.n}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {stage.goals.length > 0 ? (
          <section className="mt-10">
            <h3 className="label rule-b pb-4">What people at this point usually want</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stage.goals.map((goal) => (
                <li key={goal.href}>
                  <Link
                    href={goal.href}
                    className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-fine text-ink-soft transition-colors hover:border-lime-deep hover:text-lime-deep"
                  >
                    {goal.t}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}

function Band({
  heading,
  note,
  items,
  empty,
  muted = false,
}: {
  heading: string;
  note: string;
  items: ExplorerItem[];
  empty: string;
  muted?: boolean;
}) {
  const byGroup = new Map<string, ExplorerItem[]>();
  for (const item of items) {
    const list = byGroup.get(item.g);
    if (list) list.push(item);
    else byGroup.set(item.g, [item]);
  }

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className={`type-title text-h5 ${muted ? "text-ink-soft" : "text-ink"}`}>{heading}</h3>
        <p className="tnum text-fine text-ink-soft">
          {items.length} {items.length === 1 ? "capability" : "capabilities"}
        </p>
      </div>
      <p className="mt-2 max-w-[56ch] text-small leading-relaxed text-ink-soft">{note}</p>

      {items.length === 0 ? (
        <p className="mt-5 rule-t pt-5 text-body text-ink-soft">{empty}</p>
      ) : (
        <div className="mt-6 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...byGroup.entries()].map(([group, groupItems]) => (
            <div key={group}>
              <h4 className="label rule-b pb-3">{group}</h4>
              <ul className="mt-3">
                {groupItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-index group py-2">
                      <span
                        className={`block text-small font-medium transition-colors group-hover:text-lime-deep ${
                          muted ? "text-ink-soft" : "text-ink"
                        }`}
                      >
                        {item.t}
                      </span>
                      <span className="mt-0.5 block max-w-[42ch] text-fine leading-snug text-ink-soft">
                        {item.n}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
