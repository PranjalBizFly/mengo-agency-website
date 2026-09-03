import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, Heading, Kicker, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, MarkerList, Spine, SpineKey, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { Related, relatedCapabilities, relatedWorkflows } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { capabilities, capabilityBySlug } from "@/data/capabilities";

export function generateStaticParams() {
  return capabilities.map((capability) => ({ capability: capability.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ capability: string }>;
}): Promise<Metadata> {
  const { capability: slug } = await params;
  const capability = capabilityBySlug.get(slug);
  if (!capability) return {};
  return entityMetadata(capability);
}

/**
 * The capability archetype.
 *
 * Its distinguishing composition is the inputs/outputs pair set as two facing
 * columns across a rule — a shape used nowhere else on the site, so a reader
 * knows what kind of page they are on immediately.
 *
 * `limits` gets a full section rather than a footnote. An agency evaluating
 * whether to put client work through something looks for the edge of the claim
 * first, and burying it would cost more trust than the section costs space.
 */
export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ capability: string }>;
}) {
  const { capability: slug } = await params;
  const capability = capabilityBySlug.get(slug);
  if (!capability) notFound();

  const heroPhoto = photo(`capability:${capability.slug}:hero`);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Capabilities", href: routes.capabilities() },
    { label: capability.title, href: routes.capability(capability.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(capability.faqs)]} />

      <RuleHero
        tone="warm"
        trail={trail}
        kicker="Capability"
        title={capability.headline}
        lead={capability.lead}
        facts={
          <div className="rule-t pt-8">
            <p className="label">The job</p>
            <p className="mt-3 max-w-[52ch] text-lead text-ink">{capability.job}</p>
          </div>
        }
      />

      {/* In and out — the archetype's signature composition -------------- */}
      <Section tone="paper">
        <Heading
          kicker="In and out"
          title="What you hand over, and what comes back"
          lead="Concrete artefacts rather than outcomes. If something is not on the right-hand list, it is not produced."
          size="d3"
        />
        <div className="mt-14 grid gap-x-14 gap-y-12 lg:grid-cols-2">
          <div>
            <p className="label rule-t pt-5">You supply</p>
            <MarkerList items={capability.inputs} className="mt-7" />
          </div>
          <div>
            <p className="label rule-t pt-5 text-lime-deep">Mengo returns</p>
            <MarkerList items={capability.outputs} className="mt-7" />
          </div>
        </div>
      </Section>

      {/* The sequence ---------------------------------------------------- */}
      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="even">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Kicker className="mb-7">How it runs</Kicker>
              <h2 className="text-d3 text-on-dark">Step by step, with owners</h2>
              <SpineKey className="mt-8 text-sage-bright" />
              <Credit photo={heroPhoto} className="mt-10" />
            </div>
            <Spine steps={capability.sequence} />
          </div>
        </PhotoSection>
      ) : (
        <Section tone="deep">
          <Heading kicker="How it runs" title="Step by step, with owners" size="d3" />
          <SpineKey className="mt-8" />
          <Spine steps={capability.sequence} className="mt-8" />
        </Section>
      )}

      {/* Where judgement is required ------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading
            kicker="Your judgement"
            title="What no system decides for you"
            size="d3"
            width="full"
          />
          <IndexRows items={capability.judgement} columns={1} />
        </div>
      </Section>

      {/* Limits ----------------------------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Limits" title="What this does not do" size="d3" width="full" />
            <p className="mt-7 max-w-[38rem] text-body leading-relaxed text-sage-bright" data-reveal>
              Every capability page on this site carries this section. If a claim is not made here,
              it is not being made.
            </p>
          </div>
          <MarkerList items={capability.limits} tone="warn" />
        </div>
      </Section>

      {/* FAQ --------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="What agencies ask about this" size="d3" width="full" />
          <FaqList faqs={capability.faqs} />
        </div>
      </Section>

      {/* Onward ------------------------------------------------------------ */}
      <Section tone="warm">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <Heading kicker="Works with" title="Other capabilities" size="d4" width="full" />
            <StoryRows
              className="mt-9"
              columns={1}
              items={relatedCapabilities(capability.related.capabilities)}
            />
          </div>
          <div>
            <Heading kicker="Where it runs" title="In these workflows" size="d4" width="full" />
            <StoryRows className="mt-9" columns={1} items={relatedWorkflows(capability.related.workflows)} />
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.capabilities()} variant="secondary">
            All capabilities
          </ButtonLink>
          <ButtonLink href={routes.howItWorks()} variant="secondary">
            How it all fits together
          </ButtonLink>
        </div>
      </Section>

      <Related
        tone="deep"
        kicker="Next"
        title="Keep reading"
        items={[
          {
            title: "Responsible AI",
            body: "What we will and will not do with client work, stated plainly.",
            href: routes.responsibleAi(),
          },
          {
            title: "The Ownership Ledger",
            body: "A one-page method for deciding which parts of delivery stay with a person.",
            href: routes.framework("the-ownership-ledger"),
          },
        ]}
      />
    </>
  );
}
