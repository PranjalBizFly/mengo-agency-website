import type { Workflow } from "@/lib/types";

/**
 * Operations workflows — running the agency rather than running a campaign.
 *
 * These are the workflows that decide whether the others can be delivered
 * consistently. They are also the ones with no client asking for them, which
 * is why they are perpetually deferred.
 */
export const operationsWorkflows: Workflow[] = [
  {
    kind: "workflow",
    slug: "scale-client-delivery",
    title: "Scale Client Delivery",
    navLabel: "Scale Client Delivery",
    phase: "operations",
    headline: "Add accounts without adding chaos",
    lead:
      "Every agency has a number of accounts at which delivery stops being comfortable. Crossing it usually means hiring, and hiring means a quarter of ramp-up paid out of a margin that was already thin.",
    summary:
      "Running a portfolio to one standard: consistent depth on every account, senior time protected for judgement, capacity as a calculation.",
    seoTitle: "Scaling agency client delivery",
    seoDescription:
      "A workflow for running more client accounts to one standard — consistent research and planning depth, protected senior review time, and capacity planning that is a calculation.",
    updated: "2026-09-02",
    trigger: "More accounts than the current delivery approach comfortably supports.",
    outcome: "A portfolio delivered to one standard, with senior time spent on judgement rather than assembly.",
    spine: [
      { title: "Agency defines the standard", body: "What every account gets, regardless of size or how noisy the client is. A leadership decision.", lane: "agency" },
      { title: "Uniform structure applied per account", body: "The same brief shape, research depth and plan anatomy everywhere, including the quiet accounts.", lane: "mengo" },
      { title: "Agency assigns named ownership", body: "Every account has a person accountable for it. This never becomes a system's job.", lane: "agency" },
      { title: "Production runs across the portfolio", body: "The week's slots for every account in one pass rather than as separate context reloads.", lane: "mengo" },
      { title: "Agency reviews against the standard", body: "Structured review, so quality is a property of the process rather than of who picked it up.", lane: "agency" },
      { title: "Exceptions escalated to a person", body: "Anything unusual routes to someone with authority. Systems handle the routine.", lane: "agency" },
      { title: "Capacity model updated", body: "What each account actually consumed, so the next 'can we take this on' is a calculation.", lane: "mengo" },
      { title: "Agency makes the commercial call", body: "Whether to take the client, what to charge and who runs it. Always a business decision.", lane: "agency" },
    ],
    before: [
      { label: "Capacity is an instinct", body: "And the instinct is optimistic in a month when the pipeline looks thin." },
      { label: "The largest client sets the standard", body: "Everyone else gets whatever attention is left, which is how quiet accounts churn without warning." },
      { label: "Growth requires a hiring cycle", body: "Win, recruit, onboard, deliver — with a quarter of margin compression in the middle." },
    ],
    after: [
      { label: "Capacity is a calculation", body: "Based on what accounts actually consume rather than on how the last month felt." },
      { label: "Every account gets the same floor", body: "Which is what stops the quiet accounts quietly leaving." },
      { label: "Hiring is for judgement, not volume", body: "A slower hiring problem, and a better one." },
    ],
    checkpoints: [
      "The agency defines the delivery standard, and revises it.",
      "Every account has a named human owner.",
      "Structured review against the standard before anything reaches a client.",
      "Exceptions route to a person with the authority to decide.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["sops", "roles-and-permissions", "marketing-calendar", "social-media"],
      workflows: ["multi-client-delivery", "agency-scaling", "team-handoffs"],
      useCases: ["handle-more-clients", "scale-without-hiring"],
    },
    faqs: [
      {
        q: "How many more accounts can we run?",
        a: "We will not give you a number, and anyone who does without seeing your service mix is guessing. What we can say is which constraint moves: production stops binding and review capacity becomes it. Model your own numbers against that shift.",
      },
      {
        q: "What is the risk if we get this wrong?",
        a: "Taking on more accounts than you can review. That produces consistent, unremarkable, unedited work across a larger portfolio, which damages a reputation faster than being at capacity does.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "multi-client-delivery",
    title: "Multi-Client Delivery",
    navLabel: "Multi-Client Delivery",
    phase: "operations",
    headline: "The week, across the whole book",
    lead:
      "The operational rhythm of running several accounts at once: what happens on which day, how work batches, and how a person moves between clients without paying the context cost every time.",
    summary:
      "The weekly operating rhythm across a portfolio — batching, sequencing and keeping context switching down.",
    seoTitle: "Multi-client delivery workflow for agencies",
    seoDescription:
      "The weekly operating rhythm for running several client accounts at once: batching, sequencing and reducing the cost of context switching.",
    updated: "2026-09-02",
    trigger: "More than two concurrent accounts with recurring commitments.",
    outcome: "A weekly rhythm where every account is served and context switching is minimised.",
    spine: [
      { title: "Agency sets the weekly rhythm", body: "Which day is planning, which is production, which is client contact. Decided once rather than negotiated weekly.", lane: "agency" },
      { title: "Work batched by type across accounts", body: "All planning together, all production together — because the switch cost is per switch, not per hour.", lane: "mengo" },
      { title: "Context supplied with each item", body: "So moving to the next client is reading rather than recalling.", lane: "mengo" },
      { title: "Agency reviews in consecutive passes", body: "A reviewer working through a queue catches inconsistency that item-by-item review misses.", lane: "agency" },
      { title: "Client contact blocked deliberately", body: "Client conversations are the highest-value work and the most interruptible. They need protecting.", lane: "agency" },
      { title: "Exceptions handled outside the rhythm", body: "A rhythm without an exception path gets abandoned the first time something urgent happens.", lane: "agency" },
    ],
    before: [
      { label: "The week is reactive", body: "Whichever client emailed most recently sets the priority." },
      { label: "Context is reloaded constantly", body: "Several times a day, per client, invisibly." },
      { label: "The quiet client is served last", body: "Every week, until they leave." },
    ],
    after: [
      { label: "The week has a shape", body: "Decided once, so it does not need deciding again on Monday." },
      { label: "Switching costs are paid once per batch", body: "Rather than once per task." },
      { label: "Every account is served", body: "Including the ones that do not chase." },
    ],
    checkpoints: [
      "The agency sets the rhythm rather than reacting to inbound.",
      "Review happens in consecutive passes.",
      "Client contact time is protected.",
      "There is a defined path for genuine exceptions.",
    ],
    stages: ["solo", "small-team", "growing"],
    related: {
      capabilities: ["sops", "marketing-calendar", "social-media", "users"],
      workflows: ["content-production", "scale-client-delivery", "team-handoffs"],
      useCases: ["handle-more-clients", "reduce-repetitive-work"],
    },
    faqs: [
      {
        q: "What is the biggest hidden cost in a multi-client week?",
        a: "Context reassembly. It appears on no task list, happens several times a day, and scales with the number of switches rather than the volume of work — which is why four clients is so much more than twice the effort of two.",
      },
      {
        q: "Does batching not delay urgent work?",
        a: "It would if there were no exception path, which is why one is part of the design. The rhythm handles the routine; genuine urgency goes outside it and is rarer than it feels.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "team-handoffs",
    title: "Team Handoffs",
    navLabel: "Team Handoffs",
    phase: "operations",
    headline: "Passing an account without restarting it",
    lead:
      "Holiday, illness, a resignation or a reassignment. An account whose context lives in one person's head does not get handed over — it gets rebuilt, and the client can tell.",
    summary:
      "Transferring an account so the incoming person reads rather than rediscovers, and the client does not notice.",
    seoTitle: "Team handoff workflow for agency accounts",
    seoDescription:
      "Handing over a client account without restarting it: what transfers, what has to be said in person, and what the client should be told.",
    updated: "2026-09-02",
    trigger: "A planned or unplanned change in who runs an account.",
    outcome: "An account transferred without the client experiencing a restart.",
    spine: [
      { title: "Agency identifies what is undocumented", body: "The handover reveals what only lived in one person's head, which is the real finding.", lane: "agency" },
      { title: "Stored context assembled", body: "Business profile, positioning, segments, voice and the plan — all readable rather than recalled.", lane: "mengo" },
      { title: "Recent activity summarised", body: "What has happened lately, so the incoming person is not surprised by something obvious.", lane: "mengo" },
      { title: "Outgoing person adds what is not written", body: "The relationship, the politics, the things the client hates. This part cannot be structured.", lane: "agency" },
      { title: "Agency briefs the incoming owner", body: "In conversation. A document is necessary and not sufficient.", lane: "agency" },
      { title: "Agency tells the client", body: "Before they notice. A silently changed contact is read as instability.", lane: "agency" },
      { title: "Overlap period where possible", body: "One cycle with both people, which is worth more than any document.", lane: "agency" },
    ],
    before: [
      { label: "Handover is a long conversation and a hope", body: "Most of what matters is transmitted verbally and imperfectly." },
      { label: "The incoming person rediscovers", body: "Re-reading old work to reconstruct what was decided and why." },
      { label: "The client notices", body: "Usually because they are asked something they answered a year ago." },
    ],
    after: [
      { label: "Most context transfers as a document", body: "Which leaves the conversation for the part that genuinely needs it." },
      { label: "The undocumented parts are identified", body: "Which is a finding worth acting on beyond this handover." },
      { label: "The client is told rather than left to notice", body: "Which is the difference between a transition and a worry." },
    ],
    checkpoints: [
      "The outgoing person adds what is not in the record.",
      "The incoming owner is briefed in conversation, not only in writing.",
      "The client is told before they notice.",
      "An overlap period is arranged where the timing allows.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["business-profile", "sops", "users", "audit-log"],
      workflows: ["multi-client-delivery", "agency-sop-creation", "client-onboarding"],
      useCases: ["improve-team-handoffs", "build-sops"],
    },
    faqs: [
      {
        q: "How much can actually be documented?",
        a: "More than most agencies assume, and never all of it. The business context, the positioning and the plan transfer well. The relationship, the politics and the client's unstated preferences need a conversation and ideally an overlap.",
      },
      {
        q: "Should we tell the client?",
        a: "Yes, before they notice. A silently changed contact reads as instability, and the client will find out in the least reassuring way — usually by being asked something they have already answered.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "client-reporting",
    title: "Client Reporting",
    navLabel: "Client Reporting",
    phase: "operations",
    headline: "Reporting that says something",
    lead:
      "Most client reports are a screenshot of a dashboard with a paragraph attached. They consume real hours and produce no decision, which is why clients stop reading them.",
    summary:
      "Reporting structured around what changed and what to do about it, with attribution confidence stated honestly.",
    seoTitle: "Client reporting workflow for agencies",
    seoDescription:
      "Client reporting structured around decisions rather than dashboards, with attribution confidence stated explicitly and a recommendation attached.",
    updated: "2026-09-02",
    trigger: "A regular reporting cycle, monthly or quarterly.",
    outcome: "A report the client reads that produces a decision.",
    spine: [
      { title: "Agency agrees what is measured", body: "Before the period, not after. This is what makes reporting informative rather than defensive.", lane: "agency" },
      { title: "Activity and outcome structured together", body: "What ran, what followed, and how confidently the two connect.", lane: "mengo" },
      { title: "Confidence stated explicitly", body: "Where attribution is weak, the report says so rather than implying certainty.", lane: "mengo" },
      { title: "Agency draws the conclusion", body: "A report without a conclusion is data. The conclusion is what the client is paying for.", lane: "agency" },
      { title: "A recommendation attached", body: "One clear recommendation rather than a menu, because a menu is judgement withheld.", lane: "agency" },
      { title: "Agency presents rather than sends", body: "For anything material. A sent report is a report nobody discusses.", lane: "agency" },
    ],
    before: [
      { label: "Reports are dashboards with commentary", body: "Which the client has already seen and does not need explained." },
      { label: "Metrics are chosen after the fact", body: "Whichever ones look best, which the client eventually notices." },
      { label: "There is no recommendation", body: "So the report produces no decision and becomes a formality." },
    ],
    after: [
      { label: "Measures are agreed in advance", body: "So the report answers a question rather than defending a period." },
      { label: "Confidence is explicit", body: "Which is more credible than a clean story that does not survive scrutiny." },
      { label: "Every report ends in a recommendation", body: "Which is what makes it worth a meeting." },
    ],
    checkpoints: [
      "Measures are agreed before the period begins.",
      "Attribution confidence is stated rather than implied.",
      "The agency draws a conclusion and makes a recommendation.",
      "Material reports are presented, not sent.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["sales-performance", "marketing-calendar", "ads-management", "audit-log"],
      workflows: ["client-review", "sales-enablement", "ads-workflow"],
      useCases: ["improve-client-retention", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "How much detail should a report contain?",
        a: "Enough to support the recommendation and no more. Detail beyond that is defensive rather than informative, and it is the main reason clients stop reading reports.",
      },
      {
        q: "What if the numbers are bad?",
        a: "Lead with it. Naming a poor period before the client does is the most trust-building move available, and delaying it only shows you hoped to avoid the conversation.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "client-review",
    title: "Client Review",
    navLabel: "Client Review",
    phase: "operations",
    headline: "The meeting that decides the next quarter",
    lead:
      "A review meeting has one job: to produce a decision about what happens next. If it ends without one, it was a status update with a longer agenda.",
    summary:
      "A quarterly review structured to produce a decision, including how to handle a quarter that went badly.",
    seoTitle: "Client review workflow for agencies",
    seoDescription:
      "A quarterly client review structured to produce decisions rather than recap numbers, including how to open a conversation about a bad quarter.",
    updated: "2026-09-02",
    trigger: "A quarterly or half-yearly review point.",
    outcome: "An agreed set of priorities for the next period, recorded and reflected in the plan.",
    spine: [
      { title: "Agency sends the numbers in advance", body: "Reading data aloud consumes the meeting and tells the client nothing they could not have read.", lane: "agency" },
      { title: "Agency decides its recommendation first", body: "Turning up with options and no view is how an agency becomes a supplier.", lane: "agency" },
      { title: "Material assembled", body: "Commitments, outcomes and what was learned, structured against the previous period's decisions.", lane: "mengo" },
      { title: "Agency names the difficult thing early", body: "In the first ten minutes. The client already knows, and delaying it only shows you hoped to avoid it.", lane: "agency" },
      { title: "Agency presents what it learned", body: "About their audience or their market. This is what distinguishes an adviser from a production vendor.", lane: "agency" },
      { title: "Decisions recorded and converted", body: "A decision that does not reach the plan did not happen.", lane: "mengo" },
      { title: "Agency confirms in writing within a day", body: "While everyone still remembers the same meeting.", lane: "agency" },
    ],
    before: [
      { label: "The meeting recaps the numbers", body: "Which the client has already seen." },
      { label: "The agency brings options", body: "Which reads as judgement withheld." },
      { label: "Decisions do not reach the plan", body: "So the next quarter looks much like the last one." },
    ],
    after: [
      { label: "The meeting produces a decision", body: "Which is the only reason to have it." },
      { label: "The agency brings a recommendation", body: "With reasoning, which is what an adviser does." },
      { label: "Decisions become plan changes", body: "Immediately, rather than being remembered differently later." },
    ],
    checkpoints: [
      "Numbers are sent in advance so the meeting is not a recital.",
      "The agency arrives with a recommendation rather than options.",
      "Anything difficult is named in the first ten minutes.",
      "Decisions are converted into plan changes, not notes.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["sales-performance", "swot-analysis", "testimonials", "marketing-calendar"],
      workflows: ["client-reporting", "marketing-planning", "referral-programme-workflow"],
      useCases: ["improve-client-retention", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "What makes a review worth having?",
        a: "A decision. If the meeting ends with everyone agreeing the numbers were interesting, it was a status update. Arriving with a recommendation and leaving with an agreed change is the whole point.",
      },
      {
        q: "How do we handle a quarter that went badly?",
        a: "Name it in the first five minutes, separate the diagnosis from the excuse, and bring a specific change. Do not over-promise the recovery — a confident prediction that also fails is what actually loses the account.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "agency-sop-creation",
    title: "Agency SOP Creation",
    navLabel: "Agency SOP Creation",
    phase: "operations",
    headline: "Writing down how you actually work",
    lead:
      "Four pages, an afternoon, and the artefact that makes hiring, cover and consistency possible. It never becomes urgent, which is exactly why it needs to be scheduled.",
    summary:
      "Documenting agency delivery in the smallest form that pays back: brief structure, sequence, review standard and escalation path.",
    seoTitle: "Agency SOP creation workflow",
    seoDescription:
      "Documenting how an agency actually delivers, in the smallest useful form: brief structure, delivery sequence, review standard and escalation path.",
    updated: "2026-09-02",
    trigger: "A first hire, a handover that went badly, or a decision to stop being fragile.",
    outcome: "A short documented process that is used rather than filed.",
    spine: [
      { title: "Agency documents what happens now", body: "Not the idealised version. The actual one, including the parts nobody is proud of.", lane: "agency" },
      { title: "Structure captured", body: "Brief shape, delivery sequence, review checkpoints and escalation, held where the work happens.", lane: "mengo" },
      { title: "Gaps surfaced", body: "Documenting reliably reveals steps nobody performs — usually research validation and retrospectives.", lane: "mengo" },
      { title: "Agency decides the standard", body: "What good looks like here. Intellectual property that cannot be generated.", lane: "agency" },
      { title: "Checkpoints written as steps", body: "A review requirement expressed as a step survives a bad week; one expressed as guidance does not.", lane: "mengo" },
      { title: "Named owner and review date set", body: "Without both, it decays into a document referenced during audits.", lane: "agency" },
    ],
    before: [
      { label: "The process is in people's heads", body: "Which makes onboarding slow and cover impossible." },
      { label: "Attempts produce a manual nobody reads", body: "Comprehensive, idealised and out of date within a quarter." },
      { label: "Improvements do not propagate", body: "Someone finds a better way and it stays in their accounts." },
    ],
    after: [
      { label: "Four pages that describe reality", body: "Brief structure, sequence, review standard, escalation path." },
      { label: "It is used because it is short and true", body: "Which is the only version that survives." },
      { label: "It has an owner and a review date", body: "So it stays true rather than becoming archaeology." },
    ],
    checkpoints: [
      "The documented process describes what actually happens, not an ideal.",
      "Review checkpoints are written as required steps.",
      "The standard is the agency's own definition.",
      "A named owner and a review date are set.",
    ],
    stages: ["starting", "solo", "small-team", "growing"],
    related: {
      capabilities: ["sops", "users", "roles-and-permissions", "brand-manual"],
      workflows: ["team-handoffs", "multi-client-delivery", "agency-scaling"],
      useCases: ["build-sops", "create-repeatable-delivery"],
    },
    faqs: [
      {
        q: "We tried this and nobody read it.",
        a: "Almost universal, and a design failure rather than a discipline one. Comprehensive manuals describing an idealised process get ignored. Four pages describing what actually happens, held where the work is, get used.",
      },
      {
        q: "Where should we start?",
        a: "The brief structure — what you always ask a new client. One page, one afternoon, and it is the artefact everything else builds on.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "agency-scaling",
    title: "Agency Scaling",
    navLabel: "Agency Scaling",
    phase: "operations",
    headline: "Deciding what to change before growth forces it",
    lead:
      "Growth does not create new problems. It finds the ones that were always there and makes them expensive. This is the sequence for finding them deliberately rather than discovering them at fifteen people.",
    summary:
      "Measuring where hours go, identifying the binding constraint, and deciding what to change before growth forces the answer.",
    seoTitle: "Agency scaling workflow",
    seoDescription:
      "A workflow for agency growth: measure the composition of the week, find the binding constraint, and decide what to change before growth forces it.",
    updated: "2026-09-02",
    trigger: "Sustained demand above current comfortable capacity.",
    outcome: "A decision about what to change, made from measurement rather than from instinct.",
    spine: [
      { title: "Agency measures where hours go", body: "Two weeks, by work type rather than by client, everyone included. The surprise is the point.", lane: "agency" },
      { title: "Composition structured", body: "Relationship, judgement and structural work separated, because they have different economics.", lane: "mengo" },
      { title: "Fixed and variable costs split", body: "What an account costs regardless of size, and what scales with what it receives.", lane: "mengo" },
      { title: "Binding constraint identified", body: "Which category runs out first as accounts are added. Only that one matters.", lane: "mengo" },
      { title: "Agency decides what to change", body: "Move the structural layer, hire for the constraint, or decline the growth. All three are legitimate.", lane: "agency" },
      { title: "One account run through the change", body: "Before converting the book, which is the only safe way to find the gaps.", lane: "agency" },
      { title: "Capacity model updated", body: "So the next decision is arithmetic rather than instinct.", lane: "mengo" },
    ],
    before: [
      { label: "Growth is answered by hiring", body: "Because headcount is the only lever anyone has modelled." },
      { label: "The constraint is assumed to be talent", body: "Which locates the problem outside the business, in a labour market nobody controls." },
      { label: "Changes are made across the whole book at once", body: "Which is the worst possible way to discover a gap." },
    ],
    after: [
      { label: "The constraint is measured", body: "And is frequently not what anyone expected." },
      { label: "The change is tested on one account", body: "Where a wrong answer costs very little." },
      { label: "Capacity becomes a calculation", body: "Which makes the next 'can we take this on' answerable." },
    ],
    checkpoints: [
      "Hours are measured before anything is changed.",
      "The binding constraint is identified rather than assumed.",
      "One account is run through the change before the book is converted.",
      "The capacity model is updated with what was actually observed.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["sops", "subscription", "roles-and-permissions", "marketing-systems"],
      workflows: ["scale-client-delivery", "agency-sop-creation", "multi-client-delivery"],
      useCases: ["scale-without-hiring", "handle-more-clients", "support-enterprise-accounts"],
    },
    faqs: [
      {
        q: "What do most agencies find when they measure?",
        a: "That context reassembly and structural work are a much larger share of the week than anyone estimated, and that senior people spend most of their time on the least differentiated work. Both findings redirect the decision.",
      },
      {
        q: "Does this mean we stop hiring?",
        a: "No. It changes what you hire for and when. Judgement, client ownership and review still need people, and those roles take longer to fill — so the hiring problem gets better in volume and harder in kind.",
      },
    ],
  },
];
