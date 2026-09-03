import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, Statement, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { frameworks } from "@/data/frameworks";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
  { label: "Frameworks", href: routes.frameworks() },
];

export const metadata: Metadata = pageMetadata({
  title: "Frameworks — structures agencies can adopt as their own",
  description:
    "Four reusable frameworks for agency delivery: the Ownership Ledger, the Client Delivery Spine, the Agency Capacity Model and the Standard Client Brief.",
  path: routes.frameworks(),
  kicker: "Frameworks",
});

/**
 * The frameworks index.
 *
 * Each row leads with the problem the framework resolves rather than its name,
 * because a framework's name means nothing on first encounter and its problem
 * is how a reader recognises whether it is theirs. The parts are listed
 * underneath so the shape is visible without opening the page.
 */
export default function FrameworksPage() {
  const heroPhoto = photo("resources:frameworks:hero");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Frameworks",
            "Reusable structures for agency delivery, published for agencies to adopt.",
            routes.frameworks(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Frameworks"
        title="Yours to adopt, rename and publish"
        lead="All four work with a pen and an afternoon. None of them require Mengo, which is the point — they are the part of this site's argument you can test without taking our word for anything."
        count={frameworks.length}
        countLabel="frameworks"
      />

      <Section tone="paper" tight>
        <ul data-reveal-stagger>
          {frameworks.map((framework) => (
            <li key={framework.slug} data-reveal>
              <Link href={routes.framework(framework.slug)} className="group block rule-t py-9">
                <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
                  <div>
                    <p className="label mb-3">{framework.title}</p>
                    <h2 className="max-w-[36ch] type-title text-h5 transition-colors group-hover:text-lime-deep">
                      {framework.problem}
                    </h2>
                  </div>
                  <div>
                    <p className="label mb-3 text-[0.6875rem]">Its parts</p>
                    <ol className="flex flex-wrap gap-x-2 gap-y-1.5 text-fine text-ink-soft">
                      {framework.parts.map((part, i) => (
                        <li key={part.label}>
                          {part.label}
                          {i < framework.parts.length - 1 ? (
                            <span aria-hidden className="ml-2 text-line">
                              ·
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {heroPhoto ? (
        <Section tone="warm" tight>
          <Figure photo={heroPhoto} aspect="21/9" drift />
        </Section>
      ) : null}

      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
          <Heading kicker="Licence" title="Take them" size="d3" width="full" />
          <Statement>
            Adapt them, rename them, teach them to your team, publish them under your own name. A
            framework that only works when you buy something was never a framework.
          </Statement>
        </div>
      </Section>
    </>
  );
}
