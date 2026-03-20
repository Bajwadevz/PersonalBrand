"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroShutterTextProps {
  text?: string;
  className?: string;
}

export default function HeroShutterText({
  text = "PRACTICAL AI FOR OPERATORS",
  className = "",
}: HeroShutterTextProps) {
  // Split by word so words never break across lines
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={text}
          className="flex flex-wrap justify-center items-center w-full gap-x-[clamp(0.65rem,1.875vw,1.75rem)] gap-y-0"
        >
          {words.map((word, wi) => {
            const wordChars = word.split("");
            const wordStartIndex = globalCharIndex;
            globalCharIndex += word.length + 1; // +1 for the space

            return (
              /* Each word is non-breaking — wrap happens between words only */
              <span key={`word-${wi}`} className="inline-flex items-center whitespace-nowrap">
                {wordChars.map((char, ci) => {
                  const i = wordStartIndex + ci;
                  return (
                    <div key={`${char}-${i}`} className="relative px-[0.05em] overflow-hidden">
                      {/* Main character */}
                      <motion.span
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ delay: i * 0.03 + 0.3, duration: 0.8 }}
                        className="text-[clamp(2.6rem,7.5vw,7rem)] leading-[1.05] font-extrabold text-zinc-900 dark:text-white tracking-tighter block"
                      >
                        {char}
                      </motion.span>

                      {/* Top slice — Ocean accent */}
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 0.7, delay: i * 0.03, ease: "easeInOut" }}
                        className="absolute inset-0 text-[clamp(2.6rem,7.5vw,7rem)] leading-[1.05] font-extrabold text-[#2D6A8F] z-10 pointer-events-none block"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
                      >
                        {char}
                      </motion.span>

                      {/* Middle slice */}
                      <motion.span
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "-100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 0.7, delay: i * 0.03 + 0.1, ease: "easeInOut" }}
                        className="absolute inset-0 text-[clamp(2.6rem,7.5vw,7rem)] leading-[1.05] font-extrabold text-zinc-700 dark:text-zinc-200 z-10 pointer-events-none block"
                        style={{ clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)" }}
                      >
                        {char}
                      </motion.span>

                      {/* Bottom slice — Ocean accent */}
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 0.7, delay: i * 0.03 + 0.2, ease: "easeInOut" }}
                        className="absolute inset-0 text-[clamp(2.6rem,7.5vw,7rem)] leading-[1.05] font-extrabold text-[#2D6A8F] z-10 pointer-events-none block"
                        style={{ clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)" }}
                      >
                        {char}
                      </motion.span>
                    </div>
                  );
                })}
              </span>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
