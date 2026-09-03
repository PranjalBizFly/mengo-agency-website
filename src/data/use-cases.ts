import type { UseCase } from "@/lib/types";

/**
 * The goals agencies arrive holding.
 *
 * A use case page is written to a reader who has already decided what they
 * want and is trying to work out whether this is the way to get it. So each
 * one names the obstacle honestly before describing the approach, and carries
 * a `notFor` section — the fastest way to be trusted by someone evaluating you
 * is to tell them when the answer is no.
 *
 * `expectations` is deliberately free of numbers. Mengo is early and has no
 * published outcome data for agencies; inventing a percentage here would be
 * the single easiest way to make this whole site untrustworthy.
 */
export const useCases: UseCase[] = [
  {
    kind: "use-case",
    slug: "start-an-agency",
    title: "Start an Agency",
    navLabel: "Start an Agency",
    headline: "Begin with a process instead of building one by accident",
    lead:
      "Almost every agency's process is archaeology: layers of decisions made under deadline, none of them designed. Starting deliberately is the one moment you can choose the shape of the business rather than inherit it.",
    summary:
      "Starting an agency means building the delivery process while delivering. How to begin with a repeatable one, and what has to stay yours from the first client.",
    seoTitle: "Starting a marketing agency with a repeatable process",
    seoDescription:
      "How to start an agency with a documented delivery process from the first client, rather than assembling one under deadline over the first two years.",
    updated: "2026-08-28",
    situation:
      "You have the skill and, probably, a first client. What you do not have is a way of working that survives the second and third.",
    obstacle: [
      { label: "You cannot design a process you have not run", body: "Which is a genuine chicken-and-egg problem: the process comes from experience, and experience comes from delivering without one." },
      { label: "Early clients arrive without briefs", body: "They came through your network and assume you already know what they need, so the discovery step gets skipped by default." },
      { label: "Everything is urgent", body: "There is no quiet quarter in which to write down how you work, and there will not be one later either." },
      { label: "Underpricing is almost universal", body: "Because the unbillable structural work is invisible until you have measured it, and you have not." },
    ],
    approach: [
      { label: "Fix the brief shape first", body: "Before anything else, decide what you always ask a new client. The same fields, every time. This single artefact does more for consistency than anything else you can do in year one." },
      { label: "Run the first client through the full sequence", body: "Brief, research, strategy, plan, production, review, delivery — deliberately, even though it feels heavy for one client. You are building the mould." },
      { label: "Keep the structural work off your hours", body: "Research and first-draft planning are where new agencies lose their evenings. That is the layer to hand over first." },
      { label: "Write down what you changed", body: "Every correction you make to a draft plan is your standard revealing itself. Recorded, that becomes the thing you can eventually hire against." },
      { label: "Price the review, not the typing", body: "As the structural work moves, what you are selling becomes judgement. Pricing that honestly from the start avoids a painful repositioning later." },
    ],
    expectations: [
      "A written brief structure you use on every client from the first one",
      "A delivery sequence you have run at least once end to end",
      "Your evenings spent on client conversations and review rather than on first drafts",
      "A documented standard that a future hire could actually be onboarded into",
      "No revenue promises. What you charge depends on your market, your positioning and your nerve — none of which a system supplies",
    ],
    notFor: [
      "Anyone without the marketing expertise to judge whether an output is right. The gap to close first is skill, not tooling.",
      "Anyone hoping to run an agency without client conversations. Those are the job, not an overhead on it.",
      "Anyone who wants the business to run itself. This changes what the work is; it does not remove it.",
    ],
    related: { stages: ["start-an-agency", "solo-agency"], workflows: ["client-onboarding", "content-production"] },
    faqs: [
      {
        q: "How many clients do I need before this makes sense?",
        a: "One, or a well-defined prospect. The argument is not volume — it is that the first client is the cheapest possible moment to establish a process, because you have not yet built habits you will have to unlearn.",
      },
      {
        q: "Should I tell clients how I work?",
        a: "That is your call and it depends on your market. What matters more is that you can describe your process at all, because that is the question that separates an agency from a freelancer in most buyers' minds.",
      },
      {
        q: "What should I do first?",
        a: "Write your brief structure. Not the whole process — just the list of things you will always ask a new client. It takes an afternoon and it is the foundation everything else sits on.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "handle-more-clients",
    title: "Handle More Clients",
    navLabel: "Handle More Clients",
    headline: "Take the next client without the next hire",
    lead:
      "The decision to take on another client is usually made on instinct, in a month when the pipeline looks thin, by someone who will personally absorb the consequences. It is one of the most consequential decisions an agency makes and one of the least examined.",
    summary:
      "Adding accounts without adding a hiring cycle for each one. What actually changes, which constraint moves, and where the new ceiling sits.",
    seoTitle: "Handling more agency clients without more headcount",
    seoDescription:
      "How agencies take on additional client accounts without a hiring cycle behind each one, by moving the binding constraint from production capacity to review capacity.",
    updated: "2026-08-28",
    situation:
      "You could win more work than you can currently deliver, and the only lever you have is hiring — which lags demand by a quarter and compresses margin while it does.",
    obstacle: [
      { label: "Each account carries a fixed structural cost", body: "Research, planning, setup. It is roughly the same effort for a small client as a large one, which is why small accounts are so often unprofitable." },
      { label: "Hiring is slow and expensive to reverse", body: "Recruit, onboard, ramp. If the pipeline softens during the ramp, you are carrying a cost against revenue that did not arrive." },
      { label: "Senior people absorb the overflow", body: "Which works for a quarter and then shows up as a resignation or a client complaint." },
      { label: "You do not know your real capacity", body: "Without a model of where hours actually go, 'can we take this on' is answered by mood." },
    ],
    approach: [
      { label: "Find where the hours actually go", body: "Before changing anything, measure a fortnight honestly. Most agencies discover that context reassembly and first-draft production are a larger share than they assumed." },
      { label: "Move the structural layer", body: "Research, planning and first drafts are the fixed cost per account. That is the layer to shift, because it is the one that scales badly with account count." },
      { label: "Protect review capacity deliberately", body: "As production stops binding, review becomes the constraint. If you do not plan for that, you have moved the bottleneck rather than removed it." },
      { label: "Add one account and measure", body: "Not three. One additional account run through the new structure tells you what the marginal cost actually is." },
      { label: "Recalculate before you commit", body: "Then make the capacity decision as a calculation. This is the point of the whole exercise." },
    ],
    expectations: [
      "A measured view of where your delivery hours currently go",
      "A lower marginal cost for each additional account, because the structural layer no longer repeats in full",
      "Review capacity as your new binding constraint — a higher ceiling, but a real one",
      "Hiring decisions made later and against judgement roles rather than production roles",
      "No specific number of additional accounts. That depends on your service mix and your reviewers, and any figure we gave you would be invented",
    ],
    notFor: [
      "Agencies whose constraint is new business rather than delivery. Fixing capacity you are not using does not help.",
      "Agencies without review capacity to spare. More output that nobody can properly check is a reputation problem, not a growth strategy.",
      "Agencies whose service is primarily design, video or media buying, where the production constraint is not written work.",
    ],
    related: { stages: ["solo-agency", "small-agency", "growing-agency"], workflows: ["scale-client-delivery", "content-production"] },
    faqs: [
      {
        q: "How much more can we actually take on?",
        a: "We genuinely do not know, and neither does anyone who answers that without seeing your numbers. The useful move is to measure your current hour distribution, run one additional account through the structure, and compute your own answer from real data.",
      },
      {
        q: "What breaks first if we get this wrong?",
        a: "Review. The failure mode is a larger portfolio of unedited work, which clients read as the agency losing interest. It is a faster way to lose accounts than being at capacity.",
      },
      {
        q: "Does this make hiring unnecessary?",
        a: "No. It changes what you hire for and when. Judgement, client ownership and review still need people, and those roles take longer to fill — so the hiring problem gets better in volume and harder in kind.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "deliver-faster",
    title: "Deliver Faster",
    navLabel: "Deliver Faster",
    headline: "Shorten the wait without shortening the thinking",
    lead:
      "Most agency delay is not work. It is waiting — for a brief to be written up, for a senior person to have an afternoon, for a draft to reach the top of a queue. Cutting the waiting is a different project from working faster, and a much more achievable one.",
    summary:
      "Most delivery time is waiting rather than working. Where the waiting actually is, what to compress, and what must never be compressed.",
    seoTitle: "Faster agency delivery without cutting quality",
    seoDescription:
      "Most agency delivery time is waiting, not working. Where the waiting sits in a typical engagement, what can be compressed safely, and what should never be.",
    updated: "2026-08-28",
    situation:
      "Clients experience your turnaround as slow, and internally you know most of that time was not spent working on their account.",
    obstacle: [
      { label: "Queueing dominates", body: "Work sits between steps for far longer than any step takes. Speeding up the steps barely moves the total." },
      { label: "Everything routes through the same reviewers", body: "One or two senior people are the gate on every account, and they are also selling." },
      { label: "First drafts start from nothing", body: "Which makes the first version the slowest part, and the one most likely to wait for the right person to be free." },
      { label: "Client approval is treated as instant", body: "Plans that ignore client review time are wrong from the moment they are written." },
    ],
    approach: [
      { label: "Measure the wait, not the work", body: "Track elapsed time per step for a fortnight. The result usually surprises people and redirects the whole effort." },
      { label: "Remove the from-scratch first draft", body: "The single largest queueing point in most agencies is work waiting for someone to start it. A briefed draft arriving ready for review removes that wait entirely." },
      { label: "Split review by type", body: "Editorial review, factual review and strategic review are different jobs with different reviewers. Queueing all three behind one person is a design choice, not a necessity." },
      { label: "Plan around client review time", body: "Build the client's approval window into the schedule as a real step rather than an optimistic assumption." },
      { label: "Leave the thinking alone", body: "Discovery, strategy and the judgement calls are where the value is. Compressing those produces fast work that is wrong." },
    ],
    expectations: [
      "A measured elapsed-time picture per step, which is usually the most valuable output of this exercise",
      "First drafts available without waiting for a person to have a free afternoon",
      "Review distributed by type rather than queued behind one reviewer",
      "A schedule that includes client approval as a real step",
      "No turnaround guarantee. Your cycle time depends on your review structure and your clients' responsiveness, neither of which we control",
    ],
    notFor: [
      "Agencies whose slowness is a client-side approval problem. That is a contract and expectations conversation, not a delivery one.",
      "Agencies who want to compress discovery or strategy. That produces faster work of lower value, which clients notice within a quarter.",
      "Agencies whose delay is in design or production disciplines outside written marketing work.",
    ],
    related: { stages: ["solo-agency", "small-agency"], workflows: ["content-production", "campaign-planning"] },
    faqs: [
      {
        q: "How much faster is realistic?",
        a: "It depends entirely on how much of your current elapsed time is queueing, which is why measuring first matters more than any number we could offer. Agencies where work waits days between steps have more to gain than agencies that are already tightly run.",
      },
      {
        q: "Will faster delivery hurt quality?",
        a: "It will if you compress the wrong thing. Removing queueing time does not touch quality; removing review time does, immediately and visibly. The distinction is the entire point of this page.",
      },
      {
        q: "What if clients do not want faster?",
        a: "Then the gain is internal rather than client-facing, and it shows up as capacity instead of speed. Both are worth having, but they are worth having for different reasons and you should decide which you are pursuing.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "reduce-repetitive-work",
    title: "Reduce Repetitive Work",
    navLabel: "Reduce Repetitive Work",
    headline: "Stop rebuilding the same thing for the fortieth time",
    lead:
      "Repetitive work is expensive twice: once in hours, and again in the people doing it. Skilled marketers who spend their week reassembling context they have assembled before are the people most likely to leave, and the hardest to replace.",
    summary:
      "Identifying the work that genuinely repeats, moving it, and keeping the judgement that only looks repetitive.",
    seoTitle: "Reducing repetitive work in agency delivery",
    seoDescription:
      "How agencies identify work that genuinely repeats across client accounts, move it out of skilled people's weeks, and keep the judgement work that only looks repetitive.",
    updated: "2026-08-28",
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
      "Review checkpoints as required steps in the workflow rather than as policy",
      "Not the elimination of repetition. Some of it is the job, and pretending otherwise sets up a disappointment",
    ],
    notFor: [
      "Agencies looking to reduce headcount. This changes what people do; using it as a redundancy exercise wastes the capability you have left.",
      "Agencies where the repetitive work is design production, media operations or reporting from tools we do not touch.",
      "Anyone hoping to remove review. Review is the repetitive-looking work that must stay.",
    ],
    related: { stages: ["solo-agency", "small-agency", "growing-agency"], workflows: ["content-production", "scale-client-delivery"] },
    faqs: [
      {
        q: "How do we tell structure from judgement?",
        a: "The two-competent-people test. If two experienced people in your agency would produce substantially the same output, it is structure. If they would meaningfully differ — and the difference would matter to the client — it is judgement, and it stays.",
      },
      {
        q: "Will the team see this as a threat?",
        a: "Some will, and dismissing that is a mistake. The honest framing is that the work changes shape: less first-draft production, more review, judgement and client contact. That is a better job for most marketers and a worse one for a few, and it is worth naming which.",
      },
      {
        q: "What is the most repetitive thing in a typical agency?",
        a: "Reassembling client context before starting a piece of work — re-reading the strategy, the last few assets and the tone notes. It rarely appears on anyone's task list, which is exactly why it is invisible and expensive.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "standardize-delivery",
    title: "Standardize Delivery",
    navLabel: "Standardize Delivery",
    headline: "The same standard on every account, including the quiet ones",
    lead:
      "Clients rarely leave because of one bad piece of work. They leave because the work became inconsistent, and inconsistency is what they notice first — long before they notice a metric.",
    summary:
      "Making delivery consistent across people and accounts without flattening the judgement that distinguishes your work.",
    seoTitle: "Standardizing agency delivery across accounts",
    seoDescription:
      "How agencies make client delivery consistent across people and accounts — what to standardise, what to leave alone, and how to keep a standard from going stale.",
    updated: "2026-08-28",
    situation:
      "The same service delivered by two people in your agency produces recognisably different work, and clients who move between accounts notice.",
    obstacle: [
      { label: "Standard is confused with uniform", body: "Teams resist standardisation because they hear it as 'everything the same', which would remove exactly what makes the work good." },
      { label: "The standard is not written down", body: "So it cannot be enforced, taught or improved — it can only be demonstrated by whoever holds it." },
      { label: "Attention follows noise", body: "Demanding clients get the standard; quiet ones get whatever is left, and quiet clients are the ones who leave without a conversation." },
      { label: "A written standard goes stale", body: "A document describing how the agency used to work is worse than none, because people follow it." },
    ],
    approach: [
      { label: "Write down what good looks like", body: "Specifically enough to review against. 'On brand' is not a standard; 'leads with the client's segment objection, no unsupported claims, house voice' is." },
      { label: "Standardise the container, not the contents", body: "Brief shape, research depth, plan anatomy and review checkpoints. Not voice, not recommendation, not creative approach." },
      { label: "Set a floor for every account", body: "The minimum every client gets regardless of size or noise. This is the single most effective thing on this list." },
      { label: "Review against the written standard", body: "So quality stops being a property of who reviewed it and becomes a property of the process." },
      { label: "Give the standard an owner and a revision rhythm", body: "Named person, scheduled review. Without both, it decays into a document referenced during audits." },
    ],
    expectations: [
      "A written definition of what good looks like at your agency",
      "A consistent floor of research and planning depth on every account",
      "Review that is conducted against a standard rather than against a reviewer's preference",
      "A named owner for the standard and a scheduled revision",
      "Not uniformity. If your accounts start looking identical, you have standardised the wrong layer and should stop",
    ],
    notFor: [
      "Agencies whose differentiation is genuinely bespoke, per-client craft with no repeating structure. That is rarer than agencies believe, but it exists.",
      "Agencies unwilling to write their standard down. Everything here depends on that artefact existing.",
      "Anyone hoping standardisation substitutes for capability. It makes an agency consistent, which is only good news if the standard is good.",
    ],
    related: { stages: ["small-agency", "growing-agency", "large-agency"], workflows: ["scale-client-delivery", "strategy-and-planning"] },
    faqs: [
      {
        q: "Will this make our work generic?",
        a: "Only if you standardise voice or recommendation, which you should not. Standardising the container makes the contents easier to judge — a consistent structure actually makes distinctive work more visible, because the variation is where you intended it.",
      },
      {
        q: "How detailed should the standard be?",
        a: "Detailed enough that two reviewers reach the same verdict on the same piece of work. That is the practical test, and it is more useful than any target length.",
      },
      {
        q: "What if our team disagrees about what good looks like?",
        a: "Then you have found something important. That disagreement is currently being resolved separately on every account by whoever happens to review it, which is the inconsistency your clients are seeing.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "scale-without-hiring",
    title: "Scale Without Hiring Too Fast",
    navLabel: "Scale Without Hiring Too Fast",
    headline: "Grow the book before you grow the payroll",
    lead:
      "Hiring ahead of revenue is how agencies die; hiring behind it is how they burn out their best people. Most agencies oscillate between the two because headcount is the only capacity lever they have.",
    summary:
      "Adding delivery capacity without a hiring cycle behind every account, and hiring later and better when you do.",
    seoTitle: "Scaling an agency without hiring too fast",
    seoDescription:
      "How agencies add delivery capacity without a hiring cycle behind every new account — and how to make the hires you do need later, better targeted and lower risk.",
    updated: "2026-08-28",
    situation:
      "Every new client implies a hire, every hire implies a quarter of ramp-up, and the ramp-up is paid for out of a margin that was already thin.",
    obstacle: [
      { label: "Headcount is the only lever", body: "When production capacity is people, growth is hiring and nothing else." },
      { label: "The ramp is expensive and long", body: "Weeks of a new person's time and weeks of an existing person's, and the existing person was already the constraint." },
      { label: "Hiring is hard to reverse", body: "Which makes it a bet on pipeline that might not hold, taken by a business with limited cash reserves." },
      { label: "You end up hiring for volume", body: "Which means juniors doing production, which means more review load on the same seniors. The problem recurs one level up." },
    ],
    approach: [
      { label: "Separate volume roles from judgement roles", body: "Be honest about which of your current roles are mostly production. That is where the hiring pressure is coming from." },
      { label: "Move the production layer first", body: "This is what breaks the link between account count and headcount, which is the mechanism the whole page depends on." },
      { label: "Model your review capacity", body: "It is the new constraint. Know what it is before you commit to accounts against it, or you will simply hit a different wall." },
      { label: "Hire for the constraint, not the symptom", body: "When you do hire, hire reviewers, strategists and account owners. Those are slower hires — start the search earlier." },
      { label: "Keep a deliberate buffer", body: "Running review capacity at a hundred percent means the first unusual week produces unreviewed work reaching a client." },
    ],
    expectations: [
      "Account growth that does not automatically imply a hire",
      "A modelled view of review capacity as the binding constraint",
      "Hiring targeted at judgement roles, planned with a longer runway",
      "A deliberate buffer rather than full utilisation",
      "No claim that you will never hire again. Agencies grow by adding people; this changes when and for what",
    ],
    notFor: [
      "Agencies whose growth constraint is sales rather than delivery.",
      "Agencies that need specialist disciplines — design, video, media buying — which this does not provide.",
      "Anyone treating this as a redundancy plan. Removing the people who do the reviewing removes the thing that makes the output usable.",
    ],
    related: { stages: ["growing-agency", "large-agency", "small-agency"], workflows: ["scale-client-delivery"] },
    faqs: [
      {
        q: "Is this a way to avoid hiring entirely?",
        a: "No, and we would rather say so plainly. It removes the automatic link between winning an account and opening a role. You will still hire for judgement, client ownership and review, and those hires get more important as the book grows.",
      },
      {
        q: "What does this do to our margin?",
        a: "That depends on your pricing, your cost base and how you use the released capacity, so any number we gave you would be fiction. The mechanism is that the marginal cost of an account falls; whether that reaches your margin depends on decisions you make.",
      },
      {
        q: "When should we hire anyway?",
        a: "When review is the constraint and a buffer has disappeared, when an account genuinely needs a dedicated owner, or when you need a capability you do not have. All three are good reasons; 'we won a client' on its own is not.",
      },
    ],
  },
];

export const useCaseBySlug = new Map(useCases.map((u) => [u.slug, u]));
