import { routes } from "@/lib/site";
import type { Entity, Kind } from "@/lib/types";
import { stages } from "@/data/stages";
import { capabilities, capabilityBySlug, capabilityStagePairs } from "@/data/capabilities";
import { capabilityGroups } from "@/data/capability-groups";
import { workflows } from "@/data/workflows";
import { industries } from "@/data/industries";
import { industryCapabilities } from "@/data/industry-capabilities";
import { useCases } from "@/data/use-cases";
import { comparisons } from "@/data/comparisons";
import { playbooks } from "@/data/playbooks";
import { guides } from "@/data/guides";
import { frameworks } from "@/data/frameworks";
import { articles } from "@/data/articles";
import { glossaryTerms } from "@/data/glossary";
import { companyPages, legalPages } from "@/data/company";

/**
 * One place that knows about every routable page.
 *
 * The sitemap, the human sitemap page, the SEO builder and the route audit all
 * read from here, so a new content type is registered once rather than in four
 * places — and it is not possible to publish a page the sitemap does not know
 * about. The route audit checks that in both directions on every build.
 */

/** Entities with their own `Meta` shape. */
export const allEntities: Entity[] = [
  ...stages,
  ...capabilityGroups,
  ...capabilities,
  ...workflows,
  ...industries,
  ...useCases,
  ...comparisons,
  ...playbooks,
  ...guides,
  ...frameworks,
  ...articles,
  ...glossaryTerms,
  ...companyPages,
  ...legalPages,
];

/**
 * The canonical path for any entity.
 *
 * Capabilities need their group to build a URL, which is why this is a
 * function over the entity rather than a lookup table: the group lives on the
 * capability and nowhere else.
 */
export function urlFor(entity: Entity): string {
  switch (entity.kind) {
    case "stage":
      return routes.stage(entity.slug);
    case "capability-group":
      return routes.capabilityGroup(entity.slug);
    case "capability":
      return routes.capability(entity.group, entity.slug);
    case "workflow":
      return routes.workflow(entity.slug);
    case "industry":
      return routes.industry(entity.slug);
    case "use-case":
      return routes.useCase(entity.slug);
    case "comparison":
      return routes.comparison(entity.slug);
    case "playbook":
      return routes.playbook(entity.slug);
    case "guide":
      return routes.guide(entity.slug);
    case "framework":
      return routes.framework(entity.slug);
    case "article":
      return routes.article(entity.slug);
    case "glossary":
      return routes.glossaryTerm(entity.slug);
    case "company":
      return routes.companyPage(entity.slug);
    case "legal":
      return routes.legal(entity.slug);
  }
}

/** A capability's URL from its slug alone, for cross-references in data. */
export function capabilityUrl(slug: string): string | null {
  const capability = capabilityBySlug.get(slug);
  return capability ? routes.capability(capability.group, capability.slug) : null;
}

const KIND_LABEL: Record<Kind, string> = {
  stage: "Stage",
  capability: "Capability",
  "capability-stage": "Capability by stage",
  "capability-group": "Capability group",
  workflow: "Workflow",
  industry: "Sector",
  "industry-capability": "Capability by sector",
  "use-case": "Use case",
  comparison: "Comparison",
  playbook: "Playbook",
  guide: "Guide",
  framework: "Framework",
  article: "Journal",
  glossary: "Glossary",
  company: "Company",
  legal: "Legal",
};

export function kindLabel(kind: Kind): string {
  return KIND_LABEL[kind];
}

/**
 * Static routes — the hubs and standalone pages that are not entity-driven.
 */
export const staticRoutes: { path: string; title: string; group: string }[] = [
  { path: routes.home(), title: "Home", group: "Top level" },
  { path: routes.why(), title: "Why Mengo", group: "Top level" },
  { path: routes.howItWorks(), title: "How It Works", group: "Top level" },
  { path: routes.getStarted(), title: "Get Started", group: "Top level" },
  { path: routes.explore(), title: "Explore", group: "Utility" },
  { path: routes.search(), title: "Search", group: "Utility" },
  { path: routes.solutions(), title: "Solutions", group: "Hubs" },
  { path: routes.stages(), title: "By stage", group: "Hubs" },
  { path: routes.useCases(), title: "Use Cases", group: "Hubs" },
  { path: routes.capabilities(), title: "Capabilities", group: "Hubs" },
  { path: routes.workflows(), title: "Workflows", group: "Hubs" },
  { path: routes.industries(), title: "Industries", group: "Hubs" },
  { path: routes.compare(), title: "Compare", group: "Hubs" },
  { path: routes.resources(), title: "Resources", group: "Hubs" },
  { path: routes.playbooks(), title: "Playbooks", group: "Hubs" },
  { path: routes.guides(), title: "Guides", group: "Hubs" },
  { path: routes.frameworks(), title: "Frameworks", group: "Hubs" },
  { path: routes.blog(), title: "Journal", group: "Hubs" },
  { path: routes.glossary(), title: "Glossary", group: "Hubs" },
  { path: routes.faq(), title: "FAQ", group: "Hubs" },
  { path: routes.company(), title: "Company", group: "Hubs" },
  { path: routes.sitemapPage(), title: "Sitemap", group: "Utility" },
];

/**
 * Pages that exist but are not offered to a crawler.
 *
 * A results page has nothing of its own to index and a query string would
 * generate an unbounded number of near-empty variants of it. It stays in the
 * registry — the human directory and the audits should still know it is there
 * — and out of the XML sitemap.
 */
export const NOINDEX_PATHS = new Set<string>([routes.search()]);

/**
 * Every capability × stage page.
 *
 * Only `staged` capabilities produce these. A settings screen does not mean
 * something different to a solo agency and a forty-person one, and generating
 * five near-identical pages for it would be the thin padding this site exists
 * not to produce.
 */
export function capabilityStageRoutes(): { path: string; capability: string; stage: string }[] {
  return capabilityStagePairs().map(({ capability, stage }) => ({
    path: routes.capabilityStage(capability.group, capability.slug, stage),
    capability: capability.slug,
    stage,
  }));
}

/**
 * Every industry × capability page.
 *
 * Curated pairs listed on the data, never a cross product — so a combination
 * with nothing true to say about it cannot be generated.
 */
export function industryCapabilityRoutes(): { path: string; industry: string; capability: string }[] {
  return industryCapabilities.map((entry) => ({
    path: routes.industryCapability(entry.industry, entry.capability),
    industry: entry.industry,
    capability: entry.capability,
  }));
}

/** Every path the site publishes. */
export function allPaths(): string[] {
  return [
    ...staticRoutes.map((r) => r.path),
    ...allEntities.map(urlFor),
    ...capabilityStageRoutes().map((r) => r.path),
    ...industryCapabilityRoutes().map((r) => r.path),
  ];
}

/** Entities of one kind, for the hub pages. */
export function byKind(kind: Kind): Entity[] {
  return allEntities.filter((e) => e.kind === kind);
}

/** Counts by section, for the sitemap page and the final audit. */
export function routeCounts() {
  return {
    static: staticRoutes.length,
    entities: allEntities.length,
    capabilityStages: capabilityStageRoutes().length,
    industryCapabilities: industryCapabilityRoutes().length,
    total: allPaths().length,
  };
}
