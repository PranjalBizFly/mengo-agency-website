import type { Article } from "@/lib/types";

/**
 * The journal.
 *
 * Editorial pieces about agency operations. These argue a position rather than
 * describing the product, and two of them argue against things Mengo could
 * plausibly be used for. That is deliberate: a journal that only ever concludes
 * in favour of the publisher is advertising, and agency readers know it.
 */
export const articles: Article[] = [
  {
    kind: "article",
    slug: "the-agency-bottleneck-is-not-talent",
    title: "The Agency Bottleneck Is Not Talent",
    headline: "The agency bottleneck is not talent",
    lead:
      "Ask an agency owner what limits their growth and most will say hiring good people. Watch where the hours go and a different answer appears.",
    summary:
      "Agencies describe their constraint as talent. Measured, it is more often the fixed structural cost that repeats on every account.",
    seoTitle: "The agency bottleneck is not talent",
    seoDescription:
      "Agencies describe growth as a hiring problem. Measured honestly, the constraint is usually the fixed structural cost that repeats identically on every account.",
    updated: "2026-08-30",
    published: "2026-08-12",
    readingMinutes: 6,
    topic: "Operations",
    blocks: [
      { type: "text", text: "The talent explanation is appealing because it is flattering and partly true. Good agency people are genuinely hard to find. But it also has a convenient property: it locates the problem outside the business, in a labour market nobody controls." },
      { type: "heading", text: "What the measurement shows" },
      { type: "text", text: "When agencies measure hours by work type rather than by client, a pattern recurs. A large share of the week goes to work that is structurally identical between accounts — assembling research, rebuilding a plan's scaffolding, and reloading client context before starting anything." },
      { type: "text", text: "That work is not hard. It requires no particular talent. It is simply necessary, and it repeats in full on every account, which means the cost of an additional client is dominated by work that any competent person would do the same way." },
      { type: "heading", text: "Why it presents as a talent problem" },
      { type: "list", items: [
        "The structural work is done by skilled people, so its cost appears in the salary line for skilled people.",
        "It is distributed through everyone's week rather than appearing as a project, so nobody sees the total.",
        "The obvious fix for 'not enough hours from skilled people' is more skilled people.",
        "Context reassembly appears on no task list at all, which makes the largest component invisible.",
      ] },
      { type: "heading", text: "The consequence of misdiagnosis" },
      { type: "text", text: "An agency that hires to solve a structural-cost problem gets a temporary fix with a permanent cost. The new person absorbs the overflow for a quarter, then the book grows, and the same pressure returns one headcount higher. The structural cost per account never changed." },
      { type: "quote", text: "If adding an account always implies adding a person, the constraint is the delivery model, not the labour market." },
      { type: "heading", text: "What to do instead" },
      { type: "text", text: "Measure the composition of the week before deciding what to buy. Two weeks of recording against work type, including the founder's time, is enough to tell you whether you have a talent problem or a structure problem — and they need completely different responses." },
      { type: "text", text: "If it turns out to be talent, hire, and hire well. If it turns out to be structure, hiring will feel like it worked for about a quarter." },
    ],
  },

  {
    kind: "article",
    slug: "what-agencies-should-never-automate",
    title: "What Agencies Should Never Automate",
    headline: "What agencies should never automate",
    lead:
      "There is a short list of things an agency does that should stay stubbornly manual, and the reason is not sentimentality. Each one is where the client's actual value is created.",
    summary:
      "A short list of agency work that should stay manual, and the specific reason each one is on it.",
    seoTitle: "What agencies should never automate",
    seoDescription:
      "Four parts of agency client work that should stay manual — client relationship, strategic recommendation, final approval and accountability — and why each one matters.",
    updated: "2026-08-30",
    published: "2026-08-19",
    readingMinutes: 5,
    topic: "Position",
    blocks: [
      { type: "text", text: "We build a system that carries agency work, so a list of things it should not touch may read oddly. It is here because the boundary is the more useful half of the argument, and because an agency that gets it wrong will not blame itself." },
      { type: "heading", text: "The client relationship" },
      { type: "text", text: "Not the scheduling around it — the relationship itself. Clients do not renew because the reporting was punctual. They renew because someone understood their business and told them something true, occasionally something they did not want to hear. That transaction requires a person on both ends." },
      { type: "heading", text: "The strategic recommendation" },
      { type: "text", text: "A generated strategy is a hypothesis with good grammar. It is plausible by construction, which is precisely what makes it dangerous without someone who can tell whether it is right for this business. The recommendation is what the agency is selling; delegating it means selling something you did not make and cannot defend." },
      { type: "heading", text: "The final read" },
      { type: "text", text: "Someone has to decide that a piece of work is good enough to carry the agency's name. This is the checkpoint most likely to erode, because output is usually acceptable and attention decays with a high pass rate. The failure is gradual and it is discovered by a client." },
      { type: "note", text: "The practical defence is structural rather than cultural: make review a required step in the workflow rather than a standard people are asked to uphold. Standards lose to deadlines. Steps do not." },
      { type: "heading", text: "Accountability" },
      { type: "text", text: "When something goes wrong, a person has to be answerable. Not as a formality — as a functioning mechanism, where someone with authority takes responsibility and fixes it. An accountability structure that points at a system has no mechanism at all." },
      { type: "heading", text: "The test" },
      { type: "text", text: "Would two competent people in your agency produce meaningfully different output, in a way the client would notice and care about? If yes, that difference is judgement and it stays with a person. If no, it is structure and it can move." },
      { type: "quote", text: "The question is not what a system can do. It is what an agency should still be for." },
    ],
  },

  {
    kind: "article",
    slug: "the-case-for-writing-your-process-down",
    title: "The Case for Writing Your Process Down",
    headline: "The case for writing your process down",
    lead:
      "Almost every agency knows it should document how it works. Almost none do, and the reason is not laziness — it is that the benefit arrives later than the cost, always.",
    summary:
      "Why agencies do not document their process, what it costs them, and the smallest version worth writing this week.",
    seoTitle: "The case for writing your agency process down",
    seoDescription:
      "Why agencies never get around to documenting delivery, what an undocumented process actually costs, and the smallest useful version to write this week.",
    updated: "2026-08-30",
    published: "2026-08-05",
    readingMinutes: 5,
    topic: "Operations",
    blocks: [
      { type: "text", text: "The task never becomes urgent. It has no client waiting, no deadline and no immediate consequence for skipping it — which puts it in the same category as marketing your own agency, and it loses for the same reason." },
      { type: "heading", text: "What it actually costs" },
      { type: "terms", items: [
        { label: "Onboarding takes months instead of weeks", body: "Not because the work is difficult, but because learning it means sitting next to someone who already knows — and that someone is your most capacity-constrained person." },
        { label: "Quality varies by who did it", body: "With no shared definition of good, every reviewer applies their own, and clients experience the variance as inconsistency." },
        { label: "Improvements do not propagate", body: "Someone finds a better way and it stays in their accounts, because there is no shared artefact to change." },
        { label: "The agency is fragile", body: "Knowledge concentrated in individuals leaves when they do, and the gap is invisible until the moment it matters." },
      ] },
      { type: "heading", text: "Why the usual approach fails" },
      { type: "text", text: "Agencies that do attempt this usually write a comprehensive manual, which takes weeks, describes an idealised process nobody follows, and is out of date within a quarter. The failure is predictable and it discourages the next attempt." },
      { type: "heading", text: "The smallest useful version" },
      { type: "list", items: [
        "The brief structure: what you always ask a new client. One page.",
        "The delivery sequence: the steps every engagement runs through, with an owner for each.",
        "The review standard: what a reviewer checks, in order.",
        "The escalation path: who decides when something is unusual.",
      ] },
      { type: "text", text: "Four pages. An afternoon. It is not a manual and it is not supposed to be — it is the part that pays back immediately, and it can be extended when it proves useful rather than before." },
      { type: "heading", text: "Keeping it alive" },
      { type: "text", text: "A document with no owner and no revision date decays into something referenced during audits. Give it a named owner and a scheduled review, and treat the review as a real meeting rather than a formality." },
      { type: "quote", text: "A process that exists only in people's heads is not a process. It is a set of habits that agree with each other most of the time." },
    ],
  },

  {
    kind: "article",
    slug: "hiring-later-and-better",
    title: "Hiring Later and Better",
    headline: "Hiring later and better",
    lead:
      "Most agency hiring is reactive: a client is won, capacity is short, a role opens. The hire that results is shaped by the emergency rather than by the business.",
    summary:
      "Reactive hiring produces the wrong roles at the wrong time. How to hire against a known constraint instead of against this quarter's overflow.",
    seoTitle: "Hiring later and better in an agency",
    seoDescription:
      "Reactive agency hiring produces production roles that recreate the same constraint one level up. How to hire against a measured constraint instead.",
    updated: "2026-08-30",
    published: "2026-08-26",
    readingMinutes: 6,
    topic: "Growth",
    blocks: [
      { type: "text", text: "The reactive hiring cycle is familiar enough to be invisible. Win the client, notice the shortfall, open a role, spend a quarter recruiting and onboarding while the existing team absorbs the gap. By the time the new person is productive, the book has grown again." },
      { type: "heading", text: "Why reactive hiring produces the wrong role" },
      { type: "text", text: "Under overflow pressure, the role that gets written is the one that relieves the overflow — usually production. That is rational in the moment and structurally unhelpful, because it recreates the same constraint at a higher headcount: more production capacity generates more work needing review, and review was already tight." },
      { type: "heading", text: "The alternative sequence" },
      { type: "steps", items: [
        { title: "Measure where hours actually go", body: "By work type, not by client. Two weeks is enough.", lane: "agency" },
        { title: "Reduce the structural cost per account", body: "Before hiring. If the fixed cost is what makes accounts marginal, a hire does not address it.", lane: "agency" },
        { title: "Find what binds next", body: "Usually review and senior judgement. That is the role to write.", lane: "agency" },
        { title: "Start the search early", body: "Judgement roles take longer to fill than production roles. Begin before the constraint is acute.", lane: "agency" },
      ] },
      { type: "heading", text: "The uncomfortable part" },
      { type: "text", text: "Hiring fewer junior production roles has a cost that does not show up for years: juniors become seniors by doing the work. An agency that stops hiring at the bottom will eventually find it cannot hire in the middle either, because the middle is grown rather than recruited." },
      { type: "note", text: "This is a real trade-off rather than a rhetorical one. One reasonable response is to keep some production work deliberately manual for people who are learning, and to treat that as training cost rather than as inefficiency." },
      { type: "heading", text: "What better hiring looks like" },
      { type: "list", items: [
        "The role is written against a measured constraint rather than a busy quarter.",
        "The search starts before the need is acute, which widens the candidate pool considerably.",
        "The person joins a documented process rather than an apprenticeship with an overloaded senior.",
        "The role is for judgement, ownership or a capability you lack — not for volume.",
      ] },
      { type: "quote", text: "Hiring under pressure means hiring for the shape of this quarter's problem. That shape is rarely the shape of the business." },
    ],
  },

  {
    kind: "article",
    slug: "why-clients-notice-inconsistency-first",
    title: "Why Clients Notice Inconsistency First",
    headline: "Why clients notice inconsistency first",
    lead:
      "Clients are surprisingly tolerant of work that is merely good. They are much less tolerant of work that is good, then average, then good again — even when the average was better than a competitor's best.",
    summary:
      "Inconsistency reads as a signal about attention rather than ability, which is why it damages a client relationship faster than mediocrity does.",
    seoTitle: "Why agency clients notice inconsistency first",
    seoDescription:
      "Inconsistent agency work signals declining attention rather than limited ability, which is why it damages client relationships faster than consistently modest work.",
    updated: "2026-08-30",
    published: "2026-07-29",
    readingMinutes: 4,
    topic: "Client work",
    blocks: [
      { type: "text", text: "There is a pattern in agency churn that does not fit the usual explanations. Clients leave agencies whose work they described as good. They stay with agencies whose work is unremarkable but reliably the same." },
      { type: "heading", text: "What variance signals" },
      { type: "text", text: "A client cannot assess marketing quality directly — that is why they hired you. What they can assess is variance, and variance carries a meaning that has nothing to do with the work: it suggests that attention is uneven, and that the good work happens when someone happens to care." },
      { type: "text", text: "Once a client believes attention is the variable, every future piece is evidence in a case they have already started building." },
      { type: "heading", text: "Where the variance comes from" },
      { type: "list", items: [
        "Different people applying different unwritten standards.",
        "The same person under different amounts of pressure.",
        "Attention following whichever client is loudest that month.",
        "A review step that gets skipped when the week is bad.",
      ] },
      { type: "note", text: "None of these are capability problems, which is why hiring better people does not fix them. They are all consequences of a standard that exists in people rather than on paper." },
      { type: "heading", text: "The quiet client problem" },
      { type: "text", text: "Attention follows noise. The demanding client gets the standard; the quiet one gets whatever is left. And the quiet client is the one who leaves without a conversation, because they were never in the habit of raising things." },
      { type: "heading", text: "The fix is boring" },
      { type: "text", text: "Write down what good looks like, specifically enough that two reviewers reach the same verdict. Set a floor every account receives regardless of size or volume. Make review a required step rather than a standard people are asked to uphold. None of this is interesting, which is the main reason it does not get done." },
      { type: "quote", text: "Clients rarely leave over a bad piece of work. They leave over the third piece that was not as good as the first." },
    ],
  },

  {
    kind: "article",
    slug: "the-quiet-cost-of-starting-every-brief-from-zero",
    title: "The Quiet Cost of Starting Every Brief From Zero",
    headline: "The quiet cost of starting every brief from zero",
    lead:
      "There is a category of agency work that appears on no task list, is never estimated, and in many agencies consumes more of the week than production does.",
    summary:
      "Context reassembly — reloading what you already knew before you can start — is the largest untracked cost in most agency weeks.",
    seoTitle: "The hidden cost of context reassembly in agencies",
    seoDescription:
      "Reloading client context before starting work is the largest untracked category in most agency weeks. Why it is invisible, what it costs, and how to reduce it.",
    updated: "2026-08-30",
    published: "2026-08-30",
    readingMinutes: 5,
    topic: "Operations",
    blocks: [
      { type: "text", text: "Before anyone writes anything for a client, they reload: the positioning, the last few pieces, the tone the client prefers, what was said in the last review, what the client asked not to be mentioned again. None of this is on a task list. All of it takes time." },
      { type: "heading", text: "Why it is invisible" },
      { type: "list", items: [
        "It has no deliverable, so it never becomes a line item.",
        "It feels like preparation rather than work, so people do not count it.",
        "It is fragmented into minutes across the week rather than occurring as a block.",
        "Time tracking records the client and the project, not the act of remembering them.",
      ] },
      { type: "heading", text: "Why it scales badly" },
      { type: "text", text: "The cost is roughly per switch rather than per hour of work. An agency with four clients and a person moving between them several times a day pays it many times over, which is why four accounts is so much more than twice the effort of two." },
      { type: "quote", text: "Three clients fit in one person's head. Four do not, and the difference is not thirty-three percent." },
      { type: "heading", text: "What reduces it" },
      { type: "terms", items: [
        { label: "Stored context rather than remembered context", body: "Positioning, segments and voice held per client as an artefact means reloading is reading rather than recalling." },
        { label: "Batching by client", body: "Doing a client's whole week in one pass costs one reload instead of five." },
        { label: "Briefs that carry their context", body: "A brief containing the audience, the angle and the constraint removes most of the reload for that piece." },
        { label: "Fewer, larger accounts", body: "A commercial answer rather than an operational one, but it is the most direct." },
      ] },
      { type: "heading", text: "Measure it before you believe it" },
      { type: "text", text: "This is the category most likely to be dismissed as small and most likely to be large. Two weeks of recording, with context reassembly as its own line, settles the argument in either direction — and the argument is worth settling, because everything about capacity planning depends on it." },
    ],
  },
];

export const articleBySlug = new Map(articles.map((a) => [a.slug, a]));
