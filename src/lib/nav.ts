import { routes, site } from "@/lib/site";
import { stages } from "@/data/stages";
import { capabilityGroups } from "@/data/capability-groups";
import { capabilities, capabilitiesInGroup } from "@/data/capabilities";
import { workflows, WORKFLOW_PHASES, workflowsInPhase } from "@/data/workflows";
import { industries, industriesInSector } from "@/data/industries";
import { useCases, USE_CASE_PHASES, useCasesInPhase, useCaseBySlug } from "@/data/use-cases";
import { comparisons } from "@/data/comparisons";
import { companyPages } from "@/data/company";
import { playbooks } from "@/data/playbooks";
import { guides } from "@/data/guides";
import { frameworks } from "@/data/frameworks";
import type { Sector } from "@/lib/types";

/**
 * Navigation.
 *
 * Built from the content rather than maintained as a parallel list, so a new
 * capability appears in the menu, the footer and the directory without three
 * separate edits — and so the navigation can never link to a page that does
 * not exist.
 *
 * Five sections and a Home link. Home is a real item in the bar rather than
 * only the wordmark, because on a site this size the reader who has followed
 * four cross-links deep needs an unambiguous way back to the top of the
 * argument. Everything supporting — how it works, the comparisons, the company
 * — hangs inside a section or sits in the utility cluster; a seventh top-level
 * item would flatten the hierarchy rather than extend it.
 *
 * With sixty-four capabilities and twenty-eight workflows the menu cannot list
 * everything and should not try. Each panel shows the *shape* of its section
 * with a "view all" carrying the rest, the footer maps the ecosystem, and
 * /explore/ holds every page with filters. Search cuts across all three.
 */

export interface NavLink {
  label: string;
  href: string;
  blurb?: string;
}

export interface NavColumn {
  heading: string;
  headingHref?: string;
  links: NavLink[];
  seeAll?: NavLink;
}

export interface NavFeature {
  kicker: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}

export interface NavGroup {
  label: string;
  href: string;
  columns?: NavColumn[];
  feature?: NavFeature;
}

const stagedCount = capabilities.filter((c) => c.depth === "staged").length;
const resourceCount = playbooks.length + guides.length + frameworks.length;

/* Eight groups is one more than a panel reads comfortably in three columns.
   Splitting 3/3/2 keeps each column scannable and puts the two internal groups
   together, which is also how the work is actually thought about. */
const GROUP_COLUMNS: [number, number][] = [
  [0, 3],
  [3, 6],
  [6, 8],
];

/**
 * The five needs people arrive holding, in their own words.
 *
 * A third lens on the same pages, and deliberately at a different grain from
 * the goal phases beside it: those are three buckets, these are five specific
 * sentences somebody would actually say out loud. A reader who does not know
 * whether they are "doing the work" or "growing the business" still recognises
 * "we cannot take another client".
 */
const NEEDS: { label: string; goal: string }[] = [
  { label: "We cannot take another client", goal: "handle-more-clients" },
  { label: "Delivery is slower than it should be", goal: "deliver-faster" },
  { label: "Quality drifts between accounts", goal: "standardize-delivery" },
  { label: "Content stops when we get busy", goal: "build-a-content-engine" },
  { label: "Growth keeps meaning another hire", goal: "scale-without-hiring" },
];

const SECTOR_LABELS: Record<Sector, string> = {
  technical: "Technical and B2B",
  considered: "Considered and regulated",
  commerce: "Commerce and consumer",
  built: "Property, build and trades",
};

export const SECTOR_ORDER: Sector[] = ["technical", "considered", "commerce", "built"];

export function sectorLabel(sector: Sector): string {
  return SECTOR_LABELS[sector];
}

/** What each sector group has in common, for the industries hub and the menu. */
export const SECTOR_NOTES: Record<Sector, string> = {
  technical: "Long cycles, buying committees, and a product that keeps moving.",
  considered:
    "What may be said is decided outside the agency — by a regulator, a professional body or an awarding board.",
  commerce: "Fast cycles, visible numbers, and demand that moves with the season.",
  built: "Sold on proof of completed work rather than on argument.",
};

/* One sector group per column. Four columns rather than the usual three-plus-
   feature: two sectors sharing a heading read as one awkward compound label,
   and the grouping is the whole point of this panel. */
const SECTOR_COLUMNS: Sector[] = SECTOR_ORDER;

export const primaryNav: NavGroup[] = [
  {
    label: "Solutions",
    href: routes.solutions(),
    columns: [
      {
        heading: "By stage",
        headingHref: routes.stages(),
        links: stages.map((s) => ({
          label: s.navLabel ?? s.title,
          href: routes.stage(s.slug),
          blurb: s.shape,
        })),
        seeAll: { label: "Compare all five stages", href: routes.stages() },
      },
      {
        heading: "By goal",
        headingHref: routes.useCases(),
        links: USE_CASE_PHASES.map((phase) => ({
          label: phase.label,
          href: `${routes.useCases()}#${phase.slug}`,
          blurb: `${useCasesInPhase(phase.slug).length} use cases — ${phase.note}`,
        })),
        seeAll: { label: `All ${useCases.length} use cases`, href: routes.useCases() },
      },
      {
        heading: "By need",
        links: NEEDS.map((need) => ({
          label: need.label,
          href: routes.useCase(need.goal),
          blurb: useCaseBySlug.get(need.goal)?.navLabel ?? undefined,
        })),
        seeAll: { label: "Explore all solutions", href: routes.solutions() },
      },
    ],
    feature: {
      kicker: "Not sure yet",
      title: "Start from the week you actually have",
      body: "Every stage page opens with the shape of the week rather than a headcount band. Read the one that sounds like yours.",
      href: routes.stages(),
      cta: "Find your stage",
    },
  },

  {
    label: "Capabilities",
    href: routes.capabilities(),
    columns: GROUP_COLUMNS.map(([from, to], index) => ({
      heading: index === 0 ? "The taxonomy" : " ",
      headingHref: index === 0 ? routes.capabilities() : undefined,
      links: capabilityGroups.slice(from, to).map((group) => ({
        label: group.title,
        href: routes.capabilityGroup(group.slug),
        blurb: `${capabilitiesInGroup(group.slug).length} capabilities — ${group.tagline}`,
      })),
      ...(index === 2
        ? { seeAll: { label: `All ${capabilities.length} capabilities`, href: routes.capabilities() } }
        : {}),
    })),
    feature: {
      kicker: "Read five ways",
      title: `${stagedCount} capabilities, one per stage`,
      body: "Everything that means something different at a different size has a page per stage — including the ones that say wait, and what to do first.",
      href: `${routes.capabilities()}#explorer`,
      cta: "Open the explorer",
    },
  },

  {
    label: "Workflows",
    href: routes.workflows(),
    columns: [
      {
        heading: "By phase",
        headingHref: routes.workflows(),
        links: WORKFLOW_PHASES.slice(0, 3).map((phase) => ({
          label: phase.label,
          href: `${routes.workflows()}#${phase.slug}`,
          blurb: `${workflowsInPhase(phase.slug).length} workflows — ${phase.note}`,
        })),
      },
      {
        heading: " ",
        links: WORKFLOW_PHASES.slice(3).map((phase) => ({
          label: phase.label,
          href: `${routes.workflows()}#${phase.slug}`,
          blurb: `${workflowsInPhase(phase.slug).length} workflows — ${phase.note}`,
        })),
        seeAll: { label: `All ${workflows.length} workflows`, href: routes.workflows() },
      },
      {
        heading: "Put them to work",
        links: [
          { label: "Playbooks", href: routes.playbooks(), blurb: "Operational documents to work through." },
          { label: "Frameworks", href: routes.frameworks(), blurb: "Structures to adopt under your own name." },
          { label: "How it works", href: routes.howItWorks(), blurb: "The sequence, end to end." },
        ],
      },
    ],
    feature: {
      kicker: "Every workflow",
      title: "Opens and closes with a person",
      body: "Client contact is the first step and the last. Nothing reaches a client that somebody did not hand over.",
      href: routes.howItWorks(),
      cta: "See the sequence",
    },
  },

  {
    label: "Industries",
    href: routes.industries(),
    columns: SECTOR_COLUMNS.map((sector, index) => ({
      heading: SECTOR_LABELS[sector],
      headingHref: index === 0 ? routes.industries() : undefined,
      links: industriesInSector(sector).map((industry) => ({
        label: industry.navLabel ?? industry.title,
        href: routes.industry(industry.slug),
        blurb: `${industry.capabilities.length} capability pages`,
      })),
      ...(index === SECTOR_COLUMNS.length - 1
        ? { seeAll: { label: `All ${industries.length} sectors`, href: routes.industries() } }
        : {}),
    })),
  },

  {
    label: "Resources",
    href: routes.resources(),
    columns: [
      {
        heading: "Library",
        headingHref: routes.resources(),
        links: [
          { label: "Playbooks", href: routes.playbooks(), blurb: `${playbooks.length} documents to work through on Monday.` },
          { label: "Guides", href: routes.guides(), blurb: `${guides.length} longer arguments, with conclusions.` },
          { label: "Frameworks", href: routes.frameworks(), blurb: `${frameworks.length} structures to adopt as your own.` },
        ],
        seeAll: { label: `All ${resourceCount} resources`, href: routes.resources() },
      },
      {
        heading: "Reading and reference",
        links: [
          { label: "Journal", href: routes.blog(), blurb: "Writing about delivery and capacity." },
          { label: "Glossary", href: routes.glossary(), blurb: "Terms as this trade uses them." },
          { label: "Questions", href: routes.faq(), blurb: "Every question on the site, in one place." },
        ],
      },
      {
        heading: "Decide and find",
        links: [
          { label: "Comparisons", href: routes.compare(), blurb: `${comparisons.length} honest alternatives, including when they win.` },
          { label: "Use cases", href: routes.useCases(), blurb: `${useCases.length} jobs, start to finish.` },
          { label: "Explore all pages", href: routes.explore(), blurb: "The whole site, filterable six ways." },
        ],
      },
    ],
    feature: {
      kicker: "Journal",
      title: "The bottleneck is not talent",
      body: "Growth gets described as a hiring problem. Measured honestly, it usually is not.",
      href: routes.article("the-agency-bottleneck-is-not-talent"),
      cta: "Read the piece",
    },
  },
];

/* ------------------------------------------------------------------------ */
/* Footer                                                                    */
/* ------------------------------------------------------------------------ */

export interface FooterColumn {
  heading: string;
  headingHref?: string;
  links: NavLink[];
}

/**
 * The footer maps the ecosystem; it is not a second copy of the menu and it is
 * not the sitemap.
 *
 * Every column is curated to the length a reader will actually scan and ends
 * in the route that carries the rest — Industries lists six of ten and then
 * "All industries", because a footer that prints everything is one nobody
 * reads. The complete inventory lives at /explore/, which is built for it.
 */
const FOOTER_INDUSTRIES = [
  "saas-software",
  "professional-services",
  "ecommerce-d2c",
  "healthcare",
  "real-estate",
  "local-multi-location",
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Platform",
    headingHref: routes.why(),
    links: [
      { label: "Why Mengo", href: routes.why() },
      { label: "How it works", href: routes.howItWorks() },
      { label: "The capability system", href: routes.capabilities() },
      { label: "Compare", href: routes.compare() },
      { label: "Get started", href: routes.getStarted() },
    ],
  },
  {
    heading: "Capabilities",
    headingHref: routes.capabilities(),
    links: [
      ...capabilityGroups.map((g) => ({
        label: g.title,
        href: routes.capabilityGroup(g.slug),
      })),
      { label: `All ${capabilities.length} capabilities`, href: routes.capabilities() },
    ],
  },
  {
    heading: "Solutions",
    headingHref: routes.solutions(),
    links: [
      ...stages.map((s) => ({ label: s.navLabel ?? s.title, href: routes.stage(s.slug) })),
      { label: "All solutions", href: routes.solutions() },
    ],
  },
  {
    heading: "Workflows",
    headingHref: routes.workflows(),
    links: [
      ...WORKFLOW_PHASES.map((phase) => ({
        label: phase.label,
        href: `${routes.workflows()}#${phase.slug}`,
      })),
      { label: `All ${workflows.length} workflows`, href: routes.workflows() },
    ],
  },
  {
    heading: "Industries",
    headingHref: routes.industries(),
    links: [
      ...FOOTER_INDUSTRIES.map((slug) => {
        const industry = industries.find((i) => i.slug === slug);
        return {
          label: industry?.navLabel ?? industry?.title ?? slug,
          href: routes.industry(slug),
        };
      }),
      { label: `All ${industries.length} industries`, href: routes.industries() },
    ],
  },
  {
    heading: "Resources",
    headingHref: routes.resources(),
    links: [
      { label: "Playbooks", href: routes.playbooks() },
      { label: "Guides", href: routes.guides() },
      { label: "Frameworks", href: routes.frameworks() },
      { label: "Journal", href: routes.blog() },
      { label: "Glossary", href: routes.glossary() },
      { label: "FAQ", href: routes.faq() },
      { label: "Comparisons", href: routes.compare() },
      { label: "Use cases", href: routes.useCases() },
      { label: "Explore all pages", href: routes.explore() },
    ],
  },
  {
    heading: "Company",
    headingHref: routes.company(),
    links: companyPages.map((c) => ({
      label: c.navLabel ?? c.title,
      href: routes.companyPage(c.slug),
    })),
  },
];

/**
 * How the seven groups pack into the wide grid: one array per column.
 *
 * The packing is declared here rather than left to the grid because CSS sizes
 * a row to its tallest cell: a seventh group wrapping onto a second row would
 * start below the longest column of the first, which is a three-hundred-pixel
 * hole in the middle of the footer. Pairing the groups instead puts the
 * raggedness at the bottom of a column, where it reads as the end of a list.
 *
 * Five columns beside the brand rail rather than seven or six. Seven is the
 * count of the groups and none of them fit: at this container width the
 * columns fall to about 120px and every second label wraps. Five gives each
 * column the width its longest label actually needs — "Local & Multi-Location"
 * sets it — and the two pairings land the tallest column within fifty pixels
 * of the brand rail, so the band has one baseline rather than six.
 *
 * Four columns and eight cells was tried, with the estate taking the eighth:
 * it fills the grid but not the band. The brand rail is about half the height
 * of two rows of links, so the arrangement trades one empty cell for a
 * three-hundred-pixel void beneath the rail, and the first row still ends
 * ragged because it is sized by the nine-link column in it.
 *
 * The order here is also the reading order. A phone collapses the grid to one
 * column and the pairs simply flatten, so nothing is re-sequenced between the
 * two layouts and there is one piece of markup for both.
 */


/**
 * The rest of the Mengo estate.
 *
 * Two properties that are not this site and are never merged with it: the
 * end-user product, and the founder's own writing and speaking. They sit in
 * the brand block rather than in a navigation column because leaving a site is
 * a different act from moving around inside one, and the reader should be able
 * to see that before they click.
 */
export const footerEcosystem: (NavLink & { note: string })[] = [
  { label: "Mengo for business owners", href: site.productSite, note: "mengoengine.com" },
  { label: "Jainam Jain, founder", href: site.founderSite, note: "jainamjain.com" },
];

/** The last footer column is navigation about navigation. */
export const footerFindAnything: NavLink[] = [
  { label: "Explore all pages", href: routes.explore() },
  { label: "Sitemap", href: routes.sitemapPage() },
];

export const footerLegal: NavLink[] = [
  { label: "Privacy", href: routes.legal("privacy") },
  { label: "Terms", href: routes.legal("terms") },
  { label: "Sitemap", href: routes.sitemapPage() },
];
