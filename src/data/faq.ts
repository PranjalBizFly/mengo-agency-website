import type { Faq } from "@/lib/types";
import { stages } from "./stages";
import { capabilities } from "./capabilities";
import { workflows } from "./workflows";
import { industries } from "./industries";
import { useCases } from "./use-cases";
import { comparisons } from "./comparisons";

/**
 * The site-level FAQ.
 *
 * These are the questions asked before a reader has picked a section — the
 * positioning ones, the boundary ones and the awkward ones. Section-specific
 * questions live on their own pages and are collected into the FAQ hub by
 * `groupedFaqs` below, so the hub is exhaustive without duplicating anything.
 */
export const generalFaqs: Faq[] = [
  {
    q: "Does Mengo replace what my agency does?",
    a: "No, and the whole site is built around that boundary. The client relationship, the strategic recommendation, the final approval and accountability for what ships stay with the agency in every workflow published here. What Mengo carries is the structural layer behind those: research assembly, planning, briefs, drafts and sequence construction.",
  },
  {
    q: "How is this different from the Mengo product site?",
    a: "mengoengine.com sells to a business owner who is their own marketing function, where the positioning is an AI co-founder that runs your marketing. That positioning is wrong for an agency, because an agency already is the thing it replaces. Same underlying product, different argument, separate site.",
  },
  {
    q: "Will my clients know?",
    a: "That is your decision and your disclosure to make — it depends on your market and your contracts, and we cannot set that policy for you. What we would say is that being unable to answer the question when a client asks is worse than any answer. Our own position is on the Responsible AI page and it is written to be quotable.",
  },
  {
    q: "Does Mengo ever contact my clients?",
    a: "Never. Mengo does not send email, publish to accounts, hold ad spend or communicate with your clients under any circumstances. Sending and publishing happen in your own and your clients' tools, where deliverability and consent obligations sit.",
  },
  {
    q: "What if the output is wrong about a client's business?",
    a: "It will be sometimes, which is why review is a required step rather than a recommendation. Where a draft needs a fact that was not supplied it flags the gap instead of inventing something, but that mechanism only covers known gaps — a confident, plausible, wrong statement is exactly what a reviewer is there to catch.",
  },
  {
    q: "Do you have case studies or client results?",
    a: "No. Mengo is early and we do not have agency outcome data we could stand behind, so there are no testimonials, client logos or performance figures anywhere on this site. We would rather be visibly early than publish numbers we invented.",
  },
  {
    q: "Does this work for a one-person agency?",
    a: "It is one of the clearer cases, because a solo agency's constraint is hours and the structural layer is where most of them go. The honest caveat is the same as for everyone: it moves the constraint to your review capacity, and you are the only reviewer.",
  },
  {
    q: "What is the risk if we get this wrong?",
    a: "Producing more work than you can properly review. That results in consistent, unedited output across a larger portfolio, which damages a reputation faster than being at capacity does. Plan review capacity before volume.",
  },
  {
    q: "Does it handle design, video or media buying?",
    a: "No. The scope is written marketing work and the structure around it — research, planning, briefs, copy, sequences. Design, photography, video production, development and media placement are outside it.",
  },
  {
    q: "Can we use our own methodology and standards?",
    a: "You should. Your delivery standard, brief structure and review criteria are your intellectual property, and Mengo applies a structure rather than defining one. An agency without a clear view of what good looks like gets consistency without quality, which is not an improvement.",
  },
  {
    q: "What happens to the work if we stop using it?",
    a: "The written process, the standard and the client context you documented are yours and remain useful independently. That is a deliberate property of the frameworks published here: every one of them works without Mengo, which is also why we publish them openly.",
  },
  {
    q: "Where do we start?",
    a: "One account, run end to end through the relevant workflow, compared honestly against how that account was being delivered before. Decide what you are measuring before you begin. One account is enough to find the gaps and small enough that a wrong answer costs very little.",
  },
];

/** A named group of questions, for the FAQ hub. */
export interface FaqGroup {
  heading: string;
  href?: string;
  faqs: Faq[];
}

/**
 * Every question on the site, grouped by where it came from.
 *
 * Built from the entity data rather than maintained separately, so a question
 * added to a workflow page appears in the hub without anyone remembering to
 * copy it across.
 */
export function groupedFaqs(): FaqGroup[] {
  return [
    { heading: "General", faqs: generalFaqs },
    ...stages.map((s) => ({ heading: s.title, href: `/for-agencies/${s.slug}/`, faqs: s.faqs })),
    ...capabilities.map((c) => ({ heading: c.title, href: `/capabilities/${c.slug}/`, faqs: c.faqs })),
    ...workflows.map((w) => ({ heading: w.title, href: `/workflows/${w.slug}/`, faqs: w.faqs })),
    ...industries.map((i) => ({ heading: i.title, href: `/industries/${i.slug}/`, faqs: i.faqs })),
    ...useCases.map((u) => ({ heading: u.title, href: `/use-cases/${u.slug}/`, faqs: u.faqs })),
    ...comparisons.map((c) => ({ heading: c.title, href: `/compare/${c.slug}/`, faqs: c.faqs })),
  ].filter((group) => group.faqs.length > 0);
}
