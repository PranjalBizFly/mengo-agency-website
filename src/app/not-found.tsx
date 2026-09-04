import { Section, Heading, ButtonLink } from "@/components/ui/primitives";
import { StoryRows } from "@/components/ui/editorial";
import { routes } from "@/lib/site";

/**
 * 404.
 *
 * A dead end is the worst possible place to show a bare apology, so this
 * offers the six routes that cover most of what anyone arrives looking for.
 */
export default function NotFound() {
  return (
    <Section tone="paper" className="min-h-[60svh]">
      <div className="pt-10">
        <div className="h-[3px] w-16 bg-lime" aria-hidden />
        <Heading
          className="mt-9"
          kicker="404"
          title="That page is not here"
          lead="It may have moved, or the link may be wrong. These are the pages most people are looking for."
          size="d2"
          as="h1"
        />

        <StoryRows
          className="mt-14"
          columns={2}
          items={[
            { title: "Home", body: "The argument, in short.", href: routes.home() },
            { title: "Solutions", body: "Five stages, twenty-one goals. Find the one that describes your week.", href: routes.solutions() },
            { title: "How it works", body: "One client, followed all the way through.", href: routes.howItWorks() },
            { title: "Capabilities", body: "What Mengo helps with, and what it does not.", href: routes.capabilities() },
            { title: "Resources", body: "Frameworks and playbooks you can use on Monday.", href: routes.resources() },
            { title: "Sitemap", body: "Every page on this site.", href: routes.sitemapPage() },
          ]}
        />

        <div className="mt-14 flex flex-wrap gap-3">
          <ButtonLink href={routes.home()}>Back to the homepage</ButtonLink>
          <ButtonLink href={routes.contact()} variant="secondary">
            Tell us what you were looking for
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
