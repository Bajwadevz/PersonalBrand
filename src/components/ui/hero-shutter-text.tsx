"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroTextProps {
  text?: string;
  className?: string;
}

export default function HeroText({
  text = "AUTOMATION",
  className = "",
}: HeroTextProps) {
  const characters = text.split("");

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center whitespace-nowrap",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={text}
          className="flex justify-center items-center w-full min-w-max whitespace-nowrap"
        >
          {characters.map((char, i) => (
            <div
              key={`${char}-${i}`}
              className="relative px-[0.1vw] overflow-hidden group"
            >
              {/* Main Character - Responsive sizing using clamp */}
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: i * 0.02 + 0.3, duration: 0.8 }}
                className="text-[clamp(1.5rem,5.5vw,4.5rem)] leading-none font-black text-zinc-900 tracking-tighter sm:tracking-normal whitespace-pre"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Top Slice Layer - light theme accent */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.02,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 text-[clamp(1.5rem,5.5vw,4.5rem)] leading-none font-black text-indigo-600 z-10 pointer-events-none tracking-tighter sm:tracking-normal whitespace-pre"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Middle Slice Layer */}
              <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "-100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.02 + 0.1,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 text-[clamp(1.5rem,5.5vw,4.5rem)] leading-none font-black text-zinc-800 z-10 pointer-events-none tracking-tighter sm:tracking-normal whitespace-pre"
                style={{
                  clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Bottom Slice Layer - light theme accent */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.02 + 0.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 text-[clamp(1.5rem,5.5vw,4.5rem)] leading-none font-black text-indigo-600 z-10 pointer-events-none tracking-tighter sm:tracking-normal whitespace-pre"
                style={{
                  clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
