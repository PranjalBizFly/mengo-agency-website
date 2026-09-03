/**
 * Link audit.
 *
 * Reads the rendered HTML and checks every internal href against the set of
 * paths the site actually publishes. Static analysis of the source would miss
 * the links that matter most — the ones built from data at render time — which
 * is exactly where a renamed slug goes unnoticed.
 *
 * It also checks that external links carry rel="noopener", and that no page is
 * orphaned: reachable from nothing but the sitemap.
 *
 * Run: node scripts/audit-links.mjs   (after `next build`)
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

/** Every path the build actually produced, normalised without a trailing slash. */
const published = new Set(
  files.map((file) => {
    const path = file.slice(appDir.length).replace(/\\/g, "/").replace(/\.html$/, "");
    return path === "/index" || path === "" ? "/" : path;
  }),
);
// The not-found page is rendered but is not a route anyone links to.
published.delete("/_not-found");

const problems = [];
const incoming = new Map([...published].map((path) => [path, 0]));

const normalise = (href) => {
  const path = href.split("#")[0].split("?")[0];
  if (path === "" || path === "/") return "/";
  return path.replace(/\/$/, "");
};

let internal = 0;
let external = 0;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const page = normalise(file.slice(appDir.length).replace(/\\/g, "/").replace(/\.html$/, "") || "/");
  if (page === "/_not-found") continue;

  for (const match of html.matchAll(/<a\b[^>]*?href="([^"]+)"[^>]*>/g)) {
    const [tag, href] = match;

    if (/^(https?:)?\/\//.test(href)) {
      external += 1;
      if (/target="_blank"/.test(tag) && !/rel="[^"]*noopener/.test(tag)) {
        problems.push(`${page}: external link to ${href} opens in a new tab without rel="noopener"`);
      }
      continue;
    }

    // In-page anchors and non-navigational schemes.
    if (href.startsWith("#") || /^(mailto|tel|data):/.test(href)) continue;

    internal += 1;
    const target = normalise(href);
    if (!published.has(target)) {
      problems.push(`${page}: link to "${href}" — no such page`);
      continue;
    }
    if (target !== page) incoming.set(target, (incoming.get(target) ?? 0) + 1);
  }
}

/* A page reachable only from the sitemap is a page nobody finds. */
const orphans = [...incoming.entries()]
  .filter(([path, count]) => count === 0 && path !== "/")
  .map(([path]) => path);

for (const orphan of orphans) {
  problems.push(`${orphan} has no incoming internal links — it is only reachable from the sitemap`);
}

console.log(`  ${files.length} pages, ${internal} internal links, ${external} external links.`);
console.log(`  ${published.size} published paths, all reachable: ${orphans.length === 0 ? "yes" : "no"}.`);

if (problems.length > 0) {
  console.error(`\nLink audit failed with ${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 40)) console.error(`  ✗ ${problem}`);
  if (problems.length > 40) console.error(`  … and ${problems.length - 40} more`);
  process.exit(1);
}

console.log("\n✓ Link audit passed — every internal link resolves and every page is reachable.");
