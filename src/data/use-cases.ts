import type { UseCase } from "@/lib/types";
import { startingUseCases } from "./use-cases/starting";
import { deliveringUseCases } from "./use-cases/delivering";
import { scalingUseCases } from "./use-cases/scaling";

/**
 * The goals agencies arrive holding, grouped by where they sit on the path:
 * getting going, doing the work, growing the business.
 *
 * Every one carries a `notFor` section. The fastest way to be trusted by
 * someone evaluating you is to tell them when the answer is no.
 */
export const useCases: UseCase[] = [...startingUseCases, ...deliveringUseCases, ...scalingUseCases];

export const useCaseBySlug = new Map(useCases.map((u) => [u.slug, u]));

export const USE_CASE_PHASES = [
  { slug: "start", label: "Getting going", note: "Starting an agency, finding the first clients, building a way of working." },
  { slug: "deliver", label: "Doing the work", note: "Delivering consistently, faster, with less of it wasted." },
  { slug: "scale", label: "Growing the business", note: "More accounts, more people, larger clients." },
] as const;

export function useCasesInPhase(phase: UseCase["phase"]): UseCase[] {
  return useCases.filter((u) => u.phase === phase);
}

export function useCasesForStage(stage: string): UseCase[] {
  return useCases.filter((u) => (u.stages as string[]).includes(stage));
}
