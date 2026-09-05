import type { ReactNode } from "react";

import { Kicker } from "@/components/ui/primitives";

/**
 * The heading-beside-content band, balanced.
 *
 * The defect this replaces: a `Heading` alone in a narrow left column beside a
 * tall right column. The heading is three lines; the column beside it is eight
 * hundred pixels of index rows. The left column bottoms out a fifth of the way
 * down and the rest of it is void, so the band reads as content pushed to one
 * side of the page rather than as a composition.
 *
 * Three things fix it, and this component is the three:
 *
 *  - The lead belongs on the *left*, under the heading. It is the sentence that
 *    frames what the right column contains, so it reads first and it gives the
 *    left column real weight rather than filler.
 *  - `aside` takes whatever else the band already had lying around — a key, a
 *    pair of actions, a fact, a credit. These were previously scattered below
 *    or after the content; collected under the lead they finish the column.
 *  - The columns are near-equal (0.95 / 1.05) rather than 0.85 / 1.15, and the
 *    short one is vertically centred against the tall one instead of hanging
 *    from its top edge.
 *
 * `sticky` is for the genuinely long right columns — a ten-step sequence, a
 * five-stage run — where centring is not enough and the heading should travel
 * with the reader instead.
 */
export function SplitBand({
  kicker,
  title,
  lead,
  aside,
  children,
  size = "d3",
  sticky = false,
  tone = "light",
  id,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  /** The sentence that frames the column beside it. Belongs here, not there. */
  lead?: ReactNode;
  /** Whatever else the band carries: a key, actions, a fact, a credit. */
  aside?: ReactNode;
  children: ReactNode;
  size?: "d2" | "d3" | "d4";
  /** For right columns tall enough that centring cannot balance them. */
  sticky?: boolean;
  /** `dark` when the band sits on forest or a photograph. */
  tone?: "light" | "dark";
  id?: string;
  className?: string;
}) {
  const sizeClass = { d2: "text-d2", d3: "text-d3", d4: "text-d4" }[size];
  const leadTone = tone === "dark" ? "text-sage-bright" : "text-ink-soft";

  return (
    <div
      className={`grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] ${
        sticky ? "lg:items-start" : "lg:items-center"
      } ${className}`}
    >
      <div
        className={sticky ? "lg:sticky lg:top-32 lg:self-start" : ""}
        data-band-label={kicker}
        data-reveal
      >
        {kicker ? <Kicker className="mb-6">{kicker}</Kicker> : null}
        <h2 id={id} className={`max-w-[15ch] ${sizeClass} ${tone === "dark" ? "text-on-dark" : ""}`}>
          {title}
        </h2>
        {lead ? <p className={`mt-7 max-w-[42ch] text-lead ${leadTone}`}>{lead}</p> : null}
        {aside ? <div className="mt-10">{aside}</div> : null}
      </div>

      <div>{children}</div>
    </div>
  );
}
