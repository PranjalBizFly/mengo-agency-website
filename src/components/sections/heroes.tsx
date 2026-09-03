import type { ReactNode } from "react";
import type { Photo } from "@/lib/images";
import { PhotoGround, Credit } from "@/components/ui/Photo";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Kicker } from "@/components/ui/primitives";

/**
 * Four hero archetypes.
 *
 * Four rather than one, because a site whose every page opens identically
 * reads as a template no matter how varied the sections beneath are. Each
 * archetype belongs to a family of pages, so a reader arriving at a workflow
 * page can tell it is a workflow page before reading the heading.
 *
 *   PhotoHero      the top-level pages. Full-bleed photograph, one column.
 *   RuleHero       entity pages. No photograph: a heavy rule, breadcrumbs and
 *                  a fact strip. Deliberately quiet, because these pages are
 *                  reference material and the picture belongs further down.
 *   IndexHero      hub pages. The heading sits beside a count and a short
 *                  statement of what the index is for.
 *   LongformHero   playbooks, guides, frameworks and journal pieces. Narrow
 *                  measure, metadata under the lead.
 *
 * All four share one entrance: label, then heading, then lead, then whatever
 * follows — released in that order by the reveal delays below.
 */

/* ------------------------------------------------------------------------ */

export function PhotoHero({
  photo,
  kicker,
  title,
  lead,
  actions,
  aside,
  position,
}: {
  photo: Photo;
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  /** A strip along the foot of the frame. Facts, a key, a short ledger. */
  aside?: ReactNode;
  position?: string;
}) {
  return (
    <section className="on-dark photo-band text-sage-bright">
      <PhotoGround photo={photo} scrim="hero" priority drift={false} position={position} />
      <div className="wrap flex min-h-[clamp(30rem,78svh,46rem)] flex-col justify-end pb-14 pt-(--header-h) md:pb-20">
        <div className="max-w-[52rem] pt-16 md:pt-24">
          <Kicker reveal className="mb-7">
            {kicker}
          </Kicker>
          <h1 className="text-d1 text-on-dark" data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            {title}
          </h1>
          <p
            className="mt-7 max-w-[46rem] text-lead text-sage-bright"
            data-reveal
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            {lead}
          </p>
          {actions ? (
            <div
              className="mt-10 flex flex-wrap gap-3"
              data-reveal
              style={{ "--reveal-delay": "270ms" } as React.CSSProperties}
            >
              {actions}
            </div>
          ) : null}
        </div>

        {aside ? (
          <div className="mt-14" data-reveal style={{ "--reveal-delay": "360ms" } as React.CSSProperties}>
            {aside}
          </div>
        ) : null}

        <Credit photo={photo} className="mt-10" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

/**
 * The entity-page opening. No photograph by design.
 *
 * These pages are reference material and they are read in runs — an agency
 * evaluating this will open four workflows in four tabs. A full-bleed
 * photograph on each would make them indistinguishable and slow. The picture
 * appears once, further down, where it illustrates something.
 */
export function RuleHero({
  trail,
  kicker,
  title,
  lead,
  facts,
  actions,
  tone = "paper",
}: {
  trail: Crumb[];
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  facts?: ReactNode;
  actions?: ReactNode;
  tone?: "paper" | "warm";
}) {
  return (
    <section className={`${tone === "warm" ? "bg-paper-warm" : "bg-paper"} pb-16 pt-10 md:pb-20 md:pt-14`}>
      <div className="wrap">
        <Breadcrumbs trail={trail} className="mb-10" />

        {/* The heavy rule is this archetype's whole visual identity: it does
            the job a hero image would, at no bandwidth cost. */}
        <div className="h-[3px] w-16 bg-lime" aria-hidden data-reveal />

        <div className="mt-9 grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end">
          <div>
            <Kicker reveal className="mb-6">
              {kicker}
            </Kicker>
            <h1
              className="max-w-[20ch] text-d2"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {title}
            </h1>
          </div>
          <p
            className="max-w-[44rem] text-lead text-ink-soft"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            {lead}
          </p>
        </div>

        {actions ? (
          <div
            className="mt-10 flex flex-wrap gap-3"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            {actions}
          </div>
        ) : null}

        {facts ? <div className="mt-14">{facts}</div> : null}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

/** The hub opening: what this index contains and what it is for. */
export function IndexHero({
  trail,
  kicker,
  title,
  lead,
  count,
  countLabel,
  note,
}: {
  trail: Crumb[];
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  count?: number;
  countLabel?: string;
  /** A second paragraph that says how to use the index. */
  note?: ReactNode;
}) {
  return (
    <section className="bg-paper pb-14 pt-10 md:pb-18 md:pt-14">
      <div className="wrap">
        <Breadcrumbs trail={trail} className="mb-10" />

        <div className="grid gap-x-12 gap-y-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <Kicker reveal className="mb-6">
              {kicker}
            </Kicker>
            <h1
              className="max-w-[16ch] text-d1"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {title}
            </h1>
          </div>

          <div data-reveal style={{ "--reveal-delay": "170ms" } as React.CSSProperties}>
            {count !== undefined && countLabel ? (
              <p className="label tnum mb-4 rule-t pt-4">
                {count} {countLabel}
              </p>
            ) : null}
            <p className="text-lead text-ink-soft">{lead}</p>
            {note ? <p className="mt-5 text-body leading-relaxed text-ink-soft">{note}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

/** The long-form opening. Narrow measure, metadata beneath the lead. */
export function LongformHero({
  trail,
  kicker,
  title,
  lead,
  meta,
}: {
  trail: Crumb[];
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="bg-paper pb-12 pt-10 md:pb-16 md:pt-14">
      <div className="wrap">
        <Breadcrumbs trail={trail} className="mb-10" />
        <div className="max-w-[46rem]">
          <Kicker reveal className="mb-6">
            {kicker}
          </Kicker>
          <h1 className="text-d2" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {title}
          </h1>
          <p
            className="mt-7 text-lead text-ink-soft"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            {lead}
          </p>

          {meta && meta.length > 0 ? (
            <dl
              className="mt-10 flex flex-wrap gap-x-10 gap-y-4 rule-t pt-6"
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="label">{item.label}</dt>
                  <dd className="mt-1.5 text-small text-ink-soft">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </section>
  );
}
