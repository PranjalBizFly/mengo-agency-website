import type { Industry } from "@/lib/types";

/**
 * The second set of client sectors.
 *
 * Split into its own file for the same reason the capability taxonomy is: one
 * file of ten sectors at this depth is unreadable. The shape is identical to
 * the first set and the two are recombined in industries.ts, so nothing
 * downstream knows or cares which file a sector lives in.
 *
 * These four were added because they are the sectors where the *constraint*
 * is most unlike the others: money and education are regulated in ways that
 * change what may be said at all, and construction and home services sell on
 * proof of work rather than on argument.
 */
export const extendedIndustries: Industry[] = [
  {
    kind: "industry",
    slug: "financial-services",
    sector: "considered",
    title: "Financial Services",
    navLabel: "Financial Services",
    headline: "Everything is a claim, and every claim is regulated",
    lead:
      "In most sectors a sentence is marketing. Here it is potentially a financial promotion, and the difference between the two is decided by a regulator rather than by an editor. That single fact reorders the whole delivery process.",
    summary:
      "Advice, lending and insurance clients operate under rules about what may be said and by whom. What that does to delivery, and where the review step stops being optional.",
    seoTitle: "Marketing agencies serving financial services clients",
    seoDescription:
      "Financial clients operate under rules about what may be claimed, and by whom. How agencies keep delivery consistent when compliance review is a required step rather than a courtesy.",
    updated: "2026-09-04",
    character: [
      {
        label: "The buyer is deciding whether to trust you with money",
        body: "Which is a slower and more suspicious decision than any other purchase, and one made largely in private before anybody makes contact.",
      },
      {
        label: "Language is the regulated surface",
        body: "Not the product. The same service described two ways can be compliant in one and a breach in the other, so wording is a control rather than a style choice.",
      },
      {
        label: "Approval sits outside the agency",
        body: "A compliance function, an in-house counsel or a network. They are not on your project plan and they do not work to your deadline.",
      },
      {
        label: "Education outperforms persuasion",
        body: "The material that works is the material that explains something the reader could not easily find out, because a claim they cannot verify is a claim they discount.",
      },
    ],
    pressures: [
      {
        label: "The review cycle is the schedule",
        body: "Compliance turnaround, not production speed, sets the publishing calendar. Agencies that plan around production consistently miss dates they had no way to hit.",
      },
      {
        label: "Rejected copy is expensive twice",
        body: "Once in the rewrite and once in the relationship. A rejection rate that would be tolerable elsewhere reads here as an agency that does not understand the client's world.",
      },
      {
        label: "Nothing can be repurposed casually",
        body: "Copy approved for one product, one audience or one jurisdiction is not approved for another, and treating it as reusable is one of the most common ways this work goes wrong.",
      },
      {
        label: "Performance claims are mostly unavailable",
        body: "Past results, projected returns and comparative language are constrained or forbidden, which removes the arguments most marketing leans on.",
      },
    ],
    expertise: [
      "Knowing which regulator and which regime a given client actually falls under",
      "Reading a compliance rejection and understanding the rule behind it, rather than only the correction",
      "Writing genuinely useful material inside a vocabulary that cannot promise anything",
      "Telling a client that the campaign they have asked for is not one they are permitted to run",
    ],
    support: [
      {
        label: "One approved vocabulary, stored",
        body: "The phrasings that have already cleared review, held per client so a second piece starts from approved language rather than from a blank page.",
      },
      {
        label: "Drafts built for review, not around it",
        body: "Structured so a compliance reader can find the claim, the qualification and the disclosure without reading the piece as prose.",
      },
      {
        label: "A questions bank that stays current",
        body: "The questions prospects actually ask, answered once at the right depth, which is the highest-yield material in this sector.",
      },
      {
        label: "Consistent depth on quiet accounts",
        body: "Including the client whose product cannot be advertised and whose whole programme is therefore educational.",
      },
    ],
    care: [
      "Nothing produced here is compliance-approved. Every piece requires review by whoever holds that responsibility for the client, without exception.",
      "Performance figures, projections and comparative claims must come from the client with a source attached. Never infer one, and never repeat one from a competitor's material.",
      "Approval is specific to a product, an audience and a jurisdiction. Reusing approved copy outside those bounds is a breach, not an efficiency.",
      "Disclosures, risk warnings and regulatory statements are the client's to supply and to verify. Treat any draft as incomplete until they are attached.",
      "Personal financial circumstances must never be used in targeting or examples without documented consent.",
    ],
    capabilities: ["brand-manual", "faq-bank", "newsletter", "case-studies", "landing-page", "seo"],
    related: {
      workflows: ["content-production", "client-review", "marketing-planning"],
      useCases: ["standardize-delivery", "build-a-content-engine"],
    },
    faqs: [
      {
        q: "Can this produce compliant copy?",
        a: "No, and no system can. It produces drafts that are easier to review — structured so claims and qualifications are findable, and built from language that has already cleared review for that client. Approval remains a human decision made by whoever carries the regulatory responsibility.",
      },
      {
        q: "How do we stop the compliance queue setting our whole calendar?",
        a: "By separating the pieces that contain regulated claims from the ones that do not, and planning them on different cycles. Most educational material carries far less review load than product material, and mixing them in one queue makes everything travel at the speed of the slowest item.",
      },
      {
        q: "Is the stored language layer a compliance record?",
        a: "It is not, and should not be treated as one. It is a working aid that reduces rewriting. The client's own approval record is the authoritative one, and if the two ever disagree, theirs is right.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "education",
    sector: "considered",
    title: "Education",
    navLabel: "Education",
    headline: "Two audiences, one decision, and a calendar that will not move",
    lead:
      "Education marketing has a structural asymmetry: the person who will attend and the person who will pay are usually different people who need different arguments, and both have to arrive at the same yes inside a window set by an academic year.",
    summary:
      "Schools, universities and training providers sell to two audiences against a fixed enrolment calendar. What that does to planning, and where the constraints on speaking to minors bite.",
    seoTitle: "Marketing agencies serving education and training clients",
    seoDescription:
      "Education clients sell to two audiences on a fixed enrolment calendar. How agencies plan against an immovable cycle and handle the constraints on marketing to young people.",
    updated: "2026-09-04",
    character: [
      {
        label: "The decision is made by a group",
        body: "A student and a parent, or an employee and a training budget holder. The material has to satisfy an aspiration and a justification at the same time.",
      },
      {
        label: "The calendar is external and immovable",
        body: "Open days, application deadlines and term dates are set by somebody else. Missing a window does not delay a campaign, it removes a cohort.",
      },
      {
        label: "The purchase is high-consideration and infrequent",
        body: "Nobody buys a degree twice. There is no retention loop to fall back on, so acquisition carries the whole load.",
      },
      {
        label: "Outcomes are the proof, and they are slow",
        body: "The evidence a prospect wants — where graduates end up — arrives years after the cohort it would have persuaded.",
      },
    ],
    pressures: [
      {
        label: "Everything compresses into two peaks",
        body: "Most of the year's work lands either side of the application deadlines, which is a capacity problem no amount of even planning solves.",
      },
      {
        label: "One message, two readings",
        body: "Every piece needs a version that speaks to the applicant and one that answers the payer, which doubles production for a single campaign.",
      },
      {
        label: "Institutions approve slowly",
        body: "Academic sign-off, admissions accuracy and often a marketing committee. Approval chains here are longer than in most commercial work.",
      },
      {
        label: "Course detail changes late",
        body: "Modules, fees and entry requirements are revised close to the deadline, and material published before the change has to be found and corrected.",
      },
    ],
    expertise: [
      "Knowing which of the two audiences a given channel actually reaches",
      "Judging when an aspirational claim crosses into a promise about employment or outcomes",
      "Reading an institution's internal politics well enough to get approval before the window closes",
      "Telling a client that their differentiator is one every comparable institution also claims",
    ],
    support: [
      {
        label: "A plan anchored to the cycle",
        body: "Built backwards from the application deadlines rather than as an even monthly spread, so the compression is planned for rather than survived.",
      },
      {
        label: "Paired material from one strategic layer",
        body: "The applicant's version and the payer's version produced together, from the same stored positioning, rather than written twice by two people.",
      },
      {
        label: "A questions bank per programme",
        body: "Entry requirements, fees, format and outcomes answered once at the right depth — the material admissions teams end up sending manually otherwise.",
      },
      {
        label: "Structure that survives a late change",
        body: "Course facts held in one place, so a revised fee or module is corrected once rather than hunted through a term's worth of published material.",
      },
    ],
    care: [
      "Course facts — fees, entry requirements, accreditation, duration — must be verified against the client's own published record before anything goes out. These are contractual, not descriptive.",
      "Never state or imply a guaranteed job, salary or admission outcome. Employment statistics belong to the client and require a stated source and period.",
      "Marketing that reaches under-18s carries specific legal restrictions on data, targeting and messaging in most jurisdictions. Confirm which apply before any campaign is planned.",
      "Accreditation and awarding-body language is controlled by the awarding body. It is quoted, never paraphrased.",
      "Student stories and images require documented consent, and consent for one use is not consent for another.",
    ],
    capabilities: ["marketing-calendar", "landing-page", "email-templates", "events", "social-media", "faq-bank"],
    related: {
      workflows: ["seasonal-campaign", "marketing-planning", "campaign-planning"],
      useCases: ["deliver-campaigns-faster", "launch-a-new-client-campaign"],
    },
    faqs: [
      {
        q: "How do we handle the two-audience problem without doubling the budget?",
        a: "By writing the strategic layer once and deriving both readings from it, rather than briefing two separate pieces. The argument is the same; what changes is which part of it leads. That is a production saving, not a strategic shortcut.",
      },
      {
        q: "What about marketing to under-18s?",
        a: "It is the constraint that has to be settled first, because it governs data, targeting and tone before any creative decision. The rules differ by jurisdiction and by channel, and they are the client's legal responsibility to confirm. Plan the campaign after that answer, not before.",
      },
      {
        q: "Can this help with the peak, or does it just move work around?",
        a: "It moves the structural share of the peak — research, planning scaffolding, first drafts — out of the compressed weeks. Review and approval still land in the window, and those are usually the binding constraint here, so plan for them explicitly.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "construction",
    sector: "built",
    title: "Construction",
    navLabel: "Construction",
    headline: "The work is the argument, and it takes two years to finish",
    lead:
      "Contractors, developers and specialist trades sell on evidence of completed projects. The problem is arithmetic: the projects that would win the next tender are still on site, and the ones that are finished were photographed by whoever happened to have a phone.",
    summary:
      "Contractors and developers win work on proof rather than on argument. What a long project cycle does to marketing, and how to capture evidence while it is still capturable.",
    seoTitle: "Marketing agencies serving construction and development clients",
    seoDescription:
      "Construction clients win work on completed-project evidence that takes years to accumulate. How agencies build a proof pipeline and market against a tender cycle.",
    updated: "2026-09-04",
    character: [
      {
        label: "Proof beats persuasion, decisively",
        body: "A comparable project delivered on time is worth more than any amount of positioning. The marketing job is largely making that proof findable.",
      },
      {
        label: "The cycle is measured in years",
        body: "From first conversation to completion. Anything measured in a quarter is measuring the wrong thing.",
      },
      {
        label: "The buyer is often a professional",
        body: "An architect, a quantity surveyor, a procurement lead. They read a capability statement the way a specialist reads a spec, and they notice what is missing.",
      },
      {
        label: "Referral and framework access do the heavy lifting",
        body: "Much of the pipeline never touches a public channel at all, which changes what marketing is actually for.",
      },
    ],
    pressures: [
      {
        label: "Evidence is captured badly or not at all",
        body: "Sites are busy and nobody's job includes documentation, so the proof for the next tender is lost while it is being created.",
      },
      {
        label: "Tender deadlines are non-negotiable and lumpy",
        body: "A capability statement and supporting material needed in nine days, three times a year, on no predictable schedule.",
      },
      {
        label: "Client confidentiality limits what can be shown",
        body: "Commercially sensitive projects, NDAs and clients who do not want the work publicised remove exactly the examples that would persuade.",
      },
      {
        label: "The website ages faster than the portfolio",
        body: "Completed work accumulates in a folder while the public record shows what the firm was doing four years ago.",
      },
    ],
    expertise: [
      "Reading a tender or a PQQ well enough to know what the evaluator is actually scoring",
      "Judging which projects to lead with for a given opportunity, and which to leave out",
      "Knowing the difference between a technically accurate description and one a client will approve",
      "Telling a firm that its best work cannot be shown, and what to do instead",
    ],
    support: [
      {
        label: "A project record kept as it happens",
        body: "A consistent structure per project — scope, constraint, approach, outcome — captured while people can still remember it rather than reconstructed at tender time.",
      },
      {
        label: "Capability material assembled from that record",
        body: "So a nine-day deadline draws on a maintained set rather than starting with somebody searching their phone for photographs.",
      },
      {
        label: "Anonymised versions where a name cannot be used",
        body: "The same evidence written so it demonstrates capability without identifying the client, which is often the only permitted form.",
      },
      {
        label: "A public record that keeps pace",
        body: "Completed projects reaching the site and the profiles on a cadence, rather than in one exhausting batch every few years.",
      },
    ],
    care: [
      "Project details, values and timelines must be confirmed with the client firm before publication. Contract values in particular are frequently confidential.",
      "Named clients, site photography and drone footage require permission from the client and often from the principal contractor. Permission for one use is not permission for all.",
      "Safety, certification and accreditation claims are matters of record. State only what the firm can evidence, and never paraphrase a certification's scope.",
      "Do not publish anything about a live site that reveals security-relevant detail — access, staffing patterns, storage of plant or materials.",
      "Framework and approved-supplier status has defined wording and defined limits. Quote it as issued.",
    ],
    capabilities: [
      "case-studies",
      "google-business-profile",
      "website-planner",
      "sales-collateral",
      "presentations-and-pitches",
      "testimonials",
    ],
    related: {
      workflows: ["sales-enablement", "content-production", "client-reporting"],
      useCases: ["improve-sales-enablement", "build-a-content-engine"],
    },
    faqs: [
      {
        q: "Most of our projects are confidential. Is there anything to market?",
        a: "Yes, and it is the standard answer in this sector: capability described without identification. Scope, constraint, approach and outcome, with the client unnamed and identifying detail removed. It is weaker than a named reference and considerably stronger than nothing, and it is often the only form permitted.",
      },
      {
        q: "How do we capture site evidence when nobody has time?",
        a: "By making it small and structured rather than thorough and occasional. A fixed short record at three points in a project — start, a defining constraint, completion — collects most of what a case study needs. The failure mode is asking a site team for a narrative six months after they left.",
      },
      {
        q: "Does this help with tenders?",
        a: "With the reusable half. Capability statements, project evidence and standard sections can be maintained rather than rebuilt. The response to the specific question being asked is judgement, it is what the evaluator is scoring, and it stays with your people.",
      },
    ],
  },

  {
    kind: "industry",
    slug: "home-services",
    sector: "built",
    title: "Home Services",
    navLabel: "Home Services",
    headline: "The customer is not browsing. Something has broken.",
    lead:
      "Plumbers, electricians, roofers and installers are found by people with an immediate problem and very little patience. The entire marketing job is to be findable, obviously credible and easy to contact within the ninety seconds that decision takes.",
    summary:
      "Trades and installers are chosen in minutes by customers with an urgent problem. What that compresses, and why the enquiry response matters more than the campaign.",
    seoTitle: "Marketing agencies serving home services and trade clients",
    seoDescription:
      "Home services customers choose in minutes under pressure. How agencies build findability and credibility for trades, and why enquiry response beats campaign spend.",
    updated: "2026-09-04",
    character: [
      {
        label: "Demand is urgent and unplanned",
        body: "Nobody researches an emergency plumber in advance. The search happens with water on the floor, and the shortlist is three results deep.",
      },
      {
        label: "Trust is established in seconds",
        body: "Reviews, a real address, a photograph of an actual van and a person who answers. These outrank any message about quality.",
      },
      {
        label: "The service area is a hard boundary",
        body: "Marketing that reaches beyond it produces enquiries that cannot be served, which costs money and reputation at the same time.",
      },
      {
        label: "Response time is the conversion rate",
        body: "The first business to answer usually wins. Most lost enquiries in this sector are lost to silence rather than to a competitor's argument.",
      },
    ],
    pressures: [
      {
        label: "The client is on a roof",
        body: "The owner is doing the work, so approvals, photographs and content arrive in the evening or not at all. Delivery has to survive that.",
      },
      {
        label: "Seasonality is severe",
        body: "Boilers in November, air conditioning in July, roofing after a storm. Even spending across a year is spending badly.",
      },
      {
        label: "Reviews are the marketing, and they are chaotic",
        body: "One bad review outweighs a month of work, and asking for good ones is a habit most of these businesses have never built.",
      },
      {
        label: "Enquiries arrive everywhere",
        body: "Phone, form, one directory, three platforms and a text message. Nothing joins them up, so nobody knows what is actually working.",
      },
    ],
    expertise: [
      "Knowing which channel produces enquiries in this trade in this area, which is rarely the one the client expects",
      "Judging when demand is about to turn, and getting the client ready before it does rather than during",
      "Handling a review crisis in a way that reads as accountable rather than defensive",
      "Telling a client that the answer is answering the phone, not a larger advertising budget",
    ],
    support: [
      {
        label: "A local profile kept accurate",
        body: "Hours, service area, categories and photographs maintained, because this is the shopfront in this sector and a stale one costs enquiries every week.",
      },
      {
        label: "Landing pages per job and per area",
        body: "Built from one stored strategic layer so the emergency-callout page and the installation page argue differently without being written from nothing.",
      },
      {
        label: "A review habit that runs on its own",
        body: "A consistent ask at the right moment in the job, structured rather than remembered — which is the difference between a review programme and an intention.",
      },
      {
        label: "Follow-up for the enquiry that did not book",
        body: "Sequences ready for the client's own tools, so the quote that went quiet gets a second contact rather than being written off.",
      },
    ],
    care: [
      "Licensing, insurance, certification and registration claims are matters of record. Publish only what the client can evidence, with the registration number where one exists.",
      "Emergency response and arrival-time promises become commitments the customer will hold the business to. Never state one the client has not agreed.",
      "Pricing shown publicly must match what is quoted. In several jurisdictions a displayed price is binding, and 'from' pricing has specific rules.",
      "Customer photographs taken inside a home need explicit permission, and identifying detail — house numbers, vehicles, possessions — removed.",
      "Never solicit or incentivise reviews in a way the platform prohibits. Removal of a review profile is a far larger loss than any campaign.",
    ],
    capabilities: [
      "google-business-profile",
      "testimonials",
      "landing-page",
      "sales-script",
      "faq-bank",
      "whatsapp-nurturing",
    ],
    related: {
      workflows: ["local-business-marketing", "lead-nurturing-flows", "sales-enablement"],
      useCases: ["improve-client-retention", "deliver-faster"],
    },
    faqs: [
      {
        q: "Is content marketing worth anything in this sector?",
        a: "A narrow kind of it is. Pages that answer the question somebody types with a problem in front of them — what a noise means, what a repair costs, what happens next — earn enquiries. General blogging about the trade does not, and selling it here is how agencies lose these clients.",
      },
      {
        q: "The client never sends us photographs. What do we do?",
        a: "Reduce the ask until it survives a working day: two photographs and one sentence, from a phone, at the end of a job. A structure that fits into the work gets used. A monthly content request does not, and treating that as a client failing rather than a process one is a mistake agencies make repeatedly here.",
      },
      {
        q: "How do we prove any of this is working?",
        a: "By counting enquiries and what happened to them, before spending on anything else. Most businesses in this sector cannot currently say how many enquiries they received last month, and a system that answers that is usually worth more than the campaign that was being proposed.",
      },
    ],
  },
];
