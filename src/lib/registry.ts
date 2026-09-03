import { routes } from "@/lib/site";
import type { Entity, Kind } from "@/lib/types";
import { stages } from "@/data/stages";
import { capabilities } from "@/data/capabilities";
import { workflows } from "@/data/workflows";
import { industries } from "@/data/industries";
import { useCases } from "@/data/use-cases";
import { comparisons } from "@/data/comparisons";
import { playbooks } from "@/data/playbooks";
import { guides } from "@/data/guides";
import { frameworks } from "@/data/frameworks";
import { articles } from "@/data/articles";
import { glossaryTerms } from "@/data/glossary";
import { companyPages, legalPages } from "@/data/company";

/**
 * One place that knows about every routable entity.
 *
 * The sitemap, the sitemap page, the SEO builder and the route audit all read
 * from here, so a new content type is registered once rather than in four
 * places — and it is not possible to publish an entity that the sitemap does
 * not know about.
 */

export const allEntities: Entity[] = [
  ...stages,
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

/** The canonical path for any entity. */
export function urlFor(entity: Entity): string {
  switch (entity.kind) {
    case "stage":
      return routes.stage(entity.slug);
    case "capability":
      return routes.capability(entity.slug);
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

const KIND_LABEL: Record<Kind, string> = {
  stage: "Agency stage",
  capability: "Capability",
  workflow: "Workflow",
  industry: "Industry",
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
 * Listed here so the sitemap and the route audit see the whole site.
 */
export const staticRoutes: { path: string; title: string; group: string }[] = [
  { path: routes.home(), title: "Home", group: "Top level" },
  { path: routes.why(), title: "Why Mengo", group: "Top level" },
  { path: routes.howItWorks(), title: "How It Works", group: "Top level" },
  { path: routes.getStarted(), title: "Get Started", group: "Top level" },
  { path: routes.forAgencies(), title: "For Agencies", group: "Hubs" },
  { path: routes.capabilities(), title: "Capabilities", group: "Hubs" },
  { path: routes.workflows(), title: "Workflows", group: "Hubs" },
  { path: routes.industries(), title: "Industries", group: "Hubs" },
  { path: routes.useCases(), title: "Use Cases", group: "Hubs" },
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

/** Every path the site publishes. */
export function allPaths(): string[] {
  return [...staticRoutes.map((r) => r.path), ...allEntities.map(urlFor)];
}

/** Entities of one kind, for the hub pages. */
export function byKind(kind: Kind): Entity[] {
  return allEntities.filter((e) => e.kind === kind);
}
