import type { Block } from "@/lib/types";
import { LedgerBlock, MarkerList, IndexRows, Spine } from "@/components/ui/editorial";
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
  /* A document that opens on prose gets that first paragraph set as a
     statement. One that opens on a heading or a device does not — there the
     structure is already doing the work, and enlarging the first sentence
     underneath it would fight the heading rather than introduce it. */
  const opensOnProse = blocks[0]?.type === "text";

  return (
    <div className={className}>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} opening={i === 0 && opensOnProse} />
      ))}
    </div>
  );
}

function BlockView({ block, opening = false }: { block: Block; opening?: boolean }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-16 max-w-[38rem] text-d4 first:mt-0" data-reveal>
          {block.text}
        </h2>
      );

    case "text":
      return opening ? (
        <p className="max-w-[46rem] text-d4 leading-[1.45] tracking-[-0.015em] text-ink" data-reveal>
          {block.text}
        </p>
      ) : (
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
