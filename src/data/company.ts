import type { CompanyPage, LegalPage } from "@/lib/types";

/**
 * Company and legal pages.
 *
 * Biographical and corporate facts are limited to what is publicly verifiable
 * from Mengo's own published material. Where a page would benefit from
 * information only the business holds — team, funding, entity details, client
 * names — the structure exists and the copy says so, rather than inventing it.
 *
 * The legal pages below are deliberately marked as placeholders. Publishing
 * invented legal text under a real company's name is worse than publishing
 * nothing, and these have to be replaced with the versions Mengo's own counsel
 * approves before launch.
 */
export const companyPages: CompanyPage[] = [
  {
    kind: "company",
    slug: "about",
    title: "About Mengo",
    navLabel: "About",
    headline: "We build the layer underneath the agency, not the layer in front of it",
    lead:
      "Mengo is a marketing system that turns a business brief into strategy, planning, content and follow-up. This site is about one specific use of it: agencies running that work on behalf of their clients.",
    summary:
      "Mengo builds the structural layer beneath marketing delivery. What we make, why the agency version exists, and what we deliberately do not do.",
    seoTitle: "About Mengo — who builds it and why",
    seoDescription:
      "Mengo builds the structural layer beneath marketing delivery. What the product does, why the agency version exists, and the boundaries we hold deliberately.",
    updated: "2026-08-31",
    blocks: [
      { type: "heading", text: "What Mengo is" },
      { type: "text", text: "Mengo turns a short business brief into a marketing system: positioning and segments, a themed calendar, the content that fills it, and the follow-up sequences behind it. It was built first for business owners who were the entire marketing function of their own company." },
      { type: "heading", text: "Why an agency version" },
      { type: "text", text: "Agencies started using it, and the fit was obvious in one direction and needed re-explaining in another. The structural work an agency repeats on every client is exactly what the product produces. What needed restating was the co-founder itself: for a business owner it is the marketing function they do not have, and for an agency it is the layer beneath the one they already are." },
      { type: "text", text: "So this is a separate property with a separate argument. The agency keeps the clients, the strategy and the final call. Mengo carries the structural layer underneath. The end-user product and its site continue unchanged at mengoengine.com; they are not the same proposition and we do not pretend they are." },
      { type: "heading", text: "The position, stated once" },
      { type: "ledger", ledger: {
        agency: {
          heading: "The agency owns",
          note: "Everything a client is actually buying.",
          items: [
            { label: "The client relationship", body: "Every conversation, every difficult message, every renewal." },
            { label: "Strategy and recommendation", body: "What you advise is your professional judgement." },
            { label: "Final approval", body: "A named person decides what carries your name." },
            { label: "Accountability", body: "When something goes wrong, a person answers for it." },
          ],
        },
        mengo: {
          heading: "Mengo carries",
          note: "The structural work behind it.",
          items: [
            { label: "Research assembly", body: "Context gathered, with gaps marked as gaps." },
            { label: "Planning structure", body: "A stored strategic layer and a plan that reflows when it changes." },
            { label: "Production volume", body: "Briefs and drafts in the formats each channel takes." },
            { label: "Follow-up construction", body: "Nurture sequences built to a consistent anatomy for review." },
          ],
        },
      } },
      { type: "heading", text: "What we will not do" },
      { type: "list", items: [
        "We do not send email, publish to accounts or hold ad spend. Sending, publishing and consent stay in the tools you and your clients already use, where deliverability and legal obligations sit.",
        "We do not contact your clients. Ever. Client relationships are the agency's, entirely.",
        "We do not invent facts about a business. Where a draft needs information that was not supplied, it says so rather than producing something plausible.",
        "We do not claim outcomes we have not measured. There are no fabricated statistics anywhere on this site.",
      ] },
      { type: "heading", text: "Where we are" },
      { type: "text", text: "Mengo is early. We would rather say that plainly than publish a client list we do not have. If you are evaluating this at any scale, the honest starting point is a scoped pilot on one account with success criteria you define before you begin." },
      { type: "note", text: "This site deliberately contains no testimonials, case studies, client logos or performance figures. Not because they would not help, but because we do not have ones that are true, and the alternative is to make them up." },
    ],
  },

  {
    kind: "company",
    slug: "founder",
    title: "The Founder",
    navLabel: "Founder",
    headline: "Jainam Jain",
    lead:
      "Mengo Engine was founded by Jainam Jain, who started the company at fourteen after watching business owners around him spend their days writing captions instead of building their companies.",
    summary:
      "Mengo Engine was founded by Jainam Jain — entrepreneur, TEDx speaker and leadership coach — at the age of fourteen.",
    seoTitle: "About the founder — Jainam Jain",
    seoDescription:
      "Mengo Engine was founded by Jainam Jain at fourteen. Entrepreneur, TEDx speaker and leadership coach, and Dubai's youngest AI startup founder.",
    updated: "2026-08-31",
    blocks: [
      { type: "heading", text: "Why Mengo exists" },
      { type: "text", text: "At fourteen, Jainam founded Mengo Engine to solve a problem he kept seeing in every business around him: marketing was slow, scattered and inconsistent. Founders were spending their days writing captions instead of building their companies." },
      { type: "text", text: "Mengo is his answer — a system that turns a few business inputs into a complete marketing structure: channel-specific strategy, campaign frameworks and lead conversion flows." },
      { type: "heading", text: "Milestones" },
      { type: "list", items: [
        "Dubai's youngest AI startup founder — founded Mengo Engine at 14",
        "National Young Achievers Award, honoured by Suryadatta Institutes, February 2025",
        "Change Your Life: Super Hero Award, presented by Bollywood actor Sonu Sood at LifeGurukul, January 2025",
        "Jain Baal Ratna and Jain Star Puraskar, honoured by Shrirampur Shree Sangh and Bhagwan Mahavir Swami Samiti, 2024",
        "Completed IGCSE 10th board exams at age 13",
        "TEDx speaker",
      ] },
      { type: "heading", text: "Speaker, coach, lifelong learner" },
      { type: "text", text: "Jainam delivers keynotes, webinars, workshops and seminars that help people, especially young people, build confidence, sharpen focus and turn potential into purpose. He mentors young minds to think like founders from day one." },
      { type: "quote", text: "Success is built not on what you achieve, but on the mindset you shape and the steps you take to turn your dreams into reality.", attribution: "Jainam Jain" },
      { type: "heading", text: "Invitations to speak" },
      { type: "text", text: "For keynotes, workshops, webinars, panels, or school and startup events, send the details through the contact page and the team will respond. His speaking, writing and other work sits at jainamjain.com." },
    ],
  },

  {
    kind: "company",
    slug: "responsible-ai",
    title: "Responsible AI",
    navLabel: "Responsible AI",
    headline: "What we will and will not do with client work",
    lead:
      "Agencies putting client material through a generative system take on real risks. This page states our position on each of them, including the ones that are uncomfortable for us.",
    summary:
      "Our position on accuracy, confidentiality, disclosure, human review and skill development, stated plainly enough to be quoted to a client.",
    seoTitle: "Responsible AI — Mengo's position for agencies",
    seoDescription:
      "Mengo's position on accuracy, client confidentiality, disclosure, required human review and the risks of generative tooling in agency client work.",
    updated: "2026-08-31",
    blocks: [
      { type: "text", text: "This page is written to be quotable. If a client asks how your agency handles this, you should be able to point at something specific rather than reassure them in general terms." },
      { type: "heading", text: "Human review is not optional" },
      { type: "text", text: "Every workflow published on this site has agency review as a required step, and every one of them opens and closes with the agency. That is a design decision, not a recommendation, because a review requirement expressed as guidance loses to a deadline and a review requirement expressed as a step does not." },
      { type: "heading", text: "We flag gaps rather than filling them" },
      { type: "text", text: "Where a draft needs a fact that was not supplied — a number, a date, a credential, a result — it marks the gap instead of producing something plausible. A visible gap takes thirty seconds to fill. A confident invention survives review and reaches a client." },
      { type: "heading", text: "We do not act on your clients' behalf" },
      { type: "list", items: [
        "We do not send email or messages. Sending happens in your client's own platform, under their own consent records and deliverability reputation.",
        "We do not publish to social or web accounts.",
        "We do not hold or spend advertising budget, and we do not touch ad accounts.",
        "We never contact your clients. There is no circumstance in which that would be appropriate.",
      ] },
      { type: "heading", text: "Client confidentiality" },
      { type: "text", text: "Material you supply is processed to produce your outputs. Client context is held per client and does not inform another client's work. If your client contracts restrict sub-processing or third-party disclosure, that is a question to settle before a pilot rather than after one — and we would rather you raised it early than discovered a conflict later." },
      { type: "heading", text: "Disclosure is your decision" },
      { type: "text", text: "Whether to tell a client how you deliver depends on your market and your contracts, and we are not in a position to set that policy for your agency. What we would say is that being unable to answer the question is worse than any answer. Decide your position, write it down, and make sure your client-facing people know it." },
      { type: "heading", text: "Risks we think are real" },
      { type: "terms", items: [
        { label: "Confident inaccuracy", body: "Generated text is fluent by construction and accurate only when the inputs support it. The mitigation is a reviewer who knows enough to spot a subtle error, not a proofreader." },
        { label: "Convergence", body: "If many agencies use similar tooling with similar inputs, output converges. What prevents that is the layer that was never generated: client insight, the strategic call and craft in the edit." },
        { label: "Skill atrophy", body: "A junior who never writes a first draft does not become a senior who can judge one. We think this is the least-discussed and possibly most consequential risk, and it argues for keeping some work deliberately manual." },
        { label: "Review decay", body: "When output is usually acceptable, attention drops. A review step that has become a formality is worse than no review, because it produces false confidence." },
      ] },
      { type: "heading", text: "What we do not claim" },
      { type: "list", items: [
        "We do not claim outcomes. There are no performance statistics on this site because we have none we could stand behind.",
        "We do not claim that review can be skipped, reduced or automated.",
        "We do not claim to replace expertise. An agency that cannot evaluate an output gets more work it cannot evaluate.",
        "We do not claim to be proven at scale. Mengo is early, and pretending otherwise would be the first thing a serious evaluator caught.",
      ] },
      { type: "note", text: "If you are evaluating Mengo through a procurement or compliance process and need detail beyond this page — processing locations, retention, sub-processors — ask us directly through the contact page rather than inferring it from this site." },
    ],
  },

  {
    kind: "company",
    slug: "contact",
    title: "Contact",
    navLabel: "Contact",
    headline: "Start a conversation",
    lead:
      "Whether you are evaluating this for a single account or for a delivery team, the useful first conversation is about what is actually breaking in your delivery rather than about features.",
    summary: "How to reach the Mengo team about agency use, evaluation, pilots or speaking enquiries.",
    seoTitle: "Contact Mengo",
    seoDescription:
      "Contact the Mengo team about agency use, scoped pilots, procurement questions or speaking enquiries.",
    updated: "2026-08-31",
    blocks: [
      { type: "heading", text: "What to expect" },
      { type: "text", text: "Expect to be asked what is actually broken in your delivery rather than to be sold to. Mengo is early and we are more interested in agencies with a specific problem than in a large pipeline of general interest." },
      { type: "heading", text: "Useful things to bring" },
      { type: "list", items: [
        "How many accounts you run, and roughly what each receives",
        "Where you believe your delivery time goes — and whether you have measured it",
        "What you have already tried, including what did not work",
        "Any contractual constraints on where client material may be processed",
        "What would have to be true for a pilot to count as successful",
      ] },
      { type: "heading", text: "For procurement and compliance" },
      { type: "text", text: "If you need detail on processing, retention or sub-processors for a review, say so in the first message and it will be routed rather than answered generically." },
      { type: "heading", text: "Speaking enquiries" },
      { type: "text", text: "For keynotes, workshops, panels or school and startup events with Jainam Jain, include the date, format and audience. His own site is at jainamjain.com." },
    ],
  },
];

export const companyBySlug = new Map(companyPages.map((c) => [c.slug, c]));

/**
 * Legal pages.
 *
 * These are structural placeholders. The headings are the ones a site of this
 * kind needs; the substance has to come from Mengo's own counsel. Shipping
 * plausible-sounding legal text would be exactly the behaviour the Responsible
 * AI page argues against.
 */
export const legalPages: LegalPage[] = [
  {
    kind: "legal",
    slug: "privacy",
    title: "Privacy",
    headline: "Privacy",
    lead: "How this site handles the information you give it.",
    summary: "Privacy information for this site.",
    updated: "2026-08-31",
    blocks: [
      { type: "note", text: "This page is a structural placeholder pending review by Mengo's counsel. It must be replaced with the approved policy before launch, and nothing on it should be relied upon in the meantime." },
      { type: "heading", text: "What this site collects" },
      { type: "text", text: "This site is a static publication. Information reaches Mengo only when you deliberately send it — for example through the contact page — and is used to respond to that enquiry." },
      { type: "heading", text: "Sections the published policy must cover" },
      { type: "list", items: [
        "What personal data is collected, and on what lawful basis",
        "How long it is retained and where it is stored",
        "Processors and sub-processors used",
        "How client material supplied to the product is handled",
        "Data subject rights and how to exercise them",
        "How to contact the data controller",
      ] },
    ],
  },
  {
    kind: "legal",
    slug: "terms",
    title: "Terms",
    headline: "Terms",
    lead: "The terms on which this site is published.",
    summary: "Terms of use for this site.",
    updated: "2026-08-31",
    blocks: [
      { type: "note", text: "This page is a structural placeholder pending review by Mengo's counsel. It must be replaced with approved terms before launch." },
      { type: "heading", text: "About this site" },
      { type: "text", text: "This site describes how Mengo can be used by marketing agencies. It is informational. Nothing on it forms an offer, a contract or a guarantee of any outcome, and the frameworks and playbooks published here are provided for you to adapt at your own discretion." },
      { type: "heading", text: "Sections the published terms must cover" },
      { type: "list", items: [
        "Acceptable use of the site and its published material",
        "Intellectual property in the frameworks and playbooks",
        "Limitation of liability",
        "Governing law and jurisdiction",
        "How changes to these terms are notified",
      ] },
    ],
  },
];

export const legalBySlug = new Map(legalPages.map((l) => [l.slug, l]));
