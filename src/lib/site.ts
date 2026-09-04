/**
 * Site constants and the canonical URL builder.
 *
 * This property is written from an agency's point of view. It is a separate
 * site from the Mengo end-user product site at mengoengine.com, with its own
 * positioning, routes and content. The two are never merged: the end-user site
 * sells an AI co-founder to a business owner who is their own marketing
 * function, and this one explains what the same co-founder is for a firm that
 * already has one: the structural half of the work, behind their own client
 * relationships.
 *
 * The name is "Mengo" and nothing longer. The audience is the perspective the
 * site is written from, not a phrase repeated into every title and nav label.
 */

export const site = {
  name: "Mengo",
  shortName: "Mengo",
  legalName: "Mengo Engine",
  /**
   * Deployment pending. Set this to the live origin before launch — every
   * canonical, Open Graph URL and sitemap entry is built from it, so it is the
   * one value that has to be right at cutover.
   */
  url: "https://agencies.mengoengine.com",
  tagline: "Your AI Co-founder",
  promise: "You stay the agency.",
  description:
    "Mengo works alongside your agency, not in place of it. You keep the clients, the strategy and the final call. Mengo carries the research, planning, content systems and nurturing workflows behind them, so a small team can deliver like a larger one.",
  locale: "en",
  twitter: "@MengoEngine",

  /** The end-user property. Referenced, never merged with this one. */
  productSite: "https://mengoengine.com",
  founderSite: "https://jainamjain.com",

  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/buildwithmengo" },
    { label: "X", href: "https://x.com/MengoEngine/" },
    { label: "Instagram", href: "https://www.instagram.com/buildwithmengo/" },
    { label: "Facebook", href: "https://www.facebook.com/buildwithmengo" },
    { label: "Medium", href: "https://medium.com/@buildwithmengo" },
  ],
} as const;

/* --------------------------------------------------------------------------
   URL architecture

   Every internal link on the site is built here, so a route rename is one
   edit rather than a grep. Section segments are plural nouns, entity segments
   are the entity slug, and every path ends in a trailing slash to match
   `trailingSlash: true` in next.config.
   ----------------------------------------------------------------------- */

export const routes = {
  home: () => "/",

  why: () => "/why-mengo/",
  howItWorks: () => "/how-it-works/",

  /**
   * Solutions is the reader-facing entry point: the same body of content
   * organised by who you are (stage) and by what you are trying to do (goal).
   * Both live under one segment because a reader arrives with one of those two
   * questions and should not have to know which section answers it.
   */
  solutions: () => "/solutions/",
  stages: () => "/solutions/stages/",
  stage: (slug: string) => `/solutions/stages/${slug}/`,
  useCases: () => "/solutions/use-cases/",
  useCase: (slug: string) => `/solutions/use-cases/${slug}/`,

  /**
   * Capabilities are nested under their group.
   *
   * Two reasons. The taxonomy has eight groups and sixty-four capabilities, and
   * a flat namespace makes that structure invisible in the URL. And two group
   * names — `brand` and `organization` — are also capability names, so a flat
   * namespace would collide outright.
   */
  capabilities: () => "/capabilities/",
  capabilityGroup: (group: string) => `/capabilities/${group}/`,
  capability: (group: string, slug: string) => `/capabilities/${group}/${slug}/`,
  /**
   * A capability seen from one stage.
   *
   * Nested under the capability because the capability is the subject and the
   * stage is the lens. It also keeps 260 pages out of /solutions/stages/,
   * where they would bury the five pages that matter most.
   */
  capabilityStage: (group: string, slug: string, stage: string) =>
    `/capabilities/${group}/${slug}/for/${stage}/`,

  workflows: () => "/workflows/",
  workflow: (slug: string) => `/workflows/${slug}/`,

  industries: () => "/industries/",
  industry: (slug: string) => `/industries/${slug}/`,
  /** One capability in one client sector. Curated pairs only, never crossed. */
  industryCapability: (industry: string, capability: string) => `/industries/${industry}/${capability}/`,

  compare: () => "/compare/",
  comparison: (slug: string) => `/compare/${slug}/`,

  resources: () => "/resources/",
  playbooks: () => "/resources/playbooks/",
  playbook: (slug: string) => `/resources/playbooks/${slug}/`,
  guides: () => "/resources/guides/",
  guide: (slug: string) => `/resources/guides/${slug}/`,
  frameworks: () => "/resources/frameworks/",
  framework: (slug: string) => `/resources/frameworks/${slug}/`,
  blog: () => "/resources/blog/",
  article: (slug: string) => `/resources/blog/${slug}/`,
  glossary: () => "/resources/glossary/",
  glossaryTerm: (slug: string) => `/resources/glossary/${slug}/`,
  faq: () => "/resources/faq/",

  company: () => "/company/",
  companyPage: (slug: string) => `/company/${slug}/`,
  about: () => "/company/about/",
  founder: () => "/company/founder/",
  responsibleAi: () => "/company/responsible-ai/",
  contact: () => "/company/contact/",

  legal: (slug: string) => `/legal/${slug}/`,

  getStarted: () => "/get-started/",
  explore: () => "/explore/",
  search: () => "/search/",
  /** A pre-filled results URL, for the dialog's hand-off to the full page. */
  searchFor: (query: string) => `/search/?q=${encodeURIComponent(query)}`,
  sitemapPage: () => "/sitemap/",
} as const;

/** Absolute URL, for canonicals, Open Graph and structured data. */
export function absolute(path: string): string {
  return `${site.url}${path}`;
}
