import type { Metadata } from "next";
import Link from "next/link";

import { Section, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { articles } from "@/data/articles";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
  { label: "Journal", href: routes.blog() },
];

export const metadata: Metadata = pageMetadata({
  title: "Journal — writing about how agencies actually work",
  description:
    "Editorial pieces on agency operations: the real bottleneck, what should never be automated, writing your process down, hiring, consistency and hidden costs.",
  path: routes.blog(),
  kicker: "Journal",
});

const DATE = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });

/**
 * The journal index.
 *
 * Ordered by publication date rather than by any editorial ranking, and every
 * row shows its topic and date — a journal that hides when things were written
 * invites the assumption that it is not being kept up.
 */
export default function BlogPage() {
  const heroPhoto = photo("resources:blog:hero");

  const ordered = [...articles].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema("Journal", "Writing about agency operations.", routes.blog()),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Journal"
        title="Writing about how agencies actually work"
        lead="Positions rather than product notes. Two of these argue against things Mengo could plausibly be used for, which is the only reason a publisher's journal is worth reading."
        count={articles.length}
        countLabel="pieces"
      />

      <Section tone="paper">
        <ul data-reveal-stagger>
          {ordered.map((article) => (
            <li key={article.slug} data-reveal>
              <Link href={routes.article(article.slug)} className="group block rule-t py-9">
                <div className="grid gap-x-10 gap-y-4 lg:grid-cols-[minmax(0,9rem)_minmax(0,1fr)]">
                  <div className="flex flex-wrap items-baseline gap-x-4 lg:block">
                    <p className="label text-[0.6875rem]">{article.topic}</p>
                    <p className="mt-0 text-fine text-ink-soft lg:mt-2">
                      <time dateTime={article.published}>
                        {DATE.format(new Date(article.published))}
                      </time>
                    </p>
                  </div>
                  <div>
                    <h2 className="max-w-[32ch] type-title text-h5 transition-colors group-hover:text-lime-deep">
                      {article.title}
                    </h2>
                    <p className="mt-3 max-w-[58ch] text-body leading-relaxed text-ink-soft">
                      {article.lead}
                    </p>
                    <p className="mt-3 text-fine text-ink-soft">{article.readingMinutes} min read</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {heroPhoto ? (
        <Section tone="warm">
          <Figure
            photo={heroPhoto}
            aspect="21/9"
            drift
            context="The journal"
            caption="Arguments about delivery, capacity and the economics of the work — each one with a conclusion."
          />
        </Section>
      ) : null}
    </>
  );
}
