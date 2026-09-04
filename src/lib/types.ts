/**
 * Content types.
 *
 * The site has one shape per *archetype* rather than one shape for everything.
 * A stage page and a comparison page genuinely have different anatomy, and
 * flattening them into a single `sections: Block[]` bag is what turns a site
 * into a template.
 *
 * The central relationship is capability × agency stage. A capability means
 * something different to a one-person studio and to a forty-person agency —
 * different problem, different priority, sometimes "not yet, and here is what
 * to do first". That difference is data, not prose, so it can be rendered as a
 * section on the capability page and as a page of its own.
 */

export type Kind =
  | "stage"
  | "capability"
  | "capability-stage"
  | "capability-group"
  | "workflow"
  | "industry"
  | "industry-capability"
  | "use-case"
  | "comparison"
  | "playbook"
  | "guide"
  | "framework"
  | "article"
  | "glossary"
  | "company"
  | "legal";

/** The five points on the agency growth path. Union rather than string so a
    capability cannot claim a stage that does not exist. */
export type StageSlug =
  | "starting"
  | "solo"
  | "small-team"
  | "growing"
  | "established";

export const STAGE_SLUGS: StageSlug[] = [
  "starting",
  "solo",
  "small-team",
  "growing",
  "established",
];

/** The eight groups the capability taxonomy divides into. */
export type GroupSlug =
  | "foundation"
  | "brand"
  | "marketing"
  | "sales"
  | "content"
  | "programs"
  | "organization"
  | "system";

/** Everything every routable entity carries. */
export interface Meta {
  kind: Kind;
  slug: string;
  title: string;
  navLabel?: string;
  /** One sentence. Used as the meta description and as list-row copy. */
  summary: string;
  seoTitle?: string;
  seoDescription?: string;
  /** ISO date. Feeds `dateModified` in structured data and the sitemap. */
  updated: string;
}

/* ---------------------------------------------------------------- Shared */

export interface Term {
  label: string;
  body: string;
}

export type Lane = "agency" | "mengo";

/** A step in a sequence, attributed to the side that owns it. */
export interface Step {
  title: string;
  body: string;
  lane: Lane;
}

export interface Ledger {
  agency: { heading: string; note: string; items: Term[] };
  mengo: { heading: string; note: string; items: Term[] };
}

export interface Faq {
  q: string;
  a: string;
}

/* -------------------------------------------------------- Stage archetype */

export interface Stage extends Meta {
  kind: "stage";
  slug: StageSlug;
  /** Position in the ladder, 0-indexed. Drives the rising tick. */
  order: number;
  /** The shorthand a reader recognises themselves in. */
  shape: string;
  headline: string;
  lead: string;
  situation: Term[];
  problems: Term[];
  transition: { to: string; body: string };
  ledger: Ledger;
  /** The working week, as a sequence. */
  week: Step[];
  capabilities: string[];
  workflows: string[];
  faqs: Faq[];
  cta: { label: string; href: string; note: string };
}

/* --------------------------------------------------- Capability archetype */

/**
 * How much of a capability's meaning actually changes with agency size.
 *
 * `staged` capabilities get a page per stage, because the problem genuinely
 * differs. `flat` ones — a settings screen, an audit log — do not, and giving
 * them five near-identical pages would be exactly the thin-SEO padding this
 * site is supposed to avoid.
 */
export type CapabilityDepth = "staged" | "flat";

/**
 * How much a capability matters at a given stage.
 *
 * `later` is the useful one and the reason this field exists: an honest
 * capability page tells a one-person studio which things to leave alone, and
 * what to do instead.
 */
export type Relevance = "core" | "useful" | "later";

/** A capability seen from one agency stage. */
export interface CapabilityStage {
  stage: StageSlug;
  relevance: Relevance;
  /** Stage-specific headline. Never the capability's own headline repeated. */
  headline: string;
  /** What this looks like at this stage, in that reader's language. */
  situation: string;
  /** The specific thing that goes wrong here. */
  problem: string;
  /** What Mengo structures at this stage. */
  mengo: string[];
  /** What stays with the agency. Always present; the boundary never moves. */
  agency: string[];
  /** What is different afterwards. No numbers — we have none. */
  outcome: string;
  /** For `later`: what to do first instead. Required when relevance is later. */
  insteadDoThis?: string;
}

export interface Capability extends Meta {
  kind: "capability";
  group: GroupSlug;
  depth: CapabilityDepth;
  headline: string;
  lead: string;
  /** What the capability actually is. Plain definition, no selling. */
  meaning: string;
  /** Why an agency should care. */
  whyAgencies: Term[];
  /** The one-line job. */
  job: string;
  inputs: string[];
  outputs: string[];
  sequence: Step[];
  /** Where the agency's judgement is required and cannot be delegated. */
  judgement: Term[];
  /** Deliberate limits. What this does not do. */
  limits: string[];
  /** One entry per stage, in ladder order. Empty when depth is "flat". */
  stages: CapabilityStage[];
  related: { capabilities: string[]; workflows: string[]; useCases: string[] };
  faqs: Faq[];
}

/** A capability group — Foundation, Brand, Marketing and so on. */
export interface CapabilityGroup extends Meta {
  kind: "capability-group";
  slug: GroupSlug;
  headline: string;
  lead: string;
  /** What this group of capabilities has in common. Used on the hubs. */
  character: string;
  /**
   * A short line for navigation. Separate from `character` because the mega
   * panel needs one comparable length across eight columns, and a first
   * sentence trimmed from prose is not that.
   */
  tagline: string;
  /** Why an agency reaches for this group. */
  whyGroup: Term[];
  /** The order the group's capabilities are usually adopted in. */
  adoptionOrder: Term[];
  faqs: Faq[];
}

/* ----------------------------------------------------- Workflow archetype */

export interface Workflow extends Meta {
  kind: "workflow";
  /** Which part of delivery this belongs to. Groups the workflows index. */
  phase: "onboarding" | "planning" | "production" | "conversion" | "operations";
  headline: string;
  lead: string;
  trigger: string;
  outcome: string;
  spine: Step[];
  before: Term[];
  after: Term[];
  checkpoints: string[];
  /** Which stages this workflow is most relevant to. */
  stages: StageSlug[];
  related: { capabilities: string[]; workflows: string[]; useCases: string[] };
  faqs: Faq[];
}

/* ----------------------------------------------------- Industry archetype */

/**
 * How client sectors group.
 *
 * Ten sectors in one alphabetical list is a dump; grouped by what the marketing
 * actually has to contend with, it is a map. The axis is the constraint, not
 * the industry classification: healthcare, financial services and education sit
 * together because in all three what may be said is decided outside the agency.
 */
export type Sector = "technical" | "considered" | "commerce" | "built";

export interface Industry extends Meta {
  kind: "industry";
  sector: Sector;
  headline: string;
  lead: string;
  character: Term[];
  pressures: Term[];
  expertise: string[];
  support: Term[];
  care: string[];
  /** Capability slugs that get their own industry page. Curated, not crossed. */
  capabilities: string[];
  related: { workflows: string[]; useCases: string[] };
  faqs: Faq[];
}

/**
 * One capability, in one client sector.
 *
 * These exist only where the combination genuinely changes the work — a
 * content system for a regulated healthcare client is a different job from one
 * for a D2C brand. The pairs are listed on the industry, never crossed
 * automatically, so an empty combination cannot be generated.
 */
export interface IndustryCapability {
  kind: "industry-capability";
  industry: string;
  capability: string;
  headline: string;
  lead: string;
  /** What is different about this capability in this sector. */
  difference: Term[];
  /** Sector constraints that bear on this capability specifically. */
  care: string[];
  /** What the agency contributes that no system can. */
  expertise: string[];
  updated: string;
}

/* ----------------------------------------------------- Use case archetype */

export interface UseCase extends Meta {
  kind: "use-case";
  /** Groups the use-case index: getting going, delivering, scaling. */
  phase: "start" | "deliver" | "scale";
  headline: string;
  lead: string;
  situation: string;
  obstacle: Term[];
  approach: Term[];
  expectations: string[];
  notFor: string[];
  stages: StageSlug[];
  related: { workflows: string[]; capabilities: string[] };
  faqs: Faq[];
}

/* ---------------------------------------------------- Comparison archetype */

export interface ComparisonRow {
  dimension: string;
  other: string;
  mengo: string;
}

export interface Comparison extends Meta {
  kind: "comparison";
  other: string;
  headline: string;
  lead: string;
  question: string;
  rows: ComparisonRow[];
  chooseOther: Term[];
  chooseMengo: Term[];
  together: string;
  faqs: Faq[];
}

/* ------------------------------------------------------ Resource archetypes */

export type Block =
  | { type: "text"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: Step[] }
  | { type: "terms"; items: Term[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "ledger"; ledger: Ledger }
  | { type: "note"; text: string };

export interface Playbook extends Meta {
  kind: "playbook";
  headline: string;
  lead: string;
  audience: string;
  effort: string;
  blocks: Block[];
  related: { workflows: string[]; capabilities: string[] };
}

export interface Guide extends Meta {
  kind: "guide";
  headline: string;
  lead: string;
  audience: string;
  blocks: Block[];
  related: { stages: string[]; useCases: string[] };
}

export interface Framework extends Meta {
  kind: "framework";
  headline: string;
  lead: string;
  problem: string;
  parts: Term[];
  blocks: Block[];
  related: { workflows: string[]; playbooks: string[] };
}

export interface Article extends Meta {
  kind: "article";
  headline: string;
  lead: string;
  published: string;
  readingMinutes: number;
  topic: string;
  blocks: Block[];
}

export interface GlossaryTerm extends Meta {
  kind: "glossary";
  definition: string;
  why: string;
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
  | CapabilityGroup
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
