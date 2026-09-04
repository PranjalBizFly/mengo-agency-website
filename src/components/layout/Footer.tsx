import Link from "next/link";
import { footerColumns, footerFindAnything, footerLegal } from "@/lib/nav";
import { routes, site } from "@/lib/site";
import { FooterColumns } from "@/components/layout/FooterNav";
import { Logo } from "@/components/layout/Logo";
import { SearchTrigger } from "@/components/search/Search";
import { buttonClass } from "@/components/ui/primitives";

/**
 * One footer, in four registers.
 *
 * A closing statement with the site's one action, then a brand column beside
 * the curated section columns, then the two ways to find anything, then the
 * legal line — each separated by the same hairline at the same rhythm and each
 * one step quieter than the last. That is what makes it read as the end of the
 * page rather than as a sitemap somebody pasted underneath it.
 *
 * The rule the structure enforces is *curated, then carried*. Every column is
 * the length a reader will actually scan and ends in the route holding the
 * rest: six industries of ten, then "All industries". The complete inventory
 * lives at /explore/, which is built for it, and the columns are generated
 * from the content so they cannot link to a page that does not exist.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative isolate overflow-hidden bg-forest text-sage-bright">
      {/* A brand hairline across the top edge — the one place the lime runs the
          full width of the page. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-lime-deep)_18%,var(--color-lime)_50%,var(--color-lime-deep)_82%,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(52%_70%_at_12%_0%,rgb(163_230_37/0.09),transparent_60%)]"
      />

      {/* Without JavaScript the accordion cannot open, so the lists it would
          collapse are shown instead. A footer that hides fifty links from a
          reader with scripting off is worse than a long one. */}
      <noscript>
        <style>{`.footer-links{display:block !important}`}</style>
      </noscript>

      {/* 1 — The closing statement. On the footer's own ground rather than as a
          separate section, so every page ends the same way without every
          template having to remember to end it. */}
      <div className="wrap rule-b py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="kicker">Get started</p>
            <p className="mt-7 max-w-[16ch] text-d2 leading-[1.02] text-on-dark">{site.promise}</p>
            <p className="mt-7 max-w-[46rem] text-lead text-sage-bright">
              Start with one account and one workflow. Decide what you are measuring before you
              begin, and compare it honestly against how that account was being delivered before.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={routes.getStarted()} className={buttonClass("primary")}>
              Get started
            </Link>
            <Link href={routes.contact()} className={buttonClass("secondary")}>
              Talk to us
            </Link>
          </div>
        </div>
      </div>

      {/* 2 — The map: the brand statement beside the section columns. */}
      <div className="wrap py-14 md:py-16">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,17rem)_1fr] xl:gap-16">
          <div data-reveal>
            <Logo tone="light" href={null} />
            <p className="mt-6 max-w-[26rem] text-body leading-relaxed text-sage-bright">
              Mengo works alongside the agency, not in place of it. You keep the clients, the
              strategy and the final call; Mengo carries the research, planning, content systems and
              follow-up behind them.
            </p>
            <Link
              href={routes.why()}
              className="link-index mt-5 text-small font-semibold text-lime transition-colors hover:text-lime-bright"
            >
              Why Mengo →
            </Link>
          </div>

          <FooterColumns columns={footerColumns} />
        </div>
      </div>

      {/* 3 — Find anything. Its own quiet band: this is navigation about
          navigation, and it is the register that stops a reader giving up on a
          site of this size. */}
      <section className="wrap rule-t py-10">
        <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,17rem)_1fr] lg:items-start xl:gap-16">
          <h2 className="label">Find anything</h2>
          <div className="grid gap-x-12 gap-y-5 md:grid-cols-[auto_1fr] md:items-start">
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              <li>
                <SearchTrigger variant="line" className="text-sage-bright" />
              </li>
              {footerFindAnything.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-index text-small text-sage-bright transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="max-w-[52ch] text-fine leading-relaxed text-sage">
              Every page is organised in the directory and can be filtered by type, capability,
              stage, industry and topic.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — The legal register. */}
      <div className="wrap rule-t py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[46rem]">
            <p className="text-fine text-sage">
              © {year} {site.legalName}. This site is written for the people running the agency. The
              Mengo product site for business owners is at{" "}
              <a
                href={site.productSite}
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-lime"
              >
                mengoengine.com
              </a>
              .
            </p>
            <p className="mt-3 text-fine text-sage">
              Photography licensed from Unsplash and credited in place. This site publishes no
              testimonials, client names or performance figures, because we have none we could
              stand behind.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLegal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-index text-fine text-sage transition-colors hover:text-lime"
              >
                {link.label}
              </Link>
            ))}
            {site.social.map((social) => (
              <a
                key={social.href}
                href={social.href}
                rel="noopener noreferrer"
                className="link-index text-fine text-sage transition-colors hover:text-lime"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
