import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { useCases } from "@/data/use-cases";
import { stages } from "@/data/stages";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Use Cases", href: routes.useCases() },
];

export const metadata: Metadata = pageMetadata({
  title: "Use cases — what agencies are actually trying to do",
  description:
    "Six goals agencies arrive with: starting an agency, handling more clients, delivering faster, reducing repetitive work, standardising delivery and scaling without hiring too fast.",
  path: routes.useCases(),
  kicker: "Use cases",
});

/**
 * The use-cases hub.
 *
 * Composed as a numbered index where each entry carries its own "not for" line
 * on the same row as the goal. Putting the disqualifier in the index rather
 * than only on the page means a reader who should not be here finds out in the
 * index, which saves them a click and costs us nothing worth having.
 */
export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Use Cases",
            "The goals agencies arrive holding, and what each one actually requires.",
            routes.useCases(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="By goal"
        title="Start from what you are trying to do"
        lead="Some readers know their constraint better than their category. Each page states the situation, why the obvious answer does not work, what to do instead, and who it is not for."
        count={useCases.length}
        countLabel="use cases"
        note="There are no percentages on any of them. We have no agency outcome data we could stand behind, and inventing some would be the fastest way to lose you."
      />

      <Section tone="paper" tight>
        <ol data-reveal-stagger>
          {useCases.map((useCase, i) => (
            <li key={useCase.slug} data-reveal>
              <Link href={routes.useCase(useCase.slug)} className="group block rule-t py-9">
                <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[3.5rem_minmax(0,1.15fr)_minmax(0,1fr)]">
                  <span className="label tnum hidden pt-1.5 lg:block" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="type-title text-h5 transition-colors group-hover:text-lime-deep">
                      {useCase.title}
                    </h2>
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
          <ButtonLink href={routes.forAgencies()} variant="secondary">
            Compare all five stages
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
