/**
 * Route audit.
 *
 * Checks that what the build produced is exactly what the registry claims the
 * site publishes. A mismatch in either direction is a real defect: a route the
 * registry does not know about is missing from sitemap.xml, and a registry
 * entry with no page behind it is a broken link waiting in the navigation.
 *
 * The comparison runs against the rendered /sitemap page rather than by
 * importing the TypeScript registry, because that page is the registry's own
 * account of the site and reading it needs no loader.
 *
 * Run: node scripts/audit-routes.mjs   (after `next build`)
 */
import { existsSync, readFileSync } from "node:fs";
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

/** Build-output file path to the route it serves. */
function routeOf(file) {
  const path = file.slice(appDir.length).replace(/\\/g, "/").replace(/\.html$/, "");
  // Next writes the home page as index.html; every other route keeps its path.
  return path === "/index" || path === "" ? "/" : path;
}

const files = await htmlFiles(appDir);
const built = new Set(files.map(routeOf).filter((path) => path !== "/_not-found"));

const problems = [];
const sitemapFile = files.find((file) => routeOf(file) === "/sitemap");

if (!sitemapFile) {
  problems.push("The /sitemap page was not built, so the registry cannot be compared against the build.");
} else {
  const html = readFileSync(sitemapFile, "utf8");
  const listed = new Set(
    [...html.matchAll(/href="(\/[^"#?]*)"/g)]
      .map((match) => match[1].replace(/\/$/, "") || "/")
      .filter((path) => !path.startsWith("/_next") && !path.startsWith("/api")),
  );

  for (const path of built) {
    if (!listed.has(path)) {
      problems.push(`Built route ${path} is not listed in the registry — it will be missing from sitemap.xml`);
    }
  }
  for (const path of listed) {
    if (!built.has(path)) problems.push(`Registry lists ${path} but no page was built for it`);
  }

  console.log(`  ${built.size} routes built, ${listed.size} routes in the registry.`);
}

const groups = new Map();
for (const path of built) {
  const top = path === "/" ? "/ (home)" : `/${path.split("/")[1]}`;
  groups.set(top, (groups.get(top) ?? 0) + 1);
}

console.log("  By section:");
for (const [group, count] of [...groups.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${group.padEnd(16)} ${count}`);
}

if (problems.length > 0) {
  console.error(`\nRoute audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

console.log("\n✓ Route audit passed — the build and the registry agree.");
