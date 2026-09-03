import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, Heading, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, NumberedRows, MarkerList, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { Related, relatedCapabilities, relatedWorkflows } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { industries, industryBySlug } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = industryBySlug.get(slug);
  if (!industry) return {};
  return entityMetadata(industry);
}

/**
 * The industry archetype.
 *
 * Written for an agency person checking whether their sector's particular
 * awkwardness is understood, so the page leads with what is distinctive about
 * the sector and only reaches Mengo after the agency's own irreplaceable
 * expertise has been named.
 *
 * `care` is the section that matters most on the regulated pages, so it is
 * given the forest ground and a full section rather than a list at the bottom.
 */
export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: slug } = await params;
  const industry = industryBySlug.get(slug);
  if (!industry) notFound();

  const heroPhoto = photo(`industry:${industry.slug}:hero`);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Industries", href: routes.industries() },
    { label: industry.title, href: routes.industry(industry.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(industry.faqs)]} />

      <RuleHero
        tone="warm"
        trail={trail}
        kicker="Client sector"
        title={industry.headline}
        lead={industry.lead}
      />

      {/* What is distinctive -------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading
            kicker="The character of the sector"
            title="What makes marketing here different"
            size="d3"
            width="full"
          />
          <IndexRows items={industry.character} columns={1} />
        </div>
      </Section>

      {/* Delivery pressures ---------------------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="Delivery pressure"
          title="What that does to an agency's week"
          lead="Sector characteristics are not abstract. Each one converts into a specific operational cost on the agency delivering into it."
          size="d3"
        />
        <NumberedRows items={industry.pressures} columns={2} className="mt-14" />
      </Section>

      {/* The agency's expertise, then Mengo's support --------------------
          The photograph is optional and the section is not, so the fallback
          carries the same content on a forest ground. Content that only
          exists when an image does is content that quietly disappears the
          first time a photograph is unassigned. */}
      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="start" align="start">
          <Statement>
            Sector knowledge is the thing a client is buying. It is also the thing nothing here
            produces.
          </Statement>
          <div className="mt-12">
            <p className="label mb-6">Irreplaceably yours in this sector</p>
            <MarkerList items={industry.expertise} />
          </div>
          <Credit photo={heroPhoto} className="mt-12" />
        </PhotoSection>
      ) : (
        <Section tone="forest">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <Statement>
              Sector knowledge is the thing a client is buying. It is also the thing nothing here
              produces.
            </Statement>
            <div>
              <p className="label mb-6">Irreplaceably yours in this sector</p>
              <MarkerList items={industry.expertise} />
            </div>
          </div>
        </Section>
      )}

      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading kicker="Where Mengo helps" title="The load it can carry here" size="d3" width="full" />
          <IndexRows items={industry.support} columns={1} />
        </div>
      </Section>

      {/* Care ------------------------------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Handle with care" title="Constraints that must not be got wrong" size="d3" width="full" />
            <p className="mt-7 max-w-[38rem] text-body leading-relaxed text-sage-bright" data-reveal>
              These are the sector's real exposures. None of them are satisfied by a review step
              alone — they need someone qualified, and in several cases they need the client's own
              compliance function.
            </p>
          </div>
          <MarkerList items={industry.care} tone="warn" />
        </div>
      </Section>

      {/* FAQ -------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="Asked by agencies in this sector" size="d3" width="full" />
          <FaqList faqs={industry.faqs} />
        </div>
      </Section>

      {/* Onward ----------------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <Heading kicker="Most relevant here" title="Capabilities" size="d4" width="full" />
            <StoryRows
              className="mt-9"
              columns={1}
              items={relatedCapabilities(industry.related.capabilities)}
            />
          </div>
          <div>
            <Heading kicker="Most relevant here" title="Workflows" size="d4" width="full" />
            <StoryRows className="mt-9" columns={1} items={relatedWorkflows(industry.related.workflows)} />
          </div>
        </div>
        <div className="mt-14" data-reveal>
          <ButtonLink href={routes.industries()} variant="secondary">
            All industries
          </ButtonLink>
        </div>
      </Section>

      <Related
        tone="deep"
        kicker="Next"
        title="Before you run client work through anything"
        items={[
          {
            title: "Using AI in client work responsibly",
            body: "The concrete risks, and the process control that addresses each one.",
            href: routes.guide("using-ai-in-client-work-responsibly"),
          },
          {
            title: "Responsible AI",
            body: "Our own position, written to be quotable to a client.",
            href: routes.responsibleAi(),
          },
        ]}
      />
    </>
  );
}
