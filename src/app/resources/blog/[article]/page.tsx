import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, JsonLd } from "@/components/ui/primitives";
import { LongformHero } from "@/components/sections/heroes";
import { Blocks } from "@/components/sections/blocks";
import { Figure } from "@/components/ui/Photo";
import { Related } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { DocumentCta, PrevNext, neighboursOf } from "@/components/sections/longform";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { articles, articleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ article: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article: slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return {};
  return entityMetadata(article, { type: "article" });
}

const DATE = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

/** The journal archetype. Narrowest measure on the site, no interruptions. */
export default async function ArticlePage({ params }: { params: Promise<{ article: string }> }) {
  const { article: slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();

  const cover = photo(`article:${article.slug}:hero`);

  const { previous, next } = neighboursOf(articles, article.slug, routes.article);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Resources", href: routes.resources() },
    { label: "Journal", href: routes.blog() },
    { label: article.title, href: routes.article(article.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), articleSchema(article)]} />

      <LongformHero
        trail={trail}
        kicker={article.topic}
        title={article.headline}
        lead={article.lead}
        meta={[
          { label: "Published", value: DATE.format(new Date(article.published)) },
          { label: "Reading time", value: `${article.readingMinutes} minutes` },
        ]}
      />

      {cover ? (
        <Section tone="paper">
          <Figure
            photo={cover}
            aspect="21/9"
            drift
            context={article.topic}
            caption={article.summary}
          />
        </Section>
      ) : null}

      <Section tone="paper" as="div">
        <article className="max-w-[46rem]">
          <Blocks blocks={article.blocks} />
        </article>
      </Section>

      <Related
        tone="warm"
        kicker="Journal"
        title="More from the journal"
        items={articles
          .filter((other) => other.slug !== article.slug)
          .slice(0, 4)
          .map((other) => ({
            kicker: other.topic,
            title: other.title,
            body: other.summary,
            href: routes.article(other.slug),
          }))}
      />
      <PrevNext
        previous={previous}
        next={next}
        collectionLabel="Journal"
        collectionHref={routes.blog()}
      />

      <DocumentCta />
    </>
  );
}
