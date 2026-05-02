"use client";

import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

const STACK_LOGOS = [
  { name: "HubSpot",   src: "https://img.logo.dev/hubspot.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=80&format=png",   invert: false },
  { name: "Pipedrive", src: "https://img.logo.dev/pipedrive.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=80&format=png", invert: false },
  { name: "n8n",       src: "/icons/n8n.svg",                                                                         invert: false },
  { name: "Make",      src: "/icons/make.svg",                                                                         invert: false },
  { name: "Zapier",    src: "https://img.logo.dev/zapier.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=80&format=png",    invert: false },
  { name: "Claude AI", src: "/icons/claude.svg",                                                                      invert: false },
  { name: "ChatGPT",   src: "https://img.logo.dev/openai.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=80&format=png",   invert: false },
  { name: "Airtable",  src: "https://img.logo.dev/airtable.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=80&format=png", invert: false },
  { name: "Notion",    src: "/icons/notion.svg",                                                                      invert: false },
];

function LogoItem({ name, src, invert }: { name: string; src: string; invert: boolean }) {
  return (
    <div className="group flex flex-shrink-0 flex-col items-center gap-2.5 cursor-default" title={name}>
      <div className={cn(
        "flex items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-white dark:bg-zinc-800/60 shadow-sm transition-all duration-300 h-14 w-14 p-2.5",
        "group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[rgba(45,106,143,0.35)]"
      )}>
        <img
          src={src}
          alt={name}
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-9 w-9 object-contain transition-all duration-300",
            invert && "dark:invert"
          )}
        />
      </div>
      <span className="text-[11px] font-medium muted-copy group-hover:text-[var(--color-site-text)] transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function StackSlider() {
  return (
    <section
      className="w-full overflow-hidden border-y border-[var(--color-site-border)] py-10"
      aria-label="Tools and platforms"
    >
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] muted-copy">
        Tools I Build With
      </p>
      <ProgressiveBlur leftWidth={140} rightWidth={140}>
        <InfiniteSlider duration={40}>
          {STACK_LOGOS.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </InfiniteSlider>
      </ProgressiveBlur>
    </section>
  );
}
