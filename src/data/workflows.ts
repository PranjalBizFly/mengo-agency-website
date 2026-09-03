import type { Workflow } from "@/lib/types";

/**
 * The six delivery workflows.
 *
 * Each one is drawn as a spine: an ordered sequence where every step carries
 * the lane that owns it. The attribution is the whole point of the page, so
 * the data shape makes it impossible to add a step without saying whose it is.
 *
 * A pattern holds across all six and is deliberate rather than accidental: the
 * first step and the last step are always the agency's. Client contact opens
 * every workflow and closes it, and no workflow ends with Mengo handing
 * something to a client.
 */
export const workflows: Workflow[] = [
  {
    kind: "workflow",
    slug: "client-onboarding",
    title: "Client Onboarding",
    navLabel: "Client Onboarding",
    headline: "From signature to a plan the client recognises",
    lead:
      "Onboarding is the most under-designed part of most agency operations. It is also where a client forms their opinion of how you work — before any results exist to judge you on, the only evidence they have is how the first three weeks felt.",
    summary:
      "The first three weeks of a client engagement, from kickoff to an approved plan, with every step attributed to the side that owns it.",
    seoTitle: "Agency client onboarding workflow",
    seoDescription:
      "A structured client onboarding workflow for agencies: kickoff, brief capture, research, strategic draft, agency correction and a plan the client approves.",
    updated: "2026-08-27",
    trigger: "A signed engagement, or a client moving from a pitch into delivery.",
    outcome: "An approved strategic layer and a plan the client understands, presented by the agency.",
    spine: [
      { title: "Kickoff conversation", body: "The agency meets the client properly. What they sell, who buys, what went wrong last time, what they are actually worried about. The useful material arrives when the agenda runs out.", lane: "agency" },
      { title: "Brief captured in a common structure", body: "The conversation becomes a written brief in the same shape used on every account — offer, buyer, price, objection, traction, constraints.", lane: "agency" },
      { title: "Research pass", body: "Audience, competitor and channel context assembled into a working document, with everything unknown marked as unknown.", lane: "mengo" },
      { title: "Agency validates the research", body: "You check it against what you know. Finding the parts that are wrong is the purpose of this step, not a failure of it.", lane: "agency" },
      { title: "Strategic layer drafted", body: "Positioning, segments, offer structure and a ranked channel view, produced from the validated research.", lane: "mengo" },
      { title: "Agency makes the strategic call", body: "The recommendation is yours. You decide what to keep, what to change and what to throw away.", lane: "agency" },
      { title: "Plan built to the decision", body: "A themed calendar and the first production window, sequenced against the approved strategy.", lane: "mengo" },
      { title: "Agency presents to the client", body: "In your words, with your reasoning. The client is buying your judgement, and this is the moment they see it.", lane: "agency" },
      { title: "Client approves", body: "Sign-off is between the agency and the client, recorded by the agency.", lane: "agency" },
    ],
    before: [
      { label: "Discovery takes as long as it takes", body: "Usually several weeks, mostly waiting on availability, with the actual work compressed into the last few days." },
      { label: "The brief lives in someone's notes", body: "Which means the person who ran kickoff is the only one who can produce the plan." },
      { label: "Research depth varies by how busy that month was", body: "The accounts that most needed thinking time are often the ones that got least." },
      { label: "The first plan is a large, one-off effort", body: "Built from scratch, by a senior person, at the exact moment they have least capacity." },
    ],
    after: [
      { label: "Discovery has a shape", body: "The same brief structure every time, so the next steps can start as soon as it is filled in." },
      { label: "Research is a consistent depth", body: "Every account gets the same pass, including the one that arrived in a busy month." },
      { label: "The first plan arrives as a draft to correct", body: "Senior time goes to judgement instead of to assembly, which is a better use of the scarcest resource you have." },
      { label: "The client sees a considered plan sooner", body: "Which is what they are actually judging in the first month." },
    ],
    checkpoints: [
      "The agency validates research before any strategy is drafted from it.",
      "The agency approves the strategic layer before any plan is built on it.",
      "The agency presents the plan to the client. No output goes to a client unpresented.",
      "Client approval is recorded by the agency, in the agency's own record.",
    ],
    related: { capabilities: ["research", "strategy", "marketing-systems"], stages: ["start-an-agency", "solo-agency", "large-agency"] },
    faqs: [
      {
        q: "How long does onboarding take with this workflow?",
        a: "Faster than a from-scratch discovery, but we are not going to put a number on it — the gating factor is almost always client availability and how quickly your reviewer gets to the draft, not production time.",
      },
      {
        q: "What if the client cannot answer the brief questions?",
        a: "That is useful information rather than a blocker. A client who cannot describe their buyer's objection has told you something important about where the engagement needs to start, and the brief should record the gap rather than fill it with a guess.",
      },
      {
        q: "Can we use our own kickoff format?",
        a: "You should. The brief structure needs to be consistent across your accounts; whether it matches ours is irrelevant. What matters is that the same fields get captured every time.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "strategy-and-planning",
    title: "Strategy & Planning",
    navLabel: "Strategy & Planning",
    headline: "A plan that reflows when the business changes",
    lead:
      "The reason most client marketing plans go stale is not that they were wrong. It is that they were built as documents, so updating one means rewriting it — and rewriting a plan is a job nobody schedules until the plan is visibly out of date.",
    summary:
      "Turning an approved strategic layer into a themed plan that updates when the client's offer, market or capacity changes, without a rewrite.",
    seoTitle: "Agency strategy and planning workflow",
    seoDescription:
      "A workflow for building client marketing plans that reflow when the offer or channel mix changes, with the agency making every strategic decision.",
    updated: "2026-08-27",
    trigger: "An approved strategic layer, or a material change to a client's business.",
    outcome: "A themed, sequenced plan the client has approved and the agency can execute against.",
    spine: [
      { title: "Agency sets the planning horizon", body: "How far out to plan in detail, and how far to leave thematic. A decision about the client's volatility, not a default.", lane: "agency" },
      { title: "Themes derived from the strategy", body: "Months and weeks get a theme, so a calendar slot arrives as a brief rather than as an empty date.", lane: "mengo" },
      { title: "Sequenced against dependencies", body: "Foundational work lands before the offers that depend on it, and the calendar paces around launches and quiet periods.", lane: "mengo" },
      { title: "Agency applies real-world constraints", body: "Budget cycles, the client's capacity, the month their founder is unreachable. You know these; the plan does not.", lane: "agency" },
      { title: "Detail resolved for the near window", body: "The next quarter is resolved to slot level; the rest stays thematic until it is closer and better informed.", lane: "mengo" },
      { title: "Agency reviews and approves", body: "The plan is a recommendation until a person with the account signs it off.", lane: "agency" },
      { title: "Agency presents and agrees it with the client", body: "Including what is deliberately not being done, which is usually the more interesting half.", lane: "agency" },
      { title: "Plan reflows on change", body: "A changed offer or channel updates the plan rather than triggering a rewrite.", lane: "mengo" },
      { title: "Agency re-approves the change", body: "Nothing reaches the client's calendar because it regenerated. A person confirms it.", lane: "agency" },
    ],
    before: [
      { label: "The plan is a document", body: "Built once, presented once, and increasingly inaccurate from the week it was approved." },
      { label: "Updating it is a project", body: "So it does not happen, and the gap between the plan and the work widens until someone rebuilds it." },
      { label: "Sequencing is implicit", body: "Content lands in whatever order it was produced, which is not the order a buyer needs to encounter it." },
      { label: "The quiet accounts get no planning at all", body: "Attention follows noise, and the account that never complains gets the least thinking." },
    ],
    after: [
      { label: "The plan is an object", body: "Editable, versioned, and inherited from by everything downstream." },
      { label: "A change is an edit", body: "Which means the plan can stay current, because keeping it current is no longer a project." },
      { label: "Sequence is deliberate", body: "Awareness work lands before the offers that depend on it, because the plan knows the dependency." },
      { label: "Every account is planned to the same depth", body: "Including the quiet ones." },
    ],
    checkpoints: [
      "The agency sets the planning horizon rather than accepting a default.",
      "The agency applies constraints only it knows about before the plan is finalised.",
      "The agency approves the plan before the client sees it.",
      "Every regenerated plan is re-approved by a person before it takes effect.",
    ],
    related: { capabilities: ["strategy", "research", "marketing-systems"], stages: ["small-agency", "growing-agency", "large-agency"] },
    faqs: [
      {
        q: "How far ahead should a client plan go?",
        a: "Detailed for the next quarter and thematic beyond it is a reasonable default, but it depends on how fast the client's market moves. A client in a stable professional services market can plan further than one selling into a category that reshapes twice a year.",
      },
      {
        q: "What happens to work already in production when the plan changes?",
        a: "It stays in production unless someone stops it. Regeneration affects the plan, not the queue, and a person decides whether in-flight work is still right.",
      },
      {
        q: "Can clients see the plan directly?",
        a: "What you share with a client is your decision. Most agencies present rather than expose, because a plan without the reasoning attached invites the wrong conversation.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "content-production",
    title: "Content Production",
    navLabel: "Content Production",
    headline: "From an approved plan to work an editor can review",
    lead:
      "Production is where agency hours go, and most of them go to the same place: reassembling context. Who is this for, what is the angle, what does this client sound like, what did we already say about this. Reassembly is the cost, not typing.",
    summary:
      "The weekly production run: briefs from the plan, drafts to format, and a review queue an editor can work through in one pass.",
    seoTitle: "Agency content production workflow",
    seoDescription:
      "A weekly content production workflow for agencies: briefs generated from an approved plan, drafts written to format, and a required agency review before anything ships.",
    updated: "2026-08-27",
    trigger: "An approved plan with slots in the current production window.",
    outcome: "Reviewed, approved content published by the agency in the client's own tools.",
    spine: [
      { title: "Agency confirms the week's scope", body: "What is actually going out. A plan is a proposal until someone commits the week.", lane: "agency" },
      { title: "Briefs generated per slot", body: "Each slot becomes a brief with an audience, an angle, a format and a job to do.", lane: "mengo" },
      { title: "Drafts produced to format", body: "Written for the shape the channel takes, inheriting the client's stored voice and guardrails.", lane: "mengo" },
      { title: "Gaps flagged, not filled", body: "Where a draft needed a fact nobody supplied, it says so rather than inventing a number.", lane: "mengo" },
      { title: "Agency edits", body: "The required step. Voice, accuracy, cuts, and the sentence only someone who knows the client would add.", lane: "agency" },
      { title: "Agency approves", body: "A named person decides this is good enough to carry the agency's name.", lane: "agency" },
      { title: "Agency publishes", body: "In the client's own scheduling, email and social tools, under the client's accounts.", lane: "agency" },
      { title: "Agency records what worked", body: "Observations feed back into the plan and the voice profile.", lane: "agency" },
    ],
    before: [
      { label: "Every asset starts with a context reload", body: "The writer re-reads the strategy, the last three pieces and the client's tone before writing a word." },
      { label: "Format is an afterthought", body: "One draft gets reshaped for four channels, and reads like it on three of them." },
      { label: "Editing and writing are the same person's job", body: "Which is harder and slower than either done separately." },
      { label: "Volume is capped by writing capacity", body: "So the plan quietly shrinks to what production can carry." },
    ],
    after: [
      { label: "Context arrives with the brief", body: "Stored positioning, segments and voice mean the reassembly step is gone." },
      { label: "Format is decided in the plan", body: "Each slot is drafted for the channel it ships to rather than reformatted afterwards." },
      { label: "The agency's hours go to editing", body: "Which is where experienced people add the most value per hour." },
      { label: "Volume is capped by review capacity", body: "A higher ceiling, and one that scales differently — but a real ceiling, and worth planning against." },
    ],
    checkpoints: [
      "The agency commits the week's scope before production runs.",
      "Editing is a required step. Nothing routes from draft to publish without a person.",
      "A named agency person approves each item before it ships.",
      "Publishing happens in the client's own tools, under the client's own accounts.",
    ],
    related: { capabilities: ["content", "strategy", "marketing-systems"], stages: ["solo-agency", "small-agency", "growing-agency"] },
    faqs: [
      {
        q: "What if we do not have review capacity for the volume?",
        a: "Then produce less. Volume without review is how an agency damages a client relationship faster than doing nothing would. The right amount of production is what your reviewers can actually stand behind.",
      },
      {
        q: "How do we stop the work reading as generated?",
        a: "Edit it, and edit it as an editor rather than a proofreader. The most common improvement is deletion. If your review consists of checking for typos, the output will read exactly as you fear.",
      },
      {
        q: "Can different clients have genuinely different voices?",
        a: "Voice is stored per client, so yes — within limits. A distinctive house style with unusual rhythm or a strong personal voice will need more editing than a straightforward professional register, and that is worth knowing before you promise a turnaround.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "campaign-planning",
    title: "Campaign Planning",
    navLabel: "Campaign Planning",
    headline: "Decide the campaign before you build it",
    lead:
      "The expensive campaign failures are decided before launch. An objective nobody wrote down, an offer nobody stress-tested, a success definition invented afterwards to fit what happened. Every one of those is cheap to fix in a brief.",
    summary:
      "Objective to retrospective: a campaign brief the agency approves before production, a channel sequence with reasoning, and a success definition written in advance.",
    seoTitle: "Agency campaign planning workflow",
    seoDescription:
      "A campaign workflow for agencies: written objective, approved brief, channel sequencing, assets built from one brief, and a success definition agreed before launch.",
    updated: "2026-08-27",
    trigger: "A client objective that needs a bounded push rather than always-on activity.",
    outcome: "A launched campaign with a pre-agreed success definition and an honest retrospective.",
    spine: [
      { title: "Agency agrees the objective with the client", body: "In commercial terms. 'More awareness' is not an objective; it is a way of avoiding one.", lane: "agency" },
      { title: "Success defined before anything is built", body: "Written down, agreed, and specific enough to be disappointing. This is the agency's discipline to impose.", lane: "agency" },
      { title: "Campaign brief structured", body: "Objective, audience, offer, message, window and success definition in one document.", lane: "mengo" },
      { title: "Channel sequence proposed", body: "What runs where and in what order, with the reasoning for the order rather than everything at once.", lane: "mengo" },
      { title: "Agency approves brief and sequence", body: "The checkpoint that saves the money. Changing the plan here costs an hour; changing it in week three costs the campaign.", lane: "agency" },
      { title: "Assets produced from the one brief", body: "Every asset inherits the same message, which is what keeps a multi-channel campaign coherent.", lane: "mengo" },
      { title: "Launch checklist worked through", body: "The operational failures that actually happen — a broken link, a form that does not fire, a page not live.", lane: "mengo" },
      { title: "Agency reviews, approves and launches", body: "In the client's own systems, with the agency accountable for what goes out.", lane: "agency" },
      { title: "Agency runs the retrospective", body: "Against the definition written before launch, including when the answer is that it did not work.", lane: "agency" },
    ],
    before: [
      { label: "The objective is assumed", body: "Everyone has a slightly different idea of what the campaign is for, and the differences surface during review." },
      { label: "Success is defined afterwards", body: "Which makes every campaign a success and every retrospective useless." },
      { label: "Channels launch simultaneously", body: "So nothing has time to do its job before the next thing arrives, and attribution becomes guesswork." },
      { label: "Assets drift apart", body: "Written at different times by different people, the message differs by channel in ways the audience notices." },
    ],
    after: [
      { label: "The objective is written and agreed", body: "Disagreements surface in the brief, where they are cheap." },
      { label: "Success is defined in advance", body: "Which makes the retrospective informative and occasionally uncomfortable, as it should be." },
      { label: "Sequence has reasoning", body: "Channels run in an order chosen for how buyers move rather than for convenience." },
      { label: "One brief, many assets", body: "The message holds across channels because everything inherited from the same source." },
    ],
    checkpoints: [
      "The agency agrees the commercial objective with the client, in writing.",
      "Success is defined before production begins, not after results arrive.",
      "The agency approves the brief and the channel sequence before any asset is built.",
      "The agency launches, and runs the retrospective against the original definition.",
    ],
    related: { capabilities: ["campaigns", "content", "strategy"], stages: ["small-agency", "growing-agency", "large-agency"] },
    faqs: [
      {
        q: "What if the client refuses to define success?",
        a: "That is a commercial conversation and an important one. A client who will not define success is reserving the right to be disappointed by any outcome, and that is a risk to price in or to decline.",
      },
      {
        q: "Does this work for always-on activity as well as campaigns?",
        a: "Always-on belongs in the plan rather than in a campaign. A campaign is a bounded intervention with a start, an end and a defined objective; treating always-on work as a permanent campaign is how retrospectives stop happening.",
      },
      {
        q: "Who owns the ad accounts and budget?",
        a: "You or the client. Mengo does not hold budget, place media or touch ad accounts. It produces the planning and the written assets that a media buyer works from.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "lead-nurturing-flows",
    title: "Lead Nurturing",
    navLabel: "Lead Nurturing Flows",
    headline: "Build the follow-up that was in the proposal",
    lead:
      "Nurturing is the part of an agency's scope with the widest gap between what was sold and what was built. It is not difficult work. It is work with no deadline attached, which means it loses to everything that has one.",
    summary:
      "Mapping the real enquiry journey, building objection-led sequences per segment, and handing them to the client's own sending tools with consent intact.",
    seoTitle: "Agency lead nurturing workflow",
    seoDescription:
      "A workflow for building client nurture sequences: map the real journey, collect genuine objections, draft per segment, review for tone and compliance, load into the client's tools.",
    updated: "2026-08-27",
    trigger: "A client generating enquiries that are not being followed up systematically.",
    outcome: "Reviewed sequences running in the client's own sending platform, under the client's consent.",
    spine: [
      { title: "Agency maps what actually happens", body: "Not the process on the proposal — the real one, including the enquiries that get a reply on Thursday if someone remembers.", lane: "agency" },
      { title: "Agency collects real objections", body: "From the client's sales team where one exists. Assumed objections produce sequences that answer questions nobody asked.", lane: "agency" },
      { title: "Segments and cadence derived", body: "Which groups need separating, and the rhythm each one's buying cycle actually supports.", lane: "mengo" },
      { title: "Sequences drafted per segment", body: "Each message with a defined job, ordered by objection rather than by a countdown.", lane: "mengo" },
      { title: "Re-engagement flows built", body: "For the list that has gone quiet, which for most clients is the largest untouched group they have.", lane: "mengo" },
      { title: "Agency reviews tone and claims", body: "Would this annoy the client's actual customers? Is every claim safe? This needs a person with the client's context.", lane: "agency" },
      { title: "Agency checks consent and compliance", body: "Who may be contacted, on what basis. A legal question with real consequences, owned by the agency and the client.", lane: "agency" },
      { title: "Agency loads and activates", body: "Into the client's own email, CRM or messaging platform. Sending stays where deliverability and consent live.", lane: "agency" },
      { title: "Agency reviews performance with the client", body: "And decides what to change, which is a judgement about the client's customers.", lane: "agency" },
    ],
    before: [
      { label: "The first reply is excellent and the fifth does not exist", body: "Almost universally true, and almost never on anyone's list to fix." },
      { label: "Everyone gets the same sequence", body: "Which means it is written for nobody in particular and reads that way." },
      { label: "Cadence is a guess", body: "Usually copied from a template built for a completely different buying cycle." },
      { label: "The quiet list is never touched", body: "The largest group of people who once raised their hand is the one nobody has a plan for." },
    ],
    after: [
      { label: "The sequence exists", body: "Which sounds trivial and is the actual difference for most clients." },
      { label: "Segments get different messages", body: "Because the objection a first-time enquirer holds is not the one a returning customer holds." },
      { label: "Cadence matches the buying cycle", body: "A nine-month sale and a same-day purchase get different rhythms." },
      { label: "Re-engagement is a built flow", body: "Rather than an idea somebody mentions in a quarterly review." },
    ],
    checkpoints: [
      "The agency maps the real journey before anything is drafted.",
      "Objections come from the client's sales reality, not from assumption.",
      "The agency reviews tone and claims before activation.",
      "The agency verifies consent and loads into the client's own sending platform.",
    ],
    related: { capabilities: ["lead-nurturing", "content", "research"], stages: ["solo-agency", "small-agency", "growing-agency"] },
    faqs: [
      {
        q: "Who is responsible for consent and compliance?",
        a: "The agency and the client, together, according to their contract. Mengo does not send, does not hold contact lists and does not decide who is eligible to be contacted — which is precisely why that responsibility cannot sit anywhere else.",
      },
      {
        q: "How long should a sequence be?",
        a: "As long as it has something useful to say, which is a different question from how many emails a template suggests. A sequence that repeats the pitch louder each time is worse than a shorter one that stops.",
      },
      {
        q: "Can this work with messaging channels, not just email?",
        a: "Yes, and it should be written for the channel rather than pasted into it. Email copy dropped into a chat thread reads as a broadcast, which is the fastest way to get a client's number blocked.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "scale-client-delivery",
    title: "Scale Client Delivery",
    navLabel: "Scale Client Delivery",
    headline: "Add accounts without adding chaos",
    lead:
      "Every agency has a number of accounts at which delivery stops being comfortable. Crossing it usually means hiring, and hiring means a quarter of ramp-up paid for out of a margin that was already thin. The other option is to change what an additional account actually costs.",
    summary:
      "Running a portfolio to one standard: consistent depth on every account, senior time protected for judgement, and capacity as a calculation rather than an instinct.",
    seoTitle: "Scaling agency client delivery",
    seoDescription:
      "A workflow for running more client accounts to one standard — consistent research and planning depth, protected senior review time, and capacity planning that is a calculation.",
    updated: "2026-08-27",
    trigger: "More accounts than the current delivery approach comfortably supports.",
    outcome: "A portfolio delivered to one standard, with senior time spent on judgement rather than assembly.",
    spine: [
      { title: "Agency defines the standard", body: "What every account gets, regardless of size or how noisy the client is. This is a leadership decision.", lane: "agency" },
      { title: "Uniform structure applied per account", body: "The same brief shape, research depth and plan anatomy everywhere, including the quiet accounts.", lane: "mengo" },
      { title: "Agency assigns named ownership", body: "Every account has a person accountable for it. This never becomes a system's job.", lane: "agency" },
      { title: "Production runs across the portfolio", body: "The week's slots for every account in one pass rather than as separate context reloads.", lane: "mengo" },
      { title: "Agency reviews against the standard", body: "Structured review, so quality is a property of the process rather than of who happened to pick it up.", lane: "agency" },
      { title: "Exceptions escalated to a person", body: "Anything unusual routes to someone with authority. Systems handle the routine; people handle the rest.", lane: "agency" },
      { title: "Capacity model updated", body: "What each account actually consumed, so the next 'can we take this on' is a calculation.", lane: "mengo" },
      { title: "Agency makes the commercial call", body: "Whether to take the client, what to charge and who runs it. Always a business decision.", lane: "agency" },
    ],
    before: [
      { label: "Capacity is an instinct", body: "And the instinct is optimistic in a month when the pipeline looks thin." },
      { label: "The largest client sets the standard", body: "Everyone else gets whatever attention is left, which is how quiet accounts churn without warning." },
      { label: "Senior people are in production", body: "The most expensive hours in the agency spent on the least differentiated work." },
      { label: "Growth requires a hiring cycle", body: "Win, recruit, onboard, deliver — with a quarter of margin compression in the middle." },
    ],
    after: [
      { label: "Capacity is a calculation", body: "Based on what accounts actually consume rather than on how the last month felt." },
      { label: "Every account gets the same floor", body: "Which is what stops the quiet accounts quietly leaving." },
      { label: "Senior time is review and strategy", body: "The work that only they can do, which is also the work clients are paying for." },
      { label: "Hiring is for judgement, not volume", body: "A different and slower hiring problem, but a better one." },
    ],
    checkpoints: [
      "The agency defines the delivery standard, and revises it.",
      "Every account has a named human owner.",
      "Structured review against the standard before anything reaches a client.",
      "Exceptions route to a person with the authority to decide.",
    ],
    related: { capabilities: ["marketing-systems", "strategy", "content"], stages: ["small-agency", "growing-agency", "large-agency"] },
    faqs: [
      {
        q: "How many more accounts can we actually run?",
        a: "We will not give you a number, and anyone who does without seeing your service mix is guessing. What we can say is which constraint moves: production stops being the binding one and review capacity becomes it. Model your own numbers against that shift.",
      },
      {
        q: "Does this mean we stop hiring?",
        a: "No. It changes what you hire for. Roles that were mostly first-draft production shrink; roles built on judgement, client relationships and review grow — and those are harder to fill, so plan for a longer hiring runway rather than none.",
      },
      {
        q: "What is the risk if we get this wrong?",
        a: "Taking on more accounts than you can review. That produces consistent, unremarkable, unedited work across a larger portfolio, which damages a reputation faster than being at capacity does.",
      },
    ],
  },
];

export const workflowBySlug = new Map(workflows.map((w) => [w.slug, w]));
