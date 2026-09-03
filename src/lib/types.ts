/**
 * Content types.
 *
 * The site has one shape per *archetype* rather than one shape for everything.
 * A stage page and a comparison page genuinely have different anatomy — a
 * stage has a day-in-the-life and a growth boundary, a comparison has a table
 * and an honest "when the other option is right" section — and flattening them
 * into a single `sections: Block[]` bag is what turns a site into a template.
 *
 * The shared parts are collected in `Meta`, which is what the SEO builder, the
 * registry and the sitemap all read.
 */

export type Kind =
  | "stage"
  | "capability"
  | "workflow"
  | "industry"
  | "use-case"
  | "comparison"
  | "playbook"
  | "guide"
  | "framework"
  | "article"
  | "glossary"
  | "company"
  | "legal";

/** Everything every routable entity carries. */
export interface Meta {
  kind: Kind;
  slug: string;
  title: string;
  /** Shorter label for navigation, where the full title is too long. */
  navLabel?: string;
  /** One sentence. Used as the meta description and as list-row copy. */
  summary: string;
  seoTitle?: string;
  seoDescription?: string;
  /** ISO date. Feeds `dateModified` in structured data and the sitemap. */
  updated: string;
}

/* ---------------------------------------------------------------- Shared */

/** A label and its explanation. The workhorse for read content. */
export interface Term {
  label: string;
  body: string;
}

/** A step in a sequence, attributed to the side that owns it. */
export interface Step {
  title: string;
  body: string;
  /**
   * Who does this step. The attribution is the argument, so it is required:
   * a step with no owner is exactly the ambiguity this site exists to remove.
   */
  lane: Lane;
}

export type Lane = "agency" | "mengo";

/** The two sides of the ownership ledger. */
export interface Ledger {
  agency: { heading: string; note: string; items: Term[] };
  mengo: { heading: string; note: string; items: Term[] };
}

export interface Faq {
  q: string;
  a: string;
}

/* -------------------------------------------------------- Stage archetype */

/**
 * An agency at one point on the growth path: starting, solo, small, growing,
 * large. This is the site's primary audience axis.
 */
export interface Stage extends Meta {
  kind: "stage";
  /** Position in the ladder, 0-indexed. Drives the rising tick. */
  order: number;
  /** The shorthand a reader recognises themselves in. */
  shape: string;
  /** Headline for the page. Longer and more specific than the title. */
  headline: string;
  lead: string;
  /** Where this stage actually spends its week. */
  situation: Term[];
  /** What breaks, in this stage's own words. */
  problems: Term[];
  /** What changes on the way to the next stage. */
  transition: { to: string; body: string };
  ledger: Ledger;
  /** The working week, as a sequence. */
  week: Step[];
  /** Capability slugs that matter most here. */
  capabilities: string[];
  /** Workflow slugs that matter most here. */
  workflows: string[];
  faqs: Faq[];
  cta: { label: string; href: string; note: string };
}

/* --------------------------------------------------- Capability archetype */

/** An area of marketing work Mengo carries behind the agency. */
export interface Capability extends Meta {
  kind: "capability";
  headline: string;
  lead: string;
  /** The one-line job. */
  job: string;
  /** What the agency hands over. */
  inputs: string[];
  /** What comes back. Concrete artefacts, not outcomes. */
  outputs: string[];
  /** How the work runs, as an attributed sequence. */
  sequence: Step[];
  /** Where the agency's judgement is required and cannot be delegated. */
  judgement: Term[];
  /** Deliberate limits. What this does not do. */
  limits: string[];
  related: { capabilities: string[]; workflows: string[] };
  faqs: Faq[];
}

/* ----------------------------------------------------- Workflow archetype */

/** A repeatable piece of client delivery, drawn end to end. */
export interface Workflow extends Meta {
  kind: "workflow";
  headline: string;
  lead: string;
  /** What triggers this workflow. */
  trigger: string;
  /** What the client actually receives at the end. */
  outcome: string;
  /** The spine. Every step attributed. */
  spine: Step[];
  /** What this replaces, honestly described. */
  before: Term[];
  /** What is different afterwards. */
  after: Term[];
  /** Checkpoints where the agency signs off. */
  checkpoints: string[];
  related: { capabilities: string[]; stages: string[] };
  faqs: Faq[];
}

/* ----------------------------------------------------- Industry archetype */

/** A client sector an agency sells into. */
export interface Industry extends Meta {
  kind: "industry";
  headline: string;
  lead: string;
  /** What is distinctive about marketing in this sector. */
  character: Term[];
  /** The specific delivery pressures an agency feels here. */
  pressures: Term[];
  /** Where the agency's own sector expertise is irreplaceable. */
  expertise: string[];
  /** Where Mengo carries the load. */
  support: Term[];
  /** Constraints that must be respected. Regulatory, factual, or contractual. */
  care: string[];
  related: { capabilities: string[]; workflows: string[] };
  faqs: Faq[];
}

/* ----------------------------------------------------- Use case archetype */

/** A goal an agency comes to the site holding. */
export interface UseCase extends Meta {
  kind: "use-case";
  headline: string;
  lead: string;
  /** The situation, stated as the reader would state it. */
  situation: string;
  /** Why the obvious answer does not work. */
  obstacle: Term[];
  /** The approach, as an ordered argument. */
  approach: Term[];
  /** What to expect, described without fabricated numbers. */
  expectations: string[];
  /** Who this is not for. */
  notFor: string[];
  related: { stages: string[]; workflows: string[] };
  faqs: Faq[];
}

/* ---------------------------------------------------- Comparison archetype */

export interface ComparisonRow {
  dimension: string;
  other: string;
  mengo: string;
}

/** An honest comparison against the alternative an agency is actually weighing. */
export interface Comparison extends Meta {
  kind: "comparison";
  /** What Mengo is being compared with. */
  other: string;
  headline: string;
  lead: string;
  /** The question the reader is really asking. */
  question: string;
  rows: ComparisonRow[];
  /** When the other option is the right answer. Required — a comparison
      without this section is marketing, not a comparison. */
  chooseOther: Term[];
  chooseMengo: Term[];
  /** They are not always alternatives. Where they combine. */
  together: string;
  faqs: Faq[];
}

/* ------------------------------------------------------ Resource archetypes */

/** A block of long-form content. */
export type Block =
  | { type: "text"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: Step[] }
  | { type: "terms"; items: Term[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "ledger"; ledger: Ledger }
  | { type: "note"; text: string };

/** A step-by-step operational document. */
export interface Playbook extends Meta {
  kind: "playbook";
  headline: string;
  lead: string;
  /** Who this is written for. */
  audience: string;
  /** How long it takes to work through. */
  effort: string;
  blocks: Block[];
  related: { workflows: string[]; capabilities: string[] };
}

/** A long-form explanatory article. */
export interface Guide extends Meta {
  kind: "guide";
  headline: string;
  lead: string;
  audience: string;
  blocks: Block[];
  related: { stages: string[]; useCases: string[] };
}

/** A named, reusable structure an agency can adopt. */
export interface Framework extends Meta {
  kind: "framework";
  headline: string;
  lead: string;
  /** The problem the framework resolves. */
  problem: string;
  /** The parts of the framework. */
  parts: Term[];
  blocks: Block[];
  related: { workflows: string[]; playbooks: string[] };
}

/** An editorial post. */
export interface Article extends Meta {
  kind: "article";
  headline: string;
  lead: string;
  published: string;
  readingMinutes: number;
  topic: string;
  blocks: Block[];
}

/** A defined term. */
export interface GlossaryTerm extends Meta {
  kind: "glossary";
  /** The definition, in one paragraph. */
  definition: string;
  /** Why an agency should care. */
  why: string;
  /** Common confusion worth clearing up. */
  confusion?: string;
  seeAlso: string[];
}

/* ------------------------------------------------------ Company and legal */

export interface CompanyPage extends Meta {
  kind: "company";
  headline: string;
  lead: string;
  blocks: Block[];
}

export interface LegalPage extends Meta {
  kind: "legal";
  headline: string;
  lead: string;
  blocks: Block[];
}

export type Entity =
  | Stage
  | Capability
  | Workflow
  | Industry
  | UseCase
  | Comparison
  | Playbook
  | Guide
  | Framework
  | Article
  | GlossaryTerm
  | CompanyPage
  | LegalPage;
