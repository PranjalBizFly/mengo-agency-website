import type { Metadata } from "next";

import { JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { ExploreDirectory } from "@/components/explore/ExploreDirectory";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { searchIndex, facets } from "@/lib/search-index";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Explore", href: routes.explore() },
];

export const metadata: Metadata = pageMetadata({
  title: "Explore every page",
  description:
    "The complete directory. Filter by section, type, stage, capability group and client sector, or search the whole site from one field.",
  path: routes.explore(),
  kicker: "Directory",
});

/**
 * The directory.
 *
 * A site with five hundred pages needs a room where all of them are visible at
 * once and can be narrowed on the reader's own terms. The sitemap page lists
 * what is published; this one lets you cut it down to the eleven pages you
 * actually want, and it is the page search sends anyone who does not know the
 * word to type.
 *
 * The records are built server-side from the same registry the pages are, so
 * a page that exists is a page that appears here.
 */
export default function ExplorePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(TRAIL)} />

      <IndexHero
        trail={TRAIL}
        kicker="Directory"
        title="Everything, narrowed to what you need"
        lead="Every published page in one list, cut five ways at once — by section, by type, by stage, by capability group and by client sector."
        count={searchIndex.length}
        countLabel="pages indexed"
        note="Press / anywhere on the site to search instead. This page is for when you want to see the shape of what exists rather than jump to one thing."
      />

      {/* Not the shared `Section`: its full top rhythm would drop the control
          bar most of a screen below the hero, and the bar is the first thing
          this page is for. The foot keeps the shared cadence. */}
      <section className="bg-paper pb-section pt-8 text-ink">
        <div className="wrap">
          <ExploreDirectory records={searchIndex} facets={facets} />
        </div>
      </section>
    </>
  );
}
