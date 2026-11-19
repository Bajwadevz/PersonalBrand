"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window { __motionReady?: boolean }
}

/**
 * Drives the CSS motion system without hiding content from people who
 * don't run JavaScript or prefer reduced motion. The inline head script in
 * the root layout only adds `.motion-ok` when motion is allowed; this
 * component reveals `[data-reveal]` elements as they enter the viewport
 * and pauses `[data-ambient]` loops while they are off screen.
 *
 * The observers live for the whole session. Next.js keeps visited routes
 * mounted in the background, so on every route change we re-observe every
 * element that hasn't been revealed yet (observe() is idempotent) instead of
 * tracking which nodes were seen before — otherwise returning to a page
 * leaves unrevealed sections invisible until a hard refresh.
 */
export default function MotionRuntime() {
  const pathname = usePathname();
  const scanRef = useRef<() => void>(() => {});

  useEffect(() => {
    window.__motionReady = true;
    const root = document.documentElement;
    const revealAll = () => document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-in"));
    if (!root.classList.contains("motion-ok") || !("IntersectionObserver" in window)) {
      revealAll();
      const mo = new MutationObserver(revealAll);
      mo.observe(document.body, { childList: true, subtree: true });
      scanRef.current = revealAll;
      return () => mo.disconnect();
    }

    const reveal = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          reveal.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });

    const ambient = new IntersectionObserver(entries => {
      for (const entry of entries) {
        (entry.target as HTMLElement).dataset.paused = entry.isIntersecting ? "false" : "true";
      }
    });

    let queued = 0;
    const scan = () => {
      queued = 0;
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(el => {
        const r = el.getBoundingClientRect();
        // Anything already on screen (e.g. after a route change) shows immediately.
        if (r.top < window.innerHeight && r.bottom > 0 && r.height > 0) el.classList.add("is-in");
        else reveal.observe(el);
      });
      document.querySelectorAll("[data-ambient]").forEach(el => ambient.observe(el));
    };
    const schedule = () => { if (!queued) queued = window.requestAnimationFrame(scan); };
    scanRef.current = schedule;
    scan();

    const mutations = new MutationObserver(schedule);
    mutations.observe(document.body, { childList: true, subtree: true });
    // Safety net: never leave content hidden for long.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
      });
    }, 2500);

    return () => {
      reveal.disconnect(); ambient.disconnect(); mutations.disconnect();
      window.clearTimeout(failsafe);
      if (queued) cancelAnimationFrame(queued);
    };
  }, []);

  useEffect(() => {
    scanRef.current();
    // Scroll restoration happens after commit; scan again once it settles.
    const t = window.setTimeout(() => scanRef.current(), 120);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
