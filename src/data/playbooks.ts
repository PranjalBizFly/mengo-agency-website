import type { Playbook } from "@/lib/types";

/**
 * Operational documents. Written to be worked through rather than read.
 *
 * The test each one has to pass: could an agency person follow this on Monday
 * without needing Mengo at all? If not, it is marketing rather than a playbook.
 * Every one of these is useful on its own; where Mengo fits is stated once,
 * plainly, rather than woven through every step.
 */
export const playbooks: Playbook[] = [
  {
    kind: "playbook",
    slug: "first-ninety-days-with-a-new-client",
    title: "The First Ninety Days With a New Client",
    headline: "The first ninety days with a new client",
    lead:
      "The first quarter of an engagement sets what the client expects for the rest of it. Almost nothing about that is determined by results, because there are none yet — it is determined by whether the first ninety days felt organised.",
    summary:
      "A week-by-week structure for the first quarter of a client engagement, from kickoff through to the first review that has evidence in it.",
    seoTitle: "Agency playbook — the first 90 days with a new client",
    seoDescription:
      "A practical week-by-week playbook for the first ninety days of an agency client engagement: kickoff, brief, research, plan approval, first production and first review.",
    updated: "2026-08-29",
    audience: "Account leads and agency owners running a new engagement.",
    effort: "Read in fifteen minutes. Applies across a quarter.",
    blocks: [
      { type: "text", text: "Every agency has lost a client that was never unhappy about the work. Usually the cause is traceable to the first month, when the engagement felt disorganised and the client quietly decided this was what working with you would be like." },
      { type: "heading", text: "Weeks one and two: understand, do not produce" },
      { type: "text", text: "The strongest thing you can do in the first fortnight is resist producing. A client who receives content in week one learns that you will start work without understanding their business, which is exactly the expectation you do not want." },
      { type: "list", items: [
        "Run a kickoff conversation with the people who actually decide, not only the marketing contact.",
        "Capture the brief in your standard structure. The same fields you use on every account.",
        "Ask what went wrong with their last agency. The answer tells you what you will be measured against.",
        "Agree how approvals will work, in writing, including who signs off and how long they need.",
        "Agree what you will report on and how often, before there is anything to report.",
      ] },
      { type: "note", text: "The approval question is the one most agencies skip and most regret. A client who has not agreed a review turnaround will not feel late when they take two weeks." },
      { type: "heading", text: "Weeks three and four: research and the strategic layer" },
      { type: "text", text: "This is where the engagement earns its credibility. The client should see that you understand their market better than they expected, and that you noticed something they had not." },
      { type: "steps", items: [
        { title: "Assemble the research", body: "Audience, competitors, channel landscape and an explicit list of what you do not know.", lane: "mengo" },
        { title: "Validate it against what you know", body: "Some of it will be wrong. Finding that is the point of this step, not a failure of it.", lane: "agency" },
        { title: "Draft the strategic layer", body: "Positioning, segments, offer structure, ranked channels.", lane: "mengo" },
        { title: "Make the strategic call", body: "Decide what you actually recommend. This is your professional judgement and it cannot be delegated.", lane: "agency" },
        { title: "Present it properly", body: "In person or on a call, with reasoning. Do not email a document and ask for comments.", lane: "agency" },
      ] },
      { type: "heading", text: "Weeks five to eight: first production window" },
      { type: "list", items: [
        "Produce against the approved plan, not against a client's ad hoc request. If the client asks for something outside it, decide deliberately whether to accommodate it.",
        "Over-review the first batch. The first work a client sees defines their expectation of your standard.",
        "Show the client one piece early and informally, before the full batch. Corrections at this point are cheap.",
        "Record every correction the client makes. Patterns in those corrections are their voice, and they belong in the voice profile.",
      ] },
      { type: "heading", text: "Weeks nine to twelve: the first real review" },
      { type: "text", text: "The first quarterly review is the moment an engagement either becomes a relationship or becomes a supplier arrangement. The difference is almost entirely in whether you bring a point of view or a report." },
      { type: "terms", items: [
        { label: "Lead with what you learned", body: "About their audience, their market or their own business. This is what distinguishes you from a production vendor." },
        { label: "Be honest about what did not work", body: "Naming a failure before the client does is the single most trust-building thing available to you." },
        { label: "Bring a recommendation, not options", body: "Clients hire agencies for judgement. A menu of choices is judgement withheld." },
        { label: "Agree the next quarter's priorities", body: "Explicitly, including what you are deliberately not doing." },
      ] },
      { type: "heading", text: "Where Mengo fits" },
      { type: "text", text: "Weeks three to eight are where most of the structural hours sit: the research assembly, the first strategic draft and the first production batch. Those are the steps Mengo carries. The kickoff conversation, the validation, the strategic call, the presentation and every client interaction stay with you, because they are the engagement." },
    ],
    related: { workflows: ["client-onboarding", "strategy-and-planning"], capabilities: ["research", "strategy"] },
  },

  {
    kind: "playbook",
    slug: "running-a-quarterly-client-review",
    title: "Running a Quarterly Client Review",
    headline: "Running a quarterly client review",
    lead:
      "Most quarterly reviews are a report read aloud. The client already saw the numbers, so the meeting produces nothing, and over time it becomes the meeting everyone tries to reschedule.",
    summary:
      "A structure for quarterly reviews that produce a decision rather than a recap, including how to handle a quarter that did not go well.",
    seoTitle: "Agency playbook — running a quarterly client review",
    seoDescription:
      "How to run an agency quarterly client review that produces decisions rather than a recap of numbers the client has already seen, including how to handle a bad quarter.",
    updated: "2026-08-29",
    audience: "Account leads responsible for client relationships.",
    effort: "Two hours of preparation, one hour in the room.",
    blocks: [
      { type: "text", text: "A review meeting has one job: to produce a decision about the next quarter. If it ends without one, it was a status update with a longer agenda." },
      { type: "heading", text: "Before the meeting" },
      { type: "list", items: [
        "Send the numbers in advance. Reading data aloud consumes the meeting and tells the client nothing they could not have read.",
        "Decide your recommendation before you walk in. Turning up with options and no view is how an agency becomes a supplier.",
        "Identify the one uncomfortable thing you need to say, and plan to say it in the first ten minutes.",
        "Ask the client in advance what they want to get out of the meeting. It is frequently not what you assumed.",
      ] },
      { type: "heading", text: "The structure" },
      { type: "steps", items: [
        { title: "What we said we would do", body: "The commitments from last quarter, stated plainly, including the ones you missed.", lane: "agency" },
        { title: "What happened", body: "Results against the definitions agreed in advance, not against ones chosen afterwards to look better.", lane: "agency" },
        { title: "What we learned", body: "The genuinely interesting part. What do you now know about their audience that you did not?", lane: "agency" },
        { title: "What we recommend", body: "One clear recommendation with reasoning. Alternatives only if the client asks.", lane: "agency" },
        { title: "What we need from you", body: "Approvals, information, access, decisions. Most engagements are slowed by the client and nobody says so.", lane: "agency" },
      ] },
      { type: "heading", text: "When the quarter went badly" },
      { type: "text", text: "The instinct is to lead with context and arrive at the bad news gradually. This reads, correctly, as managing the client. Say it first, say it plainly, then explain what you are doing about it." },
      { type: "terms", items: [
        { label: "Name it in the first five minutes", body: "The client already knows. Delaying it only demonstrates that you were hoping to avoid the conversation." },
        { label: "Separate the diagnosis from the excuse", body: "Market conditions may be relevant and are not a diagnosis. What did you get wrong?" },
        { label: "Bring a specific change", body: "Not 'we will optimise'. What, specifically, will be different next quarter?" },
        { label: "Do not over-promise the recovery", body: "The quickest way to lose a client after a bad quarter is a confident prediction that also fails." },
      ] },
      { type: "quote", text: "The review that saves an account is usually the one where the agency said the difficult thing before the client had to." },
      { type: "heading", text: "After the meeting" },
      { type: "list", items: [
        "Send a written summary of the decisions within twenty-four hours, while everyone still remembers the same meeting.",
        "Convert every decision into a plan change, not a note. A decision that does not reach the plan did not happen.",
        "Diarise the actions you need from the client, and follow them up. Their delay becomes your missed quarter.",
      ] },
      { type: "heading", text: "Where Mengo fits" },
      { type: "text", text: "Preparing the material and reflowing the plan against the decisions you make are structural work. The recommendation, the difficult conversation and the relationship are entirely yours — and the meeting is where a client decides whether they are buying your judgement or your output." },
    ],
    related: { workflows: ["strategy-and-planning", "campaign-planning"], capabilities: ["strategy", "marketing-systems"] },
  },

  {
    kind: "playbook",
    slug: "building-a-content-system-for-one-client",
    title: "Building a Content System for One Client",
    headline: "Building a content system for one client",
    lead:
      "A content system is not a calendar. A calendar tells you a slot exists; a system tells you what the slot is for, who it is aimed at and what it should sound like — which is the part that costs hours when it is missing.",
    summary:
      "How to build a reusable content system for a single client: voice profile, guardrails, format set, brief structure and a review standard.",
    seoTitle: "Agency playbook — building a client content system",
    seoDescription:
      "A step-by-step playbook for building a reusable content system for one client: voice profile, editorial guardrails, format set, brief structure and review standard.",
    updated: "2026-08-29",
    audience: "Content leads and anyone responsible for a client's ongoing output.",
    effort: "A day to build. Saves hours every week after.",
    blocks: [
      { type: "text", text: "Build this once per client, properly, and every subsequent piece of work inherits it. Skip it and you will supply the same context by hand, in fragments, for the life of the account." },
      { type: "heading", text: "One: the voice profile" },
      { type: "text", text: "Most voice documents are useless because they describe an aspiration. A useful one describes observable behaviour, and the fastest way to write it is from the client's existing material rather than from a workshop." },
      { type: "list", items: [
        "Collect the five pieces the client is proudest of, and the two they dislike. The contrast is more informative than either alone.",
        "Write down what is actually true about the good ones: sentence length, formality, whether they use humour, whether they use the first person.",
        "Record the words this client never uses. Prohibitions are more useful than aspirations.",
        "Record the words they always use — the internal shorthand, the phrase the founder repeats.",
        "Note who is speaking: the company, the founder, or the practitioner. These are three different voices and clients often have not decided.",
      ] },
      { type: "heading", text: "Two: editorial guardrails" },
      { type: "text", text: "Guardrails are a client-safety mechanism rather than a style preference. They define what may be claimed at all." },
      { type: "terms", items: [
        { label: "Claims that require evidence", body: "Anything about results, rankings, comparisons or compliance. Name who holds the evidence." },
        { label: "Claims that are prohibited", body: "Regulatory limits, competitor mentions, forward-looking product statements." },
        { label: "Facts that must come from the client", body: "Numbers, dates, names, credentials. If a draft needs one and does not have it, it should say so rather than approximating." },
        { label: "The escalation path", body: "Who decides when something is borderline. Every guardrail needs one." },
      ] },
      { type: "heading", text: "Three: the format set" },
      { type: "text", text: "Decide which formats this client actually uses, and write down what each one is for. A format set of eight defined shapes produces more consistent work than a library of a hundred nobody has chosen between." },
      { type: "heading", text: "Four: the brief structure" },
      { type: "list", items: [
        "Audience segment and the objection it holds",
        "The one thing this piece has to achieve",
        "Format and channel",
        "What it must not say",
        "What it should link to or lead toward",
      ] },
      { type: "heading", text: "Five: the review standard" },
      { type: "text", text: "Write down what a reviewer checks, in order. Without it, review is whatever the reviewer noticed that day, which is why two reviewers produce two verdicts on the same draft." },
      { type: "note", text: "A practical test for the whole system: hand it to someone who has never worked on this client, along with a brief, and see whether what comes back is recognisably this client. If not, the gap you find is the part of the system that is missing." },
      { type: "heading", text: "Where Mengo fits" },
      { type: "text", text: "The voice profile, guardrails and format set are stored per client, so every subsequent brief and draft inherits them rather than being told again. Defining them — and reviewing against the standard — stays yours, because both are judgements about the client rather than facts about them." },
    ],
    related: { workflows: ["content-production"], capabilities: ["content", "marketing-systems"] },
  },

  {
    kind: "playbook",
    slug: "taking-on-your-fourth-client",
    title: "Taking On Your Fourth Client",
    headline: "Taking on your fourth client",
    lead:
      "There is a specific point where a small agency's delivery stops working, and for most it arrives somewhere around the fourth concurrent account. Three can be held in one person's head. Four cannot.",
    summary:
      "The capacity conversation most agencies have too late: how to decide whether to take the next account, using numbers rather than optimism.",
    seoTitle: "Agency playbook — deciding whether to take the next client",
    seoDescription:
      "A practical process for deciding whether your agency can take on another client: measuring true account cost, modelling review capacity and setting a decision rule in advance.",
    updated: "2026-08-29",
    audience: "Solo and small agency owners at a capacity decision.",
    effort: "A fortnight of measurement, an afternoon of arithmetic.",
    blocks: [
      { type: "text", text: "The decision to take another client is usually made in a month when the pipeline looks thin, by someone who will personally absorb the consequences if it is wrong. It deserves better than instinct, and the arithmetic is not hard." },
      { type: "heading", text: "Step one: measure what an account actually costs" },
      { type: "text", text: "For a fortnight, record hours against categories rather than clients. Most people are surprised, and the surprise is the useful part." },
      { type: "list", items: [
        "Client communication — calls, emails, meetings, the WhatsApp message on a Sunday",
        "Context reassembly — re-reading strategy and previous work before starting anything",
        "Structural work — research, planning, setting up the shape of a programme",
        "Production — actually writing or making things",
        "Review and editing",
        "Admin — invoicing, scheduling, reporting, chasing approvals",
      ] },
      { type: "note", text: "Context reassembly is the category most agencies have never measured and it is routinely large. It does not appear on any task list, which is precisely why it is invisible." },
      { type: "heading", text: "Step two: separate fixed from variable" },
      { type: "terms", items: [
        { label: "Fixed per account", body: "Roughly the same regardless of account size: onboarding, the strategic layer, the reporting rhythm. This is why small accounts are so often unprofitable." },
        { label: "Variable with volume", body: "Production and review, which scale with how much the client actually gets." },
        { label: "Fixed per agency", body: "Your own marketing, admin and business development, which the account count does not change." },
      ] },
      { type: "heading", text: "Step three: find your real constraint" },
      { type: "text", text: "Add up the hours in each category across your current accounts and ask which one runs out first as you add another. That category is your constraint, and it is the only one worth acting on." },
      { type: "heading", text: "Step four: set the decision rule before you need it" },
      { type: "text", text: "Write down, now, what has to be true for you to accept another client. Deciding the rule while a prospect is on the phone is how agencies end up over-committed." },
      { type: "list", items: [
        "The minimum retainer that covers the fixed per-account cost with margin",
        "The review hours per week the account will need, and where they come from",
        "What you will stop doing, or who you will bring in, to create that space",
        "The point at which you would decline — and a form of words for declining",
      ] },
      { type: "heading", text: "Step five: reduce the fixed cost before you add the account" },
      { type: "text", text: "If the fixed per-account cost is what makes the fourth client marginal, lowering it is a better move than working more hours. That is a delivery-model change, and it is worth making before the account arrives rather than during it." },
      { type: "quote", text: "The agencies that stall at three or four clients are rarely short of demand. They are short of a delivery model where the fourth account costs less than the first." },
      { type: "heading", text: "Where Mengo fits" },
      { type: "text", text: "The fixed per-account cost — onboarding structure, research, the first strategic draft — is the layer that repeats in full on every account and that Mengo carries. Your review hours are unchanged, which is why review capacity becomes the constraint and why you should model it before signing." },
    ],
    related: { workflows: ["scale-client-delivery"], capabilities: ["marketing-systems", "strategy"] },
  },
];

export const playbookBySlug = new Map(playbooks.map((p) => [p.slug, p]));
