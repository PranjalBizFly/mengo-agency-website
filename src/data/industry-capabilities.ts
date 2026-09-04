import type { IndustryCapability } from "@/lib/types";
import { extendedIndustryCapabilities } from "./industry-capabilities-extended";

/**
 * One capability, in one client sector.
 *
 * These exist only where the combination genuinely changes the work. The pairs
 * are listed on each industry rather than crossed automatically, so a
 * meaningless combination cannot be generated: there is no page about
 * Wikipedia profiles for local businesses, because there would be nothing
 * true to write on it.
 *
 * Each page answers one question: what is different about doing this
 * capability for a client in this sector? If the answer were "nothing", the
 * pair would not be here.
 */
const corePairs: IndustryCapability[] = [
  /* ------------------------------------------------------ SaaS & Software */
  {
    kind: "industry-capability",
    industry: "saas-software",
    capability: "brand-strategy",
    headline: "Positioning a product that changes every few weeks",
    lead:
      "Software positioning has a structural problem other sectors do not: the thing being positioned is different by the next release, and the marketing is usually the last function to hear about it.",
    difference: [
      { label: "The product moves under the positioning", body: "A release changes what is true about the product. Without a stored strategic layer, every new feature gets marketed as though it were the whole product." },
      { label: "The buyer is a committee", body: "A champion, a budget holder and usually someone in security. One position has to survive three different readings." },
      { label: "Category language shifts fast", body: "What a category is called changes every couple of years, and positioning tied to last year's label ages visibly." },
    ],
    care: [
      "Product claims must be verified by someone who knows the product. A plausible statement about software is not the same as a true one.",
      "Roadmap language creates obligations. Positioning against an unreleased capability is a commitment the client may not want to make.",
      "Competitor comparisons in software attract legal attention and need explicit client approval.",
    ],
    expertise: [
      "Knowing which features are differentiators and which are table stakes in this category",
      "Reading a competitive landscape that changes faster than any published research",
      "Telling a founder that the feature they are proudest of is not what buyers care about",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "saas-software",
    capability: "blog-content",
    headline: "Writing for readers who will detect marketing language instantly",
    lead:
      "Software audiences — developers particularly — punish marketing register faster than any other. Content that would pass in most sectors reads as noise here, and the tolerance for padding is close to zero.",
    difference: [
      { label: "Technical accuracy is checkable", body: "Readers will test claims, and a wrong one costs credibility disproportionately." },
      { label: "The bar for usefulness is higher", body: "Software buyers have unlimited free content available. A piece that does not teach something specific is not read." },
      { label: "Search intent is unusually explicit", body: "People search for exact problems and exact error states, which makes question-led content unusually effective." },
    ],
    care: [
      "Product claims need review by someone who understands the product, not only an editor.",
      "Do not publish about unreleased functionality without explicit approval.",
      "Comparative claims about competitors' products need evidence and client sign-off.",
    ],
    expertise: [
      "Knowing what the client's product actually does, well enough to spot a subtly wrong draft",
      "Judging which technical depth serves the buyer and which is showing off",
      "Recognising when a piece needs a practitioner's input rather than a writer's",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "saas-software",
    capability: "seo",
    headline: "Long cycles make search the channel that compounds",
    lead:
      "Software buyers self-educate for months before speaking to anyone, mostly through search. It is the channel most aligned with how the category is actually bought, and the one that most rewards patience.",
    difference: [
      { label: "The buying cycle is mostly invisible", body: "Months of evaluation happen with no contact, and search is where that evaluation occurs." },
      { label: "Problem-shaped queries convert best", body: "Buyers search for the problem before they search for the category, and the problem queries are less contested." },
      { label: "Documentation competes with marketing", body: "Well-written product documentation often outranks the marketing site, which is worth planning for rather than resenting." },
    ],
    care: [
      "Technical SEO is a separate discipline and software sites frequently have real technical issues.",
      "Product claims in search content carry the same verification requirement as anywhere else.",
      "Ranking cannot be guaranteed, and long-cycle software categories are competitive.",
    ],
    expertise: [
      "Distinguishing high-volume terms with no commercial intent from low-volume terms with plenty",
      "Knowing which problems the client's buyers actually search before they know the category",
      "Setting realistic expectations for a channel that compounds over quarters",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "saas-software",
    capability: "whatsapp-nurturing",
    headline: "Following up across a cycle measured in months",
    lead:
      "A nine-month enterprise evaluation cannot be nurtured on a two-week cadence. The rhythm has to match the cycle, and most sequences are built for a purchase decision that happens in days.",
    difference: [
      { label: "The cadence has to stretch", body: "A sequence that finishes in three weeks leaves eight months of silence in the middle of an evaluation." },
      { label: "Different committee members need different sequences", body: "The champion, the budget holder and the security reviewer are following different questions." },
      { label: "Usefulness sustains attention", body: "Over a long cycle, only genuinely useful follow-up survives. Promotional cadence gets muted." },
    ],
    care: [
      "Messaging consent rules apply and vary by jurisdiction, particularly for business contacts.",
      "Sending happens in the client's own platform under their consent record.",
      "Security and compliance claims in follow-up need the client's own verification.",
    ],
    expertise: [
      "Knowing what each member of a buying committee actually needs to hear",
      "Judging cadence for a cycle where too much contact is worse than too little",
      "Recognising when an evaluation has stalled for a reason nurturing cannot fix",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "saas-software",
    capability: "icps-and-personas",
    headline: "Segmenting a buying committee rather than an audience",
    lead:
      "In most sectors segmentation divides an audience. In software it also has to divide a single purchase decision into the three or four people who each have to say yes.",
    difference: [
      { label: "Roles within one deal need separating", body: "The champion, the budget holder and the technical reviewer hold different objections about the same purchase." },
      { label: "Company profile and person profile are both needed", body: "An ICP describes the company worth selling to; personas describe who inside it has to be convinced." },
      { label: "Objections are often procedural", body: "Security review, procurement process and integration effort are objections that have nothing to do with the product's merits." },
    ],
    care: [
      "Segment definitions built without input from the client's sales team are hypotheses.",
      "Security and compliance objections need the client's own team to answer accurately.",
      "Do not assume the champion is the decision-maker; in enterprise software they usually are not.",
    ],
    expertise: [
      "Distinguishing the person who wants it from the person who signs for it",
      "Knowing which procedural objections actually kill deals in this category",
      "Judging which segments the client's delivery can genuinely serve",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "saas-software",
    capability: "sales-collateral",
    headline: "Material that gets forwarded to people who were not on the call",
    lead:
      "Software collateral has an unusual job: it is sent to a champion who forwards it internally to people the salesperson never speaks to. It has to work without a presenter.",
    difference: [
      { label: "It is read by strangers", body: "The security reviewer and the budget holder read it cold, without the context of the call." },
      { label: "It has to answer procedural questions", body: "Integration, security, implementation effort. These decide deals and rarely appear in marketing material." },
      { label: "It ages with the product", body: "Collateral describing last quarter's product is a live inaccuracy rather than a stale document." },
    ],
    care: [
      "Security and compliance claims are contractual territory and belong to the client's own team.",
      "Feature descriptions need verification against the current release, not the roadmap.",
      "Comparative material needs explicit legal review in most software categories.",
    ],
    expertise: [
      "Knowing which procedural objections need pre-empting in writing",
      "Judging how much technical depth a forwarded document should carry",
      "Keeping material current as the product changes, which is a rhythm rather than a project",
    ],
    updated: "2026-09-02",
  },

  /* -------------------------------------------------- Professional Services */
  {
    kind: "industry-capability",
    industry: "professional-services",
    capability: "founders",
    headline: "The partner is the product",
    lead:
      "In a professional services firm, clients buy a specific person's judgement. Marketing that treats the firm as an institution is marketing against the client's actual advantage.",
    difference: [
      { label: "Credibility is personal rather than corporate", body: "A named partner's track record persuades in a way a firm's does not." },
      { label: "The person is billable", body: "Every hour spent on marketing has a visible opportunity cost, which changes what you can reasonably ask for." },
      { label: "Professional conduct rules apply", body: "What a regulated professional may say publicly is constrained in ways most sectors are not." },
    ],
    care: [
      "Regulated professions have advertising and conduct rules that belong to the firm's compliance function.",
      "Nothing published should read as professional advice.",
      "Client confidentiality is absolute; even anonymised examples need explicit permission.",
    ],
    expertise: [
      "Knowing what a partner will actually put their name to",
      "Framing the time ask so a billable person says yes",
      "Judging where marketing crosses into advice",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "professional-services",
    capability: "employees",
    headline: "Expertise distributed across people who all bill by the hour",
    lead:
      "The valuable material in a services firm is inside several people, all of whom have a good reason not to spend time on marketing. Knowing who holds what, and who will participate, is most of the work.",
    difference: [
      { label: "Contribution competes with revenue", body: "Every content contribution is a billable hour not billed, and the firm's own economics work against you." },
      { label: "Authorisation is not the same as expertise", body: "Who knows something and who may speak about it publicly are different lists in a regulated firm." },
      { label: "Recruitment is usually a bigger problem than marketing", body: "Most professional services firms struggle to hire and have never briefed their agency on it." },
    ],
    care: [
      "Professional conduct rules govern what individuals may publish.",
      "Credential claims in regulated professions carry weight and need verification.",
      "Attributed content needs the named individual's explicit approval.",
    ],
    expertise: [
      "Knowing which partner will actually contribute and which will agree and not deliver",
      "Sizing the ask to twenty minutes rather than a written draft",
      "Managing the internal politics of who gets visibility",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "professional-services",
    capability: "blog-content",
    headline: "Credibility beats reach, by a wide margin",
    lead:
      "One well-argued piece read by forty of the right people outperforms a large audience of the wrong ones. Professional services content is judged on whether a peer would respect it.",
    difference: [
      { label: "The audience is small and expert", body: "Volume metrics mislead badly here. Forty right readers is a good result." },
      { label: "Register carries credibility", body: "Content that sounds like a startup undermines the seniority the firm is selling." },
      { label: "Approval cycles are genuinely slow", body: "Partner review takes as long as it takes, and plans that assume otherwise fail structurally." },
    ],
    care: [
      "Nothing should read as advice a reader could act on without instructing the firm.",
      "Regulated professions constrain what may be claimed about outcomes.",
      "Anonymised client examples still require permission.",
    ],
    expertise: [
      "Translating genuine expertise without flattening it",
      "Knowing which topics a peer would find obvious and which they would find useful",
      "Sequencing around slow approval rather than pretending it will be fast",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "professional-services",
    capability: "case-studies",
    headline: "Proof, under confidentiality",
    lead:
      "The most persuasive material a services firm has is what it did for a named client, and that is frequently the material it may not publish. Working within that constraint is the whole exercise.",
    difference: [
      { label: "Naming clients is often prohibited", body: "Confidentiality obligations mean anonymised cases are the norm rather than a fallback." },
      { label: "The situation matters more than the outcome", body: "A prospect recognising their own circumstances is more persuasive than a number they cannot verify." },
      { label: "Outcome claims are regulated in some professions", body: "What may be claimed about results varies by profession and jurisdiction." },
    ],
    care: [
      "Client confidentiality is absolute, and anonymisation must be genuine rather than thin.",
      "Outcome claims need evidence the firm holds and may publish.",
      "Professional conduct rules may restrict comparative or superlative claims entirely.",
    ],
    expertise: [
      "Anonymising a case without removing what makes it recognisable",
      "Knowing which engagements the firm may discuss at all",
      "Judging which situation a target client would see themselves in",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "professional-services",
    capability: "speaking-engagements",
    headline: "The channel that fits how these firms are actually bought",
    lead:
      "Professional services are bought on trust formed over time, often in rooms. Speaking is one of the few marketing activities that maps directly onto how the sector's referral relationships actually form.",
    difference: [
      { label: "The audience is the referral network", body: "Other professionals in the room refer work, which is frequently worth more than any direct enquiry." },
      { label: "Selection favours genuine expertise", body: "Conference committees in professional sectors can tell the difference, which advantages a firm with real depth." },
      { label: "The material reuses well", body: "A talk becomes articles, and articles are what the firm needs anyway." },
    ],
    care: [
      "Professional conduct rules apply to public statements.",
      "Nothing said should constitute advice to the room.",
      "Client examples in a talk carry the same confidentiality obligations as anywhere.",
    ],
    expertise: [
      "Knowing which events the firm's referral network actually attends",
      "Judging whether a partner will present well, before booking them",
      "Turning a talk into the written material the firm needs",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "professional-services",
    capability: "sales-script",
    headline: "A conversation, not a pitch",
    lead:
      "Professional services buyers are assessing judgement rather than evaluating a product. The conversation is the demonstration, which makes structure more useful and scripting more damaging than almost anywhere else.",
    difference: [
      { label: "The conversation is the product demonstration", body: "How the professional thinks in the room is what the client is buying." },
      { label: "Scripting is actively counterproductive", body: "A partner reading a script undermines the expertise being sold. Structure yes, wording no." },
      { label: "Qualification matters more", body: "Taking the wrong client in professional services is expensive and hard to exit." },
    ],
    care: [
      "Nothing in the conversation should constitute advice before an engagement exists.",
      "Fee discussions in some professions are constrained by conduct rules.",
      "Conflict checks precede substantive conversations in several professions.",
    ],
    expertise: [
      "Knowing when to disqualify, which is most of the value",
      "Structuring without scripting, for people who will not follow a script",
      "Judging when a prospect is shopping for a second opinion rather than a firm",
    ],
    updated: "2026-09-02",
  },

  /* --------------------------------------------------------- Ecommerce & D2C */
  {
    kind: "industry-capability",
    industry: "ecommerce-d2c",
    capability: "ads-management",
    headline: "Creative volume is the constraint, not strategy",
    lead:
      "Ecommerce paid programmes consume creative faster than any other sector. Fatigue is real, measurable and continuous, and most agencies cannot produce variants at the rate the channel eats them.",
    difference: [
      { label: "Fatigue is continuous rather than occasional", body: "Refresh is a recurring commitment, not a quarterly project." },
      { label: "The margin is thin and visible", body: "Inefficiency shows up in the numbers within a month, which raises the stakes on every decision." },
      { label: "Testing must vary the claim", body: "Rewording an ad produces noise. Varying the actual proposition produces learning." },
    ],
    care: [
      "Product claims — materials, origin, sustainability, health effects — carry regulatory exposure.",
      "Comparative and superlative claims are governed by advertising standards.",
      "Pricing and discount decisions are commercial and belong to the client.",
    ],
    expertise: [
      "Knowing the client's actual margin, which decides whether a promotion is sensible",
      "Reading creative performance well enough to know what to change",
      "Protecting the brand from short-term discounting pressure",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "ecommerce-d2c",
    capability: "marketing-calendar",
    headline: "The promotional year decided in advance",
    lead:
      "Ecommerce calendars are dominated by fixed commercial dates. The difference between a planned promotional year and a reactive one shows up directly in margin.",
    difference: [
      { label: "Seasonal peaks dominate the year", body: "Much of the calendar is determined before any strategy is applied to it." },
      { label: "Ad hoc discounting erodes margin", body: "Promotions decided in a slow week train customers to wait, which is expensive and hard to reverse." },
      { label: "Lead times are longer than they appear", body: "Creative, stock and logistics all need earlier decisions than the marketing date suggests." },
    ],
    care: [
      "Pricing and discount depth are commercial decisions for the client.",
      "Promotional terms and conditions carry consumer-protection obligations.",
      "Stock availability claims need verification against actual inventory.",
    ],
    expertise: [
      "Knowing when a promotion protects margin and when it destroys it",
      "Planning around the client's stock and logistics constraints",
      "Persuading a client to decide the promotional year rather than react to weeks",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "ecommerce-d2c",
    capability: "email-templates",
    headline: "Transactional messages that are read by everyone",
    lead:
      "Order confirmations, dispatch notices and delivery updates are opened by nearly every customer. They are the highest-attention messages an ecommerce business sends and almost nobody has looked at them.",
    difference: [
      { label: "Open rates are close to universal", body: "No campaign gets this attention, and these messages are usually platform defaults." },
      { label: "They arrive at moments of anticipation", body: "A customer awaiting a delivery is more engaged than at any other point." },
      { label: "The line between transactional and marketing matters legally", body: "Adding promotion to a confirmation can change its legal category." },
    ],
    care: [
      "Transactional and marketing messages are treated differently in most jurisdictions.",
      "Delivery and availability claims must be accurate.",
      "Returns and cancellation information carries consumer-protection requirements.",
    ],
    expertise: [
      "Knowing how much promotion a transactional message can carry before it becomes one",
      "Writing for a customer who is anxious about a delivery",
      "Judging which platform defaults are worth replacing",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "ecommerce-d2c",
    capability: "loyalty-programme",
    headline: "One of the few sectors where this genuinely fires",
    lead:
      "Loyalty mechanics need repeat purchase to work at all, and ecommerce is one of the few sectors that reliably has it. The question is not whether the mechanism can fire but what it costs in margin.",
    difference: [
      { label: "Repeat purchase genuinely exists", body: "Which is the precondition most sectors fail and this one usually meets." },
      { label: "The economics are modellable", body: "Purchase frequency and margin are known, so the programme's cost can be calculated rather than guessed." },
      { label: "Retention is where the margin is", body: "Acquisition costs are visible and rising; the second purchase is usually where the business actually is." },
    ],
    care: [
      "Loyalty schemes carry consumer-protection obligations on terms and expiry.",
      "Customer data handling for a programme is a data protection question.",
      "Reward economics are the client's calculation and their commercial risk.",
    ],
    expertise: [
      "Knowing whether the client's margin supports the reward being proposed",
      "Judging what customers would genuinely value rather than what is cheapest to give",
      "Keeping the mechanic simple enough that customers can explain it",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "ecommerce-d2c",
    capability: "social-media",
    headline: "Volume, and a first line that has to earn the next second",
    lead:
      "Ecommerce social is high-frequency and unforgiving. The consideration window is seconds, the feed is competitive, and content that would work in a considered B2B context does not register here.",
    difference: [
      { label: "The opening decides everything", body: "On feed platforms the first line determines whether anything else is read." },
      { label: "Volume is genuinely high", body: "Multiple channels, refreshed constantly, because fatigue is real and measurable." },
      { label: "Product imagery does most of the work", body: "Which is a production constraint rather than a writing one." },
    ],
    care: [
      "Product claims carry the same regulatory exposure as in advertising.",
      "Influencer and affiliate content requires disclosure.",
      "Pricing shown in content must match what the customer will actually pay.",
    ],
    expertise: [
      "Knowing what stops a thumb in this specific category",
      "Judging when volume is the answer and when the offer is the problem",
      "Protecting brand register under constant discount pressure",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "ecommerce-d2c",
    capability: "landing-page",
    headline: "Pages that answer a purchase objection in seconds",
    lead:
      "An ecommerce landing page has less time and a more specific job than almost any other. The objection is usually concrete — fit, delivery, returns, price — and the page either answers it immediately or loses the visit.",
    difference: [
      { label: "The objection is concrete", body: "Will it fit, when will it arrive, can I return it. Practical rather than conceptual." },
      { label: "The window is seconds", body: "Structure matters more than argument, and the answer has to be findable rather than reasoned." },
      { label: "It has to match the ad exactly", body: "A mismatch between the ad's promise and the page is the most common cause of paid traffic failing to convert." },
    ],
    care: [
      "Price, delivery and returns information carries consumer-protection obligations.",
      "Stock and availability claims must be accurate at the time of display.",
      "Promotional terms need to be complete and accessible.",
    ],
    expertise: [
      "Knowing which practical objection actually blocks this purchase",
      "Matching the page to the ad's promise precisely",
      "Judging how much reassurance a category needs before purchase",
    ],
    updated: "2026-09-02",
  },

  /* ------------------------------------------------------------- Healthcare */
  {
    kind: "industry-capability",
    industry: "healthcare",
    capability: "google-business-profile",
    headline: "How most patients actually find a practice",
    lead:
      "For clinics and practices, the local profile is the primary discovery route. It is also where practical accuracy — hours, services, whether you are accepting patients — matters more than in any other sector.",
    difference: [
      { label: "Accuracy has patient consequences", body: "Wrong opening hours in healthcare is not an inconvenience; it is somebody arriving at a closed door when they are unwell." },
      { label: "Reviews carry unusual weight", body: "Patients rely on them heavily, and responding to a negative one has confidentiality implications." },
      { label: "Service listings are regulated territory", body: "What may be advertised as a service varies by profession and jurisdiction." },
    ],
    care: [
      "Never confirm or imply a patient relationship in a review response. Confidentiality applies publicly.",
      "Service and treatment listings must comply with the profession's advertising rules.",
      "Practitioner credentials and registrations must be accurate and current.",
    ],
    expertise: [
      "Knowing what may be listed as a service in this jurisdiction and profession",
      "Responding to a negative review without breaching confidentiality",
      "Judging tone for an audience that is frequently anxious",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "healthcare",
    capability: "website-planner",
    headline: "Structure for a reader who is worried",
    lead:
      "Healthcare site visitors are often anxious and looking for one specific thing. Structure matters more than persuasion, and the conventional marketing site shape actively gets in the way.",
    difference: [
      { label: "The visitor has a specific question", body: "Usually practical — can you treat this, do you take my insurance, when can I be seen." },
      { label: "Anxiety changes how people read", body: "Scanning rather than reading, with low tolerance for anything that delays the answer." },
      { label: "Regulatory content is required", body: "Registrations, complaints procedures and specific disclosures are mandatory in many jurisdictions." },
    ],
    care: [
      "Required regulatory content varies by profession and jurisdiction and belongs to the client's compliance function.",
      "Clinical information must be reviewed by a qualified person.",
      "Accessibility matters more than average, because the audience skews toward people with impairments.",
    ],
    expertise: [
      "Knowing what an anxious visitor needs to find first",
      "Judging where clinical review is required and where it is not",
      "Balancing regulatory requirements against usability",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "healthcare",
    capability: "faq-bank",
    headline: "The questions patients are too uncertain to ask",
    lead:
      "Healthcare FAQs do more work than in any other sector, because patients frequently do not know what they are allowed to ask and will not phone to find out.",
    difference: [
      { label: "Practical questions block appointments", body: "Cost, referral requirements, what to bring, how long it takes. These prevent bookings more than clinical uncertainty does." },
      { label: "Clinical questions need qualified answers", body: "The line between practice information and clinical guidance has to be drawn deliberately." },
      { label: "Reassurance is part of the answer", body: "Tone carries as much as content for an anxious reader." },
    ],
    care: [
      "No clinical answer should be published without review by a qualified person.",
      "Do not provide anything that could be read as individual medical guidance.",
      "Cost and insurance information must be accurate and current.",
    ],
    expertise: [
      "Knowing which questions patients are too uncertain to ask directly",
      "Drawing the line between practice information and clinical advice",
      "Writing reassurance without minimising",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "healthcare",
    capability: "testimonials",
    headline: "Proof, where proof is heavily restricted",
    lead:
      "Patient testimonials are the most persuasive material a practice could have and are restricted or prohibited outright for many regulated treatments. The constraint is the starting point, not an obstacle to work around.",
    difference: [
      { label: "Restrictions vary by treatment and jurisdiction", body: "Some testimonials are prohibited regardless of consent, particularly for regulated procedures." },
      { label: "Consent is not sufficient", body: "A patient's willingness does not override a professional advertising rule." },
      { label: "Confidentiality persists", body: "Publishing anything that identifies a patient relationship is a confidentiality matter even with permission." },
    ],
    care: [
      "Patient testimonials are prohibited for certain treatments in several jurisdictions, consent notwithstanding.",
      "Documented consent is necessary but not sufficient — check the professional rules first.",
      "Outcome claims in healthcare carry the highest evidential bar of any sector here.",
    ],
    expertise: [
      "Knowing what the profession's rules permit before asking anyone",
      "Finding non-testimonial forms of credibility where testimonials are prohibited",
      "Judging when the risk outweighs the persuasive value",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "healthcare",
    capability: "blog-content",
    headline: "Where a confident wrong sentence does real harm",
    lead:
      "Health content is the clearest case in this taxonomy for a hard review gate. A fluent, plausible, wrong statement about a treatment is not a marketing error — it is a safety one.",
    difference: [
      { label: "The consequence of error is different in kind", body: "Most sectors risk credibility. This one risks somebody acting on wrong information." },
      { label: "Search traffic arrives with intent to act", body: "People searching health questions are frequently deciding what to do next." },
      { label: "Tone must not use persuasion technique", body: "Urgency and scarcity framing are inappropriate applied to treatment decisions." },
    ],
    care: [
      "No clinical claim reaches a patient without review by a qualified person. This is the point, not a preference.",
      "Generated text can be confidently wrong about medicine. Treat every clinical statement as unverified.",
      "Advertising rules for health claims are strict and enforced in most jurisdictions.",
    ],
    expertise: [
      "Knowing which content needs clinical review and which is practice information",
      "Refusing content that would apply pressure to a treatment decision",
      "Managing the clinical review relationship so it is fast rather than adversarial",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "healthcare",
    capability: "email-templates",
    headline: "Appointment messages that reduce anxiety and no-shows",
    lead:
      "Confirmations, reminders and preparation instructions are operationally important and clinically relevant. They are also usually system defaults nobody has read.",
    difference: [
      { label: "They affect attendance", body: "A clear reminder with preparation instructions measurably reduces no-shows, which is an operational outcome rather than a marketing one." },
      { label: "Preparation instructions can be clinical", body: "Fasting, medication, what to bring. These need clinical sign-off." },
      { label: "The recipient may be anxious", body: "Tone in an appointment reminder matters more than in most transactional messages." },
    ],
    care: [
      "Any clinical instruction requires review by a qualified person.",
      "Patient data in messaging is subject to health data protection rules.",
      "Do not include promotional content in clinical communications.",
    ],
    expertise: [
      "Knowing which instructions are clinical and need sign-off",
      "Writing for an anxious recipient without being patronising",
      "Keeping promotional content out of clinical messages",
    ],
    updated: "2026-09-02",
  },

  /* ------------------------------------------------------------ Real Estate */
  {
    kind: "industry-capability",
    industry: "real-estate",
    capability: "google-business-profile",
    headline: "Local presence for a local business",
    lead:
      "Property is local by definition, and the profile is where local intent lands. For agents and developers it is one of the highest-return assets available and consistently neglected.",
    difference: [
      { label: "Area is the primary search dimension", body: "People search by location before anything else, which makes local presence the whole game." },
      { label: "Reviews carry high weight", body: "A property transaction is high-value and infrequent, so buyers research the agent carefully." },
      { label: "Multiple branches need separate treatment", body: "Each office serves a different area with different stock." },
    ],
    care: [
      "Property advertising rules apply to any claims about the market or about properties.",
      "Fair housing and anti-discrimination rules constrain how areas may be characterised.",
      "Branch details must be accurate; wrong opening hours cost viewings.",
    ],
    expertise: [
      "Knowing how buyers in this market actually search for property",
      "Characterising an area without crossing anti-discrimination lines",
      "Responding to reviews about a transaction that went badly",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "real-estate",
    capability: "whatsapp-nurturing",
    headline: "The six-month follow-up that produces the next instruction",
    lead:
      "Most property leads are not ready. A seller thinking about moving next spring is the most valuable contact an agent has and the one most likely to be forgotten by March.",
    difference: [
      { label: "The gap between interest and action is months", body: "Sometimes years. Nurturing over that horizon is what wins the instruction." },
      { label: "Value comes from market information", body: "Area updates and market context sustain attention where promotional messages do not." },
      { label: "Timing is everything and unpredictable", body: "The goal is being the agent they think of when the decision arrives." },
    ],
    care: [
      "Messaging consent rules apply and vary by jurisdiction.",
      "Market predictions and valuation claims need care and attribution.",
      "Sending happens in the client's own platform under their consent record.",
    ],
    expertise: [
      "Judging cadence over a horizon measured in months",
      "Knowing what market information a prospective seller actually values",
      "Recognising the signals that someone has moved from thinking to deciding",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "real-estate",
    capability: "social-media",
    headline: "Listings, and everything that is not a listing",
    lead:
      "Property social media defaults to a feed of listings, which serves people already looking and nobody else. The content that builds the pipeline is the content about the area.",
    difference: [
      { label: "Listings have a short shelf life", body: "A sold property is dead content, which makes a listing-only feed permanently thin." },
      { label: "Area content builds the pipeline", body: "People considering a move follow area content long before they contact an agent." },
      { label: "The audience includes future sellers", body: "Who are watching to see which agent knows the area." },
    ],
    care: [
      "Property particulars in any format carry legal weight and must be accurate.",
      "Anti-discrimination rules apply to how areas and neighbourhoods are described.",
      "Sold and price information may be restricted depending on jurisdiction.",
    ],
    expertise: [
      "Genuine local knowledge, which is the client's actual product",
      "Balancing listing content against the area content that builds pipeline",
      "Describing a neighbourhood without crossing legal lines",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "real-estate",
    capability: "landing-page",
    headline: "Development launches, where the page is the showroom",
    lead:
      "For a new development, the landing page frequently precedes the physical thing entirely. It has to convey a place that does not exist yet, to buyers making one of the largest decisions of their lives.",
    difference: [
      { label: "The product does not exist yet", body: "Which makes every claim about it a representation rather than a description." },
      { label: "The decision is enormous and emotional", body: "Reassurance and specificity matter more than persuasion technique." },
      { label: "Registration is the conversion", body: "Not a purchase. The page's job is a qualified enquiry, months ahead of a sale." },
    ],
    care: [
      "Representations about an unbuilt property carry significant legal weight.",
      "Computer-generated imagery must be labelled where required.",
      "Price, availability and completion date claims need to be accurate and caveated.",
    ],
    expertise: [
      "Knowing what a buyer needs to believe before registering interest",
      "Working with the developer's legal team on representations",
      "Conveying a place that does not exist without overpromising",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "real-estate",
    capability: "testimonials",
    headline: "The transaction is stressful, which makes proof matter more",
    lead:
      "Property transactions are stressful and infrequent, so buyers and sellers research the agent heavily. A specific testimonial about how a difficult sale was handled outperforms anything the agent says.",
    difference: [
      { label: "The transaction is memorable", body: "Which makes testimonials unusually detailed and unusually persuasive." },
      { label: "Difficulty is the story", body: "A testimonial about a sale that nearly fell through and did not is worth several about easy ones." },
      { label: "Timing is clear", body: "Completion is an obvious moment of satisfaction, which most agents fail to use." },
    ],
    care: [
      "Client permission for naming and for property details.",
      "Outcome claims about price achieved need to be accurate and permitted.",
      "Do not publish details that identify a transaction the parties want private.",
    ],
    expertise: [
      "Asking at completion rather than months later",
      "Drawing out the specific difficulty rather than accepting 'great service'",
      "Knowing which transactions the parties would rather not have discussed",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "real-estate",
    capability: "email-templates",
    headline: "The messages that carry a transaction",
    lead:
      "Viewing confirmations, offer updates and progress notices are read closely by people under stress. They are operationally necessary and almost always system defaults.",
    difference: [
      { label: "Recipients are anxious and attentive", body: "A property transaction is stressful, and every message is read carefully." },
      { label: "Progress updates reduce inbound calls", body: "Which is an operational saving as much as a marketing improvement." },
      { label: "Bad news messages are frequent", body: "Chains fall through. How that is communicated affects whether the client returns." },
    ],
    care: [
      "Statements about a transaction's status carry weight and must be accurate.",
      "Property details in any message are subject to the same accuracy requirements as particulars.",
      "Client data in transaction messaging is subject to data protection rules.",
    ],
    expertise: [
      "Writing bad news in a transaction, which is the hardest of these",
      "Judging what proactive updates reduce anxiety rather than create it",
      "Keeping promotional content out of transaction messages",
    ],
    updated: "2026-09-02",
  },

  /* --------------------------------------------------- Local & Multi-Location */
  {
    kind: "industry-capability",
    industry: "local-multi-location",
    capability: "google-business-profile",
    headline: "The estate, location by location",
    lead:
      "For a multi-location business the profile work multiplies by the number of sites, and the sites nobody visits are the ones with the stale information.",
    difference: [
      { label: "Every location is a separate asset", body: "With its own hours, services, photography and reviews." },
      { label: "Consistency and localness are in tension", body: "Head office wants uniformity; each location genuinely differs." },
      { label: "Errors concentrate in the quiet sites", body: "The flagship is checked; the twelfth branch is not." },
    ],
    care: [
      "Location details must be verified per site, not assumed from a template.",
      "Franchise agreements may restrict what a location may publish.",
      "Local claims about services and offers must be true at that location.",
    ],
    expertise: [
      "Knowing how much local variation the client's model can tolerate",
      "Managing the relationship with local managers, which decides whether any of it holds",
      "Prioritising which locations actually need attention",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "local-multi-location",
    capability: "social-media",
    headline: "One brand, many local feeds",
    lead:
      "Local audiences want local content and head office wants brand consistency. The resolution is usually a shared structure with genuine local input, and the failure is either identical posts everywhere or twelve unrelated feeds.",
    difference: [
      { label: "Identical content is not local", body: "The same post across twelve locations reads as corporate to exactly the local audience it is aimed at." },
      { label: "Local managers will post anyway", body: "If the central process is slow, they will make their own, and the brand fragments." },
      { label: "Local events and staff are the content", body: "Which means the input has to come from the location." },
    ],
    care: [
      "Franchise agreements may govern what a location may publish.",
      "Local offer claims must be accurate at that location.",
      "Staff and customer imagery requires permission.",
    ],
    expertise: [
      "Judging what should be central and what should be local",
      "Getting local managers to supply input, which is a relationship problem",
      "Making the central route faster than doing it themselves",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "local-multi-location",
    capability: "testimonials",
    headline: "Proof gathered at every site, not just the flagship",
    lead:
      "Reviews and testimonials are local signals. A business with excellent proof at head office and none at eleven branches has proof where it is least needed.",
    difference: [
      { label: "Proof has to be local to work", body: "A customer choosing a branch wants evidence about that branch." },
      { label: "Gathering is distributed", body: "Which means it depends on local managers asking, and most will not without a prompt." },
      { label: "Volume differs enormously by site", body: "The flagship accumulates reviews; the quiet branch does not, which compounds." },
    ],
    care: [
      "Customer permission for any use beyond the platform the review was left on.",
      "Do not incentivise reviews in ways platforms prohibit.",
      "Local claims within testimonials must be accurate for that site.",
    ],
    expertise: [
      "Getting local managers to ask, consistently",
      "Knowing which sites need proof most urgently",
      "Responding to negative local reviews without a corporate register",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "local-multi-location",
    capability: "referral-programme",
    headline: "Word of mouth is already the channel — make it a mechanism",
    lead:
      "Local businesses run on recommendation. Almost none have a defined ask, a moment or a follow-through, which means the channel they depend on most is the one they manage least.",
    difference: [
      { label: "Referral is already dominant", body: "Which means the upside is in producing more of what already works rather than in a new channel." },
      { label: "The ask happens face to face", body: "Which makes it a staff behaviour question rather than a marketing one." },
      { label: "It has to work at every site", body: "A programme adopted by three locations out of twelve is not a programme." },
    ],
    care: [
      "Incentives may be restricted in some sectors and by some franchise agreements.",
      "Any incentive terms need to be clear and honoured consistently across locations.",
      "Customer data captured through referral is subject to data protection rules.",
    ],
    expertise: [
      "Making an ask that front-line staff will actually use",
      "Getting adoption across locations, which is the whole difficulty",
      "Judging whether an incentive helps or cheapens it in this sector",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "local-multi-location",
    capability: "email-templates",
    headline: "Messages that come from a location, not from head office",
    lead:
      "A booking confirmation from a specific branch, with that branch's details and that branch's tone, converts and reassures better than a corporate template. Most multi-location businesses send the corporate one.",
    difference: [
      { label: "Location details matter to the recipient", body: "Which branch, what time, how to get there, who to ask for." },
      { label: "Central templates lose local specificity", body: "And the specificity is what makes the message useful." },
      { label: "Volume is high and distributed", body: "Which makes consistency valuable and local accuracy essential." },
    ],
    care: [
      "Location details in every message must be accurate for that site.",
      "Transactional and marketing distinctions apply per jurisdiction.",
      "Franchise agreements may govern customer communications.",
    ],
    expertise: [
      "Deciding what varies by location and what does not",
      "Keeping location details current across the estate",
      "Balancing brand consistency against local usefulness",
    ],
    updated: "2026-09-02",
  },
  {
    kind: "industry-capability",
    industry: "local-multi-location",
    capability: "seo",
    headline: "Location pages that are genuinely about the location",
    lead:
      "Multi-location SEO fails in a predictable way: a template page per location with the town name substituted. It is transparent to readers and increasingly to search engines.",
    difference: [
      { label: "Templated location pages do not work", body: "Substituting a town name into identical content is the most common and most visible failure in this sector." },
      { label: "Local input is the differentiator", body: "Real detail about the location, its staff and its area is what makes a page worth ranking." },
      { label: "Internal linking across locations matters", body: "A large estate needs a structure that does not have locations competing with each other." },
    ],
    care: [
      "Location claims must be accurate per site.",
      "Duplicate content across location pages is a real risk with a template approach.",
      "Franchise agreements may govern what location pages may say.",
    ],
    expertise: [
      "Extracting genuine local detail from each site, which is a relationship task",
      "Structuring an estate so locations do not compete for the same terms",
      "Knowing which locations justify the effort of a proper page",
    ],
    updated: "2026-09-02",
  },
];

/** Every curated pair, across all ten sectors. */
export const industryCapabilities: IndustryCapability[] = [...corePairs, ...extendedIndustryCapabilities];

export const industryCapabilityPairs = industryCapabilities.map((entry) => ({
  industry: entry.industry,
  capability: entry.capability,
}));

export function industryCapability(industry: string, capability: string) {
  return industryCapabilities.find((e) => e.industry === industry && e.capability === capability);
}

export function capabilitiesForIndustry(industry: string): string[] {
  return industryCapabilities.filter((e) => e.industry === industry).map((e) => e.capability);
}
