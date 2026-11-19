"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window { __motionReady?: boolean }
}

/**
 * Drives the CSS motion system without hiding content from people who
 * don't run JavaScript or prefer reduced motion. The inline head script in
 * the root layout only adds `.motion-ok` when motion is allowed; this
 * component then reveals `[data-reveal]` elements as they enter the
 * viewport and pauses `[data-ambient]` loops while they are off screen.
 */
export default function MotionRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    window.__motionReady = true;
    const root = document.documentElement;
    if (!root.classList.contains("motion-ok") || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-in"));
      return;
    }

    const reveal = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          reveal.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    const ambient = new IntersectionObserver(entries => {
      for (const entry of entries) {
        (entry.target as HTMLElement).dataset.paused = entry.isIntersecting ? "false" : "true";
      }
    });

    const scan = () => {
      document.querySelectorAll("[data-reveal]:not(.is-in):not([data-observed])").forEach(el => {
        el.setAttribute("data-observed", "");
        reveal.observe(el);
      });
      document.querySelectorAll("[data-ambient]:not([data-observed])").forEach(el => {
        el.setAttribute("data-observed", "");
        ambient.observe(el);
      });
    };
    scan();
    const main = document.getElementById("main-content");
    const mutations = new MutationObserver(scan);
    if (main) mutations.observe(main, { childList: true, subtree: true });

    return () => { reveal.disconnect(); ambient.disconnect(); mutations.disconnect(); };
  }, [pathname]);

  return null;
}
