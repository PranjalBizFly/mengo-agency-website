import { Section, Kicker, RelatedLinkList, TextLink } from "@/components/ui/primitives";
import { StoryRows, type StoryRowItem } from "@/components/ui/editorial";
import { routes } from "@/lib/site";
import { capabilityUrl } from "@/lib/registry";
import { capabilityBySlug } from "@/data/capabilities";
import { workflowBySlug } from "@/data/workflows";
import { stageBySlug } from "@/data/stages";
import { useCaseBySlug } from "@/data/use-cases";
import { playbookBySlug } from "@/data/playbooks";
import { groupBySlug } from "@/data/capability-groups";

/**
 * Internal linking, resolved from slugs.
 *
 * Every entity references related content by slug rather than by URL, so this
 * is the one place that turns a slug into a row. Two consequences worth
 * having: a rename is one edit, and a reference to something that does not
 * exist disappears rather than shipping a broken link — which matters more at
 * five hundred pages than it did at ninety.
 */

export function relatedCapabilities(slugs: string[]): StoryRowItem[] {
  return slugs
    .map((slug) => capabilityBySlug.get(slug))
    .filter((c) => c !== undefined)
    .map((c) => ({
      kicker: groupBySlug.get(c.group)?.title ?? "Capability",
      title: c.title,
      body: c.job,
      href: capabilityUrl(c.slug) ?? routes.capabilities(),
    }));
}

export function relatedWorkflows(slugs: string[]): StoryRowItem[] {
  return slugs
    .map((slug) => workflowBySlug.get(slug))
    .filter((w) => w !== undefined)
    .map((w) => ({ kicker: "Workflow", title: w.title, body: w.trigger, href: routes.workflow(w.slug) }));
}

export function relatedStages(slugs: readonly string[]): StoryRowItem[] {
  return slugs
    .map((slug) => stageBySlug.get(slug as never))
    .filter((s) => s !== undefined)
    .map((s) => ({ kicker: "Agency stage", title: s.title, body: s.shape, href: routes.stage(s.slug) }));
}

export function relatedUseCases(slugs: string[]): StoryRowItem[] {
  return slugs
    .map((slug) => useCaseBySlug.get(slug))
    .filter((u) => u !== undefined)
    .map((u) => ({ kicker: "Use case", title: u.title, body: u.situation, href: routes.useCase(u.slug) }));
}

export function relatedPlaybooks(slugs: string[]): StoryRowItem[] {
  return slugs
    .map((slug) => playbookBySlug.get(slug))
    .filter((p) => p !== undefined)
    .map((p) => ({ kicker: "Playbook", title: p.title, body: p.audience, href: routes.playbook(p.slug) }));
}

export interface RelatedGroup {
  heading: string;
  links: { href: string; label: string }[];
  seeAll?: { label: string; href: string };
}

/**
 * The quiet band before a page's closing action.
 *
 * Grouped columns with `text-h6` headings over dotted link rows — the product
 * site's rail, and deliberately quieter than the sections above it. A related
 * rail that shouts competes with the argument it is supposed to follow.
 */
export function Related({
  items,
  groups,
  title = "Keep reading",
  kicker = "Related",
  tone = "paper",
}: {
  /** A flat run, rendered as one group under `title`. */
  items?: StoryRowItem[];
  /** Distinct groups, each its own column. */
  groups?: RelatedGroup[];
  title?: string;
  kicker?: string;
  tone?: "paper" | "warm" | "deep";
}) {
  const resolved: RelatedGroup[] =
    groups ??
    (items && items.length > 0
      ? [{ heading: title, links: items.map((item) => ({ href: item.href, label: item.title })) }]
      : []);

  const populated = resolved.filter((group) => group.links.length > 0);
  if (populated.length === 0) return null;

  /* The grid takes the shape of what it holds. A fixed three-column rhythm
     left a single-group band sitting in one third of the page with two empty
     columns beside it. */
  const columns =
    populated.length >= 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : populated.length === 3
        ? "lg:grid-cols-3"
        : populated.length === 2
          ? "sm:grid-cols-2"
          : "";
  /* One group has no neighbour to sit beside, so its links take the columns
     instead — same rows, full measure. */
  const listColumns =
    populated.length === 1 ? "grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3" : "";

  return (
    <Section tone={tone}>
      <Kicker>{kicker}</Kicker>
      <div className={`mt-10 grid gap-x-12 gap-y-12 ${columns}`} data-reveal-stagger>
        {populated.map((group) => (
          <div key={group.heading} data-reveal>
            <h2 className="type-title text-h6 tracking-[-0.02em]">{group.heading}</h2>
            <RelatedLinkList links={group.links} className={`mt-3 ${listColumns}`} />
            {group.seeAll ? (
              <p className="mt-4 text-small">
                <TextLink href={group.seeAll.href}>{group.seeAll.label}</TextLink>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
