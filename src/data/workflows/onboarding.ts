import type { Workflow } from "@/lib/types";

/**
 * Onboarding workflows — everything between winning a client and having a
 * plan they have approved.
 *
 * The pattern every workflow on this site follows: the agency opens the
 * sequence and the agency closes it, and every hand-off back to the agency is
 * a checkpoint rather than a courtesy.
 */
export const onboardingWorkflows: Workflow[] = [
  {
    kind: "workflow",
    slug: "client-onboarding",
    title: "Client Onboarding",
    navLabel: "Client Onboarding",
    phase: "onboarding",
    headline: "From signature to a plan the client recognises",
    lead:
      "Onboarding is the most under-designed part of most agency operations. It is also where a client forms their opinion of how you work — before any results exist to judge you on, the only evidence they have is how the first three weeks felt.",
    summary:
      "The first weeks of an engagement, from kickoff to an approved plan, with every step attributed to the side that owns it.",
    seoTitle: "Agency client onboarding workflow",
    seoDescription:
      "A structured client onboarding workflow: kickoff, brief capture, research, strategic draft, agency correction and a plan the client approves.",
    updated: "2026-09-02",
    trigger: "A signed engagement, or a client moving from a pitch into delivery.",
    outcome: "An approved strategic layer and a plan the client understands, presented by the agency.",
    spine: [
      { title: "Kickoff conversation", body: "The agency meets the people who actually decide. What they sell, who buys, what went wrong last time. The useful material arrives once the agenda runs out.", lane: "agency" },
      { title: "Brief captured in a common structure", body: "The conversation becomes a written brief in the same shape used on every account.", lane: "agency" },
      { title: "Business profile and offers recorded", body: "Structured so everything downstream inherits rather than re-gathers, with gaps marked as gaps.", lane: "mengo" },
      { title: "Research pass", body: "Audience, competitor and channel context assembled at a consistent depth.", lane: "mengo" },
      { title: "Agency validates the research", body: "You check it against what you know. Finding the wrong parts is the purpose of this step, not a failure of it.", lane: "agency" },
      { title: "Strategic layer drafted", body: "Positioning, segments, offer structure and ranked channels, produced from validated research.", lane: "mengo" },
      { title: "Agency makes the strategic call", body: "The recommendation is yours. You decide what to keep, change and discard.", lane: "agency" },
      { title: "Plan built to the decision", body: "A themed calendar and the first production window, sequenced against the approved strategy.", lane: "mengo" },
      { title: "Agency presents to the client", body: "In your words, with your reasoning. This is the moment they see what they are paying for.", lane: "agency" },
      { title: "Client approves", body: "Sign-off is between the agency and the client, recorded by the agency.", lane: "agency" },
    ],
    before: [
      { label: "Discovery takes as long as it takes", body: "Usually weeks, mostly waiting on availability, with the actual work compressed into the last few days." },
      { label: "The brief lives in someone's notes", body: "Which makes the person who ran kickoff the only one who can produce the plan." },
      { label: "Research depth varies by how busy that month was", body: "The accounts that most needed thinking time often got least." },
    ],
    after: [
      { label: "Discovery has a shape", body: "The same brief structure every time, so the next steps can start as soon as it is filled in." },
      { label: "Research is a consistent depth", body: "Every account gets the same pass, including one that arrived in a busy month." },
      { label: "The first plan arrives as a draft to correct", body: "Senior time goes to judgement rather than assembly, which is a better use of the scarcest resource you have." },
    ],
    checkpoints: [
      "The agency validates research before any strategy is drafted from it.",
      "The agency approves the strategic layer before any plan is built on it.",
      "The agency presents the plan. No output reaches a client unpresented.",
      "Client approval is recorded by the agency, in the agency's own record.",
    ],
    stages: ["starting", "solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["business-profile", "products", "icps-and-personas", "competitors"],
      workflows: ["client-discovery", "business-research", "new-client-launch"],
      useCases: ["improve-client-onboarding", "create-repeatable-delivery"],
    },
    faqs: [
      {
        q: "How long should onboarding take?",
        a: "Faster than a from-scratch discovery, but the gating factor is almost always client availability and how quickly your reviewer reaches the draft — not production time. Any number we gave you would be about our part of a process that is mostly yours.",
      },
      {
        q: "What if the client cannot answer the brief questions?",
        a: "That is information rather than a blocker. A client who cannot describe their buyer's objection has told you exactly where the engagement needs to start, and the brief should record the gap rather than fill it with a guess.",
      },
      {
        q: "Can we use our own kickoff format?",
        a: "You should. What matters is that the same fields get captured on every account, not that the structure matches ours.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "client-discovery",
    title: "Client Discovery",
    navLabel: "Client Discovery",
    phase: "onboarding",
    headline: "The conversation that everything else inherits from",
    lead:
      "Discovery is not a form. It is a conversation with the people who decide, structured enough to capture what matters and loose enough that the useful material — which always arrives after the agenda runs out — has somewhere to go.",
    summary:
      "A structured discovery conversation that produces a durable brief rather than notes, including what the client could not answer.",
    seoTitle: "Client discovery workflow for agencies",
    seoDescription:
      "A structured discovery process producing a durable client brief: what they sell, who buys, what stops them, and an explicit record of what nobody knows.",
    updated: "2026-09-02",
    trigger: "A new engagement, or a material change to an existing client's business.",
    outcome: "A written brief in the agency's standard structure, with gaps recorded as gaps.",
    spine: [
      { title: "Agency schedules with the decision-makers", body: "Not only the marketing contact. The people who set the commercial direction have the answers that matter.", lane: "agency" },
      { title: "Agency runs the conversation", body: "Structured, not scripted. The best material arrives in the third ten minutes.", lane: "agency" },
      { title: "Brief structured from the conversation", body: "Into the same fields used on every account, so anyone can find the same fact in the same place.", lane: "mengo" },
      { title: "Gaps marked as gaps", body: "'The client does not know' is a valid and highly informative answer. Completing it from assumption afterwards destroys the brief's value.", lane: "mengo" },
      { title: "Agency reviews for what was not said", body: "The omissions are frequently more informative than the answers, and only a person notices them.", lane: "agency" },
      { title: "Agency puts the draft in front of the client", body: "Clients correct a document far more readily than they answer an open question. This usually produces the best information in the engagement.", lane: "agency" },
      { title: "Brief becomes the source everything reads from", body: "Research, strategy, content and nurturing all inherit it rather than re-establishing it.", lane: "mengo" },
    ],
    before: [
      { label: "Every practitioner runs their own version", body: "So the depth of understanding depends on who happened to take the call." },
      { label: "Answers live in notes", body: "Held by one person, in a format nobody else reads." },
      { label: "The gaps are invisible", body: "Nobody records what the client could not answer, so the same question gets asked repeatedly." },
    ],
    after: [
      { label: "The same questions every time", body: "Which is what makes the fifth client's discovery faster than the first's." },
      { label: "The brief is a shared artefact", body: "Anybody on the account can read it rather than ask the person who was there." },
      { label: "Unknowns become the research brief", body: "The gap list is the most actionable output of the session." },
    ],
    checkpoints: [
      "The agency runs the conversation. It is never sent as a form.",
      "Gaps are recorded rather than filled from assumption.",
      "The agency reviews the draft before the client sees it.",
      "The client confirms the brief before anything is built on it.",
    ],
    stages: ["starting", "solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["business-profile", "products", "icps-and-personas", "employees"],
      workflows: ["client-onboarding", "business-research", "icp-and-persona-development"],
      useCases: ["improve-client-onboarding", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "Should we send the brief as a form instead?",
        a: "No. Forms produce the answers people think you want, in the fewest words that will do. A conversation against a structure produces the material you actually need, including the things they mention in passing.",
      },
      {
        q: "How long should discovery take?",
        a: "One good conversation with the right people, plus a follow-up to confirm the written version. Discovery that stretches over weeks is usually waiting on availability rather than doing work.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "business-research",
    title: "Business Research",
    navLabel: "Business Research",
    phase: "onboarding",
    headline: "The pass that is always first to be cut",
    lead:
      "Audience, competitor and channel context assembled into a document you can check. It is the layer everything downstream depends on and the first thing to be dropped when a timeline is tight, because the client did not ask for it by name.",
    summary:
      "A consistent research pass on every account — audience, competitors, channel landscape — with unknowns marked rather than filled.",
    seoTitle: "Business research workflow for agency client work",
    seoDescription:
      "A consistent research pass for every client account: audience, competitor and channel context assembled for the agency to validate.",
    updated: "2026-09-02",
    trigger: "A completed client brief, or a strategic review on an existing account.",
    outcome: "A validated research document that the strategic layer is built from.",
    spine: [
      { title: "Agency scopes the question", body: "Research without a question produces a document nobody reads. What decision does this need to inform?", lane: "agency" },
      { title: "Audience context assembled", body: "Who buys, what they weigh, what they are afraid of, drawn from what is available.", lane: "mengo" },
      { title: "Competitive context assembled", body: "How others position themselves, in their own words, in one document rather than eleven tabs.", lane: "mengo" },
      { title: "Channel landscape assessed", body: "Against this client's price point and buying cycle rather than against channel popularity.", lane: "mengo" },
      { title: "Unknowns stated explicitly", body: "What could not be established is marked as such. This is the step that makes the document trustworthy.", lane: "mengo" },
      { title: "Agency validates against sector knowledge", body: "Some of it will be wrong or out of date. Finding that is why this step exists and why it cannot be skipped.", lane: "agency" },
      { title: "Agency decides what it means", body: "Research informs; it does not conclude. The conclusion is the agency's professional judgement.", lane: "agency" },
    ],
    before: [
      { label: "Research depth follows the timeline", body: "Which means the accounts under most time pressure get the least thinking." },
      { label: "It lives in one person's browser history", body: "Unshareable, unreviewable and gone when they move on." },
      { label: "Confidence is not distinguished from certainty", body: "A document that does not mark its unknowns will be read as though it has none." },
    ],
    after: [
      { label: "Every account gets the same pass", body: "Including the quiet ones, which is where churn comes from." },
      { label: "It is a document the team can check", body: "Rather than an impression one person formed." },
      { label: "Unknowns become a decision", body: "Either research them properly or proceed knowingly. Both are better than not noticing." },
    ],
    checkpoints: [
      "The agency scopes the question before research begins.",
      "Unknowns are marked rather than filled.",
      "The agency validates before anything is built on it.",
      "Conclusions are drawn by a person, not read off the document.",
    ],
    stages: ["starting", "solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["competitors", "icps-and-personas", "swot-analysis", "moat-analysis"],
      workflows: ["client-discovery", "icp-and-persona-development", "brand-strategy-workflow"],
      useCases: ["standardize-client-strategy", "improve-client-onboarding"],
    },
    faqs: [
      {
        q: "How current is assembled research?",
        a: "Treat it as context to verify rather than as fact. Anything time-sensitive — pricing, a competitor's current message, a platform's behaviour — needs checking before it reaches a client document, and the output marks what it is unsure about.",
      },
      {
        q: "Is this a substitute for primary research?",
        a: "No. It does not interview customers, run surveys or access anything behind a login. Where a question genuinely needs primary evidence, the research says so rather than approximating an answer.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "icp-and-persona-development",
    title: "ICP & Persona Development",
    navLabel: "ICP & Personas",
    phase: "onboarding",
    headline: "Segments that change what gets said",
    lead:
      "Dividing a client's audience only where the division changes the message. A persona that describes a person without describing what stops them buying produces different labels on identical marketing.",
    summary:
      "Building segments around the objection each holds, tested so that two segments receiving the same message are merged.",
    seoTitle: "ICP and persona development workflow",
    seoDescription:
      "Build client segments around real objections rather than demographics, with a test that merges any two segments that would receive the same message.",
    updated: "2026-09-02",
    trigger: "A validated research pass, before positioning work begins.",
    outcome: "Two to four segments with an objection inventory, approved by the agency and recognised by the client.",
    spine: [
      { title: "Agency gathers real objections", body: "From the client's sales conversations. Assumed objections produce material answering questions nobody asked.", lane: "agency" },
      { title: "Candidate segments drafted", body: "Grouped by objection and situation rather than by demographics.", lane: "mengo" },
      { title: "Each segment tested for difference", body: "Would this group receive materially different messaging? Where the answer is no, the segments merge.", lane: "mengo" },
      { title: "Objection inventory built per segment", body: "The output that nurturing, sales enablement and conversion work all depend on.", lane: "mengo" },
      { title: "Agency decides which to lead with", body: "Rarely the largest. A commercial judgement about the client's capacity and cash position.", lane: "agency" },
      { title: "Client validates", body: "Clients recognise their own buyers immediately and will correct a draft faster than they will describe one.", lane: "agency" },
      { title: "Segments become the inheritance", body: "Everything downstream addresses a named segment rather than a general audience.", lane: "mengo" },
    ],
    before: [
      { label: "Personas describe people rather than differences", body: "Age, job title and a stock photograph, which change nothing about the work." },
      { label: "Objections are assumed", body: "Usually 'price', which is almost always a proxy for something else." },
      { label: "Every asset addresses everyone", body: "Which means it addresses nobody in particular, and reads that way." },
    ],
    after: [
      { label: "Segments are justified by a difference", body: "Each one exists because it would receive different copy." },
      { label: "There is an objection inventory", body: "Which is the single most reusable output of the whole engagement." },
      { label: "Briefs carry the segment", body: "So the writer knows who they are addressing before they start." },
    ],
    checkpoints: [
      "Objections come from the client's sales reality rather than from assumption.",
      "Every segment passes the difference test or is merged.",
      "The agency decides which segment leads.",
      "The client validates before the segments are built on.",
    ],
    stages: ["starting", "solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["icps-and-personas", "competitors", "whatsapp-nurturing", "sales-script"],
      workflows: ["business-research", "brand-strategy-workflow", "lead-nurturing-flows"],
      useCases: ["standardize-client-strategy", "improve-sales-enablement"],
    },
    faqs: [
      {
        q: "How many segments should a client have?",
        a: "Two to four for most businesses. More than four and you are producing variants nobody has capacity to maintain; one and you are probably missing a real difference. The test is whether each would receive different copy.",
      },
      {
        q: "We cannot get access to the client's sales team.",
        a: "Then record the objections as assumed rather than observed and treat the segmentation as a hypothesis. Naming that gap to the client is often the argument that gets you the access.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "new-client-launch",
    title: "New Client Launch",
    navLabel: "New Client Launch",
    phase: "onboarding",
    headline: "Going live without the first month being a scramble",
    lead:
      "The operational work between an approved plan and the first month of delivery: access, assets, templates, accounts and the checks that stop a launch failing on something avoidable.",
    summary:
      "The operational launch sequence — access, assets, accounts and checks — between an approved plan and live delivery.",
    seoTitle: "New client launch workflow for agencies",
    seoDescription:
      "The operational sequence between an approved client plan and live delivery: access, brand assets, templates, accounts and pre-launch checks.",
    updated: "2026-09-02",
    trigger: "An approved plan, ready to execute.",
    outcome: "A client account live and delivering, with nothing blocked on missing access or assets.",
    spine: [
      { title: "Agency requests access and assets", body: "All of it at once, from a checklist. Discovering a missing vector logo the day before launch is the standard failure here.", lane: "agency" },
      { title: "Asset and access inventory built", body: "What exists, what is missing, and what is blocked on the client.", lane: "mengo" },
      { title: "Gaps escalated early", body: "A missing asset raised in week one is an inconvenience; raised in week four it is a delay.", lane: "agency" },
      { title: "Brand and voice records established", body: "So the first production run inherits them rather than improvising.", lane: "mengo" },
      { title: "Templates and structures set up", body: "Email templates, page structures and the calendar for the first window.", lane: "mengo" },
      { title: "Agency runs pre-launch checks", body: "Links, forms, tracking, permissions. The operational failures that actually happen.", lane: "agency" },
      { title: "Agency launches", body: "In the client's own systems, under their accounts.", lane: "agency" },
      { title: "Agency confirms with the client", body: "A launch the client did not know about is a launch that gets questioned.", lane: "agency" },
    ],
    before: [
      { label: "Access is requested piecemeal", body: "Each request adds a wait, and the waits are sequential rather than parallel." },
      { label: "Missing assets surface late", body: "Usually at the point they block something with a date attached." },
      { label: "The first month feels chaotic to the client", body: "Which is the impression that sets expectations for the rest of the engagement." },
    ],
    after: [
      { label: "One access request, early", body: "From a checklist, so the waits happen in parallel." },
      { label: "Gaps are known in week one", body: "When they are cheap to resolve." },
      { label: "The first month feels organised", body: "Which is most of what a client is judging before results exist." },
    ],
    checkpoints: [
      "The agency requests everything at once rather than as it becomes needed.",
      "Gaps are escalated to the client in the first week.",
      "The agency runs pre-launch checks before anything goes live.",
      "The client is told what has gone live and when.",
    ],
    stages: ["starting", "solo", "small-team", "growing"],
    related: {
      capabilities: ["brand-assets", "website-planner", "email-templates", "google-business-profile"],
      workflows: ["client-onboarding", "content-production", "local-business-marketing"],
      useCases: ["improve-client-onboarding", "create-repeatable-delivery"],
    },
    faqs: [
      {
        q: "What is the most common launch failure?",
        a: "A missing asset or access credential discovered at the point it blocks something dated. Requesting everything from a checklist in week one is the whole fix, and it is consistently skipped.",
      },
      {
        q: "Should the client have access to everything we set up?",
        a: "Yes, and it should be in their own accounts. An agency holding sole access to a client's tooling is a commercial risk for the client and an awkward conversation at the end of a relationship.",
      },
    ],
  },
];
