"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { groupHits, searchRecords, type SearchHit, type SearchRecord } from "@/lib/search";
import { routes } from "@/lib/site";

/**
 * Site-wide search.
 *
 * Real search over every published page, not a decorative input. The index is
 * fetched once, the first time anyone opens the dialog, from a prerendered
 * JSON file — so nothing is downloaded by a reader who never searches, and the
 * five hundred pages of content behind the index never enter the bundle.
 *
 * Opened by the header button, by `/` and by ⌘K. Arrow keys move, Enter goes,
 * Escape closes and returns focus to whatever opened it.
 */

interface SearchContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearch(): SearchContextValue {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used inside <SearchProvider>");
  return context;
}

/* The destinations offered before anything is typed — the top of each branch
   of the site, in navigation order. Not "popular": we have no traffic data and
   will not invent any. */
const STARTING_POINTS: { label: string; href: string; note: string }[] = [
  { label: "Platform overview", href: routes.why(), note: "What it is, and where it stops" },
  { label: "All capabilities", href: routes.capabilities(), note: "The full taxonomy, eight groups" },
  { label: "All solutions", href: routes.solutions(), note: "By stage, by goal, by need" },
  { label: "All industries", href: routes.industries(), note: "Ten client sectors, four groups" },
  { label: "Resources", href: routes.resources(), note: "Playbooks, guides, frameworks, the journal" },
];

export function SearchProvider({
  children,
  totalPages,
}: {
  children: React.ReactNode;
  /**
   * Every registered page, counted on the server from the route registry.
   *
   * A prop rather than `records.length` because the dialog states the number
   * before the index has finished loading, and because the registry is the
   * thing that decides what the site publishes — the index is derived from it,
   * so the count should come from the source rather than from the copy.
   */
  totalPages: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const open = useCallback(() => {
    restoreFocus.current = document.activeElement as HTMLElement | null;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // Returning focus is what makes the keyboard shortcut usable twice.
    restoreFocus.current?.focus?.();
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable === true;

      if ((event.key === "k" || event.key === "K") && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((wasOpen) => {
          if (!wasOpen) restoreFocus.current = document.activeElement as HTMLElement | null;
          return !wasOpen;
        });
        return;
      }

      if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        restoreFocus.current = document.activeElement as HTMLElement | null;
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <SearchContext.Provider value={value}>
      {children}
      {isOpen ? <SearchDialog onClose={close} totalPages={totalPages} /> : null}
    </SearchContext.Provider>
  );
}

/* ------------------------------------------------------------------------ */
/* The trigger                                                               */
/* ------------------------------------------------------------------------ */

export function SearchTrigger({
  variant = "field",
  className = "",
}: {
  /** `field` reads as an input; `icon` is the compact form for a phone header. */
  variant?: "field" | "icon" | "line";
  className?: string;
}) {
  const { open } = useSearch();

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={open}
        className={`flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:text-lime-deep ${className}`}
      >
        <span className="sr-only">Search</span>
        <SearchGlyph />
      </button>
    );
  }

  if (variant === "line") {
    return (
      <button
        type="button"
        onClick={open}
        className={`link-index inline-flex items-center gap-2 text-small transition-colors hover:text-lime ${className}`}
      >
        <SearchGlyph />
        Search the site
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={open}
      className={`group flex min-h-11 items-center gap-2 rounded-full border border-line bg-field/60 pl-3 pr-2 text-left text-small text-ink-soft transition-colors hover:border-ink/30 hover:text-ink ${className}`}
    >
      <SearchGlyph />
      <span className="hidden xl:inline">Search</span>
      <kbd className="ml-auto hidden rounded border border-line px-1.5 py-0.5 text-[0.6875rem] font-medium text-ink-soft xl:inline">
        /
      </kbd>
    </button>
  );
}

/** The directory's mark: a page grid, distinct from the magnifier beside it. */
function GridGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-lime-deep">
      <rect x="1.75" y="1.75" width="5" height="5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9.25" y="1.75" width="5" height="5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1.75" y="9.25" width="5" height="5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9.25" y="9.25" width="5" height="5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SearchGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
      <circle cx="7" cy="7" r="4.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.6 10.6L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------------ */
/* The dialog                                                                */
/* ------------------------------------------------------------------------ */

type IndexState =
  | { status: "loading" }
  | { status: "ready"; records: SearchRecord[] }
  | { status: "error" };

/* Module-level cache. The browser would re-serve the fetch from its own cache
   anyway, but this also skips re-parsing 130 kB of JSON on every reopen. */
let cachedIndex: SearchRecord[] | null = null;
let inFlight: Promise<SearchRecord[]> | null = null;

function loadIndex(): Promise<SearchRecord[]> {
  if (cachedIndex) return Promise.resolve(cachedIndex);
  if (inFlight) return inFlight;
  inFlight = fetch("/api/search-index/")
    .then((response) => {
      if (!response.ok) throw new Error(`search index ${response.status}`);
      return response.json() as Promise<SearchRecord[]>;
    })
    .then((records) => {
      cachedIndex = records;
      inFlight = null;
      return records;
    })
    .catch((error) => {
      inFlight = null;
      throw error;
    });
  return inFlight;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])';

function SearchDialog({ onClose, totalPages }: { onClose: () => void; totalPages: number }) {
  const [index, setIndex] = useState<IndexState>({ status: "loading" });
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const listId = useId();

  useEffect(() => {
    let cancelled = false;
    loadIndex()
      .then((records) => {
        if (!cancelled) setIndex({ status: "ready", records });
      })
      .catch(() => {
        if (!cancelled) setIndex({ status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const hits: SearchHit[] = useMemo(() => {
    if (index.status !== "ready" || query.trim().length < 2) return [];
    return searchRecords(index.records, query, 30);
  }, [index, query]);

  const groups = useMemo(() => groupHits(hits), [hits]);
  const flat = useMemo(() => groups.flatMap((group) => group.hits), [groups]);

  useEffect(() => setActive(0), [query]);

  // Keep the highlighted row in view when the arrow keys walk past the fold.
  useEffect(() => {
    const node = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    node?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    /* aria-modal hides the page behind this from a screen reader, but it does
       nothing to the tab order — without this, Tab walks out of the dialog and
       into a page the reader cannot see. */
    if (event.key === "Tab") {
      const focusable = [...(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      if (event.shiftKey && (current === first || !panelRef.current?.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (flat.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((current) => (current + 1) % flat.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((current) => (current - 1 + flat.length) % flat.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const hit = flat[active];
      if (hit) {
        onClose();
        router.push(hit.record.u);
      }
    }
  };

  const goToResults = () => {
    if (!typed) return;
    onClose();
    router.push(routes.searchFor(query.trim()));
  };

  const typed = query.trim().length >= 2;

  return (
    <div
      className="fixed inset-0 z-[70] flex justify-center overflow-y-auto overscroll-contain bg-forest/45 px-4 py-[8vh] backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onKeyDown={onKeyDown}
        className="search-panel h-fit w-full max-w-[42rem] overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_40px_90px_-30px_rgb(2_32_24/0.55)]"
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3 md:px-5">
          <span className="text-ink-soft">
            <SearchGlyph />
          </span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search capabilities, workflows, sectors, pages…"
            aria-label="Search the site"
            aria-controls={listId}
            autoComplete="off"
            spellCheck={false}
            className="min-h-11 w-full bg-transparent text-body text-ink outline-none placeholder:text-ink-soft/70 [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 flex h-11 shrink-0 items-center rounded-full px-3 text-fine font-medium text-ink-soft transition-colors hover:text-lime-deep"
          >
            {/* The visible label is the keyboard hint; the accessible name has
                to say what the control does, because "Esc" does not. */}
            <span className="sr-only">Close search</span>
            <span aria-hidden>Esc</span>
          </button>
        </div>

        <div ref={listRef} id={listId} className="max-h-[62vh] overflow-y-auto overscroll-contain">
          {index.status === "loading" ? (
            <p className="px-5 py-8 text-small text-ink-soft">Loading the index…</p>
          ) : index.status === "error" ? (
            <p className="px-5 py-8 text-small text-ink-soft">
              The index could not be loaded.{" "}
              <Link href={routes.explore()} className="text-lime-deep underline underline-offset-2">
                Browse the directory instead
              </Link>
              .
            </p>
          ) : !typed ? (
            <div className="px-4 py-4 md:px-5">
              <p className="label mb-3">Start here</p>
              <ul>
                {STARTING_POINTS.map((point) => (
                  <li key={point.href}>
                    <Link
                      href={point.href}
                      onClick={onClose}
                      className="link-index -mx-2 rounded-lg px-2 py-2 transition-colors hover:bg-paper-warm"
                    >
                      <span className="block text-body font-medium text-ink">{point.label}</span>
                      <span className="mt-0.5 block text-fine text-ink-soft">{point.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-fine text-ink-soft">
                Type to search every page on the site. Press{" "}
                <kbd className="rounded border border-line px-1 py-0.5 text-[0.6875rem]">/</kbd> anywhere
                to open this.
              </p>
            </div>
          ) : flat.length === 0 ? (
            <div className="px-5 py-8">
              <p className="text-body text-ink">Nothing matched “{query.trim()}”.</p>
              <p className="mt-2 text-small text-ink-soft">
                Try a single word — a capability, a sector, a stage — or{" "}
                <Link
                  href={routes.explore()}
                  onClick={onClose}
                  className="text-lime-deep underline underline-offset-2"
                >
                  open the directory
                </Link>{" "}
                and filter instead.
              </p>
            </div>
          ) : (
            <div className="py-2">
              {groups.map((group) => (
                <div key={group.section} className="px-2 py-1 md:px-3">
                  <p className="label px-2 pb-1 pt-2">{group.section}</p>
                  <ul>
                    {group.hits.map((hit) => {
                      const index = flat.indexOf(hit);
                      return (
                        <li key={hit.record.u}>
                          <Link
                            href={hit.record.u}
                            data-index={index}
                            onClick={onClose}
                            onMouseEnter={() => setActive(index)}
                            className={`link-index rounded-lg px-2 py-2 transition-colors ${
                              index === active ? "bg-paper-warm" : ""
                            }`}
                          >
                            <span className="flex flex-wrap items-baseline gap-x-2">
                              <span
                                className={`text-body font-medium ${
                                  index === active ? "text-lime-deep" : "text-ink"
                                }`}
                              >
                                {hit.record.t}
                              </span>
                              <span className="text-fine text-ink-soft">
                                {hit.record.ty}
                                {hit.record.c ? ` · ${hit.record.c}` : ""}
                              </span>
                            </span>
                            <span className="mt-0.5 block text-fine leading-snug text-ink-soft">
                              {hit.record.s}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* A results hand-off, only once there is a query to hand off. */}
        {typed ? (
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line px-4 py-2.5 md:px-5">
            <p className="text-fine text-ink-soft">
              {flat.length > 0
                ? `${hits.length} ${hits.length === 1 ? "result" : "results"}${hits.length === 30 ? " shown" : ""}`
                : "No matches in the quick list"}
            </p>
            <button
              type="button"
              onClick={goToResults}
              className="text-fine font-semibold text-lime-deep transition-colors hover:text-ink"
            >
              All results for “{query.trim()}” →
            </button>
          </div>
        ) : null}

        {/* The standing action row. Always the last thing in the panel, in
            every state: the reader who cannot name what they want should find
            the whole directory at the bottom of the box they already opened,
            with the size of it stated before they commit to the trip. */}
        <Link
          href={routes.explore()}
          onClick={onClose}
          className="group flex min-h-14 items-center justify-between gap-4 border-t border-line bg-paper-warm/60 px-4 py-3 transition-colors hover:bg-paper-warm md:px-5"
        >
          <span className="flex items-center gap-2.5">
            <GridGlyph />
            <span className="text-body font-semibold text-ink transition-colors group-hover:text-lime-deep">
              Explore all pages
            </span>
          </span>
          <span className="flex items-center gap-2 text-fine text-ink-soft">
            <span className="tnum">{totalPages} pages</span>
            <span aria-hidden className="text-lime-deep transition-transform duration-300 ease-[var(--ease-out-expo)] motion-safe:group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
