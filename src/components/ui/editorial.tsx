import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { ComparisonRow, Ledger, Step, Term } from "@/lib/types";
import { Arrow, ButtonLink, Kicker } from "@/components/ui/primitives";

/**
 * The editorial devices.
 *
 * These are the site's vocabulary. Between them they cover every shape the
 * content takes — an attributed sequence, a two-lane division, a ruled index,
 * an ordered argument, a comparison, a linked index — which is what makes it
 * possible to build sixty pages with no card grids in them.
 *
 * The rule the whole set follows: content a reader *reads* gets a hairline and
 * the page's own ground; objects a reader *acts on* get a surface. A definition
 * is read. A link is acted on. That single distinction is why this site does
 * not look like a template.
 */

/* ------------------------------------------------------------------------ */
/* The ledger — two lanes, one boundary                                      */
/* ------------------------------------------------------------------------ */

/**
 * The signature device. The left lane is what the agency owns; the right is
 * what Mengo carries. The divider is a real rule rather than a gap, because
 * the argument is that there is a boundary and that it does not move.
 */
export function LedgerBlock({ ledger, className = "" }: { ledger: Ledger; className?: string }) {
  return (
    <div className={`ledger ${className}`} data-reveal>
      <Lane lane="agency" heading={ledger.agency.heading} note={ledger.agency.note} items={ledger.agency.items} />
      <div className="ledger-rule" aria-hidden />
      <Lane lane="mengo" heading={ledger.mengo.heading} note={ledger.mengo.note} items={ledger.mengo.items} />
    </div>
  );
}

function Lane({
  lane,
  heading,
  note,
  items,
}: {
  lane: "agency" | "mengo";
  heading: string;
  note: string;
  items: Term[];
}) {
  return (
    <div className="ledger-lane">
      <div className="lane-head">
        <span className="lane-mark" data-lane={lane} aria-hidden />
        <div>
          <h3 className="type-title text-h5">{heading}</h3>
          <p className="mt-1.5 text-small text-ink-soft">{note}</p>
        </div>
      </div>
      <dl>
        {items.map((item) => (
          <div key={item.label} className="lane-item">
            <dt className="type-title text-h7">{item.label}</dt>
            <dd className="mt-2 max-w-[46ch] text-body leading-relaxed text-ink-soft">{item.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* The spine — a sequence with owners                                        */
/* ------------------------------------------------------------------------ */

const LANE_LABEL: Record<Step["lane"], string> = {
  agency: "Agency",
  mengo: "Mengo",
};

/**
 * A workflow drawn as one continuous line rather than as a row of cards. The
 * node is filled where Mengo carries the step and outlined where the agency
 * does, so the shape of the process — agency at both ends — is legible before
 * a word is read.
 *
 * The lane is also announced in text for anyone who cannot see the node,
 * because the colour is carrying real meaning here and colour alone is never
 * an accessible way to carry meaning.
 */
export function Spine({ steps, className = "" }: { steps: Step[]; className?: string }) {
  return (
    <ol className={`spine ${className}`} data-reveal-stagger>
      {steps.map((step, i) => (
        <li key={step.title} className="spine-step" data-reveal>
          <span className="spine-node" data-lane={step.lane} aria-hidden>
            {i + 1}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="type-title text-h6">{step.title}</h3>
            <span
              className={`label text-[0.6875rem] ${step.lane === "mengo" ? "text-lime-deep" : ""}`}
            >
              <span className="sr-only">Owned by </span>
              {LANE_LABEL[step.lane]}
            </span>
          </div>
          <p className="mt-2.5 max-w-[52ch] text-body leading-relaxed text-ink-soft">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** A compact key for the spine's two node styles. */
export function SpineKey({ className = "" }: { className?: string }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-fine text-ink-soft ${className}`}>
      <span className="inline-flex items-center gap-2">
        <span
          aria-hidden
          className="inline-block h-3 w-3 rounded-full border-2 border-lane-agency bg-transparent"
        />
        Your agency
      </span>
      <span className="inline-flex items-center gap-2">
        <span aria-hidden className="inline-block h-3 w-3 rounded-full bg-lime" />
        Mengo
      </span>
    </p>
  );
}

/* ------------------------------------------------------------------------ */
/* The ladder — growth stages                                                */
/* ------------------------------------------------------------------------ */

export function Ladder({
  steps,
  className = "",
}: {
  steps: { label: string; shape: string; href: string }[];
  className?: string;
}) {
  return (
    <nav
      aria-label="Stages"
      className={`ladder ${className}`}
      style={{ "--ladder-cols": String(steps.length) } as CSSProperties}
      data-reveal-stagger
    >
      {steps.map((step, i) => (
        <Link
          key={step.href}
          href={step.href}
          className="ladder-step group"
          style={{ "--ladder-i": String(i) } as CSSProperties}
          data-reveal
        >
          <span className="ladder-tick" aria-hidden />
          <span className="label tnum block text-[0.6875rem]">Stage {i + 1}</span>
          <span className="mt-3 block type-title text-h6 transition-colors group-hover:text-lime-deep">
            {step.label}
          </span>
          <span className="mt-2.5 block max-w-[34ch] text-small leading-relaxed text-ink-soft">
            {step.shape}
          </span>
        </Link>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------------ */
/* Ruled indexes — for content that is read                                  */
/* ------------------------------------------------------------------------ */

/**
 * The workhorse for label-and-explanation content.
 *
 * `columns` is the count at the small breakpoint rather than a fixed track
 * count: 2 goes two-up early, 1 stays single-column until large. Entries with
 * long bodies pass 1 so they keep the full measure on a phone and a tablet and
 * still pair up on a desktop rather than leaving half a row empty.
 */
export function IndexRows({
  items,
  columns = 2,
  className = "",
}: {
  items: Term[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <dl
      className={`index-rows ${columns === 2 ? "sm:grid-cols-2" : "lg:grid-cols-2"} ${className}`}
      data-reveal-stagger
    >
      {items.map((item) => (
        <div key={item.label} data-reveal>
          <dt className="type-title text-h6">{item.label}</dt>
          <dd className="mt-2.5 max-w-[52ch] text-body leading-relaxed text-ink-soft">{item.body}</dd>
        </div>
      ))}
    </dl>
  );
}

/** The same anatomy for an ordered argument, with the tick replaced by a numeral. */
export function NumberedRows({
  items,
  columns = 1,
  className = "",
}: {
  items: Term[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <dl
      className={`index-rows ${columns === 2 ? "sm:grid-cols-2" : "lg:grid-cols-2"} ${className}`}
      data-numbered
      data-reveal-stagger
    >
      {items.map((item, i) => (
        <div key={item.label} data-reveal>
          <span className="index-num tnum" aria-hidden>
            {i + 1}
          </span>
          <dt className="type-title text-h6">{item.label}</dt>
          <dd className="mt-2.5 max-w-[52ch] text-body leading-relaxed text-ink-soft">{item.body}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A plain enumeration — outputs, inputs, constraints. */
export function MarkerList({
  items,
  className = "",
  tone = "default",
}: {
  items: string[];
  className?: string;
  /** "warn" marks a list of limits or cautions, where the tick reads as a rule. */
  tone?: "default" | "warn";
}) {
  return (
    <ul className={`space-y-3.5 ${className}`} data-reveal-stagger>
      {items.map((item) => (
        <li key={item} className="relative pl-7 text-body leading-relaxed text-ink-soft" data-reveal>
          <span
            aria-hidden
            className={
              tone === "warn"
                ? "absolute left-0 top-[0.72em] h-px w-3.5 bg-ink-soft"
                : "absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-lime-deep"
            }
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------------ */
/* Comparison                                                                */
/* ------------------------------------------------------------------------ */

/**
 * Genuinely tabular content, set as a table so it is navigable by assistive
 * technology as a table. It scrolls inside its own container rather than
 * widening the page, and the scroll region is focusable and labelled so a
 * keyboard user can reach it.
 */
export function CompareTable({
  rows,
  otherLabel,
  className = "",
}: {
  rows: ComparisonRow[];
  otherLabel: string;
  className?: string;
}) {
  return (
    <div
      className={`compare-scroll ${className}`}
      tabIndex={0}
      role="region"
      aria-label={`Comparison: ${otherLabel} and Mengo`}
      data-reveal
    >
      <table className="compare-table">
        <caption className="sr-only">
          A comparison of {otherLabel} and Mengo across delivery dimensions
        </caption>
        <thead>
          <tr>
            <th scope="col" className="label">
              Dimension
            </th>
            <th scope="col" className="type-title text-h7">
              {otherLabel}
            </th>
            <th scope="col" className="type-title text-h7 text-lime-deep" data-col="mengo">
              Mengo
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.dimension}>
              <th scope="row" className="type-title text-h7 font-semibold">
                {row.dimension}
              </th>
              <td className="text-body leading-relaxed text-ink-soft">{row.other}</td>
              <td className="text-body leading-relaxed text-ink-soft" data-col="mengo">
                {row.mengo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Story rows — the linked index                                             */
/* ------------------------------------------------------------------------ */

export interface StoryRowItem {
  title: string;
  body?: string;
  href: string;
  /** A short label in the row's own column — a kind, a stage, a date. */
  kicker?: string;
}

/**
 * The site's replacement for a card grid.
 *
 * A column of ruled links where the rule fills and an arrow travels. It stays
 * legible at any length — twenty rows read as an index, where twenty cards
 * read as a wall — and it costs nothing to hover because everything animating
 * is transform and opacity.
 */
export function StoryRows({
  items,
  columns = 2,
  className = "",
}: {
  items: StoryRowItem[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <div className={`story-rows ${className}`} data-cols={String(columns)} data-reveal-stagger>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="story-row group" data-reveal>
          <span className="story-row-rule" aria-hidden />
          <span className="story-row-inner">
            <span>
              {item.kicker ? <span className="label mb-2 block text-[0.6875rem]">{item.kicker}</span> : null}
              <span className="block type-title text-h6 transition-colors group-hover:text-lime-deep">
                {item.title}
              </span>
              {item.body ? (
                <span className="mt-2 block max-w-[52ch] text-body leading-relaxed text-ink-soft">
                  {item.body}
                </span>
              ) : null}
            </span>
            <span className="story-row-arrow" aria-hidden>
              <Arrow />
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Facts strip                                                               */
/* ------------------------------------------------------------------------ */

/**
 * Label and value pairs laid along a rule. Used for factual page metadata —
 * what triggers a workflow, who a playbook is for — never for statistics,
 * because the site has none it could honestly print.
 */
export function FactStrip({
  facts,
  className = "",
}: {
  facts: { label: string; value: ReactNode }[];
  className?: string;
}) {
  // Written out rather than interpolated: Tailwind extracts class names
  // statically, so a template literal here would emit no grid at all.
  const columns = facts.length >= 4 ? "lg:grid-cols-4" : facts.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <dl className={`grid gap-x-8 gap-y-6 rule-t pt-7 sm:grid-cols-2 ${columns} ${className}`} data-reveal>
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="label">{fact.label}</dt>
          <dd className="mt-2.5 text-body leading-relaxed text-ink-soft">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------------ */
/* Prose rows — a heading that stays with its argument                       */
/* ------------------------------------------------------------------------ */

/**
 * Named sections as heading-beside-prose, with the heading sticky.
 *
 * The difference between this and `IndexRows` is what the reader is doing. An
 * index is scanned: short label, short body, several at once. This is read —
 * one section at a time, at the full measure — and the heading stays in the
 * margin while its own paragraph scrolls, so a reader three hundred words in
 * still knows which question they are inside.
 *
 * It is the composition to reach for when a section has four things to say and
 * each of them needs a paragraph rather than a line. Using an index there is
 * what turns a page into an information dump.
 */
export function ProseRows({
  items,
  className = "",
  as: Tag = "h3",
}: {
  items: Term[];
  className?: string;
  /** `h3` under a section heading, `h2` when these are the section's own. */
  as?: "h2" | "h3";
}) {
  return (
    <div className={className} data-reveal-stagger>
      {items.map((item) => (
        <div
          key={item.label}
          className="rule-t grid gap-x-14 gap-y-3 py-9 lg:grid-cols-[minmax(0,20rem)_minmax(0,44rem)]"
          data-reveal
        >
          <Tag className="type-title text-h5 text-balance lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">
            {item.label}
          </Tag>
          <p className="text-prose text-ink-soft">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* The index band — context beside inventory                                 */
/* ------------------------------------------------------------------------ */

/**
 * A large set of destinations, presented so the reader understands the set
 * before meeting it.
 *
 * The defect this exists to remove: a heading followed by twenty-one ruled
 * rows carrying nothing but titles. That is a directory, and a reader has no
 * way to tell which row is worth a click, so they scroll past all of them. It
 * is also enormously expensive in height — twenty-one rows is two thousand
 * pixels to say nothing.
 *
 * So the band splits. The left column argues: what this set is, why it is
 * organised this way, and a door to the whole of it. The right column is the
 * inventory itself, compact — three columns of hairline-ruled links at the
 * body scale, which fits eighteen destinations in the height a ruled list
 * spends on six.
 *
 * The `action` is not optional in spirit. A band that shows part of a set and
 * offers no route to the rest is worse than one that shows all of it.
 */
export function IndexBand({
  kicker,
  title,
  lead,
  action,
  items,
  columns = 3,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  action?: { label: string; href: string };
  items: { label: string; href: string }[];
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] ${className}`}
    >
      <div data-reveal>
        {kicker ? (
          <Kicker pill className="mb-6">
            {kicker}
          </Kicker>
        ) : null}
        <h2 className="max-w-[16ch] text-d3 text-ink">{title}</h2>
        {lead ? <p className="mt-6 max-w-[38ch] text-lead text-ink-soft">{lead}</p> : null}
        {action ? (
          <div className="mt-9">
            <ButtonLink href={action.href} variant="secondary">
              {action.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>

      <ul
        className={`grid content-start gap-x-10 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
        data-reveal-stagger
      >
        {items.map((item) => (
          <li key={item.href} className="rule-t" data-reveal>
            <Link
              href={item.href}
              className="block py-4 text-body leading-snug text-ink-soft transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime-deep motion-safe:hover:translate-x-1"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
