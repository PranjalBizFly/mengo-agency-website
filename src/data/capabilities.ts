import type { Capability, GroupSlug, StageSlug } from "@/lib/types";
import { foundationCapabilities } from "./capabilities/foundation";
import { brandCapabilities } from "./capabilities/brand";
import { marketingCoreCapabilities } from "./capabilities/marketing-core";
import { marketingVisibilityCapabilities } from "./capabilities/marketing-visibility";
import { salesCapabilities } from "./capabilities/sales";
import { contentCapabilities } from "./capabilities/content";
import { programsCapabilities } from "./capabilities/programs";
import { internalCapabilities } from "./capabilities/internal";

/**
 * The complete capability taxonomy.
 *
 * Split across files by group because a single file would be unreadable, and
 * recombined here so the rest of the site has one import. Order matters: it is
 * the order capabilities appear in navigation, in the group hubs and in the
 * sitemap, and it runs from the foundational to the administrative.
 */
export const capabilities: Capability[] = [
  ...foundationCapabilities,
  ...brandCapabilities,
  ...marketingCoreCapabilities,
  ...marketingVisibilityCapabilities,
  ...salesCapabilities,
  ...contentCapabilities,
  ...programsCapabilities,
  ...internalCapabilities,
];

export const capabilityBySlug = new Map(capabilities.map((c) => [c.slug, c]));

/** Capabilities in one group, in taxonomy order. */
export function capabilitiesInGroup(group: GroupSlug): Capability[] {
  return capabilities.filter((c) => c.group === group);
}

/**
 * The capabilities that publish a page per agency stage.
 *
 * `flat` capabilities are excluded by design — a settings screen does not mean
 * something different to a solo agency and a forty-person one, and generating
 * five near-identical pages for it would be the thin padding this site exists
 * not to produce.
 */
export const stagedCapabilities: Capability[] = capabilities.filter((c) => c.depth === "staged");

/** One capability seen from one stage, or undefined where the pair does not exist. */
export function capabilityStage(capabilitySlug: string, stage: StageSlug) {
  const capability = capabilityBySlug.get(capabilitySlug);
  if (!capability || capability.depth !== "staged") return undefined;
  const view = capability.stages.find((s) => s.stage === stage);
  if (!view) return undefined;
  return { capability, view };
}

/** Every (capability, stage) pair that has a page. Used for routes and the sitemap. */
export function capabilityStagePairs(): { capability: Capability; stage: StageSlug }[] {
  return stagedCapabilities.flatMap((capability) =>
    capability.stages.map((view) => ({ capability, stage: view.stage })),
  );
}

/** Capabilities most relevant to a stage, for the stage pages. */
export function capabilitiesForStage(stage: StageSlug, relevance: "core" | "useful" = "core"): Capability[] {
  return stagedCapabilities.filter((c) => c.stages.some((s) => s.stage === stage && s.relevance === relevance));
}
