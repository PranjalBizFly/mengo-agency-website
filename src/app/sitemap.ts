import type { MetadataRoute } from "next";
import { absolute, routes } from "@/lib/site";
import { allEntities, staticRoutes, urlFor } from "@/lib/registry";

/**
 * The XML sitemap.
 *
 * Built from the same registry as the human sitemap page, so it is not
 * possible to publish an entity that is missing from here.
 *
 * Priorities are relative and deliberately coarse. Search engines treat them
 * as a weak hint at best, so the only signal worth sending is the shape of the
 * site: the argument pages first, then hubs, then the long tail.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);

  const priorityFor = (path: string): number => {
    if (path === routes.home()) return 1;
    if (path === routes.why() || path === routes.howItWorks() || path === routes.getStarted()) return 0.9;
    if (path === routes.sitemapPage()) return 0.2;
    return 0.7;
  };

  const statics = staticRoutes.map((route) => ({
    url: absolute(route.path),
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: priorityFor(route.path),
  }));

  const entities = allEntities.map((entity) => ({
    url: absolute(urlFor(entity)),
    lastModified: entity.updated,
    changeFrequency: entity.kind === "article" ? ("monthly" as const) : ("yearly" as const),
    // Legal placeholders are real pages and should be indexable, but they are
    // not what anyone came for.
    priority: entity.kind === "legal" ? 0.2 : entity.kind === "glossary" ? 0.4 : 0.6,
  }));

  return [...statics, ...entities];
}
