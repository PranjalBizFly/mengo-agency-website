"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { scoreRecord, sectionRank, type SearchRecord } from "@/lib/search";

/**
 * The complete page directory.
 *
 * Every published page in one list, filtered five ways at once. This is the
 * counterpart to search rather than a copy of it: search is for a reader who
 * knows the word they are looking for, and this is for one who does not and
 * wants to see the shape of what exists.
 *
 * Filters are native selects. At 320px a row of custom comboboxes is a worse
 * control than the one the operating system already ships, and this is a
 * utility page — the job is to answer quickly, not to be admired.
 *
 * Filter state round-trips through the query string so a filtered view can be
 * sent to somebody. It is read from `location.search` after mount rather than
 * through `useSearchParams`, which would put the whole page behind a Suspense
 * boundary for a convenience.
 */

export interface Facets {
  sections: string[];
  types: string[];
  stages: { value: string; label: string }[];
  groups: { value: string; label: string }[];
  industries: { value: string; label: string }[];
}

type FilterKey = "q" | "section" | "type" | "stage" | "group" | "industry";

/**
 * The category row.
 *
 * The first thing most readers want is not a filter, it is a category — and
 * two of the categories they think in ("goals", "comparisons") are types
 * rather than sections in this model. So a chip sets whichever axis actually
 * answers it, and the two selects below stay available for everything else.
 */
const CATEGORIES: { label: string; section?: string; type?: string }[] = [
  { label: "Everything" },
  { label: "Solutions", section: "Solutions" },
  { label: "Capabilities", section: "Capabilities" },
  { label: "Workflows", section: "Workflows" },
  { label: "Industries", section: "Industries" },
  { label: "Resources", section: "Resources" },
  { label: "Use cases", type: "Use case" },
  { label: "Comparisons", type: "Comparison" },
  { label: "Company", section: "Company" },
];

const EMPTY: Record<FilterKey, string> = {
  q: "",
  section: "",
  type: "",
  stage: "",
  group: "",
  industry: "",
};

export function ExploreDirectory({
  records,
  facets,
}: {
  records: SearchRecord[];
  facets: Facets;
}) {
  const [filters, setFilters] = useState<Record<FilterKey, string>>(EMPTY);
  const [hydrated, setHydrated] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next = { ...EMPTY };
    for (const key of Object.keys(EMPTY) as FilterKey[]) {
      next[key] = params.get(key) ?? "";
    }
    setFilters(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value) params.set(key, value);
    }
    const query = params.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
  }, [filters, hydrated]);

  const set = (key: FilterKey, value: string) =>
    setFilters((current) => ({ ...current, [key]: value }));

  const active = (Object.keys(EMPTY) as FilterKey[]).filter((key) => filters[key]);

  const matched = useMemo(() => {
    const query = filters.q.trim().toLowerCase();
    const queryTokens = query.length >= 2 ? (query.match(/[a-z0-9]+/g) ?? []) : [];

    const rows = records.filter((record) => {
      if (filters.section && record.sec !== filters.section) return false;
      if (filters.type && record.ty !== filters.type) return false;
      if (filters.stage && record.st !== filters.stage) return false;
      if (filters.group && record.g !== filters.group) return false;
      if (filters.industry && record.i !== filters.industry) return false;
      if (queryTokens.length > 0 && scoreRecord(record, queryTokens) === 0) return false;
      return true;
    });

    // With a query the order is relevance; without one it is the taxonomy's
    // own order, which is the order the sections are meant to be read in.
    if (queryTokens.length > 0) {
      return rows
        .map((record) => ({ record, score: scoreRecord(record, queryTokens) }))
        .sort((a, b) => b.score - a.score || a.record.t.localeCompare(b.record.t))
        .map((entry) => entry.record);
    }
    return rows;
  }, [records, filters]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchRecord[]>();
    for (const record of matched) {
      const list = map.get(record.sec);
      if (list) list.push(record);
      else map.set(record.sec, [record]);
    }
    return [...map.entries()]
      .map(([section, rows]) => ({ section, rows }))
      .sort((a, b) => sectionRank(a.section) - sectionRank(b.section));
  }, [matched]);

  return (
    <div>
      {/* The control bar is the one raised surface on the page: it is an
          object the reader acts on, and everything below it is content. */}
      <div className="rounded-2xl border border-line bg-field/70 p-4 md:p-5" data-reveal>
        <p className="label mb-3">Category</p>
        <ul className="mb-5 flex flex-wrap gap-2 border-b border-line pb-5">
          {CATEGORIES.map((category) => {
            const active =
              (category.section ?? "") === filters.section && (category.type ?? "") === filters.type;
            return (
              <li key={category.label}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setFilters((current) => ({
                      ...current,
                      section: category.section ?? "",
                      type: category.type ?? "",
                    }))
                  }
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-small transition-colors ${
                    active
                      ? "border-lime-deep bg-lime-deep text-on-accent"
                      : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  {category.label}
                  <span className="tnum text-fine opacity-70">{countFor(records, category)}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <label className="block">
          <span className="label mb-2 block">Search the directory</span>
          {/* An explicit accessible name as well as the wrapping label: the
              wrapper is enough for a browser, and the extra attribute is what
              a static check can see. */}
          <input
            type="search"
            value={filters.q}
            onChange={(event) => set("q", event.target.value)}
            placeholder="A capability, a sector, a stage, a page title…"
            aria-label="Search the directory"
            autoComplete="off"
            spellCheck={false}
            className="min-h-12 w-full rounded-xl border border-line bg-paper px-4 text-body text-ink outline-none transition-colors focus:border-lime-deep placeholder:text-ink-soft/70 [&::-webkit-search-cancel-button]:hidden"
          />
        </label>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <Select
            label="Section"
            value={filters.section}
            onChange={(value) => set("section", value)}
            options={facets.sections.map((section) => ({ value: section, label: section }))}
            anyLabel="Every section"
          />
          <Select
            label="Type"
            value={filters.type}
            onChange={(value) => set("type", value)}
            options={facets.types.map((type) => ({ value: type, label: type }))}
            anyLabel="Every type"
          />
          <Select
            label="Stage"
            value={filters.stage}
            onChange={(value) => set("stage", value)}
            options={facets.stages}
            anyLabel="Any stage"
          />
          <Select
            label="Capability group"
            value={filters.group}
            onChange={(value) => set("group", value)}
            options={facets.groups}
            anyLabel="Any group"
          />
          <Select
            label="Client sector"
            value={filters.industry}
            onChange={(value) => set("industry", value)}
            options={facets.industries}
            anyLabel="Any sector"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line pt-3">
          <p className="text-small text-ink-soft" aria-live="polite">
            <span className="tnum font-semibold text-ink">{matched.length}</span> of{" "}
            <span className="tnum">{records.length}</span> pages
            {active.length > 0 ? ` · ${active.length} filter${active.length === 1 ? "" : "s"}` : ""}
          </p>
          {active.length > 0 ? (
            <button
              type="button"
              onClick={() => {
                setFilters(EMPTY);
                resultsRef.current?.focus();
              }}
              className="min-h-11 text-small font-semibold text-lime-deep transition-colors hover:text-ink"
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      <div ref={resultsRef} tabIndex={-1} className="mt-10 outline-none md:mt-14">
        {grouped.length === 0 ? (
          <p className="rule-t py-10 text-lead text-ink-soft">
            Nothing matches that combination. Clear a filter, or widen the search term.
          </p>
        ) : (
          grouped.map((group) => (
            <section key={group.section} className="mb-12 last:mb-0">
              <div className="rule-b flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-3">
                <h2 className="type-title text-h5 text-ink">{group.section}</h2>
                <p className="tnum text-fine text-ink-soft">
                  {group.rows.length} {group.rows.length === 1 ? "page" : "pages"}
                </p>
              </div>
              <ul>
                {group.rows.map((record) => (
                  <li key={record.u} className="rule-b">
                    <Link
                      href={record.u}
                      className="group block py-3 transition-colors hover:bg-paper-warm"
                    >
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-body font-medium text-ink transition-colors group-hover:text-lime-deep">
                          {record.t}
                        </span>
                        <span className="text-fine text-ink-soft">
                          {record.ty}
                          {record.c ? ` · ${record.c}` : ""}
                        </span>
                      </span>
                      <span className="mt-0.5 block max-w-[70ch] text-fine leading-snug text-ink-soft">
                        {record.s}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}

/** How many pages a category chip would show. Computed once per render. */
function countFor(
  records: SearchRecord[],
  category: { section?: string; type?: string },
): number {
  if (!category.section && !category.type) return records.length;
  return records.filter(
    (record) =>
      (!category.section || record.sec === category.section) &&
      (!category.type || record.ty === category.type),
  ).length;
}

function Select({
  label,
  value,
  onChange,
  options,
  anyLabel,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  anyLabel: string;
}) {
  return (
    <label className="block">
      <span className="label mb-2 block">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
        className={`select-caret min-h-11 w-full rounded-xl border bg-paper px-3 pr-8 text-small outline-none transition-colors focus:border-lime-deep ${
          value ? "border-lime-deep text-ink" : "border-line text-ink-soft"
        }`}
      >
        <option value="">{anyLabel}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
