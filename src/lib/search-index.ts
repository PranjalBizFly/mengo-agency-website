import { routes } from "@/lib/site";
import type { SearchRecord } from "@/lib/search";
import { stages } from "@/data/stages";
import { capabilities, capabilityStagePairs } from "@/data/capabilities";
import { capabilityGroups, groupBySlug } from "@/data/capability-groups";
import { workflows, WORKFLOW_PHASES } from "@/data/workflows";
import { industries, industryBySlug } from "@/data/industries";
import { industryCapabilities } from "@/data/industry-capabilities";
import { useCases, USE_CASE_PHASES } from "@/data/use-cases";
import { comparisons } from "@/data/comparisons";
import { playbooks } from "@/data/playbooks";
import { guides } from "@/data/guides";
import { frameworks } from "@/data/frameworks";
import { articles } from "@/data/articles";
import { glossaryTerms } from "@/data/glossary";
import { companyPages, legalPages } from "@/data/company";

/**
 * The search index, built from the same data the pages are built from.
 *
 * Server-only by construction: it imports the whole content corpus, so it must
 * never be pulled into a client bundle. The header dialog fetches it as JSON
 * from /api/search-index/; /explore/ receives it as props from a server
 * component. Both read it through @/lib/search, which has no data imports.
 *
 * Because it is derived rather than maintained, a page that exists is a page
 * that can be found, and there is no second list to forget to update.
 */

const stageLabel = new Map(stages.map((s) => [s.slug as string, s.navLabel ?? s.title]));
const capabilityBy = new Map(capabilities.map((c) => [c.slug, c]));
const workflowPhaseLabel = new Map(WORKFLOW_PHASES.map((p) => [p.slug as string, p.label]));
const goalPhaseLabel = new Map(USE_CASE_PHASES.map((p) => [p.slug as string, p.label]));

/** One sentence, trimmed. The index is fetched over the wire. */
function brief(text: string, max = 150): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const stop = cut.lastIndexOf(" ");
  return `${cut.slice(0, stop > 60 ? stop : max)}…`;
}

export const searchIndex: SearchRecord[] = [
  /* ---------------------------------------------------------------- Hubs */
  {
    t: "Mengo",
    u: routes.home(),
    sec: "Mengo",
    ty: "Page",
    s: "You keep the clients, the strategy and the final call. Mengo carries the structural work behind them.",
    kw: "home homepage start overview what is mengo",
  },
  {
    t: "Solutions",
    u: routes.solutions(),
    sec: "Solutions",
    ty: "Section",
    s: "The same body of work, organised by where you are and by what you are trying to do.",
    kw: "stage goal size overview index",
  },
  {
    t: "By stage",
    u: routes.stages(),
    sec: "Solutions",
    ty: "Section",
    s: "Five points on one path, from a first client to a standard held across teams.",
    kw: "starting solo small team growing established size ladder",
  },
  {
    t: "Use cases",
    u: routes.useCases(),
    sec: "Solutions",
    ty: "Section",
    s: "Twenty-one jobs people arrive holding, and what it takes to finish each one.",
    kw: "outcome objective goal job",
  },
  {
    t: "Capabilities",
    u: routes.capabilities(),
    sec: "Capabilities",
    ty: "Section",
    s: `The full taxonomy: ${capabilities.length} capabilities across ${capabilityGroups.length} groups.`,
    kw: "taxonomy features index everything",
  },
  {
    t: "Workflows",
    u: routes.workflows(),
    sec: "Workflows",
    ty: "Section",
    s: `${workflows.length} delivery sequences, from onboarding a client to running the business.`,
    kw: "process sequence delivery steps",
  },
  {
    t: "Industries",
    u: routes.industries(),
    sec: "Industries",
    ty: "Section",
    s: "The client sectors, and what each one does to the shape of the work.",
    kw: "sector vertical client market",
  },
  {
    t: "Compare",
    u: routes.compare(),
    sec: "Resources",
    ty: "Section",
    s: "Mengo set beside the alternatives, including the ones that are a better fit.",
    kw: "versus alternative choice",
  },
  {
    t: "Resources",
    u: routes.resources(),
    sec: "Resources",
    ty: "Section",
    s: "Playbooks, guides, frameworks, the journal, the glossary and every question answered.",
    kw: "library reading reference",
  },
  { t: "Playbooks", u: routes.playbooks(), sec: "Resources", ty: "Section", s: "Operational documents to work through, not to admire.", kw: "library" },
  { t: "Guides", u: routes.guides(), sec: "Resources", ty: "Section", s: "Longer arguments about how this work is run, with conclusions.", kw: "library reading" },
  { t: "Frameworks", u: routes.frameworks(), sec: "Resources", ty: "Section", s: "Structures to adopt and use under your own name.", kw: "library model" },
  { t: "Journal", u: routes.blog(), sec: "Resources", ty: "Section", s: "Writing about delivery, capacity and the economics of the work.", kw: "blog articles writing" },
  { t: "Glossary", u: routes.glossary(), sec: "Resources", ty: "Section", s: "Terms as this trade actually uses them.", kw: "definitions terminology" },
  { t: "Questions", u: routes.faq(), sec: "Resources", ty: "Section", s: "Every question asked anywhere on the site, gathered in one place.", kw: "faq answers help" },
  {
    t: "How it works",
    u: routes.howItWorks(),
    sec: "Mengo",
    ty: "Page",
    s: "The sequence, end to end: what you hand over, what comes back, and where you decide.",
    kw: "process onboarding sequence method",
  },
  {
    t: "Why Mengo",
    u: routes.why(),
    sec: "Mengo",
    ty: "Page",
    s: "The argument, and the boundary the whole thing is built on.",
    kw: "positioning reason argument",
  },
  {
    t: "Search",
    u: routes.search(),
    sec: "Mengo",
    ty: "Page",
    s: "Search every published page, with results carrying their type, their parent and the matched line.",
    kw: "find lookup query results",
  },
  {
    t: "Explore",
    u: routes.explore(),
    sec: "Mengo",
    ty: "Page",
    s: "Every page on the site, grouped by category and searchable from one field.",
    kw: "directory index all pages browse search",
  },
  {
    t: "Get started",
    u: routes.getStarted(),
    sec: "Mengo",
    ty: "Page",
    s: "What a first engagement looks like, and what to have ready.",
    kw: "pricing trial contact begin start",
  },
  { t: "Company", u: routes.company(), sec: "Company", ty: "Section", s: "Who builds this, and how it is meant to be used.", kw: "about team" },
  { t: "Sitemap", u: routes.sitemapPage(), sec: "Company", ty: "Page", s: "The complete list of published pages, grouped by section.", kw: "index all pages" },

  /* -------------------------------------------------------------- Stages */
  ...stages.map((stage): SearchRecord => ({
    t: stage.navLabel ?? stage.title,
    u: routes.stage(stage.slug),
    sec: "Solutions",
    ty: "Stage",
    s: brief(stage.shape),
    c: "By stage",
    st: stage.slug,
    kw: `${stage.headline} size`.toLowerCase(),
  })),

  /* --------------------------------------------------------------- Goals */
  ...useCases.map((goal): SearchRecord => ({
    t: goal.navLabel ?? goal.title,
    u: routes.useCase(goal.slug),
    sec: "Solutions",
    ty: "Use case",
    s: brief(goal.summary),
    c: goalPhaseLabel.get(goal.phase),
    p: goal.phase,
    kw: goal.headline.toLowerCase(),
  })),

  /* -------------------------------------------------------- Capabilities */
  ...capabilityGroups.map((group): SearchRecord => ({
    t: group.title,
    u: routes.capabilityGroup(group.slug),
    sec: "Capabilities",
    ty: "Capability group",
    s: brief(group.tagline),
    c: "The taxonomy",
    g: group.slug,
  })),

  ...capabilities.map((capability): SearchRecord => ({
    t: capability.title,
    u: routes.capability(capability.group, capability.slug),
    sec: "Capabilities",
    ty: "Capability",
    s: brief(capability.summary),
    c: groupBySlug.get(capability.group)?.title,
    g: capability.group,
    kw: capability.job.toLowerCase(),
  })),

  ...capabilityStagePairs().map(({ capability, stage }): SearchRecord => {
    const view = capability.stages.find((s) => s.stage === stage);
    return {
      t: `${capability.title} — ${stageLabel.get(stage) ?? stage}`,
      u: routes.capabilityStage(capability.group, capability.slug, stage),
      sec: "Capabilities",
      ty: "Capability by stage",
      s: brief(view?.headline ?? capability.summary),
      c: capability.title,
      g: capability.group,
      st: stage,
      kw: view?.relevance ?? "",
    };
  }),

  /* ----------------------------------------------------------- Workflows */
  ...workflows.map((workflow): SearchRecord => ({
    t: workflow.navLabel ?? workflow.title,
    u: routes.workflow(workflow.slug),
    sec: "Workflows",
    ty: "Workflow",
    s: brief(workflow.summary),
    c: workflowPhaseLabel.get(workflow.phase),
    p: workflow.phase,
    kw: `${workflow.trigger} ${workflow.stages.join(" ")}`.toLowerCase(),
  })),

  /* ---------------------------------------------------------- Industries */
  ...industries.map((industry): SearchRecord => ({
    t: industry.navLabel ?? industry.title,
    u: routes.industry(industry.slug),
    sec: "Industries",
    ty: "Sector",
    s: brief(industry.summary),
    c: "Client sectors",
    i: industry.slug,
  })),

  ...industryCapabilities.map((pair): SearchRecord => ({
    t: `${capabilityBy.get(pair.capability)?.title ?? pair.capability} for ${
      industryBySlug.get(pair.industry)?.title ?? pair.industry
    }`,
    u: routes.industryCapability(pair.industry, pair.capability),
    sec: "Industries",
    ty: "Capability by sector",
    s: brief(pair.headline),
    c: industryBySlug.get(pair.industry)?.title,
    i: pair.industry,
    g: capabilityBy.get(pair.capability)?.group,
  })),

  /* ----------------------------------------------------------- Resources */
  ...comparisons.map((comparison): SearchRecord => ({
    t: comparison.navLabel ?? comparison.title,
    u: routes.comparison(comparison.slug),
    sec: "Resources",
    ty: "Comparison",
    s: brief(comparison.summary),
    c: "Compare",
    kw: `versus vs ${comparison.other}`.toLowerCase(),
  })),

  ...playbooks.map((playbook): SearchRecord => ({
    t: playbook.navLabel ?? playbook.title,
    u: routes.playbook(playbook.slug),
    sec: "Resources",
    ty: "Playbook",
    s: brief(playbook.summary),
    c: "Playbooks",
  })),

  ...guides.map((guide): SearchRecord => ({
    t: guide.navLabel ?? guide.title,
    u: routes.guide(guide.slug),
    sec: "Resources",
    ty: "Guide",
    s: brief(guide.summary),
    c: "Guides",
  })),

  ...frameworks.map((framework): SearchRecord => ({
    t: framework.navLabel ?? framework.title,
    u: routes.framework(framework.slug),
    sec: "Resources",
    ty: "Framework",
    s: brief(framework.summary),
    c: "Frameworks",
  })),

  ...articles.map((article): SearchRecord => ({
    t: article.navLabel ?? article.title,
    u: routes.article(article.slug),
    sec: "Resources",
    ty: "Journal",
    s: brief(article.summary),
    c: article.topic,
  })),

  ...glossaryTerms.map((term): SearchRecord => ({
    t: term.navLabel ?? term.title,
    u: routes.glossaryTerm(term.slug),
    sec: "Resources",
    ty: "Glossary",
    s: brief(term.definition),
    c: "Glossary",
  })),

  /* ------------------------------------------------------------- Company */
  ...companyPages.map((page): SearchRecord => ({
    t: page.navLabel ?? page.title,
    u: routes.companyPage(page.slug),
    sec: "Company",
    ty: "Company",
    s: brief(page.summary),
    c: "Company",
  })),

  ...legalPages.map((page): SearchRecord => ({
    t: page.navLabel ?? page.title,
    u: routes.legal(page.slug),
    sec: "Company",
    ty: "Legal",
    s: brief(page.summary),
    c: "Legal",
  })),
];

/** The facet values the directory filters offer, in taxonomy order. */
export const facets = {
  sections: [...new Set(searchIndex.map((r) => r.sec))],
  types: [...new Set(searchIndex.map((r) => r.ty))].sort((a, b) => a.localeCompare(b)),
  stages: stages.map((s) => ({ value: s.slug as string, label: s.navLabel ?? s.title })),
  groups: capabilityGroups.map((g) => ({ value: g.slug as string, label: g.title })),
  industries: industries.map((i) => ({ value: i.slug, label: i.navLabel ?? i.title })),
};
