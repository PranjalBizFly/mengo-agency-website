import Link from "next/link";
import { routes } from "@/lib/site";
import { capabilitiesInGroup } from "@/data/capabilities";
import { groupBySlug } from "@/data/capability-groups";
import type { GroupSlug, Lane } from "@/lib/types";

/**
 * The system, drawn as connected layers.
 *
 * The taxonomy answers "what can it do". This answers the question underneath
 * it: how do sixty-four separate capabilities amount to one thing? They stack.
 * Each layer is built on the one below and referenced by the one above, and
 * the stack opens and closes with a person — the same rule every workflow
 * follows, stated once at the scale of the whole product.
 *
 * Drawn as a single continuous rail rather than eight boxes, because the point
 * being made is the connection. Boxes would say the opposite.
 */

export interface SystemLayer {
  label: string;
  lane: Lane;
  /** What this layer is, in one or two sentences. */
  body: string;
  /** The capability groups that live in this layer. Empty for the human ends. */
  groups?: GroupSlug[];
  /** Named when the layer is not a capability group — the brief, the review. */
  note?: string;
}

const LANE_LABEL: Record<Lane, string> = { agency: "You", mengo: "Mengo" };

export const systemLayers: SystemLayer[] = [
  {
    label: "What you hand over",
    lane: "agency",
    body: "A client, a brief in a shape you decided, and your standard for what good looks like. Nothing starts without this, and it is the only input that cannot be produced by a system.",
    note: "Your client, your brief, your standard",
  },
  {
    label: "The stored layer",
    lane: "mengo",
    body: "The facts and the voice, held per client and referenced by everything above them. Set once and corrected as things change, rather than reassembled from memory at the start of each piece.",
    groups: ["foundation", "brand"],
  },
  {
    label: "The planning layer",
    lane: "mengo",
    body: "What the client will do, and when. A themed plan that reflows when the offer or the channel mix changes, instead of a calendar that has to be rebuilt.",
    groups: ["marketing"],
  },
  {
    label: "The production layer",
    lane: "mengo",
    body: "The volume: briefs, drafts and collateral in the shapes each channel actually takes. This is the layer that decides how many accounts a team can carry.",
    groups: ["content", "sales"],
  },
  {
    label: "The programme layer",
    lane: "mengo",
    body: "The mechanisms that keep running between campaigns — nurture, follow-up, retention. Built to a consistent anatomy and handed to the client's own sending tools.",
    groups: ["programs"],
  },
  {
    label: "The operating layer",
    lane: "mengo",
    body: "The controls around all of it: who can reach which client, what changed, and the written procedure a new hire is onboarded into.",
    groups: ["organization", "system"],
  },
  {
    label: "The final read",
    lane: "agency",
    body: "A named person decides that work is good enough to carry your name. This is a required step in every workflow published here, not a recommendation.",
    note: "Required, never automatic",
  },
  {
    label: "What reaches the client",
    lane: "agency",
    body: "Sent, published or presented by you, in your accounts, under your relationship. Mengo does not contact your clients under any circumstance.",
    note: "Your accounts, your relationship",
  },
];

/* ------------------------------------------------------------------------ */
/* Position in the stack                                                     */
/* ------------------------------------------------------------------------ */

/**
 * Where one capability sits in the system.
 *
 * A capability page can describe a capability perfectly and still leave the
 * reader with the impression that they are looking at item forty-one of
 * sixty-four. That impression is the thing this site most needs to defeat,
 * because the argument the whole product rests on is that the sixty-four are
 * one connected system rather than a feature list.
 *
 * So every capability page carries the stack, with its own layer lit and the
 * layers either side named. It is the same eight layers as the homepage, drawn
 * small: a rail of marks, then the layer this capability belongs to, then what
 * it is built on and what reads it. A reader who lands here from a search
 * result learns the shape of the whole product from one band.
 */
export function StackPosition({
  group,
  className = "",
}: {
  group: GroupSlug;
  className?: string;
}) {
  const index = systemLayers.findIndex((layer) => layer.groups?.includes(group));
  if (index < 0) return null;

  const layer = systemLayers[index];
  const below = systemLayers[index - 1];
  const above = systemLayers[index + 1];
  const here = groupBySlug.get(group);

  return (
    <div className={className}>
      {/* The rail. Eight marks, the current one lit — the whole system in one
          line, so the position is read before anything is read about it. */}
      <ol className="flex flex-wrap items-stretch gap-x-1 gap-y-4" data-reveal>
        {systemLayers.map((step, i) => {
          const current = i === index;
          return (
            <li key={step.label} className="min-w-0 flex-1 basis-[7rem]">
              <span
                aria-hidden
                className={`block h-[3px] rounded-full ${
                  current ? "bg-lime" : step.lane === "agency" ? "bg-on-dark/35" : "bg-on-dark/15"
                }`}
              />
              <span
                className={`mt-3 block text-fine leading-snug ${
                  current ? "font-semibold text-lime" : "text-on-dark/55"
                }`}
              >
                {current ? <span className="sr-only">This capability sits in: </span> : null}
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div data-reveal>
          <h3 className="text-d4 text-on-dark">{layer.label}</h3>
          <p className="mt-5 max-w-[46ch] text-body leading-relaxed text-sage-bright">
            {layer.body}
          </p>
        </div>

        {/* What it stands on and what stands on it. The two sentences that turn
            a position into a dependency. */}
        <dl className="grid gap-y-7" data-reveal>
          {below ? (
            <div className="rule-t pt-5">
              <dt className="label">Built on</dt>
              <dd className="mt-2.5 max-w-[52ch] text-body leading-relaxed text-sage-bright">
                <span className="text-on-dark">{below.label}.</span>{" "}
                {here ? `${here.title} cannot be set before it.` : null}
              </dd>
            </div>
          ) : null}
          {above ? (
            <div className="rule-t pt-5">
              <dt className="label">Read by</dt>
              <dd className="mt-2.5 max-w-[52ch] text-body leading-relaxed text-sage-bright">
                <span className="text-on-dark">{above.label}.</span> Change this and everything
                above it reflows rather than being rewritten.
              </dd>
            </div>
          ) : null}
          <div className="rule-t pt-5">
            <dt className="label">The layer holds</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {(layer.groups ?? []).map((slug) => {
                const sibling = groupBySlug.get(slug);
                if (!sibling) return null;
                return (
                  <Link
                    key={slug}
                    href={routes.capabilityGroup(slug)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-small transition-colors ${
                      slug === group
                        ? "border-lime text-lime"
                        : "border-line text-sage-bright hover:border-lime hover:text-lime"
                    }`}
                  >
                    {sibling.title}
                    <span className="tnum text-fine opacity-70">
                      {capabilitiesInGroup(slug).length}
                    </span>
                  </Link>
                );
              })}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* The stack, read across                                                    */
/* ------------------------------------------------------------------------ */

/**
 * The eight layers as a horizontal rail rather than a vertical one.
 *
 * The vertical rail is correct when the point is depth — one thing sitting on
 * another. On the homepage the point is the opposite: that the eight are one
 * connected run, and a column eight items tall reads as a list of eight
 * separate things while the reader scrolls past the connection. Set across, the
 * whole system is one object taken in at a glance, which is the claim the band
 * is making.
 *
 * The numeral carries the lane, as it does everywhere else on this site: filled
 * for a layer Mengo holds, outlined for one that stays with a person. The
 * connecting hairline runs from each numeral to the next and stops at the end
 * of a row, so a wrapped rail does not appear to loop back on itself.
 */
export function SystemRail({ className = "" }: { className?: string }) {
  return (
    <ol
      className={`grid gap-x-10 gap-y-10 sm:gap-y-14 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
      data-reveal-stagger
    >
      {systemLayers.map((layer, index) => (
        <li
          key={layer.label}
          className="relative min-w-0 sm:[&:nth-child(2n)_span:first-child]:hidden lg:[&:nth-child(2n)_span:first-child]:block lg:[&:nth-child(4n)_span:first-child]:hidden"
          data-reveal
        >
          {/* The rule runs to the next numeral. Hidden on the last column of a
              row, where it would point at nothing. */}
          <span
            aria-hidden
            className="absolute left-9 right-[-2.5rem] top-[0.9375rem] hidden h-px bg-line sm:block"
          />
          <span
            aria-hidden
            className="relative z-10 inline-flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full border border-lime-deep/35 bg-lime/15 text-lime-deep [.on-dark_&]:border-lime/45 [.on-dark_&]:text-lime text-fine font-semibold tnum"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="type-title text-h6">{layer.label}</h3>
            <span
              className={`label text-[0.6875rem] ${layer.lane === "mengo" ? "text-lime-deep" : ""}`}
            >
              <span className="sr-only">Carried by </span>
              {LANE_LABEL[layer.lane]}
            </span>
          </div>

          <p className="mt-3 text-small leading-relaxed text-ink-soft">{layer.body}</p>

          {layer.groups ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {layer.groups.map((slug) => {
                const group = groupBySlug.get(slug);
                if (!group) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={routes.capabilityGroup(slug)}
                      className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-3.5 text-fine transition-colors [@media(pointer:coarse)]:h-11 hover:border-lime-deep hover:text-lime-deep"
                    >
                      {group.title}
                      <span className="tnum text-ink-soft">{capabilitiesInGroup(slug).length}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : layer.note ? (
            <p className="mt-5 inline-flex rounded-full border border-dashed border-line px-3.5 py-2 text-fine text-ink-soft">
              {layer.note}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
