import type { Relevance } from "@/lib/types";

/**
 * How a capability's relevance at a stage is labelled.
 *
 * `later` is the one that earns this field. A capability page that tells a
 * one-person studio to adopt all sixty-four capabilities is useless; one that
 * says "not yet, and here is what to do first" is advice. The label has to
 * carry that honestly rather than dressing it up as a lesser priority.
 */
export const RELEVANCE_LABEL: Record<Relevance, string> = {
  core: "Core here",
  useful: "Useful here",
  later: "Later — not yet",
};

export const RELEVANCE_NOTE: Record<Relevance, string> = {
  core: "One of the capabilities that matters most at this stage.",
  useful: "Worth having once the core capabilities are running.",
  later: "Not yet. There is something more useful to do first, and it is named below.",
};
