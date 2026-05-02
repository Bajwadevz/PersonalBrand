"use client";

import Image from "next/image";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

const STACK_LOGOS = [
  { name: "HubSpot",   src: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png", w: 40, h: 40, square: true,  inv: false },
  { name: "Pipedrive", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pipedrive_logo.png/320px-Pipedrive_logo.png", w: 64, h: 32, square: false, inv: false },
  { name: "n8n",       src: "/icons/n8n.svg",      w: 72, h: 32, square: false, inv: false },
  { name: "Make",      src: "/icons/make.svg",      w: 40, h: 40, square: true,  inv: false },
  { name: "Zapier",    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/320px-Zapier_logo.svg.png", w: 64, h: 32, square: false, inv: false },
  { name: "Claude AI", src: "/icons/claude.svg",   w: 40, h: 40, square: true,  inv: false },
  { name: "ChatGPT",   src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", w: 40, h: 40, square: true,  inv: false },
  { name: "Airtable",  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/320px-Airtable_Logo.svg.png", w: 64, h: 32, square: false, inv: false },
  { name: "Notion",    src: "/icons/notion.svg",   w: 40, h: 40, square: true,  inv: false },
];

function LogoItem({ name, src, w, h, square, inv }: {
  name: string; src: string; w: number; h: number; square: boolean; inv: boolean;
}) {
  return (
    <div className="group flex flex-shrink-0 flex-col items-center gap-2.5 cursor-default" title={name}>
      <div className={cn(
        "flex items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-white dark:bg-zinc-800/60 shadow-sm transition-all duration-300",
        "group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[rgba(45,106,143,0.35)]",
        square ? "h-14 w-14 p-2.5" : "h-14 px-3 py-2.5"
      )}>
        <Image
          src={src}
          alt={name}
          width={w}
          height={h}
          className={cn(
            "object-contain transition-all duration-300",
            square ? "h-8 w-8" : "h-7 w-auto max-w-[72px]",
            inv && "dark:invert"
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
