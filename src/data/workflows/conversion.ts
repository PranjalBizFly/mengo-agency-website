import type { Workflow } from "@/lib/types";

/**
 * Conversion workflows — what happens after marketing has produced interest.
 *
 * These sit at the boundary where the agency hands over to a person, which is
 * where attribution arguments start and where most enquiries are lost.
 */
export const conversionWorkflows: Workflow[] = [
  {
    kind: "workflow",
    slug: "lead-nurturing-flows",
    title: "Lead Nurturing",
    navLabel: "Lead Nurturing",
    phase: "conversion",
    headline: "Build the follow-up that was in the proposal",
    lead:
      "Nurturing is the part of an agency's scope with the widest gap between what was sold and what was built. It is not difficult work. It is work with no deadline attached, which means it loses to everything that has one.",
    summary:
      "Mapping the real enquiry journey, building objection-led sequences per segment, and handing them to the client's own sending tools.",
    seoTitle: "Agency lead nurturing workflow",
    seoDescription:
      "A workflow for client nurture sequences: map the real journey, collect genuine objections, draft per segment, review for tone and compliance, load into the client's tools.",
    updated: "2026-09-02",
    trigger: "A client generating enquiries that are not being followed up systematically.",
    outcome: "Reviewed sequences running in the client's own sending platform, under the client's consent.",
    spine: [
      { title: "Agency maps what actually happens", body: "Not the process on the proposal — the real one, including the enquiries answered on Thursday if someone remembers.", lane: "agency" },
      { title: "Agency collects real objections", body: "From the client's sales team. Assumed objections produce sequences answering questions nobody asked.", lane: "agency" },
      { title: "Segments and cadence derived", body: "Which groups need separating, and the rhythm each one's buying cycle supports.", lane: "mengo" },
      { title: "Sequences drafted per segment", body: "Each message with a defined job, ordered by objection rather than by countdown.", lane: "mengo" },
      { title: "Re-engagement flows built", body: "For the list that has gone quiet, which for most clients is the largest untouched group they have.", lane: "mengo" },
      { title: "Agency reviews tone and claims", body: "Would this annoy the client's actual customers? Is every claim safe?", lane: "agency" },
      { title: "Agency checks consent and compliance", body: "Who may be contacted, on what basis. A legal question owned by the agency and client.", lane: "agency" },
      { title: "Agency loads and activates", body: "Into the client's own platform, where deliverability and consent live.", lane: "agency" },
      { title: "Agency reviews performance with the client", body: "And decides what to change, which is a judgement about the client's customers.", lane: "agency" },
    ],
    before: [
      { label: "The first reply is excellent and the fifth does not exist", body: "Almost universally true, and almost never on anyone's list to fix." },
      { label: "Everyone gets the same sequence", body: "Which means it is written for nobody in particular and reads that way." },
      { label: "The quiet list is never touched", body: "The largest group of people who once raised their hand has no plan attached to it." },
    ],
    after: [
      { label: "The sequence exists", body: "Which sounds trivial and is the actual difference for most clients." },
      { label: "Segments get different messages", body: "Because the objection a first-time enquirer holds is not the one a returning customer holds." },
      { label: "Re-engagement is a built flow", body: "Rather than an idea somebody mentions in a quarterly review." },
    ],
    checkpoints: [
      "The agency maps the real journey before anything is drafted.",
      "Objections come from the client's sales reality, not from assumption.",
      "The agency reviews tone and claims before activation.",
      "The agency verifies consent and loads into the client's own sending platform.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["whatsapp-nurturing", "email-templates", "icps-and-personas", "sales-script"],
      workflows: ["sales-enablement", "client-onboarding", "icp-and-persona-development"],
      useCases: ["improve-sales-enablement", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Who is responsible for consent and compliance?",
        a: "The agency and the client, according to their contract. Nothing here sends, holds contact lists or decides who may be contacted — which is precisely why that responsibility cannot sit anywhere else.",
      },
      {
        q: "How long should a sequence be?",
        a: "As long as it has something useful to say. A sequence that repeats the pitch louder each time is worse than a shorter one that stops.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "sales-enablement",
    title: "Sales Enablement",
    navLabel: "Sales Enablement",
    phase: "conversion",
    headline: "Closing the gap between the marketing and the conversation",
    lead:
      "Marketing generates the conversation and then has no visibility of it. Sales enablement is the work of making sure the conversation says what the marketing promised — and of finding out what buyers actually object to.",
    summary:
      "Conversation structure, objection responses and collateral that match the marketing message, plus a feedback route from sales back into positioning.",
    seoTitle: "Sales enablement workflow for agencies",
    seoDescription:
      "A workflow connecting client marketing to the sales conversation: conversation structure, objection responses, collateral, and feedback into positioning.",
    updated: "2026-09-02",
    trigger: "A client converting enquiries inconsistently, or blaming enquiry quality.",
    outcome: "A sales conversation consistent with the marketing, and an objection loop feeding back into it.",
    spine: [
      { title: "Agency observes what already works", body: "The client's best salesperson handles objections well. Start there rather than from theory.", lane: "agency" },
      { title: "Conversation structure drafted", body: "Discovery ordered so each answer informs the next question.", lane: "mengo" },
      { title: "Objection responses built", body: "From the real inventory, in the client's voice, matching the written material.", lane: "mengo" },
      { title: "Collateral aligned to the message", body: "What gets sent after the call, consistent with the positioning rather than written per deal.", lane: "mengo" },
      { title: "Agency refines with the people who will use it", body: "Material developed without the sales team is material the sales team ignores.", lane: "agency" },
      { title: "Client's team adopts it", body: "Adoption is a management problem rather than a document problem.", lane: "agency" },
      { title: "New objections feed back", body: "What buyers actually say updates the inventory, which updates the marketing.", lane: "agency" },
    ],
    before: [
      { label: "Marketing and sales say different things", body: "Which a buyer comparing them notices immediately." },
      { label: "Collateral is written per deal", body: "By whoever needed it, under deadline, from memory." },
      { label: "Objection data never reaches marketing", body: "So the positioning is optimised without the best available feedback." },
    ],
    after: [
      { label: "The conversation matches the material", body: "Because both inherit from the same message hierarchy." },
      { label: "Collateral exists before it is needed", body: "Rather than being improvised at the point of a deal." },
      { label: "Objections flow back into positioning", body: "Which is the most valuable feedback loop an agency can build." },
    ],
    checkpoints: [
      "The agency observes the existing sales conversation before designing anything.",
      "Material is refined with the people who will use it.",
      "Written claims are approved by the client.",
      "New objections are routed back into the strategic layer.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["sales-script", "sales-collateral", "presentations-and-pitches", "faq-bank"],
      workflows: ["lead-nurturing-flows", "client-review", "icp-and-persona-development"],
      useCases: ["improve-sales-enablement", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Is this really marketing's job?",
        a: "The boundary is arbitrary and the client does not care where it sits. If the marketing generates conversations that do not convert, the agency is being judged on it either way.",
      },
      {
        q: "We cannot get access to the client's sales team.",
        a: "Ask, and be specific about why. An hour with their best salesperson is the highest-value hour available to a marketing engagement, and framing it as improving the marketing rather than auditing sales usually gets the meeting.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "referral-programme-workflow",
    title: "Referral Programme",
    navLabel: "Referral Programme",
    phase: "conversion",
    headline: "Building the channel every client says is their best",
    lead:
      "Ask any business where their best customers come from and most say referral. Ask what they do to generate referrals and the answer is usually nothing. This is the sequence that changes that.",
    summary:
      "Defining the moment, the ask, the incentive decision and the follow-through for a client referral programme.",
    seoTitle: "Referral programme workflow for agencies",
    seoDescription:
      "Building a client referral programme: identifying the moment, writing the ask, deciding on incentives and defining what happens when a referral arrives.",
    updated: "2026-09-02",
    trigger: "A client whose best business comes from referral and who does nothing to produce more.",
    outcome: "A referral mechanism the client's team actually uses.",
    spine: [
      { title: "Agency finds the moment", body: "When satisfaction peaks in the actual customer journey, which is rarely when anyone remembers to ask.", lane: "agency" },
      { title: "Mechanism structured", body: "Ask, moment, incentive and what happens next, defined rather than assumed.", lane: "mengo" },
      { title: "The ask drafted", body: "Short enough to be used verbatim, and easy to decline — which is what makes people willing to make it.", lane: "mengo" },
      { title: "Client decides on incentives", body: "A commercial and sometimes regulatory decision that belongs to them.", lane: "agency" },
      { title: "Follow-through built", body: "A referral that arrives and is not handled promptly costs two relationships rather than one.", lane: "mengo" },
      { title: "Agency works on adoption", body: "These fail on adoption rather than design. Making the ask easy is most of the work.", lane: "agency" },
      { title: "Client's team runs it", body: "The ask comes from the person with the relationship.", lane: "agency" },
    ],
    before: [
      { label: "Referral is hoped for", body: "Named as the best channel and treated as weather." },
      { label: "Nobody asks", body: "Because asking feels awkward and no specific moment was ever decided." },
      { label: "Arriving referrals are handled ad hoc", body: "Which wastes the goodwill that produced them." },
    ],
    after: [
      { label: "There is a defined moment", body: "Attached to something the client's team already does." },
      { label: "The ask is written and short", body: "So it can be used rather than composed each time." },
      { label: "Follow-through is defined", body: "A referral arrives into a process rather than into an inbox." },
    ],
    checkpoints: [
      "The agency identifies the moment from the real customer journey.",
      "The client decides on incentives, with regulatory constraints checked.",
      "Follow-through is defined before the programme starts.",
      "The ask comes from the client's own relationship, never from the agency.",
    ],
    stages: ["starting", "solo", "small-team", "growing"],
    related: {
      capabilities: ["referral-programme", "testimonials", "email-templates", "whatsapp-nurturing"],
      workflows: ["client-review", "lead-nurturing-flows"],
      useCases: ["improve-client-retention", "get-the-first-client"],
    },
    faqs: [
      {
        q: "Why do referral programmes usually fail?",
        a: "Adoption. The design is rarely the problem — nobody at the client asks, because asking feels awkward and no specific moment was defined. Making the ask short and attaching it to a moment they already have is most of the work.",
      },
      {
        q: "Should referrals be incentivised?",
        a: "It depends on the sector. In some an incentive is expected; in others it cheapens the referral. In regulated sectors it may be restricted outright. Ask before designing.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "loyalty-programme-workflow",
    title: "Loyalty Programme",
    navLabel: "Loyalty Programme",
    phase: "conversion",
    headline: "Retention mechanics, for the businesses they suit",
    lead:
      "A repeat-purchase incentive is genuinely valuable for the clients it fits and a waste of effort for the ones it does not, which is most of them. The first step is finding out which this client is.",
    summary:
      "Fit assessment first, then mechanics, communication and the economics — for clients with genuine repeat purchase.",
    seoTitle: "Loyalty programme workflow for agencies",
    seoDescription:
      "A loyalty workflow starting with whether the client's model supports one at all, then mechanics, communication and the margin conversation.",
    updated: "2026-09-02",
    trigger: "A client with genuine repeat purchase and no retention mechanism.",
    outcome: "A programme the client can administer, or a well-reasoned decision not to build one.",
    spine: [
      { title: "Agency assesses fit", body: "Does this business have repeat purchase at all? Usually the answer ends the conversation, correctly.", lane: "agency" },
      { title: "Mechanics structured", body: "Reward, threshold and form, sized against the client's margin.", lane: "mengo" },
      { title: "Communication drafted", body: "Enrolment, progress and reward moments, which is where most programmes lose people.", lane: "mengo" },
      { title: "Client models the economics", body: "What this costs in margin is their calculation and their decision.", lane: "agency" },
      { title: "Agency checks the constraints", body: "Consumer-protection and data rules apply to loyalty schemes in several markets.", lane: "agency" },
      { title: "Client administers it", body: "Programme administration and any platform is theirs.", lane: "agency" },
    ],
    before: [
      { label: "Programmes are copied from another sector", body: "Where the purchase frequency was completely different." },
      { label: "The economics are never modelled", body: "So margin is given to customers who would have returned anyway." },
      { label: "Complexity kills it", body: "A programme customers cannot explain does not change behaviour." },
    ],
    after: [
      { label: "Fit is established before design", body: "Which saves weeks on the clients it does not suit." },
      { label: "Mechanics are sized to margin", body: "So the programme is affordable if it works." },
      { label: "Communication covers the reward moment", body: "Which is where programmes either land or quietly lapse." },
    ],
    checkpoints: [
      "The agency assesses fit before any design work.",
      "The client models the margin impact.",
      "Market-specific consumer rules are checked before launch.",
      "Administration stays with the client.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["loyalty-programme", "membership-plans", "email-templates", "whatsapp-nurturing"],
      workflows: ["lead-nurturing-flows", "referral-programme-workflow"],
      useCases: ["improve-client-retention"],
    },
    faqs: [
      {
        q: "Which clients should have one?",
        a: "Ones with genuine repeat purchase — ecommerce, hospitality, consumables, subscriptions. For a business selling something once every seven years, the mechanism cannot fire.",
      },
      {
        q: "How complex should it be?",
        a: "Simple enough that a customer can explain it. Complexity is the most common way these fail, because a programme people cannot understand does not change behaviour.",
      },
    ],
  },
];
