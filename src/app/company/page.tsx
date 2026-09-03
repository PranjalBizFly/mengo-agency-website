import type { Metadata } from "next";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { StoryRows, MarkerList } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes, site } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { companyPages } from "@/data/company";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Company", href: routes.company() },
];

export const metadata: Metadata = pageMetadata({
  title: "Company — who builds Mengo, and what we will not do",
  description:
    "About Mengo, the founder, our Responsible AI position and how to get in touch. Including what we deliberately do not claim.",
  path: routes.company(),
  kicker: "Company",
});

/**
 * The company hub.
 *
 * Short, because there are four pages behind it. The section that earns its
 * place is the one stating what this site does not contain — it is the first
 * thing a sceptical reader will have noticed, and answering it before they ask
 * is worth more than another paragraph about the product.
 */
export default function CompanyIndexPage() {
  const heroPhoto = photo("company:index:hero");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema("Company", "About Mengo, the founder and our position.", routes.company()),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Company"
        title="Who builds this, and what we will not do with it"
        lead="Mengo is early. We would rather say that plainly than publish a client list we do not have."
        count={companyPages.length}
        countLabel="pages"
      />

      <Section tone="paper" tight>
        <StoryRows
          columns={1}
          items={companyPages.map((page) => ({
            title: page.title,
            body: page.summary,
            href: routes.companyPage(page.slug),
          }))}
        />
      </Section>

      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="start" align="start">
          <Statement>
            You will have noticed there are no logos on this site. That is not a design decision.
          </Statement>
          <div className="mt-11 grid gap-x-14 gap-y-9 md:grid-cols-2">
            <div>
              <p className="label mb-6">What this site does not contain</p>
              <MarkerList
                tone="warn"
                items={[
                  "Client logos or named customers",
                  "Testimonials or quotes from agencies",
                  "Case studies or reported results",
                  "Performance statistics or percentages",
                  "Awards, certifications or partnerships",
                ]}
              />
            </div>
            <div>
              <p className="label mb-6">Because</p>
              <p className="text-body leading-relaxed text-sage-bright">
                We do not have agency outcome data we could stand behind. Publishing invented
                figures would be the fastest way to lose exactly the readers we most want — the ones
                who check.
              </p>
              <p className="mt-5 text-body leading-relaxed text-sage-bright">
                What we publish instead is the mechanism, the limits and four frameworks you can
                test on Monday without speaking to us.
              </p>
            </div>
          </div>
          <div className="mt-11 flex flex-wrap gap-3">
            <ButtonLink href={routes.responsibleAi()} variant="secondary">
              Responsible AI
            </ButtonLink>
            <ButtonLink href={routes.frameworks()} variant="secondary">
              The frameworks
            </ButtonLink>
          </div>
          <Credit photo={heroPhoto} className="mt-12" />
        </PhotoSection>
      ) : null}

      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="Two properties" title="This site, and the product site" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            {site.name} is the agency-facing property. The Mengo product site for business owners —
            where the positioning is an AI co-founder that runs your marketing — is a separate site
            with a separate argument, and the two are never merged. Same underlying product,
            different reader.
          </p>
        </div>
        <div className="mt-11 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.contact()}>Contact us</ButtonLink>
          <a
            href={site.productSite}
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/25 px-7 type-button transition-colors hover:border-ink/55"
          >
            Visit mengoengine.com ↗
          </a>
        </div>
      </Section>
    </>
  );
}
