import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, Heading, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { CompareTable, IndexRows, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { SectionRail } from "@/components/sections/SectionRail";
import { CtaBand } from "@/components/sections/longform";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { comparisons, comparisonBySlug } from "@/data/comparisons";

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ comparison: comparison.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}): Promise<Metadata> {
  const { comparison: slug } = await params;
  const comparison = comparisonBySlug.get(slug);
  if (!comparison) return {};
  return entityMetadata(comparison);
}

/**
 * The comparison archetype.
 *
 * Deliberately the only page type on the site with no photograph. A comparison
 * is read as evidence, and a picture on it reads as persuasion — which is the
 * opposite of what these pages are trying to establish.
 *
 * The composition puts "when the other option is right" *before* "when Mengo
 * is right". Ordering it the other way would let a reader stop at the
 * favourable half, and the concession is the part that earns the rest.
 */
export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison: slug } = await params;
  const comparison = comparisonBySlug.get(slug);
  if (!comparison) notFound();

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Compare", href: routes.compare() },
    { label: comparison.title, href: routes.comparison(comparison.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(comparison.faqs)]} />

      <RuleHero
        trail={trail}
        kicker="Comparison"
        title={comparison.headline}
        lead={comparison.lead}
        facts={
          <div className="rule-t pt-8">
            <p className="label">The question you are actually asking</p>
            <p className="mt-3 max-w-[56ch] text-lead text-ink">{comparison.question}</p>
          </div>
        }
      />

      <SectionRail />

      {/* The table ------------------------------------------------------- */}
      <Section tone="paper">
        <Heading
          kicker="Side by side"
          title={`${comparison.other} and Mengo`}
          lead="Every row is written to be defensible rather than favourable. Where the alternative is better, the row says so."
          size="d3"
        />
        <CompareTable rows={comparison.rows} otherLabel={comparison.other} className="mt-14" />
      </Section>

      {/* When the other option wins — deliberately first ----------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading
              kicker="Choose the other"
              title={`When ${comparison.other.toLowerCase()} is the right answer`}
              size="label"
              width="full"
            />
            <Statement className="mt-9">
              A comparison where the alternative never wins is an advertisement with a table in it.
            </Statement>
          </div>
          <IndexRows items={comparison.chooseOther} columns={1} />
        </div>
      </Section>

      {/* When Mengo fits -------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading kicker="Choose Mengo" title="When this is the better fit" size="label" width="full" />
          <IndexRows items={comparison.chooseMengo} columns={1} />
        </div>
      </Section>

      {/* Together --------------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
          <Heading kicker="In practice" title="They are not always alternatives" size="d3" width="full" />
          <p className="max-w-[48rem] text-lead text-ink-soft" data-reveal>
            {comparison.together}
          </p>
        </div>
      </Section>

      {/* FAQ --------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="Asked when weighing this up" size="d4" width="full" />
          <FaqList faqs={comparison.faqs} />
        </div>
      </Section>

      {/* Other comparisons -------------------------------------------------- */}
      <Section tone="deep">
        <Heading kicker="Other comparisons" title="The alternatives agencies actually weigh" size="d4" />
        <StoryRows
          className="mt-10"
          columns={2}
          items={comparisons
            .filter((other) => other.slug !== comparison.slug)
            .map((other) => ({
              title: other.title,
              body: other.question,
              href: routes.comparison(other.slug),
            }))}
        />
        <div className="mt-12 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.getStarted()}>Get started</ButtonLink>
          <ButtonLink href={routes.contact()} variant="secondary">
            Ask us something specific
          </ButtonLink>
        </div>
      </Section>
      <CtaBand
        eyebrow="Next step"
        title="The comparison only settles on your own numbers"
        body={`${comparison.question} Nothing on this page answers that for your practice — one account, one workflow and a measure you set in advance will.`}
        secondary={{ label: "All comparisons", href: routes.compare() }}
      />
    </>
  );
}
