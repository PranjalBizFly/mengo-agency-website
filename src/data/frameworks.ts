import type { Framework } from "@/lib/types";

/**
 * Named, reusable structures.
 *
 * A framework page exists to give an agency something they can adopt and use
 * under their own name — including without Mengo. The first one, the Ownership
 * Ledger, is also the structural device this whole site is built on, which
 * makes it the closest thing here to a statement of position.
 */
export const frameworks: Framework[] = [
  {
    kind: "framework",
    slug: "the-ownership-ledger",
    title: "The Ownership Ledger",
    headline: "The Ownership Ledger",
    lead:
      "A single-page division of every part of a client engagement into what the agency owns and what is supported. It exists to make an implicit boundary explicit, before a deadline makes it ambiguous.",
    summary:
      "A two-column method for deciding, in advance, which parts of client delivery must stay with a person and which may be systematised.",
    seoTitle: "The Ownership Ledger — an agency delivery framework",
    seoDescription:
      "A framework for dividing client delivery into what the agency owns and what can be supported, so the boundary is decided in advance rather than under deadline.",
    updated: "2026-08-30",
    problem:
      "Under deadline, the boundary between work that needs judgement and work that does not gets decided by whoever is closest to the deadline. The ledger makes that decision once, in advance, when nobody is under pressure.",
    parts: [
      { label: "The two lanes", body: "Every activity in the engagement goes in exactly one lane: agency-owned or supported. Nothing sits in both, because 'shared' is where accountability disappears." },
      { label: "The test", body: "Would two competent practitioners in your agency produce meaningfully different output, in a way the client would notice and care about? If yes, it is agency-owned." },
      { label: "The permanent entries", body: "Four things are always agency-owned regardless of what the test says: client relationship, strategic recommendation, final approval, and accountability for what ships." },
      { label: "The checkpoint", body: "Every transition from the supported lane back to the agency lane is a required step in the workflow, not a guideline. A guideline is what gets skipped in week eleven." },
      { label: "The review date", body: "The ledger is revisited on a schedule. Capability changes, and a ledger that describes last year's boundary is worse than none." },
    ],
    blocks: [
      { type: "text", text: "Most agencies have never drawn this boundary explicitly. It exists, but as an accumulation of individual decisions made under time pressure, which means it is inconsistent across accounts and invisible to everyone except the person who made each call." },
      { type: "heading", text: "How to build one" },
      { type: "steps", items: [
        { title: "List every activity in a typical engagement", body: "Granular enough to be actionable. 'Content' is not an activity; 'writing a first draft against a brief' is.", lane: "agency" },
        { title: "Apply the test to each", body: "Would two competent people in your agency produce meaningfully different output that a client would notice? That difference is judgement.", lane: "agency" },
        { title: "Add the permanent entries", body: "Client relationship, strategic recommendation, final approval, accountability. These are agency-owned whatever the test suggests.", lane: "agency" },
        { title: "Mark the transitions", body: "Wherever work crosses from the supported lane back to the agency lane, that is a checkpoint. Write it into the workflow.", lane: "agency" },
        { title: "Set a review date", body: "Six months is reasonable. Put it in a calendar, with an owner.", lane: "agency" },
      ] },
      { type: "heading", text: "The entries that are always agency-owned" },
      { type: "ledger", ledger: {
        agency: {
          heading: "Always the agency",
          note: "Regardless of tooling, scale or deadline.",
          items: [
            { label: "The client relationship", body: "Every conversation, every difficult message, every renegotiation. A client's relationship is with people." },
            { label: "The strategic recommendation", body: "What you actually advise. Drafts inform it; they do not constitute it." },
            { label: "Final approval", body: "A named person decides that work is good enough to carry the agency's name." },
            { label: "Accountability", body: "When something goes wrong, a person is answerable. This cannot be distributed to a system." },
          ],
        },
        mengo: {
          heading: "Can be supported",
          note: "Subject to the test, and always with a checkpoint on the way back.",
          items: [
            { label: "Research assembly", body: "Gathering context, provided gaps are flagged rather than filled." },
            { label: "Structural drafting", body: "Plans, briefs and first drafts, provided a person reviews them." },
            { label: "Format production", body: "Producing the same message in the shapes different channels need." },
            { label: "Sequence construction", body: "Building follow-up flows to an agreed anatomy, for review before activation." },
          ],
        },
      } },
      { type: "heading", text: "Using it with clients" },
      { type: "text", text: "The ledger is also the clearest possible answer to a client asking how you work. Showing a client which parts of their engagement are carried by a person, and where the review sits, converts an anxious question into a demonstration that you have thought about it." },
      { type: "note", text: "This framework is yours to use, adapt and publish under your own name. It is a way of thinking, not a product feature." },
    ],
    related: { workflows: ["client-onboarding", "scale-client-delivery"], playbooks: ["building-a-content-system-for-one-client"] },
  },

  {
    kind: "framework",
    slug: "the-client-delivery-spine",
    title: "The Client Delivery Spine",
    headline: "The Client Delivery Spine",
    lead:
      "One sequence, drawn end to end, that every client engagement runs through regardless of sector or size. Its purpose is to make the shape of delivery visible so that gaps become obvious.",
    summary:
      "The nine-step sequence underlying most agency marketing delivery, and how to use it to find where your own process has holes.",
    seoTitle: "The Client Delivery Spine — an agency workflow framework",
    seoDescription:
      "A nine-step spine underlying agency marketing delivery, from client conversation through to delivery and review, used to locate gaps in an existing process.",
    updated: "2026-08-30",
    problem:
      "Agency delivery processes are usually described in terms of deliverables, which hides the steps between them. The gaps are always in the between.",
    parts: [
      { label: "It is one line, not a cycle", body: "Delivery repeats, but each pass runs in one direction. Drawing it as a cycle hides where work actually stalls." },
      { label: "Every step has an owner", body: "A step without an owner is a step that does not reliably happen." },
      { label: "It opens and closes with the agency", body: "Client contact is the first step and the last. Nothing reaches a client that a person did not hand over." },
      { label: "The gaps are the finding", body: "Most agencies discover two or three steps they do not actually perform, usually validation and retrospective." },
    ],
    blocks: [
      { type: "text", text: "Draw your own delivery as a single line and the omissions become visible immediately. In our experience of describing this with agency people, the two steps most often missing are validating research before building strategy on it, and running a retrospective against a definition agreed in advance." },
      { type: "heading", text: "The spine" },
      { type: "steps", items: [
        { title: "Client conversation", body: "Understanding the business well enough to advise it. The step everything else depends on.", lane: "agency" },
        { title: "Brief capture", body: "The conversation becomes a written brief in a consistent structure.", lane: "agency" },
        { title: "Research", body: "Audience, competitor and channel context assembled, with unknowns marked as unknown.", lane: "mengo" },
        { title: "Validation", body: "The agency checks the research against what it knows. The most commonly skipped step on this list.", lane: "agency" },
        { title: "Strategy", body: "Positioning, segments, offer structure and channel priorities drafted from validated research.", lane: "mengo" },
        { title: "The strategic call", body: "The agency decides what it actually recommends. Not a review of a draft — a decision.", lane: "agency" },
        { title: "Production", body: "Plans, briefs, drafts and sequences built against the approved strategy.", lane: "mengo" },
        { title: "Review and approval", body: "A named person decides the work is right for this client.", lane: "agency" },
        { title: "Delivery and retrospective", body: "The agency presents, the client responds, and what was learned is recorded against the original definition.", lane: "agency" },
      ] },
      { type: "heading", text: "How to use it" },
      { type: "list", items: [
        "Map your current process against the nine steps and mark which you genuinely perform.",
        "For each missing step, ask what happens instead. Usually the answer is that the next step absorbs it badly.",
        "For each step, name the owner. Any step without one is at risk.",
        "Measure elapsed time between steps. Delay lives between steps far more than within them.",
      ] },
      { type: "note", text: "Validation is skipped so often because it feels like duplicated effort — the research is already done. It is the step that stops a confident, wrong document becoming the foundation of a quarter's work." },
      { type: "heading", text: "Why the direction matters" },
      { type: "text", text: "Drawing delivery as a loop suggests every step feeds every other, which is how processes become impossible to diagnose. A line has a beginning, an end, and identifiable places where things stop moving." },
    ],
    related: { workflows: ["client-onboarding", "strategy-and-planning"], playbooks: ["first-ninety-days-with-a-new-client"] },
  },

  {
    kind: "framework",
    slug: "the-agency-capacity-model",
    title: "The Agency Capacity Model",
    headline: "The Agency Capacity Model",
    lead:
      "A method for answering 'can we take this on' with arithmetic instead of instinct. It requires two weeks of measurement and an afternoon of thinking, and it replaces a decision most agencies currently make on mood.",
    summary:
      "A simple model for agency delivery capacity: fixed cost per account, variable cost with volume, and the constraint that binds first.",
    seoTitle: "The Agency Capacity Model — a framework for delivery capacity",
    seoDescription:
      "A framework for modelling agency delivery capacity: separating fixed per-account cost from variable cost, identifying the binding constraint, and setting a decision rule.",
    updated: "2026-08-30",
    problem:
      "Agencies decide whether to accept a client using instinct formed during whatever month they happen to be in. The result is over-commitment in thin months and under-selling in busy ones.",
    parts: [
      { label: "Fixed cost per account", body: "The hours an account consumes regardless of size: onboarding, strategic layer, reporting rhythm, relationship maintenance. This is why small accounts lose money." },
      { label: "Variable cost with volume", body: "Production and review, which scale with what the client actually receives." },
      { label: "The binding constraint", body: "The category that runs out first as you add accounts. Only this one matters for the decision." },
      { label: "The buffer", body: "Deliberate unused capacity. Running at a hundred percent means the first unusual week produces unreviewed work reaching a client." },
      { label: "The decision rule", body: "Written down before a prospect calls. What has to be true for you to say yes." },
    ],
    blocks: [
      { type: "text", text: "This model is deliberately crude. A precise model nobody maintains is worth less than a rough one used before every decision." },
      { type: "heading", text: "Building it" },
      { type: "steps", items: [
        { title: "Measure for two weeks", body: "Hours by work category rather than by client. Everyone who touches delivery, founder included.", lane: "agency" },
        { title: "Split fixed from variable", body: "Which hours would occur for any account of any size, and which scale with what the client gets.", lane: "agency" },
        { title: "Compute cost per account", body: "Fixed hours plus variable hours at that account's service level. Compare against the retainer.", lane: "agency" },
        { title: "Identify what binds", body: "Add a hypothetical account and see which category runs out first. That is your constraint.", lane: "agency" },
        { title: "Set the buffer and the rule", body: "How much unused capacity you keep, and what has to be true to accept another client.", lane: "agency" },
      ] },
      { type: "heading", text: "What the model usually reveals" },
      { type: "terms", items: [
        { label: "Small accounts are subsidised", body: "Fixed cost per account is close to constant, so the smallest retainers frequently lose money once relationship time is counted." },
        { label: "Senior time is the real constraint", body: "More often than total hours, and it is the constraint that hiring juniors makes worse rather than better." },
        { label: "The buffer does not exist", body: "Most agencies discover they are running at or above full utilisation and calling it normal." },
        { label: "Rework is a large hidden category", body: "And unlike the others it can be reduced directly, by fixing briefs and approvals." },
      ] },
      { type: "heading", text: "Using it in a sales conversation" },
      { type: "text", text: "A minimum retainer derived from a model is much easier to hold than one derived from a feeling, because you can explain it. Agencies that can articulate why an account below a certain size does not work for them decline that work faster and with less regret." },
      { type: "quote", text: "The purpose of the model is not accuracy. It is to make the capacity decision a calculation somebody can disagree with, rather than an instinct nobody can examine." },
    ],
    related: { workflows: ["scale-client-delivery"], playbooks: ["taking-on-your-fourth-client"] },
  },

  {
    kind: "framework",
    slug: "the-standard-client-brief",
    title: "The Standard Client Brief",
    headline: "The Standard Client Brief",
    lead:
      "One brief structure, used on every client, filled the same way every time. It is the least glamorous artefact an agency can build and the one with the highest return per hour spent.",
    summary:
      "The fields a client brief needs, why consistency across accounts matters more than the specific fields, and how to fill it from a conversation.",
    seoTitle: "The Standard Client Brief — an agency framework",
    seoDescription:
      "A consistent client brief structure for agencies: the fields that matter, why cross-account consistency beats field selection, and how to capture it from a conversation.",
    updated: "2026-08-30",
    problem:
      "When each client's brief has a different shape, nothing downstream can be consistent — and the person who ran the kickoff becomes the only person who can produce the plan.",
    parts: [
      { label: "Consistency beats completeness", body: "A shorter brief used identically on every account is worth more than a comprehensive one filled differently each time." },
      { label: "Gaps are recorded, not filled", body: "'The client does not know' is a valid and highly informative answer. Guessing to complete the form destroys the brief's value." },
      { label: "It is filled from conversation", body: "Sending it as a form produces short, defensive answers. Filling it during a conversation produces the useful material." },
      { label: "It is versioned", body: "Businesses change. A brief with no revision history quietly becomes wrong." },
    ],
    blocks: [
      { type: "text", text: "The specific fields matter far less than agencies expect. What matters is that they are the same fields on every account, so that anyone can pick up any client and know where to look." },
      { type: "heading", text: "The fields" },
      { type: "terms", items: [
        { label: "What they sell", body: "In their words first, then in yours. The gap between the two is often the positioning problem." },
        { label: "What it costs", body: "Price point shapes channel choice, cycle length and content depth more than almost anything else." },
        { label: "Who buys it", body: "Not a demographic. A description of a person in a situation, with a job to be done." },
        { label: "What stops them buying", body: "The single most useful field on the form, and the one clients answer worst without prompting." },
        { label: "Where traction already exists", body: "What is currently working, even accidentally. Ignoring this is how agencies replace something functional with something new." },
        { label: "Commercial constraints", body: "Launches, seasons, capacity limits, things the client will not do." },
        { label: "Who decides", body: "Who approves work, who can veto it, and how long they need." },
        { label: "What went wrong before", body: "What the last agency or attempt got wrong. This is what you will be measured against." },
      ] },
      { type: "heading", text: "Filling it properly" },
      { type: "list", items: [
        "Fill it during a conversation, not by sending a form. Forms produce the answers people think you want.",
        "Ask 'what stops them buying' three different ways. The first answer is almost always the price, and it is almost always not the price.",
        "Write the client's own words in quotation marks where they are vivid. Those phrases are the beginning of the voice profile.",
        "Record explicitly what nobody knows. That list is your first research brief.",
      ] },
      { type: "note", text: "The most common failure is completing the brief from your own assumptions after the meeting, because the gaps felt like an incomplete job. The gaps are the most valuable output of the exercise." },
      { type: "heading", text: "Why it pays back" },
      { type: "text", text: "Everything downstream inherits from it. Research knows what to look for, strategy knows what it is solving, content knows who it is speaking to, and nurturing knows which objection it is answering. A vague brief does not produce a vague plan — it produces a confident plan built on assumptions nobody wrote down." },
    ],
    related: { workflows: ["client-onboarding"], playbooks: ["first-ninety-days-with-a-new-client"] },
  },
];

export const frameworkBySlug = new Map(frameworks.map((f) => [f.slug, f]));
