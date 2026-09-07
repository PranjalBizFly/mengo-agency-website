"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A number that counts to its value when it comes into view.
 *
 * Used where the figure is the point of the sentence — the size of the
 * directory, not a statistic about outcomes. This site publishes no
 * performance numbers, so there is nothing here to dramatise; what the count
 * communicates is scale, and arriving at it reads as scale better than
 * printing it does.
 *
 * Three things keep it honest:
 *
 *  - The final value is what renders on the server. A crawler, a reader
 *    without JavaScript, and the first paint all see the real number. The
 *    animation only ever replaces a number that is already correct.
 *  - The element reserves its final width. `tnum` gives every digit the same
 *    advance, so counting from 0 to 529 cannot reflow the line around it —
 *    there is no layout shift to measure.
 *  - Reduced motion skips it entirely: the number is simply there.
 */
export function CountUp({
  to,
  duration = 900,
  className = "",
}: {
  to: number;
  /** Milliseconds. Short enough to finish before it is read as a gimmick. */
  duration?: number;
  className?: string;
}) {
  const [shown, setShown] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || done.current) continue;
          done.current = true;
          observer.disconnect();

          const start = performance.now();
          /* Ease out: the number decelerates into its value rather than
             stopping dead, which is what makes it read as settling. */
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setShown(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          setShown(0);
          requestAnimationFrame(tick);
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {shown}
    </span>
  );
}
