import Link from "next/link";
import { footerColumns, footerLegal } from "@/lib/nav";
import { routes, site } from "@/lib/site";
import { buttonClass } from "@/components/ui/primitives";

/**
 * The footer is the site's full index.
 *
 * It does not repeat the mega menu's curation — the menu selects, the footer
 * enumerates. Anyone who could not find something in the menu should find it
 * here without needing a search, which is the standard for a site of this size.
 *
 * The columns come from the content data, so a new capability appears here
 * automatically and can never be a link to a page that does not exist.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-forest text-sage-bright">
      {/* The closing action, on the footer's own ground rather than as a
          separate section — so every page ends the same way without every
          template having to remember to end it. */}
      <div className="wrap rule-b py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="kicker">Get started</p>
            <p className="mt-6 max-w-[24ch] text-d3 text-on-dark">Your agency stays the agency.</p>
            <p className="mt-5 max-w-[52ch] text-lead text-sage-bright">
              Start with one account. Decide what you are measuring before you begin.
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

      <div className="wrap py-14 md:py-16">
        <nav
          aria-label="Footer"
          className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
        >
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="label mb-4">
                {column.headingHref ? (
                  <Link href={column.headingHref} className="transition-colors hover:text-lime">
                    {column.heading}
                  </Link>
                ) : (
                  column.heading
                )}
              </p>
              <ul className="space-y-0.5">
                {column.links.map((link) => (
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
            </div>
          ))}
        </nav>
      </div>

      <div className="wrap rule-t py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[46rem]">
            <p className="text-fine text-sage">
              © {year} {site.legalName}. {site.name} is the agency-facing site for Mengo. The Mengo
              product site for business owners is at{" "}
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
