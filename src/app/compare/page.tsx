import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { comparisons } from "@/data/comparisons";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Compare", href: routes.compare() },
];

export const metadata: Metadata = pageMetadata({
  title: "Compare — Mengo against the options agencies actually weigh",
  description:
    "Honest comparisons against hiring, freelancers, carrying on as you are, and traditional agency tools — including when each of those is the better answer.",
  path: routes.compare(),
  kicker: "Compare",
});

/**
 * The comparisons hub.
 *
 * Each row leads with the question the reader is actually holding rather than
 * with the comparison's title, because "Mengo vs Hiring" tells someone nothing
 * they did not already know and "We need more delivery capacity — do we hire?"
 * tells them whether this page is theirs.
 */
export default function ComparePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Compare",
            "Honest comparisons against the alternatives agencies are actually weighing.",
            routes.compare(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Weighing it up"
        title="The alternatives you are actually choosing between"
        lead="Each of these names, in its own section, the situations where the other option is the better answer. A comparison without that section is an advertisement with a table in it."
        count={comparisons.length}
        countLabel="comparisons"
      />

      <Section tone="paper">
        <ul data-reveal-stagger>
          {comparisons.map((comparison) => (
            <li key={comparison.slug} data-reveal>
              <Link href={routes.comparison(comparison.slug)} className="group block rule-t py-9">
                <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                  <div>
                    <p className="label mb-3">{comparison.title}</p>
                    <h2 className="max-w-[30ch] type-title text-h5 transition-colors group-hover:text-lime-deep">
                      {comparison.question}
                    </h2>
                  </div>
                  <div>
                    <p className="label mb-2.5 text-[0.6875rem]">
                      Choose {comparison.other.toLowerCase()} when
                    </p>
                    <p className="max-w-[46ch] text-body leading-relaxed text-ink-soft">
                      {comparison.chooseOther[0].body}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <Heading kicker="Why these read this way" title="A comparison you cannot fail is not evidence" size="d3" width="full" />
          <div>
            <Statement>
              If every row favours us, the table is not telling you anything. It is telling you who
              wrote it.
            </Statement>
            <p className="mt-9 max-w-[46rem] text-body leading-relaxed text-sage-bright" data-reveal>
              The most useful of these four is probably the one against carrying on as you are,
              because that is the alternative most agencies are actually weighing — and it has the
              enormous advantage of already working.
            </p>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal>
              <ButtonLink href={routes.comparison("mengo-vs-manual-work")} variant="secondary">
                Mengo vs carrying on as you are
              </ButtonLink>
              <ButtonLink href={routes.getStarted()} variant="secondary">
                Get started
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
