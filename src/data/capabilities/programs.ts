import type { Capability } from "@/lib/types";

/**
 * Programme capabilities.
 *
 * Three of these are built for a client and one is built for the agency
 * itself. All four share a property: set up once, they produce value for
 * years, which is precisely why they are never urgent and rarely happen.
 */
export const programsCapabilities: Capability[] = [
  {
    kind: "capability",
    slug: "sops",
    title: "SOPs",
    navLabel: "SOPs",
    group: "programs",
    depth: "staged",
    headline: "The agency's own delivery, written down",
    lead:
      "Documented procedures for how the agency delivers. The only capability in this taxonomy built for the agency rather than for a client, and the one that determines whether the others can be delivered consistently at all.",
    summary:
      "Documented agency delivery procedures — the artefact that makes onboarding, cover and consistency possible.",
    seoTitle: "SOPs — documenting how an agency actually delivers",
    seoDescription:
      "Documented delivery procedures for agencies: brief structure, sequence, review checkpoints and escalation, written so they are used rather than filed.",
    updated: "2026-09-02",
    meaning:
      "Written procedures covering how work is done here: the brief structure, the delivery sequence, the review checkpoints, the escalation path and what good looks like.",
    job: "Make the agency's way of working exist outside the people who invented it.",
    whyAgencies: [
      {
        label: "Onboarding is the visible cost",
        body: "A new hire without documented process learns by sitting next to someone who already knows — and that someone is always the most capacity-constrained person in the business.",
      },
      {
        label: "It is what makes cover possible",
        body: "An agency where every account depends on one person's habits cannot absorb illness, holiday or resignation without the client noticing.",
      },
      {
        label: "Improvements propagate or they do not",
        body: "Without a shared artefact, someone finds a better way and it stays in their accounts. With one, it reaches every account next week.",
      },
    ],
    inputs: [
      "How the agency actually delivers today, honestly documented",
      "The definition of what good looks like here",
      "Review checkpoints and who owns each",
      "The constraints that will not be compromised",
    ],
    outputs: [
      "A brief structure used on every account",
      "A delivery sequence with an owner per step",
      "A review standard specific enough that two reviewers agree",
      "An escalation path for anything outside the standard",
    ],
    sequence: [
      { title: "The agency documents what happens now", body: "Not the idealised version. The actual one, including the parts nobody is proud of.", lane: "agency" },
      { title: "The structure is captured", body: "Brief shape, sequence, checkpoints and escalation, held where the work happens.", lane: "mengo" },
      { title: "Gaps are surfaced", body: "Documenting reliably reveals steps nobody performs, usually research validation and retrospectives.", lane: "mengo" },
      { title: "The agency decides the standard", body: "What good looks like here is the agency's intellectual property and cannot be generated.", lane: "agency" },
      { title: "Checkpoints become steps", body: "A review requirement written as a step survives a bad week; one written as guidance does not.", lane: "mengo" },
      { title: "The standard is revised on a rhythm", body: "With a named owner. A process describing how the agency used to work is worse than none.", lane: "agency" },
    ],
    judgement: [
      { label: "What good looks like", body: "The definition is the agency's product. Nothing supplies it, and an agency without a view gets consistency without quality." },
      { label: "What to standardise", body: "Structure yes, voice and recommendation no. Getting this line wrong in either direction is how a systems project fails." },
      { label: "When the standard is wrong", body: "A documented process that no longer matches reality is dangerous, because people follow it." },
    ],
    limits: [
      "It does not define your standard. It applies one, and an agency without a clear view of quality gets consistency without it.",
      "It cannot enforce a checkpoint people are permitted to skip. Governance is organisational.",
      "It is not a certification or evidence of a quality standard for procurement purposes.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Four pages, written in an afternoon",
        situation: "You are inventing your process while delivering, and none of it is written down.",
        problem: "The task never becomes urgent — no client is waiting for it — so it loses to everything that has a deadline, indefinitely.",
        mengo: [
          "A brief structure: what you always ask a new client",
          "A delivery sequence with an owner per step",
          "A review standard and an escalation path",
        ],
        agency: ["Deciding what good looks like at your agency", "Actually spending the afternoon"],
        outcome: "The single artefact that most improves your second and third client, written before you have them.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Make yourself replaceable enough to take a week off",
        situation: "Everything about how you deliver is in your head, which means you are the single point of failure for every account.",
        problem: "You cannot delegate anything, cannot bring in cover, and cannot be ill without the work stopping.",
        mengo: ["A documented sequence a freelancer could follow", "Brief and review structures that transfer", "Per-client context held outside your memory"],
        agency: ["The judgement, which stays yours", "Keeping the document current as you learn"],
        outcome: "A pause becomes recoverable rather than a restart.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "The prerequisite for a first hire",
        situation: "You are about to hire and the only onboarding available is a fortnight beside your busiest person.",
        problem: "Undocumented process makes every hire expensive twice: the new person's ramp and the existing person's lost weeks.",
        mengo: ["A documented process a new person can be onboarded into", "One brief structure and review standard across accounts", "Checkpoints as steps rather than as culture"],
        agency: ["Defining the standard as a team", "Owning and revising it"],
        outcome: "A new hire joins a documented system rather than an apprenticeship.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Quality that does not route through the founder",
        situation: "Account directors run accounts and every genuinely difficult question still escalates to you.",
        problem: "The founder becomes the escalation path for everything, which caps growth at their attention regardless of headcount.",
        mengo: ["A standard explicit enough that directors decide without escalating", "Recorded decision authority per checkpoint", "Consistent structure so review is comparable"],
        agency: ["Deciding what genuinely needs escalating", "Revising the standard as the agency changes"],
        outcome: "Routine decisions stop reaching the founder, and the ones that do are the ones that should.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "The methodology the agency sells, actually running",
        situation: "The agency sells a documented methodology and delivery varies by team.",
        problem: "A methodology that lives in a document rather than in the work is a claim, and clients discover the gap eventually.",
        mengo: ["The structure embedded where the work happens rather than described alongside it", "Uniform application across teams and offices", "An auditable trail of adherence"],
        agency: ["Governance and named ownership", "The standard itself, which is a competitive asset"],
        outcome: "The process the agency sold is the process each account receives.",
      },
    ],
    related: {
      capabilities: ["brand-manual", "users", "roles-and-permissions", "audit-log"],
      workflows: ["agency-sop-creation", "team-handoffs", "multi-client-delivery"],
      useCases: ["build-sops", "create-repeatable-delivery", "improve-team-handoffs"],
    },
    faqs: [
      {
        q: "We tried writing SOPs and nobody read them.",
        a: "Almost universal, and it is a design failure rather than a discipline one. Comprehensive manuals describing an idealised process go stale and get ignored. Four pages describing what actually happens, embedded where the work is, get used.",
      },
      {
        q: "Where should we start?",
        a: "The brief structure — what you always ask a new client. One page, one afternoon, and it is the artefact everything else builds on.",
      },
      {
        q: "Will documenting our process make us generic?",
        a: "Only if you document the wrong layer. Your competitors do not differentiate on brief structure; they differentiate on judgement, craft and relationships, none of which belong in an SOP.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "referral-programme",
    title: "Referral Programme",
    navLabel: "Referral Programme",
    group: "programs",
    depth: "staged",
    headline: "The highest-margin channel, usually left as a hope",
    lead:
      "A structured referral mechanism: the ask, the moment, the incentive and the follow-through. Almost every client says referral is their best source of business and almost none have built anything to produce more of it.",
    summary:
      "A structured referral mechanism — the ask, the moment, the incentive — rather than hoping satisfied customers mention you.",
    seoTitle: "Referral Programme — structuring a client's best channel",
    seoDescription:
      "The ask, the moment, the incentive and the follow-through for a client referral programme — the highest-margin channel most businesses never build.",
    updated: "2026-09-02",
    meaning:
      "A defined mechanism for generating referrals: when the ask happens, how it is made, what if anything is offered, and what happens to a referral once it arrives.",
    job: "Turn referral from something that happens into something the business does.",
    whyAgencies: [
      {
        label: "Clients name it as their best channel and do nothing with it",
        body: "Ask any business where their best customers come from and most say referral. Ask what they do to generate referrals and the answer is usually nothing.",
      },
      {
        label: "The margin is unmatched",
        body: "A referred customer arrives pre-qualified, converts faster and costs almost nothing to acquire.",
      },
      {
        label: "The ask is the whole difficulty",
        body: "Most businesses never ask, because asking feels awkward and nobody has decided when or how. Deciding that once removes the awkwardness.",
      },
    ],
    inputs: [
      "When customers are most satisfied, in the actual journey",
      "Who refers now, and why, if anyone knows",
      "What the client is willing to offer, if anything",
      "Regulatory constraints on incentives in their sector",
    ],
    outputs: [
      "A defined moment for the ask, tied to the customer journey",
      "The ask itself, written so it is easy to make and easy to accept",
      "An incentive structure, or a reasoned decision not to have one",
      "A follow-through path so a referral is not lost on arrival",
    ],
    sequence: [
      { title: "The agency finds the moment", body: "When satisfaction peaks, which is rarely when anyone remembers to ask.", lane: "agency" },
      { title: "The mechanism is structured", body: "Ask, moment, incentive and what happens next, defined rather than assumed.", lane: "mengo" },
      { title: "The ask is drafted", body: "Easy to make and easy to decline, which is what makes people willing to make it.", lane: "mengo" },
      { title: "The client decides on incentives", body: "A commercial and sometimes regulatory decision that belongs to them.", lane: "agency" },
      { title: "Follow-through is built", body: "A referral that arrives and is not handled promptly costs two relationships rather than one.", lane: "mengo" },
      { title: "The client's team runs it", body: "The ask comes from the person with the relationship.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether to incentivise", body: "In some sectors an incentive cheapens the referral and in others it is expected. Getting this wrong is worse than doing nothing." },
      { label: "When to ask", body: "Too early and it is presumptuous; too late and the feeling has faded. The moment is specific to the business." },
      { label: "Whether the service is good enough", body: "A referral programme on a mediocre service accelerates bad word of mouth, and saying so is the agency's job." },
    ],
    limits: [
      "It does not ask anyone. The request comes from the client's relationship with their customer.",
      "It does not track referrals, and attribution needs the client's own systems.",
      "It does not advise on the legality of incentives, which is regulated in several sectors.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Build your own before you sell it",
        situation: "Your first clients came through your network and you have no mechanism for generating more.",
        problem: "New agencies rely on referral entirely and do nothing to produce it, which makes growth a matter of luck.",
        mengo: ["A defined moment and ask for your own clients", "A follow-through path", "A decision about incentives"],
        agency: ["Making the ask, which is the difficult part", "Judging when the moment has arrived"],
        outcome: "Your own best channel becomes something you do rather than something you hope for.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "A high-return piece of work with no ongoing cost",
        situation: "You have limited hours and are looking for work with lasting effect rather than recurring effort.",
        problem: "Most marketing work requires continuous input. A referral mechanism is built once and runs.",
        mengo: ["A full mechanism per client from one pass", "The ask written so the client's team will actually use it", "Follow-through defined"],
        agency: ["Judging the right moment for this business", "The incentive conversation"],
        outcome: "A day of work that keeps producing for the client indefinitely.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "A programme the client's team actually runs",
        situation: "You built a referral mechanism and nobody at the client uses it.",
        problem: "Referral programmes fail on adoption rather than design, because asking feels awkward and nobody made it easy.",
        mengo: ["An ask short enough to be used verbatim", "A defined moment tied to their existing process", "Follow-through that does not depend on someone remembering"],
        agency: ["Adoption work with the client's team", "Reviewing whether the moment is right"],
        outcome: "A programme that runs rather than one that exists.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Referral mechanisms across a portfolio",
        situation: "Several clients could benefit and each would need building from scratch.",
        problem: "Bespoke referral design per client is disproportionate to a mechanism that is structurally similar everywhere.",
        mengo: ["A standard mechanism structure applied per client", "Consistent ask and follow-through patterns", "Incentive constraints recorded per sector"],
        agency: ["The moment, which is client-specific", "The incentive conversation with each client"],
        outcome: "A repeatable service rather than a bespoke project each time.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Referral programmes with regulatory care",
        situation: "Large clients in sectors where referral incentives are regulated — financial services, healthcare, legal.",
        problem: "Incentivised referral is restricted or prohibited in several regulated sectors, and the client carries the exposure.",
        mengo: ["Sector constraints recorded per programme", "Consistent structure across markets", "Auditable record of what was proposed"],
        agency: ["Compliance review with the client's function", "Judgement about whether to incentivise at all"],
        outcome: "Referral programmes that respect the sector's constraints.",
      },
    ],
    related: {
      capabilities: ["testimonials", "loyalty-programme", "whatsapp-nurturing", "email-templates"],
      workflows: ["referral-programme-workflow", "lead-nurturing-flows", "client-review"],
      useCases: ["improve-client-retention", "handle-more-clients"],
    },
    faqs: [
      {
        q: "Should referrals be incentivised?",
        a: "It depends entirely on the sector. In some, an incentive is expected and works; in others it cheapens the referral and makes the referrer uncomfortable. In regulated sectors it may be restricted outright. Ask before designing.",
      },
      {
        q: "Why do referral programmes usually fail?",
        a: "Adoption. The design is rarely the problem — nobody at the client asks, because asking feels awkward and no specific moment was defined. Making the ask short, easy and attached to a moment they already have is most of the work.",
      },
      {
        q: "What if the client's service is not good enough to refer?",
        a: "Then a referral programme accelerates negative word of mouth, and saying so is the more valuable contribution. It is a difficult conversation and a better one than building the mechanism anyway.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "loyalty-programme",
    title: "Loyalty Programme",
    navLabel: "Loyalty Programme",
    group: "programs",
    depth: "staged",
    headline: "Only worth it where people buy repeatedly",
    lead:
      "Structure and mechanics for a repeat-purchase incentive. Genuinely valuable for the businesses it suits and a waste of everyone's effort for the ones it does not, which is most of them.",
    summary:
      "Loyalty mechanics for repeat-purchase businesses, with an honest assessment of whether the client is one.",
    seoTitle: "Loyalty Programme — repeat-purchase mechanics for clients",
    seoDescription:
      "Loyalty programme structure and mechanics for repeat-purchase client businesses, including whether the client's model supports one at all.",
    updated: "2026-09-02",
    meaning:
      "The structure of a repeat-purchase incentive: what is rewarded, at what threshold, how it is communicated and what the economics are.",
    job: "Increase repeat purchase where repeat purchase is actually possible.",
    whyAgencies: [
      {
        label: "Retention is cheaper than acquisition and gets less attention",
        body: "Every client knows this and few act on it, because acquisition has a dashboard and retention has an intention.",
      },
      {
        label: "The economics are frequently not modelled",
        body: "Loyalty programmes routinely give margin to customers who would have returned anyway, and nobody checks.",
      },
      {
        label: "Most clients should not have one",
        body: "For a business with one-off high-value sales, a loyalty programme is effort spent on a mechanism that cannot fire.",
      },
    ],
    inputs: [
      "Actual repeat purchase behaviour, if the client has the data",
      "Margin, because the programme spends it",
      "What customers would genuinely value as a reward",
      "The client's ability to administer it",
    ],
    outputs: [
      "An honest assessment of whether the model supports a programme",
      "Mechanics: what is rewarded, at what threshold, in what form",
      "Communication content for enrolment and reward moments",
      "A view of what the programme costs in margin",
    ],
    sequence: [
      { title: "The agency assesses fit", body: "Does this business have repeat purchase at all? Usually the answer ends the conversation.", lane: "agency" },
      { title: "Mechanics are structured", body: "Reward, threshold and form, sized against the client's margin.", lane: "mengo" },
      { title: "Communication is drafted", body: "Enrolment, progress and reward moments, which is where most programmes lose people.", lane: "mengo" },
      { title: "The client models the economics", body: "What this costs in margin is their calculation and their decision.", lane: "agency" },
      { title: "The client administers it", body: "Programme administration and any platform is theirs.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the business supports one", body: "The most valuable judgement here, and it is usually negative." },
      { label: "What is worth rewarding", body: "Rewarding behaviour customers would exhibit anyway is giving away margin for nothing." },
      { label: "How complex to make it", body: "Programmes customers cannot understand do not change behaviour, and complexity is the most common failure." },
    ],
    limits: [
      "It does not administer programmes, track points or integrate with a till or a platform.",
      "It cannot model economics without the client's margin and repeat-purchase data.",
      "It does not advise on the consumer-protection rules that apply to loyalty schemes in some jurisdictions.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Your first clients probably do not qualify",
        situation: "A client mentions a loyalty scheme and their business has infrequent, high-value sales.",
        problem: "Building a loyalty programme for a business without repeat purchase is effort spent on a mechanism that cannot fire.",
        mengo: ["A fit assessment that answers the question quickly"],
        agency: ["Advising against, with reasoning"],
        outcome: "A short, well-reasoned no.",
        insteadDoThis:
          "Look at Referral Programme instead. For low-frequency businesses, referral is the mechanism that actually applies.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Only for the right client",
        situation: "You have an ecommerce or hospitality client with genuine repeat purchase.",
        problem: "For the right business this is valuable; for the wrong one it consumes weeks and produces nothing.",
        mengo: ["A fit assessment first", "Mechanics sized to the client's margin", "Communication for the moments that matter"],
        agency: ["The fit judgement", "Pushing the client to model the economics"],
        outcome: "A programme where the model supports one, and a clear no where it does not.",
        insteadDoThis:
          "Confirm repeat purchase exists before designing anything. If it does not, the conversation is about the business model rather than about marketing.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Retention work for the clients it suits",
        situation: "Several clients with repeat-purchase models and no retention mechanism.",
        problem: "Retention is under-served across the portfolio because acquisition is what clients ask about.",
        mengo: ["A repeatable fit assessment", "Standard mechanics structure", "Communication for enrolment and reward moments"],
        agency: ["Fit judgement per client", "The margin conversation"],
        outcome: "Retention becomes something you offer deliberately rather than when asked.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Programme design across a portfolio",
        situation: "Multiple clients with loyalty programmes at different levels of sophistication.",
        problem: "Each was designed independently, so the agency has learned nothing transferable from any of them.",
        mengo: ["Consistent mechanics structure across clients", "Fit assessments recorded", "Communication patterns reused"],
        agency: ["Fit judgement", "Economics conversations with each client"],
        outcome: "Programme design informed by what the agency has seen work.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Loyalty at scale, with the rules respected",
        situation: "Large retail or hospitality clients with substantial programmes across markets.",
        problem: "Loyalty schemes are subject to consumer-protection and data rules that vary by market, and the exposure is the client's.",
        mengo: ["Market-specific constraints recorded", "Consistent mechanics across regions", "Auditable communication records"],
        agency: ["Legal review with the client", "Governance over programme changes"],
        outcome: "Programmes that respect the rules of every market they run in.",
      },
    ],
    related: {
      capabilities: ["membership-plans", "referral-programme", "email-templates", "whatsapp-nurturing"],
      workflows: ["loyalty-programme-workflow", "lead-nurturing-flows"],
      useCases: ["improve-client-retention"],
    },
    faqs: [
      {
        q: "Which clients should have a loyalty programme?",
        a: "Ones with genuine repeat purchase — ecommerce, hospitality, consumables, subscriptions. For a business selling something once every seven years, the mechanism cannot fire and the effort is wasted.",
      },
      {
        q: "Do loyalty programmes actually change behaviour?",
        a: "Sometimes, and frequently they reward behaviour that would have happened anyway. That is why the economics need modelling by the client before the design work is worth doing.",
      },
      {
        q: "How complex should it be?",
        a: "Simple enough that a customer can explain it. Programmes people cannot understand do not change behaviour, and complexity is the most common way these fail.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "membership-plans",
    title: "Membership Plans",
    navLabel: "Membership Plans",
    group: "programs",
    depth: "staged",
    headline: "A business model change, not a marketing tactic",
    lead:
      "Structure and positioning for a recurring-revenue offer. This belongs in a conversation with the client's leadership about how the business works, not in a marketing plan.",
    summary:
      "Structure and positioning for a recurring-revenue membership — a commercial decision marketing then carries.",
    seoTitle: "Membership Plans — recurring revenue structure for clients",
    seoDescription:
      "Tier structure, positioning and communication for a client membership offer, treated as the business model decision it actually is.",
    updated: "2026-09-02",
    meaning:
      "The structure of a recurring-revenue offer: what tiers exist, what each includes, how they are priced relative to one another, and how the offer is positioned.",
    job: "Give a recurring-revenue offer a defensible structure.",
    whyAgencies: [
      {
        label: "Recurring revenue changes the business",
        body: "It changes cash flow, delivery obligations and how the business is valued. It is not a pricing experiment.",
      },
      {
        label: "Tier structure decides whether it works",
        body: "Badly structured tiers push everyone to the cheapest option or make the top one indefensible.",
      },
      {
        label: "The delivery obligation is permanent",
        body: "A membership creates an ongoing commitment. Clients who have not thought about servicing it at scale get into difficulty.",
      },
    ],
    inputs: [
      "What the client can deliver on an ongoing basis, sustainably",
      "What customers would pay recurrently for, as opposed to occasionally",
      "Margin and delivery capacity at volume",
      "Whether the client's leadership has actually decided to do this",
    ],
    outputs: [
      "A tier structure with a clear reason for each tier",
      "Positioning per tier — who each is for",
      "Communication for enrolment, upgrade and cancellation",
      "An explicit statement of the delivery obligation created",
    ],
    sequence: [
      { title: "The agency establishes it is a real decision", body: "Has leadership decided, or is this a marketing idea? The answer changes everything.", lane: "agency" },
      { title: "Tiers are structured", body: "Each with a reason to exist and a defined buyer.", lane: "mengo" },
      { title: "Positioning is drafted per tier", body: "Who each is for, so the tiers do not compete with each other.", lane: "mengo" },
      { title: "The client models delivery at volume", body: "What happens if this succeeds is their calculation and their risk.", lane: "agency" },
      { title: "Communication is built", body: "Enrolment, upgrade and — importantly — cancellation.", lane: "mengo" },
      { title: "The client commits", body: "A membership is a promise to customers. It needs a business decision, not a campaign.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the client should do this at all", body: "The most important judgement, and it belongs in a conversation with leadership rather than marketing." },
      { label: "How many tiers", body: "Three is usually right. More produces paralysis; fewer wastes the willingness to pay of the top segment." },
      { label: "What happens at scale", body: "A membership that succeeds creates a delivery obligation. Clients who have not modelled that get into trouble." },
    ],
    limits: [
      "It does not price anything. Pricing is commercial and belongs to the client.",
      "It does not handle billing, subscription management or churn tracking.",
      "It cannot assess whether the client can deliver at volume, which is the risk that matters most.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Well outside a first engagement",
        situation: "A client raises the idea of a membership offer.",
        problem: "This is a business model conversation requiring standing with the client's leadership that a new agency does not have.",
        mengo: ["A structure for the conversation, if you are asked into it"],
        agency: ["Recognising this is a leadership conversation, not a marketing one"],
        outcome: "An appropriate referral upward rather than a marketing project.",
        insteadDoThis:
          "Focus on the client's existing offer. If a membership is genuinely right for them, it will still be right in a year when you have the standing to advise on it.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Advise on the structure, not the decision",
        situation: "A trusted client has decided to launch a membership and wants help positioning it.",
        problem: "The structure is legitimately marketing work; the decision and the delivery risk are not.",
        mengo: ["Tier structure with a reason per tier", "Positioning per tier", "Enrolment and cancellation communication"],
        agency: ["Pushing the client to model delivery at volume", "The positioning judgement"],
        outcome: "A well-structured offer, with the commercial risk explicitly the client's.",
        insteadDoThis:
          "Make sure they have modelled what happens if it succeeds. That question is worth more than the positioning work.",
      },
      {
        stage: "small-team",
        relevance: "later",
        headline: "A strategic project, priced accordingly",
        situation: "Clients moving toward recurring revenue models and asking for help.",
        problem: "Membership work is strategic and slow, and absorbing it into retainer scope makes the account unprofitable.",
        mengo: ["Repeatable tier structure method", "Positioning and communication per tier", "Delivery obligation stated explicitly"],
        agency: ["Scoping and pricing it as strategic work", "The leadership conversation"],
        outcome: "Strategic work priced as strategic work.",
        insteadDoThis:
          "Price it separately and involve the client's leadership. A membership designed with the marketing contact alone will not survive contact with operations.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Recurring revenue advice as a capability",
        situation: "Several clients considering or running membership models.",
        problem: "Each is advised independently and the agency accumulates no view of what actually works.",
        mengo: ["Consistent tier structure method", "Positioning patterns across clients", "Delivery obligations recorded"],
        agency: ["Leadership conversations", "Judgement about fit"],
        outcome: "A genuine point of view on recurring revenue models, built from what you have seen.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Membership programmes with commercial governance",
        situation: "Large clients running substantial membership programmes across markets.",
        problem: "Subscription offers are subject to consumer-protection rules on renewal, cancellation and price changes in many markets.",
        mengo: ["Market-specific constraints recorded", "Consistent tier and communication structure", "Auditable record of terms communicated"],
        agency: ["Legal review with the client", "Governance over changes to terms"],
        outcome: "Membership programmes that meet each market's rules on renewal and cancellation.",
      },
    ],
    related: {
      capabilities: ["loyalty-programme", "products", "landing-page", "email-templates"],
      workflows: ["product-launch", "marketing-planning"],
      useCases: ["expand-service-offerings", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Is a membership a marketing decision?",
        a: "No, and treating it as one is why several fail. It changes cash flow, delivery obligations and how the business is valued. Marketing carries it; leadership decides it.",
      },
      {
        q: "How many tiers should there be?",
        a: "Usually three. More produces choice paralysis and a support burden; fewer leaves money on the table from the segment willing to pay for more. Each tier needs a reason to exist and a defined buyer.",
      },
      {
        q: "What is the most common failure?",
        a: "Not modelling delivery at volume. A membership that succeeds creates a permanent obligation to a growing number of people, and clients who have not thought about that end up either overwhelmed or reneging.",
      },
    ],
  },
];
