import type { Capability } from "@/lib/types";

/**
 * Marketing capabilities — the planning and delivery half.
 *
 * The group is wide rather than deep: most of these are individually small and
 * collectively enormous, which is exactly the profile of work that gets
 * under-delivered. No single item is big enough to schedule, and together they
 * are a job.
 */
export const marketingCoreCapabilities: Capability[] = [
  {
    kind: "capability",
    slug: "marketing-calendar",
    title: "Marketing Calendar",
    navLabel: "Marketing Calendar",
    group: "marketing",
    depth: "staged",
    headline: "A year decided once, instead of a decision every morning",
    lead:
      "A themed calendar where every slot arrives as a brief rather than an empty date. The expensive part of marketing is not production — it is deciding what to say this week, and that decision is being made from scratch far too often.",
    summary:
      "A themed, sequenced calendar per client where each slot carries a reason, so production starts from a brief rather than a blank date.",
    seoTitle: "Marketing Calendar — a themed plan clients can execute against",
    seoDescription:
      "A themed, sequenced marketing calendar per client where every slot arrives as a brief, and which reflows when the client's offer or market changes.",
    updated: "2026-09-02",
    meaning:
      "A dated plan themed by month and week, sequenced so foundational work lands before the offers that depend on it, and paced around the client's launches, seasons and quiet periods.",
    job: "Make the weekly question 'what are we doing' already answered.",
    whyAgencies: [
      {
        label: "The decision costs more than the production",
        body: "Deciding what to say, to whom, in what format, this week, is the expensive part. Settle it once and the rest becomes tractable.",
      },
      {
        label: "Sequence is where most plans fail",
        body: "Content produced in whatever order it happened to be written is not the order a buyer needs to encounter it, and the effect is invisible until conversion stays flat.",
      },
      {
        label: "An empty calendar is not a plan",
        body: "Most client calendars are a grid of dates. A slot with a theme, an audience and a job behind it is a different object entirely.",
      },
    ],
    inputs: [
      "The approved strategic layer, segments and offer structure",
      "Commercial dates: launches, seasons, events, quiet periods",
      "The client's actual capacity to review and approve",
      "What has already been published, so the plan does not repeat it",
    ],
    outputs: [
      "A year themed by month and week, with a reason behind each theme",
      "The near quarter resolved to slot level, the rest thematic",
      "Sequencing that puts foundational work before dependent offers",
      "A plan that reflows when the strategic layer changes",
    ],
    sequence: [
      { title: "The agency sets the horizon", body: "How far to plan in detail is a judgement about the client's volatility, not a default.", lane: "agency" },
      { title: "Themes derive from the strategy", body: "Months and weeks get a theme, so a slot arrives as a brief rather than a date.", lane: "mengo" },
      { title: "Dependencies are sequenced", body: "Awareness work lands before the offers that depend on it; the plan paces around commercial dates.", lane: "mengo" },
      { title: "The agency applies real constraints", body: "Budget cycles, capacity, the month the client's founder is unreachable. You know these; the plan does not.", lane: "agency" },
      { title: "The agency approves and presents", body: "Including what is deliberately not being done, which is usually the more interesting half.", lane: "agency" },
      { title: "It reflows on change", body: "A changed offer updates the plan rather than triggering a rewrite — and the agency re-approves.", lane: "mengo" },
    ],
    judgement: [
      { label: "How far ahead to commit", body: "A stable professional services client can plan further than one in a category that reshapes twice a year." },
      { label: "What to leave out", body: "A calendar that fills every slot on every channel is a calendar the client cannot sustain. Deliberate gaps are a design decision." },
      { label: "When to abandon the plan", body: "Occasionally something happens that makes the plan wrong. Recognising that is judgement; following a plan off a cliff is not." },
    ],
    limits: [
      "It does not publish or schedule. The calendar is a plan; execution happens in the client's own tools.",
      "It does not know about anything the client did not tell you, and unannounced launches will not appear.",
      "It cannot make a client review things on time, and a plan that assumes fast approval is wrong from the day it is written.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Sell a plan, not a list of deliverables",
        situation: "Your first client wants to know what they are getting, and you have a list of outputs rather than a plan.",
        problem: "Deliverable lists invite haggling over quantity. A themed plan invites a conversation about the business.",
        mengo: [
          "A themed year built from the strategy you agreed",
          "Sequencing with reasoning you can present",
          "A near-term slot view the client can actually picture",
        ],
        agency: ["The strategic decisions the themes derive from", "Presenting it as a recommendation"],
        outcome: "You present a plan with reasoning rather than a quantity of posts.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Remove the daily decision across every client",
        situation: "Each Monday you decide what each of your clients needs this week, from scratch, for all of them.",
        problem: "That decision is the most expensive recurring cost in a solo week and it produces nothing a client can see.",
        mengo: [
          "Each client's week already themed and briefed",
          "Plans that reflow rather than needing rewriting when something changes",
          "One place to see the whole book's week",
        ],
        agency: ["Deciding what each client actually needs, which sometimes overrides the plan", "The client conversations that change it"],
        outcome: "Monday becomes a review of decisions already made rather than a set of new ones.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Every account planned to the same depth",
        situation: "Your largest client has a proper calendar; the others have a rough idea and a shared document.",
        problem: "Planning depth tracks client volume rather than client need, and the under-planned accounts are the ones that quietly churn.",
        mengo: [
          "The same plan anatomy on every account",
          "Visibility of which accounts are running without a real plan",
          "A structure a reviewer can scan quickly",
        ],
        agency: ["Setting the minimum every account receives", "Account-level judgement about themes"],
        outcome: "A planning floor exists under every client, including the quiet ones.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Plans that survive an account changing hands",
        situation: "Accounts move between directors, and each move means reconstructing the reasoning behind the plan.",
        problem: "A calendar without recorded reasoning is a set of dates, and the incoming director rebuilds rather than continues.",
        mengo: [
          "Themes with their reasoning attached, not just their dates",
          "Consistent structure so an inherited plan is readable",
          "Change history, so it is clear what was adjusted and when",
        ],
        agency: ["Handover conversations, which the record supports rather than replaces", "Approving the plan after a change of owner"],
        outcome: "An account transfer costs a handover rather than a replan.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Portfolio-wide planning visibility",
        situation: "Dozens of accounts across several teams, each with a plan of varying quality and structure.",
        problem: "Leadership cannot see which accounts are properly planned and which are being improvised, until a client review reveals it.",
        mengo: [
          "Uniform plan structure across every account and team",
          "Portfolio-level visibility of planning depth",
          "Auditable change history per plan",
        ],
        agency: ["Governance over what a compliant plan contains", "Strategic ownership of every account's themes"],
        outcome: "Planning quality becomes visible before a client review rather than during one.",
      },
    ],
    related: {
      capabilities: ["marketing-channels-map", "brand-strategy", "social-media", "blog-content"],
      workflows: ["marketing-planning", "content-planning", "seasonal-campaign"],
      useCases: ["create-repeatable-delivery", "deliver-campaigns-faster"],
    },
    faqs: [
      {
        q: "How far ahead should a client's calendar go?",
        a: "Detailed for the next quarter, thematic beyond it, is a reasonable default. It depends on how fast the client's market moves — a stable services business can commit further than a consumer brand in a shifting category.",
      },
      {
        q: "What happens when the client changes their offer mid-year?",
        a: "You change the strategic layer and the plan reflows against it. That is the practical argument for storing strategy as an object: a change becomes an edit rather than a rewrite of everything that inherited from it. A person still re-approves the result.",
      },
      {
        q: "Should the client see the calendar directly?",
        a: "That is your call. Most agencies present rather than expose, because a calendar without the reasoning attached invites a conversation about quantity rather than about strategy.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "marketing-channels-map",
    title: "Marketing Channels Map",
    navLabel: "Channels Map",
    group: "marketing",
    depth: "staged",
    headline: "Where to be, and what to ignore",
    lead:
      "A ranked view of channels assessed against this client's buying cycle, price point and sustainable effort — committing to a primary, a secondary and one experiment. The value is mostly in what it rules out.",
    summary:
      "Channels ranked against a client's cycle, price point and capacity, committing to a primary, a secondary and one experiment.",
    seoTitle: "Marketing Channels Map — ranked channel strategy for clients",
    seoDescription:
      "Rank channels against a client's buying cycle, price point and sustainable capacity. Commit to a primary, a secondary and one experiment rather than being everywhere.",
    updated: "2026-09-02",
    meaning:
      "An assessment of the available channels against this specific client, ranked and committed to: one primary channel, one secondary, one experiment, and an explicit list of what is not being done.",
    job: "Replace 'be everywhere' with a commitment the client can actually sustain.",
    whyAgencies: [
      {
        label: "Spread effort produces nothing anywhere",
        body: "A client on six channels at low intensity underperforms the same client on two at sustainable intensity, and this is one of the most reliable patterns in marketing.",
      },
      {
        label: "The exclusion list is the deliverable",
        body: "Telling a client to stop doing something is worth more than adding another channel, and it is the recommendation clients remember.",
      },
      {
        label: "Channel choice follows price and cycle",
        body: "A nine-month enterprise sale and a same-day purchase need different channels. Deriving the choice from the business rather than from fashion is the whole exercise.",
      },
    ],
    inputs: [
      "Price point and how long the buying decision actually takes",
      "Where the client already has traction, even accidentally",
      "What the client can realistically sustain, honestly assessed",
      "Channels the client has tried and abandoned, and why",
    ],
    outputs: [
      "A ranked channel assessment with reasoning per channel",
      "A committed primary, secondary and one experiment",
      "An explicit not-doing list",
      "Success criteria for the experiment, agreed before it starts",
    ],
    sequence: [
      { title: "The agency assesses capacity honestly", body: "What the client can sustain, not what they would like to. Most channel plans fail here.", lane: "agency" },
      { title: "Channels are ranked against the business", body: "Cycle length, price point and existing traction rather than channel popularity.", lane: "mengo" },
      { title: "A commitment is drafted", body: "Primary, secondary, one experiment — and everything else explicitly excluded.", lane: "mengo" },
      { title: "The agency makes the call", body: "Including the uncomfortable recommendation to stop something the client likes.", lane: "agency" },
      { title: "The client agrees the exclusions", body: "The not-doing list needs explicit agreement or it will be quietly ignored.", lane: "agency" },
    ],
    judgement: [
      { label: "What the client can actually sustain", body: "Clients consistently overestimate this, and a plan built on the overestimate fails in month three." },
      { label: "When to refuse a channel", body: "Telling a client their enthusiasm for a platform is misplaced is the most valuable thing on this page." },
      { label: "When to stop the experiment", body: "Experiments need an end date and a decision rule, or they become permanent low-value activity." },
    ],
    limits: [
      "It does not run any channel. Placement, posting and spend stay with the agency and client.",
      "It has no access to the client's existing channel performance unless you supply it.",
      "It cannot predict results, and any ranking is a reasoned assessment rather than a forecast.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Learn to say no to a channel",
        situation: "Your first client wants to be on every platform and you feel unable to push back.",
        problem: "New agencies say yes to everything, then under-deliver on all of it, which is worse than delivering two things well.",
        mengo: [
          "A ranked assessment with reasoning you can point at",
          "An explicit exclusion list that makes the conversation concrete",
          "Criteria for the one experiment, so 'no' is not the only answer",
        ],
        agency: ["Having the conversation", "Judging what you can personally sustain"],
        outcome: "You commit to something deliverable and can explain why the rest is excluded.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Match the channel plan to your actual hours",
        situation: "You have several clients each wanting several channels, and the arithmetic has stopped working.",
        problem: "Channel commitments made at signing rarely account for the compounding weekly load across a whole book.",
        mengo: [
          "Capacity taken as an input rather than an afterthought",
          "Ranked channels so the trade-off is visible to the client",
          "A record of what was excluded and why, for when it is questioned",
        ],
        agency: ["The honest assessment of your own capacity", "Renegotiating scope where it has drifted"],
        outcome: "Channel commitments across the book add up to something you can actually do.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Consistent channel reasoning across the team",
        situation: "Different people make channel recommendations for different clients using different reasoning.",
        problem: "Without a shared assessment method, recommendations reflect the individual's preferences rather than the client's business.",
        mengo: [
          "One assessment structure applied on every account",
          "Reasoning recorded rather than held in the recommender's head",
          "Comparable channel decisions across the book",
        ],
        agency: ["Agreeing the assessment criteria as a team", "The recommendation itself"],
        outcome: "Two people assessing the same client reach substantially the same recommendation.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Channel decisions that inform resourcing",
        situation: "Channel commitments across a growing portfolio determine what skills you need on the team.",
        problem: "Channel decisions are made per account and their aggregate effect on resourcing is discovered rather than planned.",
        mengo: [
          "Consistent channel records that aggregate across the portfolio",
          "Visibility of the total commitment per channel",
          "A basis for capacity planning that is not an instinct",
        ],
        agency: ["Resourcing and hiring decisions", "Per-account strategic judgement"],
        outcome: "You can see what the portfolio has committed to before it becomes a hiring emergency.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Channel strategy consistency across teams",
        situation: "Multiple teams recommend channels, and the agency's methodology is supposed to be consistent.",
        problem: "At scale a methodology that produces different answers depending on the team is a claim rather than a practice.",
        mengo: [
          "Uniform assessment structure across every team",
          "Recorded reasoning that can be reviewed rather than only read",
          "Portfolio-level visibility of channel commitments",
        ],
        agency: ["Governance over the assessment method", "Senior strategic sign-off per account"],
        outcome: "The channel methodology the agency sells is the one that runs.",
      },
    ],
    related: {
      capabilities: ["marketing-calendar", "ads-management", "seo", "social-media"],
      workflows: ["marketing-planning", "client-discovery"],
      useCases: ["standardize-client-strategy", "create-repeatable-delivery"],
    },
    faqs: [
      {
        q: "Why only one experiment?",
        a: "Because more than one produces no clear signal and consumes the capacity that makes the primary channel work. An experiment needs enough effort to be a fair test, and most agencies can only fund one of those at a time per client.",
      },
      {
        q: "What if the client insists on a channel you have ruled out?",
        a: "Record the recommendation and the disagreement, then do the work if they still want it. Being right and unrecorded is worthless; being right and on the record is how the conversation goes differently in six months.",
      },
      {
        q: "Does this account for the client's existing performance?",
        a: "Only if you supply it. There is no access to their analytics or ad accounts, so existing traction is an input you bring rather than something retrieved.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "swot-analysis",
    title: "SWOT Analysis",
    navLabel: "SWOT Analysis",
    group: "marketing",
    depth: "staged",
    headline: "The framework everyone knows and almost nobody uses properly",
    lead:
      "A structured strengths, weaknesses, opportunities and threats assessment that is actually acted on. Most SWOTs are a four-box slide produced once and never referenced, which is a shame because the discipline is genuinely useful.",
    summary:
      "A SWOT that produces decisions rather than a four-box slide — each entry tied to something the marketing will do differently.",
    seoTitle: "SWOT Analysis — a strategic assessment agencies actually use",
    seoDescription:
      "A structured SWOT for client marketing where each entry connects to a decision, rather than a four-box slide produced once and never referenced.",
    updated: "2026-09-02",
    meaning:
      "An assessment of a client's internal strengths and weaknesses and external opportunities and threats, with each entry tied to something the marketing will do differently as a result.",
    job: "Turn a familiar framework into a set of decisions rather than a slide.",
    whyAgencies: [
      {
        label: "It structures a conversation clients understand",
        body: "SWOT is one of the few strategic frameworks a non-marketing client already knows, which makes it an unusually efficient way to get a leadership team talking.",
      },
      {
        label: "Weaknesses are where the useful material is",
        body: "The strengths column is always full and rarely informative. The weaknesses column, honestly filled, determines what the marketing must avoid promising.",
      },
      {
        label: "It connects marketing to the business",
        body: "Threats and weaknesses are usually operational rather than promotional, and surfacing them is how an agency demonstrates it understands the business.",
      },
    ],
    inputs: [
      "Honest internal assessment, which requires trust to obtain",
      "Competitive and market context",
      "What the client is genuinely worried about, which is rarely in the brief",
      "Operational constraints — capacity, delivery, cash",
    ],
    outputs: [
      "A structured SWOT with each entry tied to a marketing implication",
      "Explicit decisions arising: what to lead with, what to avoid claiming",
      "Threats that marketing cannot address, named as such",
      "A dated assessment, so drift is visible at the next review",
    ],
    sequence: [
      { title: "The agency runs the session", body: "Honest weaknesses only emerge in a conversation with enough trust in it. This is relationship work.", lane: "agency" },
      { title: "The assessment is structured", body: "Each entry recorded with the evidence behind it rather than as an assertion.", lane: "mengo" },
      { title: "Implications are drafted", body: "Each entry connected to what the marketing should do differently, which is the step usually skipped.", lane: "mengo" },
      { title: "The agency decides what follows", body: "Which implications to act on is a strategic judgement about capacity and priority.", lane: "agency" },
      { title: "It is reviewed on a rhythm", body: "An undated SWOT describes a business that no longer exists.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the client is being honest", body: "Clients understate weaknesses to their agency. Noticing the gap between the stated and the actual is most of the value." },
      { label: "Which threats marketing can address", body: "Many cannot be, and saying so prevents a campaign being asked to solve an operational problem." },
      { label: "What to do with it", body: "A completed SWOT is an input. The decisions are the deliverable." },
    ],
    limits: [
      "It does not assess anything independently. Every entry is the client's account or the agency's judgement.",
      "It is not market research, and opportunity claims need evidence.",
      "It cannot make an uncomfortable conversation happen. That is the agency's job.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "A structure for a conversation you do not yet know how to run",
        situation: "You need to understand a client's business quickly and do not have a method for the conversation.",
        problem: "Unstructured discovery with a new client produces the answers they are used to giving rather than the ones you need.",
        mengo: ["A familiar framework the client will engage with", "Prompts that get past the obvious answers", "A record of what emerged"],
        agency: ["Running the session and asking the follow-up questions", "Judging what is understated"],
        outcome: "A first strategic conversation with a shape, rather than an open-ended chat.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "A reason to have the annual conversation",
        situation: "You deliver steadily for clients and rarely have a strategic conversation after onboarding.",
        problem: "Without a scheduled reason, the relationship becomes delivery-only, which is where agencies get replaced by cheaper delivery.",
        mengo: ["A structured annual reassessment", "Comparison against the previous version, so change is visible", "Implications drafted for you to judge"],
        agency: ["Booking and running the conversation", "Turning it into a recommendation"],
        outcome: "A recurring strategic conversation that keeps you positioned as an adviser.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Consistent strategic depth across accounts",
        situation: "Some accounts get real strategic assessment and others get delivery, depending on who runs them.",
        problem: "Strategic depth varying by account owner is invisible until a client compares notes with another of your clients.",
        mengo: ["The same assessment on every account", "Recorded implications a reviewer can check", "Dated versions showing when each was last revisited"],
        agency: ["Setting the expectation that every account gets one", "The judgement in each session"],
        outcome: "Every client receives strategic attention rather than only the ones whose lead prefers it.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Portfolio patterns you would not otherwise see",
        situation: "You run enough accounts that the same threats and weaknesses recur across a sector.",
        problem: "Each assessment is done in isolation, so the agency never accumulates a view of what is happening across its own client base.",
        mengo: ["Consistent structure that makes cross-account patterns visible", "Faster assessment where the sector is familiar", "A record of recurring sector threats"],
        agency: ["Confidentiality between accounts, always", "Deciding what constitutes a genuine sector pattern"],
        outcome: "Sector insight accumulates as an agency asset rather than an individual impression.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Strategic assessment that survives a review",
        situation: "Client leadership asks for the reasoning behind a strategic recommendation made a year ago.",
        problem: "Recommendations without recorded assessment behind them are indefensible under questioning, which matters most with the largest clients.",
        mengo: ["Dated assessments with evidence recorded per entry", "A visible chain from assessment to recommendation", "Uniform structure across teams"],
        agency: ["Strategic ownership and the client conversation", "Governance over assessment quality"],
        outcome: "'Why did we recommend that' has a documented answer.",
      },
    ],
    related: {
      capabilities: ["moat-analysis", "competitors", "brand-strategy", "business-profile"],
      workflows: ["business-research", "client-review", "marketing-planning"],
      useCases: ["standardize-client-strategy", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Is SWOT not rather dated?",
        a: "The framework is fine; the usual execution is not. A SWOT that produces four lists and no decisions deserves its reputation. One where every entry connects to something the marketing will do differently is a genuinely efficient way to structure a leadership conversation.",
      },
      {
        q: "Clients understate their weaknesses. How do we handle that?",
        a: "Expect it and work around it. Ask about weaknesses indirectly — what goes wrong most often, what do customers complain about, what would you fix with more money. The direct question produces a polished answer.",
      },
      {
        q: "How often should it be redone?",
        a: "Annually for most clients, or when something material changes. The comparison against the previous version is often more informative than the new assessment.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "moat-analysis",
    title: "MOAT Analysis",
    navLabel: "MOAT Analysis",
    group: "marketing",
    depth: "staged",
    headline: "What actually stops a competitor taking this business",
    lead:
      "An assessment of a client's durable advantage: what is genuinely hard for a competitor to copy, and what merely feels like an advantage. Most claimed differentiators are neither durable nor differentiating.",
    summary:
      "An honest assessment of a client's durable competitive advantage, separating what is hard to copy from what merely feels distinctive.",
    seoTitle: "MOAT Analysis — assessing durable client advantage",
    seoDescription:
      "Assess what genuinely protects a client's position from competitors, and separate durable advantage from claimed differentiators that anyone could copy.",
    updated: "2026-09-02",
    meaning:
      "An assessment of the structural advantages protecting a client's position — switching costs, network effects, proprietary assets, regulatory position, genuine brand strength — and how durable each one is.",
    job: "Find the advantage that is worth building the positioning on.",
    whyAgencies: [
      {
        label: "Most claimed differentiators are not",
        body: "Quality, service and experience are claimed by every competitor in every sector. Building positioning on one of those produces messaging indistinguishable from the alternatives.",
      },
      {
        label: "Durable advantage is where positioning should sit",
        body: "A position built on something a competitor can copy in a quarter is a position with an expiry date.",
      },
      {
        label: "It occasionally produces the uncomfortable answer",
        body: "Sometimes a client has no durable advantage, and that finding changes the whole engagement — usually toward operational advice the client needed more than a campaign.",
      },
    ],
    inputs: [
      "What the client believes protects them",
      "Competitive context, validated",
      "Switching costs, contracts and anything structural",
      "Proprietary assets: data, relationships, licences, location",
    ],
    outputs: [
      "An assessment of each claimed advantage with a durability judgement",
      "A separation of genuine moat from claimed differentiator",
      "Positioning implications: what can safely be built on",
      "An honest note where no durable advantage was identified",
    ],
    sequence: [
      { title: "The agency gathers claimed advantages", body: "Starting with what the client says, which is the hypothesis rather than the answer.", lane: "agency" },
      { title: "Each is tested for copyability", body: "Could a well-resourced competitor replicate this within a year? Most claimed advantages fail this.", lane: "mengo" },
      { title: "Structural advantages are identified", body: "Switching costs, licences, proprietary data, genuine network effects.", lane: "mengo" },
      { title: "The agency judges durability", body: "Which requires knowing the sector well enough to know what actually holds.", lane: "agency" },
      { title: "The agency delivers the conclusion", body: "Including, where it applies, that there is no moat — which is a difficult and valuable conversation.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether an advantage is real", body: "Clients believe their service is exceptional. Sometimes it is; usually the belief is not evidence." },
      { label: "How long an advantage lasts", body: "A durability judgement needs sector knowledge and a view on where the market is going." },
      { label: "How to deliver a negative finding", body: "Telling a client they have no defensible advantage is a serious conversation that needs to be had well." },
    ],
    limits: [
      "It has no access to competitor internals, so durability assessments are reasoned rather than verified.",
      "It cannot value intellectual property or assess patent strength.",
      "It does not create advantage. Where none exists, that is an operational and strategic problem rather than a marketing one.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "A harder conversation than a first engagement supports",
        situation: "You are establishing credibility, and this analysis can conclude that the client has no defensible position.",
        problem: "Delivering that finding requires standing you have not yet earned, and delivering it badly ends the relationship.",
        mengo: ["A structure to record what you observe about advantage as you learn the business"],
        agency: ["Judging when the relationship can carry a hard finding"],
        outcome: "Observations accumulating for a conversation you are not yet positioned to have.",
        insteadDoThis:
          "Do the Competitors and SWOT work first. Those surface most of the same information without requiring you to deliver a verdict on the client's viability.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Stop building positioning on 'quality and service'",
        situation: "Your clients describe themselves in terms every competitor also uses, and the resulting copy sounds generic however well it is written.",
        problem: "Generic positioning is not a writing problem and cannot be fixed by better copy, which is where a lot of solo effort disappears.",
        mengo: ["A test that separates real advantage from claimed differentiator", "Structural advantages surfaced that the client had not thought to mention", "Positioning implications drawn out"],
        agency: ["The durability judgement", "The conversation when the honest answer is unwelcome"],
        outcome: "Positioning built on something a competitor cannot claim next week.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "A shared standard for what counts as differentiation",
        situation: "Team members accept different things as differentiators, so positioning quality varies by who did it.",
        problem: "Without a shared test, 'differentiated' means whatever the person writing it thought was distinctive.",
        mengo: ["One copyability test applied on every account", "Recorded reasoning per claimed advantage", "Comparable assessments across the book"],
        agency: ["Agreeing the standard as a team", "The judgement in each case"],
        outcome: "Differentiation stops being a matter of individual taste.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Know which accounts are structurally at risk",
        situation: "Some clients in the portfolio have no durable advantage and are vulnerable to a better-funded competitor.",
        problem: "That risk is invisible at portfolio level until the client loses share and blames the marketing.",
        mengo: ["Consistent advantage assessments across accounts", "Visibility of which clients are structurally exposed", "A record of what was flagged and when"],
        agency: ["The commercial conversation with exposed clients", "Deciding what the agency can and cannot fix"],
        outcome: "Structural client risk is visible before it becomes an account loss.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Defensible strategic reasoning for large accounts",
        situation: "Large clients expect strategic rigour and will question the basis of a positioning recommendation.",
        problem: "A recommendation resting on an unstated assumption about competitive advantage does not survive a serious review.",
        mengo: ["Recorded advantage assessment behind every positioning decision", "Durability reasoning documented per claim", "Uniform structure across teams"],
        agency: ["Senior strategic judgement", "The client conversation, particularly the difficult ones"],
        outcome: "Positioning recommendations have documented reasoning underneath them.",
      },
    ],
    related: {
      capabilities: ["swot-analysis", "competitors", "brand-strategy", "products"],
      workflows: ["business-research", "brand-strategy-workflow"],
      useCases: ["standardize-client-strategy"],
    },
    faqs: [
      {
        q: "What if the client genuinely has no moat?",
        a: "Say so, carefully, with reasoning. It is a serious finding and frequently the most valuable thing the engagement produces — usually because it redirects the conversation from promotion to something operational that actually needs fixing.",
      },
      {
        q: "Is this not more of a strategy consulting exercise?",
        a: "It overlaps. The reason it belongs in marketing work is that positioning built on a non-durable advantage will fail, and the agency will be blamed for it. Better to know up front.",
      },
      {
        q: "Can service quality be a moat?",
        a: "Occasionally, where it is structurally supported — by proprietary process, by hard-to-hire expertise, by genuine switching costs. As a claim on its own it is what every competitor says, which makes it a differentiator that does not differentiate.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "google-business-profile",
    title: "Google Business Profile",
    navLabel: "Google Business Profile",
    group: "marketing",
    depth: "staged",
    headline: "The highest-return hour in local marketing",
    lead:
      "For any client with a physical location or a local service area, this is the single most consequential free asset they own — and it is very often incomplete, out of date or unclaimed.",
    summary:
      "The local search profile: complete, accurate, current — the highest-return low-effort asset for any client with a location.",
    seoTitle: "Google Business Profile — local search for client businesses",
    seoDescription:
      "Keep client business profiles complete, accurate and current across locations. The highest-return low-effort asset for any client with a physical presence.",
    updated: "2026-09-02",
    meaning:
      "The client's local business listing: categories, hours, services, attributes, photography, posts and reviews — kept complete and current across every location.",
    job: "Make sure the free asset that decides local visibility is actually correct.",
    whyAgencies: [
      {
        label: "It converts better than almost anything else",
        body: "Someone searching for a local service with intent is closer to buying than any audience a campaign will reach, and the profile is what they see.",
      },
      {
        label: "It is almost always neglected",
        body: "Wrong hours, missing services, unanswered reviews, photographs from four years ago. Fixing it is quick and the effect is immediate.",
      },
      {
        label: "Data consistency has compounding effects",
        body: "Name, address and phone inconsistency across the web undermines local ranking, and errors propagate faster than they are corrected.",
      },
    ],
    inputs: [
      "Verified business details for every location",
      "Services and categories as the business would describe them",
      "Current photography and any seasonal hour variations",
      "Who at the client is authorised to respond to reviews",
    ],
    outputs: [
      "A completeness audit per location",
      "Structured service and category recommendations",
      "Post and update content for the profile",
      "A review-response framework, with escalation for negative reviews",
    ],
    sequence: [
      { title: "The agency audits what exists", body: "Including whether the profile is claimed at all, which is surprisingly often unresolved.", lane: "agency" },
      { title: "Gaps are identified per location", body: "Completeness assessed against what the profile supports rather than against what is filled in.", lane: "mengo" },
      { title: "Content is structured", body: "Services, categories, descriptions and post content drafted per location.", lane: "mengo" },
      { title: "The agency verifies the facts", body: "Hours, addresses and service claims are factual and must be checked with the client, not assumed.", lane: "agency" },
      { title: "The agency or client updates", body: "Access to the profile stays with the client's own account.", lane: "agency" },
      { title: "Reviews are answered by a person", body: "Especially negative ones. A templated response to a complaint is worse than silence.", lane: "agency" },
    ],
    judgement: [
      { label: "Category selection", body: "Categories materially affect visibility and the right choice is often counter-intuitive. This rewards experience." },
      { label: "How to answer a bad review", body: "The highest-stakes small piece of writing most local businesses ever publish, and it needs a person who understands the situation." },
      { label: "What to claim as a service", body: "Listing services the business does not really offer produces enquiries it cannot fulfil, which damages the profile through poor reviews." },
    ],
    limits: [
      "It does not manage the profile directly. Access stays in the client's own account.",
      "It cannot verify business details, and publishing wrong hours is a real customer-facing error.",
      "It has no influence over the platform's ranking behaviour, and anyone claiming otherwise should be treated with suspicion.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "The quickest visible win you can deliver",
        situation: "You have a new local client and need to demonstrate value before a content programme has had time to compound.",
        problem: "New engagements need an early, visible result, and most marketing work takes a quarter to show anything.",
        mengo: ["A completeness audit that finds real gaps immediately", "Structured content for the profile", "A review-response framework"],
        agency: ["Verifying every fact with the client", "Writing the responses to actual reviews"],
        outcome: "A visible improvement in the client's first month, on an asset they can check themselves.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Keep several profiles current without remembering to",
        situation: "You look after profiles for several local clients and they go stale between the times you happen to check.",
        problem: "Profile maintenance has no deadline and no client asking for it, so it loses to everything that does.",
        mengo: ["Per-client completeness tracking", "Post content produced against the calendar rather than ad hoc", "Visibility of which profiles have drifted"],
        agency: ["Fact verification on any change", "Review responses, which stay human"],
        outcome: "Profiles stay current because maintenance is scheduled rather than remembered.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Multi-location clients without a spreadsheet",
        situation: "A client with several locations, each with its own hours, services and reviews.",
        problem: "Multi-location profile management done manually is error-prone and the errors are customer-facing.",
        mengo: ["Per-location records with location-specific detail", "Consistent structure across locations", "Completeness visibility across the estate"],
        agency: ["Verification with each location", "Deciding how much local variation to allow"],
        outcome: "Every location is correct, including the ones nobody has visited.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Local presence across a portfolio",
        situation: "Many clients with local presence, several with multiple locations, across a growing team.",
        problem: "At this volume, stale profiles are certain and invisible, and the agency finds out when a client complains about a wrong opening time.",
        mengo: ["Portfolio-level completeness visibility", "Consistent structure so any account can be checked quickly", "A record of when each location was last verified"],
        agency: ["A verification rhythm with clients", "Escalation on serious review situations"],
        outcome: "'Which client locations have out-of-date information' becomes answerable.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Local data governance at estate scale",
        situation: "Clients with dozens or hundreds of locations, often with franchisees or regional managers who edit their own listings.",
        problem: "Distributed editing produces inconsistency at a scale where manual auditing is not feasible.",
        mengo: ["Canonical per-location records to audit against", "Structured detection of divergence", "Uniform structure across the estate"],
        agency: ["Governance over who may edit what", "The relationship with local managers, which decides whether any of it works"],
        outcome: "Local data consistency becomes manageable rather than aspirational.",
      },
    ],
    related: {
      capabilities: ["testimonials", "seo", "website-planner", "products"],
      workflows: ["local-business-marketing", "client-onboarding"],
      useCases: ["get-the-first-client", "manage-multiple-client-brands"],
    },
    faqs: [
      {
        q: "Can this post to the profile directly?",
        a: "No. It produces the content and the structure; publishing happens in the client's own account. Profile access is a client asset and should stay under their control.",
      },
      {
        q: "Should we respond to reviews on the client's behalf?",
        a: "With their agreement and their tone, yes for routine ones — but a negative review is the highest-stakes short piece of writing a local business publishes, and it needs a person who understands the specific situation rather than a template.",
      },
      {
        q: "Does this improve rankings?",
        a: "A complete, accurate, active profile performs better than an incomplete one. Nobody controls the platform's ranking behaviour, and any agency claiming to should be treated carefully.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "ads-management",
    title: "Ads Management",
    navLabel: "Ads Management",
    group: "marketing",
    depth: "staged",
    headline: "The planning and creative behind paid, not the account",
    lead:
      "Campaign structure, audience definition, ad concepts and copy — the work a media buyer executes against. Placement, budget and account access stay with the agency and the client, deliberately.",
    summary:
      "Campaign structure, audience definitions and ad concepts for paid media. Placement, budget and accounts stay with the agency and client.",
    seoTitle: "Ads Management — paid media planning and creative for agencies",
    seoDescription:
      "Campaign structure, audience definitions, ad concepts and copy for paid media, with placement, budget and account access staying with the agency and client.",
    updated: "2026-09-02",
    meaning:
      "The pre-execution layer of paid media: what the campaign is for, who it addresses, how it is structured, and the concepts and copy that fill it.",
    job: "Make paid campaigns arrive at the buyer's desk already thought through.",
    whyAgencies: [
      {
        label: "Most paid failures are briefing failures",
        body: "Wrong audience, unclear offer, no defined success — decided before anything was placed and expensive to discover afterwards.",
      },
      {
        label: "Creative volume is the real constraint",
        body: "Testing needs variants. Producing enough of them at a standard worth testing is where most paid programmes stall.",
      },
      {
        label: "Testing usually varies the wrong thing",
        body: "Most ad testing changes the wording while leaving the underlying claim identical, which produces small differences and no learning.",
      },
    ],
    inputs: [
      "The commercial objective, in the client's own terms",
      "The segment being targeted and the objection it holds",
      "The offer, and what makes it different from the usual one",
      "Budget range and constraints, so the structure is realistic",
    ],
    outputs: [
      "Campaign structure with audience definitions per ad set",
      "Ad concepts that vary the claim rather than only the wording",
      "Copy variants sized for each placement",
      "A brief a media buyer can execute against without a call",
    ],
    sequence: [
      { title: "The agency agrees the objective", body: "In commercial terms with the client. 'More awareness' is a way of avoiding an objective.", lane: "agency" },
      { title: "Structure and audiences are drafted", body: "Campaign architecture derived from the segments rather than from a template.", lane: "mengo" },
      { title: "Concepts vary the claim", body: "Distinct angles rather than reworded versions of one idea, so a test produces learning.", lane: "mengo" },
      { title: "The agency approves before build", body: "The checkpoint that saves the budget. Changing the plan here costs an hour.", lane: "agency" },
      { title: "The agency or client places", body: "Ad accounts, budget and placement stay outside this entirely.", lane: "agency" },
      { title: "The agency reads the results", body: "Attribution is genuinely hard and reading it honestly is an expertise question.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the objective is achievable", body: "Clients routinely ask paid media to do something it cannot. Saying so is the job." },
      { label: "When to stop a campaign", body: "Mid-flight decisions need someone accountable with the client's context and the authority to act." },
      { label: "What the numbers mean", body: "Including when they mean the campaign did not work, which is the reading clients least want and most need." },
    ],
    limits: [
      "It does not place media, hold budget or touch ad accounts. Those stay with the agency and the client.",
      "It does not measure. Numbers come from the client's own platforms and analytics.",
      "It does not produce design, video or motion assets — written concepts and copy only.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Introduce paid without pretending to be a media buyer",
        situation: "A client asks whether you can run ads and you can plan them but have limited buying experience.",
        problem: "New agencies either refuse the work or take it on and learn expensively with the client's money.",
        mengo: ["Campaign structure and audience definitions you can review", "Concepts and copy at a standard worth placing", "A brief a specialist buyer can execute from"],
        agency: ["Being honest about what you do and do not run", "Partnering with a buyer, or declining the placement"],
        outcome: "You offer the planning and creative and are clear about who places the media.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Enough creative volume to actually test",
        situation: "You run small paid programmes and produce two variants because that is what you have time for.",
        problem: "Two variants is not a test. It is a coin flip with a report attached.",
        mengo: ["Concepts that vary the claim, not just the wording", "Copy variants per placement from one approved brief", "Structure that makes the test readable"],
        agency: ["The judgement about which concepts are worth testing", "Reading the result honestly"],
        outcome: "Paid work produces learning rather than a monthly report of noise.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Campaign planning that does not depend on who set it up",
        situation: "Different people structure campaigns differently, so account structures across your clients have nothing in common.",
        problem: "Inconsistent structure makes review slow, handover hard, and cross-account learning impossible.",
        mengo: ["One campaign structure standard across accounts", "Audience definitions derived from stored segments", "Briefs a colleague can pick up"],
        agency: ["Setting the standard", "Approving structure before build"],
        outcome: "Any team member can read any campaign's structure and understand the intent.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Paid volume without proportional headcount",
        situation: "Paid programmes across many accounts, each needing continuous creative refresh.",
        problem: "Creative fatigue is real and continuous, and meeting it manually means hiring in proportion to accounts.",
        mengo: ["Concept and copy volume produced against approved briefs", "Consistent structure so review scales", "Refresh cycles planned rather than reactive"],
        agency: ["Review capacity, which becomes the constraint", "Media buying and budget decisions"],
        outcome: "Creative refresh stops dictating the hiring plan.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Consistent paid methodology across teams",
        situation: "Multiple teams run paid for multiple clients, and the agency sells a single methodology.",
        problem: "Method inconsistency at scale means the process the agency sold is not the process any given account is getting.",
        mengo: ["Uniform campaign structure and brief format across teams", "Recorded reasoning behind audience and concept decisions", "Auditable trail from objective to placed creative"],
        agency: ["Governance over the methodology", "Commercial accountability for spend"],
        outcome: "The paid methodology is a practice rather than a claim.",
      },
    ],
    related: {
      capabilities: ["marketing-calendar", "icps-and-personas", "landing-page", "marketing-channels-map"],
      workflows: ["ads-workflow", "campaign-planning", "product-launch"],
      useCases: ["deliver-campaigns-faster", "launch-a-new-client-campaign"],
    },
    faqs: [
      {
        q: "Does this run ad accounts?",
        a: "No. It produces the planning and the written creative that a media buyer works from. Placement, budget and account access stay with you and the client, which is where the commercial accountability belongs.",
      },
      {
        q: "Can it produce the visuals?",
        a: "No. Concepts and copy only. For most paid programmes the design and video production is the larger constraint, and it is worth being honest with yourself about which half of the bottleneck this addresses.",
      },
      {
        q: "How many variants should we test?",
        a: "Enough to distinguish a signal, and varying the claim rather than the wording. Three genuinely different angles teach you more than twelve rewordings of one, which is the most common way paid testing budgets are wasted.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "email-templates",
    title: "Email Templates",
    navLabel: "Email Templates",
    group: "marketing",
    depth: "staged",
    headline: "The recurring emails nobody ever wrote properly",
    lead:
      "Enquiry acknowledgements, booking confirmations, quote follow-ups, re-engagement. High-frequency, transactional-adjacent messages that are read far more than any campaign and were usually written once, in a hurry, years ago.",
    summary:
      "The recurring operational emails a client sends constantly — written properly once instead of improvised years ago.",
    seoTitle: "Email Templates — the recurring messages clients actually send",
    seoDescription:
      "Enquiry acknowledgements, confirmations, follow-ups and re-engagement templates: high-frequency client emails that are read more than any campaign.",
    updated: "2026-09-02",
    meaning:
      "The library of recurring messages a business sends in ordinary operation, written to a consistent voice and structure rather than improvised per instance.",
    job: "Make the emails a client sends every day as good as the ones they send every quarter.",
    whyAgencies: [
      {
        label: "Open rates on these are extraordinary",
        body: "An enquiry acknowledgement is read by almost everyone who receives it. No campaign gets that attention, and yet it is the message nobody has looked at.",
      },
      {
        label: "They are the client's actual voice",
        body: "A prospect's impression of a business is formed more by its confirmation email than by its brand campaign, because more people read it.",
      },
      {
        label: "Small improvements compound immediately",
        body: "A better quote follow-up affects every quote from the day it ships, with no media cost and no waiting for a programme to compound.",
      },
    ],
    inputs: [
      "Every recurring email the business actually sends",
      "What happens after each one — the next step it should drive",
      "The client's voice profile and editorial guardrails",
      "Any required legal or regulatory content per message type",
    ],
    outputs: [
      "A template library organised by trigger rather than by channel",
      "Each template with a defined job and a next step",
      "Variants where the segment materially changes the message",
      "A record of required legal content per type",
    ],
    sequence: [
      { title: "The agency inventories what is sent", body: "Usually more than the client remembers, and often including messages nobody has read in years.", lane: "agency" },
      { title: "Templates are structured by trigger", body: "Organised by what causes them rather than by which system sends them.", lane: "mengo" },
      { title: "Each is written to a defined job", body: "A confirmation that only confirms is a wasted read.", lane: "mengo" },
      { title: "The agency reviews for tone and claims", body: "These carry the client's voice more than any campaign does.", lane: "agency" },
      { title: "The client loads and sends", body: "Into their own systems, under their own sending reputation and consent.", lane: "agency" },
    ],
    judgement: [
      { label: "How much to ask for in a transactional message", body: "A confirmation that turns into a pitch damages trust. Where the line sits is a judgement about the audience." },
      { label: "Tone under bad news", body: "Cancellations, delays and refusals are the hardest of these to write and the most consequential." },
      { label: "What legal content is required", body: "Varies by jurisdiction and message type, and belongs with the client's advisers." },
    ],
    limits: [
      "It does not send anything. Templates are loaded into the client's own systems.",
      "It does not integrate with a client's transactional email or booking system.",
      "It does not provide guidance on marketing consent law, and the distinction between transactional and marketing email matters legally.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "A small piece of work with visible impact",
        situation: "A new client needs something improved quickly and their enquiry response is two lines written in 2019.",
        problem: "Early engagements need a visible win, and most marketing work does not produce one for a quarter.",
        mengo: ["An inventory that shows the client how many they send", "Templates written to a job rather than to a formality", "Consistent voice across all of them"],
        agency: ["Reviewing tone", "Confirming what the client's systems can actually support"],
        outcome: "An improvement the client sees within days, on messages they read themselves.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Fix once, benefit continuously",
        situation: "You have limited hours and are looking for work with a long payback rather than recurring effort.",
        problem: "Most marketing work needs continuous input. Template work is set up once and keeps producing.",
        mengo: ["A full template library per client from one pass", "Voice consistency without ongoing supervision", "Variants where segments differ"],
        agency: ["The tone judgement", "Deciding which templates justify the effort"],
        outcome: "A day of work that improves every enquiry the client receives from then on.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Consistent client voice in operational messages",
        situation: "Your client's operational emails are written by their staff, in whatever voice each person uses.",
        problem: "The brand work you did is undermined daily by messages nobody thought of as marketing.",
        mengo: ["A template library the client's staff work from", "One voice across operational and marketing messages", "Structure so new templates match the existing set"],
        agency: ["Getting the client's team to actually adopt them", "Reviewing anything customer-facing"],
        outcome: "The brand sounds the same in the messages customers read most often.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Template libraries as a standard deliverable",
        situation: "Several clients need this and each has been handled as a bespoke request.",
        problem: "The message types repeat across clients even though the content does not, and rebuilding the inventory each time is waste.",
        mengo: ["A standard template inventory applied per client", "Consistent structure across accounts", "Legal-content requirements recorded per client"],
        agency: ["The voice and tone work per client", "Deciding which templates each client needs"],
        outcome: "A scoped package rather than an open-ended request each time.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Operational messaging governance",
        situation: "Large client organisations sending high volumes of operational email across departments.",
        problem: "Departmental email drifts from the brand and occasionally from the legal requirements, at a volume where auditing is not feasible manually.",
        mengo: ["A canonical template set with version control", "Required legal content recorded per type and jurisdiction", "Uniform structure so audits are possible"],
        agency: ["Governance and rollout across departments", "Coordination with the client's legal function"],
        outcome: "The highest-volume brand surface in the business is governed rather than assumed.",
      },
    ],
    related: {
      capabilities: ["whatsapp-nurturing", "newsletter", "sales-script", "brand"],
      workflows: ["lead-nurturing-flows", "client-onboarding", "sales-enablement"],
      useCases: ["improve-client-onboarding", "improve-sales-enablement"],
    },
    faqs: [
      {
        q: "Is this different from nurturing sequences?",
        a: "Yes. These are triggered by an action — an enquiry, a booking, a quote. Nurturing is a planned sequence over time. They use the same voice and often the same objection inventory, but they are different objects with different triggers.",
      },
      {
        q: "Where do these get loaded?",
        a: "Wherever the client already sends from — their CRM, booking system, ecommerce platform or email tool. Nothing here sends, deliberately, because sending systems own deliverability and consent.",
      },
      {
        q: "Do transactional emails need consent?",
        a: "Transactional and marketing messages are treated differently in most jurisdictions, and the line between them is not always obvious. That is a question for the client's advisers, and it is worth asking before adding a promotional paragraph to a confirmation.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "ai-discoverability",
    title: "AI Discoverability",
    navLabel: "AI Discoverability",
    group: "marketing",
    depth: "staged",
    headline: "Being findable when the answer is generated rather than listed",
    lead:
      "Structuring a client's public information so that assistants and answer engines can represent it accurately. A genuinely new surface, changing quickly, and one where honest uncertainty is more useful than confident method.",
    summary:
      "Structuring client information so assistants and answer engines represent it accurately — a new surface where the honest position is uncertainty.",
    seoTitle: "AI Discoverability — being findable in generated answers",
    seoDescription:
      "Structure a client's public information so AI assistants represent it accurately: clear facts, structured data and consistency across sources.",
    updated: "2026-09-02",
    meaning:
      "The practice of making a client's information clear, consistent and structured enough that systems generating answers about them get it right — covering structured data, factual consistency across sources, and unambiguous public statements.",
    job: "Make sure that when a machine describes this client, it describes them correctly.",
    whyAgencies: [
      {
        label: "Some buyers now ask an assistant first",
        body: "How large that share is varies enormously by sector and nobody has trustworthy numbers, but it is not zero and it is not shrinking.",
      },
      {
        label: "Inconsistency across sources produces wrong answers",
        body: "A business described three different ways across its site, its listings and its profiles gives a generating system three options and no way to choose.",
      },
      {
        label: "The fundamentals are things worth doing anyway",
        body: "Clear factual statements, structured data and consistency improve conventional search and human comprehension too, which makes this a low-regret area to work in.",
      },
    ],
    inputs: [
      "The client's public information across every source",
      "Inconsistencies between site, listings, profiles and directories",
      "The questions buyers actually ask about this business",
      "Structured data already present on the client's site",
    ],
    outputs: [
      "A consistency audit across the client's public sources",
      "Structured data recommendations for the site",
      "Clear factual statements of what the business does, for whom, where",
      "An answer bank for the questions buyers actually ask",
    ],
    sequence: [
      { title: "The agency gathers public sources", body: "Site, listings, profiles, directories, third-party mentions.", lane: "agency" },
      { title: "Inconsistencies are surfaced", body: "Where sources disagree about the same fact, which is very common and rarely noticed.", lane: "mengo" },
      { title: "Structure is recommended", body: "Structured data and clear factual statements, based on what the client actually is.", lane: "mengo" },
      { title: "The agency verifies the facts", body: "Consistency around a wrong fact is worse than inconsistency. Verification is not optional here.", lane: "agency" },
      { title: "The agency implements", body: "Changes go into the client's own site and profiles.", lane: "agency" },
    ],
    judgement: [
      { label: "What to say the business is", body: "A clear, accurate self-description is harder to write than it sounds and is a positioning decision." },
      { label: "How much effort this justifies", body: "It varies enormously by sector. Over-investing here for a client whose buyers do not search this way is a poor use of their budget." },
      { label: "What not to promise", body: "Nobody controls how a generating system describes a business, and an agency implying otherwise is overreaching." },
    ],
    limits: [
      "It does not control what any AI system says about a client. It improves the source material; the systems do what they do.",
      "This area changes quickly and any method here is a current best guess rather than an established practice.",
      "It cannot correct a third-party source. Wrong information on someone else's site is a request, not a task.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Fundamentals first, this later",
        situation: "You are establishing a first engagement and this is an area where nobody has settled practice.",
        problem: "Selling a service whose method is uncertain, to a client who does not yet trust you, is a poor bet for both sides.",
        mengo: ["A consistency audit, which is useful regardless of the AI framing"],
        agency: ["Judging whether the client's buyers search this way at all"],
        outcome: "The consistency work done as part of basic hygiene rather than sold as a specialism.",
        insteadDoThis:
          "Do the Google Business Profile and Website Planner work. Both improve the same underlying consistency and have established, defensible methods.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Useful hygiene, honestly framed",
        situation: "Clients are starting to ask whether they show up in AI answers, and you need a defensible response.",
        problem: "The temptation is to sell a specialism. The honest answer is that the fundamentals help and nobody controls the outcome.",
        mengo: ["A consistency audit across public sources", "Structured data recommendations", "An answer bank for common buyer questions"],
        agency: ["Framing it honestly with the client", "Deciding how much effort it justifies"],
        outcome: "You have a defensible answer and a genuinely useful piece of work, without overclaiming.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "A consistent position across the team",
        situation: "Different people on your team give clients different answers about AI visibility.",
        problem: "An inconsistent agency position on a topic clients are anxious about undermines confidence in everything else you say.",
        mengo: ["One audit method applied across accounts", "A shared factual basis for what can and cannot be claimed", "Consistent recommendations"],
        agency: ["Agreeing the agency's position, including its limits", "Client conversations"],
        outcome: "Everyone gives the same honest answer.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Consistency work at portfolio scale",
        situation: "Public information for many clients across many sources, none of it systematically checked.",
        problem: "Factual inconsistency accumulates silently and affects conventional search as much as generated answers.",
        mengo: ["Repeatable audits across the portfolio", "Visibility of which clients have unresolved inconsistencies", "Consistent structured data recommendations"],
        agency: ["Fact verification with clients", "Prioritising which clients this matters for"],
        outcome: "A recurring hygiene check rather than an occasional discovery.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "A defensible position for clients who will ask",
        situation: "Large clients ask about AI visibility and expect a considered institutional answer.",
        problem: "A confident answer in an unsettled area is a reputational risk; no answer is a credibility problem.",
        mengo: ["A documented method with its limits stated", "Consistent audit structure across teams", "Recorded recommendations and their reasoning"],
        agency: ["The agency's institutional position on what can be claimed", "Senior client conversations"],
        outcome: "A position that is honest about uncertainty and still useful, which is what a serious client actually wants.",
      },
    ],
    related: {
      capabilities: ["seo", "website-planner", "faq-bank", "google-business-profile"],
      workflows: ["seo-workflow", "business-research"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Does this guarantee a client appears in AI answers?",
        a: "No, and anyone promising that is overreaching. What it does is make the underlying information clear, consistent and structured, which is what those systems draw on. The outcome is not controlled by anybody.",
      },
      {
        q: "Is this just SEO with a new name?",
        a: "It overlaps substantially, which is a point in its favour rather than against it — the fundamentals are shared. The differences are an emphasis on factual consistency across sources and on answering questions directly rather than ranking for terms.",
      },
      {
        q: "How settled is the practice here?",
        a: "Not very. This is a genuinely new and fast-moving area, and we would rather say so than present a method with more confidence than it has earned. The parts we are confident about are the parts that were good practice anyway.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "intro-scripts",
    title: "Intro Scripts",
    navLabel: "Intro Scripts",
    group: "marketing",
    depth: "staged",
    headline: "How the client introduces themselves, in fifteen seconds",
    lead:
      "The short spoken introduction a founder or salesperson gives at an event, on a call or in a meeting. Said hundreds of times a year, almost never written down, and usually different every time.",
    summary:
      "The short spoken introduction a client gives constantly — written once so it is consistent and actually lands.",
    seoTitle: "Intro Scripts — how a client introduces themselves",
    seoDescription:
      "The short spoken introduction a founder or salesperson uses at events and on calls, written once so it is consistent, credible and lands.",
    updated: "2026-09-02",
    meaning:
      "Short spoken introductions in several lengths — fifteen seconds, a minute, and a longer version — matched to the situations the client's people actually find themselves in.",
    job: "Give the client's people a consistent way to describe the business out loud.",
    whyAgencies: [
      {
        label: "It is the most-delivered piece of marketing in any business",
        body: "A founder introduces their business hundreds of times a year. Almost no other asset gets that much use, and it is the one nobody has worked on.",
      },
      {
        label: "Inconsistency here undermines the positioning",
        body: "You can spend a quarter establishing a position and have it undone by three people describing the business three different ways at the same conference.",
      },
      {
        label: "It is a fast credibility win",
        body: "A founder who suddenly has a clear answer to 'what do you do' notices immediately, which makes it unusually good for demonstrating value early.",
      },
    ],
    inputs: [
      "The approved positioning and message hierarchy",
      "The situations these are actually used in",
      "How the client naturally speaks, from recordings rather than from writing",
      "The follow-up question they most often get, and struggle with",
    ],
    outputs: [
      "Introductions at several lengths for different situations",
      "A version per audience where the audience genuinely differs",
      "Responses to the two or three predictable follow-up questions",
      "Something written to be spoken rather than read",
    ],
    sequence: [
      { title: "The agency listens to how they speak now", body: "A recording of the current version, which is usually the first time anyone has examined it.", lane: "agency" },
      { title: "Versions are drafted from the positioning", body: "Written for speech, at the lengths the situations actually require.", lane: "mengo" },
      { title: "Follow-up answers are prepared", body: "The predictable second question is where most introductions fall apart.", lane: "mengo" },
      { title: "The agency adapts to the speaker", body: "A script that does not sound like the person will not be used, however good it is.", lane: "agency" },
      { title: "The client practises it", body: "Out loud. A script read for the first time in front of a prospect does not work.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether it sounds like the person", body: "The most common failure is a script the speaker abandons because it is not their voice." },
      { label: "How much to claim in fifteen seconds", body: "Over-claiming in an introduction reads as a pitch and closes the conversation." },
      { label: "When the answer should be a question", body: "Sometimes the best introduction ends by asking something. That is a judgement about the situation." },
    ],
    limits: [
      "It does not coach delivery. A script is not a presentation skill, and the two are different problems.",
      "It cannot make a weak positioning sound strong, and attempting it produces something that sounds evasive.",
      "It only works if the person practises it, which is outside anyone's control but theirs.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Write your own before you sell it",
        situation: "You are introducing your own new agency at events and doing it differently every time.",
        problem: "New agency founders describe their business inconsistently, which is exactly the problem they will later be paid to fix for clients.",
        mengo: ["Versions at several lengths drawn from your own positioning", "Prepared answers to the predictable follow-up", "A consistent description you can practise"],
        agency: ["Deciding what your agency actually is", "Practising it out loud"],
        outcome: "You can describe your own agency the same way twice, which is a low bar many miss.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "A small deliverable clients notice immediately",
        situation: "You need work that demonstrates value quickly and does not consume a week.",
        problem: "Most marketing work takes a quarter to show anything, which is hard when a client is deciding whether to continue.",
        mengo: ["Introductions per situation, drafted from the positioning", "Follow-up question responses", "Written for speech rather than for the page"],
        agency: ["Adapting each version to how the person actually talks", "Getting them to practise it"],
        outcome: "A visible improvement in something the client does every week.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Everyone at the client says the same thing",
        situation: "Your client has several people who represent the business and each describes it differently.",
        problem: "Positioning work that never reaches the people who speak to prospects is positioning that exists only in documents.",
        mengo: ["A shared set of introductions across the client's team", "Role-appropriate versions where the role genuinely differs", "Consistency with the written positioning"],
        agency: ["Getting the client's team to adopt them", "Adapting to individual speakers"],
        outcome: "The positioning survives contact with the people who actually speak to buyers.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Message consistency across a client's whole sales function",
        situation: "Client sales teams of a size where messaging drift is guaranteed.",
        problem: "A large sales function without a shared introduction produces as many versions of the business as it has people.",
        mengo: ["Introductions derived from the approved message hierarchy", "Versions per role and per segment", "Consistency with all other client-facing material"],
        agency: ["Working with the client's sales leadership on adoption", "Judging what each role needs"],
        outcome: "The sales function describes the business the way the marketing does.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Spoken messaging as part of the brand system",
        situation: "Large clients where spokespeople include executives, sales teams and regional representatives.",
        problem: "Spoken messaging is rarely governed at all, even in organisations with rigorous written brand governance.",
        mengo: ["Spoken versions derived from the same message hierarchy as written material", "Role and region variants where genuinely needed", "Consistent structure across the organisation"],
        agency: ["Coordination with the client's communications function", "Approval for anything executives will say publicly"],
        outcome: "Spoken and written messaging are recognisably the same argument.",
      },
    ],
    related: {
      capabilities: ["sales-script", "brand-strategy", "presentations-and-pitches", "interview-and-media-prep"],
      workflows: ["sales-enablement", "pr-and-media-workflow"],
      useCases: ["improve-sales-enablement", "get-the-first-client"],
    },
    faqs: [
      {
        q: "Is this not just an elevator pitch?",
        a: "Same idea, better executed. The difference is having versions at several lengths for the situations they are actually used in, and having prepared answers to the follow-up question — which is where most elevator pitches collapse.",
      },
      {
        q: "What if the client refuses to use a script?",
        a: "Many will, and that is a reasonable instinct. Frame it as a structure rather than a script: the point they should always make, the thing they should never lead with, and the answer to the predictable second question. Most people accept that where they resist a memorised line.",
      },
      {
        q: "Should there be different versions for different audiences?",
        a: "Only where the audience genuinely changes what should be said. Two versions that differ in wording alone are two things to remember and no benefit.",
      },
    ],
  },
];
