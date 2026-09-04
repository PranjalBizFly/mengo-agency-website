import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import {
  allEntities,
  allPaths,
  capabilityStageRoutes,
  industryCapabilityRoutes,
  kindLabel,
  routeCounts,
  staticRoutes,
  urlFor,
} from "@/lib/registry";
import type { Kind } from "@/lib/types";
import { capabilityBySlug } from "@/data/capabilities";
import { capabilityGroups } from "@/data/capability-groups";
import { stageBySlug } from "@/data/stages";
import { industryBySlug } from "@/data/industries";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Sitemap", href: routes.sitemapPage() },
];

export const metadata: Metadata = pageMetadata({
  title: "Sitemap — every page on this site",
  description: "A complete index of every page published here, generated from the same registry as the XML sitemap.",
  path: routes.sitemapPage(),
  kicker: "Sitemap",
});

/**
 * The human sitemap.
 *
 * Generated from the same registry as sitemap.xml, so the two cannot disagree
 * and neither can list a page that does not exist. At five hundred pages this
 * is also the only place the whole site is enumerated — the footer indexes
 * sections, and this indexes pages.
 *
 * The two large generated families are grouped by their parent rather than
 * listed flat, because 260 capability-stage links in one column is a wall
 * rather than an index.
 */
const ORDER: Kind[] = [
  "stage",
  "capability-group",
  "capability",
  "workflow",
  "industry",
  "use-case",
  "comparison",
  "framework",
  "playbook",
  "guide",
  "article",
  "glossary",
  "company",
  "legal",
];

export default function SitemapPage() {
  const counts = routeCounts();

  const groups = ORDER.map((kind) => ({
    kind,
    label: kindLabel(kind),
    entities: allEntities.filter((entity) => entity.kind === kind),
  })).filter((group) => group.entities.length > 0);

  const staticGroups = [...new Set(staticRoutes.map((route) => route.group))];

  /* Capability-stage pages, grouped by capability. */
  const stageRoutes = capabilityStageRoutes();
  const byCapability = new Map<string, { path: string; stage: string }[]>();
  for (const route of stageRoutes) {
    const list = byCapability.get(route.capability) ?? [];
    list.push({ path: route.path, stage: route.stage });
    byCapability.set(route.capability, list);
  }

  /* Industry-capability pages, grouped by industry. */
  const industryRoutes = industryCapabilityRoutes();
  const byIndustry = new Map<string, { path: string; capability: string }[]>();
  for (const route of industryRoutes) {
    const list = byIndustry.get(route.industry) ?? [];
    list.push({ path: route.path, capability: route.capability });
    byIndustry.set(route.industry, list);
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema(TRAIL)} />

      <IndexHero
        trail={TRAIL}
        kicker="Index"
        title="Every page on this site"
        lead="Generated from the same registry as the XML sitemap, so the two cannot disagree."
        count={allPaths().length}
        countLabel="pages"
        note={`${counts.entities} content pages, ${counts.capabilityStages} capability-by-stage pages, ${counts.industryCapabilities} industry capability pages, and ${counts.static} hubs and top-level pages.`}
      />

      <Section tone="paper">
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {staticGroups.map((group) => (
            <div key={group}>
              <h2 className="label rule-b pb-4">{group}</h2>
              <ul className="mt-4 space-y-0.5">
                {staticRoutes
                  .filter((route) => route.group === group)
                  .map((route) => (
                    <li key={route.path}>
                      <Link
                        href={route.path}
                        className="link-index text-small text-ink-soft transition-colors hover:text-lime-deep"
                      >
                        {route.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          {groups.map((group) => (
            <div key={group.kind}>
              <h2 className="label rule-b pb-4">
                {group.label} ({group.entities.length})
              </h2>
              <ul className="mt-4 space-y-0.5">
                {group.entities.map((entity) => (
                  <li key={`${entity.kind}-${entity.slug}`}>
                    <Link
                      href={urlFor(entity)}
                      className="link-index text-small text-ink-soft transition-colors hover:text-lime-deep"
                    >
                      {entity.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Capability × stage, grouped by capability ---------------------- */}
      <Section tone="warm">
        <Heading
          kicker="By stage"
          title={`${stageRoutes.length} capability pages, one per stage`}
          lead="Every capability whose meaning changes with agency size, read from each of the five stages."
          size="d3"
        />
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((group) => {
            const members = [...byCapability.entries()].filter(
              ([slug]) => capabilityBySlug.get(slug)?.group === group.slug,
            );
            if (members.length === 0) return null;
            return (
              <div key={group.slug}>
                <h3 className="label rule-b pb-4">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {members.map(([slug, routesForCapability]) => {
                    const capability = capabilityBySlug.get(slug);
                    if (!capability) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={routes.capability(capability.group, capability.slug)}
                          className="link-index text-small font-medium text-ink transition-colors hover:text-lime-deep"
                        >
                          {capability.title}
                        </Link>
                        {/* The five stage links are chips rather than a comma
                            list: at this density they are the most-tapped
                            targets on the page and need the touch minimum. */}
                        <ul className="mt-1 flex flex-wrap gap-1.5">
                          {routesForCapability.map((route) => (
                            <li key={route.path}>
                              <Link
                                href={route.path}
                                className="inline-flex min-h-11 items-center rounded-full border border-line px-3 text-fine text-ink-soft transition-colors hover:border-lime-deep hover:text-lime-deep"
                              >
                                {stageBySlug.get(route.stage as never)?.navLabel ?? route.stage}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Industry × capability ------------------------------------------- */}
      <Section tone="paper">
        <Heading
          kicker="By client sector"
          title={`${industryRoutes.length} industry capability pages`}
          lead="Curated pairs only — the combinations where working in that sector genuinely changes the capability."
          size="d3"
        />
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[...byIndustry.entries()].map(([industrySlug, list]) => {
            const industry = industryBySlug.get(industrySlug);
            if (!industry) return null;
            return (
              <div key={industrySlug}>
                <h3 className="label rule-b pb-4">
                  <Link href={routes.industry(industrySlug)} className="transition-colors hover:text-lime-deep">
                    {industry.title}
                  </Link>
                </h3>
                <ul className="mt-4 space-y-0.5">
                  {list.map((route) => (
                    <li key={route.path}>
                      <Link
                        href={route.path}
                        className="link-index text-small text-ink-soft transition-colors hover:text-lime-deep"
                      >
                        {capabilityBySlug.get(route.capability)?.title ?? route.capability}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
