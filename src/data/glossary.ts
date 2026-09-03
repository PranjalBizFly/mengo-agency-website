import type { GlossaryTerm } from "@/lib/types";

/**
 * Terms as an agency uses them.
 *
 * A glossary earns its place by settling arguments, so each entry carries a
 * `why` — the reason an agency should care — and, where a term is routinely
 * confused with something else, a `confusion` note. Definitions that only
 * define are the reason most glossaries go unread.
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    kind: "glossary",
    slug: "account-ownership",
    title: "Account ownership",
    summary: "The named person accountable for a client account's outcome, relationship and quality.",
    updated: "2026-08-30",
    definition:
      "The individual who is answerable for a client account: the relationship, the strategic direction, the quality of what ships and the commercial health of the engagement. Ownership is a single named person, not a team and not a role description.",
    why:
      "Accounts without a named owner degrade quietly. Work still happens, but nobody is watching the whole of it, so drift is discovered by the client rather than by the agency.",
    confusion:
      "Often confused with being the day-to-day contact. The contact answers emails; the owner is accountable for whether the engagement is working.",
    seeAlso: ["delivery-standard", "escalation-path"],
  },
  {
    kind: "glossary",
    slug: "capacity-model",
    title: "Capacity model",
    summary: "An arithmetic account of what an additional client costs an agency to deliver.",
    updated: "2026-08-30",
    definition:
      "A simple model separating the hours an account consumes regardless of size from those that scale with what the client receives, used to answer whether the agency can take on more work.",
    why:
      "Without one, the decision to accept a client is made on instinct in whatever month the prospect happens to call — which produces over-commitment in thin months.",
    confusion:
      "Not the same as utilisation. Utilisation says how full you are; a capacity model says what the next account would cost and which constraint binds first.",
    seeAlso: ["fixed-cost-per-account", "review-capacity"],
  },
  {
    kind: "glossary",
    slug: "context-reassembly",
    title: "Context reassembly",
    summary: "The time spent reloading what you already knew about a client before you can start work.",
    updated: "2026-08-30",
    definition:
      "Re-reading a client's positioning, previous work, tone preferences and recent decisions in order to begin a new piece of work. It occurs before nearly every task and appears on no task list.",
    why:
      "It is the largest untracked category in most agency weeks and it scales with the number of context switches rather than the volume of work, which is why account count is so much more expensive than it looks.",
    seeAlso: ["strategic-layer", "fixed-cost-per-account"],
  },
  {
    kind: "glossary",
    slug: "delivery-standard",
    title: "Delivery standard",
    summary: "A written definition of what good looks like at a particular agency.",
    updated: "2026-08-30",
    definition:
      "The agency's own documented account of what work has to be and do before it may reach a client. Specific enough that two reviewers reach the same verdict on the same piece of work.",
    why:
      "Quality without a written standard is a property of whoever reviewed it. Clients experience that variance as inconsistency, which damages a relationship faster than modest work does.",
    confusion:
      "Not a brand guideline. A brand guideline describes how things should look and sound; a delivery standard describes what has to be true before anything ships.",
    seeAlso: ["review-checkpoint", "account-ownership"],
  },
  {
    kind: "glossary",
    slug: "escalation-path",
    title: "Escalation path",
    summary: "The defined route by which something unusual reaches a person with authority to decide.",
    updated: "2026-08-30",
    definition:
      "A named route for situations outside the standard process: who is consulted, who decides, and how quickly. Every documented process needs one, or it will be ignored the first time a client needs something unusual.",
    why:
      "A process with no exception route is abandoned rather than followed, because reality produces exceptions and people need somewhere to take them.",
    seeAlso: ["delivery-standard", "review-checkpoint"],
  },
  {
    kind: "glossary",
    slug: "editorial-guardrails",
    title: "Editorial guardrails",
    summary: "The rules governing what may be claimed in a client's material.",
    updated: "2026-08-30",
    definition:
      "A per-client record of claims that are permitted, claims that require evidence, claims that are prohibited, and the facts that must be supplied by the client rather than assumed.",
    why:
      "Guardrails are a client-safety mechanism, not a style preference. In regulated sectors they are the difference between marketing and a compliance incident.",
    confusion:
      "Distinct from a voice profile. The voice profile governs how something is said; guardrails govern whether it may be said at all.",
    seeAlso: ["voice-profile", "gap-flagging"],
  },
  {
    kind: "glossary",
    slug: "fixed-cost-per-account",
    title: "Fixed cost per account",
    summary: "The delivery hours an account consumes regardless of its size.",
    updated: "2026-08-30",
    definition:
      "Onboarding, the strategic layer, the reporting rhythm and relationship maintenance. Broadly the same effort for a small client as a large one.",
    why:
      "It is why small retainers are so often unprofitable, and why reducing it changes what an agency can take on more than working faster does.",
    seeAlso: ["capacity-model", "context-reassembly"],
  },
  {
    kind: "glossary",
    slug: "gap-flagging",
    title: "Gap flagging",
    summary: "Marking a missing fact as missing rather than producing a plausible substitute.",
    updated: "2026-08-30",
    definition:
      "The practice of a draft explicitly recording where it needed information that was never supplied, instead of generating something that reads correctly.",
    why:
      "A visible gap is safe and takes thirty seconds to fill. A confident invention survives review and reaches a client, and it is the single most common way generated work causes real damage.",
    seeAlso: ["editorial-guardrails", "review-checkpoint"],
  },
  {
    kind: "glossary",
    slug: "lane-attribution",
    title: "Lane attribution",
    summary: "Recording, for each step of a workflow, which side owns it.",
    updated: "2026-08-30",
    definition:
      "Marking every step in a delivery process as agency-owned or supported, so that responsibility is explicit at every point rather than inferred.",
    why:
      "Ambiguous ownership resolves under deadline in favour of whoever is closest to the deadline, which is how review steps quietly disappear.",
    seeAlso: ["ownership-ledger", "review-checkpoint"],
  },
  {
    kind: "glossary",
    slug: "nurture-sequence",
    title: "Nurture sequence",
    summary: "An ordered series of follow-up messages built around objections rather than a schedule.",
    updated: "2026-08-30",
    definition:
      "A set of messages sent to a segment after an enquiry, each with a defined job, ordered by the objection it addresses and paced against the buying cycle.",
    why:
      "Most businesses lose more leads to silence than to competitors, and nurturing is the scope item most often sold and least often built.",
    confusion:
      "Not a drip campaign. A drip is defined by timing; a nurture sequence is defined by the objection each message answers, which is why cadence follows the buying cycle rather than a template.",
    seeAlso: ["objection-inventory", "re-engagement-flow"],
  },
  {
    kind: "glossary",
    slug: "objection-inventory",
    title: "Objection inventory",
    summary: "A recorded list of what actually stops a client's buyers from buying.",
    updated: "2026-08-30",
    definition:
      "The reasons prospective customers hesitate, collected from the client's sales reality rather than assumed, and mapped to the segment that holds each one.",
    why:
      "It is the input nurturing depends on. Sequences built on assumed objections answer questions nobody asked, which is why they underperform without anyone knowing why.",
    seeAlso: ["nurture-sequence", "segment"],
  },
  {
    kind: "glossary",
    slug: "ownership-ledger",
    title: "Ownership ledger",
    summary: "A two-column division of client delivery into agency-owned and supported work.",
    updated: "2026-08-30",
    definition:
      "A single-page artefact assigning every activity in an engagement to exactly one lane, with the transitions between lanes marked as required checkpoints.",
    why:
      "It converts an implicit boundary into an explicit one, decided when nobody is under pressure rather than in week eleven of a difficult quarter.",
    seeAlso: ["lane-attribution", "review-checkpoint"],
  },
  {
    kind: "glossary",
    slug: "re-engagement-flow",
    title: "Re-engagement flow",
    summary: "A sequence aimed at contacts who once showed interest and then went quiet.",
    updated: "2026-08-30",
    definition:
      "Messaging designed for a list that has gone cold: people who enquired, downloaded or engaged and were never followed up, or were followed up and stopped responding.",
    why:
      "For most clients this is the largest group of people who have already raised their hand, and it is almost always the group with no plan attached to it.",
    seeAlso: ["nurture-sequence", "objection-inventory"],
  },
  {
    kind: "glossary",
    slug: "review-capacity",
    title: "Review capacity",
    summary: "The volume of work an agency's competent reviewers can actually stand behind.",
    updated: "2026-08-30",
    definition:
      "The real limit on how much work an agency can ship, measured in what its qualified reviewers can properly assess rather than in what can be produced.",
    why:
      "When production stops being the constraint, this becomes it. An agency that does not model review capacity simply relocates its bottleneck without noticing.",
    seeAlso: ["review-checkpoint", "capacity-model"],
  },
  {
    kind: "glossary",
    slug: "review-checkpoint",
    title: "Review checkpoint",
    summary: "A required step where a named person assesses work before it proceeds.",
    updated: "2026-08-30",
    definition:
      "A point in a workflow that work cannot pass without a person's assessment against a written standard. A step, not a guideline.",
    why:
      "Guidelines lose to deadlines. A checkpoint written into the workflow is the only version of a review requirement that survives a bad week.",
    seeAlso: ["delivery-standard", "review-capacity"],
  },
  {
    kind: "glossary",
    slug: "segment",
    title: "Segment",
    summary: "A group of a client's buyers distinct enough to need different messaging.",
    updated: "2026-08-30",
    definition:
      "A division of a client's audience worth separating because the objection they hold, or the outcome they want, differs enough to change what should be said to them.",
    why:
      "Segments defined by demographics rather than by objection produce different labels on identical messaging, which costs production effort and gains nothing.",
    confusion:
      "Not a persona. A persona describes a person; a useful segment describes a difference that changes the message.",
    seeAlso: ["objection-inventory", "strategic-layer"],
  },
  {
    kind: "glossary",
    slug: "strategic-layer",
    title: "Strategic layer",
    summary: "A client's positioning, segments, offer structure and channel priorities held as a stored object.",
    updated: "2026-08-30",
    definition:
      "The stored, editable record of a client's strategy that all downstream work inherits from, rather than a document produced once and referenced occasionally.",
    why:
      "When strategy is a document, updating it is a project and it goes stale. When it is an object, a change is an edit and everything downstream reflows.",
    seeAlso: ["context-reassembly", "segment"],
  },
  {
    kind: "glossary",
    slug: "structural-work",
    title: "Structural work",
    summary: "Necessary delivery work that two competent practitioners would do the same way.",
    updated: "2026-08-30",
    definition:
      "Research assembly, planning scaffolding, brief preparation and first drafts — work that is required, repetitive between accounts, and largely invariant to who does it.",
    why:
      "Distinguishing it from judgement work is the decision that determines what may be systematised. Getting the line wrong in either direction is how agencies either stay stuck or lose what makes them worth hiring.",
    confusion:
      "Not the same as unimportant work. Structural work is essential; it simply does not vary with the practitioner.",
    seeAlso: ["ownership-ledger", "lane-attribution"],
  },
  {
    kind: "glossary",
    slug: "voice-profile",
    title: "Voice profile",
    summary: "A record of how a specific client sounds, written from evidence rather than aspiration.",
    updated: "2026-08-30",
    definition:
      "A per-client description of observable language behaviour: sentence length, formality, humour, person, the words they always use and the words they never use.",
    why:
      "Most voice documents describe how a client would like to sound, which is useless for producing work. One written from their existing material is usable immediately.",
    seeAlso: ["editorial-guardrails", "delivery-standard"],
  },
  {
    kind: "glossary",
    slug: "rework",
    title: "Rework",
    summary: "Work redone because a brief was unclear or an approval changed late.",
    updated: "2026-08-30",
    definition:
      "Delivery hours spent producing something a second time, usually as a consequence of an ambiguous brief, a missing fact or a decision made after production started.",
    why:
      "Unlike most delivery costs it is pure waste and it is directly fixable, which makes it the highest-return category to measure and reduce.",
    seeAlso: ["gap-flagging", "review-checkpoint"],
  },
];

export const glossaryBySlug = new Map(glossaryTerms.map((t) => [t.slug, t]));
