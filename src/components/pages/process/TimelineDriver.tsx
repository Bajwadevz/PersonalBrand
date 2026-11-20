"use client";

import { useEffect, useRef } from "react";

/**
 * Drives a vertical timeline from scroll position. Writes `--progress` (0–1)
 * onto the closest `[data-timeline]` ancestor and marks each `[data-step]`
 * child as "done", "active" or "next". The server markup is complete without
 * it: no JS or reduced motion leaves every step fully visible and the line drawn.
 */
export default function TimelineDriver() {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = marker.current?.closest<HTMLElement>("[data-timeline]");
    if (!root) return;
    const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-step]"));
    if (!document.documentElement.classList.contains("motion-ok")) {
      root.style.setProperty("--progress", "1");
      return;
    }
    root.dataset.driven = "true";
    let frame = 0;
    const update = () => {
      frame = 0;
      const focus = window.innerHeight * 0.5;
      const rect = root.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (focus - rect.top) / Math.max(1, rect.height)));
      root.style.setProperty("--progress", progress.toFixed(3));
      let active = 0;
      steps.forEach((step, i) => { if (step.getBoundingClientRect().top <= focus) active = i; });
      steps.forEach((step, i) => { step.dataset.state = i < active ? "done" : i === active ? "active" : "next"; });
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
  }, []);

  return <span ref={marker} hidden />;
}
