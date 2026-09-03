import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, JsonLd } from "@/components/ui/primitives";
import { LongformHero } from "@/components/sections/heroes";
import { Blocks } from "@/components/sections/blocks";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { legalPages, legalBySlug } from "@/data/company";

export function generateStaticParams() {
  return legalPages.map((page) => ({ page: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: slug } = await params;
  const page = legalBySlug.get(slug);
  if (!page) return {};
  return entityMetadata(page);
}

const DATE = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

/**
 * Legal pages.
 *
 * These are structural placeholders and they say so in the first block on the
 * page. Publishing plausible-sounding legal text under a real company's name
 * would be precisely the behaviour the Responsible AI page argues against, so
 * the headings a site of this kind needs are here and the substance is marked
 * for Mengo's own counsel.
 */
export default async function LegalPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: slug } = await params;
  const page = legalBySlug.get(slug);
  if (!page) notFound();

  const trail = [
    { label: "Home", href: routes.home() },
    { label: page.title, href: routes.legal(page.slug) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <LongformHero
        trail={trail}
        kicker="Legal"
        title={page.headline}
        lead={page.lead}
        meta={[{ label: "Last updated", value: DATE.format(new Date(page.updated)) }]}
      />

      <Section tone="paper" tight as="div">
        <article className="max-w-[46rem]">
          <Blocks blocks={page.blocks} />
        </article>
      </Section>
    </>
  );
}
