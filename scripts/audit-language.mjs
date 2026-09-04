import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

/** QA can build into a directory of its own; see distDir in next.config.ts. */
const DIST = process.env.NEXT_DIST_DIR || ".next";

/**
 * The language audit.
 *
 * The audience is the perspective this site is written from, not a keyword to
 * repeat. A page that says "agency" in its H1, its title, its breadcrumbs, its
 * navigation and its call to action is not communicating a perspective, it is
 * padding — and it reads as a template with a word swapped in.
 *
 * So this measures the word in the places where repetition is a defect:
 * headings, titles, descriptions and visible chrome. Body prose is not
 * capped — the subject genuinely is agency delivery, and refusing to name it
 * where it is load-bearing would be its own kind of dishonesty.
 *
 * Scripts and JSON-LD are stripped before counting. The canonical host is
 * agencies.mengoengine.com, which would otherwise contribute a dozen phantom
 * mentions to every page.
 */

const APP_DIR = `${DIST}/server/app`;

/* One H1 in fifteen is a page genuinely about the practice itself — the SOPs
   capability, the "not appropriate for a new agency" stage view. Above that
   and the word has become the template. */
const H1_LIMIT = 0.1;
const TITLE_LIMIT = 0.35;

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith(".html")) out.push(path);
  }
  return out;
}

const WORD = /\bagenc(y|ies)\b/gi;
const has = (text) => new RegExp(WORD.source, "i").test(text);
const count = (text) => (text.match(WORD) ?? []).length;

/** Visible prose only: no scripts, no JSON-LD, no attribute values, no URLs. */
function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ");
}

const files = await htmlFiles(APP_DIR);

let h1Hits = 0;
let titleHits = 0;
let descHits = 0;
let bodyTotal = 0;
const worstPages = [];
const sampleH1 = [];

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const h1 = visibleText(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").trim();
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const body = visibleText(html);

  if (has(h1)) {
    h1Hits += 1;
    if (sampleH1.length < 10) sampleH1.push(`${file.replace(APP_DIR, "")} — ${h1.slice(0, 66)}`);
  }
  if (has(title)) titleHits += 1;
  if (has(description)) descHits += 1;

  const inBody = count(body);
  bodyTotal += inBody;
  worstPages.push({ file: file.replace(APP_DIR, ""), inBody });
}

const n = files.length;
const share = (x) => x / n;
const pct = (x) => `${Math.round(share(x) * 100)}%`;

worstPages.sort((a, b) => b.inBody - a.inBody);

console.log(`\n  ${n} pages analysed.`);
console.log(`  H1 names the audience:          ${h1Hits} (${pct(h1Hits)})`);
console.log(`  Title names the audience:       ${titleHits} (${pct(titleHits)})`);
console.log(`  Description names the audience: ${descHits} (${pct(descHits)})`);
console.log(`  Mean mentions in visible prose: ${(bodyTotal / n).toFixed(1)}`);
console.log(`  Heaviest pages:`);
for (const page of worstPages.slice(0, 5)) {
  console.log(`    ${String(page.inBody).padStart(3)}  ${page.file}`);
}
if (sampleH1.length > 0) {
  console.log(`  H1s that name it:`);
  for (const line of sampleH1) console.log(`    ${line}`);
}

const problems = [];
if (share(h1Hits) > H1_LIMIT) {
  problems.push(
    `${pct(h1Hits)} of H1s name the audience (limit ${Math.round(H1_LIMIT * 100)}%). The perspective should be doing that work, not the heading.`,
  );
}
if (share(titleHits) > TITLE_LIMIT) {
  problems.push(
    `${pct(titleHits)} of titles name the audience (limit ${Math.round(TITLE_LIMIT * 100)}%).`,
  );
}

if (problems.length > 0) {
  console.log(`\nLanguage audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.log(`  ✗ ${problem}`);
  process.exit(1);
}

console.log(`\n✓ Language audit passed — the audience is the perspective, not the keyword.\n`);
