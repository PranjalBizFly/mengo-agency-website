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

export function SystemLayers({ className = "" }: { className?: string }) {
  return (
    <ol className={`system-layers ${className}`} data-reveal-stagger>
      {systemLayers.map((layer, index) => (
        <li key={layer.label} className="system-layer" data-lane={layer.lane} data-reveal>
          <span className="system-layer-node" data-lane={layer.lane} aria-hidden>
            {index + 1}
          </span>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="type-title text-h5">{layer.label}</h3>
            <span
              className={`label text-[0.6875rem] ${layer.lane === "mengo" ? "text-lime-deep" : ""}`}
            >
              <span className="sr-only">Carried by </span>
              {LANE_LABEL[layer.lane]}
            </span>
          </div>

          <p className="mt-3 max-w-[56ch] text-body leading-relaxed text-ink-soft">{layer.body}</p>

          {layer.groups ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {layer.groups.map((slug) => {
                const group = groupBySlug.get(slug);
                if (!group) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={routes.capabilityGroup(slug)}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-small transition-colors hover:border-lime-deep hover:text-lime-deep"
                    >
                      {group.title}
                      <span className="tnum text-fine text-ink-soft">
                        {capabilitiesInGroup(slug).length}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : layer.note ? (
            <p className="mt-4 inline-flex items-center rounded-full border border-dashed border-line px-4 py-2 text-fine text-ink-soft">
              {layer.note}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
