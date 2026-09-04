import type { Capability } from "@/lib/types";

/**
 * Organization and System capabilities.
 *
 * These are `depth: "flat"` and therefore have no agency-stage pages. That is
 * a deliberate refusal rather than an omission: a settings screen does not
 * mean something different to a one-person studio and a forty-person agency,
 * and writing five near-identical pages about it would be exactly the thin
 * padding this site's whole argument depends on not doing.
 *
 * What varies for these is headcount and the sensitivity of client material,
 * which the `whyAgencies` and `judgement` fields cover directly.
 */
export const internalCapabilities: Capability[] = [
  /* ------------------------------------------------------- Organization */
  {
    kind: "capability",
    slug: "organization",
    title: "Organization",
    navLabel: "Organization",
    group: "organization",
    depth: "flat",
    headline: "The agency's own account, set up once",
    lead:
      "The record of the agency itself: who it is, which clients it holds, and how work is separated between them. Ten minutes at the start, and then largely forgotten — which is the correct outcome.",
    summary: "The agency's own account record and the separation between the clients it holds.",
    seoTitle: "Organization — the agency account record",
    seoDescription:
      "The agency's own account: identity, client separation and the structure beneath every other capability.",
    updated: "2026-09-02",
    meaning:
      "The top-level record of the agency as an entity, and the boundaries between the client workspaces it contains.",
    job: "Keep each client's work separate from every other client's.",
    whyAgencies: [
      { label: "Client separation is contractual", body: "Most client agreements require that their material is not commingled with another client's. The structure is what makes that true rather than intended." },
      { label: "It is the foundation for access control", body: "Users, roles and audit all attach to this. Setting it up badly makes everything above it awkward." },
      { label: "It matters at handover", body: "An agency that can cleanly separate and export a client's material has a much easier conversation at the end of a relationship." },
    ],
    inputs: ["The agency's own details", "The clients held and how they should be separated", "Any contractual restrictions on where material may sit"],
    outputs: ["A configured agency record", "Separated client workspaces", "A basis for user and permission structure"],
    sequence: [
      { title: "The agency sets it up", body: "Once, at the start. Ten minutes.", lane: "agency" },
      { title: "Client separation is established", body: "Each client's material held apart from every other's.", lane: "mengo" },
      { title: "The agency reviews on client changes", body: "A new client, or one leaving, is a structural event.", lane: "agency" },
    ],
    judgement: [
      { label: "How to separate clients", body: "Usually obvious, occasionally not — a client with several brands, or a group with subsidiaries, needs a decision." },
      { label: "What contractual restrictions apply", body: "Some client agreements restrict where their material may be processed. Check before onboarding, not after." },
    ],
    limits: [
      "It is not a client relationship management system.",
      "It does not enforce contractual data restrictions — it records the structure you set up.",
      "It has no view of the agency's commercial or financial data.",
    ],
    stages: [],
    related: { capabilities: ["users", "roles-and-permissions", "audit-log"], workflows: ["agency-sop-creation"], useCases: ["manage-multiple-client-brands"] },
    faqs: [
      { q: "Do we need this as a one-person agency?", a: "You need the client separation, yes — mixing two clients' material is a contractual problem regardless of how many people you have. The rest of the structure matters more as you add people." },
      { q: "What if a client has several brands?", a: "That is a structural decision worth making deliberately. Separate workspaces per brand gives cleaner boundaries; one workspace keeps shared context together. It depends on whether the brands share a strategy." },
    ],
  },

  {
    kind: "capability",
    slug: "users",
    title: "Users",
    navLabel: "Users",
    group: "organization",
    depth: "flat",
    headline: "Named people, not a shared login",
    lead:
      "Individual accounts for everyone who touches client work. The most common access failure at small agencies is a shared login, and it fails in the week somebody leaves.",
    summary: "Individual named accounts for everyone working on client material.",
    seoTitle: "Users — named accounts for agency team members",
    seoDescription:
      "Individual user accounts for everyone touching client work, and why shared logins fail at exactly the moment they matter.",
    updated: "2026-09-02",
    meaning: "An account per person who works on client material, with their access recorded against them individually.",
    job: "Know who did what, and be able to remove access for one person.",
    whyAgencies: [
      { label: "Departures are when this matters", body: "The entire value of individual accounts is realised in the week somebody leaves. With a shared login, the only option is to change it for everyone." },
      { label: "Attribution requires it", body: "'Who changed this' is unanswerable when everyone is the same account." },
      { label: "Clients increasingly ask", body: "A procurement review asking who has access to their material gets a poor answer from an agency using shared credentials." },
    ],
    inputs: ["Everyone who touches client work, including freelancers", "What each person actually needs access to", "A leavers process"],
    outputs: ["Individual accounts per person", "A record of who has access to what", "A basis for the audit trail"],
    sequence: [
      { title: "The agency adds people individually", body: "Including freelancers and contractors, who are the most commonly overlooked.", lane: "agency" },
      { title: "Access is recorded per person", body: "Individually rather than collectively.", lane: "mengo" },
      { title: "The agency removes access on departure", body: "Promptly. This is the step the whole capability exists for.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether freelancers get accounts", body: "They should. A freelancer using a staff member's login is the worst of both worlds." },
      { label: "How quickly to remove access", body: "Immediately on departure. Every day of delay is unnecessary exposure." },
    ],
    limits: [
      "It does not manage the agency's other systems. Removing someone here does not remove them from anything else.",
      "It cannot enforce a leavers process — that is organisational.",
      "It is not an HR or identity management system.",
    ],
    stages: [],
    related: { capabilities: ["roles-and-permissions", "organization", "audit-log", "sops"], workflows: ["team-handoffs", "agency-sop-creation"], useCases: ["improve-team-handoffs"] },
    faqs: [
      { q: "Should freelancers have their own accounts?", a: "Yes. A freelancer working under a permanent staff member's login means you cannot attribute anything they did and cannot remove their access without disrupting the staff member." },
      { q: "Is this really necessary for two people?", a: "Yes, and it is the cheapest thing on this page. Two named accounts cost nothing and mean that when one of you leaves, the other does not have to change every credential." },
    ],
  },

  {
    kind: "capability",
    slug: "roles-and-permissions",
    title: "Roles & Permissions",
    navLabel: "Roles & Permissions",
    group: "organization",
    depth: "flat",
    headline: "What each person can reach",
    lead:
      "Access scoped to what someone actually needs. Ceremony below about five people; load-bearing above it, and the thing a client's procurement function asks about first.",
    summary: "Access scoped by role, so people reach the client material their work requires and no more.",
    seoTitle: "Roles & Permissions — scoping access in an agency",
    seoDescription:
      "Access scoped by role so agency team members reach only the client material their work requires, and what a procurement review expects to see.",
    updated: "2026-09-02",
    meaning: "A mapping from a person's role to the client workspaces and capabilities they can reach.",
    job: "Make sure people can reach what they need and nothing they do not.",
    whyAgencies: [
      { label: "Client contracts increasingly require it", body: "Larger clients ask who can access their material. Broad access across an agency is difficult to defend in a review." },
      { label: "It limits the blast radius of a mistake", body: "Most damage is accidental. Scoped access limits how far an accident reaches." },
      { label: "It separates clients properly", body: "Two clients in the same sector should not be a permissions oversight away from each other." },
    ],
    inputs: ["The roles that actually exist in the agency", "Which people work on which clients", "Any client contractual restrictions on access"],
    outputs: ["Roles mapped to access", "Per-client access recorded", "A basis for answering a client access question"],
    sequence: [
      { title: "The agency defines its roles", body: "The ones that exist, not the ones on an org chart.", lane: "agency" },
      { title: "Access is scoped per role", body: "To what the role's work actually requires.", lane: "mengo" },
      { title: "The agency reviews periodically", body: "Access accumulates. A review finds people who no longer need what they have.", lane: "agency" },
    ],
    judgement: [
      { label: "How tightly to scope", body: "Too tight and people cannot work; too loose and it is not a control. Agencies err toward loose." },
      { label: "When roles are worth defining", body: "Below about five people this is ceremony. Above it, it becomes load-bearing quickly." },
    ],
    limits: [
      "It does not control access to the client's own systems.",
      "It cannot prevent someone with legitimate access from misusing it.",
      "It is not a security certification and should not be presented as one.",
    ],
    stages: [],
    related: { capabilities: ["users", "organization", "audit-log"], workflows: ["team-handoffs", "multi-client-delivery"], useCases: ["improve-team-handoffs", "manage-multiple-client-brands"] },
    faqs: [
      { q: "When should we start using roles?", a: "When people genuinely have different jobs — usually around five people. Adopting them earlier tends to mean nobody maintains them, which is worse than not having them." },
      { q: "What do clients actually ask about this?", a: "Who has access to their material, whether it is separated from other clients, and what happens when someone leaves. Being able to answer those three is most of what a procurement review wants." },
    ],
  },

  {
    kind: "capability",
    slug: "audit-log",
    title: "Audit Log",
    navLabel: "Audit Log",
    group: "organization",
    depth: "flat",
    headline: "What happened, and who did it",
    lead:
      "A record of activity. Uninteresting until the day somebody asks who changed something, at which point it is the only thing that matters.",
    summary: "A record of what was changed, when and by whom across client workspaces.",
    seoTitle: "Audit Log — activity records for agency accountability",
    seoDescription:
      "A record of what changed, when and by whom in client workspaces, for answering client questions and internal accountability.",
    updated: "2026-09-02",
    meaning: "A chronological record of significant activity: what changed, when, and which user made the change.",
    job: "Make 'who changed this' answerable without asking around.",
    whyAgencies: [
      { label: "It answers a question that otherwise causes friction", body: "Without a record, 'who changed this' becomes an accusation rather than a query." },
      { label: "Clients in regulated sectors ask for it", body: "Some client contracts require an activity record over material relating to them." },
      { label: "It supports a handover", body: "An account changing hands is easier to understand with a record of recent activity than without one." },
    ],
    inputs: ["Nothing — it is a byproduct of using the system"],
    outputs: ["A chronological activity record", "Attribution per change", "A basis for answering a client query about their material"],
    sequence: [
      { title: "Activity is recorded", body: "Automatically, as a byproduct of work happening.", lane: "mengo" },
      { title: "The agency consults it when needed", body: "Usually during a handover or after an unexpected change.", lane: "agency" },
    ],
    judgement: [
      { label: "What to do with what it shows", body: "A log showing a mistake is an opportunity to fix a process, not to find someone to blame. How it is used determines whether people trust it." },
      { label: "Whether it meets a client's requirement", body: "A client's contractual audit requirement is specific. Check theirs rather than assuming this satisfies it." },
    ],
    limits: [
      "It records activity in this system only, not in the client's tools or your other systems.",
      "It is not a compliance certification.",
      "It cannot tell you why something was changed.",
    ],
    stages: [],
    related: { capabilities: ["users", "roles-and-permissions", "email-logs"], workflows: ["team-handoffs", "client-reporting"], useCases: ["improve-team-handoffs"] },
    faqs: [
      { q: "Does this satisfy a client's audit requirement?", a: "It is one input, not an answer. What a specific client's contract requires is a question to settle with them before an engagement rather than during an audit." },
      { q: "How should we use it internally?", a: "For understanding rather than for blame. A log used to find someone to blame becomes a log people work around." },
    ],
  },

  {
    kind: "capability",
    slug: "email-logs",
    title: "Email Logs",
    navLabel: "Email Logs",
    group: "organization",
    depth: "flat",
    headline: "What was sent from the account",
    lead:
      "A record of system-generated email. Useful for confirming what went out and when, and for the occasional question about whether something was delivered.",
    summary: "A record of email sent from the account, for confirming what went out and when.",
    seoTitle: "Email Logs — a record of what the account sent",
    seoDescription:
      "A record of system-generated email from the account, for confirming what was sent, to whom and when.",
    updated: "2026-09-02",
    meaning: "A record of email generated by the system: what was sent, to whom, and when.",
    job: "Answer 'was that sent' without guessing.",
    whyAgencies: [
      { label: "It settles a common question quickly", body: "Whether a notification went out is otherwise a matter of memory." },
      { label: "It helps diagnose a delivery problem", body: "Knowing something was sent narrows the problem to delivery rather than to generation." },
    ],
    inputs: ["Nothing — a byproduct of the system operating"],
    outputs: ["A record of sent system email", "Timing and recipient per message"],
    sequence: [
      { title: "System email is recorded", body: "Automatically.", lane: "mengo" },
      { title: "The agency consults it when a question arises", body: "Usually about whether a notification reached someone.", lane: "agency" },
    ],
    judgement: [
      { label: "What a delivery failure means", body: "A failure to deliver may indicate an address problem, a filter or a suppression. Diagnosing which needs a person." },
    ],
    limits: [
      "It covers system email only. Client marketing email sent from their own platform is not visible here.",
      "It does not report opens or clicks.",
      "It is not a deliverability tool.",
    ],
    stages: [],
    related: { capabilities: ["audit-log", "email-templates", "users"], workflows: ["client-reporting"], useCases: [] },
    faqs: [
      { q: "Does this show client campaign email?", a: "No. Campaign and nurturing email is sent from the client's own platform, and that platform holds its own logs. This covers system-generated email only." },
      { q: "Can we see open rates here?", a: "No. Open and click data belongs to whichever platform sent the message, which for client marketing is the client's own tool." },
    ],
  },

  /* -------------------------------------------------------------- System */
  {
    kind: "capability",
    slug: "ai-chat",
    title: "AI Chat",
    navLabel: "AI Chat",
    group: "system",
    depth: "flat",
    headline: "The everyday interface, with the client's context already in it",
    lead:
      "Conversational access to the work, with the client's stored business profile, positioning and voice already loaded. The difference from a general chat tool is that it does not need to be told who the client is every time.",
    summary: "Conversational working with the client's stored context already present, rather than supplied each time.",
    seoTitle: "AI Chat — working with client context already loaded",
    seoDescription:
      "Conversational access to client work with the stored business profile, positioning and voice already present rather than re-supplied each session.",
    updated: "2026-09-02",
    meaning: "A conversational interface operating against a client's stored context: their profile, offers, segments, positioning and voice.",
    job: "Remove the part where you explain the client before you can ask anything.",
    whyAgencies: [
      { label: "Context re-supply is the hidden cost of general tools", body: "A general chat tool produces good answers and forgets. Every session begins by describing the client again, which is the same reassembly cost in a new form." },
      { label: "It keeps clients separate", body: "Work happens against one client's context at a time, which is a boundary a general tool does not enforce." },
      { label: "It is where the day actually happens", body: "Worth learning properly rather than discovering by accident." },
    ],
    inputs: ["The client's stored context", "What you are actually trying to produce"],
    outputs: ["Work produced against the client's real context", "Consistency with everything else stored for that client"],
    sequence: [
      { title: "The agency selects the client", body: "Work happens in one client's context at a time.", lane: "agency" },
      { title: "Stored context is applied", body: "Profile, positioning, segments and voice, without being re-supplied.", lane: "mengo" },
      { title: "The agency reviews everything produced", body: "Conversational output is a draft like any other and gets the same review.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the output is right for this client", body: "Fluency is not accuracy. Everything produced conversationally needs the same review as anything else." },
      { label: "What not to put in", body: "Commercially sensitive material and anything a client shared in confidence needs a decision before it goes anywhere." },
    ],
    limits: [
      "It knows only what has been stored. Unstated context is absent rather than inferred.",
      "It does not verify facts about the client's business.",
      "Output is a draft. It is not reviewed by anything except you.",
    ],
    stages: [],
    related: { capabilities: ["ai-processing", "business-profile", "brand"], workflows: ["content-production"], useCases: ["reduce-repetitive-work"] },
    faqs: [
      { q: "How is this different from a general AI tool?", a: "Persistence. A general tool gives a good answer and forgets the context, so the next task starts by describing the client again. Here the client's stored layer is already present, which is what makes the fortieth output consistent with the first." },
      { q: "Does it review its own output?", a: "No. Everything produced is a draft, and your review is the only review. That is stated in every workflow on this site for the same reason." },
    ],
  },

  {
    kind: "capability",
    slug: "ai-processing",
    title: "AI Processing",
    navLabel: "AI Processing",
    group: "system",
    depth: "flat",
    headline: "What happens to client material, and when",
    lead:
      "How work is processed. Worth reading before a client asks rather than after, because it is the substance behind every question they will have about how you work.",
    summary: "How client material is processed — the factual basis for answering a client's questions about your delivery.",
    seoTitle: "AI Processing — what happens to client material",
    seoDescription:
      "How client material is processed, and the basis for answering client and procurement questions about agency delivery.",
    updated: "2026-09-02",
    meaning: "The behaviour of the processing layer: what happens to material submitted, how outputs are generated, and what the boundaries are.",
    job: "Let you answer a client's question about how their material is handled.",
    whyAgencies: [
      { label: "Clients are asking, increasingly through procurement", body: "Being unable to answer is worse than any answer, and the question arrives without warning." },
      { label: "It determines what you should put in", body: "Knowing how material is handled is what lets you decide what belongs and what does not." },
      { label: "It is the basis for your own disclosure position", body: "Whatever you tell clients about how you work should be grounded in this rather than in assumption." },
    ],
    inputs: ["Nothing — this is a property of the system"],
    outputs: ["A factual account you can give a client", "The basis for deciding what material to submit"],
    sequence: [
      { title: "The agency reads it before a client asks", body: "The whole point. Reading it during a procurement review is too late.", lane: "agency" },
      { title: "The agency decides what may be submitted", body: "Against their own client contracts.", lane: "agency" },
    ],
    judgement: [
      { label: "What your contracts permit", body: "Client agreements vary in what they allow regarding third-party processing. Check yours." },
      { label: "What to tell clients", body: "Your disclosure position is yours to set. This gives you the facts to set it on." },
    ],
    limits: [
      "It is a description of behaviour, not a legal assurance.",
      "It does not answer what a specific client's contract requires — that is between you and them.",
      "Specific questions about retention, residency and sub-processors should be asked directly rather than inferred from a page.",
    ],
    stages: [],
    related: { capabilities: ["ai-chat", "settings", "help-and-support"], workflows: [], useCases: [] },
    faqs: [
      { q: "What should we tell a client who asks how we use AI?", a: "Something specific and true. Our Responsible AI page is written to be quotable, and this capability is the factual basis underneath it. Being unable to answer is the outcome to avoid." },
      { q: "What if a client's contract restricts third-party processing?", a: "Raise it before a pilot rather than after. That restriction is real and reasonably common, and discovering a conflict mid-engagement is the worst version of the conversation." },
    ],
  },

  {
    kind: "capability",
    slug: "settings",
    title: "Settings",
    navLabel: "Settings",
    group: "system",
    depth: "flat",
    headline: "Configuration, done once",
    lead: "Account-level configuration. Ten minutes at the start and then rarely revisited, which is how it should be.",
    summary: "Account-level configuration for the agency workspace.",
    seoTitle: "Settings — account configuration",
    seoDescription: "Account-level configuration for an agency workspace, set once at the start.",
    updated: "2026-09-02",
    meaning: "Account-level configuration governing how the workspace behaves.",
    job: "Set it up once so it does not need thinking about again.",
    whyAgencies: [
      { label: "Defaults propagate", body: "Configuration set once applies across the work, so getting it right at the start saves correcting it repeatedly." },
      { label: "It rarely needs revisiting", body: "Which is the mark of configuration done properly." },
    ],
    inputs: ["The agency's preferences and requirements"],
    outputs: ["A configured workspace"],
    sequence: [
      { title: "The agency configures it", body: "At setup.", lane: "agency" },
      { title: "The agency revisits on a material change", body: "Rarely.", lane: "agency" },
    ],
    judgement: [
      { label: "What defaults suit the agency", body: "A judgement about how the agency works, which is worth ten minutes at the start." },
    ],
    limits: ["It configures this workspace only.", "It does not affect the client's own tools.", "It is not a substitute for a documented process."],
    stages: [],
    related: { capabilities: ["organization", "profile", "ai-processing"], workflows: [], useCases: [] },
    faqs: [
      { q: "How much configuration is needed to start?", a: "Very little. The organisation record and individual user accounts matter; most of the rest can stay at its defaults until you have a reason to change it." },
    ],
  },

  {
    kind: "capability",
    slug: "profile",
    title: "Profile",
    navLabel: "Profile",
    group: "system",
    depth: "flat",
    headline: "Your own account",
    lead: "Individual account details and preferences. Personal rather than agency-level.",
    summary: "Individual account details and preferences for one person.",
    seoTitle: "Profile — individual account details",
    seoDescription: "Individual account details and preferences within an agency workspace.",
    updated: "2026-09-02",
    meaning: "The individual's own account record: identity, contact details and personal preferences.",
    job: "Keep an individual's own details current.",
    whyAgencies: [
      { label: "Attribution depends on it", body: "The audit trail attributes work to a person, which requires that person to be identifiable." },
      { label: "It is where notification preferences live", body: "Which matters more than it sounds when several people work across several accounts." },
    ],
    inputs: ["The individual's own details"],
    outputs: ["A current personal account record"],
    sequence: [{ title: "The individual maintains it", body: "Personal rather than administrative.", lane: "agency" }],
    judgement: [{ label: "Notification preferences", body: "A judgement about how much interruption is useful, which differs by role." }],
    limits: ["It is personal to one account.", "It does not control permissions, which are set at the role level.", "It is not an identity provider."],
    stages: [],
    related: { capabilities: ["users", "settings", "roles-and-permissions"], workflows: [], useCases: [] },
    faqs: [
      { q: "Is this different from Users?", a: "Yes. Users is the administrative view of everyone in the agency; Profile is an individual's view of their own account. Different audiences, different jobs." },
    ],
  },

  {
    kind: "capability",
    slug: "subscription",
    title: "Subscription",
    navLabel: "Subscription",
    group: "system",
    depth: "flat",
    headline: "What the agency is on, and what it costs",
    lead: "Plan, billing and usage. Relevant to whoever owns the agency's costs, and rarely to anybody else.",
    summary: "Plan, billing and usage for the agency's own account.",
    seoTitle: "Subscription — plan and billing",
    seoDescription: "Plan, billing and usage information for an agency's own Mengo account.",
    updated: "2026-09-02",
    meaning: "The agency's own commercial arrangement: plan, billing and usage against it.",
    job: "Let whoever owns the costs see what they are.",
    whyAgencies: [
      { label: "It is a cost line in your delivery model", body: "If you are modelling capacity or repricing retainers, this is an input to that arithmetic." },
      { label: "Usage informs capacity planning", body: "Knowing what the book actually consumes helps when deciding whether another account fits." },
    ],
    inputs: ["The agency's commercial arrangement"],
    outputs: ["Plan and billing visibility", "Usage against the plan"],
    sequence: [{ title: "The agency reviews it", body: "Typically when planning capacity or reviewing costs.", lane: "agency" }],
    judgement: [{ label: "How this fits your pricing", body: "A commercial decision. The guide on pricing retainers covers the reasoning." }],
    limits: ["It covers the agency's own arrangement only.", "It has no view of your clients' commercial arrangements.", "It does not model your delivery costs for you."],
    stages: [],
    related: { capabilities: ["organization", "settings"], workflows: ["agency-scaling"], useCases: ["scale-without-hiring"] },
    faqs: [
      { q: "How should this factor into our pricing?", a: "As a cost line in your delivery model rather than as something passed through per client. The guide on pricing retainers around a system covers the reasoning, including why hourly logic is a trap." },
    ],
  },

  {
    kind: "capability",
    slug: "help-and-support",
    title: "Help & Support",
    navLabel: "Help & Support",
    group: "system",
    depth: "flat",
    headline: "Getting a problem answered",
    lead:
      "How to raise a problem and what to expect. For an agency putting client delivery through a tool, response time is a delivery risk question rather than a nice-to-have.",
    summary: "How to raise a problem, and why response time is a delivery risk for an agency.",
    seoTitle: "Help & Support — raising a problem",
    seoDescription:
      "How to raise a problem with Mengo, and why support responsiveness is a delivery risk question for agencies rather than a convenience.",
    updated: "2026-09-02",
    meaning: "The route for reporting a problem or asking a question, and what to expect from it.",
    job: "Get a blocked piece of client work unblocked.",
    whyAgencies: [
      { label: "It is a delivery risk, not a convenience", body: "An agency with a client deadline and a blocked tool has a client problem. How quickly that resolves is part of your risk assessment." },
      { label: "Being specific gets faster answers", body: "What you were doing, what happened, what you expected. The same as any technical report." },
      { label: "It is worth testing during evaluation", body: "Raise something during a pilot and see what happens. That is more informative than any commitment on a page." },
    ],
    inputs: ["A clear description of the problem", "What you were doing and what you expected"],
    outputs: ["A route to a resolution"],
    sequence: [
      { title: "The agency raises it specifically", body: "Vague reports get slow answers everywhere.", lane: "agency" },
      { title: "The agency manages the client expectation", body: "A blocked tool is your client's problem to be managed, whoever caused it.", lane: "agency" },
    ],
    judgement: [
      { label: "When to escalate", body: "A blocked client deadline warrants a different urgency than a question." },
      { label: "What to tell the client", body: "Managing a delay is your relationship work regardless of the cause." },
    ],
    limits: [
      "It does not resolve problems in your clients' systems.",
      "It is not a marketing consultancy service.",
      "Response expectations depend on the arrangement you have.",
    ],
    stages: [],
    related: { capabilities: ["request-feature", "ai-processing", "subscription"], workflows: [], useCases: [] },
    faqs: [
      { q: "What should we test before committing?", a: "Raise something real during a pilot and see what happens. For an agency putting client delivery through a tool, that is a more useful data point than anything written on a page." },
    ],
  },

  {
    kind: "capability",
    slug: "request-feature",
    title: "Request Feature",
    navLabel: "Request Feature",
    group: "system",
    depth: "flat",
    headline: "Telling us what is missing",
    lead:
      "Mengo is early, and agencies telling us what is missing is currently the main input to what gets built. Requests describing the problem rather than the proposed solution are considerably more useful.",
    summary: "How to tell us what is missing — the main input to what gets built next.",
    seoTitle: "Request Feature — telling us what is missing",
    seoDescription:
      "How agencies can tell us what is missing from Mengo, and why describing the problem is more useful than describing a proposed feature.",
    updated: "2026-09-02",
    meaning: "The route for telling us what is missing or what does not work for your agency.",
    job: "Get the thing your agency actually needs onto the list.",
    whyAgencies: [
      { label: "Mengo is early and this genuinely shapes it", body: "We would rather say that plainly than imply a fixed roadmap. Agency requests are currently the main input to what gets built." },
      { label: "The problem is more useful than the solution", body: "'We cannot do X because Y' tells us more than 'add a button that does Z', and often produces a better answer than the one requested." },
      { label: "Agency needs differ from end-user needs", body: "Mengo was built first for business owners marketing their own company. Where the agency case diverges is exactly what we need to hear." },
    ],
    inputs: ["The problem, described concretely", "What you are trying to achieve", "What you do currently instead"],
    outputs: ["A recorded request"],
    sequence: [
      { title: "The agency describes the problem", body: "Concretely, with the situation rather than only the proposed fix.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether it is a gap or a workflow question", body: "Some requests are answered by an existing capability used differently, which is a faster resolution than a build." },
    ],
    limits: [
      "A request is not a commitment to build.",
      "There is no published roadmap, and implying otherwise would be dishonest.",
      "It is not a support route — a broken thing goes to support, not here.",
    ],
    stages: [],
    related: { capabilities: ["help-and-support"], workflows: [], useCases: [] },
    faqs: [
      { q: "Will you build what we ask for?",
        a: "Sometimes, and we will not pretend to a roadmap we do not publish. What is true is that Mengo is early, the agency use case is newer than the end-user one, and agencies telling us where it does not fit is the main thing shaping what comes next." },
      { q: "How should a request be written?",
        a: "Describe the problem and what you currently do instead, rather than the feature you have in mind. That frequently produces a better answer than the one requested, and sometimes an answer that already exists." },
    ],
  },
];
