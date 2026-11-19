"use client";

import { useEffect, useRef } from "react";

/**
 * Writes `--progress` (0–1) and `data-lit` (number of steps passed) onto the
 * closest `[data-progress-root]` ancestor as it moves through the viewport.
 * CSS decides what to do with them, so the static markup stays complete.
 */
export default function ScrollProgress({ steps = 4 }: { steps?: number }) {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = marker.current?.closest<HTMLElement>("[data-progress-root]");
    if (!host) return;
    if (!document.documentElement.classList.contains("motion-ok")) {
      host.style.setProperty("--progress", "1");
      host.dataset.lit = String(steps);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const raw = (start - rect.top) / (start - end + rect.height * 0.5);
      const progress = Math.min(1, Math.max(0, raw));
      host.style.setProperty("--progress", progress.toFixed(3));
      host.dataset.lit = String(Math.min(steps, Math.floor(progress * steps + 0.25)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [steps]);

  return <span ref={marker} hidden />;
}
