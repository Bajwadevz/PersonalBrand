"use client";

import { useEffect, useRef } from "react";

/** Thin bar at the top of the viewport tracking progress through `[data-reading-root]`. */
export default function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    const root = document.querySelector<HTMLElement>("[data-reading-root]");
    if (!el || !root) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / total));
      el.style.transform = `scaleX(${p.toFixed(4)})`;
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

  return <div className="ins-progress" aria-hidden="true"><div ref={bar} className="ins-progress-bar" /></div>;
}
