import type { Workflow } from "@/lib/types";

/**
 * Planning workflows — deciding what the client will do, before anyone
 * produces anything.
 *
 * All six share a checkpoint: the agency approves the plan before production
 * starts. That is the point in every engagement where a change costs an hour
 * rather than a quarter.
 */
export const planningWorkflows: Workflow[] = [
  {
    kind: "workflow",
    slug: "brand-strategy-workflow",
    title: "Brand Strategy",
    navLabel: "Brand Strategy",
    phase: "planning",
    headline: "Deciding where the client stands",
    lead:
      "Positioning is the highest-judgement work an agency does and the work most often left implicit. This is the sequence that turns validated research into a position somebody has actually decided on and can defend.",
    summary:
      "From validated research to an approved position with recorded reasoning, stored so everything downstream inherits it.",
    seoTitle: "Brand strategy workflow for agencies",
    seoDescription:
      "A workflow taking validated research to an approved client position with recorded reasoning, stored as a layer everything downstream inherits from.",
    updated: "2026-09-02",
    trigger: "Validated research, or a client whose positioning has stopped describing the business.",
    outcome: "An approved position with reasoning, stored and inherited by all downstream work.",
    spine: [
      { title: "Agency confirms the inputs", body: "Positioning built on unvalidated research is a confident guess. This step is the gate.", lane: "agency" },
      { title: "Options drafted with trade-offs", body: "Two or three defensible positions, each with what it wins, what it gives up and what would have to be true.", lane: "mengo" },
      { title: "Proof requirements identified", body: "What evidence each position would need, flagged before anyone commits to one.", lane: "mengo" },
      { title: "Agency makes the strategic call", body: "The decision the client is paying for. Nothing generates it.", lane: "agency" },
      { title: "Message hierarchy built out", body: "The one thing, then what supports it, so downstream work has an order to inherit.", lane: "mengo" },
      { title: "Agency presents to the client", body: "With the reasoning, in your words. A position presented without its argument invites negotiation.", lane: "agency" },
      { title: "Stored as the inherited layer", body: "Content, campaigns and sales material read from it rather than from a deck that gets filed.", lane: "mengo" },
    ],
    before: [
      { label: "Positioning lives in a deck", body: "Agreed in a workshop, filed, and gone within two quarters as the copy drifts back to description." },
      { label: "The reasoning is not recorded", body: "So the next person cannot tell a decision from an accident." },
      { label: "Downstream work re-derives it", body: "Every writer forms their own version from the existing material." },
    ],
    after: [
      { label: "The position is an object", body: "Editable, versioned and inherited rather than referenced." },
      { label: "The trade-off is explicit", body: "Which makes it defensible when a client questions it a year later." },
      { label: "A correction reflows rather than requiring a rewrite", body: "Because everything downstream reads from one place." },
    ],
    checkpoints: [
      "Research is validated before any positioning is drafted from it.",
      "The agency chooses the position; options are inputs, not a menu for the client.",
      "The agency presents the reasoning, not just the conclusion.",
      "The approved layer is stored before downstream work begins.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["brand-strategy", "competitors", "moat-analysis", "icps-and-personas"],
      workflows: ["business-research", "marketing-planning", "icp-and-persona-development"],
      useCases: ["standardize-client-strategy", "improve-client-retention"],
    },
    faqs: [
      {
        q: "What if the client rejects the positioning?",
        a: "Usually it means an input was wrong — most often the objection inventory or the competitive set. Rejection is more useful than polite acceptance, and it is far cheaper here than three months downstream.",
      },
      {
        q: "How is this different from a positioning workshop?",
        a: "The workshop is a good way to gather input and a poor way to store a decision. The difference here is that the approved position becomes the thing downstream work reads from rather than a document everyone remembers differently.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "marketing-planning",
    title: "Marketing Planning",
    navLabel: "Marketing Planning",
    phase: "planning",
    headline: "A plan that reflows when the business changes",
    lead:
      "The reason most client plans go stale is not that they were wrong. It is that they were built as documents, so updating one means rewriting it — and nobody schedules a rewrite until the plan is visibly out of date.",
    summary:
      "Turning an approved strategy into a themed, sequenced plan that updates on change rather than requiring a rewrite.",
    seoTitle: "Marketing planning workflow for agencies",
    seoDescription:
      "A workflow for client marketing plans that reflow when the offer or channel mix changes, with the agency making every strategic decision.",
    updated: "2026-09-02",
    trigger: "An approved strategic layer, or a material change to the client's business.",
    outcome: "A themed, sequenced plan the client has approved and the agency can execute against.",
    spine: [
      { title: "Agency sets the planning horizon", body: "How far to plan in detail. A judgement about the client's volatility rather than a default.", lane: "agency" },
      { title: "Themes derived from the strategy", body: "Months and weeks get a theme, so a slot arrives as a brief rather than an empty date.", lane: "mengo" },
      { title: "Channels ranked and committed", body: "One primary, one secondary, one experiment — and everything else explicitly excluded.", lane: "mengo" },
      { title: "Sequenced against dependencies", body: "Foundational work lands before the offers that depend on it, paced around commercial dates.", lane: "mengo" },
      { title: "Agency applies real constraints", body: "Budget cycles, client capacity, the month their founder is unreachable. You know these; the plan does not.", lane: "agency" },
      { title: "Agency approves and presents", body: "Including what is deliberately not being done, which is usually the more interesting half.", lane: "agency" },
      { title: "Plan reflows on change", body: "A changed offer or channel updates the plan rather than triggering a rewrite.", lane: "mengo" },
      { title: "Agency re-approves the change", body: "Nothing reaches a client's calendar because it regenerated. A person confirms it.", lane: "agency" },
    ],
    before: [
      { label: "The plan is a document", body: "Built once, presented once, increasingly inaccurate from the week it was approved." },
      { label: "Updating it is a project", body: "So it does not happen until the gap between plan and reality is embarrassing." },
      { label: "Quiet accounts get no planning", body: "Attention follows noise, and the account that never complains gets the least thinking." },
    ],
    after: [
      { label: "The plan is an object", body: "Editable and inherited from, so keeping it current stops being a project." },
      { label: "Sequence is deliberate", body: "Awareness work lands before the offers that depend on it, because the plan knows the dependency." },
      { label: "Every account is planned to the same depth", body: "Including the quiet ones." },
    ],
    checkpoints: [
      "The agency sets the horizon rather than accepting a default.",
      "The agency applies constraints only it knows about before the plan is final.",
      "The agency approves the plan before the client sees it.",
      "Every regenerated plan is re-approved by a person before it takes effect.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["marketing-calendar", "marketing-channels-map", "brand-strategy", "swot-analysis"],
      workflows: ["brand-strategy-workflow", "content-planning", "campaign-planning"],
      useCases: ["create-repeatable-delivery", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "How far ahead should a plan go?",
        a: "Detailed for the next quarter and thematic beyond it is a reasonable default. It depends on how fast the client's market moves — a stable services business can commit further than a consumer brand in a shifting category.",
      },
      {
        q: "What happens to work already in production when the plan changes?",
        a: "It stays in production unless someone stops it. Regeneration affects the plan, not the queue, and a person decides whether in-flight work is still right.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "content-planning",
    title: "Content Planning",
    navLabel: "Content Planning",
    phase: "planning",
    headline: "Deciding what to make before deciding how to make it",
    lead:
      "The step between a themed calendar and a production queue: what each slot actually is, who it addresses and what it has to achieve. Skipping it is why production feels like a treadmill.",
    summary:
      "Turning calendar themes into briefed slots with an audience, an angle and a job, before anything is produced.",
    seoTitle: "Content planning workflow for agencies",
    seoDescription:
      "Turning a themed client calendar into briefed content slots with a defined audience, angle and purpose before production begins.",
    updated: "2026-09-02",
    trigger: "An approved calendar entering its next production window.",
    outcome: "A briefed queue where every item has an audience, an angle and a defined job.",
    spine: [
      { title: "Agency commits the window", body: "A calendar is a proposal until someone commits what is actually being made.", lane: "agency" },
      { title: "Slots expanded into briefs", body: "Each with a segment, an angle, a format and something it has to achieve.", lane: "mengo" },
      { title: "Formats assigned per channel", body: "Decided in the plan rather than by reformatting one draft afterwards.", lane: "mengo" },
      { title: "Repetition checked against what exists", body: "So the plan does not re-answer a question the client answered four months ago.", lane: "mengo" },
      { title: "Agency reviews the briefs", body: "A wrong brief produces a well-made wrong thing, which is more expensive than a blank slot.", lane: "agency" },
      { title: "Queue released to production", body: "With everything a producer needs already attached.", lane: "mengo" },
    ],
    before: [
      { label: "Slots are topics", body: "A word in a calendar cell, interpreted differently by whoever picks it up." },
      { label: "The angle is decided while writing", body: "Which makes the writer a strategist under time pressure." },
      { label: "Repetition is discovered by the client", body: "Who remembers the post from March that nobody else did." },
    ],
    after: [
      { label: "Every slot is a brief", body: "Audience, angle, format and job, decided before production." },
      { label: "Writers write", body: "Rather than deciding what to write and then writing it tired." },
      { label: "Repetition is caught in planning", body: "Where it costs nothing." },
    ],
    checkpoints: [
      "The agency commits the production window.",
      "The agency reviews briefs before production, not after.",
      "Formats are decided in planning rather than by reformatting later.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["marketing-calendar", "blog-content", "social-media", "faq-bank"],
      workflows: ["content-production", "marketing-planning", "social-media-production"],
      useCases: ["build-a-content-engine", "create-repeatable-delivery"],
    },
    faqs: [
      {
        q: "Is this not the same as the calendar?",
        a: "The calendar decides the theme and the date. This decides what the specific item is, who it addresses and what it has to do. Agencies that skip it hand writers a word and a deadline, which is how content ends up wandering.",
      },
      {
        q: "How far ahead should briefing run?",
        a: "One production window, typically a month. Briefing further ahead means rebriefing when the plan shifts, which is wasted effort.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "campaign-planning",
    title: "Campaign Planning",
    navLabel: "Campaign Planning",
    phase: "planning",
    headline: "Decide the campaign before you build it",
    lead:
      "The expensive campaign failures are decided before launch. An objective nobody wrote down, an offer nobody stress-tested, a success definition invented afterwards to fit what happened. Every one is cheap to fix in a brief.",
    summary:
      "Objective to retrospective: an approved brief, a channel sequence with reasoning, and a success definition agreed in advance.",
    seoTitle: "Agency campaign planning workflow",
    seoDescription:
      "A campaign workflow for agencies: written objective, approved brief, channel sequencing, assets built from one brief, and success defined before launch.",
    updated: "2026-09-02",
    trigger: "A client objective that needs a bounded push rather than always-on activity.",
    outcome: "A launched campaign with a pre-agreed success definition and an honest retrospective.",
    spine: [
      { title: "Agency agrees the objective with the client", body: "In commercial terms. 'More awareness' is a way of avoiding an objective.", lane: "agency" },
      { title: "Success defined before anything is built", body: "Written, agreed and specific enough to be disappointing. This is the agency's discipline to impose.", lane: "agency" },
      { title: "Campaign brief structured", body: "Objective, audience, offer, message, window and success definition in one document.", lane: "mengo" },
      { title: "Channel sequence proposed", body: "What runs where and in what order, with the reasoning for the order.", lane: "mengo" },
      { title: "Agency approves brief and sequence", body: "The checkpoint that saves the money. Changing the plan here costs an hour.", lane: "agency" },
      { title: "Assets produced from the one brief", body: "Every asset inherits the same message, which is what keeps a multi-channel campaign coherent.", lane: "mengo" },
      { title: "Launch checklist worked through", body: "The operational failures that actually happen — a broken link, a form that does not fire, a page not live.", lane: "mengo" },
      { title: "Agency reviews, approves and launches", body: "In the client's own systems, with the agency accountable for what goes out.", lane: "agency" },
      { title: "Agency runs the retrospective", body: "Against the definition written before launch, including when the answer is that it did not work.", lane: "agency" },
    ],
    before: [
      { label: "The objective is assumed", body: "Everyone has a slightly different idea of what the campaign is for, and the differences surface during review." },
      { label: "Success is defined afterwards", body: "Which makes every campaign a success and every retrospective useless." },
      { label: "Channels launch simultaneously", body: "So nothing has time to do its job and attribution becomes guesswork." },
    ],
    after: [
      { label: "The objective is written and agreed", body: "Disagreements surface in the brief, where they are cheap." },
      { label: "Success is defined in advance", body: "Which makes the retrospective informative and occasionally uncomfortable, as it should be." },
      { label: "One brief, many assets", body: "The message holds across channels because everything inherited from the same source." },
    ],
    checkpoints: [
      "The agency agrees the commercial objective with the client, in writing.",
      "Success is defined before production begins, not after results arrive.",
      "The agency approves the brief and the sequence before any asset is built.",
      "The agency launches, and runs the retrospective against the original definition.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["ads-management", "landing-page", "marketing-calendar", "email-templates"],
      workflows: ["ads-workflow", "product-launch", "seasonal-campaign"],
      useCases: ["deliver-campaigns-faster", "launch-a-new-client-campaign"],
    },
    faqs: [
      {
        q: "What if the client refuses to define success?",
        a: "That is a commercial conversation and an important one. A client who will not define success is reserving the right to be disappointed by any outcome, and that is a risk to price in or to decline.",
      },
      {
        q: "Who owns the ad accounts and budget?",
        a: "You or the client. Nothing here holds budget, places media or touches ad accounts — it produces the planning and the written assets a media buyer works from.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "seasonal-campaign",
    title: "Seasonal Campaign",
    navLabel: "Seasonal Campaign",
    phase: "planning",
    headline: "The date is fixed, so the planning has to start earlier",
    lead:
      "A campaign with an immovable date behaves differently from one with a flexible launch. Everything has to be ready earlier, the contingency has to be real, and the retrospective has to happen before next year's version is planned.",
    summary:
      "Campaign planning against an immovable date, with earlier readiness, real contingency and a retrospective that reaches next year.",
    seoTitle: "Seasonal campaign workflow for agencies",
    seoDescription:
      "Planning client campaigns against fixed seasonal dates: earlier readiness, real contingency, and a retrospective recorded for the following year.",
    updated: "2026-09-02",
    trigger: "A recurring commercial date — a season, a holiday, an annual event.",
    outcome: "A campaign that launched on time, with a retrospective recorded for next year's planning.",
    spine: [
      { title: "Agency works backwards from the date", body: "The date does not move, so every other date derives from it including client approval time.", lane: "agency" },
      { title: "Last year's retrospective consulted", body: "The single most useful input, and the one nobody records.", lane: "agency" },
      { title: "Brief structured against the window", body: "Objective, offer and message, with the window's constraints explicit.", lane: "mengo" },
      { title: "Assets produced earlier than feels necessary", body: "Seasonal windows compress. Work that is comfortable in September is impossible in late November.", lane: "mengo" },
      { title: "Contingency defined", body: "What happens if something is not ready. A plan with no fallback fails loudly on a fixed date.", lane: "agency" },
      { title: "Agency reviews and launches", body: "Ahead of the date, with the checks done.", lane: "agency" },
      { title: "Retrospective recorded for next year", body: "Written while it is fresh, filed where next year's planning will find it.", lane: "agency" },
    ],
    before: [
      { label: "Planning starts too late", body: "Because the date feels distant until it is not, and approval time was never budgeted." },
      { label: "Last year is remembered vaguely", body: "So the same mistakes recur annually." },
      { label: "There is no contingency", body: "And a fixed date does not accommodate an overrun." },
    ],
    after: [
      { label: "Dates derive from the immovable one", body: "Including the client's approval window, which is the usual overrun." },
      { label: "Last year's retrospective is an input", body: "Which is the cheapest improvement available." },
      { label: "Contingency is decided in advance", body: "Rather than improvised in the last week." },
    ],
    checkpoints: [
      "The agency works backwards from the fixed date, including client approval time.",
      "The previous cycle's retrospective is consulted before planning.",
      "Contingency is agreed before production begins.",
      "The retrospective is written while it is fresh.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["marketing-calendar", "ads-management", "email-templates", "landing-page"],
      workflows: ["campaign-planning", "product-launch", "content-production"],
      useCases: ["deliver-campaigns-faster", "launch-a-new-client-campaign"],
    },
    faqs: [
      {
        q: "How early should seasonal planning start?",
        a: "Earlier than feels necessary, and with the client's approval time budgeted explicitly. The usual overrun is not production — it is waiting for a decision in the week everyone is busiest.",
      },
      {
        q: "What is the highest-value habit here?",
        a: "Writing the retrospective immediately and filing it where next year's planning will find it. Almost nobody does, which is why the same seasonal mistakes recur annually.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "product-launch",
    title: "Product Launch",
    navLabel: "Product Launch",
    phase: "planning",
    headline: "Marketing a thing that does not exist yet",
    lead:
      "Launch marketing runs against a date the client's own delivery controls, which is the complication. The plan has to survive a slip, and the messaging has to be written before anyone has seen the finished thing.",
    summary:
      "Launch planning that survives a date slip, with messaging built before the product is finished and a plan for the day it moves.",
    seoTitle: "Product launch workflow for agencies",
    seoDescription:
      "Client product launch planning that survives a slipped date, with positioning, assets and sequencing built before the product is finished.",
    updated: "2026-09-02",
    trigger: "A client launching a new product, service or offer.",
    outcome: "A launch executed on the actual date, with material that survives the date moving.",
    spine: [
      { title: "Agency establishes what is actually launching", body: "Clients describe features. What the buyer gets is a different and more useful description.", lane: "agency" },
      { title: "Positioning drafted for the new offer", body: "Against the existing offer structure, so the launch does not cannibalise what already sells.", lane: "mengo" },
      { title: "Agency confirms the claim is safe", body: "Marketing something unreleased creates obligations. What may be promised is a client decision.", lane: "agency" },
      { title: "Sequenced across channels", body: "Pre-launch, launch and post-launch, with material for each phase.", lane: "mengo" },
      { title: "Date-independent assets built first", body: "So a slip costs a re-schedule rather than a rewrite.", lane: "mengo" },
      { title: "Agency plans for the slip", body: "Delivery dates move. A launch plan without a contingency fails publicly.", lane: "agency" },
      { title: "Agency reviews and launches", body: "On the actual date, in the client's systems.", lane: "agency" },
      { title: "Post-launch sequence runs", body: "The phase that converts interest, and the one most often unplanned.", lane: "mengo" },
    ],
    before: [
      { label: "Everything is dated", body: "So a slipped launch means rewriting rather than rescheduling." },
      { label: "Claims are made before they are safe", body: "Roadmap language creates obligations the client may not want." },
      { label: "Post-launch is unplanned", body: "The energy goes into the launch day and the conversion window is improvised." },
    ],
    after: [
      { label: "Assets survive a slip", body: "Because the date-dependent ones are identified and isolated." },
      { label: "Claims are approved before production", body: "By whoever carries the exposure." },
      { label: "The post-launch sequence exists", body: "Which is where launches actually convert." },
    ],
    checkpoints: [
      "The agency confirms what may be claimed before anything is produced.",
      "Date-dependent assets are identified and isolated.",
      "A contingency for a slipped date is agreed in advance.",
      "The post-launch sequence is built before launch, not after.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["products", "landing-page", "pr-content", "ads-management"],
      workflows: ["campaign-planning", "pr-and-media-workflow", "new-client-launch"],
      useCases: ["launch-a-new-client-campaign", "deliver-campaigns-faster"],
    },
    faqs: [
      {
        q: "What happens when the launch date slips?",
        a: "It usually does. The mitigation is identifying which assets are genuinely date-dependent and keeping the rest date-free, so a slip costs a re-schedule rather than a rewrite of everything.",
      },
      {
        q: "Can we market something before it is finished?",
        a: "That is the client's decision and it carries obligations — particularly in software, where roadmap language creates expectations that become commitments. Get the claim approved before production rather than after.",
      },
    ],
  },
];
