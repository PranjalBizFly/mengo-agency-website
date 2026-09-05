import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, Heading, Kicker, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, NumberedRows, MarkerList, ProseRows, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { SectionRail } from "@/components/sections/SectionRail";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { Related, relatedCapabilities, relatedWorkflows } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { CtaBand } from "@/components/sections/longform";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { industries, industryBySlug } from "@/data/industries";
import { capabilityBySlug } from "@/data/capabilities";
import { industryCapability } from "@/data/industry-capabilities";

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

  /* This sector's own capability pages. These are curated pairs rather than a
     cross product, so every one has something true to say. */
  const sectorCapabilities = industry.capabilities
    .map((slug) => {
      const capability = capabilityBySlug.get(slug);
      if (!capability) return null;
      return {
        kicker: capability.title,
        title: `${capability.title} for ${industry.title} clients`,
        body: industryCapability(industry.slug, slug)?.headline ?? capability.job,
        href: routes.industryCapability(industry.slug, slug),
      };
    })
    .filter((c) => c !== null);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Industries", href: routes.industries() },
    { label: industry.title, href: routes.industry(industry.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(industry.faqs)]} />

      <RuleHero
        photo={heroPhoto}
        trail={trail}
        kicker="Client sector"
        title={industry.headline}
        lead={industry.lead}
      />

      <SectionRail />

      {/* What is distinctive --------------------------------------------
          Prose rows rather than an index: each of these is an argument that
          needs a paragraph, and the sticky label keeps the reader oriented
          inside it. */}
      <Section tone="paper">
        <div className="grid gap-x-16 gap-y-9 lg:grid-cols-2 lg:items-start">
          <Heading
            kicker="The character of the sector"
            title="What makes marketing here different"
            size="d3"
            width="full"
          />
          <p className="max-w-[46ch] text-lead text-ink-soft" data-reveal>
            Four things that are true of this sector and not of the one next to it. Everything further down the page follows from them.
          </p>
        </div>
        <ProseRows items={industry.character} className="mt-14" />
      </Section>

      {/* Delivery pressures ---------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-16 gap-y-9 lg:grid-cols-2 lg:items-start">
          <Heading
            kicker="Delivery pressure"
            title="What that does to the delivery week"
            size="label"
            width="full"
          />
          <p className="max-w-[46ch] text-lead text-ink-soft" data-reveal>
            Sector characteristics are not abstract. Each one converts into a specific operational cost on the agency delivering into it.
          </p>
        </div>
        <NumberedRows items={industry.pressures} columns={2} className="mt-14" />
      </Section>

      {/* The agency's expertise, then Mengo's support --------------------
          The photograph is optional and the section is not, so the fallback
          carries the same content on a forest ground. Content that only
          exists when an image does is content that quietly disappears the
          first time a photograph is unassigned. */}
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

      <Section tone="paper">
        <div className="grid gap-x-16 gap-y-9 lg:grid-cols-2 lg:items-start">
          <Heading kicker="Where Mengo helps" title="The load it can carry here" size="d3" width="full" />
          <p className="max-w-[42rem] text-body leading-relaxed text-ink-soft" data-reveal>
            The structural layer, in this sector&rsquo;s shape. None of it reaches a client without
            somebody named signing it off, and in the regulated sectors that person is not always in
            your building.
          </p>
        </div>
        <IndexRows items={industry.support} columns={2} className="mt-14" />
      </Section>

      {/* Care -------------------------------------------------------------
          A statement, then the list. On the pages where this section matters
          most it is the most important thing on them, and burying it beside a
          heading in the same grid as everything else said otherwise. */}
      <Section tone="forest">
        <Kicker className="mb-7">Handle with care</Kicker>
        <h2 className="max-w-[22ch] text-d2 text-on-dark">
          Constraints that must not be got wrong
        </h2>
        <p className="mt-8 max-w-[52rem] text-lead text-sage-bright" data-reveal>
          These are the sector&rsquo;s real exposures. None of them is satisfied by a review step
          alone — they need somebody qualified, and in several cases they need the client&rsquo;s own
          compliance function.
        </p>
        <MarkerList items={industry.care} tone="warn" className="mt-12 lg:columns-2 lg:gap-x-14 lg:[&>li]:break-inside-avoid" />
      </Section>

      {/* FAQ -------------------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="Asked by agencies in this sector" size="d4" width="full" />
          <FaqList faqs={industry.faqs} />
        </div>
      </Section>

      {/* This sector's capability pages ---------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-16 gap-y-9 lg:grid-cols-2 lg:items-start">
          <Heading
              kicker="In this sector"
              title={`${industry.capabilities.length} capabilities that work differently here`}
              size="label"
            width="full"
          />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            These are the capabilities where working in this sector genuinely changes the job — the
            constraints, the review requirements and what the agency has to supply. The rest of the
            taxonomy applies here the same way it applies anywhere.
          </p>
        </div>
        <StoryRows className="mt-12" columns={2} items={sectorCapabilities} />
      </Section>

      {/* Onward ----------------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <Heading kicker="Most relevant here" title="Capabilities in general" size="d4" width="full" />
            <StoryRows
              className="mt-9"
              columns={1}
              items={relatedCapabilities(industry.capabilities.slice(0, 3))}
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
      <CtaBand
        eyebrow="Next step"
        title="Start with the constraint, not the capability"
        body={`In ${industry.title} the thing that decides what the marketing can be is usually the constraint rather than the idea. Read those first, then pick one account to run through a single workflow.`}
        secondary={{ label: "How it works", href: routes.howItWorks() }}
      />
    </>
  );
}
