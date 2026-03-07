"use client";

import Image from "next/image";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Box } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * AI systems / stack logos for the scrolling credibility strip.
 * Official CDN sources where possible; placeholder for Lovable.
 */
const STACK_LOGOS = [
  {
    name: "ChatGPT",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    width: 120,
    height: 32,
  },
  {
    name: "Claude",
    src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    width: 32,
    height: 32,
  },
  {
    name: "Lovable",
    placeholder: true,
  },
  {
    name: "Supabase",
    src: "/icons/supabase.svg",
    width: 32,
    height: 32,
    imgClassName: "h-8 w-auto opacity-80 hover:opacity-100 transition",
  },
  {
    name: "Vercel",
    src: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    width: 32,
    height: 32,
  },
  {
    name: "Next.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    width: 100,
    height: 32,
  },
  {
    name: "OpenAI",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    width: 120,
    height: 32,
  },
  {
    name: "LangChain",
    src: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    width: 32,
    height: 32,
  },
];

function LogoItem({
  name,
  src,
  placeholder,
  imgClassName,
  width,
  height,
}: {
  name: string;
  src?: string;
  width?: number;
  height?: number;
  placeholder?: boolean;
  imgClassName?: string;
}) {
  if (placeholder) {
    return (
      <div
        className="flex flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-gray-600 h-7"
        title={name}
      >
        <Box className="h-6 w-6 md:h-7 md:w-7 flex-shrink-0" aria-hidden />
        <span className="ml-2 text-sm font-medium">{name}</span>
      </div>
    );
  }
  const isSupabase = name === "Supabase";
  const w = isSupabase ? 32 : width ?? 120;
  const h = height ?? 32;
  return (
    <div
      className={cn(
        "relative flex flex-shrink-0 items-center justify-center",
        isSupabase ? "h-8 w-[120px] max-w-[120px]" : "h-6 md:h-7 w-[120px] max-w-[120px]"
      )}
      title={name}
    >
      <Image
        src={src!}
        alt={name}
        width={w}
        height={h}
        className={imgClassName ?? "h-6 md:h-7 w-auto max-w-[120px] object-contain object-center"}
      />
    </div>
  );
}

export function StackSlider() {
  return (
    <section
      className="w-full bg-white py-10 overflow-hidden"
      aria-label="Tools and platforms"
    >
      <p className="mb-6 text-center text-sm uppercase tracking-wide text-[var(--color-muted-foreground)]">
        Tools & Platforms I Build With
      </p>
      <ProgressiveBlur leftWidth={200} rightWidth={200}>
        <InfiniteSlider duration={35}>
          {STACK_LOGOS.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </InfiniteSlider>
      </ProgressiveBlur>
    </section>
  );
}
