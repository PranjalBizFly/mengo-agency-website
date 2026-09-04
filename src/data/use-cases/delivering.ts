import type { UseCase } from "@/lib/types";

/**
 * Use cases about the work itself — doing it faster, more consistently, or
 * with less of it wasted.
 */
export const deliveringUseCases: UseCase[] = [
  {
    kind: "use-case",
    slug: "deliver-faster",
    title: "Deliver Faster",
    navLabel: "Deliver Faster",
    phase: "deliver",
    headline: "Shorten the wait without shortening the thinking",
    lead:
      "Most agency delay is not work. It is waiting — for a brief to be written up, for a senior person to have an afternoon, for a draft to reach the top of a queue. Cutting the waiting is a different and far more achievable project than working faster.",
    summary:
      "Most delivery time is waiting rather than working. Where the waiting is, what to compress, and what must never be.",
    seoTitle: "Faster agency delivery without cutting quality",
    seoDescription:
      "Most agency delivery time is waiting, not working. Where the waiting sits, what can be compressed safely, and what should never be.",
    updated: "2026-09-02",
    situation:
      "Clients experience your turnaround as slow, and internally you know most of that time was not spent working on their account.",
    obstacle: [
      { label: "Queueing dominates", body: "Work sits between steps far longer than any step takes. Speeding up the steps barely moves the total." },
      { label: "Everything routes through the same reviewers", body: "One or two senior people gate every account, and they are also selling." },
      { label: "First drafts start from nothing", body: "Which makes the first version the slowest part and the one most likely to wait for the right person to be free." },
      { label: "Client approval is treated as instant", body: "Plans that ignore client review time are wrong from the moment they are written." },
    ],
    approach: [
      { label: "Measure the wait, not the work", body: "Track elapsed time per step for a fortnight. The result usually surprises people and redirects the whole effort." },
      { label: "Remove the from-scratch first draft", body: "The largest queueing point in most agencies is work waiting for someone to start it. A briefed draft arriving ready for review removes that wait entirely." },
      { label: "Split review by type", body: "Editorial, factual and strategic review are different jobs with different reviewers. Queueing all three behind one person is a choice, not a necessity." },
      { label: "Plan around client review time", body: "Build the approval window into the schedule as a real step rather than an optimistic assumption." },
      { label: "Leave the thinking alone", body: "Discovery, strategy and judgement are where the value is. Compressing those produces fast work that is wrong." },
    ],
    expectations: [
      "A measured elapsed-time picture per step, which is usually the most valuable output",
      "First drafts available without waiting for a free afternoon",
      "Review distributed by type rather than queued behind one person",
      "A schedule that includes client approval as a real step",
      "No turnaround guarantee. Your cycle time depends on your review structure and your clients' responsiveness",
    ],
    notFor: [
      "Agencies whose slowness is a client-side approval problem. That is a contract and expectations conversation.",
      "Agencies who want to compress discovery or strategy. That produces faster work of lower value.",
      "Agencies whose delay is in design or production disciplines outside written marketing work.",
    ],
    stages: ["solo", "small-team", "growing"],
    related: {
      workflows: ["content-production", "campaign-planning", "multi-client-delivery"],
      capabilities: ["marketing-calendar", "social-media", "blog-content", "sops"],
    },
    faqs: [
      {
        q: "How much faster is realistic?",
        a: "It depends entirely on how much of your current elapsed time is queueing, which is why measuring first matters more than any number. Agencies where work waits days between steps have more to gain than tightly run ones.",
      },
      {
        q: "Will faster delivery hurt quality?",
        a: "It will if you compress the wrong thing. Removing queueing time does not touch quality; removing review time does, immediately and visibly.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "reduce-repetitive-work",
    title: "Reduce Repetitive Work",
    navLabel: "Reduce Repetitive Work",
    phase: "deliver",
    headline: "Stop rebuilding the same thing for the fortieth time",
    lead:
      "Repetitive work is expensive twice: once in hours, and again in the people doing it. Skilled marketers who spend their week reassembling context are the people most likely to leave and the hardest to replace.",
    summary:
      "Identifying the work that genuinely repeats, moving it, and keeping the judgement that only looks repetitive.",
    seoTitle: "Reducing repetitive work in agency delivery",
    seoDescription:
      "How agencies identify work that genuinely repeats across accounts, move it, and keep the judgement work that only looks repetitive.",
    updated: "2026-09-02",
    situation:
      "Your team spends a significant share of every week rebuilding structures they have built before, for different clients, with different names on them.",
    obstacle: [
      { label: "Repetition is hard to see from inside", body: "Each instance feels bespoke because the client is different, even when the work is structurally identical." },
      { label: "Some repetition is actually judgement", body: "Reviewing every draft looks repetitive and is not. Getting this distinction wrong automates the valuable half." },
      { label: "The knowledge is in people's heads", body: "You cannot move work that has never been described, and describing it is itself a task nobody has time for." },
      { label: "Nobody owns the problem", body: "Repetitive work is distributed across everyone's week, so it is never anyone's project." },
    ],
    approach: [
      { label: "List what happens on every account", body: "Not what should happen — what actually does. The list is usually shorter and more repetitive than people expect." },
      { label: "Sort by whether the output varies with judgement", body: "If two competent people would produce the same thing, it is structure. If they would differ meaningfully, it is judgement. Only the first should move." },
      { label: "Move the structure, keep the judgement", body: "Brief shape, research assembly, plan anatomy and first drafts are structure. Recommendation, voice, client conversation and the final read are not." },
      { label: "Make the boundary a step", body: "Write the review checkpoint into the workflow. A guideline about where judgement is required will be skipped under deadline; a step will not." },
      { label: "Give the released time somewhere to go", body: "If the freed hours silently absorb into more accounts, nobody experiences an improvement and the change gets resented." },
    ],
    expectations: [
      "A written list of what genuinely repeats across your accounts",
      "A clear line between structural work and judgement work, agreed by the people doing it",
      "Skilled time redirected toward review, strategy and client relationships",
      "Review checkpoints as required steps rather than as policy",
      "Not the elimination of repetition. Some of it is the job",
    ],
    notFor: [
      "Agencies looking to reduce headcount. This changes what people do; using it as a redundancy exercise wastes the capability you have left.",
      "Agencies where the repetitive work is design production, media operations or reporting from tools we do not touch.",
      "Anyone hoping to remove review. Review is the repetitive-looking work that must stay.",
    ],
    stages: ["solo", "small-team", "growing"],
    related: {
      workflows: ["content-production", "multi-client-delivery", "agency-sop-creation"],
      capabilities: ["business-profile", "sops", "ai-chat", "marketing-calendar"],
    },
    faqs: [
      {
        q: "How do we tell structure from judgement?",
        a: "The two-competent-people test. If two experienced people in your agency would produce substantially the same output, it is structure. If they would meaningfully differ in a way the client would notice, it is judgement, and it stays.",
      },
      {
        q: "What is the most repetitive thing in a typical agency?",
        a: "Reassembling client context before starting work — re-reading the strategy, the last few assets and the tone notes. It rarely appears on any task list, which is exactly why it is invisible and expensive.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "standardize-delivery",
    title: "Standardize Delivery",
    navLabel: "Standardize Delivery",
    phase: "deliver",
    headline: "The same standard on every account, including the quiet ones",
    lead:
      "Clients rarely leave because of one bad piece of work. They leave because the work became inconsistent, and inconsistency is what they notice first — long before they notice a metric.",
    summary:
      "Making delivery consistent across people and accounts without flattening the judgement that distinguishes your work.",
    seoTitle: "Standardizing agency delivery across accounts",
    seoDescription:
      "How agencies make client delivery consistent across people and accounts — what to standardise, what to leave alone, and how to keep a standard current.",
    updated: "2026-09-02",
    situation:
      "The same service delivered by two people in your agency produces recognisably different work, and clients who move between accounts notice.",
    obstacle: [
      { label: "Standard is confused with uniform", body: "Teams resist standardisation because they hear it as 'everything the same', which would remove exactly what makes the work good." },
      { label: "The standard is not written down", body: "So it cannot be enforced, taught or improved — only demonstrated by whoever holds it." },
      { label: "Attention follows noise", body: "Demanding clients get the standard; quiet ones get what is left, and quiet clients leave without a conversation." },
      { label: "A written standard goes stale", body: "A document describing how the agency used to work is worse than none, because people follow it." },
    ],
    approach: [
      { label: "Write down what good looks like", body: "Specifically enough to review against. 'On brand' is not a standard; 'leads with the segment objection, no unsupported claims, house voice' is." },
      { label: "Standardise the container, not the contents", body: "Brief shape, research depth, plan anatomy and review checkpoints. Not voice, not recommendation, not creative approach." },
      { label: "Set a floor for every account", body: "The minimum every client gets regardless of size or noise. The single most effective item on this list." },
      { label: "Review against the written standard", body: "So quality stops being a property of who reviewed it and becomes a property of the process." },
      { label: "Give the standard an owner and a revision rhythm", body: "Named person, scheduled review. Without both it decays into a document referenced during audits." },
    ],
    expectations: [
      "A written definition of what good looks like at your agency",
      "A consistent floor of research and planning depth on every account",
      "Review conducted against a standard rather than a reviewer's preference",
      "A named owner and a scheduled revision",
      "Not uniformity. If your accounts start looking identical, you have standardised the wrong layer",
    ],
    notFor: [
      "Agencies whose differentiation is genuinely bespoke per-client craft with no repeating structure.",
      "Agencies unwilling to write their standard down. Everything here depends on that artefact.",
      "Anyone hoping standardisation substitutes for capability. It makes an agency consistent, which only helps if the standard is good.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      workflows: ["scale-client-delivery", "agency-sop-creation", "marketing-planning"],
      capabilities: ["sops", "brand-manual", "business-profile", "roles-and-permissions"],
    },
    faqs: [
      {
        q: "How detailed should the standard be?",
        a: "Detailed enough that two reviewers reach the same verdict on the same piece of work. That is the practical test and it is more useful than any target length.",
      },
      {
        q: "What if our team disagrees about what good looks like?",
        a: "Then you have found something important. That disagreement is currently being resolved separately on every account by whoever happens to review it, which is the inconsistency your clients are seeing.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "standardize-client-strategy",
    title: "Standardize Client Strategy",
    navLabel: "Standardize Client Strategy",
    phase: "deliver",
    headline: "Strategic depth that does not depend on who ran onboarding",
    lead:
      "Most agencies do good strategic work on some accounts. Which accounts depends on who led them and how busy that quarter was, which is a process problem wearing the clothes of a talent one.",
    summary:
      "Giving every account the same strategic depth, with recorded reasoning that survives a change of owner.",
    seoTitle: "Standardizing client strategy across agency accounts",
    seoDescription:
      "Giving every client account the same strategic depth, with reasoning recorded so a position survives a change of account owner.",
    updated: "2026-09-02",
    situation:
      "Some accounts have real positioning work behind them and others have three demographic personas nobody references, and nothing surfaces which is which.",
    obstacle: [
      { label: "Strategy is a one-off deliverable", body: "Produced at onboarding, presented once, and never revisited or connected to the ongoing work." },
      { label: "The reasoning is not recorded", body: "So the next person cannot distinguish a decision from an accident, and re-derives their own." },
      { label: "Depth tracks capacity", body: "The account that arrived in a busy month got a shallower strategic layer, permanently." },
    ],
    approach: [
      { label: "Define the minimum every account gets", body: "A validated research pass, a segment set with real objections, a position with reasoning. Below that, an account is being delivered without a strategy." },
      { label: "Record the reasoning, not just the conclusion", body: "A position without its argument cannot be defended a year later or inherited by anyone." },
      { label: "Store it where the work happens", body: "A strategy in a deck drifts from the work within two quarters. One that downstream briefs read from does not." },
      { label: "Revisit on a rhythm", body: "Annually, and whenever the client's offer or market changes materially. Put it in the calendar rather than waiting for it to feel necessary." },
    ],
    expectations: [
      "A defined strategic minimum every account receives",
      "Recorded reasoning behind each position",
      "Strategy stored where downstream work reads from it",
      "A scheduled revisit rather than a one-off deliverable",
      "Comparable strategic quality across accounts, regardless of who onboarded them",
    ],
    notFor: [
      "Agencies delivering pure execution against a client-owned strategy. Different arrangement, different problem.",
      "Anyone hoping to skip the strategist. A structure applied without judgement produces a well-organised wrong answer.",
      "Agencies whose accounts are genuinely too small to support strategic work. That is a pricing conversation.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      workflows: ["brand-strategy-workflow", "business-research", "icp-and-persona-development"],
      capabilities: ["brand-strategy", "icps-and-personas", "competitors", "swot-analysis"],
    },
    faqs: [
      {
        q: "How do we know which accounts have weak strategy?",
        a: "Ask whether each has a written position with reasoning, a segment set built from real objections, and a validated research pass. Accounts missing any of the three are being delivered without a strategy, whatever the onboarding deck said.",
      },
      {
        q: "How often should strategy be revisited?",
        a: "Annually as a minimum, and whenever the client's offer or market changes materially. The comparison against the previous version is often more informative than the new assessment.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "build-a-content-engine",
    title: "Build a Content Engine",
    navLabel: "Build a Content Engine",
    phase: "deliver",
    headline: "Content that runs rather than content that gets decided",
    lead:
      "A content engine is not a bigger calendar. It is the difference between deciding what to publish every week and executing decisions that were already made — which is where most of the cost actually sits.",
    summary:
      "Turning weekly content decisions into a running system: plan, briefs, production, review, publish, feed back.",
    seoTitle: "Building a client content engine",
    seoDescription:
      "Turning weekly content decisions into a running system for client accounts: themed plan, briefs, production, required review and a feedback loop.",
    updated: "2026-09-02",
    situation:
      "Content happens when someone decides what to publish, which means it happens inconsistently and consumes disproportionate senior attention.",
    obstacle: [
      { label: "The decision costs more than the production", body: "Deciding what to say, to whom, in what format, this week, is the expensive part and it recurs weekly." },
      { label: "Slots are topics rather than briefs", body: "A word in a calendar cell interpreted differently by whoever picks it up." },
      { label: "Review is the bottleneck and is unplanned", body: "Volume rises, review capacity does not, and quality degrades before anyone notices." },
    ],
    approach: [
      { label: "Theme the year, brief the quarter", body: "A themed plan means a slot arrives with a reason attached. Detail the near window; leave the rest thematic." },
      { label: "Turn every slot into a brief before production", body: "Segment, angle, format and job. Writers should write rather than decide and then write." },
      { label: "Batch production, batch review", body: "A consecutive review pass catches inconsistency that item-by-item review misses, and costs less per item." },
      { label: "Plan review capacity explicitly", body: "It becomes the binding constraint. Volume beyond it produces unedited work, which is worse than less content." },
      { label: "Feed results back into the plan", body: "What worked and what did not should change next quarter's themes, otherwise the engine runs without steering." },
    ],
    expectations: [
      "A themed plan where every slot arrives as a brief",
      "Production batched rather than item-by-item",
      "Review capacity planned as the real constraint",
      "A feedback loop from results into the plan",
      "Volume matched to what your reviewers can stand behind, which may be less than the client asked for",
    ],
    notFor: [
      "Agencies whose clients need design or video volume more than written volume.",
      "Anyone without review capacity. More content nobody checks is a reputational risk rather than a growth strategy.",
      "Clients who cannot sustain a cadence. An abandoned content programme is worse than a smaller consistent one.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      workflows: ["content-planning", "content-production", "social-media-production", "seo-workflow"],
      capabilities: ["marketing-calendar", "blog-content", "social-media", "faq-bank"],
    },
    faqs: [
      {
        q: "How much content should a client publish?",
        a: "As much as you can review properly and they can sustain. Volume beyond either limit produces unedited work or an abandoned programme, both of which are worse than a smaller consistent output.",
      },
      {
        q: "What is the first thing to fix?",
        a: "The brief. Turning slots from topics into briefs with a segment, an angle and a job removes the weekly decision, which is where the cost actually is.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "deliver-campaigns-faster",
    title: "Deliver Campaigns Faster",
    navLabel: "Deliver Campaigns Faster",
    phase: "deliver",
    headline: "Compress the build, not the decisions",
    lead:
      "Campaigns are slow for two reasons: the decisions were not made up front, and every asset is produced from scratch. Only one of those is worth fixing by going faster.",
    summary:
      "Getting campaigns live sooner by settling the brief before production and building every asset from one approved source.",
    seoTitle: "Delivering client campaigns faster",
    seoDescription:
      "Getting client campaigns live sooner by settling the objective and brief before production, and producing every asset from one approved source.",
    updated: "2026-09-02",
    situation:
      "Campaigns take weeks longer than they should, and most of the overrun happens between approval and launch.",
    obstacle: [
      { label: "The brief is settled during production", body: "Which means assets get rebuilt as the objective clarifies, and that rebuild is the overrun." },
      { label: "Each asset is produced independently", body: "So the message drifts and consistency has to be restored by review." },
      { label: "Launch checks are discovered rather than planned", body: "The broken link, the form that does not fire, the page not live." },
    ],
    approach: [
      { label: "Settle the objective and success definition first", body: "In writing, before anything is built. Disagreements surface in the brief where they cost an hour." },
      { label: "Approve the channel sequence before production", body: "The asset list follows from the sequence. Approving them together prevents building things the sequence does not need." },
      { label: "Build every asset from the one brief", body: "Which keeps the message consistent without a reconciliation pass at the end." },
      { label: "Work the launch checklist as a step", body: "The operational failures are predictable and cheap to prevent, and expensive to discover on launch day." },
    ],
    expectations: [
      "An approved brief and sequence before production begins",
      "Assets that inherit one message rather than being reconciled afterwards",
      "A launch checklist worked as a step rather than improvised",
      "Fewer rebuilds, which is where the time is actually recovered",
      "No timeline guarantee. Client approval time is usually the binding factor and it is not ours to compress",
    ],
    notFor: [
      "Agencies whose campaigns are slow because of design or video production capacity.",
      "Anyone wanting to skip the objective conversation. That is where the overrun is created.",
      "Campaigns where the client will not commit to a brief. That is a commercial conversation first.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      workflows: ["campaign-planning", "ads-workflow", "seasonal-campaign", "product-launch"],
      capabilities: ["ads-management", "landing-page", "marketing-calendar", "email-templates"],
    },
    faqs: [
      {
        q: "Where does campaign time actually go?",
        a: "Mostly into rebuilding assets as the objective clarifies during production. Settling the brief first removes that, and it is a bigger saving than any production speed-up.",
      },
      {
        q: "What if the client changes the offer mid-campaign?",
        a: "The brief changes and the affected assets regenerate. What does not regenerate is the decision about whether changing mid-flight is wise, which is a conversation with the client.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "launch-a-new-client-campaign",
    title: "Launch a New Client Campaign",
    navLabel: "Launch a Campaign",
    phase: "deliver",
    headline: "The first campaign on a new account",
    lead:
      "A first campaign carries more weight than its budget suggests. It is the client's first experience of how you run things, and it happens before the relationship has any slack in it.",
    summary:
      "Running the first campaign on a new account, where the stakes are relationship rather than budget.",
    seoTitle: "Launching a first campaign on a new client account",
    seoDescription:
      "Running the first campaign on a new agency account: choosing something winnable, defining success early, and using it to establish how you work.",
    updated: "2026-09-02",
    situation:
      "A new client is expecting activity, and the first campaign will set their expectations for everything that follows.",
    obstacle: [
      { label: "You do not know the client well yet", body: "Voice, appetite for risk and what their audience responds to are all still hypotheses." },
      { label: "The pressure is to be impressive", body: "Which pushes toward ambitious campaigns that are harder to execute and harder to read." },
      { label: "There is no baseline", body: "So whatever happens is hard to interpret, and the interpretation is what the client remembers." },
    ],
    approach: [
      { label: "Pick something winnable and readable", body: "A campaign with a clear mechanism and a measurable outcome beats an ambitious one whose result nobody can interpret." },
      { label: "Define success before launch, explicitly", body: "Especially here. A first campaign without an agreed definition becomes a negotiation about what should have happened." },
      { label: "Over-communicate the process", body: "The client is learning how you work. Showing the brief, the sequence and the reasoning is as valuable as the result." },
      { label: "Run the retrospective properly", body: "Including what did not work. A first campaign retrospective that is honest establishes the relationship you want for the next two years." },
    ],
    expectations: [
      "A campaign with a clear mechanism and a readable outcome",
      "Success defined and agreed before launch",
      "A visible process, which is half of what the client is judging",
      "An honest retrospective, including the parts that did not work",
      "No performance promise. A first campaign is as much about establishing how you work as about the result",
    ],
    notFor: [
      "Accounts where the strategic layer is not yet approved. Campaigning before positioning is settled produces work you will redo.",
      "Clients expecting a transformative first result. Setting that expectation is the agency's job and it should happen before launch.",
      "Anyone who would rather look impressive than be readable.",
    ],
    stages: ["solo", "small-team", "growing"],
    related: {
      workflows: ["campaign-planning", "new-client-launch", "ads-workflow", "client-reporting"],
      capabilities: ["ads-management", "landing-page", "marketing-calendar", "email-templates"],
    },
    faqs: [
      {
        q: "How ambitious should a first campaign be?",
        a: "Less than you want it to be. A campaign with a clear mechanism and a readable outcome establishes trust; an ambitious one whose result nobody can interpret establishes doubt.",
      },
      {
        q: "What matters most on a first campaign?",
        a: "That the client sees how you work. The visible process — brief, sequence, reasoning, honest retrospective — is as much of the value as the result, because it sets expectations for the next two years.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "improve-sales-enablement",
    title: "Improve Sales Enablement",
    navLabel: "Improve Sales Enablement",
    phase: "deliver",
    headline: "Being judged on a conversation you cannot see",
    lead:
      "Marketing generates the enquiry and a person converts it. Agencies are measured on the second half and typically have no visibility of it, which is where most client dissatisfaction actually originates.",
    summary:
      "Connecting marketing to the sales conversation, so the message survives the handover and objections flow back.",
    seoTitle: "Improving sales enablement for agency clients",
    seoDescription:
      "Connecting client marketing to the sales conversation: consistent messaging, objection responses, collateral, and feedback into positioning.",
    updated: "2026-09-02",
    situation:
      "The client says the leads are poor. You suspect the conversion is, and neither of you has evidence.",
    obstacle: [
      { label: "You have no visibility of the conversation", body: "So you cannot tell whether the enquiries are weak or the handling is." },
      { label: "Sales and marketing say different things", body: "Which a buyer comparing them notices immediately." },
      { label: "Objection data never reaches you", body: "The single best feedback on positioning is generated daily and discarded." },
    ],
    approach: [
      { label: "Ask for an hour with their best salesperson", body: "The highest-value hour available to a marketing engagement. Frame it as improving the marketing rather than auditing sales." },
      { label: "Build the objection inventory from reality", body: "What buyers actually say, not what anyone assumes. This becomes the input to nurturing, content and positioning." },
      { label: "Align the collateral to the message", body: "What gets sent after a call should say what the marketing says. Frequently it does not, and nobody has checked." },
      { label: "Create a route for objections to come back", body: "New objections should update the segments and the positioning. Without a route, the loop stays open." },
    ],
    expectations: [
      "Access to the sales conversation, or an explicit note that you do not have it",
      "An objection inventory built from real conversations",
      "Collateral consistent with the marketing message",
      "A feedback route from sales into positioning",
      "A better-evidenced answer to whether the problem is leads or conversion",
    ],
    notFor: [
      "Clients who will not give any access to the sales side. You can still improve the material, but say plainly what you cannot see.",
      "Agencies unwilling to discover that the leads genuinely were the problem.",
      "Engagements scoped strictly to top-of-funnel with no interest in what happens after.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      workflows: ["sales-enablement", "lead-nurturing-flows", "client-review"],
      capabilities: ["sales-script", "sales-collateral", "whatsapp-nurturing", "faq-bank"],
    },
    faqs: [
      {
        q: "What if the client refuses access to their sales team?",
        a: "Work with what you have and say explicitly what you cannot see. A report that states 'we can observe enquiries but not conversion' is more credible than one implying more than it knows, and naming the gap is often what eventually gets you the access.",
      },
      {
        q: "What if the leads really are the problem?",
        a: "Then you need to know, and it is better to find out through a structured look at the conversation than through a client's conclusion. Being the one who identifies it is a much better position than being told.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "improve-client-retention",
    title: "Improve Client Retention",
    navLabel: "Improve Client Retention",
    phase: "deliver",
    headline: "Clients leave quietly, and usually not over the work",
    lead:
      "Agencies lose accounts they never disappointed. Churn is rarely a single bad piece of work — it is inconsistency, silence, or a relationship that became transactional without anyone noticing.",
    summary:
      "Why agency clients actually leave, and the operational habits that address each cause.",
    seoTitle: "Improving agency client retention",
    seoDescription:
      "Why agency clients actually leave — inconsistency, silence, transactional relationships — and the operational habits that address each cause.",
    updated: "2026-09-02",
    situation:
      "You lose accounts periodically and the stated reason is usually budget, which is rarely the whole story.",
    obstacle: [
      { label: "The quiet client is under-served", body: "Attention follows noise, and the account that never complains gets the least, until it leaves." },
      { label: "The relationship becomes delivery-only", body: "Once an agency stops having strategic conversations it becomes a supplier, and suppliers are replaced on price." },
      { label: "Nobody names the difficult thing", body: "A problem the agency knows about and does not raise gets raised by the client instead, at the worst moment." },
    ],
    approach: [
      { label: "Set a floor every account receives", body: "The minimum research, planning and review depth regardless of size or noise. This single habit addresses most quiet churn." },
      { label: "Schedule the strategic conversation", body: "A quarterly review that produces a decision rather than a recap. Put it in the calendar rather than waiting for a reason." },
      { label: "Name problems before the client does", body: "The most trust-building move available, and the one agencies most consistently delay." },
      { label: "Ask for proof at the moment of satisfaction", body: "A testimonial request at the right moment is also a retention signal — it surfaces dissatisfaction early, when it is fixable." },
    ],
    expectations: [
      "A defined service floor across every account",
      "A scheduled strategic conversation rather than an ad hoc one",
      "Problems named by the agency first",
      "Earlier warning of dissatisfaction",
      "No retention guarantee. Clients leave for reasons outside your control, and some should",
    ],
    notFor: [
      "Agencies whose churn is genuinely price-driven in a commoditised market. That is a positioning problem.",
      "Anyone hoping to retain clients they are not serving well. This addresses the gap between quality and perception, not the absence of quality.",
      "Accounts that should be let go. Some churn is healthy and worth choosing.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      workflows: ["client-review", "client-reporting", "referral-programme-workflow"],
      capabilities: ["testimonials", "swot-analysis", "sales-performance", "case-studies"],
    },
    faqs: [
      {
        q: "Why do clients say budget when it is not budget?",
        a: "Because it is the least confrontational reason available and it ends the conversation. The real cause is usually inconsistency or a relationship that became transactional, both of which are visible earlier if anyone is looking.",
      },
      {
        q: "What is the single highest-return habit?",
        a: "A service floor every account receives regardless of how vocal the client is. Quiet accounts are where churn concentrates, and they churn because attention followed noise.",
      },
    ],
  },
];
