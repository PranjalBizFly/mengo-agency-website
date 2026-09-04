import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { generalFaqs, faqSections, totalFaqCount } from "@/data/faq";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
  { label: "FAQ", href: routes.faq() },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ — the questions asked before picking a section",
  description:
    "How Mengo works alongside an agency: the boundary, client disclosure, accuracy, what happens when output is wrong, and where every other answer on the site lives.",
  path: routes.faq(),
  kicker: "FAQ",
});

/**
 * The FAQ hub.
 *
 * The general questions in full, then an *index* of where every other answer
 * lives. That split is deliberate and was arrived at the hard way: expanding
 * all 369 questions produced a 44,000-pixel page with a 140-item contents
 * rail, which is not a reference but a wall. An index that says where an
 * answer is and how many are there is more useful than a page nobody can
 * navigate.
 *
 * Only the general set is emitted as FAQPage structured data. Marking up
 * every question on the site at once would be both enormous and a poor
 * description of what this page actually is.
 */
export default function FaqPage() {
  const sections = faqSections();
  const heroPhoto = photo("resources:faq:hero");
  const total = totalFaqCount();

  return (
    <>
      <JsonLd data={[breadcrumbSchema(TRAIL), faqSchema(generalFaqs)]} />

      <IndexHero
        trail={TRAIL}
        kicker="Questions"
        title="The ones asked before you have picked a section"
        lead="The positioning questions, the boundary questions and the awkward ones — about disclosure, accuracy and what we do not have — answered here in full."
        count={total}
        countLabel="questions across the site"
        note="Every other answer lives on the page it belongs to, where it has context around it. The index below says where."
      />

      {/* The general set, in full ---------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-start">
          <Heading kicker="General" title="Before anything else" size="d3" width="full" />
          <FaqList faqs={generalFaqs} />
        </div>
      </Section>

      {/* Where everything else lives -------------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="Everything else"
          title="Where each answer lives"
          lead="Section-specific questions sit on their own pages, with the context that makes them answerable. This is the index."
          size="d3"
        />

        <nav aria-label="Question sections" className="mt-12 rule-b pb-7">
          <ul className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <li key={section.heading}>
                <a
                  href={`#${slugify(section.heading)}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-small transition-colors hover:border-lime-deep hover:text-lime-deep"
                >
                  {section.heading}
                  <span className="ml-2 text-fine text-ink-soft">
                    {section.groups.reduce((n, g) => n + g.faqs.length, 0)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {sections.map((section) => (
          <section
            key={section.heading}
            id={slugify(section.heading)}
            className="mt-14"
            style={{ scrollMarginTop: "calc(var(--header-h) + 2rem)" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 rule-t pt-7">
              <h2 className="text-d4">{section.heading}</h2>
              <Link
                href={section.href}
                className="link-index text-small font-semibold text-lime-deep transition-colors hover:text-ink"
              >
                Browse the section →
              </Link>
            </div>
            <p className="mt-2.5 max-w-[52ch] text-body text-ink-soft">{section.note}</p>

            {/* An index rather than an accordion: the page it belongs to is
                where the question has context, so the link is the useful
                thing rather than the answer inlined here. */}
            <ul className="mt-7 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
              {section.groups.map((group) => (
                <li key={group.heading}>
                  <Link
                    href={group.href ?? routes.faq()}
                    className="link-index text-small text-ink-soft transition-colors hover:text-lime-deep"
                  >
                    {group.heading}
                    <span className="ml-2 text-fine text-ink-soft/70">{group.faqs.length}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Section>

      {heroPhoto ? (
        <Section tone="paper">
          <Figure
            photo={heroPhoto}
            aspect="21/9"
            drift
            context="Questions"
            caption="Every question asked anywhere on the site, gathered in one place and answered in full."
          />
        </Section>
      ) : null}
    </>
  );
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
