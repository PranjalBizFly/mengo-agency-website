import type { CapabilityGroup } from "@/lib/types";

/**
 * The eight capability groups.
 *
 * The taxonomy is Mengo's, not ours — these are the areas the product is
 * organised into. What this site adds is the agency reading of each one:
 * what the group is for when the business being marketed belongs to a client
 * rather than to you, and in what order an agency actually adopts it.
 *
 * `adoptionOrder` is the field that earns these pages their place. A group hub
 * that lists its capabilities is a menu; one that says which three to do first
 * and which to leave until later is advice.
 */
export const capabilityGroups: CapabilityGroup[] = [
  {
    kind: "capability-group",
    slug: "foundation",
    title: "Foundation",
    navLabel: "Foundation",
    headline: "What has to be true before anything else is worth doing",
    lead:
      "Six capabilities that hold what is factually true about a client's business. Everything downstream inherits from them, which is why a vague foundation does not produce vague marketing — it produces confident marketing built on assumptions nobody wrote down.",
    summary:
      "The factual layer beneath a client engagement: business profile, products, people, competitors and the buyers you are actually addressing.",
    seoTitle: "Foundation — the client facts everything else inherits",
    seoDescription:
      "The factual layer beneath client marketing: business profile, products, employees, founders, competitors and ICPs. What agencies capture once and everything else inherits.",
    updated: "2026-09-02",
    tagline: "The factual layer everything else inherits from.",
    character:
      "These are records rather than outputs. Nothing in this group produces a deliverable a client sees; all of it determines whether the deliverables further along are right.",
    whyGroup: [
      {
        label: "It is the brief, made durable",
        body: "Most agencies capture this once, in a kickoff, into somebody's notes. Held as structured records instead, it survives the person who took the notes and stops being re-gathered on every piece of work.",
      },
      {
        label: "It is where accuracy is cheapest",
        body: "A wrong price point or a misread buyer costs a correction here and a quarter of misdirected work if it is discovered downstream.",
      },
      {
        label: "It is what makes a second client faster than the first",
        body: "The shape repeats even when the content does not. An agency with a standard foundation gathers the fifth client's in a fraction of the time it took for the first.",
      },
    ],
    adoptionOrder: [
      { label: "First — Business Profile", body: "Nothing else has anywhere to attach until this exists. It is also the single artefact that most improves a first client meeting." },
      { label: "Second — Products and ICPs", body: "What is sold and who buys it. These two together are enough to produce a defensible first plan." },
      { label: "Third — Competitors", body: "Useful immediately, but only once you know what the client sells; competitor work without a defined offer produces a report nobody acts on." },
      { label: "Later — Founders, Employees", body: "These matter when the client's people are part of the marketing — thought leadership, hiring, PR. Many clients never need them." },
    ],
    faqs: [
      {
        q: "How much of this do we need before we can start work?",
        a: "Business Profile, Products and one ICP. That is enough for a defensible first plan. Everything else can be filled in as the engagement reveals what matters — and recording it as absent is better than guessing at it.",
      },
      {
        q: "Is this not just a client brief?",
        a: "It is a brief that persists and that everything downstream reads from, rather than a document produced once and referenced occasionally. The practical difference shows up on the fortieth asset, which either inherits the client's real context or is written from someone's memory of it.",
      },
    ],
  },

  {
    kind: "capability-group",
    slug: "brand",
    title: "Brand",
    navLabel: "Brand",
    headline: "The part clients are most protective of, and most vague about",
    lead:
      "Seven capabilities covering how a client sounds, looks and is recognised. This is the group where an agency's judgement matters most and where a system's role is narrowest — structure and consistency, never the creative decision itself.",
    summary:
      "Brand strategy, assets, manual, visual identity and the internal-facing material that keeps a client's brand consistent across everyone who uses it.",
    seoTitle: "Brand — keeping a client's voice consistent across accounts",
    seoDescription:
      "Brand strategy, assets, manual, visual identity, stationery and HR assets — what agencies structure for clients, and where creative judgement stays with people.",
    updated: "2026-09-02",
    tagline: "How a client sounds and looks, kept consistent.",
    character:
      "Half of this group is decision — positioning, identity, tone — and half is administration: keeping the decision applied consistently by people who were not in the room when it was made. The second half is where the hours go.",
    whyGroup: [
      {
        label: "Brand decay is an administration problem",
        body: "Almost no client's brand fails because the strategy was wrong. It erodes because forty people applied it slightly differently over two years, and nobody had a current reference to point at.",
      },
      {
        label: "It is the most-asked, least-documented client question",
        body: "'Can you send me the logo files' is a weekly request at most agencies, and the answer is usually a search through email.",
      },
      {
        label: "It is where agencies are judged fastest",
        body: "A client notices an off-brand asset before they notice a missed metric, and reads it as carelessness rather than as a one-off.",
      },
    ],
    adoptionOrder: [
      { label: "First — Brand", body: "The record of what the brand actually is. Even a thin version stops the same questions being re-answered." },
      { label: "Second — Brand Assets", body: "The highest-return item in this group for the least work. It removes a recurring interruption immediately." },
      { label: "Third — Brand Strategy and Visual Identity", body: "The decisions. These need a strategist and a designer; what is structured is the record, not the choice." },
      { label: "Later — Brand Manual, Stationery, HR Assets", body: "These matter once more than a handful of people apply the brand. Below that they are documentation nobody reads." },
    ],
    faqs: [
      {
        q: "Does any of this make brand decisions?",
        a: "No. Positioning, identity and tone are creative and strategic judgements made by people. What is structured is the record of the decision and its consistent application, which is the part that decays.",
      },
      {
        q: "Our clients already have brand guidelines. Does this replace them?",
        a: "It holds them where the work happens rather than in a PDF that was current two years ago. If a client's guidelines are genuinely maintained and used, this group has less to offer them and more to offer the ones whose guidelines nobody can find.",
      },
    ],
  },

  {
    kind: "capability-group",
    slug: "marketing",
    title: "Marketing",
    navLabel: "Marketing",
    headline: "The largest group, and the one that most rewards a system",
    lead:
      "Seventeen capabilities covering planning, channels, analysis, visibility and the long tail of marketing work that gets promised in a proposal and built in whatever time is left. This is where the repetition an agency pays for actually lives.",
    summary:
      "Planning, channel strategy, analysis, advertising, PR, events and the visibility work agencies sell and struggle to deliver consistently.",
    seoTitle: "Marketing — planning, channels, visibility and analysis",
    seoDescription:
      "Marketing calendars, channel maps, SWOT and MOAT analysis, ads, influencer and PR work, events, and AI discoverability — structured for agency client delivery.",
    updated: "2026-09-02",
    tagline: "Planning, channels, analysis and visibility.",
    character:
      "This group is wide rather than deep. Most of its capabilities are individually small and collectively enormous, which is exactly the profile of work that gets under-delivered: no single item is big enough to schedule, and together they are a job.",
    whyGroup: [
      {
        label: "It is where scope creep lives",
        body: "Proposals promise a marketing function. Delivery produces the three parts of it somebody had time for, and the client eventually notices which seven were missing.",
      },
      {
        label: "The planning layer decides everything after it",
        body: "A calendar with a reason behind each week produces briefed work. An empty calendar produces a weekly argument about what to post.",
      },
      {
        label: "Most of it repeats between clients",
        body: "A channel map for a professional services firm and one for a clinic are different documents built the same way. The structure is the reusable part; the content is not.",
      },
    ],
    adoptionOrder: [
      { label: "First — Marketing Calendar and Channels Map", body: "Together they answer 'what are we doing and where'. Nearly every other capability in the group is easier once these exist." },
      { label: "Second — SWOT and Google Business Profile", body: "One informs the plan, one is the highest-return hour in local marketing. Both are quick." },
      { label: "Third — Ads, PR Content, Email Templates", body: "The delivery capabilities. Worth structuring once the plan they run against is stable." },
      { label: "Later — Wikipedia, Magazine & Sponsorship, Speaking, Courses", body: "Genuinely valuable and genuinely optional. These serve specific client profiles, and doing them for a client who does not need them is expensive theatre." },
    ],
    faqs: [
      {
        q: "Do we have to use all seventeen?",
        a: "No, and an agency that tried would be doing work its clients did not ask for. The adoption order above is the honest sequence; most client engagements use six or seven of these and never touch the rest.",
      },
      {
        q: "Does this place ads or send anything?",
        a: "No. Nothing in this group publishes, sends or spends. Ad accounts, budget and media placement stay with the agency and the client, which is where the commercial accountability sits.",
      },
    ],
  },

  {
    kind: "capability-group",
    slug: "sales",
    title: "Sales",
    navLabel: "Sales",
    headline: "The handover most marketing work is judged by",
    lead:
      "Ten capabilities covering what happens once marketing has produced interest: the scripts, the pitch, the page, the follow-up and the material a salesperson actually needs. Most agencies are measured on this boundary and manage very little of it.",
    summary:
      "Sales scripts, pitches, landing pages, nurturing, collateral and the media formats that carry a client's argument into a conversation.",
    seoTitle: "Sales — the handover marketing is judged by",
    seoDescription:
      "Sales scripts, presentations, landing pages, WhatsApp nurturing, collateral and performance review — the conversion layer agencies are judged on.",
    updated: "2026-09-02",
    tagline: "The handover marketing is judged by.",
    character:
      "Everything in this group sits at the point where marketing hands over to a person. That handover is where attribution arguments start, and where a small amount of structure removes most of them.",
    whyGroup: [
      {
        label: "Agencies are judged on the outcome, not the traffic",
        body: "A client who receives enquiries and does not convert them will conclude the enquiries were poor. Sometimes that is true; often the handover is the problem, and it is a fixable one.",
      },
      {
        label: "Follow-up is the most-promised, least-built scope item",
        body: "Nearly every business writes an excellent first reply and no fifth one. Nurturing loses to work that has a deadline.",
      },
      {
        label: "It is where an agency can prove its value fastest",
        body: "Improving a landing page or a follow-up sequence produces a change the client can see, without waiting a quarter for a content programme to compound.",
      },
    ],
    adoptionOrder: [
      { label: "First — Landing Page and Sales Script", body: "The two things every client already has in some form, and where the fastest visible improvement usually is." },
      { label: "Second — WhatsApp Nurturing and Sales Collateral", body: "The follow-up layer. This is where most enquiries are lost and where the work is least likely to have been done." },
      { label: "Third — Presentations, Sales Performance", body: "Worth structuring once the earlier layers exist and there is enough volume to review." },
      { label: "Later — Video, Audio, Books, Funding", body: "High-effort formats that serve particular clients. A book or a funding narrative is a real project, not a scope line." },
    ],
    faqs: [
      {
        q: "Does Mengo send messages or run a CRM?",
        a: "No. Sequences are produced as content and structure for you to load into whatever the client already sends from. Sending systems own deliverability and consent, and moving those is a much larger decision than adopting a planning layer.",
      },
      {
        q: "Our clients handle their own sales. Is this still relevant?",
        a: "Usually more so. When the client's own team converts, the material they work from is the agency's contribution to a number the client cares about — and it is frequently the weakest part of the engagement.",
      },
    ],
  },

  {
    kind: "capability-group",
    slug: "content",
    title: "Content",
    navLabel: "Content",
    headline: "The volume that sets an agency's real capacity",
    lead:
      "Eight capabilities covering the recurring production an agency is on the hook for every week. This is the group where the difference between a documented system and an undocumented one is measured in whether the work happens at all.",
    summary:
      "Website planning, social, blog, newsletter, SEO and the proof assets — the recurring output that determines how many clients an agency can carry.",
    seoTitle: "Content — the weekly production that sets delivery capacity",
    seoDescription:
      "Website planning, social media, blog, newsletter, SEO, testimonials, case studies and an FAQ bank — the recurring production behind agency client delivery.",
    updated: "2026-09-02",
    tagline: "The weekly production that sets your capacity.",
    character:
      "The only group with a weekly cadence. Everything else can slip a fortnight without a client noticing; this cannot, which is why it is the group that determines how many accounts an agency can actually hold.",
    whyGroup: [
      {
        label: "It is the capacity constraint",
        body: "Ask an agency why it cannot take another client and the answer, once you get past the first one, is nearly always the weekly production commitment.",
      },
      {
        label: "Consistency matters more than brilliance here",
        body: "Clients notice a gap in the schedule faster than they notice an exceptional post. Reliability is the product.",
      },
      {
        label: "The proof assets are always overdue",
        body: "Testimonials and case studies are the highest-value content a client owns and the work that never reaches the top of anyone's week.",
      },
    ],
    adoptionOrder: [
      { label: "First — Website Planner", body: "The client's own site is the one asset they fully control, and it is usually the least maintained. Structure it before adding channels." },
      { label: "Second — Social Media and Blog Content", body: "The recurring commitments. Once these run to a plan rather than to a weekly decision, the week changes shape." },
      { label: "Third — SEO and Newsletter", body: "Compounding channels. Both reward consistency and punish stop-start effort, so start them when you can sustain them." },
      { label: "Later — Testimonials, Case Studies, FAQ Bank", body: "Later by necessity rather than priority: they need results and customers to exist first. Schedule them rather than waiting for a gap." },
    ],
    faqs: [
      {
        q: "Will the output read as generated?",
        a: "Unedited, often yes — and pretending otherwise would not survive your first review. Editing is a required step in every content workflow here for exactly that reason. What changes is that your editors start from a briefed draft in the right format rather than a blank page.",
      },
      {
        q: "Does this publish to a client's accounts?",
        a: "No. Scheduling and publishing stay in the tools you and your client already run, along with the access and the accountability attached to them.",
      },
    ],
  },

  {
    kind: "capability-group",
    slug: "programs",
    title: "Programs",
    navLabel: "Programs",
    headline: "Structures that keep working after the campaign stops",
    lead:
      "Four capabilities covering the recurring mechanisms a client can own — memberships, loyalty, referral — and the documented procedures an agency runs on. Small group, long payback.",
    summary:
      "Membership, loyalty and referral programmes for clients, and the documented procedures an agency delivers by.",
    seoTitle: "Programmes — the mechanisms that run between campaigns",
    seoDescription:
      "Membership plans, loyalty and referral programmes for client businesses, and SOPs for agency delivery — mechanisms that keep working between campaigns.",
    updated: "2026-09-02",
    tagline: "Mechanisms that keep working between campaigns.",
    character:
      "Three of these are things you build for a client and one is something you build for yourself. All four share a property: they are set up once and produce value for years, which is exactly why they are never urgent.",
    whyGroup: [
      {
        label: "Retention is cheaper than acquisition and gets less attention",
        body: "Every client knows this and very few have a mechanism for it, because acquisition has a dashboard and retention has an intention.",
      },
      {
        label: "A referral programme is the highest-margin channel a client has",
        body: "It is also the one most often left as a hope rather than built as a system with an ask, an incentive and a moment.",
      },
      {
        label: "SOPs are what let an agency grow without the founder",
        body: "Everything else in this taxonomy is work you do for clients. This one is the work that determines whether you can do it at scale.",
      },
    ],
    adoptionOrder: [
      { label: "First — SOPs", body: "Before any client-facing programme. An agency without documented delivery cannot run programmes for clients consistently either." },
      { label: "Second — Referral Programme", body: "The fastest client-facing win in this group and the least infrastructure." },
      { label: "Third — Loyalty Programme", body: "Needs a repeat-purchase business to be worth anything. Excellent for ecommerce and hospitality, pointless for a client with one-off high-value sales." },
      { label: "Later — Membership Plans", body: "A membership is a business model change, not a marketing tactic. It belongs in a strategic conversation with the client's leadership." },
    ],
    faqs: [
      {
        q: "Is a membership plan really a marketing capability?",
        a: "It is a commercial decision that marketing then has to carry. Structuring it is useful; deciding to make it is the client's call and should involve people beyond marketing.",
      },
      {
        q: "Why are SOPs in with client-facing programmes?",
        a: "Because they are the same kind of object: a mechanism set up once that produces value repeatedly. The only difference is who it runs for.",
      },
    ],
  },

  {
    kind: "capability-group",
    slug: "organization",
    title: "Organization",
    navLabel: "Organization",
    headline: "Who can do what, and what happened",
    lead:
      "Five capabilities covering access, permissions and the record of activity. Nothing here reaches a client, and all of it becomes load-bearing the moment more than two people work on the same accounts.",
    summary:
      "Users, roles, permissions, audit and email logs, and the organisation record — the access and accountability layer behind agency delivery.",
    seoTitle: "Organization — who can reach which client, and what changed",
    seoDescription:
      "Users, roles and permissions, audit log, email logs and organisation settings — the access and accountability layer for agency teams handling client work.",
    updated: "2026-09-02",
    tagline: "Who can reach what, and what happened.",
    character:
      "Administrative, invisible, and the first thing a client's procurement function asks about. These capabilities do not change with agency stage in any interesting way — they change with headcount and with the sensitivity of client material.",
    whyGroup: [
      {
        label: "Client contracts increasingly require it",
        body: "Larger clients ask who has access to their material and what record exists of activity. 'Everyone, and none' is not a viable answer in a procurement review.",
      },
      {
        label: "It is how an agency separates client work",
        body: "Two clients in the same sector should not be a permissions accident away from each other.",
      },
      {
        label: "Departures are when this matters",
        body: "The value of access control is entirely realised in the week somebody leaves.",
      },
    ],
    adoptionOrder: [
      { label: "First — Organization and Users", body: "As soon as there is a second person. Shared logins are the single most common access failure at small agencies." },
      { label: "Second — Roles & Permissions", body: "Once people have different jobs. Before that it is ceremony." },
      { label: "Third — Audit Log and Email Logs", body: "When you need to answer 'who changed this' or 'was this sent' without asking around." },
    ],
    faqs: [
      {
        q: "Do we need this as a two-person agency?",
        a: "You need Organization and Users — separate accounts rather than a shared login. Roles and permissions are ceremony until people actually have different jobs, and adopting them early tends to mean nobody maintains them.",
      },
      {
        q: "Is the audit log enough for a client compliance review?",
        a: "It is one input, not an answer. What a specific client's contract requires is a question for your own review with them, and it is better raised before an engagement than during an audit.",
      },
    ],
  },

  {
    kind: "capability-group",
    slug: "system",
    title: "System",
    navLabel: "System",
    headline: "The controls around the work",
    lead:
      "Seven capabilities covering the account itself: how work is requested, how processing behaves, and how you get help or ask for something that does not exist yet. Nothing here is client-facing.",
    summary:
      "AI chat and processing, settings, profile, subscription, support and feature requests — the controls around the work rather than the work itself.",
    seoTitle: "System — the controls around the work",
    seoDescription:
      "AI chat, AI processing, settings, profile, subscription, help and support, and feature requests — the account-level controls behind agency use of Mengo.",
    updated: "2026-09-02",
    tagline: "The controls around the work.",
    character:
      "Utility. These do not vary by agency stage and it would be dishonest to write five versions of each pretending otherwise — so they have one page each and no stage pages.",
    whyGroup: [
      {
        label: "The processing behaviour is worth understanding",
        body: "Knowing what happens to client material, and when, is the substance behind every question a client will ask you about how you work.",
      },
      {
        label: "Support is part of the evaluation",
        body: "For an agency putting client delivery through a tool, how quickly a problem gets answered is a delivery risk question rather than a nice-to-have.",
      },
      {
        label: "Feature requests are how an early product gets built",
        body: "Mengo is early. Agencies telling us what is missing is currently the main input to what gets built next.",
      },
    ],
    adoptionOrder: [
      { label: "Set up once — Organization, Profile, Settings", body: "Ten minutes at the start, and then largely forgotten." },
      { label: "Used constantly — AI Chat", body: "The everyday interface. Worth learning properly rather than discovering by accident." },
      { label: "Referenced when needed — AI Processing, Subscription, Support", body: "Read the processing page before a client asks, not after." },
    ],
    faqs: [
      {
        q: "Why do these capabilities not have agency-stage pages?",
        a: "Because a settings screen does not mean something different to a solo agency and a forty-person one. Writing five versions of that would be padding, and this site's whole argument depends on not doing that.",
      },
      {
        q: "What should we read before a client asks how we work?",
        a: "AI Processing, and the Responsible AI page. Between them they cover what happens to client material and what we will and will not do with it.",
      },
    ],
  },
];

export const groupBySlug = new Map(capabilityGroups.map((group) => [group.slug, group]));
