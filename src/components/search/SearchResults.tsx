"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { groupHits, searchRecords, type SearchRecord } from "@/lib/search";
import { routes } from "@/lib/site";

/**
 * The search results page.
 *
 * The dialog is for a reader who knows the word and wants to be gone in two
 * keystrokes. This is for one who wants to look at the answer: every match, in
 * full, with its type, its parent, its description and the line the query
 * actually matched — because "why is this here" is the question a results page
 * has to answer and a dropdown never can.
 *
 * The query lives in the URL so a search can be sent to somebody, and is read
 * from `location.search` after mount rather than through `useSearchParams`,
 * which would put the page behind a Suspense boundary for a convenience.
 */
export function SearchResults({ records }: { records: SearchRecord[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    setType(params.get("type") ?? "");
    setHydrated(true);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (type) params.set("type", type);
    const search = params.toString();
    window.history.replaceState(null, "", search ? `?${search}` : window.location.pathname);
  }, [query, type, hydrated]);

  const typed = query.trim().length >= 2;

  const hits = useMemo(() => {
    if (!typed) return [];
    return searchRecords(records, query, 200);
  }, [records, query, typed]);

  /* Type counts come from the unfiltered result set, so the filter row shows
     what is available rather than only what survived the current filter. */
  const types = useMemo(() => {
    const counts = new Map<string, number>();
    for (const hit of hits) counts.set(hit.record.ty, (counts.get(hit.record.ty) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [hits]);

  const shown = useMemo(() => (type ? hits.filter((h) => h.record.ty === type) : hits), [hits, type]);
  const groups = useMemo(() => groupHits(shown), [shown]);

  return (
    <div>
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="rounded-2xl border border-line bg-field/70 p-4 md:p-5"
        data-reveal
      >
        <label className="block">
          <span className="label mb-2 block">Search everything</span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setType("");
            }}
            placeholder="A capability, a sector, a stage, a workflow, a question…"
            aria-label="Search everything"
            autoComplete="off"
            spellCheck={false}
            className="min-h-12 w-full rounded-xl border border-line bg-paper px-4 text-body text-ink outline-none transition-colors focus:border-lime-deep placeholder:text-ink-soft/70 [&::-webkit-search-cancel-button]:hidden"
          />
        </label>

        {typed && types.length > 1 ? (
          <ul className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
            <li>
              <FilterChip active={!type} onClick={() => setType("")}>
                Everything <Count>{hits.length}</Count>
              </FilterChip>
            </li>
            {types.map(([label, count]) => (
              <li key={label}>
                <FilterChip active={type === label} onClick={() => setType(label)}>
                  {label} <Count>{count}</Count>
                </FilterChip>
              </li>
            ))}
          </ul>
        ) : null}
      </form>

      <div className="mt-10 md:mt-14">
        {!typed ? (
          <div className="rule-t pt-10">
            <p className="max-w-[46rem] text-lead text-ink-soft">
              Type at least two characters. Search covers every published page — capabilities and
              their stage readings, workflows, sectors, goals, comparisons, playbooks, guides,
              frameworks, the journal, the glossary and the company pages.
            </p>
            <p className="mt-6 text-body text-ink-soft">
              Or{" "}
              <Link
                href={routes.explore()}
                className="underline decoration-lime-deep decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-lime-deep"
              >
                browse the directory
              </Link>{" "}
              and filter instead — {records.length} pages, cut five ways.
            </p>
          </div>
        ) : shown.length === 0 ? (
          <div className="rule-t pt-10">
            <p className="text-d4">Nothing matched “{query.trim()}”.</p>
            <p className="mt-5 max-w-[46rem] text-lead text-ink-soft">
              Try a single word — a capability, a sector, a stage — or open the directory and filter
              by section instead of searching.
            </p>
            <p className="mt-6">
              <Link
                href={routes.explore()}
                className="text-small font-semibold text-lime-deep transition-colors hover:text-ink"
              >
                Explore all {records.length} pages →
              </Link>
            </p>
          </div>
        ) : (
          <>
            <p className="rule-b pb-3 text-small text-ink-soft" aria-live="polite">
              <span className="tnum font-semibold text-ink">{shown.length}</span>{" "}
              {shown.length === 1 ? "result" : "results"} for{" "}
              <span className="text-ink">“{query.trim()}”</span>
              {type ? ` in ${type}` : ""}
              {groups.length > 1 ? ` across ${groups.length} sections` : ""}
            </p>

            {groups.map((group) => (
              <section key={group.section} className="mt-12 first:mt-10">
                <h2 className="label rule-b pb-3">
                  {group.section}
                  <span className="tnum ml-2 text-ink-soft">{group.hits.length}</span>
                </h2>
                <ul>
                  {group.hits.map((hit) => (
                    <li key={hit.record.u} className="rule-b">
                      <Link href={hit.record.u} className="group block py-5 transition-colors">
                        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="type-title text-h6 text-ink transition-colors group-hover:text-lime-deep">
                            {hit.record.t}
                          </span>
                          <span className="label text-[0.6875rem]">{hit.record.ty}</span>
                          {hit.record.c ? (
                            <span className="text-fine text-ink-soft">in {hit.record.c}</span>
                          ) : null}
                        </span>
                        <span className="mt-2 block max-w-[70ch] text-body leading-relaxed text-ink-soft">
                          <Marked text={hit.record.s} query={query} />
                        </span>
                        <span className="mt-2 block text-fine text-ink-soft/80">
                          {hit.record.u}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {shown.length >= 200 ? (
              <p className="mt-10 text-small text-ink-soft">
                Showing the first 200 matches. Narrow the query, or{" "}
                <Link
                  href={routes.explore()}
                  className="font-semibold text-lime-deep transition-colors hover:text-ink"
                >
                  filter the directory
                </Link>
                .
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-small transition-colors ${
        active
          ? "border-lime-deep bg-lime-deep text-on-accent"
          : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Count({ children }: { children: React.ReactNode }) {
  return <span className="tnum text-fine opacity-70">{children}</span>;
}

/**
 * The matched words, marked in the description.
 *
 * This is the difference between a list of links and a result: it shows the
 * reader *why* the page came back, which is what lets them skip the six that
 * matched a word in passing.
 */
function Marked({ text, query }: { text: string; query: string }) {
  const tokens = (query.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter((t) => t.length > 1);
  if (tokens.length === 0) return <>{text}</>;

  const pattern = new RegExp(
    `(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  /* String.split with one capturing group puts every capture at an odd index,
     so the marked parts are known by position. Testing the regex per part
     would be wrong as well as slower: a global regex carries lastIndex. */
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <mark key={index} className="rounded-[2px] bg-lime/35 px-0.5 text-ink">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}
