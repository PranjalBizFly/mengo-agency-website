import type { SearchRecord } from "@/lib/search";
import { searchIndex } from "@/lib/search-index";
import { routes } from "@/lib/site";

/**
 * The page directory model.
 *
 * Built entirely from the search index, which is itself built from the content
 * registry — so the directory cannot list a page that does not exist, cannot
 * miss one that does, and updates itself when content is added. Nothing here
 * enumerates pages by hand.
 *
 * Categories are the site's own content types rather than its six top-level
 * sections. Sections are too coarse to browse: one of them holds three hundred
 * and thirty pages, and a heading with that many links under it is a wall
 * rather than an index. The types are the grain a reader actually thinks in —
 * a workflow, a comparison, a glossary term — and they are already carried on
 * every record, so this is a regrouping of the registry rather than a second
 * opinion about it.
 *
 * One thing is added on top: a lowercased haystack per entry, so a query
 * matches the page title, the category it sits in, its parent, and the words in
 * its own URL. That is what lets a pasted path find its page.
 */

export interface DirectoryEntry {
  href: string;
  label: string;
  /** Lowercased corpus: label, category, parent, keywords, and the URL's words. */
  keywords: string;
}

export interface DirectoryCategory {
  heading: string;
  /** Anchor and filter identity. */
  slug: string;
  /** The category's own hub page, where it has one. */
  href?: string;
  entries: DirectoryEntry[];
}

/** Anchor-safe identity for a category heading. */
export function categorySlug(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * The reading order, and the hub each category belongs to.
 *
 * This is the site's own navigation order, not an alphabet: a reader scanning
 * the directory should meet the taxonomy in the sequence the header presents
 * it. A category with no hub of its own — the two crossed axes — carries no
 * link on its heading.
 */
const ORDER: { heading: string; href?: string }[] = [
  { heading: "Main" },
  { heading: "Solutions", href: routes.solutions() },
  { heading: "Use cases", href: routes.useCases() },
  { heading: "Capabilities", href: routes.capabilities() },
  { heading: "Capabilities by stage" },
  { heading: "Workflows", href: routes.workflows() },
  { heading: "Industries", href: routes.industries() },
  { heading: "Capabilities by sector" },
  { heading: "Comparisons", href: routes.compare() },
  { heading: "Resources", href: routes.resources() },
  { heading: "Playbooks", href: routes.playbooks() },
  { heading: "Guides", href: routes.guides() },
  { heading: "Frameworks", href: routes.frameworks() },
  { heading: "Journal", href: routes.blog() },
  { heading: "Glossary", href: routes.glossary() },
  { heading: "Company", href: routes.company() },
  { heading: "Legal" },
];

/** Content types, which is what most of the registry is. */
const BY_TYPE: Record<string, string> = {
  Stage: "Solutions",
  "Use case": "Use cases",
  "Capability group": "Capabilities",
  Capability: "Capabilities",
  "Capability by stage": "Capabilities by stage",
  Workflow: "Workflows",
  Sector: "Industries",
  "Capability by sector": "Capabilities by sector",
  Comparison: "Comparisons",
  Playbook: "Playbooks",
  Guide: "Guides",
  Framework: "Frameworks",
  Journal: "Journal",
  Glossary: "Glossary",
  Company: "Company",
  Legal: "Legal",
};

/**
 * The hubs and standalone pages, which have no content type to sort them by.
 *
 * Each one is filed with the pages it opens, so "Workflows" is the first entry
 * under the workflows heading rather than a page adrift in a category of index
 * pages. The six that open nothing in particular are the site's own front
 * matter, and they go together at the top.
 */
const BY_URL: Record<string, string> = {
  [routes.home()]: "Main",
  [routes.howItWorks()]: "Main",
  [routes.why()]: "Main",
  [routes.search()]: "Main",
  [routes.explore()]: "Main",
  [routes.getStarted()]: "Main",
  [routes.solutions()]: "Solutions",
  [routes.stages()]: "Solutions",
  [routes.useCases()]: "Use cases",
  [routes.capabilities()]: "Capabilities",
  [routes.workflows()]: "Workflows",
  [routes.industries()]: "Industries",
  [routes.compare()]: "Comparisons",
  [routes.resources()]: "Resources",
  [routes.faq()]: "Resources",
  [routes.playbooks()]: "Playbooks",
  [routes.guides()]: "Guides",
  [routes.frameworks()]: "Frameworks",
  [routes.blog()]: "Journal",
  [routes.glossary()]: "Glossary",
  [routes.company()]: "Company",
  [routes.sitemapPage()]: "Company",
};

/**
 * Words a reader might type that are in the URL but not in the title.
 *
 * The glossary term "CAC" lives at `/resources/glossary/customer-acquisition-cost/`,
 * and somebody searching for the long form should find it.
 */
function urlWords(href: string): string {
  return href.replace(/[/-]+/g, " ").trim();
}

/**
 * The category a record belongs to.
 *
 * Type first, then URL. The fallback to the record's own section is not
 * expected to fire — it exists so that a content type added later appears in
 * the directory under a heading of its own rather than vanishing from it.
 */
function headingFor(record: SearchRecord): string {
  return BY_TYPE[record.ty] ?? BY_URL[record.u] ?? record.sec;
}

export function pageDirectory(): DirectoryCategory[] {
  const grouped = new Map<string, DirectoryEntry[]>();

  for (const record of searchIndex) {
    const heading = headingFor(record);
    const entry: DirectoryEntry = {
      href: record.u,
      label: record.t,
      keywords: `${record.t} ${heading} ${record.c ?? ""} ${record.kw ?? ""} ${urlWords(record.u)}`
        .replace(/\s+/g, " ")
        .toLowerCase(),
    };
    const list = grouped.get(heading);
    if (list) list.push(entry);
    else grouped.set(heading, [entry]);
  }

  const known = ORDER.filter((category) => grouped.has(category.heading));
  /* Anything the order table does not name, in the order the registry produced
     it. Empty in practice; the point is that it can never be silently lost. */
  const extra = [...grouped.keys()]
    .filter((heading) => !ORDER.some((category) => category.heading === heading))
    .map((heading) => ({ heading, href: undefined }));

  return [...known, ...extra].map((category) => ({
    heading: category.heading,
    slug: categorySlug(category.heading),
    href: category.href,
    entries: grouped.get(category.heading) ?? [],
  }));
}

/** Total pages in the directory. Equal to the registry, by construction. */
export function directoryPageCount(): number {
  return searchIndex.length;
}
