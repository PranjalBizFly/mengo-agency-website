/**
 * The search record shape, and the matcher that ranks it.
 *
 * Deliberately in its own module with no data imports, so a client component
 * can pull in the *algorithm* without webpack following a chain that ends in
 * five hundred pages of content. The records themselves arrive over the wire
 * from /api/search-index/, or as props on /explore/.
 *
 * Keys are one and two letters. At five hundred records the difference between
 * `title` and `t` is a real fraction of the payload, and nothing outside this
 * file and the builder ever reads them directly.
 */

export interface SearchRecord {
  /** Title, as displayed. */
  t: string;
  /** Canonical path, with the trailing slash. */
  u: string;
  /** Where it sits: "Solutions", "Capabilities", "Workflows"… */
  sec: string;
  /** What it is: "Capability", "Workflow", "Guide"… */
  ty: string;
  /** One sentence. Shown under the title in results. */
  s: string;
  /** The parent it belongs to, shown as a crumb. */
  c?: string;
  /** Facets, for the directory filters. */
  st?: string;
  g?: string;
  i?: string;
  p?: string;
  /** Extra matchable words that are not in the title or summary. */
  kw?: string;
}

/** The order sections appear in the navigation, the footer and the results. */
export const SECTION_ORDER = [
  "Solutions",
  "Capabilities",
  "Workflows",
  "Industries",
  "Resources",
  "Mengo",
  "Company",
] as const;

export function sectionRank(section: string): number {
  const index = (SECTION_ORDER as readonly string[]).indexOf(section);
  return index === -1 ? SECTION_ORDER.length : index;
}

/* ------------------------------------------------------------------------ */
/* Matching                                                                  */
/* ------------------------------------------------------------------------ */

const WORD = /[a-z0-9]+/g;

function tokens(value: string): string[] {
  return value.toLowerCase().match(WORD) ?? [];
}

/**
 * Score one record against one set of query tokens.
 *
 * Every token has to match something or the record is out — that is what makes
 * a two-word query narrow rather than widen the result set, which is the
 * behaviour anyone typing "brand healthcare" expects. Within that, a whole
 * word beats a prefix and the title beats the summary, so "seo" ranks the SEO
 * capability above the twelve pages that mention it in passing.
 */
export function scoreRecord(record: SearchRecord, queryTokens: string[]): number {
  const title = record.t.toLowerCase();
  const titleWords = tokens(record.t);
  const body = `${record.s} ${record.c ?? ""} ${record.kw ?? ""} ${record.sec} ${record.ty}`.toLowerCase();

  let total = 0;

  for (const token of queryTokens) {
    let best = 0;

    if (titleWords.includes(token)) best = 60;
    else if (titleWords.some((word) => word.startsWith(token))) best = 42;
    else if (title.includes(token)) best = 26;
    else if (body.includes(` ${token} `) || body.startsWith(`${token} `)) best = 14;
    else if (body.includes(token)) best = 8;

    if (best === 0) return 0;
    total += best;
  }

  // A page whose whole title is the query is what the reader meant.
  const joined = queryTokens.join(" ");
  if (title === joined) total += 120;
  else if (title.startsWith(joined)) total += 45;

  // Shorter titles are more likely to be the general page rather than one of
  // its variants, and the general page is the better default answer.
  total -= Math.min(titleWords.length, 12);

  return total;
}

export interface SearchHit {
  record: SearchRecord;
  score: number;
}

export function searchRecords(
  records: SearchRecord[],
  query: string,
  limit = 24,
): SearchHit[] {
  const queryTokens = tokens(query);
  if (queryTokens.length === 0) return [];

  const hits: SearchHit[] = [];
  for (const record of records) {
    const score = scoreRecord(record, queryTokens);
    if (score > 0) hits.push({ record, score });
  }

  hits.sort(
    (a, b) =>
      b.score - a.score ||
      sectionRank(a.record.sec) - sectionRank(b.record.sec) ||
      a.record.t.localeCompare(b.record.t),
  );

  return hits.slice(0, limit);
}

/** Group hits by section, preserving rank order within each group. */
export function groupHits(hits: SearchHit[]): { section: string; hits: SearchHit[] }[] {
  const map = new Map<string, SearchHit[]>();
  for (const hit of hits) {
    const list = map.get(hit.record.sec);
    if (list) list.push(hit);
    else map.set(hit.record.sec, [hit]);
  }
  return [...map.entries()]
    .map(([section, list]) => ({ section, hits: list }))
    .sort((a, b) => sectionRank(a.section) - sectionRank(b.section));
}
