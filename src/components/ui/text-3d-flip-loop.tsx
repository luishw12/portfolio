"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Text3DFlipLoopProps {
  words: string[];
  /** Tempo entre trocas (ms) */
  interval?: number;
  className?: string;
  /** Delay entre letras (s) */
  staggerDuration?: number;
}

/**
 * Loop de frases com efeito 3D letter-flip (estilo Magic UI Text3DFlip).
 */
export function Text3DFlipLoop({
  words,
  interval = 3200,
  className,
  staggerDuration = 0.028,
}: Text3DFlipLoopProps) {
  const [index, setIndex] = useState(0);
  const current = words[index] ?? "";

  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, words.length]);

  const chars = Array.from(current);

  return (
    <div
      className={cn(
        "relative flex min-h-[1.4em] items-center justify-center overflow-visible lg:justify-start",
        className
      )}
      style={{ perspective: 800 }}
      aria-live="polite"
    >
      <span className="sr-only">{current}</span>

      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          className="inline-flex flex-wrap justify-center lg:justify-start [transform-style:preserve-3d]"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: staggerDuration },
            },
            exit: {
              transition: { staggerChildren: staggerDuration / 1.5, staggerDirection: -1 },
            },
          }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={`${current}-${i}`}
              className="inline-block origin-center whitespace-pre [transform-style:preserve-3d] [backface-visibility:hidden]"
              variants={{
                hidden: {
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                visible: {
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    type: "spring",
                    damping: 22,
                    stiffness: 200,
                  },
                },
                exit: {
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                  transition: { duration: 0.28, ease: "easeIn" },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
