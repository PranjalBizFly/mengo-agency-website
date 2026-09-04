import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** Every destination list on the site, and whether its rows carry meaning. */
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith(".tsx") ? [p] : [];
  });
}

const flat = [];
const rich = [];

for (const file of walk("src/app")) {
  const source = readFileSync(file, "utf8");
  const re = /<(StoryRows|RelatedLinkList|IndexRows)[\s\S]{0,900}?\/>/g;
  let m;
  while ((m = re.exec(source))) {
    const line = source.slice(0, m.index).split("\n").length;
    const where = `${file.split("\\").join("/")}:${line}`;
    const block = m[0];
    const carries =
      block.includes("body:") ||
      block.includes("related(") ||
      /related(Capabilities|Workflows|Stages|UseCases|Playbooks)\(/.test(block) ||
      block.includes("items={siblings}") ||
      block.includes("summary");
    (carries ? rich : flat).push(`${where}  ${block.split("\n")[0].trim()}`);
  }
}

console.log(`bare lists (title only, no line of meaning): ${flat.length}`);
for (const x of flat) console.log("  " + x);
console.log(`\nlists that carry meaning: ${rich.length}`);
