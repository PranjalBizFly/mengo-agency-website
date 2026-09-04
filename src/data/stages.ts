import { routes } from "@/lib/site";
import type { Stage } from "@/lib/types";

/**
 * The agency growth ladder.
 *
 * Five points on one path: starting, solo, small, growing, large. A reader
 * should recognise themselves in one of them within a sentence, which is why
 * `shape` is written as a description of a week rather than as a headcount
 * band — an agency with four people and one enormous client runs like a solo
 * practice, and a two-person shop with eleven retainers does not.
 *
 * Every stage carries the same anatomy so the pages stay comparable, and every
 * stage's ledger says the same thing in that stage's own language: the client
 * relationship, the strategy and the final call stay with the agency.
 */
export const stages: Stage[] = [
  {
    kind: "stage",
    slug: "starting",
    title: "Starting Out",
    navLabel: "Starting Out",
    order: 0,
    shape: "You have skill and maybe a first client. You do not yet have a way of working.",
    headline: "Start with a process, not just a portfolio",
    lead:
      "The hardest part of the first year is not finding work. It is that every piece of work starts from nothing — a blank document, a fresh guess at scope, and a delivery approach invented on the spot. That is what makes the first three clients feel like three separate businesses.",
    summary:
      "Starting an agency means inventing your delivery process while you deliver. Here is how to begin with a repeatable one instead, and what stays yours from day one.",
    seoTitle: "Starting an agency — build a delivery process from your first client",
    seoDescription:
      "Most new agencies invent their process while delivering. A practical way to start with a repeatable marketing workflow, and what stays under your control from day one.",
    updated: "2026-08-28",
    situation: [
      {
        label: "You are the whole company",
        body: "Sales, delivery, invoicing, quality control and client communication are all one person. There is no handover because there is nobody to hand to.",
      },
      {
        label: "Your first clients came from your network",
        body: "Which is a genuine advantage and also a hidden risk: the work arrives without a brief, because the client already trusts you and assumes you know what they need.",
      },
      {
        label: "Nothing is written down",
        body: "The process is in your head. That works until you take a week off, take on a second client in the same month, or try to explain what you do to somebody who might pay for it.",
      },
      {
        label: "Pricing is a guess",
        body: "Without knowing how long delivery actually takes, a retainer is a number you hope covers it. Most first-year agencies discover the answer after they have already committed to a year.",
      },
    ],
    problems: [
      {
        label: "Every brief starts at zero",
        body: "Positioning, audience, channel choice and a content plan get rebuilt from scratch for each client, even when two clients are in the same sector with the same buying cycle.",
      },
      {
        label: "The unpaid work is invisible",
        body: "Research, planning and setting up the shape of a programme are real hours that are not on the invoice, and at this stage they are most of the job.",
      },
      {
        label: "Delivery quality moves with your energy",
        body: "The first client of the month and the last get different versions of you. Clients notice inconsistency long before they notice a missed metric.",
      },
      {
        label: "Growth means working later, not differently",
        body: "The only lever available is hours, and there is a hard ceiling on those. This is the point at which most new agencies stall rather than fail.",
      },
    ],
    transition: {
      to: "Solo Agency",
      body:
        "The boundary out of this stage is not revenue. It is the first time you deliver a client programme the same way twice on purpose. Once the process exists outside your head, a second and third client stop multiplying the work by two and three.",
    },
    ledger: {
      agency: {
        heading: "You own",
        note: "From the first client, and permanently.",
        items: [
          { label: "The client", body: "They signed with you. The relationship, the contract and the trust are yours." },
          { label: "The recommendation", body: "What you tell a client to do is your professional judgement. Nothing generates that for you." },
          { label: "The final read", body: "Nothing reaches a client without you reading it and deciding it is good enough to carry your name." },
          { label: "The pricing", body: "What you charge and how you package it is a business decision, not an output." },
        ],
      },
      mengo: {
        heading: "Mengo carries",
        note: "The structural work behind the recommendation.",
        items: [
          { label: "The research pass", body: "Audience, competitor context and channel landscape assembled into a working document you can read, correct and use." },
          { label: "The first plan", body: "A positioning draft, segment split and a themed calendar you edit rather than originate." },
          { label: "The content system", body: "Formats, briefs and drafts for the calendar you approved, in the shapes each channel actually takes." },
          { label: "The follow-up", body: "Nurture sequences drafted against the objections you named, ready for your client's own sending tools." },
        ],
      },
    },
    week: [
      { title: "Client conversation", body: "You listen, ask the questions only someone with your experience knows to ask, and agree what the engagement is for.", lane: "agency" },
      { title: "Brief captured", body: "The conversation becomes a written brief — offer, buyer, price, objection, existing traction — in the same structure every time.", lane: "agency" },
      { title: "Research and first draft plan", body: "Mengo turns the brief into positioning, segments, a ranked channel view and a themed calendar.", lane: "mengo" },
      { title: "You correct it", body: "This is the step that matters most and the one nobody else can do. You know things about this client that were not in the brief.", lane: "agency" },
      { title: "Content and sequences produced", body: "The approved plan becomes drafts in the formats the calendar calls for, plus the nurture sequences behind them.", lane: "mengo" },
      { title: "Your review and edit", body: "You read everything, fix voice, cut what is wrong and add what only you would have thought of.", lane: "agency" },
      { title: "You present and deliver", body: "The client hears it from you, in your words, with your reasoning behind it.", lane: "agency" },
    ],
    capabilities: ["business-profile", "icps-and-personas", "sops", "landing-page"],
    workflows: ["client-onboarding", "client-discovery", "agency-sop-creation"],
    faqs: [
      {
        q: "Do I need clients before this is useful?",
        a: "One is enough, and a well-defined prospect is nearly enough. The value at this stage is having a repeatable shape for delivery, and the fastest way to build that shape is to run it properly on the first client rather than to design it in the abstract.",
      },
      {
        q: "Will clients know I am using Mengo?",
        a: "That is your decision and your disclosure to make. Mengo produces working material inside your process; what you tell a client about how you work is part of your client relationship, which is yours. Our own guidance is in Responsible AI.",
      },
      {
        q: "Does this replace learning marketing properly?",
        a: "No, and it would be a bad idea to treat it that way. Every output needs someone who can tell whether it is right for this client. If you cannot yet make that judgement, the gap to close is expertise, not tooling.",
      },
      {
        q: "What if my first clients are all in different industries?",
        a: "That is normal and it is the strongest argument for a written process. What stays constant across sectors is the structure — brief, research, positioning, calendar, production, follow-up. What changes is the content, which is where your judgement goes.",
      },
    ],
    cta: {
      label: "See how a first engagement runs",
      href: "/workflows/client-onboarding/",
      note: "The onboarding workflow, end to end, with every step attributed.",
    },
  },

  {
    kind: "stage",
    slug: "solo",
    title: "Solo Practice",
    navLabel: "Solo Practice",
    order: 1,
    shape: "One person, several clients, and a calendar with no slack in it.",
    headline: "One person, delivering like a team that does not exist",
    lead:
      "A solo agency is not a smaller version of a large one. It is a different business, where the constraint is never ideas and always hours — and where the person doing the work is also the person who sells it, scopes it, reviews it and answers the email about it.",
    summary:
      "A solo agency's constraint is hours, not ability. What to structure, what to keep in your own hands, and where the ceiling actually sits.",
    seoTitle: "Solo agency operations — deliver more without a team",
    seoDescription:
      "How a one-person agency structures marketing delivery so that hours stop being the only lever, without giving up client relationships, strategy or final approval.",
    updated: "2026-08-28",
    situation: [
      {
        label: "Context switching is the real cost",
        body: "Four clients is not four times the work of one. It is four sets of context to reload, and the reload is where the hours disappear.",
      },
      {
        label: "New business happens in the gaps",
        body: "Selling gets whatever is left after delivery, which means pipeline arrives in waves and so does income.",
      },
      {
        label: "You are the single point of failure",
        body: "Illness, a holiday or one client emergency stops everything. There is no redundancy anywhere in the system.",
      },
      {
        label: "The work is good but uneven",
        body: "Your best client gets your best work. The others get what fits in the time remaining, and you know which is which.",
      },
    ],
    problems: [
      {
        label: "Every client needs the same scaffolding built separately",
        body: "Research, a plan, a content structure, a follow-up sequence. The shape repeats; the hours do not compound.",
      },
      {
        label: "Turning down work is the only capacity control",
        body: "Which makes growth binary: either you stay at your current size or you hire, and hiring at this point is a large bet on uncertain revenue.",
      },
      {
        label: "The admin around the work is unpriced",
        body: "Status updates, reformatting, chasing approvals and rebuilding the same document for a different client are a real fraction of the week and none of it is billable.",
      },
      {
        label: "There is no version of you to review the work",
        body: "You are the writer and the editor. Everyone who has done both knows the second is harder when you did the first.",
      },
    ],
    transition: {
      to: "Small Agency",
      body:
        "The move from solo to small is usually forced by a client rather than chosen. The agencies that survive it are the ones whose process already existed before the first hire, because a new person can join a documented system — but cannot join a habit.",
    },
    ledger: {
      agency: {
        heading: "You own",
        note: "Everything the client experiences as you.",
        items: [
          { label: "Every client conversation", body: "Calls, difficult news, renegotiations and the reasoning behind a recommendation." },
          { label: "The strategic call", body: "Which channel, which offer, what to stop doing. Mengo drafts, you decide." },
          { label: "Quality standards", body: "What is good enough to send is a judgement about your reputation, and it stays yours." },
          { label: "Client data and accounts", body: "Sending, publishing and ad spend stay in your and your client's own tools." },
        ],
      },
      mengo: {
        heading: "Mengo carries",
        note: "The scaffolding that used to be rebuilt per client.",
        items: [
          { label: "Per-client context, kept", body: "Positioning, segments and voice stored per client, so reloading a client is reading rather than remembering." },
          { label: "Planning and calendars", body: "A themed plan per client that reflows when the offer or the channel mix changes." },
          { label: "Production volume", body: "Drafts in the formats the plan calls for, so your hours go to editing rather than to first drafts." },
          { label: "Sequences and follow-up", body: "The nurture work that is easy to promise and hard to find a Thursday for." },
        ],
      },
    },
    week: [
      { title: "Monday: client priorities", body: "You decide what each client needs this week. That decision needs your knowledge of their business and their mood.", lane: "agency" },
      { title: "Plans reflowed", body: "Each client's calendar updates against what changed — a launch moved, an offer changed, a channel underperformed.", lane: "mengo" },
      { title: "Production run", body: "The week's slots are drafted across clients in one pass instead of four separate context reloads.", lane: "mengo" },
      { title: "Your edit pass", body: "You work through drafts as an editor. This is faster than writing and it is where your voice actually enters the work.", lane: "agency" },
      { title: "Follow-up updated", body: "Nurture sequences adjust to new enquiries, new objections and the segments you flagged.", lane: "mengo" },
      { title: "Client sends and calls", body: "You present, you explain, you handle the questions. The client is talking to you, not to a system.", lane: "agency" },
      { title: "Friday: new business", body: "The gap that used to be filled by unfinished delivery is where pipeline work goes.", lane: "agency" },
    ],
    capabilities: ["marketing-calendar", "social-media", "whatsapp-nurturing", "business-profile"],
    workflows: ["content-production", "lead-nurturing-flows", "multi-client-delivery"],
    faqs: [
      {
        q: "How many clients can one person actually run this way?",
        a: "We will not give you a number, because the honest answer depends on your service mix, your clients' complexity and how much of your week is client-facing. What changes is the shape of the constraint: the ceiling stops being first-draft production and becomes your review and relationship capacity, which is a higher ceiling but still a real one.",
      },
      {
        q: "Does this mean my clients get generic work?",
        a: "It means the structural layer is generated and the judgement layer is not. If you skip the review step, yes, the work will read as generic — that is a true risk and worth naming. The workflow is designed so review is a required step rather than an optional one.",
      },
      {
        q: "I already have templates. Is this the same thing?",
        a: "Templates fix the format. They do not carry the client's positioning, segments and voice into the next piece of work, so you still supply that context every time. The difference is between a blank form and a form that already knows the client.",
      },
      {
        q: "What happens when I go on holiday?",
        a: "Less breaks, but something still does — because approvals and client conversations are yours by design. A documented process makes a pause recoverable rather than a restart, which is a genuine improvement and not the same as cover.",
      },
    ],
    cta: {
      label: "See the content production workflow",
      href: "/workflows/content-production/",
      note: "Where a solo agency's hours go, and which of them move.",
    },
  },

  {
    kind: "stage",
    slug: "small-team",
    title: "Small Team",
    navLabel: "Small Team",
    order: 2,
    shape: "Two to about eight people. Everyone still does a bit of everything.",
    headline: "Small enough to be personal, big enough to need a standard",
    lead:
      "A small agency's advantage is that clients speak to the people doing the work. Its problem is that every person doing the work has a slightly different way of doing it — and clients who move between accounts, or refer you to someone who lands with a different lead, notice.",
    summary:
      "Small agencies win on closeness and lose on consistency. How to standardise delivery without turning the team into a production line.",
    seoTitle: "Small agency delivery — consistency without losing what makes you small",
    seoDescription:
      "Small agencies win on closeness and lose on consistency. A practical approach to standardising client marketing delivery while keeping strategy and client ownership in-house.",
    updated: "2026-08-28",
    situation: [
      {
        label: "Roles are informal",
        body: "Job titles exist for the website. In practice everyone writes, everyone reviews and the person who is free takes the work.",
      },
      {
        label: "Knowledge lives in people",
        body: "One person knows the client's history, another knows the tone the client likes, and neither has written it down.",
      },
      {
        label: "The founder is still in delivery",
        body: "Usually on the largest accounts, which means the founder's time is the scarcest resource and also the least protected.",
      },
      {
        label: "Onboarding a new hire takes months",
        body: "Not because the work is hard, but because learning it means sitting next to someone who already knows.",
      },
    ],
    problems: [
      {
        label: "Two clients, two standards",
        body: "The same service delivered by two people produces recognisably different work. Clients read that as inconsistency, not as personality.",
      },
      {
        label: "Review is the bottleneck",
        body: "Everything routes through one or two senior people, and they are also the ones selling and running the largest accounts.",
      },
      {
        label: "Nobody owns the process",
        body: "Improvements happen in one person's accounts and never propagate, because there is no shared artefact to improve.",
      },
      {
        label: "Capacity planning is a feeling",
        body: "The answer to 'can we take this on' is an instinct, and the instinct is usually optimistic in a month when the pipeline looks thin.",
      },
    ],
    transition: {
      to: "Growing Agency",
      body:
        "The threshold is the first client the founder does not touch. Reaching it requires a delivery standard that exists independently of any individual, and a review structure that does not route everything through the same two people.",
    },
    ledger: {
      agency: {
        heading: "The agency owns",
        note: "Everything that defines what your work is worth.",
        items: [
          { label: "Client relationships", body: "Every account has a named human owner. That never becomes a system's job." },
          { label: "The standard itself", body: "What good looks like at your agency is your definition. Mengo works to it; it does not set it." },
          { label: "Strategic direction per account", body: "The recommendation and the reasoning are the agency's product." },
          { label: "Sign-off", body: "Work reaches clients through a named reviewer, every time." },
        ],
      },
      mengo: {
        heading: "Mengo carries",
        note: "The parts that should be identical across accounts.",
        items: [
          { label: "A common structure", body: "The same brief shape, research pass and plan anatomy on every account, whoever leads it." },
          { label: "Client context, shared", body: "Positioning, segments and voice held per client rather than per person, so cover is possible." },
          { label: "Production across accounts", body: "Draft volume for every account's plan, which is what frees senior time for review." },
          { label: "Follow-up systems", body: "Nurture sequences built to the same anatomy for every client, so they can be reviewed quickly." },
        ],
      },
    },
    week: [
      { title: "Account leads set direction", body: "Each named owner decides what their client needs. Ownership stays with a person.", lane: "agency" },
      { title: "Shared structure applied", body: "Every account's plan follows the same anatomy, so a reviewer knows where to look.", lane: "mengo" },
      { title: "Production across the book", body: "Drafts for every account in one pass, in the formats each plan specifies.", lane: "mengo" },
      { title: "Peer review", body: "Work is reviewed against the agency's written standard rather than against the reviewer's preference.", lane: "agency" },
      { title: "Senior sign-off where it matters", body: "The founder or a principal reviews strategy and exceptions, not every caption.", lane: "agency" },
      { title: "Client delivery by the account owner", body: "The client hears from the person they know, with the agency's reasoning.", lane: "agency" },
      { title: "The standard gets updated", body: "What was learned this week is written into the standard, so it reaches every account next week.", lane: "agency" },
    ],
    capabilities: ["sops", "brand", "blog-content", "ads-management"],
    workflows: ["marketing-planning", "campaign-planning", "team-handoffs"],
    faqs: [
      {
        q: "Will standardising make our work feel corporate?",
        a: "It depends entirely on what you standardise. Standardising the structure — brief shape, research depth, review checkpoints — makes work more consistent. Standardising the voice or the recommendation makes it generic. The line is deliberate and it is drawn in the workflow.",
      },
      {
        q: "Our clients are all different. Does a shared process still work?",
        a: "The process is the container, not the content. Two clients in different sectors still both need a brief, research, a plan, production and follow-up. What differs is everything inside those steps, which is where your people's knowledge goes.",
      },
      {
        q: "How does this change what we can charge?",
        a: "That is your commercial decision and we would be inventing numbers if we answered it directly. What changes is the composition of the hours behind a retainer: less first-draft production, more review and strategy. How you price that shift is yours.",
      },
      {
        q: "What about work that is already in flight?",
        a: "Run one account through the workflow first rather than converting the book at once. A small agency cannot afford a transition that touches every client in the same month, and one account is enough to test whether the standard holds.",
      },
    ],
    cta: {
      label: "See how delivery standardises",
      href: routes.useCase("standardize-delivery"),
      note: "What to make identical across accounts, and what to leave alone.",
    },
  },

  {
    kind: "stage",
    slug: "growing",
    title: "Growing Team",
    navLabel: "Growing Team",
    order: 3,
    shape: "Roles are real, accounts are layered, and the process is being outrun.",
    headline: "Growth exposes whatever the process was hiding",
    lead:
      "Growth does not create new problems. It finds the ones that were always there and makes them expensive. The informal handover that worked at six people breaks at fifteen, and the accounts that were fine because a senior person quietly fixed them stop being fine when that person is running three of them.",
    summary:
      "Growth exposes an informal process rather than breaking a good one. What to formalise first, and how to add capacity without adding a hiring cycle for every new client.",
    seoTitle: "Growing agency operations — adding capacity without adding chaos",
    seoDescription:
      "Growth exposes an informal delivery process. What a growing agency should formalise first, and how to add marketing capacity without a hiring cycle behind every new client.",
    updated: "2026-08-28",
    situation: [
      {
        label: "Hiring lags demand by a quarter",
        body: "You win the client, then you recruit, then you onboard. The gap is filled by whoever has the least slack, which is usually the most senior person.",
      },
      {
        label: "Middle management appears",
        body: "Account directors sit between the founder and the work. Whether that adds quality or adds a relay depends entirely on whether there is a written standard for them to enforce.",
      },
      {
        label: "Utilisation becomes a number you watch",
        body: "And a number that drives decisions, which means the accuracy of your capacity model starts to matter commercially.",
      },
      {
        label: "Clients expect more evidence",
        body: "Larger clients ask how you work, not just what you produce. An undocumented process is a live risk in a procurement conversation.",
      },
    ],
    problems: [
      {
        label: "Quality drifts by account, not by person",
        body: "With more accounts than any one reviewer can hold, drift stops being visible and starts being discovered by the client.",
      },
      {
        label: "Onboarding cost per hire is real money",
        body: "Every new person spends weeks learning things that were never written down, and the people teaching them are the ones already at capacity.",
      },
      {
        label: "The founder is the escalation path",
        body: "Which caps growth at the founder's attention, no matter how many people are hired below them.",
      },
      {
        label: "Margin is invisible per account",
        body: "Without a model of where hours actually go, unprofitable accounts are subsidised by profitable ones and nobody knows which is which.",
      },
    ],
    transition: {
      to: "Large Agency",
      body:
        "The step up is governance: a documented standard, a review structure with named owners, and a capacity model that is a calculation rather than an instinct. Agencies that reach this size without those three tend to grow revenue and lose margin at the same time.",
    },
    ledger: {
      agency: {
        heading: "The agency owns",
        note: "Governance, judgement and the client.",
        items: [
          { label: "The delivery standard", body: "Written, versioned, enforced by your own reviewers. Mengo conforms to it." },
          { label: "Account strategy", body: "Every account has a strategic owner accountable for the recommendation." },
          { label: "Escalation and exceptions", body: "Anything unusual routes to a person. Systems handle the routine; people handle the rest." },
          { label: "Commercial decisions", body: "Scope, pricing, resourcing and which clients to keep." },
        ],
      },
      mengo: {
        heading: "Mengo carries",
        note: "The routine layer, at volume, to one standard.",
        items: [
          { label: "Consistent research and planning", body: "Same depth on every account, including the ones nobody senior has time for this month." },
          { label: "Production at portfolio scale", body: "The volume that would otherwise dictate your hiring calendar." },
          { label: "Repeatable follow-up", body: "Nurture built the same way per client, so it can be reviewed in minutes rather than rebuilt." },
          { label: "A written process artefact", body: "Something concrete to onboard new hires into, and to show a client who asks how you work." },
        ],
      },
    },
    week: [
      { title: "Portfolio review", body: "Leadership looks at the book: which accounts are at risk, which are under-served, where the margin is.", lane: "agency" },
      { title: "Plans updated across accounts", body: "Every client's plan reflows against its own changes, at the same depth.", lane: "mengo" },
      { title: "Account directors set direction", body: "Each account's strategic owner makes the calls their client's situation requires.", lane: "agency" },
      { title: "Production at volume", body: "The week's slots across the portfolio, in the formats each plan specifies.", lane: "mengo" },
      { title: "Structured review", body: "Reviewers work to the written standard, so quality is a property of the process rather than of who happened to review it.", lane: "agency" },
      { title: "Exceptions escalated", body: "Anything outside the standard goes to a person with the authority to decide.", lane: "agency" },
      { title: "Client delivery and reporting", body: "Account owners present, explain and take the follow-up questions.", lane: "agency" },
    ],
    capabilities: ["sops", "roles-and-permissions", "brand-strategy", "sales-performance"],
    workflows: ["scale-client-delivery", "agency-scaling", "client-review"],
    faqs: [
      {
        q: "Does this reduce how many people we need to hire?",
        a: "It changes what you hire for rather than removing the need. The routine production layer stops driving headcount; review, strategy and client ownership still do, and those are the roles that are harder to fill. We would not tell you it eliminates hiring, because it does not.",
      },
      {
        q: "How do we roll this out across an existing book?",
        a: "One service line or one account tier at a time, with a named owner for the rollout. Converting a whole portfolio simultaneously means every account is mid-transition during the same client review cycle, which is the worst possible time to discover a gap.",
      },
      {
        q: "Our account directors will ask what this means for their teams.",
        a: "It is a fair question and worth answering directly. The work that moves is first-draft production and structural setup. The work that grows is review, judgement and client contact. Teams that were spending most of their week on the first are the ones most affected.",
      },
      {
        q: "What about client confidentiality across accounts?",
        a: "Each client's context is held separately. Nothing from one client's brief informs another's plan. If you have contractual restrictions on where client material may be processed, raise them before you start rather than after.",
      },
    ],
    cta: {
      label: "See how client delivery scales",
      href: "/workflows/scale-client-delivery/",
      note: "The workflow behind adding accounts without adding chaos.",
    },
  },

  {
    kind: "stage",
    slug: "established",
    title: "Established Firm",
    navLabel: "Established Firm",
    order: 4,
    shape: "Multiple teams, formal governance, and a standard that has to hold across all of it.",
    headline: "At scale, the standard is the product",
    lead:
      "A large agency does not sell hours or ideas. It sells the confidence that the work will be the same standard on the fortieth account as on the first — delivered by people the client has never met, in a month when the team that pitched has moved on.",
    summary:
      "At scale, consistency is the commercial product. Where a shared marketing system helps, where it must not be allowed to reach, and what governance it has to satisfy.",
    seoTitle: "Large agency operations — holding one standard across many teams",
    seoDescription:
      "At scale an agency sells consistency. Where a shared marketing system helps across teams and accounts, where it must not reach, and the governance it has to satisfy.",
    updated: "2026-08-28",
    situation: [
      {
        label: "Delivery is distributed",
        body: "Multiple teams, often multiple offices, sometimes multiple time zones, all producing under one name.",
      },
      {
        label: "Governance is real",
        body: "Procurement, legal review, data handling commitments and client-specific restrictions are part of how work gets done.",
      },
      {
        label: "Specialists are expensive and scarce",
        body: "Senior strategists and creative directors are the constraint. Everything that consumes their attention without needing it is a direct cost.",
      },
      {
        label: "Institutional knowledge exists but is uneven",
        body: "The agency knows a great deal. Whether the person on a given account can reach it is a different question.",
      },
    ],
    problems: [
      {
        label: "The standard exists on paper and varies in practice",
        body: "A documented process that is not embedded in how work is actually produced becomes a document that gets referenced during audits.",
      },
      {
        label: "Quality is discovered late",
        body: "By the time inconsistency reaches a client review, it has been in the work for weeks.",
      },
      {
        label: "Senior time is spent on structure, not judgement",
        body: "Strategists rebuilding the same research and planning scaffolding on each account are the most expensive possible way to produce it.",
      },
      {
        label: "New accounts start slowly",
        body: "Ramp-up is a real cost, and at scale it repeats often enough to matter to the P&L.",
      },
    ],
    transition: {
      to: "the next standard",
      body:
        "There is no stage after this one, only the ongoing work of keeping the standard true as the agency changes. The failure mode is a process that describes how the agency used to work.",
    },
    ledger: {
      agency: {
        heading: "The agency owns",
        note: "Everything a client is buying when they choose you at this size.",
        items: [
          { label: "Client governance", body: "Contracts, data commitments, approvals and the accountability structure behind them." },
          { label: "The definition of quality", body: "Your standard is a competitive asset. It is set by your people and enforced by your reviewers." },
          { label: "Strategic leadership", body: "Senior judgement on every account, which is what the client is paying a large agency for." },
          { label: "Craft and creative direction", body: "The work that distinguishes you is made by people, on purpose." },
        ],
      },
      mengo: {
        heading: "Mengo carries",
        note: "The uniform layer beneath the craft.",
        items: [
          { label: "Structural consistency", body: "The same research depth and plan anatomy on every account, in every team." },
          { label: "Ramp-up speed", body: "A new account reaches a reviewable first plan in days rather than in a discovery cycle." },
          { label: "Baseline production", body: "The routine volume that should never occupy a creative director." },
          { label: "An auditable trail", body: "What was produced, from which brief, reviewed by whom — legible when a client asks." },
        ],
      },
    },
    week: [
      { title: "Governance and standards", body: "Leadership maintains the written standard and the review structure that enforces it.", lane: "agency" },
      { title: "Uniform structural layer", body: "Research and planning run to the same anatomy on every account, in every team.", lane: "mengo" },
      { title: "Strategy per account", body: "The account's senior owner makes the recommendation and carries it to the client.", lane: "agency" },
      { title: "Production baseline", body: "Routine volume produced to the standard, leaving craft work to the people who do craft.", lane: "mengo" },
      { title: "Creative direction", body: "Distinctive work is made deliberately, by named people, with time protected for it.", lane: "agency" },
      { title: "Review against the standard", body: "Structured review with named reviewers and a recorded decision.", lane: "agency" },
      { title: "Client-facing delivery", body: "Presented by the account's people, under the agency's accountability.", lane: "agency" },
    ],
    capabilities: ["sops", "audit-log", "ai-processing", "brand-manual"],
    workflows: ["scale-client-delivery", "team-handoffs", "client-reporting"],
    faqs: [
      {
        q: "What are the data handling implications?",
        a: "Client material you put into Mengo is processed to produce your outputs. Mengo does not send email, publish to accounts or hold ad spend, so client sending systems and consent records stay where they are. Anything beyond that — retention, residency, sub-processors — should go through your own procurement review, and we would rather that happened before a pilot than after.",
      },
      {
        q: "Can this fit an existing delivery methodology?",
        a: "It has to, at this size. The workflows here are a description of the structure most agency delivery already has; the point is to fill it consistently, not to replace a methodology your clients have been sold on.",
      },
      {
        q: "How do we prevent it reaching the work it should not?",
        a: "By making the boundary a step rather than a policy. In every workflow on this site, client contact, strategic recommendation and final approval are agency steps. A guideline gets forgotten under deadline; a required checkpoint does not.",
      },
      {
        q: "Is Mengo proven at this scale?",
        a: "No, and we are not going to claim otherwise. Mengo is early and we would rather say so than invent a client list. If you are evaluating at this size, the honest starting point is a scoped pilot on one team with defined success criteria.",
      },
    ],
    cta: {
      label: "Read our Responsible AI position",
      href: "/company/responsible-ai/",
      note: "What we will and will not do with client work, stated plainly.",
    },
  },
];

export const stageBySlug = new Map(stages.map((s) => [s.slug, s]));
