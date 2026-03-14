"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VANCOUVER_TIME = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Vancouver",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function getVancouverTime() {
  return VANCOUVER_TIME.format(new Date());
}

/** Minimum time the loader stays visible (ms) */
const MIN_DURATION = 1000;

export default function IntroLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [show, setShow] = useState(true);
  const timeLabel = getVancouverTime();

  /* Lock scroll while loader is visible */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShow(false);
    }, MIN_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        /* Scroll to top when loader finishes, then notify parent */
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        onComplete();
      }}
    >
      {show && (
        <motion.div
          key="intro-loader"
          className="fixed inset-0 z-[10000] flex flex-col overflow-hidden"
          style={{ backgroundColor: "var(--surface-page)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Top bar – matches loader skeleton */}
          <div className="mx-auto w-full max-w-[84rem] px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10 lg:pt-8">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-4">
              <motion.div
                className="order-2 sm:order-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-sm leading-tight tracking-tight sm:text-base md:text-lg">
                  <span className="font-semibold">Data Analyst</span> for work
                </p>
                <p className="text-sm leading-tight tracking-tight sm:text-base md:text-lg">
                  <span className="font-semibold">Apex &amp; Football</span>{" "}
                  for fun
                </p>
              </motion.div>

              <motion.p
                className="order-1 text-center font-logo text-[clamp(1.75rem,4vw,3.125rem)] leading-none tracking-[0.02em] sm:order-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                AKD
              </motion.p>

              <motion.div
                className="order-3 text-left sm:text-right"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <p
                  suppressHydrationWarning
                  className="text-sm tracking-tight text-[var(--text-muted)] sm:text-base"
                >
                  {timeLabel}
                </p>
                <p className="text-base font-semibold tracking-tight sm:text-lg md:text-xl">
                  Vancouver, BC
                </p>
              </motion.div>
            </div>
          </div>

          {/* Center – loading bar only */}
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <motion.p
                className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-muted)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              >
                Loading
              </motion.p>

              <div className="mx-auto mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-[var(--surface-inset)]">
                <motion.div
                  className="h-full rounded-full bg-[var(--text-muted)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: Math.max(MIN_DURATION / 1000 - 0.2, 0.2),
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
