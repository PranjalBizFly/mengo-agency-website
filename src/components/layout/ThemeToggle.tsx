"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "@/lib/reveal-init";

type Theme = "light" | "dark";

/**
 * Light and dark, with the choice stored.
 *
 * The button renders its icons from the start rather than waiting for mount,
 * so the header does not reflow after hydration. Only the icon that is shown
 * depends on state, and until state arrives the icon matches what the pre-paint
 * script already applied.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      return;
    }
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing, or storage disabled. The choice simply does not persist.
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:text-lime-deep ${className}`}
      aria-pressed={isDark}
    >
      <span className="sr-only">{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        {isDark ? (
          <path
            d="M15.5 11.4A7 7 0 0 1 6.6 2.5a7 7 0 1 0 8.9 8.9Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        ) : (
          <>
            <circle cx="9" cy="9" r="3.4" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M9 1v1.8M9 15.2V17M17 9h-1.8M2.8 9H1M14.7 3.3l-1.3 1.3M4.6 13.4l-1.3 1.3M14.7 14.7l-1.3-1.3M4.6 4.6 3.3 3.3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </button>
  );
}
