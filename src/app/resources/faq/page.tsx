import type { Metadata } from "next";
import Link from "next/link";

import { Section, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { generalFaqs, groupedFaqs } from "@/data/faq";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
  { label: "FAQ", href: routes.faq() },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ — every question on the site, in one place",
  description:
    "Questions about how Mengo works alongside an agency: the boundary, client disclosure, accuracy, what happens when output is wrong, and where to start.",
  path: routes.faq(),
  kicker: "FAQ",
});

/**
 * The FAQ hub.
 *
 * Built from the entity data rather than maintained separately, so a question
 * added to a workflow page appears here without anyone remembering to copy it
 * across — and so the hub cannot drift out of agreement with the pages it
 * collects from.
 *
 * Only the general group is emitted as FAQPage structured data. Marking up
 * every question on the site at once would be both enormous and a poor
 * representation of what this page is, which is an index.
 */
export default function FaqPage() {
  const groups = groupedFaqs();
  const heroPhoto = photo("resources:faq:hero");
  const total = groups.reduce((sum, group) => sum + group.faqs.length, 0);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(TRAIL), faqSchema(generalFaqs)]} />

      <IndexHero
        trail={TRAIL}
        kicker="Questions"
        title="Everything asked anywhere on this site"
        lead="Collected in one place and grouped by where it came from, including the awkward ones about disclosure, accuracy and what we do not have."
        count={total}
        countLabel="questions"
        note="Each group links back to the page it came from, where the question has more context around it."
      />

      <Section tone="paper" tight>
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:items-start">
          {/* A contents rail rather than a search box: twenty groups is
              navigable, and an index that works without JavaScript is worth
              more here than a filter that does not. */}
          <nav aria-label="Question groups" className="lg:sticky lg:top-32">
            <p className="label rule-b pb-4">Groups</p>
            <ul className="mt-4 space-y-0.5">
              {groups.map((group) => (
                <li key={group.heading}>
                  <a
                    href={`#faq-${slugify(group.heading)}`}
                    className="link-index text-small text-ink-soft transition-colors hover:text-lime-deep"
                  >
                    {group.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {groups.map((group) => (
              <section
                key={group.heading}
                id={`faq-${slugify(group.heading)}`}
                className="mt-16 first:mt-0"
                style={{ scrollMarginTop: "calc(var(--header-h) + 2rem)" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 className="text-d4">{group.heading}</h2>
                  {group.href ? (
                    <Link
                      href={group.href}
                      className="link-index text-small font-semibold text-lime-deep transition-colors hover:text-ink"
                    >
                      Open the page →
                    </Link>
                  ) : null}
                </div>
                <FaqList faqs={group.faqs} className="mt-7" />
              </section>
            ))}
          </div>
        </div>
      </Section>

      {heroPhoto ? (
        <Section tone="warm" tight>
          <Figure photo={heroPhoto} aspect="21/9" drift />
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
