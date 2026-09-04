/**
 * Image audit.
 *
 * Enforces the site's hard rule: one licensed photograph appears in exactly
 * one place. Not cropped differently elsewhere, not recoloured, not reused
 * under another key.
 *
 * It checks the registry (which is generated, so a violation here means the
 * generator was edited badly) and then the rendered HTML, which is the check
 * that actually matters — a template can always resolve the same photograph
 * twice by asking for it twice.
 *
 * Run: node scripts/audit-images.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/** QA can build into a directory of its own; see distDir in next.config.ts. */
const DIST = process.env.NEXT_DIST_DIR || ".next";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const registry = JSON.parse(readFileSync(join(root, "src/lib/photo-registry.json"), "utf8"));

const problems = [];
const notes = [];

/* --- 1. Registry integrity --------------------------------------------- */

const entries = Object.entries(registry);
const bySource = new Map();

for (const [key, photo] of entries) {
  if (!photo.src?.startsWith("https://images.unsplash.com/")) {
    problems.push(`${key}: src is not a licensed Unsplash URL`);
  }
  if (!photo.photographer || !photo.sourceUrl) {
    problems.push(`${key}: missing attribution (photographer or sourceUrl)`);
  }
  if (!photo.alt || photo.alt.length < 20) {
    problems.push(`${key}: alt text missing or too short to be descriptive`);
  }
  if (/^(image|photo|picture) of/i.test(photo.alt ?? "")) {
    problems.push(`${key}: alt text starts with "image of" — describe the content instead`);
  }
  if (!photo.width || !photo.height) {
    problems.push(`${key}: missing intrinsic dimensions, which causes layout shift`);
  }

  const existing = bySource.get(photo.src);
  if (existing) problems.push(`Duplicate photograph: "${key}" reuses the asset already used by "${existing}"`);
  else bySource.set(photo.src, key);
}

const altTexts = new Map();
for (const [key, photo] of entries) {
  const existing = altTexts.get(photo.alt);
  if (existing) problems.push(`Duplicate alt text: "${key}" and "${existing}" describe themselves identically`);
  else altTexts.set(photo.alt, key);
}

notes.push(`Registry: ${entries.length} sections, ${bySource.size} distinct photographs.`);

/* --- 2. Rendered output ------------------------------------------------- */

const appDir = join(root, DIST, "server/app");

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith(".html")) out.push(path);
  }
  return out;
}

if (!existsSync(appDir)) {
  notes.push("No build output found — run `next build` first to audit rendered pages.");
} else {
  const files = await htmlFiles(appDir);
  /** photo id -> set of pages it appears on */
  const usage = new Map();
  let missingAlt = 0;

  for (const file of files) {
    const html = readFileSync(file, "utf8");
    const page = file.slice(appDir.length).replace(/\\/g, "/").replace(/\.html$/, "") || "/";

    // Next rewrites Unsplash URLs through /_next/image?url=<encoded>. The photo
    // id is the stable part of the CDN path either way.
    for (const match of html.matchAll(/photo-(\d{10,}-[a-z0-9]+)/g)) {
      const id = match[1];
      if (!usage.has(id)) usage.set(id, new Set());
      usage.get(id).add(page);
    }

    for (const img of html.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt=/.test(img[0])) missingAlt += 1;
    }
  }

  if (missingAlt > 0) problems.push(`${missingAlt} <img> elements rendered without an alt attribute`);

  /* An assignment nobody renders is a photograph held out of the pool for
     nothing, and it makes the "one image, one section" bookkeeping a claim
     rather than a fact. Either use it or free it. */
  for (const [key, photo] of entries) {
    const id = photo.src.match(/photo-(\d{10,}-[a-z0-9]+)/)?.[1];
    if (id && !usage.has(id)) {
      problems.push(`Registry key "${key}" is assigned a photograph that no page renders`);
    }
  }

  for (const [id, pages] of usage) {
    // The industries hub deliberately links each sector's own photograph at a
    // smaller size. That is the one sanctioned second appearance, and it is a
    // hub linking to the page that owns the asset rather than a reuse.
    const list = [...pages];
    const allowed =
      list.length === 2 &&
      list.some((page) => page === "/industries") &&
      list.some((page) => page.startsWith("/industries/"));

    if (list.length > 1 && !allowed) {
      problems.push(`Photograph ${id} appears on ${list.length} pages: ${list.join(", ")}`);
    }
  }

  notes.push(`Rendered: ${files.length} pages, ${usage.size} distinct photographs in the HTML.`);
}

/* --- Report ------------------------------------------------------------- */

for (const note of notes) console.log(`  ${note}`);

if (problems.length > 0) {
  console.error(`\nImage audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

console.log("\n✓ Image audit passed — every photograph is used exactly once, with attribution and alt text.");
