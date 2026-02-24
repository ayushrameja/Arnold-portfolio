"use client";

import { motion } from "framer-motion";
import { RESUME } from "@/constants/links";

export default function ResumeContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iframeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.15 },
    },
  };

  return (
    <motion.div
      className="relative min-h-dvh overflow-hidden bg-offBlack px-4 pb-28 pt-12 text-cream sm:px-6 lg:h-dvh lg:overflow-hidden lg:px-8 lg:pb-28 lg:pt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background aesthetics — matches rest of site */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-wavy-lines opacity-100" />
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-radial from-mutedGold/5 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-radial from-sageGreen/5 to-transparent blur-3xl opacity-40" />
      </div>

      {/* Falling Dots — same as Hero */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-cream falling-dot"
          style={{
            left: `${10 + i * 18}%`,
            animationDuration: `${3 + (i % 3) * 1.5}s`,
            animationDelay: `${i * 0.9}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1200px] lg:h-full">
        <div className="flex flex-col gap-10 lg:grid lg:h-full lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-8">
          {/* ── Left Sidebar ── */}
          <motion.div
            variants={sidebarVariants}
            className="flex flex-col gap-8 lg:justify-between lg:py-4"
          >
            <div className="flex flex-col gap-8">
              {/* Label */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Career Snapshot
                </p>
                <h1 className="mt-4 font-editorial text-6xl font-bold tracking-tight text-cream sm:text-7xl leading-none">
                  Resume
                </h1>
                <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-cream/70 md:text-base">
                  A chronological overview of my work history, skills, and
                  technical experience.
                </p>
              </div>

              {/* Download Button */}
              <a
                href={RESUME.downloadUrl}
                download
                className="btn-modern btn-primary group inline-flex w-fit cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-sm px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-2xl"
              >
                <span>Download PDF</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </a>

              {/* Info Cards */}
              <div className="grid gap-3">
                {[
                  { label: "Role", value: "Data Analyst & Engineer" },
                  { label: "Location", value: "Vancouver, BC" },
                  { label: "Status", value: "Open to Opportunities" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-sm border border-zinc-800 bg-zinc-900/40 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                      {label}
                    </span>
                    <span className="text-xs font-medium text-cream/80">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating SQL snippet — mirrors Hero floating widget */}
            <div className="hidden rounded-sm border border-zinc-800 bg-offBlack/90 p-5 font-mono text-[11px] text-zinc-500 shadow-2xl backdrop-blur-md lg:block">
              <div className="mb-3 flex gap-1.5">
                <div className="h-2 w-2 rounded-sm bg-red-500/50" />
                <div className="h-2 w-2 rounded-sm bg-amber-500/50" />
                <div className="h-2 w-2 rounded-sm bg-emerald-500/50" />
              </div>
              <div className="space-y-1">
                <p>
                  <span className="text-mutedGold">SELECT</span>{" "}
                  * FROM career_history
                </p>
                <p>
                  <span className="text-mutedGold">WHERE</span> candidate{" "}
                  <span className="text-sageGreen">=</span>
                  <span className="text-zinc-400">
                    &apos;Arnold Desouza&apos;
                  </span>
                </p>
                <p>
                  <span className="text-mutedGold">ORDER BY</span> year{" "}
                  <span className="text-sageGreen">DESC</span>
                </p>
                <p className="mt-2 text-zinc-600">
                  {"// "}Results:{" "}
                  {new Date().getFullYear() - 2021}+ years of impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Resume iframe Panel ── */}
          <motion.div
            variants={iframeVariants}
            className="group relative overflow-hidden rounded-sm border border-zinc-800 bg-offBlack/80 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-mutedGold/30 lg:h-full"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-mutedGold/8 blur-3xl" />
            </div>

            {/* Fake browser chrome bar */}
            <div className="relative flex h-10 items-center justify-between border-b border-zinc-800 bg-zinc-900/70 px-4 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-sm bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-sm bg-amber-500/50" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500/50" />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Arnold Kevin Desouza — Résumé
              </p>
              <div className="w-16" />
            </div>

            <iframe
              src={RESUME.previewUrl}
              title="Arnold Kevin Desouza's Resume"
              className="mt-0 h-[72dvh] w-full lg:h-[calc(100%-2.5rem)]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
