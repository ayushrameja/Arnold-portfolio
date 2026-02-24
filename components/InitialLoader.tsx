"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type InitialLoaderProps = {
  onComplete: () => void;
};

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [phase, setPhase] = useState<"pre" | "enter" | "exit">("pre");
  const letters = ["A", "K", "D"] as const;

  useEffect(() => {
    const enterFrame = window.requestAnimationFrame(() => setPhase("enter"));
    const exitTimer = window.setTimeout(() => setPhase("exit"), 1650);
    const doneTimer = window.setTimeout(onComplete, 2850);

    return () => {
      window.cancelAnimationFrame(enterFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-99 flex flex-col items-center justify-center bg-brand-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{
        duration: 0.45,
        delay: phase === "exit" ? 0.58 : 0,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      <motion.div
        className="font-plaster text-[5rem] sm:text-[7rem] md:text-[9rem]"
        initial="hidden"
        animate={phase === "pre" ? "hidden" : phase}
        variants={{
          enter: {
            transition: {
              staggerChildren: 0.28,
              delayChildren: 0.12,
            },
          },
          exit: {
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {letters.map((letter) => (
          <motion.span
            key={letter}
            className="text-logo-gradient inline-block opacity-0"
            variants={{
              hidden: {
                opacity: 0,
                y: 28,
                scale: 0.92,
                filter: "blur(8px)",
              },
              enter: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.62,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
              exit: {
                opacity: 0,
                y: 34,
                scale: 0.97,
                filter: "blur(8px)",
                transition: {
                  duration: 0.42,
                  ease: [0.65, 0, 0.35, 1],
                },
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
