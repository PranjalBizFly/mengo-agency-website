import type { Capability, Industry, Stage, UseCase, Workflow } from "@/lib/types";
import { capabilities, capabilityBySlug } from "@/data/capabilities";
import { industries, industryBySlug } from "@/data/industries";
import { industryCapabilities } from "@/data/industry-capabilities";
import { useCases, useCaseBySlug } from "@/data/use-cases";
import { workflows, workflowBySlug } from "@/data/workflows";
import { stages, stageBySlug } from "@/data/stages";

/**
 * The relationship graph, read in both directions.
 *
 * Almost every relation on this site is authored once and used once — an
 * industry lists the capabilities that work differently in it, a workflow lists
 * the capabilities it runs — which leaves each of those pages knowing its
 * children and none of them knowing their parents. A capability page could not
 * say which sectors it matters in, even though ten industry pages had already
 * said so.
 *
 * Inverting is the fix, and it has to be derivation rather than a second
 * authored list: a hand-kept reverse index is a promise to update two files
 * every time, and it will be wrong within a month. Everything here is computed
 * from the forward relation, so the two directions cannot disagree.
 *
 * Built once at module scope. These are used on 500 pages during a build, and
 * a linear scan per call would be a linear scan per page.
 */

function invert<T>(
  source: T[],
  keyOf: (item: T) => string,
  childrenOf: (item: T) => readonly string[],
): Map<string, string[]> {
  const index = new Map<string, string[]>();
  for (const item of source) {
    const parent = keyOf(item);
    for (const child of childrenOf(item)) {
      const list = index.get(child);
      if (list) {
        if (!list.includes(parent)) list.push(parent);
      } else {
        index.set(child, [parent]);
      }
    }
  }
  return index;
}

/* ---------------------------------------------------------- Capability ← */

/** Sectors that publish a page for this capability, from the curated pairs. */
const industriesByCapability = invert(
  industryCapabilities,
  (pair) => pair.industry,
  (pair) => [pair.capability],
);

/** Workflows that name this capability among the ones they run. */
const workflowsByCapability = invert(
  workflows,
  (workflow) => workflow.slug,
  (workflow) => workflow.related.capabilities,
);

/** Use cases that reach for this capability. */
const useCasesByCapability = invert(
  useCases,
  (useCase) => useCase.slug,
  (useCase) => useCase.related.capabilities,
);

/** Stages whose own page leads with this capability. */
const stagesByCapability = invert(
  stages,
  (stage) => stage.slug,
  (stage) => stage.capabilities,
);

/* -------------------------------------------------------------- Use case ← */

/** Sectors whose page recommends this use case. */
const industriesByUseCase = invert(
  industries,
  (industry) => industry.slug,
  (industry) => industry.related.useCases,
);

/* -------------------------------------------------------------- Workflow ← */

/** Sectors whose page recommends this workflow. */
const industriesByWorkflow = invert(
  industries,
  (industry) => industry.slug,
  (industry) => industry.related.workflows,
);

/** Use cases that run through this workflow. */
const useCasesByWorkflow = invert(
  useCases,
  (useCase) => useCase.slug,
  (useCase) => useCase.related.workflows,
);

/* ------------------------------------------------------------------ Public */

const resolve = <T>(slugs: string[] | undefined, lookup: Map<string, T>): T[] =>
  (slugs ?? []).map((slug) => lookup.get(slug)).filter((item): item is T => item !== undefined);

/** Client sectors with a page for this capability. */
export function industriesForCapability(capability: string): Industry[] {
  return resolve(industriesByCapability.get(capability), industryBySlug);
}

/** Delivery workflows that run this capability. */
export function workflowsForCapability(capability: string): Workflow[] {
  return resolve(workflowsByCapability.get(capability), workflowBySlug);
}

/** Use cases that reach for this capability. */
export function useCasesForCapability(capability: string): UseCase[] {
  return resolve(useCasesByCapability.get(capability), useCaseBySlug);
}

/** Stages whose own page leads with this capability. */
export function stagesForCapability(capability: string): Stage[] {
  return resolve(stagesByCapability.get(capability), stageBySlug as Map<string, Stage>);
}

/** Client sectors that recommend this use case. */
export function industriesForUseCase(useCase: string): Industry[] {
  return resolve(industriesByUseCase.get(useCase), industryBySlug);
}

/** Client sectors that recommend this workflow. */
export function industriesForWorkflow(workflow: string): Industry[] {
  return resolve(industriesByWorkflow.get(workflow), industryBySlug);
}

/** Use cases that run through this workflow. */
export function useCasesForWorkflow(workflow: string): UseCase[] {
  return resolve(useCasesByWorkflow.get(workflow), useCaseBySlug);
}

/**
 * The authored list first, then anything the inverted index adds.
 *
 * Order matters: a writer chose the first few deliberately, and a derived
 * relation should extend that judgement rather than reorder it.
 */
export function mergeSlugs(authored: readonly string[], derived: { slug: string }[]): string[] {
  const seen = new Set(authored);
  return [...authored, ...derived.map((d) => d.slug).filter((slug) => !seen.has(slug))];
}

/** Capabilities in one group, excluding the one being read. */
export function siblingCapabilities(capability: Capability): Capability[] {
  return capabilities.filter((c) => c.group === capability.group && c.slug !== capability.slug);
}

/**
 * The next step from a capability, chosen rather than listed.
 *
 * Every page ends somewhere, and "here are forty more links" is not an ending.
 * The rule is the reader's own position: a capability that a stage leads with
 * sends them to that stage; one that a workflow runs sends them to the
 * workflow; one that neither claims sends them to its group's adoption order,
 * which is the honest answer to "so where does this sit".
 */
export function nextStepForCapability(capability: Capability): {
  kicker: string;
  label: string;
  slug: string;
  kind: "workflow" | "use-case" | "group";
} {
  const workflow = workflowsForCapability(capability.slug)[0];
  if (workflow) {
    return {
      kicker: "See it running",
      label: workflow.navLabel ?? workflow.title,
      slug: workflow.slug,
      kind: "workflow",
    };
  }
  const useCase = useCasesForCapability(capability.slug)[0];
  if (useCase) {
    return {
      kicker: "Where it gets used",
      label: useCase.navLabel ?? useCase.title,
      slug: useCase.slug,
      kind: "use-case",
    };
  }
  return {
    kicker: "Where it sits",
    label: "What to adopt first in this group",
    slug: capability.group,
    kind: "group",
  };
}

/** Capabilities with no inbound relation at all. Used by the audit. */
export function orphanCapabilities(): string[] {
  return capabilities
    .filter(
      (c) =>
        !workflowsByCapability.has(c.slug) &&
        !useCasesByCapability.has(c.slug) &&
        !stagesByCapability.has(c.slug) &&
        !industriesByCapability.has(c.slug),
    )
    .map((c) => c.slug);
}

/** Capability slugs referenced by relations that no longer exist. */
export function danglingCapabilityRefs(): string[] {
  const referenced = new Set<string>([
    ...workflowsByCapability.keys(),
    ...useCasesByCapability.keys(),
    ...stagesByCapability.keys(),
    ...industriesByCapability.keys(),
  ]);
  return [...referenced].filter((slug) => !capabilityBySlug.has(slug));
}
