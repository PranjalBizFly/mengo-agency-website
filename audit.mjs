import { readFileSync, readdirSync } from "node:fs";
const DIST = process.env.NEXT_DIST_DIR || ".next";
function walk(d, out = []) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = `${d}/${e.name}`;
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}
const text = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, " ")
   .replace(/<style[\s\S]*?<\/style>/gi, " ")
   .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
   .replace(/<header[\s\S]*?<\/header>/gi, " ")
   .replace(/<[^>]*>/g, " ")
   .replace(/\s+/g, " ").trim();

const rows = [];
for (const file of walk(`${DIST}/server/app`)) {
  const html = readFileSync(file, "utf8");
  const route = file.replace(`${DIST}/server/app`, "").replace(/\.html$/, "") || "/";
  const main = (html.match(/<main[\s\S]*?<\/main>/) ?? [html])[0];
  rows.push({
    route,
    words: text(main).split(" ").filter(Boolean).length,
    sections: (main.match(/<section/g) ?? []).length,
    h2: (main.match(/<h2/g) ?? []).length,
    h3: (main.match(/<h3/g) ?? []).length,
    links: new Set([...main.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1])).size,
    imgs: (main.match(/<img/g) ?? []).length,
  });
}

const kind = (r) => {
  if (r === "/index" || r === "/") return "home";
  if (/^\/capabilities\/[^/]+\/[^/]+\/for\//.test(r)) return "capability×stage";
  if (/^\/capabilities\/[^/]+\/[^/]+$/.test(r)) return "capability";
  if (/^\/capabilities\/[^/]+$/.test(r)) return "capability group";
  if (/^\/industries\/[^/]+\/[^/]+$/.test(r)) return "industry×capability";
  if (/^\/industries\/[^/]+$/.test(r)) return "industry";
  if (/^\/workflows\/./.test(r)) return "workflow";
  if (/^\/solutions\/stages\/./.test(r)) return "stage";
  if (/^\/solutions\/use-cases\/./.test(r)) return "use case";
  if (/^\/compare\/./.test(r)) return "comparison";
  if (/^\/resources\/glossary\/./.test(r)) return "glossary";
  if (/^\/resources\/(guides|playbooks|frameworks|blog)\/./.test(r)) return "long-form";
  return "hub / other";
};

const by = new Map();
for (const r of rows) {
  const k = kind(r.route);
  if (!by.has(k)) by.set(k, []);
  by.get(k).push(r);
}
const med = (a) => a.slice().sort((x, y) => x - y)[Math.floor(a.length / 2)];
console.log("archetype            n     med words  med sections  med h2  med links  imgs");
for (const [k, list] of [...by.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(
    k.padEnd(20),
    String(list.length).padStart(4),
    String(med(list.map((r) => r.words))).padStart(10),
    String(med(list.map((r) => r.sections))).padStart(13),
    String(med(list.map((r) => r.h2))).padStart(7),
    String(med(list.map((r) => r.links))).padStart(10),
    String(list.reduce((n, r) => n + r.imgs, 0)).padStart(5),
  );
}
const thin = rows.filter((r) => r.words < 400).sort((a, b) => a.words - b.words);
console.log(`\nunder 400 words: ${thin.length}`);
for (const r of thin.slice(0, 10)) console.log(`  ${String(r.words).padStart(4)}  ${r.route}`);
