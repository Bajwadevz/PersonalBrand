"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import "./demo.css";

/** Per-demo design tokens, applied as CSS variables on the .mdn root. */
export type DemoTheme = {
  bg: string;
  surface: string;
  text: string;
  accent: string;
  accent600?: string;
  accent700?: string;
  onAccent?: string;
  divider?: string;
  head: string;
  body: string;
  headWeight?: number;
};

function themeVars(t: DemoTheme): CSSProperties {
  const v: Record<string, string | number> = {
    "--d-bg": t.bg,
    "--d-surface": t.surface,
    "--d-text": t.text,
    "--d-accent": t.accent,
    "--d-head": t.head,
    "--d-body": t.body,
  };
  if (t.accent600) v["--d-accent-600"] = t.accent600;
  if (t.accent700) v["--d-accent-700"] = t.accent700;
  if (t.onAccent) v["--d-on-accent"] = t.onAccent;
  if (t.divider) v["--d-divider"] = t.divider;
  if (t.headWeight) v["--d-head-weight"] = t.headWeight;
  return v as CSSProperties;
}

/**
 * Root for every concept demo: sets tokens, renders the persistent
 * concept-disclosure bar, and drives scroll-reveal animations for any
 * descendant marked with data-reveal.
 */
export function DemoRoot({
  theme,
  className = "",
  children,
}: {
  theme: DemoTheme;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.classList.add("js-motion");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const watch = (scope: ParentNode) =>
      scope.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    watch(root);
    // Elements mounted later (filters, step changes) must be observed too,
    // or they would stay in their pre-reveal hidden state.
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches("[data-reveal]")) io.observe(n);
          watch(n);
        });
      }
    });
    mo.observe(root, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`mdn ${className}`} style={themeVars(theme)}>
      <div className="mdn-concept">
        <span>Concept demo by bajwaa.dev — not a live service business</span>
        <Link href="/services/websites">Build a site like this →</Link>
      </div>
      {children}
    </div>
  );
}

/** Headline line that slides up from a mask when revealed. */
export function Line({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <span data-reveal="line" style={{ ["--d" as string]: `${delay}ms`, display: "block", ...style } as CSSProperties}>
      <span>{children}</span>
    </span>
  );
}

/**
 * Photo slot. With `src` it renders the (Higgsfield-generated) photo;
 * without one it renders a deliberate hatched plate with the shot brief,
 * so un-shot slots still read as designed rather than broken.
 */
export function DemoImage({
  src,
  brief,
  gray = false,
  priority = false,
  slow = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  style,
}: {
  src?: string;
  brief: string;
  gray?: boolean;
  priority?: boolean;
  slow?: boolean;
  sizes?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      data-reveal="wipe"
      className={`plate kb ${gray ? "gray" : ""} ${slow ? "kb-slow" : ""} ${className}`}
      style={{ margin: 0, ...style }}
    >
      {src ? (
        <Image src={src} alt={brief} fill priority={priority} sizes={sizes} style={{ objectFit: "cover" }} />
      ) : (
        <>
          <span className="plate-hatch" aria-hidden />
          <figcaption className="plate-cap">Photo — {brief}</figcaption>
        </>
      )}
    </figure>
  );
}

/** Animated stat: counts up the leading number of a value like "4.9★", "212", "$0", "±3%". */
export function CountUp({ value, className, style }: { value: string; className?: string; style?: CSSProperties }) {
  const m = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!m || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, numStr, post] = m;
    // Ratios and times like "24/7" or "9:30" aren't quantities; counting them up reads as nonsense.
    if (/^[/:]/.test(post)) return;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = (numStr.split(".")[1] || "").length;
    const el = ref.current;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1300;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const n = target * eased;
          const txt = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US");
          setShown(pre + txt + post);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setShown(pre + (decimals ? (0).toFixed(decimals) : "0") + post);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className} style={style}>
      {shown}
    </span>
  );
}

/** Post-submit panel shared by every demo form. */
export function DemoSuccessNote({ demo, children }: { demo: string; children?: ReactNode }) {
  return (
    <div style={{ borderTop: "1px solid var(--d-divider)", marginTop: 24, paddingTop: 16, fontSize: 14 }}>
      <p className="muted" style={{ marginBottom: 6 }}>
        {children ?? "In a live build, this books the job, texts the customer, and alerts the team in under 60 seconds."}
      </p>
      <Link
        href={`/contact?offer=modern-lead-generation-website&demo=${demo}`}
        style={{ fontWeight: 700, color: "var(--d-accent)" }}
      >
        Want this for your business? Request a quote from bajwaa.dev →
      </Link>
    </div>
  );
}
