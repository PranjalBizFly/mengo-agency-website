import { routes } from "@/lib/site";
import { stages } from "@/data/stages";
import { capabilities } from "@/data/capabilities";
import { workflows } from "@/data/workflows";
import { industries } from "@/data/industries";
import { useCases } from "@/data/use-cases";
import { comparisons } from "@/data/comparisons";
import { companyPages } from "@/data/company";

/**
 * Navigation.
 *
 * Built from the content data rather than maintained as a parallel list, so a
 * new capability appears in the menu, the footer and the sitemap without three
 * separate edits — and so the navigation can never link to a page that does
 * not exist.
 *
 * The desktop menu is a mega panel with at most four columns plus a feature
 * card. Four is not an aesthetic limit: a fifth column takes the link text
 * below a comfortable measure at 1280px, which is where most of the audience
 * is.
 */

export interface NavLink {
  label: string;
  href: string;
  /** One line under the label. Desktop panel only — the mobile drawer omits it. */
  blurb?: string;
}

export interface NavColumn {
  heading: string;
  headingHref?: string;
  links: NavLink[];
  seeAll?: NavLink;
}

/** The card at the end of a mega panel. One per group, and never a promotion. */
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

export const primaryNav: NavGroup[] = [
  {
    label: "For Agencies",
    href: routes.forAgencies(),
    columns: [
      {
        heading: "By stage",
        headingHref: routes.forAgencies(),
        links: stages.map((s) => ({
          label: s.navLabel ?? s.title,
          href: routes.stage(s.slug),
          blurb: s.shape,
        })),
        seeAll: { label: "Compare all five stages", href: routes.forAgencies() },
      },
      {
        heading: "By goal",
        headingHref: routes.useCases(),
        links: useCases.map((u) => ({
          label: u.navLabel ?? u.title,
          href: routes.useCase(u.slug),
        })),
        seeAll: { label: "All use cases", href: routes.useCases() },
      },
      {
        heading: "Weighing it up",
        headingHref: routes.compare(),
        links: comparisons.map((c) => ({
          label: c.navLabel ?? c.title,
          href: routes.comparison(c.slug),
        })),
        seeAll: { label: "All comparisons", href: routes.compare() },
      },
    ],
    feature: {
      kicker: "Start here",
      title: "Your agency stays the agency",
      body: "The clients, the strategy and the final call stay yours. Mengo carries the structural work behind them.",
      href: routes.why(),
      cta: "Why Mengo",
    },
  },

  {
    label: "Capabilities",
    href: routes.capabilities(),
    columns: [
      {
        heading: "What Mengo helps with",
        headingHref: routes.capabilities(),
        links: capabilities.slice(0, 3).map((c) => ({
          label: c.navLabel ?? c.title,
          href: routes.capability(c.slug),
          blurb: c.job,
        })),
      },
      {
        heading: " ",
        links: capabilities.slice(3).map((c) => ({
          label: c.navLabel ?? c.title,
          href: routes.capability(c.slug),
          blurb: c.job,
        })),
        seeAll: { label: "All capabilities", href: routes.capabilities() },
      },
      {
        heading: "Understand the model",
        links: [
          { label: "How it works", href: routes.howItWorks(), blurb: "From client brief to client delivery, step by step." },
          { label: "Why Mengo", href: routes.why(), blurb: "The argument, and where the boundary sits." },
          { label: "Responsible AI", href: routes.responsibleAi(), blurb: "What we will and will not do with client work." },
        ],
      },
    ],
    feature: {
      kicker: "Framework",
      title: "The Ownership Ledger",
      body: "A one-page method for deciding which parts of delivery stay with a person. Yours to use under your own name.",
      href: routes.framework("the-ownership-ledger"),
      cta: "Read the framework",
    },
  },

  {
    label: "Workflows",
    href: routes.workflows(),
    columns: [
      {
        heading: "Client delivery",
        headingHref: routes.workflows(),
        links: workflows.slice(0, 3).map((w) => ({
          label: w.navLabel ?? w.title,
          href: routes.workflow(w.slug),
          blurb: w.trigger,
        })),
      },
      {
        heading: " ",
        links: workflows.slice(3).map((w) => ({
          label: w.navLabel ?? w.title,
          href: routes.workflow(w.slug),
          blurb: w.trigger,
        })),
        seeAll: { label: "All workflows", href: routes.workflows() },
      },
      {
        heading: "Put them to work",
        links: [
          { label: "Playbooks", href: routes.playbooks(), blurb: "Operational documents to work through." },
          { label: "Frameworks", href: routes.frameworks(), blurb: "Structures to adopt under your own name." },
          { label: "Guides", href: routes.guides(), blurb: "Longer arguments about agency operations." },
        ],
      },
    ],
    feature: {
      kicker: "Every workflow",
      title: "Opens and closes with you",
      body: "Client contact is the first step and the last. Nothing reaches a client that a person did not hand over.",
      href: routes.howItWorks(),
      cta: "See the sequence",
    },
  },

  {
    label: "Industries",
    href: routes.industries(),
    columns: [
      {
        heading: "Client sectors",
        headingHref: routes.industries(),
        links: industries.slice(0, 3).map((i) => ({
          label: i.navLabel ?? i.title,
          href: routes.industry(i.slug),
        })),
      },
      {
        heading: " ",
        links: industries.slice(3).map((i) => ({
          label: i.navLabel ?? i.title,
          href: routes.industry(i.slug),
        })),
        seeAll: { label: "All industries", href: routes.industries() },
      },
      {
        heading: "Sector reading",
        links: [
          { label: "Using AI in client work responsibly", href: routes.guide("using-ai-in-client-work-responsibly"), blurb: "The risks, and the controls for each." },
          { label: "The Standard Client Brief", href: routes.framework("the-standard-client-brief"), blurb: "One brief structure across every sector." },
          { label: "Glossary", href: routes.glossary(), blurb: "Terms as an agency uses them." },
        ],
      },
    ],
  },

  {
    label: "Resources",
    href: routes.resources(),
    columns: [
      {
        heading: "Library",
        headingHref: routes.resources(),
        links: [
          { label: "Playbooks", href: routes.playbooks(), blurb: "Work through them on Monday." },
          { label: "Guides", href: routes.guides(), blurb: "Longer arguments, with conclusions." },
          { label: "Frameworks", href: routes.frameworks(), blurb: "Structures to adopt as your own." },
        ],
      },
      {
        heading: "Reading and reference",
        links: [
          { label: "Journal", href: routes.blog(), blurb: "Writing about agency operations." },
          { label: "Glossary", href: routes.glossary(), blurb: "Terms as an agency uses them." },
          { label: "FAQ", href: routes.faq(), blurb: "Every question on the site, in one place." },
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
    ],
    feature: {
      kicker: "Journal",
      title: "The agency bottleneck is not talent",
      body: "Agencies describe growth as a hiring problem. Measured honestly, it usually is not.",
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
 * The footer is the site's full index, so it does not repeat the mega menu's
 * curation — it lists everything, grouped the way the URL structure is
 * grouped. A reader who could not find something in the menu should find it
 * here without a search.
 */
export const footerColumns: FooterColumn[] = [
  {
    heading: "For agencies",
    headingHref: routes.forAgencies(),
    links: stages.map((s) => ({ label: s.navLabel ?? s.title, href: routes.stage(s.slug) })),
  },
  {
    heading: "Capabilities",
    headingHref: routes.capabilities(),
    links: capabilities.map((c) => ({ label: c.navLabel ?? c.title, href: routes.capability(c.slug) })),
  },
  {
    heading: "Workflows",
    headingHref: routes.workflows(),
    links: workflows.map((w) => ({ label: w.navLabel ?? w.title, href: routes.workflow(w.slug) })),
  },
  {
    heading: "Industries",
    headingHref: routes.industries(),
    links: industries.map((i) => ({ label: i.navLabel ?? i.title, href: routes.industry(i.slug) })),
  },
  {
    heading: "Use cases",
    headingHref: routes.useCases(),
    links: useCases.map((u) => ({ label: u.navLabel ?? u.title, href: routes.useCase(u.slug) })),
  },
  {
    heading: "Compare",
    headingHref: routes.compare(),
    links: comparisons.map((c) => ({ label: c.navLabel ?? c.title, href: routes.comparison(c.slug) })),
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
    ],
  },
  {
    heading: "Company",
    headingHref: routes.company(),
    links: [
      ...companyPages.map((c) => ({ label: c.navLabel ?? c.title, href: routes.companyPage(c.slug) })),
      { label: "Get started", href: routes.getStarted() },
      { label: "Sitemap", href: routes.sitemapPage() },
    ],
  },
];

/** Links that sit on the footer's bottom rule. */
export const footerLegal: NavLink[] = [
  { label: "Privacy", href: routes.legal("privacy") },
  { label: "Terms", href: routes.legal("terms") },
];
