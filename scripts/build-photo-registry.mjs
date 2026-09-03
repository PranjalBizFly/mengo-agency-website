/**
 * Builds src/lib/photo-registry.json.
 *
 * Every photograph on this site is a licensed Unsplash asset with a recorded
 * photographer and source URL. The registry is generated rather than
 * hand-written for one reason: the site's hard rule is that no photograph may
 * appear twice, and the only reliable way to enforce that is to assign each
 * one from a pool exactly once, in code, and fail if the assignment is not a
 * bijection.
 *
 * The pool lives in scripts/photo-pool.json — one entry per licensed asset,
 * carrying the CDN source and the attribution that travels with it.
 *
 * Two things about the assignment list below are deliberate.
 *
 * First, it names a pool index rather than taking the next one in order. Every
 * photograph here has been looked at, and the index is a decision about what
 * the picture actually shows: a warehouse goes to the ecommerce page, a
 * laboratory to healthcare, a single desk by a window to the solo agency. An
 * ordered assignment produced a mossy forest illustrating a review step.
 *
 * Second, the list is shorter than the number of sections that could carry a
 * photograph. The pool contains a great deal that is licensed and unusable
 * here — stock puppies, gym equipment, a rotary telephone — and the rule for
 * those is not to place them somewhere and write vague alt text. A section
 * with no suitable photograph is text-led, and there are a lot of those:
 * every playbook, guide, framework and journal piece runs without one.
 *
 * Alt text describes what is in the frame, because that is what alt text is
 * for. It does not describe what the section wishes were in the frame.
 *
 * Run: node scripts/build-photo-registry.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

const pool = JSON.parse(readFileSync(join(here, "photo-pool.json"), "utf8"));

/** `[registry key, pool index, alt text]`, in reading order. */
const ASSIGNMENTS = [
  /* ---------------------------------------------------------------- Home */
  ["home:index:hero", 22, "A team working through a plan together, one person standing at a flip chart while colleagues sit with laptops"],
  ["home:index:reality", 19, "A marketer working alone at a desk in front of two monitors"],
  ["home:index:together", 105, "Two colleagues in conversation across a small table beside a window"],
  ["home:index:workflow", 16, "A team meeting in front of a wall covered in coloured sticky notes"],
  ["home:index:scale", 59, "A large open-plan office with rows of people working at long desks"],
  ["home:index:close", 45, "Four colleagues talking around a table"],

  /* ----------------------------------------------------------- Why Mengo */
  ["page:why-mengo:hero", 6, "A speaker presenting to a seated audience in a brick-walled room"],
  ["page:why-mengo:control", 21, "One person pointing at a laptop screen while another types"],
  ["page:why-mengo:structure", 8, "Overhead view of a shared desk covered with laptops, notebooks and devices"],

  /* -------------------------------------------------------- How it works */
  ["page:how-it-works:hero", 31, "People working at laptops around a long boardroom table"],
  ["page:how-it-works:brief", 40, "Hands writing on a printed plan between two open laptops"],
  ["page:how-it-works:review", 101, "Two colleagues reviewing something together on a monitor"],

  /* -------------------------------------------------- For agencies (hub) */
  ["stages:index:hero", 96, "People working at tables in a café-style shared workspace"],

  /* --------------------------------------------------------- Stage pages */
  ["stage:start-an-agency:hero", 12, "A hand writing in a notebook beside a cup of coffee"],
  ["stage:start-an-agency:week", 50, "Hands typing on a laptop keyboard"],
  ["stage:solo-agency:hero", 42, "A single desk by a tall window, with plants and a laptop"],
  ["stage:solo-agency:week", 47, "A laptop, pen and coffee cup on a white desk"],
  ["stage:small-agency:hero", 24, "Four colleagues working at laptops around a table"],
  ["stage:small-agency:week", 18, "A small team working on laptops around a shared table"],
  ["stage:growing-agency:hero", 23, "A long table of people working in a dimly lit room"],
  ["stage:growing-agency:week", 102, "Several people working at laptops around a table"],
  ["stage:large-agency:hero", 98, "A large seated audience facing a presenter in a panelled room"],
  ["stage:large-agency:week", 103, "A modern open-plan office with workstations and breakout seating"],

  /* -------------------------------------------------------- Capabilities */
  ["capabilities:index:hero", 33, "Several people writing and annotating documents at a wooden table"],
  ["capability:strategy:hero", 44, "A woman standing in front of a whiteboard covered in notes"],
  ["capability:content:hero", 9, "Hands working across printed charts, sketches and a phone"],
  ["capability:campaigns:hero", 17, "A hand pinning printed layouts onto a planning wall"],
  ["capability:lead-nurturing:hero", 55, "A person using a phone beside an open laptop"],
  ["capability:research:hero", 28, "A laptop displaying an analytics dashboard on a desk"],
  ["capability:marketing-systems:hero", 20, "An overhead desk with a journal, glasses, coffee and a tablet"],

  /* ----------------------------------------------------------- Workflows */
  ["workflows:index:hero", 46, "An open-plan office with people working at desks"],
  ["workflow:client-onboarding:hero", 38, "Four colleagues gathered around a laptop in conversation"],
  ["workflow:strategy-and-planning:hero", 4, "Hands gesturing across a meeting table beside an open laptop"],
  ["workflow:content-production:hero", 52, "Several people's hands around a laptop on a table"],
  ["workflow:campaign-planning:hero", 3, "Two colleagues discussing work at a table with a laptop"],
  ["workflow:lead-nurturing-flows:hero", 27, "A person working on a phone above printed documents"],
  ["workflow:scale-client-delivery:hero", 29, "A screen filled with analytics charts"],

  /* ---------------------------------------------------------- Industries */
  ["industry:saas-software:hero", 58, "A laptop showing lines of code on a white desk"],
  ["industry:professional-services:hero", 32, "A person in a suit fastening their jacket in an office atrium"],
  ["industry:ecommerce-d2c:hero", 81, "A distribution warehouse stacked with palletised goods"],
  ["industry:healthcare:hero", 62, "A researcher working at a microscope in a laboratory"],
  ["industry:real-estate:hero", 94, "The living room of a newly finished property"],
  ["industry:local-multi-location:hero", 85, "The interior of a café with customers at tables"],

  /* ----------------------------------------------------------- Use cases */
  ["usecase:start-an-agency:hero", 51, "An open notebook and fountain pen on a wooden desk"],
  ["usecase:handle-more-clients:hero", 100, "A professional standing in a glass-walled office"],
  ["usecase:deliver-faster:hero", 1, "Two colleagues high-fiving across a desk of laptops and papers"],
  ["usecase:reduce-repetitive-work:hero", 5, "Three colleagues working at laptops around a table"],
  ["usecase:standardize-delivery:hero", 49, "A tidy desk with a laptop, a phone and a small plant"],
  ["usecase:scale-without-hiring:hero", 104, "A portrait of a professional in an office"],

  /* ----------------------------------------------------------- Resources */
  ["resources:index:hero", 35, "Three people looking through books in a library"],
  ["resources:playbooks:hero", 74, "A person drafting by hand on a large sheet of paper"],
  ["resources:guides:hero", 10, "A laptop, notebook and coffee cup on a wooden desk"],
  ["resources:blog:hero", 97, "A business newspaper open at the market listings"],

  /* ------------------------------------------------------------- Company */
  ["company:index:hero", 2, "An open-plan office with a few people meeting at a table in the distance"],
  ["company:about:hero", 0, "A team gathered around a laptop, reacting to what is on the screen"],
  ["company:founder:hero", 36, "A speaker addressing a standing audience at an event"],
  ["company:responsible-ai:hero", 30, "A laptop on a table showing a data dashboard"],
  ["company:contact:hero", 25, "A person in a grey jacket, smiling, in a bright room"],

  /* ---------------------------------------------------------- Get started */
  ["page:get-started:hero", 39, "A person holding a mug, standing beside a brick wall"],
];

/* --- Enforcement -------------------------------------------------------- */

const problems = [];

const keys = ASSIGNMENTS.map(([key]) => key);
for (const key of new Set(keys.filter((key, i) => keys.indexOf(key) !== i))) {
  problems.push(`Duplicate registry key: ${key}`);
}

const indices = ASSIGNMENTS.map(([, index]) => index);
for (const index of new Set(indices.filter((index, i) => indices.indexOf(index) !== i))) {
  problems.push(`Pool index ${index} is assigned to more than one section`);
}

for (const [key, index, alt] of ASSIGNMENTS) {
  if (!pool[index]) problems.push(`${key}: pool index ${index} does not exist`);
  if (!alt || alt.length < 20) problems.push(`${key}: alt text is missing or too short`);
}

if (problems.length > 0) {
  console.error("Registry assignment is invalid:");
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

const registry = {};
for (const [key, index, alt] of ASSIGNMENTS) {
  const asset = pool[index];
  registry[key] = {
    key,
    src: asset.src,
    alt,
    width: 2000,
    height: 1125,
    photographer: asset.photographer,
    sourceUrl: asset.sourceUrl,
    license: "Unsplash License — free for commercial and editorial use",
  };
}

writeFileSync(join(root, "src/lib/photo-registry.json"), `${JSON.stringify(registry, null, 2)}\n`);

console.log(
  `photo-registry.json — ${ASSIGNMENTS.length} sections assigned from a pool of ${pool.length}. ` +
    `Every other section is text-led.`,
);
