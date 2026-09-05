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
  subtitle,
  lead,
  actions,
  aside,
  position,
}: {
  photo: Photo;
  kicker: string;
  title: ReactNode;
  /**
   * The promise line that belongs to the headline.
   *
   * Set as display type rather than as the first sentence of the lead, because
   * it is part of the brand statement rather than part of the explanation —
   * the same relationship the product site gives it.
   */
  subtitle?: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  /** A strip along the foot of the frame. Facts, a key, a short ledger. */
  aside?: ReactNode;
  position?: string;
}) {
  return (
    <section className="on-dark photo-band text-sage-bright">
      <PhotoGround photo={photo} scrim="hero" priority drift={false} position={position} />
      <div className="wrap flex min-h-[clamp(34rem,82svh,48rem)] flex-col justify-end pb-14 pt-(--header-h) md:pb-20">
        <div className="max-w-[52rem] pt-16 md:pt-24">
          <Kicker pill reveal className="mb-7">
            {kicker}
          </Kicker>
          <h1 className="text-d1 text-on-dark" data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            {title}
          </h1>
          {subtitle ? (
            <p
              className="mt-6 max-w-[30ch] font-display text-d4 font-semibold text-lime"
              data-reveal
              style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
            >
              {subtitle}
            </p>
          ) : null}
          <p
            className={`${subtitle ? "mt-8" : "mt-7"} max-w-[44ch] text-lead text-on-dark/85`}
            data-reveal
            style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
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

        {/* Licensing requires the attribution to be present and findable, not
            prominent — and on a first screen it is the one element competing
            with the argument. Demoted to the quietest text on the page. */}
        <Credit photo={photo} className="mt-8 text-[0.6875rem] text-sage/70" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

/**
 * The entity-page opening. Dark ground, no photograph.
 *
 * Dark because that is what makes a page read as part of this product rather
 * than as a document about it. Every opening on the product site sits on a dark
 * ground — a photograph under a scrim on the pages that have earned an image,
 * forest on the ones that have not — and the four hundred and ninety entity
 * pages here are the ones that set the site's character, because they are most
 * of it. Opening them on paper with a lime dash made each one read as the top
 * of a reference entry: correct, and inert.
 *
 * The ground is a photograph where the page has one and forest where it does
 * not. Both carry the same composition, so an entity page opens the same way
 * whether or not an asset exists for it — which matters, because the image
 * budget is a fixed pool used once each and most of these pages will never
 * have one. Forest is the honest absence of a photograph, not a placeholder
 * for one.
 *
 * The fact rail sits inside the opening rather than below it. What an entity
 * *is* — its group, what it removes, what triggers it — belongs on the first
 * screen beside the claim, not in a band underneath it.
 */
export function RuleHero({
  trail,
  kicker,
  title,
  lead,
  facts,
  actions,
  photo,
}: {
  trail: Crumb[];
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  facts?: ReactNode;
  actions?: ReactNode;
  /** The page's own photograph, where one has been assigned to it. */
  photo?: Photo | null;
}) {
  return (
    <section
      className={`on-dark relative isolate overflow-hidden pb-14 pt-10 text-sage-bright md:pb-16 md:pt-12 ${
        photo ? "photo-band" : "bg-forest"
      }`}
    >
      {photo ? <PhotoGround photo={photo} scrim="start" priority drift={false} /> : null}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(66%_86%_at_84%_0%,rgb(163_230_37/0.13),transparent_60%)]"
      />
      <div className="wrap">
        <Breadcrumbs trail={trail} className="mb-10" />

        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end">
          <div>
            <Kicker pill reveal className="mb-6">
              {kicker}
            </Kicker>
            <h1
              className="max-w-[20ch] text-d2 text-on-dark"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {title}
            </h1>
          </div>
          <p
            className="max-w-[44rem] text-lead text-on-dark/85"
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

        {facts ? <div className="mt-12">{facts}</div> : null}

        {photo ? <Credit photo={photo} className="mt-10 text-[0.6875rem] text-sage/70" /> : null}
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
            {/* d2, not d1. The product site sets every index and hub opening
                one scale below the homepage, and it is the right call: a
                directory that shouts as loudly as the front door flattens the
                hierarchy between them. Measured, mine was 70px against their
                60px at 1280. */}
            <h1
              className="max-w-[18ch] text-d2"
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
