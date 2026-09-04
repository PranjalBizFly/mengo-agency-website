import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, JsonLd } from "@/components/ui/primitives";
import { LongformHero } from "@/components/sections/heroes";
import { Blocks } from "@/components/sections/blocks";
import { Figure } from "@/components/ui/Photo";
import { Related } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { companyPages, companyBySlug } from "@/data/company";

export function generateStaticParams() {
  return companyPages.map((page) => ({ page: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: slug } = await params;
  const page = companyBySlug.get(slug);
  if (!page) return {};
  return entityMetadata(page);
}

/**
 * The company archetype.
 *
 * Long-form with a wider measure than the journal, because these pages carry
 * ledgers and lists rather than continuous prose. Responsible AI in particular
 * is written to be read by someone's procurement function, so it gets the same
 * treatment as any other document rather than a special one.
 */
export default async function CompanyPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: slug } = await params;
  const page = companyBySlug.get(slug);
  if (!page) notFound();

  const cover = photo(`company:${page.slug}:hero`);
  const second = photo(`company:${page.slug}:principles`);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Company", href: routes.company() },
    { label: page.title, href: routes.companyPage(page.slug) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <LongformHero trail={trail} kicker="Company" title={page.headline} lead={page.lead} />

      {cover ? (
        <Section tone="paper" tight>
          <Figure
            photo={cover}
            aspect="21/9"
            drift
            context={page.navLabel ?? page.title}
            caption={page.summary}
          />
        </Section>
      ) : null}

      <Section tone="paper" tight as="div">
        <article className="max-w-[56rem]">
          <Blocks blocks={page.blocks} />
        </article>
      </Section>

      {second ? (
        <Section tone="warm" tight>
          <Figure
            photo={second}
            aspect="21/9"
            drift
            context="How this is meant to be used"
            caption={page.lead}
          />
        </Section>
      ) : null}

      <Related
        tone={second ? "paper" : "warm"}
        kicker="Company"
        title="More from us"
        items={companyPages
          .filter((other) => other.slug !== page.slug)
          .map((other) => ({
            title: other.title,
            body: other.summary,
            href: routes.companyPage(other.slug),
          }))}
      />
    </>
  );
}
