import { Section, Heading } from "@/components/ui/primitives";
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

/** The closing section on an entity page. */
export function Related({
  items,
  title = "Keep reading",
  kicker = "Related",
  tone = "warm",
}: {
  items: StoryRowItem[];
  title?: string;
  kicker?: string;
  tone?: "paper" | "warm" | "deep";
}) {
  if (items.length === 0) return null;

  /* Full rhythm rather than tight. This closes a page, and the product site
     gives a closing rail the same breathing room as every other section — a
     long-form page measured 90px a side here against its 134px. */
  return (
    <Section tone={tone}>
      <Heading kicker={kicker} title={title} size="d4" />
      <StoryRows items={items} columns={2} className="mt-10" />
    </Section>
  );
}
