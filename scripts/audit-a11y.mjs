/**
 * Accessibility and SEO audit of the rendered HTML.
 *
 * This is the static half of the accessibility work — the half that can be
 * checked on every one of a hundred pages on every build. It catches the
 * failures that are structural and therefore systematic: a missing h1, a
 * skipped heading level, an unlabelled control, a duplicated title.
 *
 * It does not replace looking at the site in a browser with a keyboard, and it
 * is not meant to. Contrast, focus order and whether the reveal animation
 * leaves anything invisible are checked by hand.
 *
 * Run: node scripts/audit-a11y.mjs   (after `next build`)
 */
import { readFileSync, existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = join(root, ".next/server/app");

if (!existsSync(appDir)) {
  console.error("No build output. Run `next build` first.");
  process.exit(1);
}

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith(".html")) out.push(path);
  }
  return out;
}

const files = await htmlFiles(appDir);
const problems = [];
const titles = new Map();
const descriptions = new Map();

const text = (html) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const page = file.slice(appDir.length).replace(/\\/g, "/").replace(/\.html$/, "") || "/";
  const isNotFound = page === "/_not-found";

  /* --- Document ------------------------------------------------------- */

  if (!/<html[^>]*\blang="en"/.test(html)) problems.push(`${page}: <html> has no lang attribute`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) {
    problems.push(`${page}: no <title>`);
  } else if (!isNotFound) {
    const existing = titles.get(title);
    if (existing) problems.push(`${page}: duplicate <title>, shared with ${existing}`);
    else titles.set(title, page);
  }

  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!description && !isNotFound) {
    problems.push(`${page}: no meta description`);
  } else if (description && !isNotFound) {
    const existing = descriptions.get(description);
    if (existing) problems.push(`${page}: duplicate meta description, shared with ${existing}`);
    else descriptions.set(description, page);
    if (description.length > 175) problems.push(`${page}: meta description is ${description.length} characters`);
  }

  if (!isNotFound && !/<link rel="canonical"/.test(html)) {
    problems.push(`${page}: no canonical link`);
  }
  if (!isNotFound && !/property="og:title"/.test(html)) {
    problems.push(`${page}: no Open Graph title`);
  }

  /* --- Headings -------------------------------------------------------- */

  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>(.*?)<\/h\1>/gs)].map((match) => ({
    level: Number(match[1]),
    text: text(match[2]),
  }));

  const h1s = headings.filter((heading) => heading.level === 1);
  if (h1s.length === 0) problems.push(`${page}: no <h1>`);
  if (h1s.length > 1) problems.push(`${page}: ${h1s.length} <h1> elements`);

  let previous = 0;
  for (const heading of headings) {
    if (previous !== 0 && heading.level > previous + 1) {
      problems.push(
        `${page}: heading level jumps from h${previous} to h${heading.level} at "${heading.text.slice(0, 48)}"`,
      );
      break;
    }
    previous = heading.level;
  }

  for (const heading of headings) {
    if (heading.text.length === 0) problems.push(`${page}: an empty h${heading.level}`);
  }

  /* --- Controls -------------------------------------------------------- */

  for (const button of html.matchAll(/<button\b[^>]*>(.*?)<\/button>/gs)) {
    const [tag, inner] = button;
    const labelled = /aria-label="[^"]+"/.test(tag) || text(inner).length > 0;
    if (!labelled) problems.push(`${page}: a <button> with no accessible name`);
  }

  for (const anchor of html.matchAll(/<a\b[^>]*>(.*?)<\/a>/gs)) {
    const [tag, inner] = anchor;
    if (/aria-hidden="true"/.test(tag)) continue;
    const labelled = /aria-label="[^"]+"/.test(tag) || text(inner).length > 0;
    if (!labelled) problems.push(`${page}: a link with no accessible name`);
  }

  for (const input of html.matchAll(/<input\b[^>]*>/g)) {
    const tag = input[0];
    if (/type="(hidden|submit|button)"/.test(tag)) continue;
    if (!/aria-label=|aria-labelledby=|\bid="/.test(tag)) {
      problems.push(`${page}: an <input> with no label association`);
    }
  }

  /* --- Landmarks -------------------------------------------------------- */

  if (!/<main\b/.test(html)) problems.push(`${page}: no <main> landmark`);
  if (!/#main/.test(html)) problems.push(`${page}: no skip link`);

  const navs = [...html.matchAll(/<nav\b[^>]*>/g)];
  for (const nav of navs) {
    if (!/aria-label=|aria-labelledby=/.test(nav[0])) {
      problems.push(`${page}: a <nav> with no accessible name`);
      break;
    }
  }

  /* --- Images ----------------------------------------------------------- */

  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = img[0];
    if (!/\balt=/.test(tag)) problems.push(`${page}: an <img> with no alt attribute`);
    if (!/\bwidth=/.test(tag) || !/\bheight=/.test(tag)) {
      problems.push(`${page}: an <img> without intrinsic dimensions — this causes layout shift`);
    }
  }

  /* --- Motion safety ------------------------------------------------------
     Content ships visible and is only hidden under html.js-reveal. If a
     rendered page contained an inline opacity:0, a reader with JavaScript
     disabled would get a blank section. */
  if (/style="[^"]*opacity:\s*0/.test(html)) {
    problems.push(`${page}: inline opacity:0 in the served HTML — content would be invisible without JS`);
  }
}

console.log(`  ${files.length} pages checked.`);
console.log(`  ${titles.size} unique titles, ${descriptions.size} unique meta descriptions.`);

if (problems.length > 0) {
  const unique = [...new Set(problems)];
  console.error(`\nAccessibility audit failed with ${unique.length} problem(s):`);
  for (const problem of unique.slice(0, 40)) console.error(`  ✗ ${problem}`);
  if (unique.length > 40) console.error(`  … and ${unique.length - 40} more`);
  process.exit(1);
}

console.log("\n✓ Accessibility and SEO audit passed.");
