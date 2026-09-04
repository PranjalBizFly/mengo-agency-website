import type { MetadataRoute } from "next";
import { absolute, routes } from "@/lib/site";
import {
  allEntities,
  capabilityStageRoutes,
  industryCapabilityRoutes,
  NOINDEX_PATHS,
  staticRoutes,
  urlFor,
} from "@/lib/registry";

/**
 * The XML sitemap.
 *
 * Built from the same registry as the human sitemap page, so it is not
 * possible to publish a page that is missing from here. The route audit checks
 * that in both directions on every build.
 *
 * Priorities are relative and deliberately coarse — search engines treat them
 * as a weak hint at best, so the only signal worth sending is the shape of the
 * site: the argument pages first, then hubs and entities, then the two large
 * generated families, which are genuine pages but are not what anyone arrives
 * looking for.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);

  const priorityFor = (path: string): number => {
    if (path === routes.home()) return 1;
    if (path === routes.why() || path === routes.howItWorks() || path === routes.getStarted()) return 0.9;
    if (path === routes.sitemapPage()) return 0.2;
    return 0.8;
  };

  const statics = staticRoutes
    .filter((route) => !NOINDEX_PATHS.has(route.path))
    .map((route) => ({
      url: absolute(route.path),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: priorityFor(route.path),
    }));

  const entities = allEntities.map((entity) => ({
    url: absolute(urlFor(entity)),
    lastModified: entity.updated,
    changeFrequency: entity.kind === "article" ? ("monthly" as const) : ("yearly" as const),
    priority:
      entity.kind === "legal"
        ? 0.2
        : entity.kind === "glossary"
          ? 0.4
          : entity.kind === "capability-group"
            ? 0.7
            : 0.6,
  }));

  const capabilityStages = capabilityStageRoutes().map((route) => ({
    url: absolute(route.path),
    lastModified: today,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const industryCapabilities = industryCapabilityRoutes().map((route) => ({
    url: absolute(route.path),
    lastModified: today,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...statics, ...entities, ...capabilityStages, ...industryCapabilities];
}
