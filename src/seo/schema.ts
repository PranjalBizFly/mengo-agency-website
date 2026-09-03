import { absolute, routes, site } from "@/lib/site";
import type { Article, Faq, Framework, Guide, GlossaryTerm, Playbook, Workflow } from "@/lib/types";

/**
 * Structured data.
 *
 * Only types that describe what is genuinely on the page. No Review, no
 * AggregateRating, no fabricated Offer — the site has no reviews or ratings, so
 * emitting them would be both a policy violation and a lie in machine-readable
 * form.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    description: site.description,
    sameAs: [site.productSite, ...site.social.map((s) => s.href)],
    founder: { "@type": "Person", name: "Jainam Jain", url: site.founderSite },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(trail: { label: string; href: string }[]) {
  if (trail.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: absolute(crumb.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.summary,
    datePublished: article.published,
    dateModified: article.updated,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    mainEntityOfPage: absolute(routes.article(article.slug)),
    articleSection: article.topic,
    inLanguage: "en",
  };
}

/** Playbooks, guides and frameworks are all articles as far as search is concerned. */
export function documentSchema(entity: Playbook | Guide | Framework, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entity.headline,
    description: entity.summary,
    dateModified: entity.updated,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    mainEntityOfPage: absolute(path),
    inLanguage: "en",
  };
}

/**
 * A workflow's spine really is an ordered how-to, so HowTo is the accurate
 * type rather than a stretch for a rich result.
 */
export function howToSchema(workflow: Workflow) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: workflow.headline,
    description: workflow.summary,
    step: workflow.spine.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
    inLanguage: "en",
  };
}

export function definedTermSchema(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.title,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${site.name} glossary`,
      url: absolute(routes.glossary()),
    },
  };
}

export function collectionSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absolute(path),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    inLanguage: "en",
  };
}
