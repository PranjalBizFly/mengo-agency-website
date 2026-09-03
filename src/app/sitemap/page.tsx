import type { Metadata } from "next";
import Link from "next/link";

import { Section, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { allEntities, allPaths, kindLabel, staticRoutes, urlFor } from "@/lib/registry";
import type { Kind } from "@/lib/types";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Sitemap", href: routes.sitemapPage() },
];

export const metadata: Metadata = pageMetadata({
  title: "Sitemap — every page on this site",
  description: "A complete index of every page published on the Mengo for Agencies site.",
  path: routes.sitemapPage(),
  kicker: "Sitemap",
});

/**
 * The human sitemap.
 *
 * Generated from the same registry as sitemap.xml, so the two can never
 * disagree and neither can list a page that does not exist. Grouped by content
 * type in the order the navigation uses.
 */
const ORDER: Kind[] = [
  "stage",
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
  const groups = ORDER.map((kind) => ({
    kind,
    label: kindLabel(kind),
    entities: allEntities.filter((entity) => entity.kind === kind),
  })).filter((group) => group.entities.length > 0);

  const staticGroups = [...new Set(staticRoutes.map((route) => route.group))];

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
      />

      <Section tone="paper" tight>
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
                  <li key={entity.slug}>
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
    </>
  );
}
