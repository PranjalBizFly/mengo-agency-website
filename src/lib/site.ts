/**
 * Site constants and the canonical URL builder.
 *
 * This is the Mengo *agency* property. It is a separate site from the Mengo
 * end-user product site at mengoengine.com, with its own positioning, its own
 * routes and its own content. The two are never merged: the end-user site sells
 * an AI co-founder to a business owner, and this one explains to an agency how
 * Mengo carries marketing work behind the agency's own client relationships.
 */

export const site = {
  name: "Mengo for Agencies",
  shortName: "Mengo",
  legalName: "Mengo Engine",
  /**
   * Deployment pending. Set this to the live origin before launch — every
   * canonical, Open Graph URL and sitemap entry is built from it, so it is the
   * one value that has to be right at cutover.
   */
  url: "https://agencies.mengoengine.com",
  tagline: "Build a better agency",
  promise: "Your agency stays the agency.",
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

  forAgencies: () => "/for-agencies/",
  stage: (slug: string) => `/for-agencies/${slug}/`,

  capabilities: () => "/capabilities/",
  capability: (slug: string) => `/capabilities/${slug}/`,

  workflows: () => "/workflows/",
  workflow: (slug: string) => `/workflows/${slug}/`,

  industries: () => "/industries/",
  industry: (slug: string) => `/industries/${slug}/`,

  useCases: () => "/use-cases/",
  useCase: (slug: string) => `/use-cases/${slug}/`,

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
  sitemapPage: () => "/sitemap/",
} as const;

/** Absolute URL, for canonicals, Open Graph and structured data. */
export function absolute(path: string): string {
  return `${site.url}${path}`;
}
