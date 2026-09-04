import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Section, Heading, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { LongformHero } from "@/components/sections/heroes";
import { StoryRows } from "@/components/ui/editorial";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, definedTermSchema } from "@/seo/schema";
import { glossaryTerms, glossaryBySlug } from "@/data/glossary";

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ term: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term: slug } = await params;
  const term = glossaryBySlug.get(slug);
  if (!term) return {};
  return entityMetadata(term);
}

/**
 * The glossary entry.
 *
 * Three fields, three sections, no photograph: definition, why it matters and
 * — where the term is routinely confused with another — what it is not. The
 * `why` is what makes a glossary worth reading rather than worth having, so it
 * gets the same weight as the definition rather than a smaller one.
 */
export default async function GlossaryTermPage({ params }: { params: Promise<{ term: string }> }) {
  const { term: slug } = await params;
  const term = glossaryBySlug.get(slug);
  if (!term) notFound();

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Resources", href: routes.resources() },
    { label: "Glossary", href: routes.glossary() },
    { label: term.title, href: routes.glossaryTerm(term.slug) },
  ];

  const seeAlso = term.seeAlso
    .map((related) => glossaryBySlug.get(related))
    .filter((entry) => entry !== undefined)
    .map((entry) => ({
      kicker: "Glossary",
      title: entry.title,
      body: entry.summary,
      href: routes.glossaryTerm(entry.slug),
    }));

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), definedTermSchema(term)]} />

      <LongformHero trail={trail} kicker="Glossary" title={term.title} lead={term.definition} />

      <Section tone="paper">
        <div className="max-w-[46rem]">
          <div className="rule-t pt-7">
            <h2 className="label">Why it matters to an agency</h2>
            <p className="mt-4 text-prose text-ink-soft" data-reveal>
              {term.why}
            </p>
          </div>

          {term.confusion ? (
            <div className="mt-10 rule-t pt-7">
              <h2 className="label">Commonly confused with</h2>
              <p className="mt-4 text-prose text-ink-soft" data-reveal>
                {term.confusion}
              </p>
            </div>
          ) : null}
        </div>
      </Section>

      {seeAlso.length > 0 ? (
        <Section tone="warm">
          <Heading kicker="See also" title="Related terms" size="d4" />
          <StoryRows className="mt-10" columns={2} items={seeAlso} />
        </Section>
      ) : null}

      <Section tone="paper">
        <div className="flex flex-wrap items-center gap-4" data-reveal>
          <ButtonLink href={routes.glossary()} variant="secondary">
            All {glossaryTerms.length} terms
          </ButtonLink>
          <Link
            href={routes.resources()}
            className="link-index text-body font-semibold text-lime-deep underline decoration-lime-deep decoration-[1.5px] underline-offset-[4px] transition-colors hover:text-ink"
          >
            Back to resources
          </Link>
        </div>
      </Section>
    </>
  );
}
