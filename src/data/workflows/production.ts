import type { Workflow } from "@/lib/types";

/**
 * Production workflows — making the work, once the plan is approved.
 *
 * Every one of these has agency review as a required step rather than as a
 * recommendation. That is the difference between a workflow that survives a
 * bad week and one that does not.
 */
export const productionWorkflows: Workflow[] = [
  {
    kind: "workflow",
    slug: "content-production",
    title: "Content Production",
    navLabel: "Content Production",
    phase: "production",
    headline: "From an approved plan to work an editor can review",
    lead:
      "Production is where agency hours go, and most of them go to the same place: reassembling context. Who is this for, what is the angle, what does this client sound like. Reassembly is the cost, not typing.",
    summary:
      "The weekly production run: briefs from the plan, drafts to format, and a review queue an editor can work through in one pass.",
    seoTitle: "Agency content production workflow",
    seoDescription:
      "A weekly content production workflow: briefs generated from an approved plan, drafts written to format, and a required agency review before anything ships.",
    updated: "2026-09-02",
    trigger: "An approved plan with slots in the current production window.",
    outcome: "Reviewed, approved content published by the agency in the client's own tools.",
    spine: [
      { title: "Agency confirms the week's scope", body: "What is actually going out. A plan is a proposal until someone commits the week.", lane: "agency" },
      { title: "Briefs generated per slot", body: "Each with an audience, an angle, a format and a job to do.", lane: "mengo" },
      { title: "Drafts produced to format", body: "Written for the shape the channel takes, inheriting the client's stored voice and guardrails.", lane: "mengo" },
      { title: "Gaps flagged, not filled", body: "Where a draft needed a fact nobody supplied, it says so rather than inventing a number.", lane: "mengo" },
      { title: "Agency edits", body: "The required step. Voice, accuracy, cuts, and the sentence only someone who knows the client would add.", lane: "agency" },
      { title: "Agency approves", body: "A named person decides this is good enough to carry the agency's name.", lane: "agency" },
      { title: "Agency publishes", body: "In the client's own scheduling, email and social tools.", lane: "agency" },
      { title: "Agency records what worked", body: "Observations feed back into the plan and the voice profile.", lane: "agency" },
    ],
    before: [
      { label: "Every asset starts with a context reload", body: "The writer re-reads the strategy, the last three pieces and the tone before writing a word." },
      { label: "Format is an afterthought", body: "One draft gets reshaped for four channels and reads like it on three of them." },
      { label: "Volume is capped by writing capacity", body: "So the plan quietly shrinks to what production can carry." },
    ],
    after: [
      { label: "Context arrives with the brief", body: "Stored positioning, segments and voice mean the reassembly step is gone." },
      { label: "The agency's hours go to editing", body: "Which is where experienced people add the most value per hour." },
      { label: "Volume is capped by review capacity", body: "A higher ceiling, and a real one worth planning against." },
    ],
    checkpoints: [
      "The agency commits the week's scope before production runs.",
      "Editing is a required step. Nothing routes from draft to publish without a person.",
      "A named agency person approves each item before it ships.",
      "Publishing happens in the client's own tools, under the client's own accounts.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["blog-content", "social-media", "newsletter", "brand"],
      workflows: ["content-planning", "social-media-production", "multi-client-delivery"],
      useCases: ["build-a-content-engine", "reduce-repetitive-work"],
    },
    faqs: [
      {
        q: "What if we do not have review capacity for the volume?",
        a: "Then produce less. Volume without review damages a client relationship faster than doing nothing would. The right amount of production is what your reviewers can actually stand behind.",
      },
      {
        q: "How do we stop the work reading as generated?",
        a: "Edit it as an editor rather than a proofreader. The most common improvement is deletion. If your review consists of checking for typos, the output will read exactly as you fear.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "social-media-production",
    title: "Social Media Production",
    navLabel: "Social Media Production",
    phase: "production",
    headline: "The weekly commitment, produced in one pass",
    lead:
      "Social is the most visible thing an agency delivers and the most granular. Produced item by item across several clients it consumes a week; produced in one pass from stored context it does not.",
    summary:
      "The week's social output across every account produced in one pass, with editing as a required step.",
    seoTitle: "Social media production workflow for agencies",
    seoDescription:
      "Producing a week of client social content in one pass from stored context and an approved plan, with required agency editing before publication.",
    updated: "2026-09-02",
    trigger: "An approved content plan with social slots in the current window.",
    outcome: "A week of reviewed, platform-native posts published by the agency.",
    spine: [
      { title: "Agency confirms the week across accounts", body: "One decision covering the book rather than a separate one per client.", lane: "agency" },
      { title: "Slots briefed from the plan", body: "Segment, angle and job per post, inherited rather than decided at the keyboard.", lane: "mengo" },
      { title: "Posts drafted per platform", body: "To the shape each platform actually takes, not one draft reformatted four ways.", lane: "mengo" },
      { title: "Variants produced where warranted", body: "Where a platform genuinely needs a different treatment rather than a different character count.", lane: "mengo" },
      { title: "Agency edits in one pass", body: "A queue an editor works through consecutively, which is faster and more consistent than item by item.", lane: "agency" },
      { title: "Agency approves and schedules", body: "In the client's own tools, under their accounts.", lane: "agency" },
      { title: "Agency handles responses", body: "Comments and messages are a human judgement under time pressure and stay that way.", lane: "agency" },
    ],
    before: [
      { label: "Each post is a separate small task", body: "With its own context reload, several times a day across several clients." },
      { label: "Platform differences are handled by trimming", body: "Which produces content that fits and does not belong." },
      { label: "A gap in the schedule is noticed immediately", body: "By the client, who reads it as the agency losing interest." },
    ],
    after: [
      { label: "The week is one production pass", body: "Rather than forty small ones." },
      { label: "Formats are native", body: "Because the format was decided in planning rather than at the end." },
      { label: "The queue is reviewable consecutively", body: "Which is how an editor catches inconsistency between posts." },
    ],
    checkpoints: [
      "The agency commits the week before production.",
      "Editing is required, in one consecutive pass rather than item by item.",
      "Scheduling and publishing happen in the client's own tools.",
      "Comment and message response stays with a person.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["social-media", "brand", "video-content", "marketing-calendar"],
      workflows: ["content-production", "content-planning", "multi-client-delivery"],
      useCases: ["build-a-content-engine", "handle-more-clients"],
    },
    faqs: [
      {
        q: "Does this schedule the posts?",
        a: "No. Scheduling and publishing stay in the client's own tools under their access. Account access carries obligations that should sit with the account owner.",
      },
      {
        q: "What about comments and community management?",
        a: "Not covered, deliberately. Responding to a customer in public is a judgement call under time pressure and needs a person with the client's context.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "seo-workflow",
    title: "SEO Workflow",
    navLabel: "SEO Workflow",
    phase: "production",
    headline: "Search work that is content work",
    lead:
      "Question research, content structure and internal linking, run as one sequence rather than as a separate discipline that hands a spreadsheet to a writer. The technical half is a different specialism and this does not pretend otherwise.",
    summary:
      "Question research through to published, linked content — with technical SEO explicitly out of scope.",
    seoTitle: "SEO workflow for agency client work",
    seoDescription:
      "A search workflow covering question research, prioritisation, content structure and internal linking, with technical SEO remaining a separate specialism.",
    updated: "2026-09-02",
    trigger: "A client with an owned site and a commercial reason to be found.",
    outcome: "Published content that answers real questions and links coherently to the rest of the site.",
    spine: [
      { title: "Agency defines the commercial goal", body: "Ranking is not an objective. What should the traffic do once it arrives?", lane: "agency" },
      { title: "Questions researched and mapped", body: "What buyers actually ask, mapped to the segments who ask it.", lane: "mengo" },
      { title: "Opportunities prioritised", body: "Including recommending against terms that will not convert.", lane: "mengo" },
      { title: "Agency selects what to produce", body: "Against the client's actual capacity, which is the constraint that decides everything.", lane: "agency" },
      { title: "Content structured to answer", body: "Written to resolve the question rather than to cover the topic.", lane: "mengo" },
      { title: "Internal linking planned", body: "Across the existing page inventory, which is the cheapest improvement most sites have available.", lane: "mengo" },
      { title: "Agency reviews and publishes", body: "Editorial review first, then publication in the client's own site.", lane: "agency" },
      { title: "Agency sets expectations", body: "Search compounds slowly. A client expecting movement in six weeks cancels before it works.", lane: "agency" },
    ],
    before: [
      { label: "Research produces a spreadsheet nobody acts on", body: "Volume columns and no prioritisation." },
      { label: "Content and search are separate workstreams", body: "Producing content nobody finds and pages nobody wants to read." },
      { label: "Internal linking is nobody's job", body: "So relevant pages on the same site never link to one another." },
    ],
    after: [
      { label: "Research produces a decision", body: "A prioritised list with reasoning, including what not to pursue." },
      { label: "Content and search are one workstream", body: "Because they were always the same work." },
      { label: "Linking is part of production", body: "Rather than an audit finding two years later." },
    ],
    checkpoints: [
      "The agency defines the commercial goal before research begins.",
      "The agency selects what to produce, against real capacity.",
      "Editorial review before publication.",
      "The agency sets timeline expectations with the client explicitly.",
    ],
    stages: ["solo", "small-team", "growing", "established"],
    related: {
      capabilities: ["seo", "blog-content", "website-planner", "ai-discoverability"],
      workflows: ["content-planning", "content-production"],
      useCases: ["build-a-content-engine"],
    },
    faqs: [
      {
        q: "Does this include technical SEO?",
        a: "No. Crawling, indexation, page speed, structured data implementation and migrations are a separate discipline with its own specialists. Being clear about that in your scope prevents an expensive misunderstanding.",
      },
      {
        q: "Can you guarantee rankings?",
        a: "No, and neither can anyone else. What is controllable is producing genuinely useful content, structured well and linked properly — which is what this covers.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "ads-workflow",
    title: "Ads Workflow",
    navLabel: "Ads Workflow",
    phase: "production",
    headline: "Everything up to the point of placement",
    lead:
      "Structure, audiences, concepts and copy, produced against an approved brief. Placement, budget and account access stay with the agency and the client, which is where the commercial accountability belongs.",
    summary:
      "Campaign structure, audiences, concepts and copy for paid media, with placement and budget staying with the agency and client.",
    seoTitle: "Paid ads workflow for agencies",
    seoDescription:
      "A paid media workflow covering campaign structure, audience definition, concepts and copy, with placement, budget and accounts staying with the agency and client.",
    updated: "2026-09-02",
    trigger: "An approved campaign brief with paid media in the channel mix.",
    outcome: "A brief and creative set a media buyer can execute against, and an honest read of what happened.",
    spine: [
      { title: "Agency agrees the objective and budget", body: "Commercial terms, agreed with the client before anything is structured.", lane: "agency" },
      { title: "Campaign structure drafted", body: "Architecture derived from the segments rather than from a template.", lane: "mengo" },
      { title: "Audiences defined per ad set", body: "From the stored segments, with the objection each holds attached.", lane: "mengo" },
      { title: "Concepts vary the claim", body: "Distinct angles rather than reworded versions of one idea, so a test produces learning.", lane: "mengo" },
      { title: "Agency approves before build", body: "The checkpoint that saves the budget.", lane: "agency" },
      { title: "Copy produced per placement", body: "Sized and shaped for where each will run.", lane: "mengo" },
      { title: "Agency or client places the media", body: "Ad accounts, budget and placement stay outside this entirely.", lane: "agency" },
      { title: "Agency reads the results", body: "Attribution is genuinely hard, and reading it honestly is an expertise question.", lane: "agency" },
    ],
    before: [
      { label: "Testing varies the wording", body: "Which produces small differences and no learning about what buyers respond to." },
      { label: "Creative refresh is reactive", body: "Produced when performance drops rather than before it does." },
      { label: "Structure differs per campaign", body: "So nothing can be compared across accounts or over time." },
    ],
    after: [
      { label: "Tests vary the claim", body: "Three genuinely different angles teach more than twelve rewordings." },
      { label: "Refresh is planned", body: "Because creative fatigue is predictable even when its timing is not." },
      { label: "Structure is comparable", body: "Which is what lets an agency learn across its own accounts." },
    ],
    checkpoints: [
      "The agency agrees objective and budget with the client first.",
      "The agency approves structure and concepts before build.",
      "Placement, budget and account access stay with the agency and client.",
      "The agency reads and reports the results, including bad ones.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["ads-management", "landing-page", "icps-and-personas", "video-content"],
      workflows: ["campaign-planning", "product-launch", "client-reporting"],
      useCases: ["deliver-campaigns-faster", "launch-a-new-client-campaign"],
    },
    faqs: [
      {
        q: "Does this run the ad accounts?",
        a: "No. It produces planning and written creative that a media buyer works from. Placement, budget and account access stay with you and the client, which is where the commercial accountability sits.",
      },
      {
        q: "Can it produce the visuals?",
        a: "No — concepts and copy only. For most paid programmes design and video production is the larger constraint, and it is worth being honest about which half of the bottleneck this addresses.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "local-business-marketing",
    title: "Local Business Marketing",
    navLabel: "Local Business Marketing",
    phase: "production",
    headline: "The unglamorous work that produces enquiries",
    lead:
      "Profile completeness, local content, reviews and the practical details that decide whether someone nearby finds and chooses this business. Low glamour, high return, and consistently under-served.",
    summary:
      "Local profile, content and review work for clients with a physical presence or a service area.",
    seoTitle: "Local business marketing workflow for agencies",
    seoDescription:
      "A local marketing workflow: profile completeness, area content, review handling and the practical details that decide local visibility.",
    updated: "2026-09-02",
    trigger: "A client with a physical location, a service area, or several of both.",
    outcome: "Complete, accurate local presence with reviews handled and area content published.",
    spine: [
      { title: "Agency audits the current presence", body: "Profiles, listings, directories — including whether anything is unclaimed.", lane: "agency" },
      { title: "Completeness assessed per location", body: "Against what the profiles support rather than against what is filled in.", lane: "mengo" },
      { title: "Agency verifies every fact", body: "Hours, addresses, services. Publishing wrong opening times is a customer-facing error.", lane: "agency" },
      { title: "Profile and area content produced", body: "Per location, with the local specificity that makes it credible.", lane: "mengo" },
      { title: "Review responses drafted", body: "Structured for routine ones; escalated for anything negative.", lane: "mengo" },
      { title: "Agency answers negative reviews personally", body: "The highest-stakes short writing a local business publishes. Never templated.", lane: "agency" },
      { title: "Agency publishes and maintains", body: "In the client's own accounts, on a maintenance rhythm rather than when someone remembers.", lane: "agency" },
    ],
    before: [
      { label: "Profiles go stale between checks", body: "Because maintenance has no deadline and nobody asks for it." },
      { label: "Local content is generic", body: "Which reads as generic to exactly the local audience it is aimed at." },
      { label: "Reviews go unanswered", body: "Particularly the negative ones, which is where the damage compounds." },
    ],
    after: [
      { label: "Maintenance is scheduled", body: "Rather than remembered." },
      { label: "Local content carries real local input", body: "Supplied by the client, because it cannot be retrieved." },
      { label: "Reviews are answered by a person", body: "Quickly, and negative ones properly." },
    ],
    checkpoints: [
      "The agency verifies every factual detail with the client before publication.",
      "Negative reviews are answered by a person, never from a template.",
      "Profile access stays in the client's own accounts.",
      "Maintenance runs on a rhythm rather than on memory.",
    ],
    stages: ["starting", "solo", "small-team", "growing"],
    related: {
      capabilities: ["google-business-profile", "testimonials", "seo", "website-planner"],
      workflows: ["new-client-launch", "content-production"],
      useCases: ["get-the-first-client", "manage-multiple-client-brands"],
    },
    faqs: [
      {
        q: "Why is this a separate workflow?",
        a: "Because local work has a different rhythm from campaign work: it is maintenance rather than projects, and it degrades quietly rather than failing visibly. Treating it as part of a content plan means it gets skipped.",
      },
      {
        q: "Should we respond to reviews for the client?",
        a: "With their agreement and their tone, yes for routine ones. A negative review is the highest-stakes short piece of writing a local business publishes and it needs a person who understands the specific situation.",
      },
    ],
  },

  {
    kind: "workflow",
    slug: "pr-and-media-workflow",
    title: "PR & Media",
    navLabel: "PR & Media",
    phase: "production",
    headline: "From a story to a placement, honestly scoped",
    lead:
      "The writing is the easy fifth of PR. This workflow covers the material and the approval structure around it; relationships, pitching and placement are the agency's and stay that way.",
    summary:
      "Newsworthiness assessment, material production and approval routing — with relationships and placement staying with the agency.",
    seoTitle: "PR and media workflow for agencies",
    seoDescription:
      "A PR workflow covering newsworthiness assessment, material production and spokesperson approval, with relationships and placement remaining agency work.",
    updated: "2026-09-02",
    trigger: "A client announcement, or a running story a client could credibly comment on.",
    outcome: "Approved material a journalist can use, pitched by the agency.",
    spine: [
      { title: "Agency judges whether it is news", body: "The most valuable step, and usually the one that concludes it is not.", lane: "agency" },
      { title: "Spokesperson and boundaries confirmed", body: "Who may speak, on what, and what they will not discuss.", lane: "agency" },
      { title: "Material structured", body: "Written to the journalist's needs — the news first, the background beneath.", lane: "mengo" },
      { title: "Claims flagged for evidence", body: "Press claims are on the record and permanent. Everything requiring proof is marked.", lane: "mengo" },
      { title: "Client verifies every fact", body: "Numbers, dates, credentials. Errors in press material are public and durable.", lane: "agency" },
      { title: "Spokesperson approves the quote", body: "Attributed statements are approved by the person they are attributed to. Always.", lane: "agency" },
      { title: "Agency pitches and manages the relationship", body: "The difficult four-fifths of PR, and entirely human.", lane: "agency" },
      { title: "Coverage repurposed", body: "Placed coverage becomes owned content, which most agencies forget to do.", lane: "mengo" },
    ],
    before: [
      { label: "Non-news gets pitched", body: "Which wastes effort and erodes the journalist relationships you have." },
      { label: "Quotes are approved informally", body: "Which is where attribution incidents come from." },
      { label: "Coverage is celebrated and discarded", body: "Rather than repurposed into the client's owned channels." },
    ],
    after: [
      { label: "Newsworthiness is assessed first", body: "So effort goes to things that can actually be placed." },
      { label: "Approval is a required step", body: "With a record of who approved what." },
      { label: "Coverage becomes owned content", body: "Which extends its value well past the week it ran." },
    ],
    checkpoints: [
      "The agency assesses newsworthiness before anything is written.",
      "The client verifies every factual claim.",
      "The named spokesperson approves any attributed quote.",
      "The agency owns the pitch and the relationship.",
    ],
    stages: ["small-team", "growing", "established"],
    related: {
      capabilities: ["pr-content", "interview-and-media-prep", "founders", "speaking-engagements"],
      workflows: ["product-launch", "content-production"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Does this get coverage?",
        a: "No. It produces the material and the approval structure. Placement depends on relationships, timing and whether the thing is actually news — the difficult four-fifths of PR, and all of it human.",
      },
      {
        q: "What about crisis communications?",
        a: "Not this. Crisis work needs a person with the client's full context, the authority to decide and usually their counsel in the room. Structured drafting is the wrong tool under those conditions.",
      },
    ],
  },
];
