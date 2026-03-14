"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

import { RESUME, LINKS } from "@/constants/links";

const ResumePDFViewer = dynamic(() => import("./ResumePDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex w-full h-full items-center justify-center text-[var(--text-subtle)] animate-pulse">
      Loading Resume...
    </div>
  ),
});

/* ── Animation variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ResumeContent() {
  return (
    <div className="ui-surface-page min-h-dvh text-[var(--text-primary)] font-sans relative flex flex-col lg:flex-row">
      {/* Left Panel */}
      <motion.div
        className="w-full lg:w-[40%] xl:w-[35%] shrink-0 flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10 lg:py-8 lg:h-dvh lg:sticky lg:top-0 lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-[var(--surface-stroke)] bg-[var(--surface-page)] z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Link at the very top */}
        <motion.div variants={slideInLeft}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors w-fit mb-6 lg:mb-10 lg:-ml-1"
          >
            <ArrowLeft className="size-4" />
            <span>Arnold&apos;s Portfolio / <span className="text-[var(--text-primary)] font-semibold">Resume</span></span>
          </Link>
        </motion.div>

        {/* Content Container */}
        <div className="w-full flex-1 max-w-sm mx-auto lg:mx-0 flex flex-col gap-10 justify-between pb-6 lg:pb-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[var(--text-primary)]"
                variants={fadeUp}
              >
                Resume
              </motion.h1>
              <motion.p
                className="max-w-[32ch] text-base leading-snug text-[var(--text-subtle)] [text-wrap:balance] sm:text-lg"
                variants={fadeUp}
              >
                A chronological overview of my work history, skills, and technical experience.
              </motion.p>
            </div>

            <motion.a
              href={RESUME.downloadUrl}
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[var(--text-primary)] px-6 py-3.5 text-sm font-semibold tracking-wide text-[var(--surface-page)] transition-all hover:bg-[var(--text-subtle)] hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[var(--surface-stroke)] mt-2"
              download
              variants={fadeUp}
            >
              DOWNLOAD PDF
              <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            </motion.a>
          </div>

          {/* Contact & Availability */}
          <motion.div className="flex flex-col gap-4 mt-2" variants={fadeUp}>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">Get in touch</h3>
              <div className="flex items-center gap-2.5">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-[var(--text-subtle)]">Available for opportunities</span>
              </div>
            </div>

            {/* Social Links Pill (Theme Adaptive) */}
            <div className="inline-flex items-center rounded-full bg-[var(--surface-card)] border border-[var(--surface-stroke)] divide-x divide-[var(--surface-stroke)] shadow-sm overflow-hidden w-fit mt-1">
              <a href={`mailto:${LINKS.email}`} className="px-5 py-3.5 sm:px-6 sm:py-4 transition-colors hover:bg-[var(--surface-active)] group" aria-label="Email">
                <Mail className="size-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
              <a href={LINKS.phoneHref} className="px-5 py-3.5 sm:px-6 sm:py-4 transition-colors hover:bg-[var(--surface-active)] group" aria-label="Phone">
                <Phone className="size-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-3.5 sm:px-6 sm:py-4 transition-colors hover:bg-[var(--surface-active)] group" aria-label="LinkedIn">
                <Linkedin className="size-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-5 py-3.5 sm:px-6 sm:py-4 transition-colors hover:bg-[var(--surface-active)] group" aria-label="GitHub">
                <Github className="size-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel (PDF Viewer) */}
      <motion.div
        className="w-full flex-1 h-[75vh] lg:h-dvh relative"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ResumePDFViewer url="/assets/resume/Resume Arnold.pdf" />
      </motion.div>
    </div>
  );
}
