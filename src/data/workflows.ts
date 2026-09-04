import type { Workflow } from "@/lib/types";
import { onboardingWorkflows } from "./workflows/onboarding";
import { planningWorkflows } from "./workflows/planning";
import { productionWorkflows } from "./workflows/production";
import { conversionWorkflows } from "./workflows/conversion";
import { operationsWorkflows } from "./workflows/operations";

/**
 * Every delivery workflow, in the order work actually happens.
 *
 * Grouped by phase because twenty-eight workflows in one undifferentiated list
 * is a wall rather than an index, and because the phases are how an agency
 * thinks about its own week: onboard, plan, produce, convert, operate.
 */
export const workflows: Workflow[] = [
  ...onboardingWorkflows,
  ...planningWorkflows,
  ...productionWorkflows,
  ...conversionWorkflows,
  ...operationsWorkflows,
];

export const workflowBySlug = new Map(workflows.map((w) => [w.slug, w]));

export const WORKFLOW_PHASES = [
  { slug: "onboarding", label: "Onboarding", note: "From a signed engagement to an approved plan." },
  { slug: "planning", label: "Planning", note: "Deciding what the client will do, before anyone makes anything." },
  { slug: "production", label: "Production", note: "Making the work, with review as a required step." },
  { slug: "conversion", label: "Conversion", note: "What happens once marketing has produced interest." },
  { slug: "operations", label: "Operations", note: "Running the agency rather than running a campaign." },
] as const;

export function workflowsInPhase(phase: Workflow["phase"]): Workflow[] {
  return workflows.filter((w) => w.phase === phase);
}

/** Workflows relevant to one agency stage. */
export function workflowsForStage(stage: string): Workflow[] {
  return workflows.filter((w) => (w.stages as string[]).includes(stage));
}
