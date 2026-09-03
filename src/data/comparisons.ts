import type { Comparison } from "@/lib/types";

/**
 * Honest comparisons.
 *
 * The type requires a `chooseOther` section, and that is the point of these
 * pages. A comparison where the other option never wins is an advertisement
 * wearing a table's clothes, and an agency evaluating tooling recognises that
 * within about fifteen seconds. Each page here names the situations where the
 * alternative is genuinely the better answer, because a reader who finds one
 * honest section is more likely to believe the rest.
 */
export const comparisons: Comparison[] = [
  {
    kind: "comparison",
    slug: "mengo-vs-hiring",
    title: "Mengo vs Hiring",
    navLabel: "vs Hiring",
    other: "Hiring a marketer",
    headline: "A hire and a system solve different problems",
    lead:
      "This comparison is usually framed as a cost question and it is not one. A hire adds judgement, ownership and someone who will notice things nobody asked them to look at. A system adds throughput. Agencies that substitute one for the other are disappointed within a quarter.",
    summary:
      "A hire adds judgement and ownership; a system adds throughput. When each is the right answer, and why they are not really alternatives.",
    seoTitle: "Mengo vs hiring a marketer — what each actually solves",
    seoDescription:
      "An honest comparison for agencies weighing a new hire against a marketing system: what each provides, when hiring is clearly right, and where they work together.",
    updated: "2026-08-29",
    question: "We need more delivery capacity. Do we hire, or do we change how we deliver?",
    rows: [
      { dimension: "What it adds", other: "Judgement, ownership, initiative and a person who can be accountable for an account.", mengo: "Throughput on the structural layer: research, planning, briefs and first drafts." },
      { dimension: "Time to useful", other: "Weeks to months. Recruitment, notice period, then a ramp during which existing staff lose time too.", mengo: "Days for a first account, limited mostly by how quickly you can supply a brief and review the output." },
      { dimension: "Cost shape", other: "Fixed and ongoing. Salary, employment costs, tooling, management time. Hard to reverse.", mengo: "A subscription cost. Smaller and easier to stop, but it buys less." },
      { dimension: "Handles the unexpected", other: "Yes. This is the main thing you are buying — a person who notices what nobody briefed.", mengo: "No. It handles the routine well and does nothing useful with a genuinely novel situation." },
      { dimension: "Client relationship", other: "Can own accounts, attend meetings, be the person a client trusts.", mengo: "Never. Client contact is an agency step in every workflow on this site." },
      { dimension: "Scales with account count", other: "Linearly. More accounts eventually means more people.", mengo: "Better than linearly on the structural layer, until review capacity becomes the constraint." },
      { dimension: "Quality ceiling", other: "As high as the person you hire, which is a real variable.", mengo: "Bounded by your review. Unreviewed output has a low ceiling regardless of the system." },
      { dimension: "Risk if it goes wrong", other: "Significant. A bad hire costs months and affects the team around them.", mengo: "Contained. The failure mode is output you do not use, which is wasted subscription rather than wasted quarters." },
    ],
    chooseOther: [
      { label: "You need someone accountable for accounts", body: "If the gap is that nobody owns a set of clients, hire. No system takes ownership, and pretending otherwise creates an accountability vacuum." },
      { label: "The work needs judgement you do not have", body: "If the constraint is expertise rather than hours, a system gives you more output you cannot evaluate. Hire the expertise." },
      { label: "Review capacity is already the bottleneck", body: "Adding production to an agency that cannot review what it has is actively harmful. Hire a reviewer first." },
      { label: "You need a specialist discipline", body: "Design, video, media buying, development. Mengo does not do these, so the comparison does not apply." },
      { label: "Client contact needs to increase", body: "More client conversations require more people who can have them." },
    ],
    chooseMengo: [
      { label: "The constraint is first-draft production", body: "If your skilled people spend their week producing structure rather than exercising judgement, that is the layer to move." },
      { label: "You want to defer a hire without capping growth", body: "Particularly when the pipeline is uncertain and a fixed cost is a real risk." },
      { label: "Consistency is the problem", body: "A hire adds a person with their own way of working. A shared structure is what makes accounts consistent." },
      { label: "You are one person", body: "A solo agency's first hire is a large step. This changes what the business can carry before that step is forced." },
    ],
    together:
      "In practice most agencies end up doing both, in a particular order: move the structural layer first, find out where review capacity actually sits, then hire against that constraint. Hiring after that is better targeted, because you are hiring for judgement rather than for volume — and judgement roles are the ones worth taking time over.",
    faqs: [
      {
        q: "Is this cheaper than hiring?",
        a: "It costs less, which is not the same as being cheaper for the same result. A hire brings judgement, accountability and initiative that a system does not, so comparing them on cost alone will lead you to the wrong decision in either direction.",
      },
      {
        q: "Can it replace a junior marketer?",
        a: "It overlaps with the production part of a junior's work. It does not overlap with a junior becoming a senior, which is what you were actually investing in when you hired one. That is a real strategic cost worth thinking about.",
      },
      {
        q: "What if we do both?",
        a: "That is the common outcome and usually the right one. The sequencing matters more than the choice: knowing where your constraint sits before you hire makes the hire better targeted.",
      },
    ],
  },

  {
    kind: "comparison",
    slug: "mengo-vs-freelancers",
    title: "Mengo vs Freelancers",
    navLabel: "vs Freelancers",
    other: "A freelance bench",
    headline: "Flexible capacity, two different kinds",
    lead:
      "A freelance bench and a shared system both solve the same headline problem — capacity without permanent headcount — and they solve it in opposite ways. One brings people who need context; the other brings context that needs people.",
    summary:
      "Freelancers bring skill that needs context; a system brings context that needs skill. Where each fits in an agency's delivery model.",
    seoTitle: "Mengo vs freelancers for agency delivery capacity",
    seoDescription:
      "An honest comparison of a freelance bench against a shared marketing system for agency capacity: consistency, context cost, availability and where freelancers clearly win.",
    updated: "2026-08-29",
    question: "We need flexible capacity. Freelancers or a shared delivery system?",
    rows: [
      { dimension: "What arrives", other: "A skilled person with their own judgement, style and working method.", mengo: "Structure and drafts inheriting the client context you have already stored." },
      { dimension: "Context cost", other: "Real and recurring. Every freelancer needs briefing on the client, and a new one needs it from scratch.", mengo: "Paid once per client. The stored layer is what subsequent work inherits from." },
      { dimension: "Consistency across work", other: "Varies by person. Three freelancers produce three registers unless heavily directed.", mengo: "Consistent by construction, which is a strength for structure and a limitation for distinctive craft." },
      { dimension: "Availability", other: "Uncertain. The good ones are busy exactly when you are busy, which is the central problem with a bench.", mengo: "Predictable." },
      { dimension: "Specialist skill", other: "Yes — you can hire exactly the expertise a project needs, including things nobody on your team can do.", mengo: "No. It has no specialism and no craft ceiling above the structure it produces." },
      { dimension: "Management overhead", other: "Briefing, chasing, reviewing, invoicing, and the relationship maintenance that keeps good freelancers available.", mengo: "Review, which you need regardless." },
      { dimension: "Cost model", other: "Per project or per day. Scales directly with volume.", mengo: "Subscription. Does not scale with volume in the same way." },
      { dimension: "Confidentiality", other: "A third party with access to client material, usually under an NDA you have to actually manage.", mengo: "Client context stays within your own account rather than being distributed to individuals." },
    ],
    chooseOther: [
      { label: "You need craft above your team's ceiling", body: "A brilliant copywriter, a specialist strategist, someone who knows a sector you do not. That is exactly what freelancers are for." },
      { label: "The work is genuinely one-off", body: "A brand project, a launch film, a rebrand. Unique work does not benefit from a repeatable structure." },
      { label: "You want optionality on cost", body: "A bench can go to zero in a quiet month. A subscription does not." },
      { label: "You need a discipline outside written marketing", body: "Design, video, development, media buying. There is no comparison to make here." },
      { label: "A client requires named individuals", body: "Some engagements contractually specify who does the work." },
    ],
    chooseMengo: [
      { label: "The recurring work is structural", body: "Research, planning, briefs and first drafts on a rhythm. Paying a freelance day rate for structural work is expensive." },
      { label: "Briefing overhead is the real cost", body: "If you spend as long briefing a freelancer as doing it yourself, the bench is not saving you anything." },
      { label: "Consistency matters more than flair", body: "For always-on delivery across a portfolio, predictable is worth more than occasionally exceptional." },
      { label: "You cannot get freelancers when you need them", body: "Availability is the most common reason a bench strategy fails in practice." },
    ],
    together:
      "The clean division is that a system carries the recurring structural layer and freelancers are reserved for craft — the pieces where a specialist genuinely lifts the work above what your team can produce. Agencies that use freelancers for routine volume are usually paying a premium for capacity they could hold themselves, and are still short of specialists when a project genuinely needs one.",
    faqs: [
      {
        q: "We have freelancers who know our clients well. Does this displace them?",
        a: "It should not, and if it does you have probably applied it to the wrong work. Freelancers with deep client knowledge are doing judgement work; the layer that moves is the structural work that any competent person would produce similarly.",
      },
      {
        q: "Is it cheaper than a freelance bench?",
        a: "For recurring structural work, usually — a day rate for producing a research summary is expensive. For occasional specialist craft, no, and it is not trying to be.",
      },
      {
        q: "What about confidentiality?",
        a: "Both models involve client material leaving your building. A freelance bench distributes it to individuals under NDAs you have to manage; a system concentrates it in one account under one agreement. Which is preferable depends on your clients' contractual position, and it is worth checking rather than assuming.",
      },
    ],
  },

  {
    kind: "comparison",
    slug: "mengo-vs-manual-work",
    title: "Mengo vs Manual Work",
    navLabel: "vs Manual Work",
    other: "Doing it manually",
    headline: "The honest comparison is with what you do now",
    lead:
      "The alternative most agencies are actually weighing is not another product. It is carrying on — which has the enormous advantage of being known, already working, and requiring no change management. Any comparison that ignores that is not being straight with you.",
    summary:
      "The real alternative is carrying on as you are. What that genuinely costs, what changing costs, and when staying put is correct.",
    seoTitle: "Mengo vs manual agency delivery",
    seoDescription:
      "An honest comparison between structured marketing delivery and continuing manually: what each costs, what changing requires, and when staying as you are is the right call.",
    updated: "2026-08-29",
    question: "What we do now works. Is changing it worth the disruption?",
    rows: [
      { dimension: "It already works", other: "Yes, and that is a serious advantage that gets undervalued in these comparisons.", mengo: "Requires a transition, which has a cost and a risk during the transition period." },
      { dimension: "Cost per account", other: "Roughly fixed per account and mostly in skilled hours. Grows linearly with the book.", mengo: "The structural share falls; review does not. Growth is sub-linear rather than flat." },
      { dimension: "Consistency", other: "Depends on who did it and how busy they were that week.", mengo: "Consistent structure by construction; consistent quality still depends on review." },
      { dimension: "Where senior time goes", other: "Split between production and judgement, usually more production than anyone would choose.", mengo: "Concentrated on review, judgement and client contact." },
      { dimension: "Knowledge retention", other: "In people. Leaves when they do.", mengo: "In a stored layer per client, which survives staff changes." },
      { dimension: "Flexibility", other: "Total. You can do anything, in any order, for any client.", mengo: "Structured. Genuinely unusual work fits less well and needs a defined exception path." },
      { dimension: "Change cost", other: "None. This is the strongest argument for staying as you are.", mengo: "Real: process definition, a pilot account, team adjustment and a period of doing both." },
      { dimension: "Failure mode", other: "Gradual. Inconsistency and burnout accumulate slowly enough to be normalised.", mengo: "Faster and more visible: unreviewed output reaching clients, if review capacity was not planned." },
    ],
    chooseOther: [
      { label: "Your current system is genuinely working", body: "Consistent output, sustainable hours, satisfied clients, healthy margin. If that describes you, the honest answer is that you may not need this." },
      { label: "You are mid-crisis", body: "A delivery change during a bad quarter adds risk exactly when you have least tolerance for it. Stabilise first." },
      { label: "Your work is genuinely bespoke every time", body: "If no two engagements share a structure, there is nothing repeatable to move." },
      { label: "Nobody can own the transition", body: "A change with no named owner reverts within a quarter, and you will have spent the effort for nothing." },
      { label: "You do not have review capacity", body: "Then the constraint is elsewhere and this addresses the wrong problem." },
    ],
    chooseMengo: [
      { label: "Growth means hiring, always", body: "If every new account implies a hire, the delivery model is the constraint." },
      { label: "Skilled people are doing structural work", body: "The most expensive possible way to produce a research summary." },
      { label: "Quality varies by who was free", body: "That is a process problem and it will not improve on its own." },
      { label: "Nothing is written down", body: "Which makes the agency fragile in a way that is invisible until someone leaves." },
    ],
    together:
      "There is no combining here — this is a genuine either/or about how delivery runs. But it does not have to be all at once. One account, run end to end through the structure and compared honestly against how that account was being delivered before, gives you real evidence at a small enough scale that a bad answer costs you very little.",
    faqs: [
      {
        q: "What does the transition actually involve?",
        a: "Writing down how you currently deliver, defining what good looks like, running one account through the new structure, and comparing. The largest cost is usually the first step, because most agencies have never written their process down.",
      },
      {
        q: "How do we know if it worked?",
        a: "Decide before you start. Hours per account, elapsed time to first plan, consistency of output against your standard, or how much senior time went to production. Pick one or two and measure them before the pilot, or you will end up arguing about impressions.",
      },
      {
        q: "What if it does not work for us?",
        a: "Then you stop, and you keep the written process, which is worth having regardless. That is a genuinely low downside compared with a hire that does not work out.",
      },
    ],
  },

  {
    kind: "comparison",
    slug: "mengo-vs-agency-tools",
    title: "Mengo vs Traditional Agency Tools",
    navLabel: "vs Agency Tools",
    other: "Project and content tooling",
    headline: "Coordination tools and delivery capacity are different categories",
    lead:
      "Project management, scheduling and asset tooling are how agency work is coordinated. None of them produce the work. Agencies often try to solve a capacity problem with a coordination tool, then conclude the tool failed — when the tool was never in that category.",
    summary:
      "Project, scheduling and asset tools coordinate work. They do not produce it. Where each belongs and why they are complements rather than alternatives.",
    seoTitle: "Mengo vs traditional agency tools",
    seoDescription:
      "How a marketing delivery layer differs from project management, scheduling and asset tools — what each category solves for agencies, and why they are complements.",
    updated: "2026-08-29",
    question: "We already have project management and scheduling tools. Is this another one?",
    rows: [
      { dimension: "Category", other: "Coordination: who is doing what, by when, and where the file is.", mengo: "Production of the structural layer: research, plans, briefs and drafts." },
      { dimension: "Solves", other: "Visibility, accountability, scheduling and asset management.", mengo: "The cost of producing the work in the first place." },
      { dimension: "Does not solve", other: "Capacity. A perfectly managed queue is still a queue of work someone has to do.", mengo: "Coordination. It does not manage your projects, your people or your timesheets." },
      { dimension: "Client context", other: "Stored as files and notes attached to tasks, usually rediscovered by reading.", mengo: "Stored as a structured layer that subsequent work inherits from." },
      { dimension: "Effect on hours", other: "Reduces coordination overhead and rework from miscommunication.", mengo: "Reduces first-draft and structural hours." },
      { dimension: "Where it sits", other: "Across the whole agency, including work Mengo has nothing to do with.", mengo: "Inside the marketing delivery workflow only." },
      { dimension: "Replaces the other", other: "No.", mengo: "No." },
    ],
    chooseOther: [
      { label: "Your problem is visibility", body: "If nobody knows what is happening on which account, that is a coordination problem and a project tool is the right answer." },
      { label: "Work is being lost between people", body: "Handover failures are a workflow-management issue." },
      { label: "You need resourcing and utilisation data", body: "That is what practice management tools are built for." },
      { label: "Assets are scattered", body: "A DAM solves a real problem that this does not touch." },
    ],
    chooseMengo: [
      { label: "The queue is well managed and still too long", body: "Perfect visibility of work you do not have capacity to do is not a solution." },
      { label: "Context lives in files nobody reads", body: "A stored strategic layer is different from a folder of documents about strategy." },
      { label: "Every task starts from a blank document", body: "Coordination tools tell you what to write. They do not help you start writing it." },
    ],
    together:
      "They belong side by side and they answer different questions. Your project tool says a client's Thursday post is due and who owns it; the delivery layer means that post arrives as a briefed draft rather than as an empty task. Agencies that expected a project tool to fix capacity were asking it to do something it never claimed to do.",
    faqs: [
      {
        q: "Do we need to change our project management tool?",
        a: "No. This sits inside the delivery workflow rather than replacing coordination, and agencies with a working project setup should keep it.",
      },
      {
        q: "Is there overlap with content calendar tools?",
        a: "Some. A calendar tool holds the schedule; the planning layer here decides what should be in it and why, then produces the work behind each slot. If your calendar tool is mostly empty slots, the gap is production rather than scheduling.",
      },
      {
        q: "How does this fit an existing tool stack?",
        a: "As the layer that produces work, feeding into the tools you already coordinate and publish with. Sending, scheduling and publishing stay where they are, deliberately.",
      },
    ],
  },
];

export const comparisonBySlug = new Map(comparisons.map((c) => [c.slug, c]));
