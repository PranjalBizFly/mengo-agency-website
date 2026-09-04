import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { useCases, USE_CASE_PHASES, useCasesInPhase } from "@/data/use-cases";
import { stages } from "@/data/stages";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Solutions", href: routes.solutions() },
  { label: "Use cases", href: routes.useCases() },
];

export const metadata: Metadata = pageMetadata({
  title: "Use cases — what people are actually trying to do",
  description:
    "Twenty-one use cases, from opening the doors and finding a first client to standardising delivery and supporting enterprise accounts.",
  path: routes.useCases(),
  kicker: "Use cases",
});

/**
 * The use-case hub.
 *
 * Composed as a numbered index where each entry carries its own disqualifier
 * on the same row as the goal. Putting the "not for" line in the index rather
 * than only on the page means a reader who should not be here finds out in the
 * index, which saves them a click and costs us nothing worth having.
 *
 * Grouped by phase with anchors, because twenty-one in one run is a list
 * rather than a map.
 */
export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Use cases",
            "The jobs people arrive holding, and what each one actually requires.",
            routes.useCases(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Use cases"
        title="Start from what you are trying to do"
        lead="Some readers know their constraint better than their category. Each page states the situation, why the obvious answer does not work, what to do instead, and who it is not for."
        count={useCases.length}
        countLabel={`use cases in ${USE_CASE_PHASES.length} groups`}
        note="There are no percentages on any of them. We have no outcome data we could stand behind, and inventing some would be the fastest way to lose you."
      />

      <Section tone="paper" tight>
        <nav aria-label="Use case groups" className="rule-b pb-7">
          <ul className="flex flex-wrap gap-2">
            {USE_CASE_PHASES.map((phase) => (
              <li key={phase.slug}>
                <a
                  href={`#${phase.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-small transition-colors hover:border-lime-deep hover:text-lime-deep"
                >
                  {phase.label}
                  <span className="ml-2 text-fine text-ink-soft">
                    {useCasesInPhase(phase.slug).length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {USE_CASE_PHASES.map((phase) => (
          <section
            key={phase.slug}
            id={phase.slug}
            className="mt-16"
            style={{ scrollMarginTop: "calc(var(--header-h) + 2rem)" }}
          >
            <div className="rule-t pt-7">
              <h2 className="text-d4">{phase.label}</h2>
              <p className="mt-2.5 max-w-[52ch] text-body text-ink-soft">{phase.note}</p>
            </div>

            <ol>
              {useCasesInPhase(phase.slug).map((useCase, index) => (
                <li key={useCase.slug}>
                  <Link href={routes.useCase(useCase.slug)} className="group block rule-t py-8">
                    <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[3.5rem_minmax(0,1.15fr)_minmax(0,1fr)]">
                      <span className="label tnum hidden pt-1.5 lg:block" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="type-title text-h5 transition-colors group-hover:text-lime-deep">
                          {useCase.title}
                        </h3>
                        <p className="mt-3 max-w-[50ch] text-body leading-relaxed text-ink-soft">
                          {useCase.situation}
                        </p>
                      </div>
                      <div>
                        <p className="label mb-2.5 text-[0.6875rem]">Not for</p>
                        <p className="max-w-[46ch] text-fine leading-relaxed text-ink-soft">
                          {useCase.notFor[0]}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </Section>

      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="Another way in" title="Or start from your size" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            The stage pages describe the week, what breaks and what changes on the way to the next
            stage. If you are not sure which goal is yours, the stage that matches your Thursday
            usually points at it.
          </p>
        </div>
        <ul className="mt-12 flex flex-wrap gap-3" data-reveal>
          {stages.map((stage) => (
            <li key={stage.slug}>
              <Link
                href={routes.stage(stage.slug)}
                className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-5 text-body transition-colors hover:border-lime-deep hover:text-lime-deep"
              >
                {stage.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12" data-reveal>
          <ButtonLink href={routes.stages()} variant="secondary">
            Compare all five stages
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
