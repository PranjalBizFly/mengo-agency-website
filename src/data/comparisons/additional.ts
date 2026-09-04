import type { Comparison } from "@/lib/types";

/**
 * The alternatives agencies weigh that are not other products.
 *
 * Each of these has a `chooseOther` section that genuinely wins in real
 * situations. A comparison where the alternative never wins is an
 * advertisement with a table in it, and this audience recognises that.
 */
export const additionalComparisons: Comparison[] = [
  {
    kind: "comparison",
    slug: "mengo-vs-building-internal-systems",
    title: "Mengo vs Building Internal Systems",
    navLabel: "vs Building Your Own",
    other: "Building it yourself",
    headline: "The system you build is exactly right and never finished",
    lead:
      "Plenty of agencies build their own delivery system out of documents, templates and automation. It fits perfectly, costs nothing in subscription, and consumes the attention of whoever built it for as long as it exists.",
    summary:
      "An internal system fits perfectly and needs an owner forever. When that trade is worth making, and when it is not.",
    seoTitle: "Mengo vs building your own agency delivery system",
    seoDescription:
      "An honest comparison between building an internal agency delivery system and adopting one: fit, maintenance cost, key-person risk and when building is right.",
    updated: "2026-09-02",
    question: "We could build this ourselves out of documents and automations. Should we?",
    rows: [
      { dimension: "Fit", other: "Exact. It does precisely what your agency does, in your language, with no compromise.", mengo: "Close but general. Some of it will not match how you work and you will adapt around it." },
      { dimension: "Build cost", other: "Weeks to months of somebody's attention, usually the person least able to spare it.", mengo: "Setup measured in days, mostly spent on the client context rather than the system." },
      { dimension: "Maintenance", other: "Permanent, and it is nobody's job title. Systems built in a burst of enthusiasm decay when the enthusiasm moves on.", mengo: "Not yours. Which also means changes happen on someone else's schedule." },
      { dimension: "Key-person risk", other: "High. The person who built it understands it, and frequently nobody else does.", mengo: "Lower on the tooling, unchanged on the judgement." },
      { dimension: "Flexibility", other: "Total. You can change anything, immediately.", mengo: "Bounded. Something genuinely unusual may not fit, and you cannot make it." },
      { dimension: "Cost over time", other: "No subscription. A recurring cost in attention that nobody measures.", mengo: "A visible subscription line, which is easier to evaluate precisely because it is visible." },
      { dimension: "Ownership", other: "Entirely yours, including if you stop.", mengo: "The process and the written standard are yours; the tooling is not." },
      { dimension: "What it teaches you", other: "A great deal. Building your own system forces you to understand your delivery properly.", mengo: "Less. Adopting a structure is faster and you learn less about your own process doing it." },
    ],
    chooseOther: [
      { label: "You have someone who genuinely owns it", body: "Not enthusiasm — an owner with time allocated. Internal systems fail on maintenance, not on construction." },
      { label: "Your delivery is genuinely unusual", body: "If your process does not resemble the shape most agency delivery takes, a general structure will fight you." },
      { label: "You are small and technical", body: "A two-person agency with the right skills can build something excellent in a fortnight and maintain it in an hour a month." },
      { label: "Client contracts restrict third-party processing", body: "Sometimes the constraint decides it, and that is a legitimate reason." },
      { label: "You want to understand your own delivery deeply", body: "Building it forces a rigour that adopting does not, and that rigour has value beyond the system." },
    ],
    chooseMengo: [
      { label: "Nobody has time to build and maintain it", body: "Which is the usual situation, and half-built internal systems are worse than none." },
      { label: "You want the structure now rather than in a quarter", body: "Adoption is faster than construction, and the gap is where the return is." },
      { label: "The person who would build it is your constraint", body: "Spending your most capacity-limited person on internal tooling is an expensive way to solve a delivery problem." },
      { label: "You want maintenance to be somebody else's problem", body: "Which is most of what a subscription actually buys." },
    ],
    together:
      "The useful hybrid is common: write your own process, your own standard and your own brief structure — those are yours regardless and this site publishes frameworks for exactly that — and use adopted tooling for the production layer underneath. The intellectual property stays yours; the maintenance does not.",
    faqs: [
      {
        q: "What usually goes wrong with internal systems?",
        a: "Maintenance. They are built well in a burst of enthusiasm by someone capable, and then that person's attention moves and the system slowly stops matching how the agency actually works. A half-current internal system is worse than none, because people follow it.",
      },
      {
        q: "Can we do both?",
        a: "Usually the right answer. Own your process, your standard and your brief structure — the frameworks on this site are published for exactly that — and let the production layer be adopted rather than built.",
      },
      {
        q: "Is building it a waste of time?",
        a: "No, and it teaches you things adoption does not. Building your own delivery system forces you to understand your process properly, which is valuable independently. The question is whether that is the best use of your scarcest person right now.",
      },
    ],
  },

  {
    kind: "comparison",
    slug: "mengo-vs-white-label",
    title: "Mengo vs White-Label Delivery",
    navLabel: "vs White-Label",
    other: "White-label delivery",
    headline: "Buying finished work versus buying the layer underneath it",
    lead:
      "White-label partners deliver finished output under your brand. It is a genuine solution to a capacity problem and it puts a third party between you and the work, which is either fine or exactly the problem depending on what you sell.",
    summary:
      "White-label delivers finished work under your name; this delivers the layer beneath yours. Where each fits and what each costs you.",
    seoTitle: "Mengo vs white-label agency delivery",
    seoDescription:
      "An honest comparison between white-label delivery partners and a structural delivery layer: control, margin, quality variance and client confidentiality.",
    updated: "2026-09-02",
    question: "We need more delivery capacity. Do we white-label it or change how we produce?",
    rows: [
      { dimension: "What arrives", other: "Finished work, produced by another agency's team to their standard.", mengo: "Structure and drafts, produced against your client context for your review." },
      { dimension: "Effort required from you", other: "Briefing and review. Genuinely less total work than producing it.", mengo: "Briefing and review, plus editing. More than white-label, less than producing from scratch." },
      { dimension: "Control over quality", other: "Indirect. You review the output; you do not control how it was made.", mengo: "Direct. Your standard, your review, your edit." },
      { dimension: "Margin", other: "Compressed. You are paying another agency's margin as well as your own costs.", mengo: "A fixed cost rather than a per-project margin." },
      { dimension: "Scales with volume", other: "Linearly, and the cost scales with it.", mengo: "Sub-linearly, until your review capacity binds." },
      { dimension: "Client confidentiality", other: "Client material goes to a third-party agency, sometimes one that also serves competitors.", mengo: "Held in your own account, separated per client." },
      { dimension: "Specialist disciplines", other: "Yes — design, video, media buying, development. This is where white-label genuinely wins.", mengo: "No. Written marketing work and the structure around it only." },
      { dimension: "Consistency across your book", other: "Varies with which partner and which of their people.", mengo: "Consistent by construction; quality still depends on your review." },
    ],
    chooseOther: [
      { label: "You need a discipline you do not have", body: "Design, video, development, media buying. A white-label partner with real specialists is the right answer and nothing here substitutes." },
      { label: "You need finished work rather than drafts", body: "If your team has no editing capacity at all, drafts are not capacity — they are more work waiting for someone." },
      { label: "The volume is spiky and short-term", body: "A one-off overflow is better absorbed by a partner than by changing your delivery model." },
      { label: "You want no fixed cost", body: "White-label scales to zero in a quiet month; a subscription does not." },
    ],
    chooseMengo: [
      { label: "The work is recurring and structural", body: "Paying another agency's margin for research assembly and first drafts is expensive capacity." },
      { label: "Consistency across your book matters", body: "White-label output varies by partner and by which of their people picked it up." },
      { label: "Client confidentiality is a concern", body: "Some clients will not accept their material going to another agency, particularly one serving their competitors." },
      { label: "You want your own standard applied", body: "White-label applies theirs, adjusted by your review. This applies yours from the start." },
    ],
    together:
      "The clean division is discipline-based: white-label for the crafts you do not have in-house — design, video, media operations — and a structural layer for the recurring written work. Agencies that white-label routine content are paying a premium for capacity they could hold themselves, and are still short of specialists when a project genuinely needs one.",
    faqs: [
      {
        q: "Is white-label bad?",
        a: "No. For specialist disciplines it is often the right answer, and a good partner is genuinely valuable. The question is whether you are using it for craft you cannot do or for volume you could produce more cheaply.",
      },
      {
        q: "What about client confidentiality?",
        a: "Worth checking your contracts. Some clients restrict their material going to third-party agencies, particularly ones that serve competitors, and that restriction can decide the question on its own.",
      },
      {
        q: "Which costs more?",
        a: "Depends on volume. White-label is a per-project margin, which is fine occasionally and expensive continuously. A fixed cost is the reverse. Model it against your actual recurring volume rather than against a single project.",
      },
    ],
  },

  {
    kind: "comparison",
    slug: "solo-vs-growing-agencies",
    title: "Solo vs Growing Agencies",
    navLabel: "Solo vs Growing",
    other: "A growing agency",
    headline: "The same system, two completely different problems",
    lead:
      "A one-person studio and a fifteen-person agency both hit delivery constraints, and almost nothing else about their situations is comparable. What helps each is genuinely different, and adopting the wrong version wastes the effort.",
    summary:
      "What the same delivery structure does for a solo agency versus a growing one, and why the priorities are almost opposite.",
    seoTitle: "Solo vs growing agencies — what changes",
    seoDescription:
      "How the same delivery structure serves a solo agency and a growing one differently: context switching versus consistency, and why the priorities differ.",
    updated: "2026-09-02",
    question: "We are at a transition point. Which version of this problem do we actually have?",
    rows: [
      { dimension: "The binding constraint", other: "Consistency across people, and senior review capacity.", mengo: "For a solo agency: hours, and the cost of switching between clients." },
      { dimension: "What hurts most", other: "Two people delivering the same service differently, and the founder being the escalation path for everything.", mengo: "For a solo agency: context reassembly several times a day, and no cover for anything." },
      { dimension: "First thing to fix", other: "A written standard, so quality stops depending on who reviewed it.", mengo: "For a solo agency: stored client context, so switching is reading rather than remembering." },
      { dimension: "What documentation is for", other: "Onboarding and consistency across a team.", mengo: "For a solo agency: making a pause recoverable and a freelancer briefable." },
      { dimension: "Where the risk is", other: "Quality drift across accounts, discovered by a client.", mengo: "For a solo agency: single point of failure, discovered by illness." },
      { dimension: "Hiring pressure", other: "Constant. Every account implies a role, and roles imply review load.", mengo: "For a solo agency: binary. The first hire is a large step taken all at once." },
      { dimension: "Review capacity", other: "Distributed but uneven, and usually the real bottleneck.", mengo: "For a solo agency: one person, who is also the writer — which is harder than either job alone." },
    ],
    chooseOther: [
      { label: "You have more than one person delivering", body: "Then consistency is your problem and a written standard is the first thing to build, before anything else." },
      { label: "The founder is the escalation path for everything", body: "That caps growth regardless of headcount, and it is a governance problem rather than a capacity one." },
      { label: "You are about to hire", body: "Documented process before a hire is worth more than tooling. A new person joining an undocumented agency costs two people's weeks." },
    ],
    chooseMengo: [
      { label: "You are the only person delivering", body: "Then hours and context switching are the constraint, and stored client context is the highest-return change available." },
      { label: "You cannot take a week off", body: "A solo agency's fragility is the real risk, and a written process makes a pause recoverable rather than a restart." },
      { label: "You are deciding whether to hire", body: "Moving the structural layer first tells you what you would actually be hiring for, which makes the eventual hire much better targeted." },
    ],
    together:
      "Most agencies pass through both. The order that works is: as a solo agency, store the client context and write the four-page process; as you add people, turn that process into a standard with named review checkpoints. Doing the second before the first produces governance over a delivery model nobody has examined.",
    faqs: [
      {
        q: "We are two people. Which are we?",
        a: "Closer to solo than you think. Two people who both do everything have a context and capacity problem rather than a consistency one. The consistency problem starts when people begin specialising, which is usually around four or five.",
      },
      {
        q: "What if we are between the two?",
        a: "Read the earlier stage. The problems described there are usually the ones still unresolved, and building governance on top of an unexamined delivery model is how agencies end up with process that nobody follows.",
      },
      {
        q: "Does the answer change what we should adopt?",
        a: "It changes the order. A solo agency should start with stored client context and a short written process. A growing agency should start with the standard and the review checkpoints. Same components, opposite priorities.",
      },
    ],
  },
];
