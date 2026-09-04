import { readFileSync, writeFileSync } from "node:fs";

/**
 * Vary the heading scale on the entity templates.
 *
 * Each entry names the kicker of a band and the size its heading should open
 * at. Two or three bands per page carry the argument and get d3; the ones that
 * support them drop to eyebrow scale. The rest stay at d4. Matching on the
 * kicker rather than on a line number means this survives edits to the copy.
 */
const PLAN = {
  "src/app/workflows/[workflow]/page.tsx": {
    "The sequence": "d3",
    Checkpoints: "label",
    "What changes": "d3",
    "Draws on": "label",
  },
  "src/app/solutions/stages/[stage]/page.tsx": {
    "The situation": "d3",
    "What breaks": "d3",
    "What changes next": "label",
  },
  "src/app/solutions/use-cases/[goal]/page.tsx": {
    "The obstacle": "d3",
    "The approach": "d3",
    "What to expect": "label",
    Honestly: "label",
  },
  "src/app/industries/[industry]/page.tsx": {
    "The character of the sector": "d3",
    "Delivery pressure": "label",
    "Where Mengo helps": "d3",
    "In this sector": "label",
  },
  "src/app/compare/[comparison]/page.tsx": {
    "Side by side": "d3",
    "Choose the other": "label",
    "Choose Mengo": "label",
    "In practice": "d3",
  },
};

for (const [file, bands] of Object.entries(PLAN)) {
  let source = readFileSync(file, "utf8");
  let changed = 0;
  for (const [kicker, size] of Object.entries(bands)) {
    /* The heading's own size attribute is the first one after its kicker. */
    const re = new RegExp(`(kicker="${kicker}"[\\s\\S]{0,260}?)size="d[234]"`);
    const next = source.replace(re, `$1size="${size}"`);
    if (next !== source) {
      source = next;
      changed += 1;
    } else {
      console.log(`  ! no match: ${file} — ${kicker}`);
    }
  }
  writeFileSync(file, source);
  console.log(`${changed} bands rescaled in ${file}`);
}
