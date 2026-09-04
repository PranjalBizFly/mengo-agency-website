import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, Heading, Statement, JsonLd } from "@/components/ui/primitives";
import { NumberedRows } from "@/components/ui/editorial";
import { LongformHero } from "@/components/sections/heroes";
import { Blocks } from "@/components/sections/blocks";
import { Figure } from "@/components/ui/Photo";
import { Related, relatedWorkflows, relatedPlaybooks } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { DocumentCta, PrevNext, neighboursOf } from "@/components/sections/longform";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, documentSchema } from "@/seo/schema";
import { frameworks, frameworkBySlug } from "@/data/frameworks";

export function generateStaticParams() {
  return frameworks.map((framework) => ({ framework: framework.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ framework: string }>;
}): Promise<Metadata> {
  const { framework: slug } = await params;
  const framework = frameworkBySlug.get(slug);
  if (!framework) return {};
  return entityMetadata(framework, { type: "article" });
}

/**
 * The framework archetype.
 *
 * Distinguished from a guide by the parts section: a framework has named
 * components, and setting them out as a numbered index before the body is what
 * makes the thing adoptable rather than merely readable.
 *
 * These pages carry an explicit licence to reuse. A framework an agency cannot
 * publish under its own name is a product feature with a diagram.
 */
export default async function FrameworkPage({
  params,
}: {
  params: Promise<{ framework: string }>;
}) {
  const { framework: slug } = await params;
  const framework = frameworkBySlug.get(slug);
  if (!framework) notFound();

  const cover = photo(`framework:${framework.slug}:hero`);

  const { previous, next } = neighboursOf(frameworks, framework.slug, routes.framework);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Resources", href: routes.resources() },
    { label: "Frameworks", href: routes.frameworks() },
    { label: framework.title, href: routes.framework(framework.slug) },
  ];

  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(trail), documentSchema(framework, routes.framework(framework.slug))]}
      />

      <LongformHero trail={trail} kicker="Framework" title={framework.headline} lead={framework.lead} />

      {/* The problem it resolves ---------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-start">
          <Heading kicker="The problem" title="What this resolves" size="d4" width="full" />
          <Statement>{framework.problem}</Statement>
        </div>
      </Section>

      {/* The parts -------------------------------------------------------- */}
      <Section tone="paper">
        <Heading
          kicker="The framework"
          title="Its parts"
          lead="Each part does one job. A framework whose components overlap is a diagram, not a method."
          size="d3"
        />
        <NumberedRows items={framework.parts} columns={1} className="mt-14" />
      </Section>

      {cover ? (
        <Section tone="paper">
          <Figure
            photo={cover}
            aspect="21/9"
            drift
            context="The problem it addresses"
            caption={framework.problem}
          />
        </Section>
      ) : null}

      {/* The body --------------------------------------------------------- */}
      <Section tone="paper" as="div">
        <article className="max-w-[52rem]">
          <Blocks blocks={framework.blocks} />
        </article>
      </Section>

      {/* Licence ----------------------------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-start">
          <Heading kicker="Use it" title="This is yours" size="d4" width="full" />
          <p className="max-w-[48rem] text-lead text-sage-bright" data-reveal>
            Adapt it, rename it, publish it under your own name, teach it to your team. It works
            with a pen and an afternoon and does not require Mengo. That is deliberate — a framework
            that only works when you buy something was never a framework.
          </p>
        </div>
      </Section>

      <Related
        tone="warm"
        kicker="Related"
        title="Where this is applied"
        items={[
          ...relatedWorkflows(framework.related.workflows),
          ...relatedPlaybooks(framework.related.playbooks),
          ...frameworks
            .filter((other) => other.slug !== framework.slug)
            .slice(0, 2)
            .map((other) => ({
              kicker: "Framework",
              title: other.title,
              body: other.problem,
              href: routes.framework(other.slug),
            })),
        ]}
      />
      <PrevNext
        previous={previous}
        next={next}
        collectionLabel="Frameworks"
        collectionHref={routes.frameworks()}
      />

      <DocumentCta />
    </>
  );
}
