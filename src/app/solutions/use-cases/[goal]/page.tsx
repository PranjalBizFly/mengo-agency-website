import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section, Heading, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, NumberedRows, MarkerList, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { Related, relatedStages, relatedWorkflows } from "@/components/sections/related";
import { industriesForUseCase } from "@/lib/relations";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { useCases, useCaseBySlug } from "@/data/use-cases";

export function generateStaticParams() {
  return useCases.map((useCase) => ({ goal: useCase.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ goal: string }>;
}): Promise<Metadata> {
  const { goal: slug } = await params;
  const useCase = useCaseBySlug.get(slug);
  if (!useCase) return {};
  return entityMetadata(useCase);
}

/**
 * The goal archetype.
 *
 * Written for a reader who has already decided what they want and is working
 * out whether this is the route to it. So the composition is: their situation
 * stated back to them, why the obvious answer does not work, the approach as
 * an ordered argument, then two honest sections — what to expect, with no
 * numbers, and who this is not for.
 *
 * `notFor` is on the forest ground at full weight. A page that never says no
 * is not being read as an argument, and this audience knows it.
 */
export default async function UseCasePage({ params }: { params: Promise<{ goal: string }> }) {
  const { goal: slug } = await params;
  const useCase = useCaseBySlug.get(slug);
  if (!useCase) notFound();

  const heroPhoto = photo(`usecase:${useCase.slug}:hero`);
  const sectors = industriesForUseCase(useCase.slug);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Solutions", href: routes.solutions() },
    { label: "Use cases", href: routes.useCases() },
    { label: useCase.title, href: routes.useCase(useCase.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(useCase.faqs)]} />

      <RuleHero
        trail={trail}
        kicker="Use case"
        title={useCase.headline}
        lead={useCase.lead}
        facts={
          <div className="rule-t pt-8">
            <p className="label">The situation</p>
            <p className="mt-3 max-w-[56ch] text-lead text-ink">{useCase.situation}</p>
          </div>
        }
      />

      {/* Why the obvious answer fails ----------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading
            kicker="The obstacle"
            title="Why this is harder than it looks"
            size="d3"
            width="full"
          />
          <IndexRows items={useCase.obstacle} columns={1} />
        </div>
      </Section>

      {/* The approach ---------------------------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="The approach"
          title="What to do, in order"
          lead="Each step depends on the one before it. Skipping to the middle is the most common way this goes wrong."
          size="d3"
        />
        <NumberedRows items={useCase.approach} columns={1} className="mt-14" />
      </Section>

      {/* Illustration ---------------------------------------------------- */}
      {heroPhoto ? (
        <Section tone="paper">
          <Figure
            photo={heroPhoto}
            aspect="21/9"
            drift
            context="The situation"
            caption={useCase.situation}
          />
        </Section>
      ) : null}

      {/* Expectations ---------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="What to expect" title="Described without numbers" size="d3" width="full" />
            <p className="mt-7 max-w-[38rem] text-body leading-relaxed text-ink-soft" data-reveal>
              There are no percentages here because we have none we could stand behind. What follows
              is what changes structurally, which you can verify on your own numbers.
            </p>
          </div>
          <MarkerList items={useCase.expectations} />
        </div>
      </Section>

      {/* Not for --------------------------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Honestly" title="Who this is not for" size="d3" width="full" />
            <Statement className="mt-9">
              If one of these describes you, the answer is no — and finding that out here costs you
              nothing.
            </Statement>
          </div>
          <MarkerList items={useCase.notFor} tone="warn" />
        </div>
      </Section>

      {/* FAQ -------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="What people ask here" size="d3" width="full" />
          <FaqList faqs={useCase.faqs} />
        </div>
      </Section>

      {/* Onward ----------------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <Heading kicker="Most relevant at" title="These stages" size="d4" width="full" />
            <StoryRows className="mt-9" columns={1} items={relatedStages(useCase.stages)} />
          </div>
          <div>
            <Heading kicker="Runs through" title="These workflows" size="d4" width="full" />
            <StoryRows className="mt-9" columns={1} items={relatedWorkflows(useCase.related.workflows)} />
          </div>
        </div>

        {/* Which sectors this actually comes up in — derived from the sector
            pages that name it, so the two directions cannot disagree. */}
        {sectors.length > 0 ? (
          <div className="mt-14 rule-t pt-9">
            <div className="grid gap-x-14 gap-y-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
              <div>
                <p className="label">Comes up most in</p>
                <p className="mt-3 max-w-[36ch] text-small leading-relaxed text-ink-soft">
                  The sectors whose own pages name this job. The constraint differs in each, and
                  each page says how.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {sectors.map((industry) => (
                  <li key={industry.slug}>
                    <Link
                      href={routes.industry(industry.slug)}
                      className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-small text-ink-soft transition-colors hover:border-lime-deep hover:text-lime-deep"
                    >
                      {industry.navLabel ?? industry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        <div className="mt-14" data-reveal>
          <ButtonLink href={routes.useCases()} variant="secondary">
            All use cases
          </ButtonLink>
        </div>
      </Section>

      <Related
        tone="deep"
        kicker="Next"
        title="Weigh it against the alternatives"
        items={[
          {
            title: "Mengo vs hiring",
            body: "A hire adds judgement; a system adds throughput. When each is right.",
            href: routes.comparison("mengo-vs-hiring"),
          },
          {
            title: "Mengo vs carrying on as you are",
            body: "The honest comparison, including when staying put is correct.",
            href: routes.comparison("mengo-vs-manual-work"),
          },
        ]}
      />
    </>
  );
}
