import type { Guide } from "@/lib/types";

/**
 * Long-form explanatory pieces.
 *
 * Guides argue; playbooks instruct. A guide is allowed to conclude that the
 * reader should not do something, and two of these do.
 */
export const guides: Guide[] = [
  {
    kind: "guide",
    slug: "agency-delivery-without-more-headcount",
    title: "Agency Delivery Without More Headcount",
    headline: "Agency delivery without more headcount",
    lead:
      "Every agency eventually meets the same wall: more demand than delivery capacity, and only one obvious lever. This is an argument for examining the lever before pulling it.",
    summary:
      "Why headcount is usually the wrong first response to a delivery constraint, what to examine instead, and when hiring genuinely is the answer.",
    seoTitle: "Agency delivery capacity without more headcount",
    seoDescription:
      "Why hiring is usually the wrong first response to an agency delivery constraint, how to find where capacity actually goes, and when headcount genuinely is the answer.",
    updated: "2026-08-29",
    audience: "Agency owners and delivery leads at a capacity decision.",
    blocks: [
      { type: "text", text: "The reflex is understandable. Capacity is people, so more capacity is more people, and the arithmetic seems to follow. But the reflex skips a question worth asking first: what are the people you have actually spending their time on?" },
      { type: "heading", text: "The composition problem" },
      { type: "text", text: "Agency hours divide into three broadly different kinds of work, and they have completely different economics." },
      { type: "terms", items: [
        { label: "Relationship work", body: "Client conversations, difficult news, understanding a business well enough to advise it. Irreducibly human, and the thing clients are actually paying for." },
        { label: "Judgement work", body: "Deciding what to recommend, what to cut, whether a draft is right for this client. Requires expertise and cannot be produced at volume." },
        { label: "Structural work", body: "Research assembly, planning scaffolding, first drafts, context reassembly. Necessary, repetitive, and largely identical between two competent practitioners." },
      ] },
      { type: "text", text: "A hire adds capacity across all three, at the cost of all three. If your constraint is structural work — and in most agencies the majority of hours are structural — you are buying relationship and judgement capacity you did not need in order to get production capacity you did." },
      { type: "heading", text: "Why nobody measures this" },
      { type: "list", items: [
        "Structural work is distributed through everyone's week rather than appearing as tasks.",
        "Context reassembly, which is often the largest single category, appears on no task list at all.",
        "Timesheets record client and project, not the kind of work, so the data does not exist even where time is tracked.",
        "The people best placed to notice are the ones with least time to analyse it.",
      ] },
      { type: "note", text: "A fortnight of honest recording against work type rather than client is usually enough. Most agencies find the split surprising, and the surprise is what makes the rest of the decision straightforward." },
      { type: "heading", text: "What moving the structural layer actually changes" },
      { type: "text", text: "It does not make anyone faster. It removes a category of work from their week, which is a different thing and has a different consequence: the constraint moves rather than disappearing." },
      { type: "steps", items: [
        { title: "Production stops binding", body: "Adding an account no longer implies a proportional increase in first-draft hours.", lane: "mengo" },
        { title: "Review starts binding", body: "Every piece still needs a competent person to stand behind it, and that has not changed.", lane: "agency" },
        { title: "The ceiling rises but still exists", body: "A higher ceiling that scales differently. Not an absence of one, and anyone who tells you otherwise is selling something.", lane: "agency" },
      ] },
      { type: "heading", text: "When to hire anyway" },
      { type: "text", text: "There are situations where the honest answer is that you need a person, and recognising them saves a quarter." },
      { type: "list", items: [
        "Nobody owns a set of accounts, and clients can feel it.",
        "Review is already the bottleneck. Adding production makes this worse, not better.",
        "You need expertise the agency does not have. More output you cannot evaluate is a liability.",
        "You need a discipline outside written marketing — design, video, media buying, development.",
        "The work needs someone in the room with a client more often than your current team can be.",
      ] },
      { type: "heading", text: "The sequence that works" },
      { type: "text", text: "Measure the composition of your hours. Move the structural layer. Find out where review capacity actually sits. Then hire against that, which will be a judgement role rather than a production role — a slower hire, a more expensive one, and a much better-targeted one." },
      { type: "quote", text: "Hiring for volume solves this quarter's problem and recreates it one level up. Hiring for judgement solves the version of the problem you will still have in two years." },
    ],
    related: { stages: ["growing", "small-team"], useCases: ["scale-without-hiring", "handle-more-clients"] },
  },

  {
    kind: "guide",
    slug: "pricing-agency-retainers-around-a-system",
    title: "Pricing Agency Retainers Around a System",
    headline: "Pricing retainers when the work changes shape",
    lead:
      "When the composition of delivery changes, the pricing question arrives immediately and uncomfortably: if the work takes fewer hours, does the retainer have to fall? The answer depends entirely on what you told the client they were buying.",
    summary:
      "What happens to retainer pricing when delivery hours fall, why hourly logic traps agencies, and how to move to a defensible basis without a difficult renegotiation.",
    seoTitle: "Pricing agency retainers when delivery changes",
    seoDescription:
      "What happens to agency retainer pricing when delivery takes fewer hours, why hourly logic is a trap, and how to move toward a defensible pricing basis.",
    updated: "2026-08-29",
    audience: "Agency owners and anyone responsible for commercial terms.",
    blocks: [
      { type: "text", text: "This is the question agency owners ask third, after 'does it work' and 'what does it cost'. It deserves a straight answer, and the straight answer starts with an uncomfortable observation about how most retainers were priced in the first place." },
      { type: "heading", text: "The hourly trap" },
      { type: "text", text: "If a retainer was justified to the client on the basis of hours or deliverable counts, then reducing the hours logically reduces the price. That is not a quirk of this situation; it is what you agreed. The trap was set at the point of sale." },
      { type: "terms", items: [
        { label: "Priced on inputs", body: "Hours, days, people. Any efficiency gain belongs to the client by the logic you established." },
        { label: "Priced on outputs", body: "Deliverable counts. Slightly better, but it makes every conversation about volume rather than value." },
        { label: "Priced on outcomes", body: "Attractive and genuinely difficult, because attribution is hard and outcomes depend on things you do not control." },
        { label: "Priced on the engagement", body: "What it is worth to have a competent agency responsible for this function. Defensible, and the hardest to establish retrospectively." },
      ] },
      { type: "heading", text: "What actually changes" },
      { type: "text", text: "It is worth being precise here, because the honest description is more useful than a reassuring one. The total hours may fall. The composition definitely changes: less first-draft production, more review, judgement and client contact. The senior share of the remaining hours goes up." },
      { type: "note", text: "That last point matters commercially. If a retainer previously included twenty hours of which fifteen were junior production, and now includes twelve of which nine are senior review and strategy, the cost base has not fallen proportionally with the hours." },
      { type: "heading", text: "Three honest options" },
      { type: "steps", items: [
        { title: "Hold the price, increase the scope", body: "The cleanest option for an existing client. More output, more channels, better nurturing — things they wanted and could not previously afford.", lane: "agency" },
        { title: "Hold the price, improve the margin", body: "Defensible if the client is getting what they were promised at the standard they expected. Less defensible if you sold them hours.", lane: "agency" },
        { title: "Reprice new business on a different basis", body: "Change the logic for new clients rather than renegotiating existing ones. Slower, but avoids a conversation you are unlikely to win.", lane: "agency" },
      ] },
      { type: "heading", text: "What not to do" },
      { type: "list", items: [
        "Do not reduce the price to reflect reduced hours unless you want hours to remain the basis of every future conversation.",
        "Do not quietly increase scope without saying so. Unacknowledged extra work becomes the new baseline expectation.",
        "Do not tell a client you are more efficient without saying what they get from it. That invites the obvious question.",
        "Do not promise savings you have not measured. Agencies do not know their own numbers as well as they think.",
      ] },
      { type: "heading", text: "The disclosure question" },
      { type: "text", text: "Whether to tell clients how you deliver is a genuine judgement call and it varies by market. Some clients regard tooling as an implementation detail, in the way they do not ask which word processor you use. Others — particularly larger ones with procurement functions — will ask directly, and being unprepared for that question is worse than any answer." },
      { type: "text", text: "Our own position is on the Responsible AI page. It is not a policy we can set for your agency, because your client contracts are yours." },
      { type: "quote", text: "An agency that has never articulated what its retainer buys will find that question answered for it, unfavourably, the first time a client's finance team looks closely." },
    ],
    related: { stages: ["small-team", "growing"], useCases: ["handle-more-clients", "scale-without-hiring"] },
  },

  {
    kind: "guide",
    slug: "where-agency-time-actually-goes",
    title: "Where Agency Time Actually Goes",
    headline: "Where agency time actually goes",
    lead:
      "Ask an agency where its hours go and you will get an answer about client work. Measure it and you will get a different answer, and the gap between the two is where most delivery problems live.",
    summary:
      "How to measure the composition of your agency's week, the categories most people miss, and what to do with the answer.",
    seoTitle: "Measuring where agency delivery time goes",
    seoDescription:
      "A method for measuring how agency hours are actually spent, the work categories most agencies never track, and how to act on what the measurement shows.",
    updated: "2026-08-29",
    audience: "Anyone who has to answer 'can we take this on'.",
    blocks: [
      { type: "text", text: "This guide is not about time tracking. Most agencies already track time against clients and projects, which answers a billing question and almost nothing else. What is missing is the composition of the work, and that is a different measurement with a different purpose." },
      { type: "heading", text: "Why client-based tracking does not help" },
      { type: "text", text: "Knowing that an account consumed forty hours tells you what to invoice. It does not tell you whether those hours were spent on things a client values, and therefore it cannot tell you what to change." },
      { type: "heading", text: "The categories worth measuring" },
      { type: "terms", items: [
        { label: "Client communication", body: "Calls, meetings, email, messages. Usually larger than anyone estimates, and almost entirely valuable." },
        { label: "Context reassembly", body: "Re-reading strategy, previous work and tone notes before starting anything. The category nobody tracks and the one most likely to surprise you." },
        { label: "Structural work", body: "Research, planning, setting up the shape of a programme. Repetitive between accounts." },
        { label: "Production", body: "Writing, making, building. What most people assume is the bulk of the week and often is not." },
        { label: "Review and editing", body: "Where senior judgement is applied. Usually under-resourced." },
        { label: "Internal coordination", body: "Status meetings, handovers, chasing. Grows non-linearly with headcount." },
        { label: "Admin and reporting", body: "Invoicing, scheduling, putting numbers into a deck." },
        { label: "Rework", body: "Work redone because a brief was unclear or an approval changed. Worth isolating: it is pure waste and it is fixable." },
      ] },
      { type: "heading", text: "How to run the measurement" },
      { type: "list", items: [
        "Two weeks. One is too noisy; a month is more than anyone will sustain.",
        "Everyone who touches client delivery, including the founder — especially the founder.",
        "Categories, not clients. Existing tools already handle clients.",
        "Fifteen-minute granularity is plenty. Precision here is a false economy.",
        "Say explicitly that this is not a performance measurement, and mean it. Otherwise the data is fiction.",
      ] },
      { type: "note", text: "The most common single finding is that context reassembly and rework together account for more of the week than anyone believed, and that both are structural problems rather than individual ones." },
      { type: "heading", text: "Reading the result" },
      { type: "steps", items: [
        { title: "Find the largest category", body: "If it is production or context reassembly, the delivery model is the constraint.", lane: "agency" },
        { title: "Look at rework separately", body: "High rework is a briefing or approval problem, and fixing it is cheaper than anything else on this list.", lane: "agency" },
        { title: "Check where senior hours went", body: "If experienced people are mostly producing rather than reviewing and advising, that is the finding.", lane: "agency" },
        { title: "Compare accounts", body: "Wide variation in cost per account usually means the smallest accounts are being subsidised.", lane: "agency" },
      ] },
      { type: "heading", text: "What to do next" },
      { type: "text", text: "Act on one category, not four. The measurement's value is that it points at a single constraint; treating it as a list of eight improvement projects guarantees that none of them finishes." },
      { type: "quote", text: "Almost every agency that measures this finds something they would have bet against. That is the entire reason to measure rather than to estimate." },
    ],
    related: { stages: ["solo", "small-team", "growing"], useCases: ["reduce-repetitive-work", "deliver-faster"] },
  },

  {
    kind: "guide",
    slug: "using-ai-in-client-work-responsibly",
    title: "Using AI in Client Work Responsibly",
    headline: "Using AI in client work responsibly",
    lead:
      "This is a practical guide rather than a position piece. An agency putting client work through any generative system takes on specific, identifiable risks, and most of them are manageable with process rather than policy.",
    summary:
      "The concrete risks of using generative tools in client delivery, the process controls that address each, and the questions to settle before you start.",
    seoTitle: "Using AI responsibly in agency client work",
    seoDescription:
      "The practical risks of using generative AI in agency client delivery — accuracy, confidentiality, disclosure, dependency — and the process controls that address each.",
    updated: "2026-08-29",
    audience: "Agency owners, delivery leads and anyone answering a client's questions about this.",
    blocks: [
      { type: "text", text: "Agencies are being asked about this by clients, and increasingly by client procurement functions. Having a considered answer is now part of the job. This guide covers the risks we think are real, including the ones that apply to us." },
      { type: "heading", text: "Risk one: confident inaccuracy" },
      { type: "text", text: "Generated text is fluent by construction and accurate only by coincidence. The danger is not obvious nonsense, which anyone catches. It is a plausible, specific, wrong statement about a client's business, sector or product — the kind that survives a quick read." },
      { type: "terms", items: [
        { label: "The control", body: "Review by someone who knows enough to detect a subtle error. Proofreading does not qualify." },
        { label: "The systemic version", body: "Any generated fact should be flagged rather than asserted. A gap you can see is safe; a confident invention is not." },
        { label: "The failure to watch for", body: "Review that becomes a formality because the output is usually fine. Attention decays with a high pass rate." },
      ] },
      { type: "heading", text: "Risk two: client confidentiality" },
      { type: "text", text: "Client material entering any third-party system is a contractual question first and a technical one second. It applies to freelancers, to cloud storage and to generative tools equally — but clients are asking about the last one specifically." },
      { type: "list", items: [
        "Check your client contracts for restrictions on sub-processing and third-party disclosure.",
        "Know where material is processed and what the provider's retention terms are.",
        "Decide what never leaves your building — commercially sensitive material, unreleased plans, personal data.",
        "Answer this before a client asks, not during a procurement review.",
      ] },
      { type: "heading", text: "Risk three: sameness" },
      { type: "text", text: "If every agency in a sector uses similar tooling with similar inputs, output converges. This is a genuine competitive risk and it is not solved by better prompting; it is solved by the parts of the work that were never generated — the client insight, the strategic call, the craft in the edit." },
      { type: "heading", text: "Risk four: skill atrophy" },
      { type: "text", text: "A junior who never writes a first draft does not become a senior who can judge one. This is the least discussed risk and possibly the most consequential over five years, because it degrades the exact capability that makes the rest safe." },
      { type: "note", text: "A reasonable mitigation: keep some work deliberately manual for people who are still learning, and treat that as training cost rather than inefficiency." },
      { type: "heading", text: "Risk five: disclosure" },
      { type: "text", text: "Whether to tell clients is a judgement call that depends on your market and your contracts. What is not a judgement call is being unable to answer when asked. Decide your position, write it down, and make sure everyone client-facing knows it." },
      { type: "heading", text: "The questions to settle before you start" },
      { type: "list", items: [
        "What may go in, and what never may?",
        "Who reviews, against what standard, and what happens when they are unavailable?",
        "What do we tell clients, and who says it?",
        "Which work stays manual, and why?",
        "How do we know if quality is drifting?",
      ] },
      { type: "quote", text: "The agencies that will regret this are not the ones that adopted early. They are the ones that adopted without deciding where the human review sits." },
    ],
    related: { stages: ["small-team", "established"], useCases: ["standardize-delivery"] },
  },
];

export const guideBySlug = new Map(guides.map((g) => [g.slug, g]));
