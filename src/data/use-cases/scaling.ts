import type { UseCase } from "@/lib/types";

/**
 * Use cases about growing the agency rather than delivering an account.
 */
export const scalingUseCases: UseCase[] = [
  {
    kind: "use-case",
    slug: "handle-more-clients",
    title: "Handle More Clients",
    navLabel: "Handle More Clients",
    phase: "scale",
    headline: "Take the next client without the next hire",
    lead:
      "The decision to take on another client is usually made on instinct, in a month when the pipeline looks thin, by someone who will personally absorb the consequences. It is one of the most consequential decisions an agency makes and one of the least examined.",
    summary:
      "Adding accounts without a hiring cycle for each one. What actually changes, which constraint moves, and where the new ceiling sits.",
    seoTitle: "Handling more agency clients without more headcount",
    seoDescription:
      "How agencies take on additional accounts without a hiring cycle behind each one, by moving the binding constraint from production to review capacity.",
    updated: "2026-09-02",
    situation:
      "You could win more work than you can currently deliver, and the only lever you have is hiring — which lags demand by a quarter and compresses margin while it does.",
    obstacle: [
      { label: "Each account carries a fixed structural cost", body: "Research, planning, setup. Roughly the same effort for a small client as a large one, which is why small accounts are so often unprofitable." },
      { label: "Hiring is slow and expensive to reverse", body: "Recruit, onboard, ramp. If the pipeline softens during the ramp, you carry a cost against revenue that did not arrive." },
      { label: "Senior people absorb the overflow", body: "Which works for a quarter and then shows up as a resignation or a client complaint." },
      { label: "You do not know your real capacity", body: "Without a model of where hours go, 'can we take this on' is answered by mood." },
    ],
    approach: [
      { label: "Find where the hours actually go", body: "Measure a fortnight honestly. Most agencies discover context reassembly and first-draft production are a larger share than assumed." },
      { label: "Move the structural layer", body: "Research, planning and first drafts are the fixed cost per account, and the layer that scales worst with account count." },
      { label: "Protect review capacity deliberately", body: "As production stops binding, review becomes the constraint. Without planning for that you have moved the bottleneck rather than removed it." },
      { label: "Add one account and measure", body: "Not three. One additional account run through the new structure tells you what the marginal cost actually is." },
      { label: "Recalculate before you commit", body: "Then make the capacity decision as a calculation. This is the point of the whole exercise." },
    ],
    expectations: [
      "A measured view of where your delivery hours currently go",
      "A lower marginal cost per additional account",
      "Review capacity as your new binding constraint — a higher ceiling, but a real one",
      "Hiring decisions made later and against judgement roles",
      "No specific number of additional accounts. That depends on your service mix and your reviewers",
    ],
    notFor: [
      "Agencies whose constraint is new business rather than delivery.",
      "Agencies without review capacity to spare. More output that nobody can check is a reputation problem.",
      "Agencies whose service is primarily design, video or media buying.",
    ],
    stages: ["solo", "small-team", "growing"],
    related: {
      workflows: ["scale-client-delivery", "multi-client-delivery", "agency-scaling"],
      capabilities: ["sops", "marketing-calendar", "social-media", "business-profile"],
    },
    faqs: [
      {
        q: "How much more can we actually take on?",
        a: "We genuinely do not know, and neither does anyone who answers without seeing your numbers. Measure your hour distribution, run one additional account through the structure, and compute your own answer from real data.",
      },
      {
        q: "What breaks first if we get this wrong?",
        a: "Review. The failure mode is a larger portfolio of unedited work, which clients read as the agency losing interest — a faster way to lose accounts than being at capacity.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "scale-without-hiring",
    title: "Scale Without Hiring Too Fast",
    navLabel: "Scale Without Hiring",
    phase: "scale",
    headline: "Grow the book before you grow the payroll",
    lead:
      "Hiring ahead of revenue is how agencies die; hiring behind it is how they burn out their best people. Most agencies oscillate between the two because headcount is the only capacity lever they have.",
    summary:
      "Adding delivery capacity without a hiring cycle behind every account, and hiring later and better when you do.",
    seoTitle: "Scaling an agency without hiring too fast",
    seoDescription:
      "How agencies add delivery capacity without a hiring cycle behind every account, and make the hires they do need better targeted.",
    updated: "2026-09-02",
    situation:
      "Every new client implies a hire, every hire implies a quarter of ramp-up, and the ramp-up is paid out of a margin that was already thin.",
    obstacle: [
      { label: "Headcount is the only lever", body: "When production capacity is people, growth is hiring and nothing else." },
      { label: "The ramp is expensive and long", body: "Weeks of a new person's time and weeks of an existing person's, and the existing person was already the constraint." },
      { label: "Hiring is hard to reverse", body: "Which makes it a bet on a pipeline that might not hold, taken by a business with limited reserves." },
      { label: "You end up hiring for volume", body: "Juniors doing production, more review load on the same seniors. The problem recurs one level up." },
    ],
    approach: [
      { label: "Separate volume roles from judgement roles", body: "Be honest about which current roles are mostly production. That is where the hiring pressure originates." },
      { label: "Move the production layer first", body: "This is what breaks the link between account count and headcount." },
      { label: "Model your review capacity", body: "It is the new constraint. Know what it is before committing accounts against it, or you will hit a different wall." },
      { label: "Hire for the constraint, not the symptom", body: "Reviewers, strategists and account owners. Slower hires — start the search earlier." },
      { label: "Keep a deliberate buffer", body: "Running review at a hundred percent means the first unusual week produces unreviewed work reaching a client." },
    ],
    expectations: [
      "Account growth that does not automatically imply a hire",
      "A modelled view of review capacity as the binding constraint",
      "Hiring targeted at judgement roles, with a longer runway",
      "A deliberate buffer rather than full utilisation",
      "No claim that you will never hire again. This changes when and for what",
    ],
    notFor: [
      "Agencies whose growth constraint is sales rather than delivery.",
      "Agencies needing specialist disciplines — design, video, media buying.",
      "Anyone treating this as a redundancy plan. Removing the reviewers removes what makes the output usable.",
    ],
    stages: ["growing", "established", "small-team"],
    related: {
      workflows: ["agency-scaling", "scale-client-delivery", "agency-sop-creation"],
      capabilities: ["sops", "subscription", "roles-and-permissions", "marketing-calendar"],
    },
    faqs: [
      {
        q: "Is this a way to avoid hiring entirely?",
        a: "No, and we would rather say so plainly. It removes the automatic link between winning an account and opening a role. You will still hire for judgement, ownership and review, and those hires matter more as the book grows.",
      },
      {
        q: "When should we hire anyway?",
        a: "When review is the constraint and the buffer has gone, when an account needs a dedicated owner, or when you need a capability you do not have. 'We won a client' on its own is not a reason.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "manage-multiple-client-brands",
    title: "Manage Multiple Client Brands",
    navLabel: "Manage Multiple Brands",
    phase: "scale",
    headline: "Keeping a dozen brands straight",
    lead:
      "Holding several client brands at once is a memory problem before it is a capacity problem. Voice, guardrails, assets and boundaries all differ, and the errors are visible to exactly the people who matter.",
    summary:
      "Holding several client brands without them blurring — voice, assets, guardrails and boundaries held per client rather than remembered.",
    seoTitle: "Managing multiple client brands in an agency",
    seoDescription:
      "Keeping several client brands distinct: voice, assets, guardrails and boundaries held per client rather than carried in someone's memory.",
    updated: "2026-09-02",
    situation:
      "You hold brand context for several clients and the details blur — which tone belongs to whom, which logo is current, what one client will not say.",
    obstacle: [
      { label: "Brand context is held in memory", body: "Which does not scale past about three clients and fails first under pressure." },
      { label: "Assets accumulate in personal copies", body: "So somebody eventually sends a superseded logo to a printer." },
      { label: "Boundaries differ per client", body: "And applying one client's comfort level to another is the error that ends a relationship in a single email." },
    ],
    approach: [
      { label: "Hold brand as a record, per client", body: "Voice, guardrails, assets and boundaries, written rather than recalled." },
      { label: "Mark superseded material explicitly", body: "The absence of an old file is not the same as knowing it is retired." },
      { label: "Make guardrails a review step", body: "Particularly the prohibitions. A boundary that is remembered is a boundary that gets crossed." },
      { label: "Keep clients structurally separate", body: "Two clients in the same sector should not be a permissions oversight away from each other." },
    ],
    expectations: [
      "Per-client brand records rather than remembered context",
      "Clearly retired asset versions",
      "Guardrails checked as a step before anything ships",
      "Structural separation between client workspaces",
      "Fewer of the errors that are individually small and relationally expensive",
    ],
    notFor: [
      "Agencies with one or two clients, where memory genuinely suffices.",
      "Anyone expecting this to substitute for brand judgement. It records decisions rather than making them.",
      "Agencies whose clients share a brand — a franchise network is a different problem.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      workflows: ["multi-client-delivery", "team-handoffs", "new-client-launch"],
      capabilities: ["brand", "brand-assets", "organization", "roles-and-permissions"],
    },
    faqs: [
      {
        q: "At what point does this become necessary?",
        a: "Around three to four clients, which is where memory stops being sufficient. The symptom is small errors — a wrong tone, an old asset — that are individually trivial and cumulatively damaging.",
      },
      {
        q: "What is the most damaging error here?",
        a: "Applying one client's boundaries to another — saying something for client A that client B would never permit. It is the kind of mistake that ends a relationship immediately, and it is entirely preventable with a per-client record.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "improve-team-handoffs",
    title: "Improve Team Handoffs",
    navLabel: "Improve Team Handoffs",
    phase: "scale",
    headline: "Passing an account without restarting it",
    lead:
      "Holiday, illness, resignation, reassignment. An account whose context lives in one person's head does not get handed over — it gets rebuilt, and the client can tell.",
    summary:
      "Making an account transferable, so a change of owner costs a handover rather than a re-discovery.",
    seoTitle: "Improving team handoffs in an agency",
    seoDescription:
      "Making client accounts transferable between agency team members, so a change of owner costs a handover rather than a rediscovery.",
    updated: "2026-09-02",
    situation:
      "When someone is away or leaves, their accounts stall or get served by someone reconstructing them from old work.",
    obstacle: [
      { label: "Context is verbal", body: "Transmitted in a long conversation, imperfectly, and lost when the conversation ends." },
      { label: "Nobody knows what is undocumented until it matters", body: "The gap is discovered during the handover, which is the worst time." },
      { label: "The client finds out by being asked something they answered", body: "Which reads as the agency losing track of them." },
    ],
    approach: [
      { label: "Make the account context a record", body: "Business profile, positioning, segments, voice and plan — readable rather than recalled." },
      { label: "Do a dry-run handover before you need one", body: "Ask someone to pick up an account for a week. The gaps appear immediately and cheaply." },
      { label: "Keep the relationship layer explicit", body: "The politics, the preferences, the things the client hates. This part will not structure itself and needs a conversation." },
      { label: "Tell the client before they notice", body: "A silently changed contact reads as instability." },
      { label: "Overlap where the timing allows", body: "One cycle with both people is worth more than any document." },
    ],
    expectations: [
      "Account context readable by someone who has not worked on it",
      "Known gaps rather than gaps discovered during a handover",
      "A client told rather than left to notice",
      "Cover that is possible rather than theoretical",
      "Not a complete transfer. The relationship takes time and an overlap",
    ],
    notFor: [
      "One-person agencies, where there is nobody to hand to — though the record still makes a pause recoverable.",
      "Anyone expecting documentation to replace the relationship. It transfers the context, not the trust.",
      "Agencies unwilling to run a dry run. The gaps only appear in use.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      workflows: ["team-handoffs", "agency-sop-creation", "multi-client-delivery"],
      capabilities: ["business-profile", "sops", "users", "audit-log"],
    },
    faqs: [
      {
        q: "How much can actually be documented?",
        a: "More than most agencies assume, and never all of it. Business context, positioning and the plan transfer well. The relationship and the client's unstated preferences need a conversation and ideally an overlap.",
      },
      {
        q: "How do we find out what is undocumented?",
        a: "A dry run. Ask a colleague to pick up an account for a week while the usual owner stays quiet. The gaps appear within a day, at a fraction of the cost of discovering them during a real departure.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "build-sops",
    title: "Build SOPs",
    navLabel: "Build SOPs",
    phase: "scale",
    headline: "Four pages that make the agency less fragile",
    lead:
      "Every agency knows it should document how it works. Almost none do, and the reason is not laziness — the benefit arrives later than the cost, always, and nothing external ever makes it urgent.",
    summary:
      "Writing down how the agency actually delivers, in the smallest form that gets used rather than filed.",
    seoTitle: "Building agency SOPs that get used",
    seoDescription:
      "Documenting agency delivery in the smallest useful form — brief structure, sequence, review standard, escalation — so it gets used rather than filed.",
    updated: "2026-09-02",
    situation:
      "How you deliver exists in people's heads, which makes onboarding slow, cover impossible and improvements impossible to propagate.",
    obstacle: [
      { label: "It never becomes urgent", body: "No client is waiting for it, so it loses to everything with a deadline, indefinitely." },
      { label: "The ambitious version fails", body: "A comprehensive manual describing an idealised process goes stale before anyone reads it." },
      { label: "Nobody owns it", body: "So even a good document decays into something referenced during audits." },
    ],
    approach: [
      { label: "Write four pages", body: "Brief structure, delivery sequence, review standard, escalation path. One afternoon. This is the version that gets used." },
      { label: "Describe reality, not the ideal", body: "An idealised process is fiction. Write the real one and improve it from there." },
      { label: "Turn checkpoints into steps", body: "A review requirement written as a standard loses to a deadline; written as a step it survives." },
      { label: "Name an owner and a review date", body: "Without both, it decays. With both, it stays true." },
    ],
    expectations: [
      "Four pages describing what actually happens",
      "Review as a required step rather than a value",
      "A named owner and a scheduled revision",
      "Onboarding measured in days rather than weeks",
      "Not a quality guarantee. It supplies consistency; the standard is yours to set",
    ],
    notFor: [
      "Agencies that have genuinely documented their process and keep it current.",
      "Anyone hoping documentation substitutes for judgement.",
      "Agencies of one with no intention of ever adding anyone — though even then it makes a pause recoverable.",
    ],
    stages: ["starting", "solo", "small-team", "growing"],
    related: {
      workflows: ["agency-sop-creation", "team-handoffs", "scale-client-delivery"],
      capabilities: ["sops", "users", "roles-and-permissions", "brand-manual"],
    },
    faqs: [
      {
        q: "We tried this and nobody read it.",
        a: "Almost universal, and a design failure rather than a discipline one. Comprehensive manuals get ignored. Four pages describing what actually happens, kept where the work is, get used.",
      },
      {
        q: "Where should we start?",
        a: "The brief structure — what you always ask a new client. One page, one afternoon, and everything else builds on it.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "expand-service-offerings",
    title: "Expand Service Offerings",
    navLabel: "Expand Service Offerings",
    phase: "scale",
    headline: "Adding a service without diluting the ones you have",
    lead:
      "Expansion is how agencies grow and how they lose focus. The difference is whether the new service draws on what you already know or requires a capability you do not have.",
    summary:
      "Deciding what to add, what it draws on, and how to test it without committing the agency to it.",
    seoTitle: "Expanding an agency's service offerings",
    seoDescription:
      "Deciding which services an agency should add, what existing capability they draw on, and how to test one before committing.",
    updated: "2026-09-02",
    situation:
      "Clients are asking for things you do not currently offer, and you are deciding whether to build the capability or decline.",
    obstacle: [
      { label: "Every request looks like an opportunity", body: "Which is how agencies end up offering nine services and being credible at three." },
      { label: "The capability gap is underestimated", body: "Particularly for disciplines that look adjacent — video, media buying, technical SEO — and are not." },
      { label: "New services get absorbed into existing retainers", body: "Which makes them unprofitable and invisible." },
    ],
    approach: [
      { label: "Start from what you already hold", body: "Services that reuse your existing research, positioning and client knowledge are cheap to add. Ones that require a new discipline are not." },
      { label: "Test on one existing client", body: "A client who trusts you is the right place to find out whether you can actually deliver it." },
      { label: "Price it separately from the start", body: "A new service absorbed into a retainer never gets evaluated, because its cost is hidden." },
      { label: "Decide the decline criteria in advance", body: "What would make you stop. Without that, a marginal service persists because nobody wants to have killed it." },
    ],
    expectations: [
      "A clear view of which services reuse existing capability and which do not",
      "One tested engagement before it becomes an offer",
      "Separate pricing from the outset",
      "Explicit criteria for discontinuing it",
      "Not every request answered yes. Declining well is part of this",
    ],
    notFor: [
      "Agencies whose core delivery is not yet consistent. Expanding on an unstable base compounds the instability.",
      "Disciplines requiring genuine specialist skill you do not have. Partner or refer rather than learning on a client.",
      "Anyone adding a service to keep one client. That is a pricing conversation in disguise.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      workflows: ["pr-and-media-workflow", "sales-enablement", "agency-scaling"],
      capabilities: ["products", "hr-assets", "video-content", "courses"],
    },
    faqs: [
      {
        q: "Which services are cheapest to add?",
        a: "The ones that reuse research, positioning and client knowledge you already hold — sales enablement, nurturing, employer brand, referral programmes. Disciplines requiring a new craft skill are a different kind of decision.",
      },
      {
        q: "How do we know if it worked?",
        a: "Decide the decline criteria before you start. Without them a marginal service persists indefinitely because nobody wants to be the one who ended it.",
      },
    ],
  },

  {
    kind: "use-case",
    slug: "support-enterprise-accounts",
    title: "Support Enterprise Accounts",
    navLabel: "Support Enterprise Accounts",
    phase: "scale",
    headline: "Larger clients buy differently and check differently",
    lead:
      "An enterprise account is not a big small account. Procurement asks different questions, approval routes are longer, and the agency is expected to demonstrate a process rather than describe one.",
    summary:
      "What changes when clients get large: governance, documented process, access questions and longer approval routes.",
    seoTitle: "Supporting enterprise accounts as an agency",
    seoDescription:
      "What changes when agency clients get large: procurement questions, documented process, access governance and longer approval routes.",
    updated: "2026-09-02",
    situation:
      "You are pitching or delivering for a client large enough to have procurement, legal review and a formal approval chain.",
    obstacle: [
      { label: "Process is assessed, not just output", body: "Larger clients ask how you work, and an undocumented process is a live risk in a procurement conversation." },
      { label: "Access and data questions arrive unannounced", body: "Who can see their material, where it is processed, what record exists. 'Everyone, and none' does not survive a review." },
      { label: "Approval routes are long", body: "Plans that assume fast sign-off are wrong from the day they are written." },
      { label: "Consistency is the product", body: "At this size the client is buying the confidence that the fortieth asset matches the first." },
    ],
    approach: [
      { label: "Document the process before you need to show it", body: "Being asked during procurement is too late. Four pages of real process is more persuasive than a methodology deck." },
      { label: "Know your access answer", body: "Who has access, how clients are separated, what happens when someone leaves. Have this ready rather than assembled under pressure." },
      { label: "Build approval time into the plan", body: "As a real step with a real duration, agreed in writing." },
      { label: "Make review structured rather than personal", body: "At this scale quality has to be a property of the process, because no single reviewer sees everything." },
      { label: "Be honest about scale you have not reached", body: "Claiming enterprise experience you do not have is discovered quickly and expensively." },
    ],
    expectations: [
      "A documented process you can show rather than describe",
      "Prepared answers on access, separation and departure",
      "Approval time treated as a real planning constraint",
      "Structured review rather than review by whoever is senior",
      "Not a claim of enterprise pedigree. If you have not worked at this scale, say so and scope a pilot",
    ],
    notFor: [
      "Agencies without documented delivery. The procurement conversation will surface that immediately.",
      "Anyone unable to resource a longer sales and approval cycle.",
      "Agencies whose value is speed and informality. That is a real strength and it does not survive enterprise governance.",
    ],
    stages: ["growing", "established"],
    related: {
      workflows: ["agency-scaling", "scale-client-delivery", "agency-sop-creation", "client-reporting"],
      capabilities: ["sops", "roles-and-permissions", "audit-log", "ai-processing"],
    },
    faqs: [
      {
        q: "What does procurement actually ask about?",
        a: "How you work, who has access to their material, how clients are separated, what happens when staff leave, and what record exists of activity. Having those answers ready is most of the preparation.",
      },
      {
        q: "Should we claim enterprise experience we do not have?",
        a: "No. It is discovered quickly and it is the kind of discovery that ends a relationship before it starts. Scoping an honest pilot with defined success criteria is a stronger position than an overstated track record.",
      },
    ],
  },
];
