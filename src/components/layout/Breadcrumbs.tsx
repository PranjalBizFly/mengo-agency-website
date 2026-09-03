import Link from "next/link";

export interface Crumb {
  label: string;
  href: string;
}

/**
 * The trail.
 *
 * On a site with six content types nested two deep, this is doing real
 * navigational work rather than decorating the top of a page — so it stays a
 * list, and the current page is the last item rather than a link to itself.
 */
export function Breadcrumbs({ trail, className = "" }: { trail: Crumb[]; className?: string }) {
  if (trail.length === 0) return null;
  const last = trail[trail.length - 1];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      {/* The negative block margin keeps the visual row as tight as it looks
          while the links themselves carry the touch padding that `link-index`
          adds under a coarse pointer. */}
      <ol className="-my-1 flex flex-wrap items-center gap-x-2 text-fine text-ink-soft">
        {trail.slice(0, -1).map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <Link href={crumb.href} className="link-index transition-colors hover:text-lime-deep">
              {crumb.label}
            </Link>
            <span aria-hidden className="text-line">
              /
            </span>
          </li>
        ))}
        <li aria-current="page" className="text-ink">
          {last.label}
        </li>
      </ol>
    </nav>
  );
}
