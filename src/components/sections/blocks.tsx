import type { Block } from "@/lib/types";
import { LedgerBlock, MarkerList, IndexRows, Spine, SpineKey } from "@/components/ui/editorial";
import { Statement } from "@/components/ui/primitives";

/**
 * The long-form renderer.
 *
 * Playbooks, guides, frameworks, journal pieces and company pages all share
 * one block vocabulary. The editorial devices are available inside long-form —
 * a playbook can carry a real ledger or a real spine rather than describing
 * one in prose — which is what stops the resource section reading as a
 * different, plainer website bolted onto the front one.
 *
 * Prose blocks are held to a reading measure; structural blocks are allowed
 * the full column, because a spine or a ledger constrained to 44rem stops
 * working as a diagram.
 */
export function Blocks({ blocks, className = "" }: { blocks: Block[]; className?: string }) {
  return (
    <div className={className}>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-16 max-w-[38rem] text-d4 first:mt-0" data-reveal>
          {block.text}
        </h2>
      );

    case "text":
      return (
        <p className="mt-6 max-w-[44rem] text-prose text-ink-soft" data-reveal>
          {block.text}
        </p>
      );

    case "list":
      return <MarkerList items={block.items} className="mt-7 max-w-[44rem]" />;

    case "terms":
      return <IndexRows items={block.items} columns={1} className="mt-10" />;

    case "steps":
      return (
        <div className="mt-10" data-reveal>
          <SpineKey className="mb-7" />
          <Spine steps={block.items} />
        </div>
      );

    case "ledger":
      return <LedgerBlock ledger={block.ledger} className="mt-12" />;

    case "quote":
      return <Statement attribution={block.attribution} className="my-14">{block.text}</Statement>;

    /**
     * A note is an aside the reader should not skim past — a caveat, a
     * limitation, the thing that makes the section above safe to act on. It
     * gets a quiet surface rather than a warning colour, because most of these
     * are precision rather than danger.
     */
    case "note":
      return (
        <aside className="surface-quiet mt-10 max-w-[44rem] border-l-2 border-lime px-6 py-5" data-reveal>
          <p className="text-body leading-relaxed text-ink-soft">{block.text}</p>
        </aside>
      );
  }
}
