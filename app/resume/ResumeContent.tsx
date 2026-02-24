"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Download,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";

import { RESUME } from "@/constants/links";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ResumeCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export default function ResumeContent() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative h-dvh overflow-hidden bg-brand-bg p-3 text-white sm:p-4 lg:p-5"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6a73ac] via-brand-bg to-[#4a5274]" />
        <div className="absolute inset-0 bg-wavy-lines opacity-35" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[#C1C9FF]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
      </div>

      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="falling-dot pointer-events-none absolute h-1 w-1 rounded-full bg-white/80"
          style={{
            left: `${15 + i * 22}%`,
            animationDuration: `${3.4 + i * 0.8}s`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px]">
        <motion.div
          variants={containerVariants}
          className="grid h-full min-h-0 gap-3 [grid-template-rows:auto_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)] lg:grid-rows-1 lg:gap-4"
        >
          <div className="grid min-h-0 gap-3 lg:grid-rows-[auto_auto_minmax(0,1fr)] lg:gap-4">
            <ResumeCard className="relative overflow-hidden p-4 sm:p-5">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:bg-white/[0.08]"
                >
                  <ArrowLeft size={14} />
                  Back to Portfolio
                </Link>

                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                  <FileText size={12} className="text-[#C1C9FF]" />
                  Resume Route
                </div>

                <h1 className="mt-4 font-editorial text-3xl leading-none tracking-tight text-white sm:text-4xl">
                  Resume
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-white/72">
                  Fixed page layout on purpose: the resume viewer scrolls, the page
                  doesn&apos;t. Less ambiguity, fewer confused scroll wheels.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href={RESUME.downloadUrl}
                    download
                    data-text="Download PDF"
                    className="hero-cta h-10 rounded-xl bg-white px-4 text-brand-bg"
                  >
                    <span className="hero-cta-label inline-flex items-center gap-2">
                      Download
                      <Download size={13} />
                    </span>
                  </a>
                  <a
                    href={RESUME.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-text="Open Preview"
                    className="hero-cta hero-cta-secondary h-10 rounded-xl px-4 text-white"
                  >
                    <span className="hero-cta-label inline-flex items-center gap-2">
                      Preview
                      <ArrowUpRight size={13} />
                    </span>
                  </a>
                </div>
              </div>
            </ResumeCard>

            <ResumeCard className="p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Snapshot
              </p>

              <div className="mt-3 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-white/85">
                    <Briefcase size={15} className="text-[#C1C9FF]" />
                    Data Analyst & Engineer
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-white/85">
                    <MapPin size={15} className="text-[#C1C9FF]" />
                    Vancouver, BC
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="inline-flex items-center gap-2 text-sm text-white/85">
                    <Sparkles size={15} className="text-[#C1C9FF]" />
                    Open to opportunities
                  </div>
                </div>
              </div>
            </ResumeCard>

            <ResumeCard className="hidden min-h-0 flex-col justify-between p-4 lg:flex">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Notes
                </p>

                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] leading-relaxed text-white/70">
                  <div className="mb-3 flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-300/60" />
                    <div className="h-2 w-2 rounded-full bg-amber-200/60" />
                    <div className="h-2 w-2 rounded-full bg-emerald-200/60" />
                  </div>
                  <p>
                    <span className="text-[#C1C9FF]">SELECT</span> * FROM experience
                  </p>
                  <p>
                    <span className="text-[#C1C9FF]">WHERE</span> focus IN (
                    <span className="text-white/90">&apos;analytics&apos;</span>,
                    <span className="text-white/90"> &apos;engineering&apos;</span>)
                  </p>
                  <p>
                    <span className="text-[#C1C9FF]">ORDER BY</span> impact DESC;
                  </p>
                  <p className="mt-3 text-white/50">
                    {"// "}Legacy systems remain undefeated, but we try.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Viewer Tip
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/72">
                  Scroll inside the resume panel on the right. The page itself is intentionally locked.
                </p>
              </div>
            </ResumeCard>
          </div>

          <ResumeCard className="group relative min-h-0 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#C1C9FF]/12 blur-3xl" />
            </div>

            <div className="relative grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)]">
              <div className="border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-300/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-200/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-200/60" />
                  </div>

                  <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Arnold Kevin Desouza - Resume Preview
                  </p>

                  <a
                    href={RESUME.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 transition hover:bg-white/[0.08]"
                  >
                    Open
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              <div className="min-h-0 p-2 sm:p-3">
                <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                  <iframe
                    src={RESUME.previewUrl}
                    title="Arnold Kevin Desouza Resume"
                    loading="lazy"
                    className="h-full w-full bg-white"
                  />
                </div>
              </div>
            </div>
          </ResumeCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
