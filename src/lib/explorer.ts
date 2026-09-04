import { routes } from "@/lib/site";
import { stages } from "@/data/stages";
import { stagedCapabilities } from "@/data/capabilities";
import { groupBySlug } from "@/data/capability-groups";
import { workflowsForStage } from "@/data/workflows";
import { useCasesForStage } from "@/data/use-cases";
import type { Relevance } from "@/lib/types";

/**
 * The payload behind the capability explorer.
 *
 * Built on the server from the same `CapabilityStage` records the individual
 * pages render, so the explorer cannot recommend something a page contradicts.
 * It is deliberately flat and short-keyed: the whole thing crosses the wire as
 * part of the capabilities hub's payload, and five stages times fifty-two
 * capabilities is enough rows to care about.
 *
 * `later` carries `instead` because that is the honest half of the answer, and
 * an explorer that only ever adds things to the list is a shopping cart.
 */

export interface ExplorerItem {
  /** Capability title. */
  t: string;
  href: string;
  /** Capability group title, for the grouping heading. */
  g: string;
  /** The stage-specific headline, or the alternative when relevance is later. */
  n: string;
}

export interface ExplorerStage {
  slug: string;
  label: string;
  shape: string;
  href: string;
  core: ExplorerItem[];
  useful: ExplorerItem[];
  later: ExplorerItem[];
  workflows: { t: string; href: string; n: string }[];
  goals: { t: string; href: string }[];
}

function itemsFor(stage: string, relevance: Relevance): ExplorerItem[] {
  return stagedCapabilities
    .map((capability) => {
      const view = capability.stages.find((s) => s.stage === stage && s.relevance === relevance);
      if (!view) return null;
      return {
        t: capability.title,
        href: routes.capabilityStage(capability.group, capability.slug, stage),
        g: groupBySlug.get(capability.group)?.title ?? capability.group,
        n: relevance === "later" ? (view.insteadDoThis ?? view.headline) : view.headline,
      } satisfies ExplorerItem;
    })
    .filter((item): item is ExplorerItem => item !== null);
}

export const explorerStages: ExplorerStage[] = stages.map((stage) => ({
  slug: stage.slug,
  label: stage.navLabel ?? stage.title,
  shape: stage.shape,
  href: routes.stage(stage.slug),
  core: itemsFor(stage.slug, "core"),
  useful: itemsFor(stage.slug, "useful"),
  later: itemsFor(stage.slug, "later"),
  workflows: workflowsForStage(stage.slug)
    .slice(0, 6)
    .map((workflow) => ({
      t: workflow.navLabel ?? workflow.title,
      href: routes.workflow(workflow.slug),
      n: workflow.trigger,
    })),
  goals: useCasesForStage(stage.slug)
    .slice(0, 6)
    .map((goal) => ({ t: goal.navLabel ?? goal.title, href: routes.useCase(goal.slug) })),
}));
