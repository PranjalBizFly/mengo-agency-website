import type { Capability } from "@/lib/types";

/**
 * Sales capabilities.
 *
 * Everything here sits at the point where marketing hands over to a person.
 * That handover is where attribution arguments start, and where a small amount
 * of structure removes most of them.
 */
export const salesCapabilities: Capability[] = [
  {
    kind: "capability",
    slug: "landing-page",
    title: "Landing Page",
    navLabel: "Landing Page",
    group: "sales",
    depth: "staged",
    headline: "The page a campaign sends people to",
    lead:
      "Structure, copy and the conversion logic behind a page built for one job. Most campaign underperformance is a landing page problem misattributed to the campaign, and it is one of the cheapest things to fix.",
    summary:
      "Purpose-built page structure and copy for a single offer and audience, rather than a homepage doing a campaign's job.",
    seoTitle: "Landing Page — conversion pages for client campaigns",
    seoDescription:
      "Landing page structure and copy built for one offer and one audience, with the sections a page needs derived from the objection rather than from a template.",
    updated: "2026-09-02",
    meaning:
      "A page with one job, one audience and one action: the structure, the copy, the objection handling and the conversion logic behind it.",
    job: "Give a campaign somewhere to land that was built for it.",
    whyAgencies: [
      {
        label: "Campaigns are blamed for page failures",
        body: "Traffic that arrives at a general page and does not convert is read as a traffic problem. It usually is not, and the misdiagnosis leads to more spend on the wrong thing.",
      },
      {
        label: "Template pages answer the wrong questions",
        body: "A page assembled from whatever sections a template offers addresses whatever those sections address, which is rarely this buyer's actual hesitation.",
      },
      {
        label: "It is fast, visible and measurable",
        body: "One of the few marketing changes where the effect is attributable and shows up within weeks.",
      },
    ],
    inputs: [
      "The single offer and the single audience the page addresses",
      "The objection that segment actually holds",
      "What the traffic source promised, so the page can continue rather than restart",
      "What proof the client can genuinely evidence",
    ],
    outputs: [
      "A page structure derived from the objection rather than from a template",
      "Copy for each section with a defined job",
      "The one action, stated the same way throughout",
      "Flags where a claim needs proof the client has not supplied",
    ],
    sequence: [
      { title: "The agency defines the one job", body: "A page with two objectives has none. This decision is the whole exercise.", lane: "agency" },
      { title: "Structure derives from the objection", body: "The sections a page needs follow from what this buyer hesitates over, not from a pattern library.", lane: "mengo" },
      { title: "Copy is drafted per section", body: "Each section written to do one thing, in the client's voice.", lane: "mengo" },
      { title: "Claims are flagged", body: "Anything requiring evidence is marked rather than asserted.", lane: "mengo" },
      { title: "The agency edits and approves", body: "Voice, accuracy and whether it is right for this client.", lane: "agency" },
      { title: "The agency builds and publishes", body: "In the client's own site or platform.", lane: "agency" },
    ],
    judgement: [
      { label: "What the page is for", body: "Clients want a page to do several things. Refusing that is the most valuable contribution here." },
      { label: "How much to ask for", body: "The size of the ask should match the buyer's readiness, and getting it wrong suppresses conversion invisibly." },
      { label: "Which proof is credible", body: "Weak proof is worse than none, and judging which is which requires knowing the audience." },
    ],
    limits: [
      "It does not build or host pages. Copy and structure only.",
      "It does not design, and layout matters for conversion.",
      "It cannot test. Testing needs traffic and an analytics setup that stays with the client.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "A first deliverable with a visible result",
        situation: "Your first client needs something that demonstrably works, quickly.",
        problem: "Most early marketing work takes a quarter to show anything, which is a long time to wait for confidence.",
        mengo: ["A structure derived from the client's actual buyer objection", "Section-by-section copy with a defined job", "Claims flagged where evidence is missing"],
        agency: ["Deciding the one job", "Building and publishing it"],
        outcome: "A measurable improvement in the client's first month.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "A page per campaign instead of one page for everything",
        situation: "You run campaigns for several clients, all pointing at homepages because building pages takes time you do not have.",
        problem: "Sending campaign traffic to a general page wastes the media spend, and the client sees the campaign as the failure.",
        mengo: ["Fast page structure and copy per campaign", "Objection-led sections rather than a repeated template", "Consistency with the campaign's promise"],
        agency: ["Building the pages", "Deciding which campaigns justify one"],
        outcome: "Campaigns land somewhere built for them without a week of work each time.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Pages that do not vary by who wrote them",
        situation: "Different people write landing pages using different structures and instincts.",
        problem: "Inconsistent conversion logic across a client's pages makes performance differences impossible to read.",
        mengo: ["A consistent objection-led method across the team", "Section jobs defined rather than assumed", "Comparable structure so results can be compared"],
        agency: ["Setting the method", "Reviewing against it"],
        outcome: "Page performance differences reflect the offer rather than the author.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Page volume without a bottleneck",
        situation: "Many campaigns across many accounts, each needing its own page.",
        problem: "Page production becomes a queue, and campaigns launch pointing at whatever exists.",
        mengo: ["Page structure and copy produced from the approved campaign brief", "Consistent method so review is fast", "Variants per segment where warranted"],
        agency: ["Review capacity, which becomes the constraint", "Build and deployment"],
        outcome: "Every campaign gets its own page rather than the important ones only.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Conversion methodology applied consistently",
        situation: "Multiple teams producing pages for the same clients across regions.",
        problem: "Without a shared method, page performance across a portfolio cannot be compared or learned from.",
        mengo: ["Uniform page structure derived from a documented method", "Recorded reasoning per section", "Consistent structure across teams and languages"],
        agency: ["Governance over the method", "Approval before publication"],
        outcome: "Conversion learning accumulates across the portfolio rather than per page.",
      },
    ],
    related: {
      capabilities: ["ads-management", "icps-and-personas", "sales-script", "website-planner"],
      workflows: ["campaign-planning", "ads-workflow", "new-client-launch"],
      useCases: ["deliver-campaigns-faster", "improve-sales-enablement"],
    },
    faqs: [
      {
        q: "Does this build the page?",
        a: "No. Structure and copy only. Build, design and hosting stay with you and the client, along with the analytics that tell you whether it worked.",
      },
      {
        q: "How many sections should a landing page have?",
        a: "As many as the objection requires and no more. A page for a low-consideration purchase may need three; one for a considered B2B purchase may need eight. Deriving it from the objection rather than a template is the point.",
      },
      {
        q: "Should every campaign have its own page?",
        a: "Every campaign with meaningful spend behind it, yes. Sending paid traffic to a general page is the most common and most expensive avoidable waste in small-agency campaign work.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "sales-script",
    title: "Sales Script",
    navLabel: "Sales Script",
    group: "sales",
    depth: "staged",
    headline: "The conversation, structured rather than improvised",
    lead:
      "Discovery questions, objection responses and the structure of a sales conversation. Not a word-for-word script — a shape, so the same conversation happens whoever is having it.",
    summary:
      "Discovery questions, objection responses and conversation structure so a client's sales conversations are consistent rather than improvised.",
    seoTitle: "Sales Script — structuring a client's sales conversation",
    seoDescription:
      "Discovery questions, objection responses and conversation structure for client sales teams, built from the real objection inventory rather than from assumption.",
    updated: "2026-09-02",
    meaning:
      "The structure of a sales conversation: what to establish, in what order, and how to respond to the objections that actually arise.",
    job: "Make the sales conversation consistent without making it robotic.",
    whyAgencies: [
      {
        label: "It closes the marketing-to-sales gap",
        body: "Marketing generates the conversation and then has no visibility of it. A structured conversation is where the positioning either survives or does not.",
      },
      {
        label: "The objection inventory is already yours",
        body: "You gathered it for segmentation and nurturing. Applying it to the live conversation is the highest-leverage reuse available.",
      },
      {
        label: "It reveals whether the marketing is right",
        body: "Objections raised in sales conversations are the most reliable feedback on the positioning that exists, and nobody collects it systematically.",
      },
    ],
    inputs: [
      "The real objections, from actual conversations",
      "How the client's best salesperson already handles them",
      "What must be established before a proposal is worth making",
      "Anything that cannot be claimed or promised",
    ],
    outputs: [
      "A discovery question set, ordered so the answers build",
      "Objection responses drawn from what already works",
      "Qualification criteria — when to walk away",
      "A conversation structure rather than a word-for-word script",
    ],
    sequence: [
      { title: "The agency observes what works now", body: "The client's best salesperson already handles objections well. Start there rather than from theory.", lane: "agency" },
      { title: "Structure is drafted", body: "Discovery ordered so each answer informs the next question.", lane: "mengo" },
      { title: "Objection responses are built", body: "From the real inventory, in the client's voice.", lane: "mengo" },
      { title: "The agency and client refine", body: "With the people who will use it, or it will not be used.", lane: "agency" },
      { title: "The client's team adopts it", body: "Adoption is a management problem, not a document problem.", lane: "agency" },
      { title: "Objections feed back", body: "New objections from live conversations update the inventory, which updates the marketing.", lane: "agency" },
    ],
    judgement: [
      { label: "How prescriptive to be", body: "Word-for-word scripts get abandoned. Structure gets used. The balance depends on the team's experience." },
      { label: "When to disqualify", body: "Teaching a sales team to end a conversation early is worth more than teaching them to push, and it is a harder sell." },
      { label: "Whether an objection is real", body: "Stated objections are often proxies. 'Too expensive' usually means something else, and knowing what takes experience." },
    ],
    limits: [
      "It does not train anyone. Delivery is coaching, which is a separate discipline.",
      "It cannot make a sales team use it, and adoption is where most of these fail.",
      "It has no access to the client's CRM or call recordings.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Write your own sales conversation first",
        situation: "You are selling your own agency and improvising every conversation.",
        problem: "New agency founders have inconsistent sales conversations and cannot tell which version works because none of them repeat.",
        mengo: ["A discovery structure for your own sales calls", "Responses to the objections you keep hearing", "Qualification criteria so you stop chasing bad fits"],
        agency: ["Having the conversations", "Recording what actually gets said"],
        outcome: "Your own sales conversation becomes repeatable, which is also how you learn what to fix.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Close the loop between marketing and the actual conversation",
        situation: "You generate enquiries for clients and never hear what happens in the conversations that follow.",
        problem: "Without that feedback you are optimising the marketing blind, and the client concludes the leads are poor.",
        mengo: ["A structure that makes objections visible and recorded", "Responses built from the real inventory", "A feedback route from conversations back into the positioning"],
        agency: ["Getting access to the sales conversation, which is a relationship ask", "Judging what the objections mean"],
        outcome: "You find out what buyers actually say, which changes the marketing.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Sales enablement as a service line",
        situation: "Clients receive enquiries and convert them inconsistently, and blame the enquiries.",
        problem: "Agencies are judged on outcomes they do not control, and the handover is usually where the loss is.",
        mengo: ["Conversation structure per client", "Objection responses aligned to the marketing message", "Qualification criteria"],
        agency: ["The conversation with the client's sales function", "Judging where the actual loss is"],
        outcome: "You can address the conversion problem rather than only the traffic.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Consistent enablement across client sales teams",
        situation: "Several clients with sales teams, each with different structures and none documented.",
        problem: "Each engagement rebuilds the approach, and the objection inventories are not connected to the marketing work.",
        mengo: ["A repeatable enablement structure per client", "Objection inventories shared between marketing and sales material", "Consistent qualification criteria"],
        agency: ["Client sales leadership relationships", "Adoption management"],
        outcome: "Sales enablement becomes a defined service rather than a favour.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Message consistency into large sales functions",
        situation: "Large client sales organisations where the marketing message and the sales conversation have drifted apart.",
        problem: "At scale, the sales conversation is what buyers actually experience, and it frequently bears little relation to the positioning.",
        mengo: ["Conversation structure derived from the approved message hierarchy", "Role and segment variants", "Consistent structure across regions"],
        agency: ["Coordination with the client's sales enablement function", "Governance over claims made in conversation"],
        outcome: "The positioning survives contact with the sales floor.",
      },
    ],
    related: {
      capabilities: ["icps-and-personas", "sales-collateral", "intro-scripts", "presentations-and-pitches"],
      workflows: ["sales-enablement", "lead-nurturing-flows"],
      useCases: ["improve-sales-enablement", "get-the-first-client"],
    },
    faqs: [
      {
        q: "Should this be word-for-word?",
        a: "Almost never. Word-for-word scripts get abandoned by anyone experienced and sound wrong when used by anyone else. A structure — what to establish, in what order, and how to handle the predictable objections — is what actually gets used.",
      },
      {
        q: "We do not have access to the client's sales team.",
        a: "Ask for it, and be specific about why. An hour with their best salesperson is the highest-value hour available to a marketing engagement, and framing it as improving the marketing rather than auditing sales usually gets the meeting.",
      },
      {
        q: "Is this really marketing's job?",
        a: "The boundary is arbitrary and the client does not care where it sits. If the marketing generates conversations and the conversations do not convert, the agency is being judged on it either way.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "whatsapp-nurturing",
    title: "WhatsApp Nurturing",
    navLabel: "WhatsApp Nurturing",
    group: "sales",
    depth: "staged",
    headline: "Follow-up in the channel people actually read",
    lead:
      "Objection-led sequences written for messaging rather than pasted from email. Most businesses lose more leads to silence than to competitors, and messaging is where the silence is most easily broken — and most easily overdone.",
    summary:
      "Objection-led follow-up sequences written for messaging, loaded into the client's own sending platform.",
    seoTitle: "WhatsApp Nurturing — messaging follow-up for client enquiries",
    seoDescription:
      "Objection-led nurture sequences written for messaging rather than adapted from email, with sending, consent and deliverability staying with the client.",
    updated: "2026-09-02",
    meaning:
      "Follow-up sequences designed for messaging: shorter, more conversational, paced to the buying cycle, and built around objections rather than around a countdown.",
    job: "Turn 'we will follow up' from an intention into a built, reviewable sequence.",
    whyAgencies: [
      {
        label: "Silence loses more deals than competitors do",
        body: "Nearly every business writes an excellent first reply and no fifth one. The gap is where most enquiries die.",
      },
      {
        label: "Messaging is read and email frequently is not",
        body: "In many markets messaging is the primary channel, and open rates are not comparable to email.",
      },
      {
        label: "Email copy pasted into a chat reads as a broadcast",
        body: "It is the fastest way to get a client's number blocked, and it is the most common mistake in this channel.",
      },
    ],
    inputs: [
      "The real enquiry journey, including the parts nobody is proud of",
      "Objections from the client's sales reality",
      "The buying cycle length, which sets the cadence",
      "Which platform the client sends from, and what consent they hold",
    ],
    outputs: [
      "A sequence per segment, ordered by objection rather than by schedule",
      "Messages written for a chat thread, not an inbox",
      "Cadence matched to the actual buying cycle",
      "Re-engagement flows for contacts who have gone quiet",
    ],
    sequence: [
      { title: "The agency maps what happens now", body: "Honestly, including the enquiries answered on Thursday if someone remembers.", lane: "agency" },
      { title: "Objections are collected", body: "From the client's sales team. Assumed objections produce sequences answering questions nobody asked.", lane: "agency" },
      { title: "Sequences are drafted per segment", body: "Each message with a defined job, ordered by objection.", lane: "mengo" },
      { title: "Cadence is set to the cycle", body: "A same-day purchase and a nine-month sale are different rhythms.", lane: "mengo" },
      { title: "The agency reviews tone and claims", body: "Messaging is intimate. Tone errors here are more costly than in email.", lane: "agency" },
      { title: "The agency verifies consent and loads", body: "Into the client's own platform, under their consent record.", lane: "agency" },
    ],
    judgement: [
      { label: "Where persistence becomes harassment", body: "The line is closer in messaging than in email, and crossing it damages the client's reputation and their number." },
      { label: "Consent and compliance", body: "Who may be contacted, on what basis, in which jurisdiction. A legal question owned by the agency and client." },
      { label: "When to stop", body: "A sequence that repeats the pitch louder each time is worse than a shorter one that stops." },
    ],
    limits: [
      "It does not send. Messaging goes out through the client's own platform, where deliverability and consent live.",
      "It does not hold contact lists or decide who is eligible.",
      "It does not provide legal advice on messaging consent, which is regulated and varies by jurisdiction.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "The scope item you can actually deliver",
        situation: "Your first client generates enquiries and follows up inconsistently.",
        problem: "New agencies promise nurturing and deliver a single follow-up email, because building sequences is unglamorous work with no deadline.",
        mengo: ["A sequence per segment built from real objections", "Messages written for the channel", "Re-engagement for the existing quiet list"],
        agency: ["Getting the real objections from the client", "Checking consent before anything is loaded"],
        outcome: "The nurturing you promised actually exists.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "The work that never reaches the top of the week",
        situation: "Nurturing is in scope for several clients and has been built for none of them.",
        problem: "It has no deadline and no client asking, so it loses to everything that does — indefinitely.",
        mengo: ["Sequences built per client from stored segments and objections", "Cadence derived from each client's cycle", "Re-engagement flows for dormant lists"],
        agency: ["Reviewing tone before activation", "Consent verification"],
        outcome: "The most-promised, least-built scope item gets built.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Consistent follow-up anatomy across clients",
        situation: "Different people build sequences differently, so reviewing one means reading all of it.",
        problem: "Inconsistent structure makes review slow and quality invisible until a client complains about tone.",
        mengo: ["One sequence anatomy across accounts", "Objection-led ordering as standard", "Structure a reviewer can scan"],
        agency: ["Tone review, which stays human", "Consent checks per client"],
        outcome: "Sequences can be reviewed in minutes rather than rebuilt.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Nurturing across a portfolio without a compliance incident",
        situation: "Many clients, multiple jurisdictions, different consent bases.",
        problem: "Messaging consent is regulated and enforcement is real. An error is the client's legal exposure and your reputational one.",
        mengo: ["Consent basis recorded per client and per segment", "Consistent structure so review is fast", "Jurisdiction noted per sequence"],
        agency: ["Consent verification as a required step", "Escalation where the basis is unclear"],
        outcome: "Volume without a consent incident.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Governed messaging programmes",
        situation: "Large clients running messaging at scale across regions with different regulatory regimes.",
        problem: "At this scale messaging compliance is a board-level risk for the client, and informal process is indefensible.",
        mengo: ["Auditable sequence records with consent basis per segment", "Uniform structure across teams and regions", "Recorded approval before activation"],
        agency: ["Legal review with the client's counsel", "Governance over what may be sent"],
        outcome: "Messaging programmes with the compliance trail the risk requires.",
      },
    ],
    related: {
      capabilities: ["icps-and-personas", "email-templates", "sales-script", "landing-page"],
      workflows: ["lead-nurturing-flows", "sales-enablement", "client-onboarding"],
      useCases: ["improve-sales-enablement", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Which platforms does this work with?",
        a: "Sequences are produced as content and structure for you to load into whatever the client already uses. That is a deliberate boundary: sending platforms own deliverability and consent, and moving those is a much larger decision than adopting a planning layer.",
      },
      {
        q: "Who is responsible for consent?",
        a: "The agency and the client, according to their contract. Nothing here sends, holds lists or decides eligibility — which is precisely why that responsibility cannot sit anywhere else.",
      },
      {
        q: "How long should a sequence be?",
        a: "As long as it has something useful to say. A sequence that repeats the pitch louder each time is worse than a shorter one that stops, and in messaging the tolerance is lower than in email.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "sales-collateral",
    title: "Sales Collateral",
    navLabel: "Sales Collateral",
    group: "sales",
    depth: "staged",
    headline: "What a salesperson sends after the call",
    lead:
      "One-pagers, comparison sheets, proposal sections and the answers to questions that come up every time. Usually produced by whoever needed one, stored on their laptop, and inconsistent with everything else.",
    summary:
      "The documents a salesperson sends after a conversation — produced once, consistently, instead of improvised per deal.",
    seoTitle: "Sales Collateral — the material sent after a sales call",
    seoDescription:
      "One-pagers, comparison sheets and proposal sections produced consistently rather than improvised per deal, aligned to the marketing message.",
    updated: "2026-09-02",
    meaning:
      "The written material used during and after a sales conversation: capability summaries, comparison sheets, objection responses in writing, and reusable proposal components.",
    job: "Stop every salesperson writing their own version of the same document.",
    whyAgencies: [
      {
        label: "It is where the message drifts furthest",
        body: "Collateral written by individual salespeople under deadline bears the least resemblance to the agreed positioning of anything a client produces.",
      },
      {
        label: "The same documents are rewritten constantly",
        body: "A comparison sheet or a capability summary gets recreated per deal because nobody can find the last one.",
      },
      {
        label: "It is read at the moment of decision",
        body: "This material is forwarded to people who were not on the call — often the actual decision-maker — which makes it disproportionately important.",
      },
    ],
    inputs: [
      "What salespeople are currently sending, including their personal versions",
      "The questions that come up in every deal",
      "The approved positioning and message hierarchy",
      "What may and may not be claimed in writing",
    ],
    outputs: [
      "A collateral set covering the recurring needs",
      "Written objection responses that match the spoken ones",
      "Reusable proposal components rather than a template to fill in",
      "A record of what may be claimed, with evidence requirements",
    ],
    sequence: [
      { title: "The agency audits what is in circulation", body: "Including the unofficial versions, which are usually most of it.", lane: "agency" },
      { title: "Recurring needs are identified", body: "The four documents that account for most of what gets sent.", lane: "mengo" },
      { title: "Collateral is drafted", body: "Aligned to the approved message hierarchy rather than to each author's instinct.", lane: "mengo" },
      { title: "Claims are flagged", body: "Written claims are more durable and more consequential than spoken ones.", lane: "mengo" },
      { title: "The agency reviews", body: "For accuracy, tone and consistency with everything else the client publishes.", lane: "agency" },
      { title: "The sales team adopts it", body: "Which requires it being easier to find than writing their own.", lane: "agency" },
    ],
    judgement: [
      { label: "Which documents matter", body: "A sales function needs four good ones, not twenty mediocre ones, and identifying the four is the exercise." },
      { label: "How much latitude to allow", body: "Salespeople will adapt material. Designing for that is better than prohibiting it." },
      { label: "What can be claimed in writing", body: "Written claims are quotable and durable. The bar is higher than for a conversation." },
    ],
    limits: [
      "It does not design documents, and collateral design affects credibility.",
      "It cannot make a sales team use it, and adoption is the whole difficulty.",
      "It does not verify claims about performance or capability.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Write your own collateral before you sell the service",
        situation: "You are pitching your own agency and writing each proposal from scratch.",
        problem: "New agency founders spend disproportionate time on proposals and produce inconsistent ones.",
        mengo: ["Reusable proposal components for your own pitches", "Written answers to the questions you keep getting", "A capability summary you can send"],
        agency: ["Deciding what your agency actually offers", "The proposal conversation"],
        outcome: "Proposals assembled rather than written, and consistent between them.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "A small piece of work with lasting effect",
        situation: "Your client's salespeople each send different documents, none of which reflect the positioning you built.",
        problem: "The positioning work is undone at the point of decision by material nobody reviewed.",
        mengo: ["A collateral set aligned to the message hierarchy", "Written objection responses", "Claims flagged for evidence"],
        agency: ["The audit conversation with the sales team", "Review before circulation"],
        outcome: "The material sent at the decision point says what the marketing says.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Collateral that stays current",
        situation: "You produced a collateral set and it is already eighteen months out of date.",
        problem: "Collateral produced as a project goes stale; collateral generated from maintained records does not.",
        mengo: ["Material derived from the current positioning and offer records", "Updates that follow from a change upstream", "Version visibility"],
        agency: ["Deciding when a change warrants recirculating", "Review of anything customer-facing"],
        outcome: "Collateral that reflects the client's current offer rather than last year's.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Consistent collateral across client sales teams",
        situation: "Several clients with sales functions, each producing their own material.",
        problem: "At this scale unofficial collateral is guaranteed, and the agency has no visibility of what is being sent.",
        mengo: ["A standard collateral inventory per client", "Consistent structure across accounts", "Claim requirements recorded per client"],
        agency: ["Adoption work with each sales function", "Judging what each client needs"],
        outcome: "The agency knows what is being sent in its clients' names.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Governed sales material at enterprise scale",
        situation: "Large client sales organisations across regions, in regulated sectors.",
        problem: "Written claims in sales material carry regulatory weight in several sectors, and distributed authorship is a real exposure.",
        mengo: ["Canonical collateral derived from approved messaging", "Claim evidence requirements recorded per item", "Uniform structure across regions"],
        agency: ["Compliance review with the client's function", "Governance over what may be produced locally"],
        outcome: "Sales material with a defensible provenance.",
      },
    ],
    related: {
      capabilities: ["sales-script", "presentations-and-pitches", "case-studies", "faq-bank"],
      workflows: ["sales-enablement", "client-onboarding"],
      useCases: ["improve-sales-enablement"],
    },
    faqs: [
      {
        q: "How many pieces of collateral does a sales team need?",
        a: "Four good ones beats twenty mediocre ones. A capability summary, a comparison sheet, a written objection response set and reusable proposal components covers most of what is actually sent.",
      },
      {
        q: "Salespeople always write their own anyway. How do we stop that?",
        a: "Make the official version easier to find and better than what they would produce in twenty minutes. Prohibition fails; convenience works. If they still write their own, the official version is not good enough.",
      },
      {
        q: "Who approves claims in sales collateral?",
        a: "The client, and in regulated sectors their compliance function. Written claims are quotable and durable, so the bar is higher than for a spoken conversation.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "presentations-and-pitches",
    title: "Presentations & Pitches",
    navLabel: "Presentations & Pitches",
    group: "sales",
    depth: "staged",
    headline: "The deck, structured around the argument",
    lead:
      "Narrative structure, content per slide and the argument the deck is making. Most business presentations are a document read aloud, which is why the audience reads ahead and stops listening.",
    summary:
      "Presentation narrative and slide content structured around an argument rather than assembled from available material.",
    seoTitle: "Presentations & Pitches — structuring the client's deck",
    seoDescription:
      "Presentation narrative and slide-level content built around the argument being made, for pitches, board updates and client presentations.",
    updated: "2026-09-02",
    meaning:
      "The narrative and content of a presentation: what argument it makes, in what order, and what belongs on a slide versus what belongs in the speaker's mouth.",
    job: "Make a deck an argument rather than a document.",
    whyAgencies: [
      {
        label: "Most decks have no argument",
        body: "They have sections. An audience given sections reads ahead and disengages; an audience following an argument stays with the speaker.",
      },
      {
        label: "Slides carrying everything defeat the presenter",
        body: "A slide with the full text is a document. The audience reads it faster than the speaker talks, and the speaker becomes redundant.",
      },
      {
        label: "Pitches are high-stakes and under-prepared",
        body: "A pitch deck determines large commercial outcomes and is routinely assembled the night before from previous decks.",
      },
    ],
    inputs: [
      "The single argument the presentation is making",
      "Who is in the room and what they need to conclude",
      "What the presenter is comfortable saying without a slide",
      "The decision being asked for",
    ],
    outputs: [
      "A narrative structure with the argument stated explicitly",
      "Slide-level content, with the speaker's material separated from the slide's",
      "The ask, made clearly and once",
      "Anticipated questions and prepared responses",
    ],
    sequence: [
      { title: "The agency establishes the argument", body: "One sentence. If it cannot be written, the deck should not be built yet.", lane: "agency" },
      { title: "The narrative is structured", body: "An order that builds toward the ask rather than covering topics.", lane: "mengo" },
      { title: "Slide and speaker content are separated", body: "What is on the slide and what the presenter says are different things.", lane: "mengo" },
      { title: "Questions are anticipated", body: "The predictable challenge, prepared for rather than improvised.", lane: "mengo" },
      { title: "The agency adapts to the presenter", body: "A deck that does not suit the speaker will be abandoned mid-presentation.", lane: "agency" },
      { title: "The presenter rehearses", body: "Out loud, with the slides. This is what separates a good deck from a good presentation.", lane: "agency" },
    ],
    judgement: [
      { label: "What the argument is", body: "The hardest and most valuable step. Most decks fail here and no amount of slide design recovers it." },
      { label: "What to leave off the slide", body: "Restraint is what makes a deck work, and it is consistently resisted by everyone in the room." },
      { label: "How to handle the hostile question", body: "Judgement about the audience and the stakes, and it needs rehearsal rather than a script." },
    ],
    limits: [
      "It does not design slides, and presentation design materially affects credibility.",
      "It does not coach delivery.",
      "It cannot make a weak proposition compelling, and structure applied to a bad argument produces a well-organised bad argument.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Your pitch deck is your most important asset",
        situation: "You are pitching for early clients with a deck assembled from what you had.",
        problem: "New agencies pitch capability rather than making an argument, and capability decks are interchangeable.",
        mengo: ["A narrative structure built around one argument", "Slide and speaker content separated", "Anticipated objections prepared"],
        agency: ["Deciding what your argument actually is", "Rehearsing it"],
        outcome: "A pitch that makes an argument rather than listing services.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Client decks that stop taking a week",
        situation: "Clients ask for presentations for board meetings and pitches, and each takes days.",
        problem: "Deck work expands to fill available time and rarely gets scoped properly.",
        mengo: ["Narrative structure from the argument", "Slide content per section", "Reusable structures across similar presentations"],
        agency: ["Establishing the argument with the client", "Adapting to the presenter"],
        outcome: "Decks scoped to days rather than weeks.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Consistent deck quality across the team",
        situation: "Different people build client presentations with different structures and standards.",
        problem: "Presentation quality varying by author is visible to the client's leadership, which is the audience that matters most.",
        mengo: ["A consistent narrative method", "Separated slide and speaker content as standard", "Structures reusable across clients"],
        agency: ["Setting the standard", "Reviewing the argument before the slides"],
        outcome: "Every deck makes an argument, whoever built it.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Pitch decks that draw on what the agency knows",
        situation: "New business pitches are built from scratch by whoever is leading them.",
        problem: "Each pitch reinvents structure the agency has used successfully before, and nothing accumulates.",
        mengo: ["Reusable pitch narrative structures", "Consistent argument-first method", "A record of what has been used"],
        agency: ["The specific argument per pitch", "Rehearsal and delivery"],
        outcome: "Pitch preparation compounds rather than restarting.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Presentation standards across teams and regions",
        situation: "Client presentations produced by many teams for the same client organisations.",
        problem: "Inconsistent presentation quality across teams is one of the most visible signs of an agency that has outgrown its process.",
        mengo: ["Uniform narrative structure across teams", "Consistent separation of slide and speaker content", "Reusable components"],
        agency: ["Governance over the standard", "Senior review of high-stakes presentations"],
        outcome: "Consistent presentation quality regardless of which team produced it.",
      },
    ],
    related: {
      capabilities: ["sales-collateral", "sales-script", "intro-scripts", "stationery"],
      workflows: ["sales-enablement", "client-review"],
      useCases: ["improve-sales-enablement", "get-the-first-client"],
    },
    faqs: [
      {
        q: "How many slides should a pitch be?",
        a: "As many as the argument needs, which is usually fewer than the deck currently has. The better question is whether the argument can be stated in one sentence — if not, the slide count is not the problem.",
      },
      {
        q: "Does this design the deck?",
        a: "No. Narrative and content only. Design matters for credibility and is a separate discipline, and a well-argued badly designed deck still beats the reverse.",
      },
      {
        q: "What is the most common mistake?",
        a: "Putting everything on the slide. The audience reads faster than the presenter speaks, so a complete slide makes the presenter redundant. Separating what is shown from what is said is the single biggest improvement available.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "sales-performance",
    title: "Sales Performance",
    navLabel: "Sales Performance",
    group: "sales",
    depth: "staged",
    headline: "Reading what happened after the handover",
    lead:
      "Structuring the review of what converted, what did not and why. Not analytics — a framework for the conversation that connects marketing activity to commercial outcome, which is the conversation agencies are usually excluded from.",
    summary:
      "A structure for reviewing conversion honestly, connecting marketing activity to what actually happened after the handover.",
    seoTitle: "Sales Performance — reviewing what happened after the handover",
    seoDescription:
      "A structure for reviewing client conversion honestly: what converted, what did not, and what the marketing should change as a result.",
    updated: "2026-09-02",
    meaning:
      "A framework for reviewing sales outcomes in a way that informs marketing: what converted, what stalled, what objections recurred, and what should change.",
    job: "Connect what marketing did to what actually happened, honestly.",
    whyAgencies: [
      {
        label: "Agencies are judged on numbers they do not see",
        body: "Clients assess marketing on revenue while the agency sees traffic and enquiries. That gap is where relationships end.",
      },
      {
        label: "Attribution is genuinely hard and usually oversold",
        body: "An agency that reads attribution honestly, including its limits, is more credible than one presenting a clean story that does not survive scrutiny.",
      },
      {
        label: "Lost deals are the best marketing feedback available",
        body: "Why someone did not buy is more informative than why someone did, and almost nobody collects it.",
      },
    ],
    inputs: [
      "Outcome data the client is willing to share",
      "Reasons for loss, from the sales team rather than from a CRM field",
      "What marketing activity preceded each outcome",
      "The success criteria agreed at the start, if any were",
    ],
    outputs: [
      "A structured review connecting activity to outcome, with confidence stated",
      "Recurring loss reasons, fed back into positioning and objection inventories",
      "An honest statement of what cannot be attributed",
      "Specific changes proposed for the next period",
    ],
    sequence: [
      { title: "The agency agrees what is being measured", body: "Before the period, not after. This is what makes the review informative rather than defensive.", lane: "agency" },
      { title: "Outcomes are structured against activity", body: "What ran, what followed, and how confidently the two can be connected.", lane: "mengo" },
      { title: "Confidence is stated explicitly", body: "Where attribution is weak, the review says so rather than implying certainty.", lane: "mengo" },
      { title: "Loss reasons are collected", body: "From the sales team, in conversation. CRM loss fields are almost always wrong.", lane: "agency" },
      { title: "The agency draws conclusions", body: "Including that something did not work, which is the finding clients need most.", lane: "agency" },
      { title: "Findings feed back upstream", body: "Recurring objections update the segments, the positioning and the nurturing.", lane: "mengo" },
    ],
    judgement: [
      { label: "What the numbers actually support", body: "Reading attribution honestly, including when it does not support the story anyone wants." },
      { label: "Whether the loss reason is real", body: "Recorded loss reasons are usually the easiest thing to write rather than what happened." },
      { label: "How to present a bad quarter", body: "Naming the failure before the client does is the single most trust-building move available." },
    ],
    limits: [
      "It has no access to the client's CRM, analytics or revenue data. Everything is what the client supplies.",
      "It cannot establish causation, and marketing attribution is genuinely difficult rather than merely unmeasured.",
      "It does not forecast.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Agree what success means before you start",
        situation: "Your first client has not defined what a good outcome looks like, and neither have you.",
        problem: "Undefined success means every review is a negotiation about what should have happened, which you will lose.",
        mengo: ["A structure for agreeing criteria up front", "A review format that reports against them", "Explicit statements of what cannot be attributed"],
        agency: ["Having the criteria conversation early", "Presenting results honestly"],
        outcome: "Reviews that report against something agreed rather than argued.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "A defensible answer to 'is this working'",
        situation: "Clients ask whether the marketing is working and you have traffic numbers and an instinct.",
        problem: "Without a structured answer the conversation drifts to whichever number looks best, which is not a durable position.",
        mengo: ["A consistent review structure per client", "Confidence stated per claim", "Loss reasons fed back into the positioning"],
        agency: ["Getting outcome data from the client, which is a relationship ask", "The honest reading"],
        outcome: "A credible answer, including when the answer is that it is too early to tell.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Consistent reporting across accounts",
        situation: "Each account lead reports differently, selecting whichever metrics suit.",
        problem: "Inconsistent reporting makes the agency's performance invisible internally and its claims unreliable externally.",
        mengo: ["One review structure across accounts", "Comparable confidence statements", "Recurring loss reasons visible across the book"],
        agency: ["Setting the reporting standard", "Difficult conversations with clients"],
        outcome: "Reporting that can be compared and trusted.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Portfolio-level learning from outcomes",
        situation: "Enough accounts that patterns exist across sectors, invisible because each is reviewed separately.",
        problem: "The agency accumulates experience without accumulating knowledge.",
        mengo: ["Consistent outcome structure across accounts", "Recurring patterns visible at portfolio level", "Loss reasons aggregated by sector"],
        agency: ["Confidentiality between accounts", "Judging what constitutes a real pattern"],
        outcome: "What the agency learns on one account becomes available to the others.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Defensible performance reporting to client leadership",
        situation: "Large clients whose leadership will scrutinise attribution claims closely.",
        problem: "Overstated attribution does not survive scrutiny, and being caught overstating costs more than a weak quarter.",
        mengo: ["Recorded methodology per claim", "Explicit confidence levels", "Uniform reporting structure across teams"],
        agency: ["Senior ownership of the conclusions", "The conversation when results are poor"],
        outcome: "Performance claims that survive a finance director reading them.",
      },
    ],
    related: {
      capabilities: ["sales-script", "icps-and-personas", "whatsapp-nurturing", "landing-page"],
      workflows: ["client-reporting", "client-review", "sales-enablement"],
      useCases: ["improve-client-retention", "improve-sales-enablement"],
    },
    faqs: [
      {
        q: "Does this connect to the client's CRM?",
        a: "No. It has no access to their systems. Outcome data is an input the client supplies, and structuring the conversation around what they will share is part of the exercise.",
      },
      {
        q: "Clients will not share revenue data. What then?",
        a: "Work with what they will share and state the limitation explicitly. A review that says 'we can see enquiries but not conversion, so here is what we can and cannot conclude' is more credible than one that implies more than it knows.",
      },
      {
        q: "How honest should a bad quarter be?",
        a: "Completely, and early in the meeting. Naming a failure before the client does is the most trust-building move available, and delaying it only demonstrates that you hoped to avoid the conversation.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "video-content",
    title: "Video Content",
    navLabel: "Video Content",
    group: "sales",
    depth: "staged",
    headline: "Scripts and structure, not production",
    lead:
      "Concepts, scripts and shot structure for video. Production, filming and editing are a separate discipline with separate costs, and being clear about that boundary prevents an expensive misunderstanding.",
    summary:
      "Video concepts, scripts and structure. Production, filming and editing stay with specialists.",
    seoTitle: "Video Content — scripts and structure for client video",
    seoDescription:
      "Video concepts, scripts and shot structure for client marketing, with filming, production and editing remaining a separate discipline.",
    updated: "2026-09-02",
    meaning:
      "The pre-production layer of video: the concept, the script, the structure and the shot list a producer works from.",
    job: "Make video briefs specific enough that production does not become discovery.",
    whyAgencies: [
      {
        label: "Vague briefs make production expensive",
        body: "A shoot that begins without an agreed script becomes an exploration, and exploration on a shoot day costs more than anything else in marketing.",
      },
      {
        label: "The first seconds decide everything on feed platforms",
        body: "Most video scripts spend the opening establishing context that nobody stays for.",
      },
      {
        label: "Repurposing is planned or it does not happen",
        body: "One shoot can produce a dozen assets if the structure was designed for it, and produces one if it was not.",
      },
    ],
    inputs: [
      "What the video is for and where it will be seen",
      "The single message it carries",
      "Production constraints: budget, location, who is on camera",
      "What else the shoot should capture while everyone is there",
    ],
    outputs: [
      "A concept with the message and the audience stated",
      "A script written for speech, timed to the platform",
      "A shot structure a producer can work from",
      "A repurposing plan for the same footage",
    ],
    sequence: [
      { title: "The agency defines the purpose", body: "Where it will be seen and what it has to achieve. This determines everything else.", lane: "agency" },
      { title: "The concept is drafted", body: "One message, appropriate to the platform's actual viewing behaviour.", lane: "mengo" },
      { title: "The script is written for speech", body: "Timed, and structured so the opening earns the next five seconds.", lane: "mengo" },
      { title: "Repurposing is planned", body: "What else this shoot captures, decided before the shoot rather than regretted after.", lane: "mengo" },
      { title: "The agency and client approve", body: "Before anyone books a crew. Changes after this point are expensive.", lane: "agency" },
      { title: "Production runs it", body: "Filming, direction and editing are a separate discipline entirely.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether video is the right format", body: "Video is expensive. Recommending a written asset instead is often the better advice and is rarely given." },
      { label: "What works on camera", body: "Scripts that read well are frequently unspeakable, and knowing the difference takes experience." },
      { label: "Who should be on camera", body: "Not everyone should. This is a judgement about the person as much as the message." },
    ],
    limits: [
      "It does not produce, film, direct or edit anything.",
      "It cannot assess whether a location or a person will work on camera.",
      "It does not handle music licensing, releases or clearances.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Do not sell video you cannot produce",
        situation: "A client asks about video and you can write a script but not shoot anything.",
        problem: "Selling video without a production route means subcontracting at a margin you did not plan for, or delivering something amateur.",
        mengo: ["Scripts and structure, if the client has production"],
        agency: ["Being clear about what you provide", "Finding a production partner before selling"],
        outcome: "A clear boundary rather than an overcommitment.",
        insteadDoThis:
          "If the client needs video, help them brief a producer properly. A good brief is a genuine contribution and does not require you to own a camera.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Scripts for footage the client already has",
        situation: "A client shoots their own content on a phone and it is unstructured.",
        problem: "Client-shot video is usually unusable because nobody planned it, not because of the camera.",
        mengo: ["Simple scripts and structure for self-shot content", "A repurposing plan for what they capture", "Platform-appropriate timing"],
        agency: ["Judging what the client can realistically produce", "Reviewing before it goes out"],
        outcome: "Self-shot content that is structured rather than improvised.",
        insteadDoThis:
          "Focus on structuring what the client can already produce themselves. That is achievable and useful; brokering production is neither at this scale.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Briefs a producer can quote against",
        situation: "You commission video occasionally and the quotes vary wildly because the briefs are vague.",
        problem: "Vague briefs produce unpredictable costs and disappointing results, and both are attributed to the producer.",
        mengo: ["Concepts and scripts specific enough to quote against", "Shot structure", "Repurposing planned in advance"],
        agency: ["Selecting and managing the producer", "Approval before the shoot"],
        outcome: "Predictable video costs and outcomes.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Video volume across accounts",
        situation: "Multiple clients wanting video, with production capacity as the constraint.",
        problem: "Each shoot produces one asset because nobody planned for more, which makes the unit cost unsustainable.",
        mengo: ["Repurposing planned into every shoot", "Consistent script and brief structure", "Concepts derived from approved campaign briefs"],
        agency: ["Production management", "Deciding which clients justify video"],
        outcome: "Each shoot produces a set of assets rather than one.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Consistent video briefing across teams",
        situation: "Multiple teams commissioning video from multiple producers for the same client brands.",
        problem: "Inconsistent briefing produces inconsistent output, and at this scale the brand variation is visible.",
        mengo: ["Uniform brief and script structure across teams", "Concepts tied to the approved message hierarchy", "Consistent repurposing planning"],
        agency: ["Creative direction", "Production governance and clearances"],
        outcome: "Video that looks like it came from one brand.",
      },
    ],
    related: {
      capabilities: ["audio-content", "social-media", "events", "speaking-engagements"],
      workflows: ["content-production", "campaign-planning", "product-launch"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Does this produce video?",
        a: "No. Concepts, scripts and structure only. Filming, direction, editing and motion work are a separate discipline, and for most video programmes production is the larger constraint.",
      },
      {
        q: "What is the most common script mistake?",
        a: "Spending the opening establishing context. On feed platforms the first line decides whether anyone stays, and most scripts use it on a preamble the viewer never reaches the end of.",
      },
      {
        q: "How do we get more from one shoot?",
        a: "Plan the repurposing before the shoot rather than after. Deciding on the day that you also want vertical cuts and stills is how a shoot overruns; deciding in the brief costs nothing.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "audio-content",
    title: "Audio Content",
    navLabel: "Audio Content",
    group: "sales",
    depth: "staged",
    headline: "Podcasts and audio, structured before recording",
    lead:
      "Format, episode structure, question sets and the content programme around an audio series. The recording is the easy part; the structure and the sustained commitment are what most audio projects fail on.",
    summary:
      "Podcast format, episode structure and question sets, plus the content programme around a series.",
    seoTitle: "Audio Content — podcast structure for client programmes",
    seoDescription:
      "Podcast format, episode structure, interview question sets and the surrounding content programme for client audio series.",
    updated: "2026-09-02",
    meaning:
      "The structure behind an audio programme: format, episode shape, interview question sets, and the written content the audio generates.",
    job: "Give an audio series a structure it can sustain past episode six.",
    whyAgencies: [
      {
        label: "Most podcasts stop at episode six",
        body: "Not from lack of interest but from lack of structure. Sustaining a series requires a format that makes each episode straightforward to produce.",
      },
      {
        label: "Interview quality is a preparation problem",
        body: "A good interview comes from good questions asked in a good order, prepared beforehand, which almost nobody does.",
      },
      {
        label: "Audio produces written content cheaply",
        body: "An hour of conversation transcribes into articles, quotes and answers. Most podcast programmes discard all of it.",
      },
    ],
    inputs: [
      "Who the audience is and why they would listen",
      "Who is hosting and whether they can sustain it",
      "Format and length appropriate to the audience",
      "The commitment the client can realistically maintain",
    ],
    outputs: [
      "A format with an episode structure that repeats",
      "Question sets per guest type, ordered to build",
      "Show notes and episode descriptions",
      "A repurposing plan turning each episode into written content",
    ],
    sequence: [
      { title: "The agency tests the commitment", body: "A podcast is a recurring commitment. Establishing whether the client can sustain it comes first.", lane: "agency" },
      { title: "Format is structured", body: "An episode shape that repeats, so production gets easier rather than harder.", lane: "mengo" },
      { title: "Question sets are built", body: "Ordered so answers build, with follow-ups prepared.", lane: "mengo" },
      { title: "The host prepares and records", body: "Hosting is a skill and the recording is theirs.", lane: "agency" },
      { title: "Episodes are repurposed", body: "Transcripts become articles, quotes and answers. The step that justifies the effort.", lane: "mengo" },
      { title: "The agency reviews and publishes", body: "In the client's own channels.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the client should do this", body: "Most should not. A podcast is a recurring commitment competing with everything else, and the honest advice is usually no." },
      { label: "Whether the host can sustain it", body: "Enthusiasm at episode one is not evidence about episode twenty." },
      { label: "When to stop", body: "A dormant podcast is worse than none. Ending deliberately is better than fading." },
    ],
    limits: [
      "It does not record, edit or produce audio.",
      "It cannot make someone a good interviewer.",
      "It does not handle distribution, hosting or music licensing.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Consider it for your own agency, not for a client",
        situation: "You are building visibility for a new agency and considering a podcast.",
        problem: "A podcast is a long-payback commitment, and starting one for a client before you understand the effort is a way to disappoint both of you.",
        mengo: ["Format and question structure for your own series, if you commit"],
        agency: ["An honest assessment of whether you will sustain it"],
        outcome: "A considered decision rather than an enthusiastic start.",
        insteadDoThis:
          "If you want the interviews, do them and publish written pieces from them. Most of the value is in the conversation, not the audio file.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Support a client's existing series rather than starting one",
        situation: "A client already records a podcast and does nothing with it afterwards.",
        problem: "The episodes exist and the content they contain is discarded, which is the cheapest content anyone is not making.",
        mengo: ["A repurposing plan turning episodes into written content", "Show notes and descriptions", "Question sets to improve future episodes"],
        agency: ["Reviewing output", "Judging what is worth repurposing"],
        outcome: "An existing series starts producing written content as well.",
        insteadDoThis:
          "Repurpose what already exists. Starting a new series for a client is a commitment neither of you should take on lightly at this scale.",
      },
      {
        stage: "small-team",
        relevance: "later",
        headline: "A defined programme, priced as one",
        situation: "A client wants a podcast and you have capacity for project work.",
        problem: "Podcast support absorbed into a retainer is how a retainer becomes unprofitable, because it is recurring and unbounded.",
        mengo: ["A repeating format that makes each episode cheaper", "Question sets per guest type", "Repurposing as a standard step"],
        agency: ["Scoping and pricing it explicitly", "Managing the host's commitment"],
        outcome: "A bounded programme rather than an open-ended commitment.",
        insteadDoThis:
          "Price it separately and scope the number of episodes. An unbounded podcast commitment is one of the most reliable ways to lose money on a retainer.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Audio as a repeatable service",
        situation: "Several clients with audio programmes at different stages.",
        problem: "Bespoke handling per client makes the service unprofitable and inconsistent.",
        mengo: ["A standard format structure applied per client", "Consistent question and repurposing patterns", "Show notes produced as standard"],
        agency: ["Host management", "Deciding which clients this suits"],
        outcome: "Audio support becomes a defined service line.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Branded audio programmes with governance",
        situation: "Large clients with branded podcasts featuring executives and external guests.",
        problem: "Guest statements and executive comments on a branded programme carry the client's endorsement, which is a governance question.",
        mengo: ["Consistent format and question structure", "Recorded approval per episode", "Uniform repurposing across the programme"],
        agency: ["Guest selection and reputational judgement", "Approval routing through the client's communications function"],
        outcome: "Branded audio with the editorial governance it needs.",
      },
    ],
    related: {
      capabilities: ["video-content", "blog-content", "founders", "speaking-engagements"],
      workflows: ["content-production", "content-planning"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Should most clients start a podcast?",
        a: "No. It is a recurring commitment that competes with everything else, and most client podcasts stop within six episodes. The honest first question is whether the same effort spent on written content would return more, and it usually would.",
      },
      {
        q: "What is the highest-value part?",
        a: "Repurposing. An hour of conversation transcribes into several articles, a set of quotes and answers to questions the audience actually has. Almost every podcast programme discards this entirely.",
      },
      {
        q: "Does this handle recording and editing?",
        a: "No. Format, structure, questions and the written content around it. Recording, editing and distribution are separate and need their own people.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "funding",
    title: "Funding",
    navLabel: "Funding",
    group: "sales",
    depth: "staged",
    headline: "The narrative behind a raise",
    lead:
      "Investor-facing narrative, deck structure and supporting material. A specialised discipline with real legal constraints, and one where an agency's contribution is the story rather than the financials.",
    summary:
      "Investor narrative and deck structure for a client raising capital — the story, not the financials or the legal work.",
    seoTitle: "Funding — investor narrative for client fundraising",
    seoDescription:
      "Investor narrative and deck structure for clients raising capital, with financial modelling and legal compliance staying with their advisers.",
    updated: "2026-09-02",
    meaning:
      "The narrative layer of a fundraise: the story, the market framing, the deck structure and the supporting material an investor reads.",
    job: "Make the story behind the numbers coherent.",
    whyAgencies: [
      {
        label: "Investor decks are judged on narrative first",
        body: "Investors see many decks. The ones that get a second meeting have a clear argument, and most do not.",
      },
      {
        label: "Founders are too close to the story",
        body: "The things a founder finds interesting and the things an investor needs to hear diverge substantially, and founders rarely see the gap.",
      },
      {
        label: "The market framing is a positioning problem",
        body: "How a company describes its market and its position is exactly the work an agency already does, applied to a different audience.",
      },
    ],
    inputs: [
      "The company's actual position and traction",
      "Financials, prepared by the client or their advisers",
      "What stage of raise and what the money is for",
      "Legal constraints on what may be said to investors",
    ],
    outputs: [
      "An investor narrative with a clear argument",
      "Deck structure appropriate to the stage",
      "Market framing consistent with the company's public positioning",
      "Anticipated diligence questions",
    ],
    sequence: [
      { title: "The agency establishes the argument", body: "Why this company, why now, why this amount. One argument, not a survey.", lane: "agency" },
      { title: "The narrative is structured", body: "Ordered as an investor reads rather than as the founder wants to explain.", lane: "mengo" },
      { title: "Market framing is drafted", body: "Consistent with what the company says publicly, because investors check.", lane: "mengo" },
      { title: "The client's advisers handle financials", body: "Numbers, projections and legal disclosures are theirs, not marketing's.", lane: "agency" },
      { title: "The founder approves everything", body: "Statements to investors carry legal weight. Every word is theirs.", lane: "agency" },
    ],
    judgement: [
      { label: "What investors at this stage need", body: "Seed and Series B audiences want different things, and getting it wrong wastes the meeting." },
      { label: "How much to claim", body: "Overstatement to investors has consequences beyond a bad meeting, and the calibration matters." },
      { label: "Whether to take this work at all", body: "It is specialised, high-stakes and outside most agencies' competence." },
    ],
    limits: [
      "It does not produce financial models, projections or valuations.",
      "It does not advise on securities law, and investor communications are regulated.",
      "It has no investor relationships and does not introduce anyone.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Not appropriate work for a new agency",
        situation: "A client mentions they are raising and asks for help with the deck.",
        problem: "Fundraising material is high-stakes, legally constrained and outside most marketing competence.",
        mengo: ["Narrative structure, if the client's advisers are handling everything else"],
        agency: ["Declining, or contributing only the narrative under supervision"],
        outcome: "A clear boundary.",
        insteadDoThis:
          "Help with the market framing and the public positioning, which is genuinely your discipline and feeds the deck without you owning it.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Narrative only, and only with advisers involved",
        situation: "A long-standing client is raising and asks you to help tell the story.",
        problem: "The narrative is legitimately yours; the financials and the legal exposure are not, and the boundary blurs easily.",
        mengo: ["Narrative structure and market framing", "Consistency with public positioning", "Anticipated questions"],
        agency: ["Insisting their advisers own the financials and disclosures", "Founder approval of everything"],
        outcome: "A contribution scoped to what you are actually competent to provide.",
        insteadDoThis:
          "Scope explicitly to narrative and market framing, in writing. Ambiguity about who owns investor claims is a risk you do not want.",
      },
      {
        stage: "small-team",
        relevance: "later",
        headline: "Occasional, specialised, carefully scoped",
        situation: "Clients in growth sectors raise periodically and value your understanding of their positioning.",
        problem: "Fundraising support is specialised and does not scale as a service line for a general marketing agency.",
        mengo: ["Reusable narrative structure per stage", "Market framing consistent with public messaging", "Diligence question preparation"],
        agency: ["Scoping to narrative", "Coordination with the client's advisers"],
        outcome: "A well-defined contribution to an occasional need.",
        insteadDoThis:
          "Treat it as an occasional service for existing clients rather than something you market. It rarely justifies being a service line.",
      },
      {
        stage: "growing",
        relevance: "later",
        headline: "Only with genuine sector specialisation",
        situation: "Your agency specialises in a sector where clients raise frequently.",
        problem: "Without genuine familiarity with what investors in that sector expect, the contribution is guesswork.",
        mengo: ["Stage-appropriate narrative structures", "Consistent market framing", "Question preparation"],
        agency: ["Sector knowledge of investor expectations", "Coordination with corporate finance advisers"],
        outcome: "A credible contribution where genuine specialisation exists.",
        insteadDoThis:
          "If you do not have sector-specific investor knowledge, refer this. A generic marketing agency doing fundraising narrative is a poor outcome for the client.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Corporate narrative alongside investor communications",
        situation: "Large clients where investor communications and public positioning must be consistent.",
        problem: "Divergence between what a company tells investors and what it says publicly is a real regulatory and reputational risk.",
        mengo: ["Consistent narrative across investor and public material", "Recorded provenance of claims", "Uniform structure across teams"],
        agency: ["Coordination with investor relations and legal", "Governance over public claims"],
        outcome: "Investor and public narratives that do not contradict each other.",
      },
    ],
    related: {
      capabilities: ["presentations-and-pitches", "brand-strategy", "moat-analysis", "books"],
      workflows: ["business-research", "pr-and-media-workflow"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Should a marketing agency work on fundraising material?",
        a: "On the narrative and market framing, with the client's financial and legal advisers owning everything else, and with the scope written down. Beyond that it is outside most marketing agencies' competence and carries risk neither side should want.",
      },
      {
        q: "Does this produce financial projections?",
        a: "No. Financial modelling, projections and valuation are the client's advisers' work. Nothing here should be treated as financial or legal input.",
      },
      {
        q: "What is the most common narrative problem?",
        a: "Founders explain what interests them rather than what an investor needs to conclude. The reordering is usually the single most valuable contribution an outside perspective makes.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "books",
    title: "Books",
    navLabel: "Books",
    group: "sales",
    depth: "staged",
    headline: "A book is a project, not a marketing asset",
    lead:
      "Structure, outline and the content programme around a book. The most effort-intensive item in this taxonomy by a wide margin, and the one most often started and least often finished.",
    summary:
      "Book structure, outline and the surrounding content programme — the largest undertaking here and the most often abandoned.",
    seoTitle: "Books — structure and programme for a client's book",
    seoDescription:
      "Book structure, chapter outlines and the surrounding content programme for clients writing a book, with an honest view of the effort involved.",
    updated: "2026-09-02",
    meaning:
      "The structure behind a book: the argument, the chapter progression, the outline, and the content programme that runs alongside and afterwards.",
    job: "Give a book a structure that makes finishing it plausible.",
    whyAgencies: [
      {
        label: "A book is durable authority",
        body: "In professional services particularly, a book carries credibility no other asset matches and continues working for years.",
      },
      {
        label: "The failure mode is abandonment",
        body: "Most client books stop somewhere around chapter three. Structure is what makes chapter eight reachable.",
      },
      {
        label: "The content programme is the real return",
        body: "The book generates articles, talks, and a decade of material. Clients who see only the book miss most of the value.",
      },
    ],
    inputs: [
      "The argument the book makes — one, not a survey of a subject",
      "Who reads it and what they should conclude",
      "How much writing time the author genuinely has",
      "Whether this is traditionally published, self-published or a lead asset",
    ],
    outputs: [
      "A single-sentence argument, tested before anything else",
      "A chapter progression that builds",
      "Chapter outlines detailed enough to write from",
      "A content programme drawing on the material throughout",
    ],
    sequence: [
      { title: "The agency tests the argument", body: "One sentence. Most book projects fail here and never know it.", lane: "agency" },
      { title: "Structure is drafted", body: "A progression where each chapter earns the next, rather than a set of topics.", lane: "mengo" },
      { title: "Chapters are outlined", body: "Detailed enough that the author faces an outline rather than a blank page.", lane: "mengo" },
      { title: "The author writes", body: "The book is theirs. A book written by someone else reads like one.", lane: "agency" },
      { title: "Material is repurposed throughout", body: "Articles and talks drawn from chapters as they are drafted, so value arrives before publication.", lane: "mengo" },
      { title: "The agency reviews and supports", body: "Editorially, and by keeping the programme running when the writing stalls.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether there is a book here", body: "Most subjects that feel like a book are an article. Saying so saves a year." },
      { label: "Whether the author will finish", body: "Enthusiasm at the outline stage is not evidence about chapter seven." },
      { label: "Whether ghostwriting is appropriate", body: "A commercial and ethical decision for the client, and it should be made explicitly." },
    ],
    limits: [
      "It does not write the book. The argument and the substance are the author's.",
      "It does not handle publishing, agents, editing or distribution.",
      "It cannot sustain a project the author has stopped working on.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Far too large for an early engagement",
        situation: "A client mentions wanting to write a book.",
        problem: "Book projects run for a year or more and stall often. Attaching a new agency relationship to one is unwise for both parties.",
        mengo: ["An honest scale assessment"],
        agency: ["Explaining what this actually involves"],
        outcome: "A realistic conversation.",
        insteadDoThis:
          "Suggest a long-form guide or an article series first. If the client cannot sustain that, the book will not happen — and you will both have found out in a month rather than a year.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "One, at most, and priced as a project",
        situation: "A long-standing client with genuine expertise wants to write a book.",
        problem: "A book project can consume a solo agency's capacity entirely and jeopardise the recurring work that pays.",
        mengo: ["Structure and chapter outlines", "A repurposing programme so value arrives before publication"],
        agency: ["Holding the scope", "Keeping the author moving, which is most of the job"],
        outcome: "A bounded contribution to a project the client owns.",
        insteadDoThis:
          "Scope to structure, outlines and the surrounding content programme. Writing chapters is where a solo agency's year disappears.",
      },
      {
        stage: "small-team",
        relevance: "later",
        headline: "A project engagement, never retainer scope",
        situation: "A client's founder is writing a book and wants support.",
        problem: "Book support absorbed into a retainer makes the account unprofitable within a quarter.",
        mengo: ["Chapter structure and outlines", "Content repurposed as chapters are drafted", "A progression that makes finishing plausible"],
        agency: ["Separate scoping and pricing", "Editorial judgement"],
        outcome: "A priced project with a defined contribution.",
        insteadDoThis:
          "Price it as a distinct project with defined deliverables. The content programme around the book is often more valuable to the client than the book itself, and is easier to scope.",
      },
      {
        stage: "growing",
        relevance: "later",
        headline: "Only with genuine editorial capability",
        situation: "Several clients with authority-building ambitions.",
        problem: "Book projects need editorial skill most marketing agencies do not have, and the failure is visible.",
        mengo: ["Repeatable structure and outlining method", "Consistent repurposing programme"],
        agency: ["Genuine editorial capability, hired or partnered", "Author management"],
        outcome: "A credible offer where the capability genuinely exists.",
        insteadDoThis:
          "Partner with an editor or a ghostwriter rather than attempting it in-house. The structure and the content programme are yours; the manuscript is not.",
      },
      {
        stage: "established",
        relevance: "later",
        headline: "Executive authorship with governance",
        situation: "Senior executives at large clients publishing books.",
        problem: "Executive-authored books carry reputational weight and often involve ghostwriting arrangements that need to be handled carefully.",
        mengo: ["Structure and outlines", "A repurposing programme across the client's channels", "Recorded provenance of material"],
        agency: ["Coordination with publishers and the client's communications function", "Clarity about authorship arrangements"],
        outcome: "A book programme with the governance an executive's name requires.",
        insteadDoThis:
          "Be explicit about authorship arrangements in writing from the start. Ambiguity about who wrote an executive's book is a reputational risk for everyone involved.",
      },
    ],
    related: {
      capabilities: ["courses", "founders", "blog-content", "speaking-engagements"],
      workflows: ["content-planning", "pr-and-media-workflow"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Should a client write a book?",
        a: "Rarely, and only where there is a genuine argument and an author who will finish. Most subjects that feel like a book are an article, and a year spent on an abandoned manuscript is the most expensive marketing decision a client can make.",
      },
      {
        q: "Does this write the book?",
        a: "No. Structure, outlines and the content programme around it. The argument and the substance are the author's, and a book written by someone else generally reads like one.",
      },
      {
        q: "What is the realistic timeline?",
        a: "Longer than the client thinks. Structure and outlining is weeks; writing is months at best and frequently a year. Any plan that assumes otherwise is the reason the project will stall.",
      },
    ],
  },
];
