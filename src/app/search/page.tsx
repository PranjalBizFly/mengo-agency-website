import type { Metadata } from "next";

import { Section, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { SearchResults } from "@/components/search/SearchResults";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { searchIndex } from "@/lib/search-index";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Search", href: routes.search() },
];

export const metadata: Metadata = pageMetadata({
  title: "Search",
  description:
    "Search every published page — capabilities and their stage readings, workflows, client sectors, goals, comparisons and the whole resource library.",
  path: routes.search(),
  kicker: "Search",
  /* A results page has nothing of its own to index, and a crawler following a
     query string would find five hundred near-empty variants of it. */
  noindex: true,
});

/**
 * The results page.
 *
 * The header dialog answers "take me there"; this answers "show me what there
 * is". Same index, same matcher, different job — so a reader who wants to
 * compare eight matches gets the type, the parent, the description with the
 * matched words marked, and the URL, rather than a dropdown they have to
 * dismiss to think about.
 *
 * The records are built server-side from the registry, so a page that exists
 * is a page this can find.
 */
export default function SearchPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(TRAIL)} />

      <IndexHero
        trail={TRAIL}
        kicker="Search"
        title="Look through the whole site"
        lead="One index over every published page, built from the same data the pages are. Results carry their type and their parent, so you can tell what you are about to open."
        count={searchIndex.length}
        countLabel="pages indexed"
        note="Press / anywhere on the site for the quick dialog instead, or open the directory if you would rather filter than search."
      />

      <Section tone="paper" tight>
        <SearchResults records={searchIndex} />
      </Section>
    </>
  );
}
