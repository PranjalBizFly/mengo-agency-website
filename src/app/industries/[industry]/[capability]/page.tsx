import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { MarkerList, ProseRows, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { Related, relatedWorkflows } from "@/components/sections/related";
import { industriesForCapability } from "@/lib/relations";
import { stageBySlug } from "@/data/stages";
import { routes, absolute } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { industryCapabilities, industryCapability } from "@/data/industry-capabilities";
import { industryBySlug } from "@/data/industries";
import { capabilityBySlug } from "@/data/capabilities";

export function generateStaticParams() {
  return industryCapabilities.map((entry) => ({
    industry: entry.industry,
    capability: entry.capability,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string; capability: string }>;
}): Promise<Metadata> {
  const { industry: industrySlug, capability: capabilitySlug } = await params;
  const entry = industryCapability(industrySlug, capabilitySlug);
  const industry = industryBySlug.get(industrySlug);
  const capability = capabilityBySlug.get(capabilitySlug);
  if (!entry || !industry || !capability) return {};

  return pageMetadata({
    title: `${capability.title} for ${industry.title} clients`,
    description: entry.lead,
    path: routes.industryCapability(industrySlug, capabilitySlug),
    kicker: `${industry.title} · ${capability.title}`,
    modifiedTime: entry.updated,
  });
}

/**
 * The industry × capability archetype.
 *
 * These exist only where the pair genuinely changes the work — the pairs are
 * listed on each industry rather than crossed automatically, so a combination
 * with nothing true to say cannot be generated.
 *
 * The composition is the shortest on the site and deliberately so: it answers
 * one question, and padding it out to look like a fuller page would make it
 * exactly the thin SEO content the brief for this site rules out. The
 * `care` section is the load-bearing one in regulated sectors, which is why it
 * sits on the forest ground rather than at the foot of the page.
 */
export default async function IndustryCapabilityPage({
  params,
}: {
  params: Promise<{ industry: string; capability: string }>;
}) {
  const { industry: industrySlug, capability: capabilitySlug } = await params;
  const entry = industryCapability(industrySlug, capabilitySlug);
  const industry = industryBySlug.get(industrySlug);
  const capability = capabilityBySlug.get(capabilitySlug);
  if (!entry || !industry || !capability) notFound();

  /* Other sectors that publish this same capability, this one excluded. */
  const otherSectors = industriesForCapability(capability.slug).filter(
    (other) => other.slug !== industry.slug,
  );

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Industries", href: routes.industries() },
    { label: industry.title, href: routes.industry(industry.slug) },
    { label: capability.title, href: routes.industryCapability(industry.slug, capability.slug) },
  ];

  /* The industry's other capability pages. This is the main navigation route
     between them, because a reader here is browsing a sector rather than a
     capability. */
  const siblings = industry.capabilities
    .filter((slug) => slug !== capability.slug)
    .map((slug) => {
      const sibling = capabilityBySlug.get(slug);
      if (!sibling) return null;
      return {
        kicker: industry.title,
        title: sibling.title,
        body: sibling.job,
        href: routes.industryCapability(industry.slug, slug),
      };
    })
    .filter((s) => s !== null);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${capability.title} for ${industry.title} clients`,
            description: entry.lead,
            url: absolute(routes.industryCapability(industry.slug, capability.slug)),
            isPartOf: {
              "@type": "WebPage",
              name: industry.title,
              url: absolute(routes.industry(industry.slug)),
            },
            inLanguage: "en",
          },
        ]}
      />

      <RuleHero
        tone="warm"
        trail={trail}
        kicker={`${industry.title} · ${capability.title}`}
        title={entry.headline}
        lead={entry.lead}
        actions={
          <>
            <ButtonLink href={routes.capability(capability.group, capability.slug)} variant="secondary">
              {capability.title} in full
            </ButtonLink>
            <ButtonLink href={routes.industry(industry.slug)} variant="secondary">
              More on {industry.title}
            </ButtonLink>
          </>
        }
      />

      {/* What is different here ------------------------------------------
          This is the whole reason the page exists, so it gets the composition
          that lets an argument run at full measure rather than the index that
          compresses it — and it stops the page opening with the same
          heading-beside-list shape as the two sections below it. */}
      <Section tone="paper">
        <Heading
          kicker="What is different"
          title={`${capability.title} in this sector`}
          size="d3"
        />
        <ProseRows items={entry.difference} className="mt-14" />
      </Section>

      {/* The agency's own expertise --------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <Heading kicker="Irreplaceably yours" title="What the agency contributes" size="d3" width="full" />
            <Statement className="mt-9">
              Sector knowledge is what a client is buying here. It is also the thing nothing on this
              page produces.
            </Statement>
          </div>
          <MarkerList items={entry.expertise} />
        </div>
      </Section>

      {/* Care — the load-bearing section in regulated sectors ------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Handle with care" title="Constraints specific to this pairing" size="d3" width="full" />
            <p className="mt-7 max-w-[38rem] text-body leading-relaxed text-sage-bright" data-reveal>
              These are the sector&rsquo;s real exposures as they bear on this capability. Several are
              not satisfied by an editorial review alone — they need someone qualified, and in some
              cases the client&rsquo;s own compliance function.
            </p>
          </div>
          <MarkerList items={entry.care} tone="warn" />
        </div>
      </Section>

      {/* The same capability, elsewhere ------------------------------------
          Two axes out of this page: the other sectors that change this same
          capability, and the five sizes it reads differently at. Both derived
          from relations authored elsewhere. */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-2">
          <div>
            <p className="label rule-b pb-4">{capability.title} in other sectors</p>
            {otherSectors.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {otherSectors.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={routes.industryCapability(other.slug, capability.slug)}
                      className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-small text-ink-soft transition-colors hover:border-lime-deep hover:text-lime-deep"
                    >
                      {other.navLabel ?? other.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-[46ch] text-small leading-relaxed text-ink-soft">
                This is the only sector where {capability.title.toLowerCase()} changes enough to
                need its own page.
              </p>
            )}
          </div>

          <div>
            <p className="label rule-b pb-4">{capability.title} at each size</p>
            {capability.depth === "staged" ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {capability.stages.map((view) => {
                  const stage = stageBySlug.get(view.stage);
                  if (!stage) return null;
                  return (
                    <li key={view.stage}>
                      <Link
                        href={routes.capabilityStage(capability.group, capability.slug, view.stage)}
                        className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-small text-ink-soft transition-colors hover:border-lime-deep hover:text-lime-deep"
                      >
                        {stage.navLabel ?? stage.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-4 max-w-[46ch] text-small leading-relaxed text-ink-soft">
                This one does not change with size, so it has a single page rather than five.
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* The rest of this sector ------------------------------------------ */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="This sector" title={`Other ${industry.title} capabilities`} size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            These are the capabilities where working in this sector genuinely changes the job. The
            rest of the taxonomy applies here in the same way it applies anywhere.
          </p>
        </div>
        <StoryRows className="mt-12" columns={2} items={siblings} />
      </Section>

      <Related
        tone="warm"
        kicker="Related"
        title="Workflows this runs in"
        items={relatedWorkflows(capability.related.workflows)}
      />
    </>
  );
}
