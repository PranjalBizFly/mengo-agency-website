import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { FigureMini } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { industries } from "@/data/industries";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Industries", href: routes.industries() },
];

export const metadata: Metadata = pageMetadata({
  title: "Industries — the client sectors agencies deliver into",
  description:
    "How marketing delivery differs by client sector, the operational pressure each one creates for an agency, and the constraints that must not be got wrong.",
  path: routes.industries(),
  kicker: "Industries",
});

/**
 * The industries hub.
 *
 * The one index on the site that leads with photographs, because sector is the
 * one dimension where a picture carries real information — a healthcare
 * communications room and an ecommerce warehouse office are recognisably
 * different working environments, and that difference is the page's subject.
 *
 * Each sector already owns exactly one photograph in the registry, so this
 * costs no new images and breaks no uniqueness rule: the hub links to the same
 * asset the page uses, at a different size, in the same run of the site.
 */
export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Industries",
            "Client sectors agencies deliver into, and how delivery differs in each.",
            routes.industries(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Client sectors"
        title="Your clients' sector changes the work more than its size does"
        lead="A software client and a healthcare client need the same delivery structure and almost nothing else in common. These pages start from what is genuinely distinctive about each."
        count={industries.length}
        countLabel="sectors"
        note="Every page names what is irreplaceably yours in that sector before it says anything about what Mengo carries."
      />

      <Section tone="paper" tight>
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {industries.map((industry) => {
            const cover = photo(`industry:${industry.slug}:hero`);
            return (
              <li key={industry.slug} data-reveal>
                <Link href={routes.industry(industry.slug)} className="group block">
                  {cover ? <FigureMini photo={cover} aspect="4/3" /> : null}
                  <h2 className="mt-6 type-title text-h5 transition-colors group-hover:text-lime-deep">
                    {industry.title}
                  </h2>
                  <p className="mt-3 text-body leading-relaxed text-ink-soft">{industry.summary}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <Heading
            kicker="A note on regulated sectors"
            title="Some of these need more than a review step"
            size="d3"
            width="full"
          />
          <div>
            <Statement>
              A system that produces fluent text about medicine, law or property particulars is a
              real risk, not a hypothetical one.
            </Statement>
            <p className="mt-9 max-w-[46rem] text-body leading-relaxed text-sage-bright" data-reveal>
              In healthcare, professional services and real estate the constraint is not editorial —
              it is regulatory, and the review has to be done by someone qualified to do it. Each of
              those pages carries a section saying so, and it is the most important part of the page.
            </p>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal>
              <ButtonLink href={routes.guide("using-ai-in-client-work-responsibly")} variant="secondary">
                Using AI in client work responsibly
              </ButtonLink>
              <ButtonLink href={routes.responsibleAi()} variant="secondary">
                Responsible AI
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
