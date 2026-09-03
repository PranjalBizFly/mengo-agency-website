import type { Metadata } from "next";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { StoryRows } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { playbooks } from "@/data/playbooks";
import { guides } from "@/data/guides";
import { frameworks } from "@/data/frameworks";
import { articles } from "@/data/articles";
import { glossaryTerms } from "@/data/glossary";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
];

export const metadata: Metadata = pageMetadata({
  title: "Resources — frameworks, playbooks and writing on agency operations",
  description:
    "Frameworks to adopt under your own name, playbooks to work through on Monday, guides, a journal and a glossary of agency delivery terms.",
  path: routes.resources(),
  kicker: "Resources",
});

/**
 * The library.
 *
 * Composed as four parallel indexes rather than as a feed, because the
 * material is reference rather than news — nobody arrives wanting the most
 * recent thing, they arrive wanting the framework or the playbook.
 *
 * The claim in the middle section is the point of publishing any of this: every
 * framework and playbook here works without Mengo, and that is what makes the
 * argument on the rest of the site checkable at no cost.
 */
export default function ResourcesPage() {
  const heroPhoto = photo("resources:index:hero");

  const sections = [
    {
      heading: "Frameworks",
      href: routes.frameworks(),
      note: "Named structures to adopt and publish under your own name.",
      items: frameworks.map((f) => ({ title: f.title, body: f.problem, href: routes.framework(f.slug) })),
    },
    {
      heading: "Playbooks",
      href: routes.playbooks(),
      note: "Operational documents written to be worked through, not read.",
      items: playbooks.map((p) => ({ title: p.title, body: p.audience, href: routes.playbook(p.slug) })),
    },
    {
      heading: "Guides",
      href: routes.guides(),
      note: "Longer arguments about agency operations, with conclusions.",
      items: guides.map((g) => ({ title: g.title, body: g.audience, href: routes.guide(g.slug) })),
    },
    {
      heading: "Journal",
      href: routes.blog(),
      note: "Writing about how agencies actually work.",
      items: articles.map((a) => ({ title: a.title, body: a.topic, href: routes.article(a.slug) })),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Resources",
            "Frameworks, playbooks, guides and writing on agency delivery.",
            routes.resources(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Library"
        title="Things you can use whether or not you ever use Mengo"
        lead="Every framework and playbook here works on its own. That is deliberate: they are the part of the argument you can test on Monday, at no cost and with no conversation."
        count={frameworks.length + playbooks.length + guides.length + articles.length}
        countLabel="pieces, plus a glossary"
      />

      <Section tone="paper" tight>
        <div className="grid gap-x-14 gap-y-16 lg:grid-cols-2">
          {sections.map((section) => (
            <div key={section.heading}>
              <div className="rule-t pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 className="type-title text-h5">{section.heading}</h2>
                  <a
                    href={section.href}
                    className="link-index text-small font-semibold text-lime-deep transition-colors hover:text-ink"
                  >
                    All {section.heading.toLowerCase()} →
                  </a>
                </div>
                <p className="mt-2.5 text-body text-ink-soft">{section.note}</p>
              </div>
              <StoryRows className="mt-6" columns={1} items={section.items} />
            </div>
          ))}
        </div>
      </Section>

      {/* Why any of this is published --------------------------------- */}
      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="start" align="start">
          <Statement>
            If a framework only works when you buy something, it was never a framework.
          </Statement>
          <p className="mt-10 max-w-[46rem] text-lead text-sage-bright">
            The Ownership Ledger, the Client Delivery Spine, the Capacity Model and the Standard
            Client Brief are all usable with a pen and an afternoon. We publish them openly because
            an agency that adopts one and finds it useful has tested the argument on this site
            without taking our word for anything.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={routes.frameworks()} variant="secondary">
              The four frameworks
            </ButtonLink>
            <ButtonLink href={routes.glossary()} variant="secondary">
              Glossary
            </ButtonLink>
          </div>
          <Credit photo={heroPhoto} className="mt-12" />
        </PhotoSection>
      ) : null}

      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-2">
          <div>
            <Heading kicker="Reference" title="Glossary" size="d4" width="full" />
            <p className="mt-5 max-w-[42rem] text-body leading-relaxed text-ink-soft" data-reveal>
              {glossaryTerms.length} terms as an agency uses them, each with why it matters and —
              where a term is routinely confused with something else — what it is not.
            </p>
            <div className="mt-8" data-reveal>
              <ButtonLink href={routes.glossary()} variant="secondary">
                Open the glossary
              </ButtonLink>
            </div>
          </div>
          <div>
            <Heading kicker="Reference" title="FAQ" size="d4" width="full" />
            <p className="mt-5 max-w-[42rem] text-body leading-relaxed text-ink-soft" data-reveal>
              Every question asked anywhere on the site, collected in one place and grouped by where
              it came from — including the awkward ones about disclosure, accuracy and what happens
              when the output is wrong.
            </p>
            <div className="mt-8" data-reveal>
              <ButtonLink href={routes.faq()} variant="secondary">
                Open the FAQ
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
