import type { UseCase } from "@/lib/types";

/**
 * Use cases for getting an agency going.
 *
 * Every one carries a `notFor` section, and it is not decoration. The fastest
 * way to be trusted by someone evaluating you is to tell them when the answer
 * is no, and readers at this stage are the most likely to be sold something
 * that does not fit.
 */
export const startingUseCases: UseCase[] = [
  {
    kind: "use-case",
    slug: "starting",
    title: "Start an Agency",
    navLabel: "Start an Agency",
    phase: "start",
    headline: "Begin with a process instead of building one by accident",
    lead:
      "Almost every agency's process is archaeology: layers of decisions made under deadline, none of them designed. Starting deliberately is the one moment you can choose the shape of the business rather than inherit it.",
    summary:
      "Starting an agency means building the delivery process while delivering. How to begin with a repeatable one, and what has to stay yours from the first client.",
    seoTitle: "Starting a marketing agency with a repeatable process",
    seoDescription:
      "How to start an agency with a documented delivery process from the first client, rather than assembling one under deadline over the first two years.",
    updated: "2026-09-02",
    situation:
      "You have the skill and, probably, a first client. What you do not have is a way of working that survives the second and third.",
    obstacle: [
      { label: "You cannot design a process you have not run", body: "A genuine chicken-and-egg problem: the process comes from experience, and experience comes from delivering without one." },
      { label: "Early clients arrive without briefs", body: "They came through your network and assume you know what they need, so discovery gets skipped by default." },
      { label: "Everything is urgent", body: "There is no quiet quarter in which to write down how you work, and there will not be one later either." },
      { label: "Underpricing is almost universal", body: "The unbillable structural work is invisible until you have measured it, and you have not." },
    ],
    approach: [
      { label: "Fix the brief shape first", body: "Decide what you always ask a new client. The same fields, every time. This single artefact does more for consistency than anything else available in year one." },
      { label: "Run the first client through the full sequence", body: "Brief, research, strategy, plan, production, review, delivery — deliberately, even though it feels heavy for one client. You are building the mould." },
      { label: "Keep the structural work off your hours", body: "Research and first-draft planning are where new agencies lose their evenings. That is the layer to hand over first." },
      { label: "Write down what you changed", body: "Every correction you make to a draft is your standard revealing itself. Recorded, it becomes the thing you can eventually hire against." },
      { label: "Price the review, not the typing", body: "As the structural work moves, what you are selling becomes judgement. Pricing that honestly from the start avoids a painful repositioning later." },
    ],
    expectations: [
      "A written brief structure you use on every client from the first one",
      "A delivery sequence you have run at least once end to end",
      "Your evenings spent on client conversations and review rather than on first drafts",
      "A documented standard a future hire could actually be onboarded into",
      "No revenue promises. What you charge depends on your market, your positioning and your nerve — none of which a system supplies",
    ],
    notFor: [
      "Anyone without the marketing expertise to judge whether an output is right. The gap to close first is skill, not tooling.",
      "Anyone hoping to run an agency without client conversations. Those are the job, not an overhead on it.",
      "Anyone who wants the business to run itself. This changes what the work is; it does not remove it.",
    ],
    stages: ["starting", "solo"],
    related: {
      workflows: ["client-onboarding", "agency-sop-creation", "content-production"],
      capabilities: ["business-profile", "sops", "icps-and-personas", "landing-page"],
    },
    faqs: [
      {
        q: "How many clients do I need before this makes sense?",
        a: "One, or a well-defined prospect. The argument is not volume — it is that the first client is the cheapest possible moment to establish a process, because you have not yet built habits you will have to unlearn.",
      },
      {
        q: "What should I do first?",
        a: "Write your brief structure. Not the whole process — just the list of things you will always ask a new client. It takes an afternoon and it is the foundation everything else sits on.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "get-the-first-client",
    title: "Get the First Client",
    navLabel: "Get the First Client",
    phase: "start",
    headline: "The first one comes from your network, and that is fine",
    lead:
      "Nearly every agency's first client comes from someone who already knows them. The mistake is treating that as a temporary state rather than as the thing to deliberately repeat.",
    summary:
      "Where a first client actually comes from, what to sell them, and how to make the engagement produce the proof you need for the second.",
    seoTitle: "Getting the first agency client",
    seoDescription:
      "Where a first agency client actually comes from, what to offer, and how to run the engagement so it produces the proof you need for the second.",
    updated: "2026-09-02",
    situation:
      "You have decided to start an agency and have no clients, or one that arrived by accident and no idea how to find another.",
    obstacle: [
      { label: "You have no proof", body: "No case studies, no testimonials, no track record under your own name — which is the thing every prospect wants and the thing you cannot yet have." },
      { label: "The obvious channels are the slowest", body: "Content and search compound over quarters, and you need a client this one." },
      { label: "You will be tempted to offer everything", body: "A new agency saying yes to any request ends up delivering several things badly." },
    ],
    approach: [
      { label: "Start with people who already trust you", body: "Former colleagues, former employers, people in your existing network. This is not a lesser route — it is how most agencies start and it converts far better than anything else available to you." },
      { label: "Offer one thing, specifically", body: "'I help professional services firms fix their enquiry follow-up' gets a conversation. 'I do marketing' does not. Narrow now; broaden when you have proof." },
      { label: "Pick something with a visible early result", body: "A landing page, an enquiry follow-up sequence, a local profile. Something the client can check themselves within weeks, rather than a content programme that compounds over a year." },
      { label: "Run it properly, then ask", body: "Deliver against a real process, then request a testimonial at the moment of satisfaction. The proof you gather from the first engagement is what makes the second easier." },
    ],
    expectations: [
      "A first client from your existing network, most likely",
      "One clearly described offer rather than a services list",
      "An early result the client can verify themselves",
      "Documented proof — a testimonial and a written-up case — from the first engagement",
      "No timeline promise. How quickly this happens depends on your network and your market, not on a method",
    ],
    notFor: [
      "Anyone expecting inbound enquiries in the first six months. Content and search do not work at that speed.",
      "Anyone unwilling to be specific about what they offer. A general marketing offer is the hardest thing to sell with no track record.",
      "Anyone who cannot deliver the thing they are selling. This is a marketing problem only after it is a capability one.",
    ],
    stages: ["starting", "solo"],
    related: {
      workflows: ["client-onboarding", "referral-programme-workflow", "local-business-marketing"],
      capabilities: ["intro-scripts", "landing-page", "testimonials", "sales-script"],
    },
    faqs: [
      {
        q: "Is starting from my network a weakness?",
        a: "No, it is how nearly every agency starts and it converts far better than cold outreach. The mistake is treating it as temporary rather than building a referral mechanism that repeats it deliberately.",
      },
      {
        q: "What should the first offer be?",
        a: "Something narrow with a visible early result. Enquiry follow-up, a landing page, local profile work. It gives the client something to point at within weeks, which is what makes them talk about you.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "build-the-first-service-package",
    title: "Build the First Service Package",
    navLabel: "Build a Service Package",
    phase: "start",
    headline: "Sell a defined thing rather than your availability",
    lead:
      "New agencies sell hours or vague retainers because defining a package feels like limiting yourself. It is the opposite: an undefined offer is harder to sell, harder to price and impossible to deliver consistently.",
    summary:
      "Turning what you do into a defined, priceable package with a scope that survives contact with a client.",
    seoTitle: "Building an agency's first service package",
    seoDescription:
      "Turning agency capability into a defined, priceable service package with a scope boundary that survives contact with a client.",
    updated: "2026-09-02",
    situation:
      "You are selling 'marketing support' and every proposal is written from scratch, priced by instinct and scoped by hope.",
    obstacle: [
      { label: "Defining scope feels like turning work away", body: "So new agencies leave it open, and open scope is what makes a retainer unprofitable by month four." },
      { label: "You do not know what delivery costs yet", body: "Which makes pricing a guess, and the guess is nearly always low." },
      { label: "Every client asks for something slightly different", body: "Which feels like evidence against packaging, and is actually evidence for a defined core with named extras." },
    ],
    approach: [
      { label: "Start from what you have actually delivered", body: "Look at your first engagements and find the shape they had in common. That shape is your package, discovered rather than invented." },
      { label: "Define the core and name the extras", body: "A core deliverable set with a clear boundary, and a short list of named additions with their own prices. Clients accept boundaries far more readily than agencies expect." },
      { label: "Measure a delivery cycle before pricing it", body: "One account, tracked honestly, including the client communication and the structural work. Price from that rather than from a day rate you made up." },
      { label: "Write the exclusions down", body: "What is not included, stated plainly in the proposal. This is the single most effective protection against scope creep and it costs nothing." },
    ],
    expectations: [
      "A defined core package with a written scope boundary",
      "A short list of named additions rather than open-ended flexibility",
      "A price derived from measured delivery cost rather than from instinct",
      "Written exclusions in every proposal",
      "No pricing guidance. What your market pays is yours to discover, and any number we offered would be invented",
    ],
    notFor: [
      "Agencies whose work is genuinely bespoke every time. Rarer than agencies think, but it exists.",
      "Anyone who has not yet delivered an engagement. Package from experience, not from a template.",
      "Anyone unwilling to write down exclusions. The package is the boundary, and without it you have a list of intentions.",
    ],
    stages: ["starting", "solo", "small-team"],
    related: {
      workflows: ["client-onboarding", "agency-sop-creation", "marketing-planning"],
      capabilities: ["products", "sops", "presentations-and-pitches", "sales-collateral"],
    },
    faqs: [
      {
        q: "Will defining a package cost me work?",
        a: "It costs you the work that would have been unprofitable, which is a good trade. Clients accept a clear boundary with named extras far more readily than agencies expect — vagueness invites negotiation rather than preventing it.",
      },
      {
        q: "How do I price it without knowing my costs?",
        a: "Measure one delivery cycle honestly first, including client communication and the structural work that never appears on an invoice. Pricing before that measurement is how first-year agencies end up working for less than they intended.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "create-repeatable-delivery",
    title: "Create Repeatable Delivery",
    navLabel: "Create Repeatable Delivery",
    phase: "start",
    headline: "Deliver the same way twice, on purpose",
    lead:
      "The boundary between an agency that stalls and one that grows is not revenue. It is the first time delivery happens the same way twice deliberately, which is when the second and third client stop multiplying the work.",
    summary:
      "Turning delivery from a set of habits into a sequence that can be repeated, taught and improved.",
    seoTitle: "Creating repeatable agency delivery",
    seoDescription:
      "Turning agency delivery from habits into a documented sequence that can be repeated, covered, taught and improved.",
    updated: "2026-09-02",
    situation:
      "Every client engagement is delivered slightly differently, because it is assembled from memory rather than run from a process.",
    obstacle: [
      { label: "Habits feel like a process", body: "You do deliver consistently, in the sense that you personally do similar things. That is not the same as a process and it does not transfer." },
      { label: "Documenting has no deadline", body: "So it loses to every piece of client work, indefinitely." },
      { label: "The first attempt is usually too ambitious", body: "A comprehensive manual describing an idealised process goes stale before anyone reads it." },
    ],
    approach: [
      { label: "Write four pages, not forty", body: "Brief structure, delivery sequence, review standard, escalation path. An afternoon. This is the version that gets used." },
      { label: "Document what happens, not what should", body: "An idealised process is a work of fiction. Write the real one and improve it from there." },
      { label: "Make review a step rather than a value", body: "A review requirement expressed as a standard loses to a deadline. Expressed as a step in the sequence, it survives." },
      { label: "Run one account against it and fix what breaks", body: "The gaps only appear in use, and one account is enough to find them at low cost." },
      { label: "Give it an owner and a review date", body: "Without both, it becomes a document referenced during audits rather than a process anyone follows." },
    ],
    expectations: [
      "A short written process describing how delivery actually happens",
      "Review as a required step rather than an aspiration",
      "One account run through it, with the gaps found and fixed",
      "A named owner and a scheduled revision",
      "Not uniformity. The container is standardised; the judgement inside it is not",
    ],
    notFor: [
      "Agencies whose differentiation is genuinely bespoke craft with no repeating structure.",
      "Anyone unwilling to write anything down. Everything here depends on the artefact existing.",
      "Anyone expecting the process to supply quality. It supplies consistency, which only helps if the standard is good.",
    ],
    stages: ["starting", "solo", "small-team"],
    related: {
      workflows: ["agency-sop-creation", "client-onboarding", "multi-client-delivery"],
      capabilities: ["sops", "business-profile", "marketing-calendar", "brand"],
    },
    faqs: [
      {
        q: "How short can the documented process actually be?",
        a: "Four pages covers the brief structure, the delivery sequence, the review standard and the escalation path. That is the version that gets used; longer versions get filed.",
      },
      {
        q: "Will this make our work generic?",
        a: "Only if you standardise the wrong layer. Structure, yes; voice and recommendation, no. A consistent container actually makes distinctive work more visible, because the variation is where you intended it.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "improve-client-onboarding",
    title: "Improve Client Onboarding",
    navLabel: "Improve Client Onboarding",
    phase: "start",
    headline: "The first three weeks decide the rest of the engagement",
    lead:
      "Before any results exist to judge you on, the only evidence a client has is how the first weeks felt. Agencies lose accounts they never disappointed, because the opening was disorganised.",
    summary:
      "Making the opening weeks of an engagement feel considered, and gathering what everything downstream will need.",
    seoTitle: "Improving agency client onboarding",
    seoDescription:
      "Making the first weeks of a client engagement feel organised, and capturing the context everything downstream depends on.",
    updated: "2026-09-02",
    situation:
      "Onboarding is improvised per client, access requests dribble out over weeks, and the client's first impression is of an agency finding its feet.",
    obstacle: [
      { label: "Onboarding has no owner", body: "It falls between sales and delivery, so nobody designed it and everybody assumes somebody did." },
      { label: "Access and assets are requested piecemeal", body: "Each request adds a wait, and the waits are sequential rather than parallel." },
      { label: "Discovery depth depends on the month", body: "A client onboarded in a busy period gets a shallower start, permanently." },
    ],
    approach: [
      { label: "Request everything at once, from a checklist", body: "Access, assets, credentials, contacts. One request in week one so the waits happen in parallel rather than in sequence." },
      { label: "Resist producing anything in the first fortnight", body: "A client who receives content in week one learns you will start work without understanding their business. Understand first." },
      { label: "Capture the brief in a fixed structure", body: "The same fields on every account, filled during a conversation rather than sent as a form." },
      { label: "Present the plan rather than emailing it", body: "The presentation is where the client sees your reasoning, which is the thing they are actually buying." },
      { label: "Agree how approvals will work, in writing", body: "Who signs off, how long they need. A client who has not agreed a turnaround will not feel late when they take two weeks." },
    ],
    expectations: [
      "A checklist-driven access and asset request in week one",
      "A consistent brief structure captured in conversation",
      "A presented plan rather than an emailed document",
      "Agreed approval turnarounds, in writing",
      "An engagement that feels organised before any results exist to judge",
    ],
    notFor: [
      "Agencies whose onboarding is already documented and consistently followed.",
      "Anyone hoping to shorten onboarding by producing sooner. Producing before understanding is the failure this addresses.",
      "Engagements where the client will not make decision-makers available. That is a commercial conversation first.",
    ],
    stages: ["starting", "solo", "small-team", "growing"],
    related: {
      workflows: ["client-onboarding", "client-discovery", "new-client-launch"],
      capabilities: ["business-profile", "brand-assets", "products", "icps-and-personas"],
    },
    faqs: [
      {
        q: "What is the most common onboarding failure?",
        a: "A missing asset or credential discovered at the point it blocks something with a date attached. Requesting everything from a checklist in week one is the entire fix and it is consistently skipped.",
      },
      {
        q: "Should we deliver something in the first two weeks?",
        a: "Resist it. A client who receives content before you understand their business learns that is how you work. Understanding first, visibly, sets a better expectation for the whole engagement.",
      },
    ],
  },
];
