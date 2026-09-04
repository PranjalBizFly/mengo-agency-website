import type { IndustryCapability } from "@/lib/types";

/**
 * Capability × sector pages for the four sectors in industries-extended.ts.
 *
 * Same rule as the first set: each page answers one question — what is
 * different about doing this capability for a client in this sector? Where the
 * honest answer would be "nothing", the pair is not here.
 *
 * These four sectors share a characteristic that makes the pairs unusually
 * worth writing: in each of them the *constraint* changes the capability
 * rather than merely colouring it. A questions bank for a lender is a
 * regulated document; the same capability for a plumber is a search asset.
 */
export const extendedIndustryCapabilities: IndustryCapability[] = [
  /* ------------------------------------------------- Financial Services */
  {
    kind: "industry-capability",
    industry: "financial-services",
    capability: "brand-manual",
    headline: "A manual that carries the compliant phrasings, not only the fonts",
    lead:
      "In most sectors a brand manual governs how a client looks and sounds. Here it also has to govern what may be said, because the difference between two phrasings is the difference between an approved piece and a breach.",
    difference: [
      {
        label: "Approved language is part of the identity",
        body: "The wording that has cleared review is as much a brand asset as the logo, and considerably more expensive to recreate. A manual that omits it is only half a manual.",
      },
      {
        label: "It has two readers, not one",
        body: "A designer and a compliance reviewer. The second needs to find the rule behind a phrasing, which means the manual has to record why a form of words was chosen, not just that it was.",
      },
      {
        label: "Prohibitions carry more weight than preferences",
        body: "The section that matters most is the one listing what must never be claimed, implied or compared. In other sectors that section is an afterthought.",
      },
    ],
    care: [
      "A record of approved phrasings is a working aid, never a compliance record. The client's own approval log is authoritative and wins any disagreement.",
      "Approval is scoped to a product, an audience and a jurisdiction. The manual must record that scope with the phrasing, or it will be reused where it does not apply.",
      "Risk warnings and disclosures are supplied and verified by the client. Never reproduce one from memory or from a competitor.",
    ],
    expertise: [
      "Knowing which regulator's regime a given client falls under, and what that permits",
      "Reading a compliance rejection for the rule behind it rather than only the correction",
      "Judging when a phrasing has drifted far enough from the approved form to need re-review",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "financial-services",
    capability: "faq-bank",
    headline: "The highest-yield material in a sector that cannot make promises",
    lead:
      "When performance claims and comparisons are largely unavailable, what is left is explaining things clearly. A well-built questions bank is the single most productive asset a financial client can have, and it is usually the one nobody has maintained.",
    difference: [
      {
        label: "Explanation replaces persuasion",
        body: "The reader is deciding whether to trust the firm with money. The material that earns that is the material that tells them something they could not easily work out, without selling.",
      },
      {
        label: "Answers age with the rules",
        body: "Rates, thresholds, allowances and regulatory detail change on a schedule set outside the client. An unmaintained answer is worse than no answer, because it will be relied on.",
      },
      {
        label: "Each answer is a regulated statement",
        body: "A question about eligibility or tax treatment is not customer service copy. It goes through the same review as a product page, and it should be drafted expecting that.",
      },
    ],
    care: [
      "Nothing here constitutes advice, and answers must be written so they cannot be read as advice about an individual's circumstances.",
      "Every figure, threshold and rate needs a source and a date. Publish the date visibly so a reader can tell whether the answer is current.",
      "Tax, eligibility and regulatory answers must be reviewed by the client's own compliance function before publication, every time.",
    ],
    expertise: [
      "Knowing which questions prospects actually ask, as opposed to the ones the client wishes they asked",
      "Writing genuinely useful explanation inside a vocabulary that cannot promise anything",
      "Spotting the answer that has quietly crossed from information into advice",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "financial-services",
    capability: "newsletter",
    headline: "The channel that survives a long, private consideration period",
    lead:
      "Financial decisions are made slowly and mostly without contact. A newsletter is one of the few instruments that stays present through that period without asking the reader for anything, which is why it outperforms almost everything else here.",
    difference: [
      {
        label: "The job is presence, not conversion",
        body: "The reader is not going to act this month. Measuring a financial newsletter on immediate response leads clients to cancel the thing that was working.",
      },
      {
        label: "Every issue is a financial promotion",
        body: "Which means the whole send goes through review, including the parts that feel editorial. Planning around production speed rather than review speed is the standard mistake.",
      },
      {
        label: "Timeliness collides with approval",
        body: "The commentary worth sending is tied to something that just happened, and the review cycle is not built for that. The answer is a pre-approved structure, not a faster reviewer.",
      },
    ],
    care: [
      "The whole issue requires compliance review, not only the parts that mention a product.",
      "Market commentary must not become a recommendation, an implied forecast, or a comparison the client is not permitted to make.",
      "Consent and suppression are the client's legal responsibility. Nothing here sends anything; the list and its lawfulness stay with them.",
    ],
    expertise: [
      "Judging what is genuinely worth a reader's attention in a month with no news",
      "Writing commentary that informs without tipping into a recommendation",
      "Holding a client's nerve when a channel that works slowly is measured monthly",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "financial-services",
    capability: "case-studies",
    headline: "Evidence, when the client cannot be named and the numbers cannot be shown",
    lead:
      "The most persuasive thing a financial firm has is a client it helped. It is also the thing it is least able to describe: the name is confidential, the circumstances are personal and the outcome is a performance claim.",
    difference: [
      {
        label: "Almost everything identifying has to go",
        body: "Name, sector, amounts, sometimes location. What remains is the shape of the problem and the reasoning applied to it — which, written properly, is the part that actually demonstrates competence.",
      },
      {
        label: "Outcomes are regulated claims",
        body: "A result presented without the qualifications a regulator requires is a breach, however true it is. This is why so many financial case studies read as content-free: the qualifications were removed instead of the claim.",
      },
      {
        label: "Consent is specific and revocable",
        body: "A client who agreed to a written study did not agree to a social post, a pitch deck and a conference slide. Each use needs its own permission.",
      },
    ],
    care: [
      "Written, documented consent is required before any client circumstance is published, however anonymised. Anonymisation is not a substitute for permission.",
      "Any figure, return or saving must carry the qualifications the client's compliance function requires, and must not be presented as indicative of future results.",
      "Check that the combination of details cannot identify the client. Sector plus region plus amount frequently can.",
    ],
    expertise: [
      "Judging when anonymisation has genuinely removed identifiability rather than only the name",
      "Knowing which part of the reasoning is the demonstration of skill, once the numbers are gone",
      "Managing the consent conversation without putting the client relationship at risk",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "financial-services",
    capability: "landing-page",
    headline: "One page, reviewed once, that has to answer a suspicious reader",
    lead:
      "A financial landing page carries an unusual load: it has to establish that the firm is real and regulated, explain a product that is genuinely complicated, and do it in language somebody has approved — usually weeks before the traffic arrives.",
    difference: [
      {
        label: "Credibility signals are structural, not decorative",
        body: "Registration numbers, regulated status, physical address and named people are load-bearing. A page without them reads as a scam to precisely the audience being targeted.",
      },
      {
        label: "The disclosure is part of the design",
        body: "Risk warnings have required prominence. Treating them as small print at the bottom is both a compliance failure and, usually, a design that had to be redone.",
      },
      {
        label: "Iteration is expensive",
        body: "Every variant is a new review. The cheap experimentation that makes landing pages work elsewhere does not apply, so the first version has to be argued out rather than tested into shape.",
      },
    ],
    care: [
      "Regulated status, registration numbers and permissions must be verbatim from the client's own record.",
      "Risk warnings and disclosures require the prominence the relevant regime specifies. That is a rule about layout, not only about presence.",
      "Every variant needs its own approval. Testing two headlines is testing two regulated communications.",
    ],
    expertise: [
      "Knowing which credibility signals this particular audience checks for",
      "Explaining a complicated product without simplifying it into an inaccuracy",
      "Designing around a disclosure requirement rather than bolting it on afterwards",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "financial-services",
    capability: "seo",
    headline: "Ranking in a category where the search engine is openly suspicious",
    lead:
      "Financial queries sit in the group search engines treat most cautiously, because a bad answer causes real harm. The practical effect is that the usual levers work weakly and the unusual ones — demonstrable expertise, institutional credibility, accuracy — work strongly.",
    difference: [
      {
        label: "Authorship and accountability are ranking-relevant",
        body: "Who wrote it, what they are qualified to say, and whether the firm is a real regulated entity carry unusual weight here relative to other categories.",
      },
      {
        label: "The competition is institutional",
        body: "Banks, regulators and national publishers hold the informational queries. A firm competes on specificity — a jurisdiction, a niche, a circumstance — rather than on breadth.",
      },
      {
        label: "Content decays on a regulatory clock",
        body: "Rates, allowances and rules change annually or faster. A financial page that is not maintained is not merely stale, it is wrong, and being wrong in this category is costly.",
      },
    ],
    care: [
      "Never publish a figure or threshold without a source and a visible date, and schedule the review before it becomes wrong.",
      "Author identity and qualifications must be accurate. Inventing a credentialled author in this sector is both a ranking risk and a serious ethical one.",
      "Every informational page still requires compliance review. Search intent does not exempt a statement from being a financial promotion.",
    ],
    expertise: [
      "Finding the specific query where a firm can legitimately outrank an institution",
      "Judging when a page has aged into inaccuracy rather than merely into staleness",
      "Balancing what a search needs against what a reviewer will permit",
    ],
    updated: "2026-09-04",
  },

  /* ------------------------------------------------------------ Education */
  {
    kind: "industry-capability",
    industry: "education",
    capability: "marketing-calendar",
    headline: "A plan built backwards from a deadline nobody controls",
    lead:
      "Most marketing calendars distribute effort evenly and adjust as they go. An education calendar cannot: the application deadlines are fixed by somebody else, and everything is scheduled backwards from them or it is scheduled wrongly.",
    difference: [
      {
        label: "The anchor points are external",
        body: "Open days, application windows, clearing, term starts. The plan is built around a cycle the client does not set and cannot move.",
      },
      {
        label: "Effort is deliberately uneven",
        body: "Two peaks and a long trough is the correct shape here, not a failure of planning. A smooth calendar in this sector is one that will miss its cohort.",
      },
      {
        label: "Approval time has to be in the plan",
        body: "Academic sign-off and admissions accuracy checks are slow and non-optional. A plan that schedules only production will be late every cycle.",
      },
    ],
    care: [
      "Deadline dates must be verified against the client's own published admissions record, not carried over from last year.",
      "Course facts referenced in planned material — fees, entry requirements, duration — change late. Build a checkpoint before the peak, not after.",
      "Where material will reach under-18s, the applicable restrictions have to be settled before the plan is built, because they govern channel and targeting choices.",
    ],
    expertise: [
      "Knowing how far ahead of a deadline each audience actually starts looking",
      "Reading an institution's internal approval chain and planning around its real speed",
      "Deciding what is worth doing in the trough, which is where next year's peak is won",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "education",
    capability: "landing-page",
    headline: "One page that has to convince an applicant and reassure a payer",
    lead:
      "A course page is read by somebody imagining their future and by somebody deciding whether to fund it. Those are different arguments, and pages that pick one of them lose the decision at the other end of the kitchen table.",
    difference: [
      {
        label: "Two readers, one page",
        body: "Aspiration leads and justification follows — outcomes, cost, format, support. Both have to be present without the page becoming a prospectus.",
      },
      {
        label: "The facts are contractual",
        body: "Fees, entry requirements, duration and accreditation are commitments, not descriptions. Getting one wrong is a different order of problem from a weak headline.",
      },
      {
        label: "Outcome language is the danger zone",
        body: "Employment and progression claims are exactly what both readers want and exactly what is most constrained. Vague aspiration is safe and unpersuasive; specific claims need evidence.",
      },
    ],
    care: [
      "Every course fact must be verified against the client's published record before the page goes live, and re-checked when the record changes.",
      "Never state or imply a guaranteed outcome. Employment statistics require the client's own source, period and cohort definition.",
      "Accreditation and awarding-body wording is quoted as issued, never paraphrased.",
    ],
    expertise: [
      "Judging which of the two readers leads for this particular course",
      "Knowing when an aspirational sentence has become a promise about employment",
      "Distinguishing a real differentiator from one every comparable institution also claims",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "education",
    capability: "email-templates",
    headline: "The applicant journey is mostly email, and mostly unbuilt",
    lead:
      "Between an enquiry and an enrolment there are months, several decisions and usually two people. Almost all of that period is carried by email, and in most institutions the sequence was assembled ad hoc by an admissions team with no time to design it.",
    difference: [
      {
        label: "The sequence follows an application, not a funnel",
        body: "Enquiry, open day, application, offer, acceptance, arrival. Each stage has a different anxiety, and generic nurture language fits none of them.",
      },
      {
        label: "The payer needs their own thread",
        body: "Fee information, payment arrangements and practical reassurance are a different message to a different person, often at a different address.",
      },
      {
        label: "Silence has a deadline attached",
        body: "An unanswered applicant is not a slow lead, they are one who will miss a window. Timing here is set by the cycle, not by best practice.",
      },
    ],
    care: [
      "Admissions statements in email are relied on. Entry requirements, deadlines and fee information must match the published record exactly.",
      "Where a recipient may be under 18, consent and data rules differ. Confirm which regime applies before any sequence is built.",
      "Nothing here sends anything. The templates are handed to the institution's own system, and the list and its lawful basis stay with them.",
    ],
    expertise: [
      "Knowing what an applicant is actually worried about at each stage, which is rarely what the institution assumes",
      "Judging when a nudge becomes pressure, which damages an institution faster than it converts",
      "Coordinating with an admissions team whose replies are the real sequence",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "education",
    capability: "events",
    headline: "The open day is the campaign, and everything else supports it",
    lead:
      "In most sectors an event is one marketing activity among many. In education the campus visit is the decision point — attendance correlates with enrolment more strongly than any other measurable thing — so the marketing calendar is really an event calendar.",
    difference: [
      {
        label: "The event is the conversion, not the awareness",
        body: "Everything before it exists to fill it and everything after exists to convert the people who came. Treating it as a brand activity misreads its function.",
      },
      {
        label: "Two audiences attend together",
        body: "The applicant and the payer arrive as a pair, often with different questions and different levels of enthusiasm. The material on the day has to serve both.",
      },
      {
        label: "The follow-up window is days, not weeks",
        body: "The impression fades quickly and competing institutions are running events the following weekend. A follow-up that arrives a fortnight later has missed.",
      },
    ],
    care: [
      "Accessibility, travel and safeguarding information is not marketing copy — it must come from the institution and be published exactly as supplied.",
      "Photography at events involving young people requires consent, and consent for the day is not consent for a campaign.",
      "Capacity, timings and what is actually available on the day must be confirmed with the institution. Promising a department tour that will not happen is worse than not promising one.",
    ],
    expertise: [
      "Knowing which parts of a visit actually change minds, and building the day around them",
      "Reading whether an enquiry is the applicant or the parent, and responding accordingly",
      "Getting an academic department to turn up and be interesting, which is a relationship task",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "education",
    capability: "social-media",
    headline: "The channel the applicant uses and the payer never sees",
    lead:
      "Social is where the student audience forms its impression and where the institution has least control over it. It is also the one channel in this sector with a specific legal weight, because a meaningful share of the audience is under 18.",
    difference: [
      {
        label: "The audience is the applicant, alone",
        body: "The payer is not here. This is the only place in the mix where the aspiration argument runs without the justification argument beside it.",
      },
      {
        label: "Current students are more credible than the institution",
        body: "Which makes the useful work coordination and permission rather than production — and makes the institution's own account the least persuasive voice on it.",
      },
      {
        label: "Minor-audience rules apply here first",
        body: "Targeting, data collection and messaging restrictions bite hardest on the channel with the youngest audience. This constrains the plan before creative is considered.",
      },
    ],
    care: [
      "Where the audience includes under-18s, jurisdiction-specific rules govern targeting, data and messaging. Confirm them before planning, not after.",
      "Student contributors need documented consent, and students can withdraw it. Build for removal.",
      "Nothing here publishes to any account. Posting is done by the institution, in its own accounts, by a named person.",
    ],
    expertise: [
      "Knowing which platform this cohort is actually on, which changes faster than any strategy document",
      "Judging when an institutional voice should get out of the way of a student one",
      "Handling a safeguarding-sensitive comment thread without either over-reacting or ignoring it",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "education",
    capability: "faq-bank",
    headline: "The questions admissions answers by hand, forty times a week",
    lead:
      "Every institution has a small set of questions that consume an enormous share of the admissions team's time: entry requirements, fees, accommodation, what the qualification actually leads to. Answering them once, properly, is the highest-leverage content work in this sector.",
    difference: [
      {
        label: "The answers are already being given, badly",
        body: "By email, individually, with wording that varies by who replied. The work is standardising something that exists rather than creating something that does not.",
      },
      {
        label: "Two people ask different questions",
        body: "The applicant asks what it will be like. The payer asks what it costs and what it leads to. A single undifferentiated list serves neither well.",
      },
      {
        label: "Accuracy is contractual here",
        body: "An answer about entry requirements or fees is relied on by somebody making a decision with a deadline. This is not the place for approximate copy.",
      },
    ],
    care: [
      "Every answer touching fees, entry requirements, accreditation or funding must be verified against the institution's published record and re-checked each cycle.",
      "Never imply a guaranteed admission or employment outcome, however the question is phrased.",
      "Funding, visa and eligibility answers vary by applicant circumstance. Say so explicitly rather than giving one answer that will be wrong for some readers.",
    ],
    expertise: [
      "Getting the real list out of an admissions team, which is not the list on the current website",
      "Judging the right depth — enough to answer, not so much that it reads as a deterrent",
      "Knowing which questions signal an applicant who will not be eligible, and answering them kindly",
    ],
    updated: "2026-09-04",
  },

  /* --------------------------------------------------------- Construction */
  {
    kind: "industry-capability",
    industry: "construction",
    capability: "case-studies",
    headline: "The tender evidence, captured while the project still exists",
    lead:
      "A construction case study is not a marketing asset that happens to describe a project. It is the evidence a future tender will be scored on, and the moment to gather it is while the people who did the work can still remember why.",
    difference: [
      {
        label: "The evaluator is a professional reader",
        body: "An architect or a procurement lead reads for scope, constraint, method and outcome. Narrative flourish is noise; the missing technical detail is what they notice.",
      },
      {
        label: "Most of them cannot name the client",
        body: "Confidentiality is the norm rather than the exception, so the anonymised form is the primary form and has to work on its own.",
      },
      {
        label: "The capture window closes",
        body: "Six months after handover the site team has moved on and the detail is gone. A study written from photographs alone is a study without the constraint that made the project difficult.",
      },
    ],
    care: [
      "Project values, timelines and client names must be confirmed with the client firm. Contract values are frequently confidential even when the project is public.",
      "Site photography and drone footage need permission from the client and often from the principal contractor.",
      "Check that scope plus location plus period does not identify a client who asked not to be named.",
    ],
    expertise: [
      "Knowing which technical detail an evaluator is actually scoring",
      "Getting a real answer out of a site team about what made the job hard",
      "Judging when an anonymised study still identifies the client",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "construction",
    capability: "google-business-profile",
    headline: "The verification step for a firm somebody is about to check",
    lead:
      "Nobody selects a contractor from a local listing. They do check one — after the referral, before the call — and what they find has to confirm that this is a real, established firm rather than raise a question the referral did not.",
    difference: [
      {
        label: "It is a confirmation channel, not an acquisition one",
        body: "Traffic here is small and late in the process. Judging it by enquiry volume misreads what it does.",
      },
      {
        label: "The category is genuinely awkward",
        body: "Firms span trades, sectors and project types that the available categories were not designed for, and the wrong choice puts the firm in front of the wrong enquiries.",
      },
      {
        label: "Reviews are sparse and consequential",
        body: "A commercial contractor may complete four projects a year. With so few reviews, each one carries weight far beyond what a high-volume business would experience.",
      },
    ],
    care: [
      "Service areas must reflect where the firm actually holds the licences, insurance and approvals to work.",
      "Accreditation and approved-supplier badges have defined wording and defined scope. Display only what is current and evidenced.",
      "Project photography posted here is still published photography and needs the same permissions as anything else.",
    ],
    expertise: [
      "Choosing categories for a firm that does not fit the available ones",
      "Deciding which projects are safe and useful to show publicly",
      "Handling a rare negative review in a sector where there are few to dilute it",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "construction",
    capability: "website-planner",
    headline: "A structure organised for an evaluator, not for a browser",
    lead:
      "Most construction websites are organised around what the firm does. The people who matter arrive looking for whether it has done this before, at this scale, in this sector — and leave when the site cannot answer that in two clicks.",
    difference: [
      {
        label: "Sector and scale are the primary navigation",
        body: "A procurement lead is looking for comparable work. Organising by service instead of by project type makes the site's most valuable content unfindable.",
      },
      {
        label: "Credentials need a permanent home",
        body: "Insurance, accreditations, framework status and health-and-safety record are checked deliberately. They belong on a maintained page, not scattered through the footer.",
      },
      {
        label: "The site ages in visible steps",
        body: "Because projects complete in batches. A structure that makes adding a project cheap is what keeps the public record roughly current.",
      },
    ],
    care: [
      "Certification and accreditation pages must show current status with expiry awareness. A lapsed certification displayed as current is a serious misrepresentation.",
      "Do not publish live-site detail that reveals access, staffing patterns or plant storage.",
      "Every project shown needs its permissions confirmed, including any that were added before the current agency was involved.",
    ],
    expertise: [
      "Knowing how a professional buyer actually navigates a contractor's site",
      "Judging which sectors the firm should claim and which it should not",
      "Structuring for a portfolio that arrives in unpredictable batches",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "construction",
    capability: "sales-collateral",
    headline: "The capability statement, maintained rather than rebuilt in nine days",
    lead:
      "Tender deadlines in this sector are short, unpredictable and non-negotiable. The firms that respond well are not faster writers; they are the ones whose reusable material was already current when the opportunity appeared.",
    difference: [
      {
        label: "The reusable half is most of it",
        body: "Company detail, accreditations, method statements, project evidence and team credentials recur in almost every submission. Rebuilding them each time is the avoidable cost.",
      },
      {
        label: "The deadline arrives without warning",
        body: "There is no campaign schedule to plan against. Readiness is the strategy, because preparation cannot happen after the opportunity appears.",
      },
      {
        label: "Selection of evidence is the skill",
        body: "Which three projects to lead with for this opportunity is judgement, and it is the part that distinguishes a submission that scores from one that merely complies.",
      },
    ],
    care: [
      "Accreditations, insurance levels and certifications must be current at the point of submission. A lapsed credential in a tender is a disqualification.",
      "Named projects need client permission for use in a submission specifically, which is not the same as permission to publish.",
      "Never overstate capability or capacity to win a tender. In this sector that becomes a contractual problem within months.",
    ],
    expertise: [
      "Reading a tender or PQQ for what is actually being scored",
      "Choosing which projects to lead with for a given opportunity",
      "Knowing what the firm can genuinely resource before it is committed to",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "construction",
    capability: "presentations-and-pitches",
    headline: "A room of specialists who will ask about the difficult project",
    lead:
      "A construction pitch is rarely won on the deck. It is won on how the team handles the question about the project that overran — and the deck's job is to get to that conversation with credibility intact rather than to prevent it.",
    difference: [
      {
        label: "The audience is technical and sceptical",
        body: "Architects, engineers, quantity surveyors. They are reading for method and risk, and they will notice an omission faster than they will notice a claim.",
      },
      {
        label: "Risk is the real subject",
        body: "Every question is a version of 'what happens when this goes wrong'. A pitch that only presents success has not addressed what the room came to find out.",
      },
      {
        label: "The team in the room matters more than the firm",
        body: "Buyers want to know who will actually run the project. Presenting the firm's capability without the specific people is a common and costly miss.",
      },
    ],
    care: [
      "Named team members must be the people who would actually be assigned. Presenting availability the firm cannot deliver is a serious misrepresentation.",
      "Project references used in a pitch need permission for that use.",
      "Programme and cost figures shown must come from the firm's own estimating, not from marketing.",
    ],
    expertise: [
      "Anticipating the question the room has actually come to ask",
      "Talking about a project that went wrong in a way that builds credibility",
      "Knowing which team members should speak and which should not",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "construction",
    capability: "testimonials",
    headline: "A reference from a client who is contractually careful about praise",
    lead:
      "Construction clients are often institutions, and institutions do not give testimonials casually. Getting one requires asking at the right moment, of the right person, in a form their own approvals process can survive.",
    difference: [
      {
        label: "The right moment is narrow",
        body: "Shortly after handover and before the defects period produces its inevitable friction. Ask early and it is premature; ask late and the goodwill has been spent.",
      },
      {
        label: "The signatory is not the person you worked with",
        body: "The site contact may be delighted and unable to authorise anything. Knowing whose name can appear is half the task.",
      },
      {
        label: "Institutional clients need approved wording",
        body: "Public bodies and large developers have their own communications approval. A quote that has not been through it will be withdrawn later, usually at the worst moment.",
      },
    ],
    care: [
      "Written permission is required for both the quote and the attribution, and permission for a website is not permission for a tender submission.",
      "Never edit a quote in a way that changes its meaning or strength. Trim only with agreement.",
      "Where a client cannot be named, an anonymised attribution must still be accurate about sector and role.",
    ],
    expertise: [
      "Knowing when in a project the ask will land well",
      "Identifying who inside a client organisation can actually authorise a quote",
      "Handling a refusal without damaging a relationship you will need for the next framework",
    ],
    updated: "2026-09-04",
  },

  /* -------------------------------------------------------- Home Services */
  {
    kind: "industry-capability",
    industry: "home-services",
    capability: "google-business-profile",
    headline: "The shopfront, for a customer who will not scroll past the third result",
    lead:
      "For a trade business this is not one channel among several. It is where most enquiries begin, it is checked by somebody with an urgent problem, and it is the asset most likely to be several years out of date.",
    difference: [
      {
        label: "It is the primary acquisition channel",
        body: "Not a supporting one. In most trades it produces more enquiries than the website, and it deserves the attention the website usually gets instead.",
      },
      {
        label: "The service area is a business constraint",
        body: "Set it too wide and the business pays for enquiries it cannot serve; too narrow and it is invisible in half its territory. This is an operational decision, not a settings choice.",
      },
      {
        label: "Reviews are the whole credibility argument",
        body: "Volume, recency and how the business replies. In this sector a review profile does more persuading than any piece of marketing.",
      },
    ],
    care: [
      "Hours, service area and contact details must match reality. A customer who calls outside stated hours and gets no answer leaves a review about it.",
      "Licensing and certification claims must be evidenced, with registration numbers where they exist.",
      "Never solicit or incentivise reviews in a way the platform prohibits. Losing the profile is a larger loss than any campaign.",
    ],
    expertise: [
      "Setting a service area against what the business can genuinely reach and still make money on",
      "Choosing categories in a trade that spans several",
      "Handling an unfair review in a way that reads as accountable rather than defensive",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "home-services",
    capability: "testimonials",
    headline: "A review habit that fits inside a working day on a roof",
    lead:
      "Every trade business knows reviews matter and almost none has a reliable way of getting them. The reason is never motivation — it is that the ask has to happen at the end of a job, by somebody carrying tools, and no process that ignores that will survive a week.",
    difference: [
      {
        label: "The moment is the end of the job, on site",
        body: "Satisfaction peaks then and decays fast. A follow-up two weeks later converts a fraction of what the doorstep ask does.",
      },
      {
        label: "The person asking is the person who did the work",
        body: "Which makes it a habit problem rather than a marketing one. The design constraint is what an engineer will actually do while packing up.",
      },
      {
        label: "Recency matters as much as volume",
        body: "A profile whose most recent review is eleven months old reads as a business in decline, regardless of how many it has.",
      },
    ],
    care: [
      "Never incentivise a review in a way the platform prohibits, and never write one on a customer's behalf.",
      "Photographs taken inside a customer's home need explicit permission, with identifying detail removed.",
      "Do not filter who is asked based on expected sentiment. Most platforms prohibit it and customers recognise it.",
    ],
    expertise: [
      "Designing an ask that survives contact with a working day",
      "Getting an owner to make it a standing expectation of their team",
      "Judging when a job has gone well enough that the ask is welcome",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "home-services",
    capability: "landing-page",
    headline: "Ninety seconds, one problem, and a phone number",
    lead:
      "A trade landing page is read by somebody standing in the problem. It has thirty seconds to establish that this business is real, covers their area, handles their specific issue, and can be contacted right now. Everything else is decoration.",
    difference: [
      {
        label: "The job and the area are the page",
        body: "A page about the trade in general converts poorly; a page about this job in this area converts. That is why these come in sets rather than singly.",
      },
      {
        label: "Urgency changes the hierarchy",
        body: "Contact method first, credibility second, detail third. The considered structure that works for a considered purchase is wrong here.",
      },
      {
        label: "Credibility is concrete or absent",
        body: "A registration number, a real address, photographs of actual work and actual vans. Stock imagery of a smiling engineer is read, correctly, as a sign the business may not exist.",
      },
    ],
    care: [
      "Displayed pricing must match what is quoted. In several jurisdictions a shown price is binding and 'from' pricing has specific rules.",
      "Response and arrival-time promises become commitments. Publish only what the business has agreed it can meet.",
      "Licensing, insurance and certification claims must be current and evidenced.",
    ],
    expertise: [
      "Knowing which jobs justify their own page and which do not",
      "Judging what this particular customer checks before calling",
      "Persuading a client that an unanswered phone is the real conversion problem",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "home-services",
    capability: "sales-script",
    headline: "The call that decides it, taken from a van",
    lead:
      "In this sector the enquiry conversation is the sale. It is usually taken by whoever is nearest a phone, in noise, between jobs — and the difference between a booked job and a lost one is often four questions asked in the right order.",
    difference: [
      {
        label: "The call is short and under pressure",
        body: "Both sides are busy and the customer is stressed. A script has to work in ninety seconds or it will be abandoned on the second call.",
      },
      {
        label: "Qualifying is about the job, not the budget",
        body: "What is it, where is it, how urgent, is it in area, is it work we do. Getting this wrong costs a wasted visit, which in this sector is a whole afternoon.",
      },
      {
        label: "The person answering is not a salesperson",
        body: "They are an engineer or a partner. The script has to be memorable enough to be used without being read, which rules out most of what scripts usually contain.",
      },
    ],
    care: [
      "Never script a price, an arrival time or a diagnosis that the business has not agreed can be committed to on a call.",
      "Where a call is recorded, notification and consent requirements apply and are the client's responsibility.",
      "Do not script pressure tactics. In a sector that runs on local reputation they cost more than they win.",
    ],
    expertise: [
      "Knowing which four questions actually determine whether a job is worth attending",
      "Writing something an engineer will genuinely use rather than a call-centre script",
      "Judging when an enquiry should be declined, which protects the schedule and the reviews",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "home-services",
    capability: "faq-bank",
    headline: "The questions people type with water on the floor",
    lead:
      "General content marketing does badly in this sector. What works is a narrow, specific set of answers to the things somebody searches at the moment a problem appears — what a noise means, what it costs, what happens next.",
    difference: [
      {
        label: "The question is a symptom, not a topic",
        body: "People search what they can see or hear, not the name of the fault. Answers organised by trade terminology miss the search entirely.",
      },
      {
        label: "Cost is the question nobody wants to answer",
        body: "It is the most-asked and most-avoided. A range with the variables explained outperforms both silence and a single misleading number.",
      },
      {
        label: "The answer should end in an action",
        body: "Turn this off, do not touch that, call somebody. A useful answer in this context is instructions, not explanation.",
      },
    ],
    care: [
      "Never publish guidance that could lead someone to attempt unsafe work. Gas, electrical and structural questions must direct to a qualified person.",
      "Price ranges must be agreed with the client and framed as indicative, with the variables stated.",
      "Regulatory and safety statements — certification, notification requirements, legal obligations — come from the client and must be current.",
    ],
    expertise: [
      "Knowing what a customer calls a problem before they know what it is",
      "Judging where a helpful answer becomes unsafe advice",
      "Getting a client comfortable with publishing indicative pricing",
    ],
    updated: "2026-09-04",
  },
  {
    kind: "industry-capability",
    industry: "home-services",
    capability: "whatsapp-nurturing",
    headline: "The quote that went quiet, followed up without nagging",
    lead:
      "Most lost work in this sector is a quote nobody followed up. The customer got three prices, got distracted, and booked whoever contacted them again — which is a solvable problem and almost never solved.",
    difference: [
      {
        label: "The gap is days, not months",
        body: "A quoting decision is made within a week or two. A nurture rhythm designed for a long consideration cycle is far too slow to be relevant here.",
      },
      {
        label: "Messaging is where these customers actually reply",
        body: "Photographs of the problem, a quick question, a confirmation. It is already how much of this work is transacted, which makes it the natural channel.",
      },
      {
        label: "Two messages is usually the whole sequence",
        body: "A check-in and a close. Anything longer reads as pressure from a local business the customer may still meet in person.",
      },
    ],
    care: [
      "Messaging platforms have their own rules on business messaging, opt-in and template approval. Compliance is the client's responsibility and must be confirmed before anything is built.",
      "Nothing here sends anything. Sequences are handed to the client's own tools and sent by them.",
      "Never re-quote or vary a price in a follow-up without the client's agreement. It undermines the original quote.",
    ],
    expertise: [
      "Knowing how long to wait before the first follow-up in this trade",
      "Writing a check-in that sounds like the person who visited, not like a system",
      "Recognising when a customer has decided and further contact will cost goodwill",
    ],
    updated: "2026-09-04",
  },
];
