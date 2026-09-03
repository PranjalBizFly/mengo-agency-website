import type { Industry } from "@/lib/types";

/**
 * Client sectors an agency sells into.
 *
 * These are written for the agency, not for the end client — the reader is an
 * agency person deciding whether their sector's particular awkwardness is
 * understood. So each page leads with what is genuinely distinctive about
 * marketing in the sector, then names the delivery pressure it creates, and
 * `expertise` exists to say plainly which part of the work stays irreducibly
 * the agency's.
 *
 * `care` carries the constraints that must not be got wrong. In regulated
 * sectors that is the most important field on the page.
 */
export const industries: Industry[] = [
  {
    kind: "industry",
    slug: "saas-software",
    title: "SaaS & Software",
    navLabel: "SaaS / Software",
    headline: "Long cycles, technical buyers, and a product that keeps moving",
    lead:
      "Software marketing has a structural problem that other sectors do not: the thing being sold changes every few weeks, the buying committee has four people with different objections, and the person who understands the product best is the one with least time to explain it.",
    summary:
      "Software clients change quarterly, sell to committees and buy over months. What that does to agency delivery, and where a system helps.",
    seoTitle: "Marketing agencies serving SaaS and software clients",
    seoDescription:
      "Software clients change quarterly and sell to buying committees over long cycles. How agencies keep delivery consistent, and where the agency's own product judgement is irreplaceable.",
    updated: "2026-08-27",
    character: [
      { label: "The product moves faster than the messaging", body: "A release changes what is true about the product, and the marketing catches up weeks later — or does not." },
      { label: "The buyer is a committee", body: "A champion, a budget holder and usually someone in security or procurement. Each holds a different objection and needs different material." },
      { label: "The cycle is long and mostly invisible", body: "Months of evaluation happen without contact, which is what makes nurturing disproportionately valuable here." },
      { label: "Content is the sales process", body: "Buyers self-educate before they speak to anyone, so the material is doing the early selling whether it was designed to or not." },
    ],
    pressures: [
      { label: "Positioning drifts between releases", body: "Without a stored strategic layer, every new feature gets marketed as if it were the whole product." },
      { label: "Technical accuracy is expensive", body: "Every claim needs someone who understands the product to check it, and that person is a bottleneck." },
      { label: "Committee content multiplies", body: "The same message needs three versions for three roles, which triples production for one campaign." },
      { label: "Attribution is genuinely hard", body: "Long, dark cycles mean the honest answer about what worked is often 'we cannot fully know', and clients want a cleaner story." },
    ],
    expertise: [
      "Understanding what the product actually does, well enough to know when a draft is subtly wrong",
      "Knowing which of the client's features are differentiators and which are table stakes",
      "Reading a competitive landscape that changes faster than any published research",
      "Telling a founder that the feature they are proudest of is not what buyers care about",
    ],
    support: [
      { label: "Segment material per role", body: "The champion's case, the budget holder's case and the security reviewer's questions produced from one strategic layer." },
      { label: "Positioning that persists", body: "Stored per client, so a release updates the layer rather than resetting the messaging." },
      { label: "Objection inventory", body: "The list that makes nurturing work in a sector where most of the cycle happens without contact." },
      { label: "Consistent depth across accounts", body: "Including the software client who is quiet for six weeks and then needs a launch." },
    ],
    care: [
      "Product claims must be verified by someone who knows the product. A plausible statement about software is not the same as a true one.",
      "Security, compliance and certification claims are contractual territory. They belong to the client's own team, not to a draft.",
      "Competitor comparisons in software attract legal attention. Treat any comparison as requiring explicit client approval.",
      "Roadmap language is dangerous. Marketing something unreleased creates obligations the client may not want.",
    ],
    related: { capabilities: ["strategy", "content", "lead-nurturing"], workflows: ["strategy-and-planning", "lead-nurturing-flows"] },
    faqs: [
      {
        q: "Can it keep up with a fast release cycle?",
        a: "The strategic layer updates when you update it, which is faster than rewriting a messaging document — but it does not watch the client's changelog. Keeping the layer current is an agency habit, and it is worth putting on the account's recurring agenda rather than assuming it happens.",
      },
      {
        q: "How do we handle technical review without a bottleneck?",
        a: "By separating technical accuracy from editorial review. Most drafts need only editorial review; the subset containing product claims needs the client's technical person. Making that split explicit stops everything queuing behind one reviewer.",
      },
      {
        q: "Does this work for developer-focused products?",
        a: "The structural work does. The voice does not come free — developer audiences detect and punish marketing language faster than any other, so expect heavier editing and budget for it.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "professional-services",
    title: "Professional Services",
    navLabel: "Professional Services",
    headline: "The expertise is the product, and it is inside people's heads",
    lead:
      "Law firms, accountants, consultancies and advisory practices sell judgement. Their marketing problem is that the people whose judgement is being sold are billing by the hour, so extracting anything publishable from them competes directly with revenue.",
    summary:
      "In professional services the expert is the product and their time is the constraint. How agencies get publishable material out of billable people.",
    seoTitle: "Marketing agencies serving professional services firms",
    seoDescription:
      "Professional services clients sell expertise held by billable people. How agencies structure delivery to extract publishable material without consuming partner time.",
    updated: "2026-08-27",
    character: [
      { label: "Credibility beats reach", body: "One well-placed piece read by forty right people outperforms a large audience of the wrong ones." },
      { label: "Referral is the real channel", body: "Marketing supports a referral relationship rather than replacing it, which changes what the material is for." },
      { label: "The expert is the bottleneck", body: "Every genuinely valuable piece needs a partner's input, and their hour has an opportunity cost with a number attached." },
      { label: "Risk aversion is rational", body: "A careless claim in a regulated profession has consequences beyond a bad campaign." },
    ],
    pressures: [
      { label: "Approval cycles are slow", body: "Partner review is genuinely slow, and it should be. Delivery plans that assume fast approval fail here." },
      { label: "Material dates quickly in some practices", body: "Anything touching regulation or tax needs a review rhythm, not a publish-and-forget approach." },
      { label: "Tone must carry seniority", body: "Copy that sounds like a startup undermines the credibility the firm is selling." },
      { label: "Multiple practice areas, one brand", body: "Each area has a different audience and a different objection, under a single identity." },
    ],
    expertise: [
      "Knowing what a partner will and will not put their name to",
      "Translating genuine expertise into something readable without flattening it",
      "Understanding the referral relationships the marketing has to support",
      "Judging where a claim crosses from marketing into professional advice",
    ],
    support: [
      { label: "Interview-shaped briefs", body: "So a partner's twenty minutes produces material rather than notes somebody has to interpret later." },
      { label: "Practice-area separation", body: "Distinct segments and messages under one strategic layer, rather than one blurred voice." },
      { label: "A review-aware plan", body: "Sequencing that assumes slow approval instead of pretending it will be fast." },
      { label: "Objection inventory per practice", body: "What makes a prospective client hesitate before instructing a firm, made explicit." },
    ],
    care: [
      "Regulated professions have advertising rules. They belong to the client's compliance function and must be checked there, not assumed.",
      "Nothing generated should read as professional advice. The line between marketing and advice is the client's exposure.",
      "Client confidentiality is absolute. Anonymised examples still need explicit permission.",
      "Outcome claims — cases won, savings achieved — need evidence the firm holds and is willing to stand behind.",
    ],
    related: { capabilities: ["content", "strategy", "research"], workflows: ["content-production", "client-onboarding"] },
    faqs: [
      {
        q: "How do we get material out of partners who have no time?",
        a: "Change the ask. Twenty minutes of recorded conversation against a structured brief produces more usable material than a request for a written draft, which typically produces nothing. The structure is what makes the twenty minutes sufficient.",
      },
      {
        q: "Is generated content appropriate for a regulated profession?",
        a: "Only with review by someone qualified to give it, which is your client's compliance function rather than your agency. Treat every draft in a regulated practice as unpublishable until that review has happened, and build the timeline around it.",
      },
      {
        q: "What about thought leadership specifically?",
        a: "The thinking has to come from the expert; there is no way around that and no system substitutes for it. What can be structured is the extraction, the shape and the distribution, which is usually where thought leadership programmes actually stall.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "ecommerce-d2c",
    title: "Ecommerce & D2C",
    navLabel: "Ecommerce / D2C",
    headline: "High volume, short cycles, and a calendar that never stops",
    lead:
      "Ecommerce marketing runs at a cadence other sectors do not experience. Promotional calendars, seasonal peaks, product launches and a constant demand for creative volume — all with margins thin enough that inefficiency shows up in the numbers within a month.",
    summary:
      "Ecommerce clients need volume on a relentless calendar. Where structure helps an agency keep up, and where discounting decisions stay commercial.",
    seoTitle: "Marketing agencies serving ecommerce and D2C brands",
    seoDescription:
      "Ecommerce clients need constant creative volume against a promotional calendar. How agencies keep pace without losing consistency, and where commercial judgement stays with the client.",
    updated: "2026-08-27",
    character: [
      { label: "The calendar is the strategy", body: "Seasonal peaks, promotional windows and launches determine most of the year before anyone plans anything." },
      { label: "Volume is genuinely high", body: "Multiple channels, multiple formats, refreshed constantly, because creative fatigue is real and measurable here." },
      { label: "The cycle is short", body: "Consideration can be minutes, which makes the first line of an ad do most of the work." },
      { label: "Retention is where the margin is", body: "Acquisition costs are visible and rising; the second purchase is usually where the business actually is." },
    ],
    pressures: [
      { label: "Creative demand outruns capacity", body: "The number of variants a paid programme wants exceeds what most agency teams can produce and review." },
      { label: "Promotions get decided ad hoc", body: "Which trains customers to wait for a discount and erodes the margin the client is trying to protect." },
      { label: "Product launches arrive late", body: "Marketing is often told about a launch after the date is fixed, compressing everything." },
      { label: "Retention work loses to acquisition", body: "Because acquisition has a dashboard and retention has an intention." },
    ],
    expertise: [
      "Knowing the client's actual margin, which determines whether a promotion is a good idea",
      "Reading creative performance well enough to know what to change, not just what failed",
      "Understanding the brand's position well enough to protect it from short-term discounting",
      "Judging when volume is the answer and when the offer is the problem",
    ],
    support: [
      { label: "Promotional calendars planned in advance", body: "So discounting is a strategy rather than a reaction to a slow week." },
      { label: "Variant production from one brief", body: "Multiple angles on the same offer, generated from one approved message." },
      { label: "Retention sequences that get built", body: "Post-purchase and win-back flows, which are the work most often promised and least often shipped." },
      { label: "Launch sequencing", body: "So a product launch has the groundwork in place before the date rather than after it." },
    ],
    care: [
      "Pricing, discounting and margin decisions are commercial and belong to the client. Marketing executes them; it does not set them.",
      "Product claims — materials, origin, sustainability, health effects — carry regulatory exposure and need client verification.",
      "Advertising standards apply to comparative and superlative claims. 'Best' is a claim, not a flourish.",
      "Consumer data and consent for retention messaging live in the client's own platform and obligations.",
    ],
    related: { capabilities: ["campaigns", "content", "lead-nurturing"], workflows: ["campaign-planning", "content-production"] },
    faqs: [
      {
        q: "Can it produce the creative volume a paid programme needs?",
        a: "It produces written variants and concepts at volume. It does not produce design, photography or video, which for most ecommerce programmes is the larger production constraint — so be honest with yourself about which half of the bottleneck this addresses.",
      },
      {
        q: "How does this handle a promotional calendar?",
        a: "As a planning input rather than an afterthought. The value is deciding the promotional year in advance, which is a commercial conversation with the client that most ecommerce brands have never actually had.",
      },
      {
        q: "What about marketplaces and retail partners?",
        a: "The planning and written work applies. Platform-specific mechanics, listing management and marketplace advertising operations sit outside the scope and stay with whoever runs those accounts.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "healthcare",
    title: "Healthcare",
    navLabel: "Healthcare",
    headline: "Where being careful matters more than being fast",
    lead:
      "Healthcare marketing carries a duty other sectors do not. A misleading claim about software wastes money; a misleading claim about a treatment can harm someone. Every part of an agency's process here has to be built around that difference.",
    summary:
      "Healthcare marketing carries real duty of care. What must never be generated without qualified review, and where structure genuinely helps.",
    seoTitle: "Marketing agencies serving healthcare clients",
    seoDescription:
      "Healthcare marketing carries duty of care and regulatory constraint. What agencies must route through qualified clinical review, and where structured delivery still helps.",
    updated: "2026-08-27",
    character: [
      { label: "Trust is the whole proposition", body: "Patients and referrers choose on confidence. Anything that reads as salesy actively damages the client." },
      { label: "Regulation is jurisdictional and specific", body: "What may be claimed varies by country, by profession and by the treatment involved." },
      { label: "The audience is often anxious", body: "Which changes what good writing looks like: clarity and reassurance, not persuasion technique." },
      { label: "Referral networks matter as much as patients", body: "Two very different audiences under one identity." },
    ],
    pressures: [
      { label: "Every clinical claim needs qualified review", body: "Which is slow, correctly, and has to be planned into the timeline rather than discovered at the end." },
      { label: "Compliance review is a hard gate", body: "Work that fails it is wasted work, so the cost of getting the brief wrong is high." },
      { label: "Tone is easy to get wrong", body: "Standard marketing register reads as inappropriate in a clinical context, and patients notice immediately." },
      { label: "Patient stories are legally sensitive", body: "The most persuasive material is also the most constrained." },
    ],
    expertise: [
      "Knowing what may be claimed in this jurisdiction, for this profession, about this treatment",
      "Judging tone for an anxious reader, which is a skill rather than a style guide",
      "Managing the relationship with clinical reviewers so review is fast and not adversarial",
      "Recognising when a client's request would cross a line they have not thought about",
    ],
    support: [
      { label: "Structure and non-clinical material", body: "Practice information, service explanation, appointment logistics and referrer communication." },
      { label: "Explicit gap flagging", body: "Where a draft needs a clinical fact, it says so rather than producing something plausible." },
      { label: "Review-first sequencing", body: "Plans built around a compliance gate rather than assuming one does not exist." },
      { label: "Consistent structure across locations", body: "For multi-site practices where each location publishes separately." },
    ],
    care: [
      "No clinical claim should ever reach a patient without review by a qualified person. This is not a workflow preference; it is the point.",
      "Healthcare advertising rules vary by jurisdiction and profession. The client's compliance position governs, always.",
      "Patient stories, testimonials and images require documented consent and are restricted outright in some jurisdictions.",
      "Generated text can be confidently wrong about medicine. Treat every clinical statement as unverified until a clinician has verified it.",
      "Do not use marketing persuasion techniques on treatment decisions. Urgency and scarcity framing are inappropriate here.",
    ],
    related: { capabilities: ["content", "research", "marketing-systems"], workflows: ["content-production", "client-onboarding"] },
    faqs: [
      {
        q: "Is it safe to use generated content in healthcare marketing at all?",
        a: "For non-clinical material with proper review, it is a workflow question like any other. For anything clinical, the honest answer is that a system which produces fluent text about medicine is a genuine risk, and the mitigation is a hard review gate staffed by qualified people. If your client cannot resource that, do not run clinical content through any generation step.",
      },
      {
        q: "What about patient testimonials?",
        a: "They need documented consent, and in several jurisdictions they are restricted or prohibited for regulated treatments regardless of consent. This is a question for the client's compliance function before it is a question for a content plan.",
      },
      {
        q: "Can this help multi-location practices?",
        a: "Yes, and it is one of the clearer cases: consistent structure across locations, with location-specific detail, is otherwise a large manual effort that tends to leave the smaller sites under-served.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "real-estate",
    title: "Real Estate",
    navLabel: "Real Estate",
    headline: "A pipeline of listings and a long, emotional decision",
    lead:
      "Property marketing runs on two clocks at once: a fast one, where individual listings need material immediately, and a slow one, where a buyer or seller takes months to decide and remembers the agent who stayed in touch.",
    summary:
      "Property runs a fast listing clock and a slow decision clock at the same time. Where structure serves each, and what must stay accurate.",
    seoTitle: "Marketing agencies serving real estate clients",
    seoDescription:
      "Property marketing runs a fast listing cycle alongside a months-long buyer decision. How agencies structure both, and where factual accuracy is non-negotiable.",
    updated: "2026-08-27",
    character: [
      { label: "Two clocks at once", body: "Listings need material this week; the relationship that produces the next instruction takes months." },
      { label: "The decision is emotional and financial", body: "Which is an unusual combination and changes what persuasive writing means here." },
      { label: "Local knowledge is the differentiator", body: "Anyone can list a property. Knowing the street, the school catchment and the market's mood is the actual service." },
      { label: "Inventory shapes everything", body: "Marketing capacity has to flex with a pipeline the client does not fully control." },
    ],
    pressures: [
      { label: "Listing material is repetitive and urgent", body: "The same shapes, over and over, always needed immediately." },
      { label: "The long relationship gets neglected", body: "Because listings are urgent and nurture is not, so the pipeline of future instructions goes untended." },
      { label: "Local specificity does not scale easily", body: "Generic property copy is instantly recognisable and actively harmful to a local reputation." },
      { label: "Peaks and troughs are severe", body: "Capacity planned for the average is wrong in both directions." },
    ],
    expertise: [
      "Genuine local market knowledge, which is the client's actual product",
      "Reading a market's direction well enough to advise on timing and price positioning",
      "Handling the emotional register of a decision that is somebody's home",
      "Knowing which details about a property matter to which buyer",
    ],
    support: [
      { label: "Repeatable listing structure", body: "A consistent anatomy for listing material, so the urgent work stops being invented each time." },
      { label: "The long nurture", body: "Sequences for buyers and sellers who are months away, which is the work that never gets built otherwise." },
      { label: "Area and market content", body: "The material that demonstrates local knowledge, planned rather than produced when someone remembers." },
      { label: "Launch sequencing for developments", body: "Where a phased release needs a phased marketing plan." },
    ],
    care: [
      "Property particulars are legally consequential. Descriptions, measurements and features must be verified against the actual property.",
      "Property advertising rules apply, including how prices, availability and features may be described.",
      "Fair housing and anti-discrimination rules constrain how a property or an area may be characterised. This is a serious legal exposure.",
      "Market predictions and value claims should be attributed and evidenced, not asserted.",
    ],
    related: { capabilities: ["lead-nurturing", "content", "campaigns"], workflows: ["lead-nurturing-flows", "content-production"] },
    faqs: [
      {
        q: "Can it write listing descriptions?",
        a: "It can produce a structured draft from supplied details. It cannot verify that a property has what the details claim, and property particulars carry legal weight — so verification against the actual property is a required agency or client step, not an optional one.",
      },
      {
        q: "Where does this help most in property?",
        a: "The long nurture, almost always. Listing material is urgent enough that it gets done; the six-month follow-up with a seller who is not ready yet is the work that reliably does not, and it is where the next instruction comes from.",
      },
      {
        q: "How do we keep local content genuinely local?",
        a: "By supplying the local knowledge as an input rather than expecting it to be retrieved. Generated area content without real local input reads as generic to precisely the local audience you are trying to reach.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "local-multi-location",
    title: "Local & Multi-Location",
    navLabel: "Local & Multi-Location",
    headline: "One brand, many places, and a very uneven distribution of attention",
    lead:
      "Multi-location businesses have a predictable pattern: the flagship gets the marketing, the newest location gets a push, and the rest get whatever is left. The locations that quietly underperform are usually the ones nobody had time for.",
    summary:
      "Franchises, chains and multi-site businesses need consistent marketing per location. Where a shared structure helps and where local autonomy has to survive.",
    seoTitle: "Marketing agencies serving multi-location businesses",
    seoDescription:
      "Multi-location and franchise clients need consistent marketing per site without flattening local difference. How agencies structure delivery across many locations.",
    updated: "2026-08-27",
    character: [
      { label: "Attention is unevenly distributed", body: "The flagship and the newest site get the work; the middle of the estate gets very little." },
      { label: "Local difference is real", body: "Two branches of the same business can have genuinely different customers, competitors and problems." },
      { label: "Autonomy varies by model", body: "A franchise network and a company-owned chain have completely different constraints on what head office may mandate." },
      { label: "Volume multiplies fast", body: "A modest content plan times twenty locations is a large production commitment." },
    ],
    pressures: [
      { label: "Per-location work does not scale manually", body: "So it either does not happen or it happens identically, and identical local marketing is not local." },
      { label: "Local managers go around the process", body: "Usually because the central process is too slow to serve them, which is a design problem." },
      { label: "Brand consistency erodes at the edges", body: "The furthest location from head office is where the brand drifts first." },
      { label: "Reporting is fragmented", body: "Each location's performance sits in a different place, so nobody has the whole picture." },
    ],
    expertise: [
      "Knowing how much autonomy this client's model can actually tolerate",
      "Understanding which local differences are real and which are a manager's preference",
      "Managing the politics of head office and local management, which is most of the job",
      "Judging where brand consistency matters and where it is bureaucracy",
    ],
    support: [
      { label: "A consistent structure per location", body: "Every site gets the same planning depth, including the ones that never ask for anything." },
      { label: "Local variants from one plan", body: "Shared strategy with location-specific content, rather than one generic version distributed everywhere." },
      { label: "Faster local turnaround", body: "Which is the actual fix for managers going around the process." },
      { label: "A documented standard", body: "So what a location may and may not do is written down rather than negotiated each time." },
    ],
    care: [
      "Franchise agreements often constrain what may be published locally. Check the agreement before designing the process.",
      "Local claims — opening times, services, staff, offers — must be accurate per site, and a shared template makes stale detail easy to miss.",
      "Location data consistency affects local search. Errors propagate and are slow to correct.",
      "Where locations are independently owned, responsibility for published claims may sit with the franchisee rather than the brand.",
    ],
    related: { capabilities: ["marketing-systems", "content", "campaigns"], workflows: ["scale-client-delivery", "content-production"] },
    faqs: [
      {
        q: "How much can genuinely differ per location?",
        a: "As much as you supply as input. Locations differ on the facts you give them — local competitors, local offers, local staff, local audience. What they share is the strategic layer and the structure, which is what keeps twenty sites recognisably one brand.",
      },
      {
        q: "How do we stop local managers going around us?",
        a: "By being faster than the alternative. Managers bypass a central process when it takes three weeks to get a poster approved. If the structured route is quicker than doing it themselves, the problem largely resolves itself.",
      },
      {
        q: "Does this work for franchises specifically?",
        a: "The structure does, but franchise agreements vary enormously in what head office may mandate versus recommend. That constraint should shape the process design from the start rather than being discovered during rollout.",
      },
    ],
  },
];

export const industryBySlug = new Map(industries.map((i) => [i.slug, i]));
