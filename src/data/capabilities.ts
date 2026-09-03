import type { Capability } from "@/lib/types";

/**
 * What Mengo helps with.
 *
 * Six areas of marketing work. Each page follows the same anatomy — job,
 * inputs, outputs, sequence, judgement, limits — and the `limits` field is not
 * optional. A capability page that only lists what something does is a
 * brochure; the agencies reading this are evaluating whether to put client
 * work through it, and the first thing a serious evaluator looks for is the
 * edge of the claim.
 */
export const capabilities: Capability[] = [
  {
    kind: "capability",
    slug: "strategy",
    title: "Strategy",
    navLabel: "Strategy",
    headline: "The strategy layer, written down and kept current",
    lead:
      "Most client strategy is decided in a room and then lives in fragments: a deck from the pitch, a document nobody reopened, and the memory of whoever was there. Mengo turns the strategic layer into a stored, editable object, so the work that follows inherits from it instead of guessing at it.",
    summary:
      "Positioning, segments, offer structure and channel priorities as a stored, editable layer that everything downstream inherits from — drafted by Mengo, decided by the agency.",
    seoTitle: "Marketing strategy support for agencies",
    seoDescription:
      "Positioning, audience segments, offer structure and channel priorities drafted as a stored, editable layer. The agency makes the strategic call; Mengo does the structural work behind it.",
    updated: "2026-08-26",
    job: "Give every client a strategic layer that exists as a document rather than as an assumption.",
    inputs: [
      "What the client sells, and at what price",
      "Who buys it, and what stops them buying",
      "Where the client already has traction",
      "Commercial constraints — launches, seasons, capacity, things they will not do",
      "Anything you know from the relationship that was never in a brief",
    ],
    outputs: [
      "A positioning statement with a message hierarchy beneath it",
      "Two to four audience segments, each with the objection it actually holds",
      "An offer structure showing how the client's services relate to each other",
      "A ranked channel view: one primary, one secondary, one experiment",
      "A themed calendar, sequenced so foundational work lands before what depends on it",
    ],
    sequence: [
      { title: "The agency takes the brief", body: "In conversation, where the useful information is. What a client says in the third ten minutes is usually the important part.", lane: "agency" },
      { title: "Brief captured in a common structure", body: "The same shape every time, so research and planning have something consistent to work from.", lane: "agency" },
      { title: "Research and first strategic draft", body: "Mengo assembles context and produces a positioning draft, segment split, offer structure and ranked channels.", lane: "mengo" },
      { title: "The agency corrects and decides", body: "This is the strategic call. You know the client's history, their appetite for risk and what their last agency got wrong.", lane: "agency" },
      { title: "The plan reflows to the decision", body: "The calendar and everything downstream regenerate against the strategy you approved.", lane: "mengo" },
      { title: "The agency presents it", body: "In your words, with your reasoning. The client is buying your judgement, not a document.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the positioning is true", body: "A generated positioning statement is plausible by construction. Whether it is accurate about this business is something only someone who knows the business can say." },
      { label: "Which segment to lead with", body: "The commercially right answer often is not the largest segment. That is a judgement about the client's capacity and cash position." },
      { label: "What to refuse", body: "Telling a client that a channel they are enthusiastic about is wrong for them is the most valuable thing an agency does, and no system will do it for you." },
      { label: "Sequencing against reality", body: "Plans meet budget cycles, staff holidays and a founder's attention span. You know those; the plan does not." },
    ],
    limits: [
      "It does not make the strategic decision. It produces a draft with reasoning that a strategist accepts, changes or throws away.",
      "It does not know anything about the client that was not supplied. Unstated context is simply absent, and it will not be flagged for you unless you look.",
      "It is not market research. Where a claim needs primary evidence, the plan should say so rather than assert it.",
      "It does not replace a strategist. An agency without strategic capability gets a well-structured document it cannot evaluate.",
    ],
    related: { capabilities: ["research", "campaigns", "marketing-systems"], workflows: ["strategy-and-planning", "client-onboarding"] },
    faqs: [
      {
        q: "How is this different from asking a general AI tool for a marketing strategy?",
        a: "Mainly persistence and structure. A chat produces a good answer and then forgets the context, so the next piece of work starts from nothing. Here the strategic layer is stored per client and everything downstream inherits from it, which is what makes the fortieth asset consistent with the first.",
      },
      {
        q: "Can we use our own strategic framework?",
        a: "Your framework should drive the brief structure and the review standard. The outputs are editable objects, so a house methodology is applied by shaping what you put in and what you accept, rather than by configuration.",
      },
      {
        q: "What happens when the client changes their offer?",
        a: "You change the strategic layer and the plan reflows against it. That is the practical argument for storing strategy as an object: a change is an edit rather than a rewrite of everything that inherited from it.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "content",
    title: "Content",
    navLabel: "Content",
    headline: "Content as a system, not a queue of requests",
    lead:
      "Most agency content operations are a queue: a slot arrives, someone writes it, someone else edits it, it ships. The cost is not writing. It is that every item needs its context reassembled first — who is this for, what is the angle, what does this client sound like — and that reassembly happens hundreds of times a year.",
    summary:
      "Briefs, drafts and formats produced against the approved plan and the client's stored voice, so agency hours go to editing and judgement rather than to first drafts.",
    seoTitle: "Content production support for agencies",
    seoDescription:
      "Content briefs and drafts produced against an approved plan and a stored client voice, in the formats each channel needs. Agency review stays a required step.",
    updated: "2026-08-26",
    job: "Turn an approved plan into briefed, drafted work in the formats each channel actually takes.",
    inputs: [
      "The approved strategic layer and calendar",
      "A voice profile for the client — how they sound, and what they never say",
      "Editorial guardrails: claims that are permitted, and the ones that are not",
      "Any client-supplied facts, figures or proof points",
      "Your agency's own standard for what is publishable",
    ],
    outputs: [
      "A brief per slot: audience, angle, format, what it has to achieve",
      "Drafts written to the format's real shape rather than reformatted from one generic version",
      "Variants where a channel needs them, generated from the same brief",
      "Flags where a draft needed a fact that was never supplied",
      "A review queue organised so an editor can work through it in one pass",
    ],
    sequence: [
      { title: "Plan approved by the agency", body: "Production runs from an approved plan. Nothing gets drafted against a strategy nobody signed off.", lane: "agency" },
      { title: "Voice and guardrails set", body: "The agency defines how the client sounds and which claims are permitted. This is a client-safety decision, not a preference.", lane: "agency" },
      { title: "Briefs generated per slot", body: "Each calendar slot becomes a brief with an audience, an angle and a job.", lane: "mengo" },
      { title: "Drafts produced to format", body: "Written for the shape the channel actually takes, with gaps flagged rather than filled with invention.", lane: "mengo" },
      { title: "Agency edit and approval", body: "A required step. Voice, accuracy and whether this is right for this client are decided by a person.", lane: "agency" },
      { title: "The agency publishes", body: "Publishing happens in the client's own tools, under the client's own accounts.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether it sounds like the client", body: "A voice profile gets close. The last ten percent — the phrase this founder always uses, the joke that would land badly — is an editor's job." },
      { label: "Whether a claim is safe to make", body: "Anything about results, compliance or a competitor needs a person who understands the client's exposure." },
      { label: "What to cut", body: "The most common improvement to a draft is deletion, and knowing what to remove is a craft skill." },
      { label: "When the brief itself is wrong", body: "Sometimes the right response to a slot is to change the slot. That decision belongs to whoever owns the account." },
    ],
    limits: [
      "It does not publish. Scheduling, posting and sending stay in the tools you and your client already run, along with the deliverability and consent obligations attached to them.",
      "It does not verify facts about the client's business. A number that was not supplied is a gap, and the draft says so rather than inventing one.",
      "It does not produce design, photography or video. Written material and the structure around it is the scope.",
      "It is not a substitute for an editor. Drafts that ship unedited read as drafts that shipped unedited, and clients notice.",
    ],
    related: { capabilities: ["strategy", "campaigns", "marketing-systems"], workflows: ["content-production", "campaign-planning"] },
    faqs: [
      {
        q: "Will the output be recognisably AI-written?",
        a: "Unedited, often yes — and pretending otherwise would not survive contact with your first review. The workflow treats editing as a required step for exactly this reason. What changes is that your editors start from a briefed draft in the right format rather than from a blank page.",
      },
      {
        q: "How many formats are supported?",
        a: "The Mengo platform defines over a hundred asset formats, each written to the channel it ships to. Which of those matter to a given client is a plan decision rather than a catalogue decision.",
      },
      {
        q: "Can two clients in the same sector end up with the same content?",
        a: "They inherit from different strategic layers and different voice profiles, so the output differs. But this is a real risk worth managing rather than dismissing: if two briefs are genuinely identical, the drafts will be similar, and that is a signal that the strategic layer needs more work.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "campaigns",
    title: "Campaigns",
    navLabel: "Campaigns",
    headline: "Campaigns that are planned before they are produced",
    lead:
      "Most campaigns do not fail during execution. They fail before launch, in the ambiguity about what the campaign is actually for, who it is aimed at, what the offer is and what will count as it having worked. Those questions are cheap to answer in a brief and expensive to answer in week three.",
    summary:
      "Campaign briefs, channel sequencing, launch checklists and the assets behind them — structured so the agency's decisions happen before production rather than during it.",
    seoTitle: "Campaign planning support for agencies",
    seoDescription:
      "Campaign briefs, channel sequencing and launch checklists produced as a structure the agency approves before production, with the assets built from the approved brief.",
    updated: "2026-08-26",
    job: "Make the decisions that determine whether a campaign works happen in the brief, not in the build.",
    inputs: [
      "The commercial objective, in the client's own terms",
      "The offer, and what makes it different from the usual one",
      "The window: dates, dependencies, what else is happening",
      "The audience segment being targeted and the objection it holds",
      "What the client has already tried, and what happened",
    ],
    outputs: [
      "A campaign brief: objective, audience, offer, message, window, success definition",
      "A channel sequence — what runs where, in what order, and why that order",
      "The asset list the campaign needs, derived from the sequence rather than from habit",
      "Drafts for each asset, built from the same brief so the message holds across channels",
      "A launch checklist covering the operational failures that actually happen",
    ],
    sequence: [
      { title: "The agency defines the objective", body: "What this campaign is for, commercially, agreed with the client. Everything else derives from this.", lane: "agency" },
      { title: "Brief structured", body: "The objective becomes a written brief with an audience, an offer, a window and a success definition.", lane: "mengo" },
      { title: "Sequence proposed", body: "A channel order with reasoning, rather than everything launching everywhere on the same day.", lane: "mengo" },
      { title: "The agency approves the plan", body: "The sequence and the asset list are approved before anything is produced. This is the checkpoint that saves the money.", lane: "agency" },
      { title: "Assets produced", body: "Every asset built from the same approved brief, which is what keeps the message consistent across channels.", lane: "mengo" },
      { title: "Agency review and launch", body: "Reviewed, approved and launched by the agency in the client's own systems.", lane: "agency" },
      { title: "Retrospective", body: "What happened, against the success definition written before launch. The agency decides what it means.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the objective is achievable", body: "Clients routinely ask for a campaign to do something a campaign cannot do. Saying so is the agency's job." },
      { label: "Whether the offer is strong enough", body: "No amount of sequencing rescues a weak offer, and this is a commercial conversation with the client." },
      { label: "When to stop a campaign", body: "Mid-flight decisions need someone accountable, with the client's context and the authority to make the call." },
      { label: "What the results actually mean", body: "Attribution is genuinely hard. Reading it honestly, including when it says the campaign did not work, is an expertise question." },
    ],
    limits: [
      "It does not buy or place media, hold budget, or manage ad accounts. Those stay with the agency and the client.",
      "It does not measure. Mengo can structure what should be measured; the numbers come from the client's own analytics and CRM.",
      "It does not guarantee outcomes, and any page on this site that implied it would be lying to you.",
      "It does not produce creative assets beyond written material and the structure around them.",
    ],
    related: { capabilities: ["strategy", "content", "lead-nurturing"], workflows: ["campaign-planning", "scale-client-delivery"] },
    faqs: [
      {
        q: "Does this handle paid media?",
        a: "It handles the planning and the written assets around paid media — concepts, copy, sequencing, the brief a media buyer works from. Placement, budget and account management stay with whoever holds the client's ad accounts, which should be you or the client.",
      },
      {
        q: "How does a campaign relate to the always-on plan?",
        a: "A campaign is a bounded intervention inside the calendar rather than a separate universe. The plan gets re-sequenced around it so the campaign lands with the groundwork already in place.",
      },
      {
        q: "What if the client changes the offer mid-campaign?",
        a: "The brief changes and the affected assets regenerate. What does not regenerate is the decision about whether changing mid-flight is a good idea, which is a conversation with the client.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "lead-nurturing",
    title: "Lead Nurturing",
    navLabel: "Lead Nurturing",
    headline: "The follow-up that everybody promises and nobody schedules",
    lead:
      "Most businesses lose more leads to silence than to competitors. Nearly every business writes a good first reply; almost none write the fifth. Nurturing is the least glamorous part of an agency's scope and reliably the part with the largest gap between what was sold and what was built.",
    summary:
      "Segmented, objection-led nurture sequences built to a consistent anatomy and handed to the client's own sending tools — where consent and deliverability stay.",
    seoTitle: "Lead nurturing support for agencies",
    seoDescription:
      "Segmented, objection-led nurture sequences drafted to a consistent anatomy, for the agency to review and load into the client's own email, CRM or messaging tools.",
    updated: "2026-08-26",
    job: "Turn 'we will set up nurturing' from an intention into a built, reviewable sequence.",
    inputs: [
      "The segments from the strategic layer, and the objection each holds",
      "What actually happens after an enquiry today, honestly described",
      "The client's sales process, and who picks the conversation up",
      "Which tools the client sends from, and what consent they hold",
      "Real objections from the client's sales team, which are always better than assumed ones",
    ],
    outputs: [
      "A sequence per segment, built around objections rather than around a countdown",
      "Message-level drafts with a defined job for each message",
      "Cadence appropriate to the buying cycle — a same-day purchase and a nine-month sale are not the same rhythm",
      "Re-engagement flows for lists that have gone quiet",
      "A handoff note structure, so a lead reaching sales arrives with context",
    ],
    sequence: [
      { title: "The agency maps the real journey", body: "What happens now, including the parts nobody is proud of. This needs a conversation, not a form.", lane: "agency" },
      { title: "Objections collected", body: "From the client's sales team where possible. Assumed objections produce sequences that answer questions nobody asked.", lane: "agency" },
      { title: "Sequences drafted per segment", body: "Each message with a job, ordered against the objection it addresses rather than against a schedule.", lane: "mengo" },
      { title: "Cadence set to the buying cycle", body: "Rhythm derived from how long this client's buyers actually take to decide.", lane: "mengo" },
      { title: "Agency review", body: "Tone, claims, compliance and whether this would annoy the client's actual customers.", lane: "agency" },
      { title: "The agency loads and sends", body: "Into the client's own email, CRM or messaging platform, under the client's own consent record.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the tone is right for a stranger", body: "Follow-up is the most easily resented marketing there is. Judging where the line sits for this audience is human work." },
      { label: "Consent and compliance", body: "Who may be contacted, on what basis, in which jurisdiction is a legal question with real consequences and it belongs to the agency and the client." },
      { label: "When to stop following up", body: "Knowing when persistence becomes harassment protects the client's reputation, and it is a judgement call." },
      { label: "What sales actually needs at handoff", body: "The person picking the conversation up should be asked what would help them, and that is a conversation." },
    ],
    limits: [
      "It does not send. Email, SMS and messaging go out through the client's own platforms, where their deliverability reputation and consent records live.",
      "It does not hold or manage a contact list, and does not decide who is eligible to be contacted.",
      "It does not provide legal advice on consent, and nothing here should be read as compliance guidance.",
      "It does not replace a salesperson. It gets a lead to the point where a human conversation is worth having.",
    ],
    related: { capabilities: ["strategy", "content", "research"], workflows: ["lead-nurturing-flows", "client-onboarding"] },
    faqs: [
      {
        q: "Which sending platforms does this work with?",
        a: "Sequences are produced as content and structure for you to load into whatever the client already uses. That is a deliberate boundary rather than a gap: sending systems own deliverability and consent, and moving those is a bigger decision than adopting a planning layer.",
      },
      {
        q: "Can it handle WhatsApp and messaging as well as email?",
        a: "The Mengo platform defines messaging sequences as distinct formats rather than as email copy pasted into a different channel, because a broadcast written for an inbox reads badly in a chat thread. Sending still happens in the client's own tools.",
      },
      {
        q: "What about clients whose sales cycle is very long?",
        a: "Cadence is set from the buying cycle, so a nine-month sale gets a different rhythm from a same-day purchase. Long cycles usually need re-engagement flows more than they need more messages in the first month.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "research",
    title: "Research",
    navLabel: "Research",
    headline: "The research pass that is always first to be cut",
    lead:
      "Research is the part of an engagement most easily reduced when the timeline is tight, because nobody sees it and the client did not ask for it by name. It is also the layer everything downstream depends on, which is why plans built without it are confident and wrong.",
    summary:
      "Audience, competitor and channel context assembled into a working document at a consistent depth on every account — including the accounts nobody has time for this month.",
    seoTitle: "Marketing research support for agencies",
    seoDescription:
      "Audience, competitor and channel context assembled into a working research document at consistent depth for every client account, with gaps flagged rather than filled.",
    updated: "2026-08-26",
    job: "Give every account the same research depth, including the ones that would otherwise be skipped.",
    inputs: [
      "The client's sector, offer and price point",
      "Named competitors, or a description close enough to find them",
      "Existing customer knowledge the client can supply",
      "The buying process as the client understands it",
      "Any research the agency or client has already done",
    ],
    outputs: [
      "An audience picture: who buys, what they are weighing, what they are afraid of",
      "Competitor context — how others in the space position themselves and where the gaps are",
      "A channel landscape assessed against this client's buying cycle and price point",
      "Objection inventory, which is the input the nurturing work depends on",
      "An explicit list of what is not known and would need primary research",
    ],
    sequence: [
      { title: "The agency scopes the question", body: "Research without a question produces a document nobody reads. What decision does this need to inform?", lane: "agency" },
      { title: "Context assembled", body: "Audience, competitor and channel context pulled into one working document rather than eleven tabs.", lane: "mengo" },
      { title: "Gaps marked", body: "What is not known is stated as not known. This is the part that makes the document trustworthy.", lane: "mengo" },
      { title: "The agency validates", body: "You check it against what you know. Some of it will be wrong, and finding that is the point of this step.", lane: "agency" },
      { title: "It feeds the strategic layer", body: "Validated research becomes the input to positioning and planning rather than a separate deliverable.", lane: "mengo" },
    ],
    judgement: [
      { label: "Whether the picture is accurate", body: "Assembled context is a hypothesis. An agency with sector experience will spot what is off, and that check cannot be skipped." },
      { label: "What needs primary research", body: "Some questions can only be answered by talking to customers. Deciding which is an experience call." },
      { label: "Which competitor actually matters", body: "The obvious competitor and the one losing you deals are frequently different companies." },
      { label: "How much research is enough", body: "Research has diminishing returns and a deadline. Where to stop is a professional judgement." },
    ],
    limits: [
      "It is not primary research. It does not interview customers, run surveys or produce original data.",
      "It does not have access to private market data, your client's analytics, or anything behind a login.",
      "Assembled context can be out of date or wrong. It is a starting document for an expert to check, not a source of truth.",
      "It does not tell you what to do with what it found. That is the strategic step, and it is deliberately separate.",
    ],
    related: { capabilities: ["strategy", "lead-nurturing", "campaigns"], workflows: ["client-onboarding", "strategy-and-planning"] },
    faqs: [
      {
        q: "How current is the information?",
        a: "Treat it as context to verify rather than as fact. Anything time-sensitive — pricing, a competitor's current positioning, a platform's current behaviour — should be checked before it reaches a client document. The research output marks what it is unsure about.",
      },
      {
        q: "Can it research our client's own performance?",
        a: "No. It has no access to your client's analytics, CRM or ad accounts. What the client's own data says is an input you supply, not something research retrieves.",
      },
      {
        q: "Is this a substitute for sector expertise?",
        a: "No, and an agency without sector expertise would not be able to tell where the research is wrong — which is precisely the situation where a confident document is most dangerous.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "marketing-systems",
    title: "Marketing Systems",
    navLabel: "Marketing Systems",
    headline: "The way your agency works, written down and actually used",
    lead:
      "Most agencies have a process. Fewer have one that exists outside the people who run it, and fewer still have one that is used rather than referenced during audits. The difference matters at exactly two moments: when somebody new joins, and when somebody essential leaves.",
    summary:
      "A repeatable delivery structure — brief shape, research depth, plan anatomy, review checkpoints — applied the same way on every account, defined by the agency.",
    seoTitle: "Repeatable marketing systems for agencies",
    seoDescription:
      "Turn agency delivery into a documented, repeatable system: consistent brief structure, research depth, plan anatomy and review checkpoints across every client account.",
    updated: "2026-08-26",
    job: "Make delivery a system the agency owns, rather than a set of habits distributed across people.",
    inputs: [
      "How your agency actually delivers today, honestly documented",
      "Your definition of what good looks like",
      "Your review checkpoints and who owns each one",
      "The service lines you sell, and what each one includes",
      "The constraints you will not compromise on",
    ],
    outputs: [
      "A common brief structure applied on every account",
      "A defined research and planning depth, so no account is quietly under-served",
      "A plan anatomy a reviewer can navigate without reading it from the top",
      "Review checkpoints as required steps rather than as guidance",
      "An artefact a new hire can be onboarded into, and a client can be shown",
    ],
    sequence: [
      { title: "The agency defines the standard", body: "What good looks like here. This is your intellectual property and it cannot be generated.", lane: "agency" },
      { title: "The structure is applied", body: "Every account runs the same brief shape, research depth and plan anatomy.", lane: "mengo" },
      { title: "Checkpoints enforced", body: "Review steps are part of the workflow rather than a policy people remember under deadline.", lane: "agency" },
      { title: "Work produced to the structure", body: "Consistent output shape across accounts, which is what makes review fast.", lane: "mengo" },
      { title: "The agency reviews against the standard", body: "Quality becomes a property of the process rather than of who happened to review it.", lane: "agency" },
      { title: "The standard is revised", body: "What was learned gets written back in, so the improvement reaches every account rather than one.", lane: "agency" },
    ],
    judgement: [
      { label: "What to standardise", body: "Structure, yes. Voice and recommendation, no. Getting this line wrong in either direction is the main way a system project fails." },
      { label: "Where exceptions are allowed", body: "A standard with no exception path gets ignored the first time a client needs something unusual." },
      { label: "When the standard is wrong", body: "A process that describes how you used to work is worse than none, because people trust it." },
      { label: "Who owns it", body: "A system with no named owner decays. That is an organisational decision." },
    ],
    limits: [
      "It does not define your standard. It applies one. An agency without a clear view of what good looks like gets consistency without quality.",
      "It does not manage your projects, timesheets or resourcing. Those stay in your own operational tools.",
      "It cannot enforce a checkpoint that your team is permitted to skip. Governance is organisational, not technical.",
      "It is not a certification, an accreditation or evidence of a quality standard for procurement purposes.",
    ],
    related: { capabilities: ["strategy", "content", "campaigns"], workflows: ["scale-client-delivery", "strategy-and-planning"] },
    faqs: [
      {
        q: "We already have SOPs. What does this add?",
        a: "SOPs describe the process; this fills it. The common failure of a documented process is that the documentation and the actual work drift apart, because following the document is extra effort. When the structure is where the work happens, the drift has nowhere to go.",
      },
      {
        q: "Will this make us look like every other agency?",
        a: "Only if you standardise the wrong layer. Your competitors do not distinguish themselves on brief structure — they distinguish themselves on judgement, craft and relationships, none of which are standardised here.",
      },
      {
        q: "How do we start without disrupting live accounts?",
        a: "Run one account through the full structure and compare it to how that account was being delivered before. One account is enough to find the gaps and small enough that a mistake is recoverable.",
      },
    ],
  },
];

export const capabilityBySlug = new Map(capabilities.map((c) => [c.slug, c]));
