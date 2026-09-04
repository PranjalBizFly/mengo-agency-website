import type { Metadata } from "next";
import Link from "next/link";

import { Section, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { glossaryTerms } from "@/data/glossary";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
  { label: "Glossary", href: routes.glossary() },
];

export const metadata: Metadata = pageMetadata({
  title: "Glossary — agency delivery terms as an agency uses them",
  description:
    "Definitions of the terms used across this site: ownership ledger, structural work, review capacity, context reassembly, fixed cost per account and more.",
  path: routes.glossary(),
  kicker: "Glossary",
});

/**
 * The glossary index.
 *
 * Grouped alphabetically with a jump list, because a glossary is used by
 * lookup rather than by reading — and at twenty entries a jump list is the
 * difference between a reference and a long page.
 */
export default function GlossaryPage() {
  const ordered = [...glossaryTerms].sort((a, b) => a.title.localeCompare(b.title));

  const groups = new Map<string, typeof ordered>();
  for (const term of ordered) {
    const letter = term.title[0].toUpperCase();
    const bucket = groups.get(letter);
    if (bucket) bucket.push(term);
    else groups.set(letter, [term]);
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Glossary",
            "Agency delivery terms, defined as an agency uses them.",
            routes.glossary(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Reference"
        title="Terms as this trade uses them"
        lead="Each entry carries why it matters to an agency, not only what it means. Definitions that only define are the reason most glossaries go unread."
        count={glossaryTerms.length}
        countLabel="terms"
      />

      <Section tone="paper">
        {/* The jump list. Real links to real anchors, so it works without
            JavaScript and a keyboard user can tab through it. */}
        <nav aria-label="Jump to letter" className="rule-b pb-7">
          <ul className="flex flex-wrap gap-2">
            {[...groups.keys()].map((letter) => (
              <li key={letter}>
                <a
                  href={`#letter-${letter}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-small font-semibold transition-colors hover:border-lime-deep hover:text-lime-deep"
                >
                  {letter}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {[...groups.entries()].map(([letter, terms]) => (
          <section key={letter} className="mt-14 first:mt-12">
            <h2
              id={`letter-${letter}`}
              className="text-d4 text-lime-deep"
              style={{ scrollMarginTop: "calc(var(--header-h) + 2rem)" }}
            >
              {letter}
            </h2>
            <dl className="mt-6 grid gap-x-12 gap-y-0 lg:grid-cols-2" data-reveal-stagger>
              {terms.map((term) => (
                <div key={term.slug} className="rule-t py-6" data-reveal>
                  <dt>
                    <Link
                      href={routes.glossaryTerm(term.slug)}
                      className="type-title text-h6 transition-colors hover:text-lime-deep"
                    >
                      {term.title}
                    </Link>
                  </dt>
                  <dd className="mt-2.5 max-w-[52ch] text-body leading-relaxed text-ink-soft">
                    {term.summary}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </Section>
    </>
  );
}
