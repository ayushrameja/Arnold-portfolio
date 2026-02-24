"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
} from "lucide-react";

import { LINKS } from "@/constants/links";
import { scrollToTarget } from "@/utils/scroll";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function useVancouverTime() {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Vancouver",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    [],
  );

  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const interval = window.setInterval(
      () => setTime(formatter.format(new Date())),
      1000,
    );
    return () => window.clearInterval(interval);
  }, [formatter]);

  return time;
}

function HeroCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`rounded-2xl border border-white/10 bg-white/5 ${
        className ?? ""
      }`}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const lenis = useLenis();
  const localTime = useVancouverTime();

  return (
    <section
      id="about"
      className="relative flex min-h-dvh items-center justify-center bg-brand-bg px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-3 sm:gap-4 lg:h-[min(920px,calc(100dvh-2.5rem))] lg:grid-cols-12 lg:grid-rows-10 lg:gap-4"
      >
        <HeroCard className="p-5 sm:p-6 lg:col-span-5 lg:row-span-2 lg:p-6">
          <div className="grid h-full place-items-center">
            <div className="grid h-full w-full grid-cols-[1fr_auto_1fr] items-center">
              <div className="flex h-full items-center justify-center">
                <Link
                  href="/"
                  className="font-plaster text-logo-gradient text-[2.5rem] leading-none sm:text-[3.5rem] lg:text-[3.75rem]"
                >
                  AKD
                </Link>
              </div>
              <span
                className="h-8 w-px bg-white/20 sm:h-10 lg:h-12"
                aria-hidden="true"
              />
              <div className="flex h-full items-center justify-center">
                <span className="text-[1.35rem] font-normal uppercase tracking-[0.08em] text-[#C1C9FF] sm:text-[1.25rem] lg:text-[1.5rem]">
                  Portfolio
                </span>
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="p-5 sm:p-6 lg:col-span-3 lg:row-span-2 lg:p-6">
          <div className="grid h-full content-center gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Local Time
              </p>
              <p className="mt-1 font-editorial text-3xl leading-none font-light text-white sm:text-[2.15rem]">
                {localTime || "—:—"}
              </p>
            </div>

            <div className="grid gap-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Based In
              </p>
              <p className="text-sm font-medium text-white/90">Vancouver, BC</p>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="p-4 sm:p-5 lg:col-span-4 lg:row-span-2 lg:p-5">
          <div className="grid h-full grid-rows-[auto_1fr] gap-4">
            <h3 className="font-editorial text-2xl leading-none font-light text-white">
              Socials
            </h3>

            <div className="grid h-full min-h-[84px] items-center">
              <div className="grid h-full min-h-[72px] grid-cols-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid place-items-center text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Linkedin size={30} strokeWidth={2} />
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid place-items-center border-l border-white/10 text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Github size={30} strokeWidth={2} />
                </a>
                <a
                  href="/resume"
                  aria-label="Resume"
                  className="grid place-items-center border-l border-white/10 text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Briefcase size={30} strokeWidth={2} />
                </a>
                <a
                  href={`mailto:${LINKS.email}`}
                  aria-label="Email"
                  className="grid place-items-center border-l border-white/10 text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Mail size={30} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="relative overflow-hidden p-3 lg:col-span-3 lg:row-span-4">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/image/arnold.png"
              alt="Arnold Kevin Desouza"
              fill
              priority
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
            />
          </div>
        </HeroCard>

        <HeroCard className="relative min-h-0 overflow-hidden p-5 sm:p-6 lg:col-span-6 lg:row-span-4 lg:p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.04] blur-[70px]" />

          <div className="relative z-10 flex h-full min-h-0 flex-col justify-between gap-4">
            <div>
              <p className="text-[clamp(1.05rem,1.35vw,1.45rem)] leading-none text-white/95">
                Hi, I&apos;m
              </p>
              <h1 className="mt-3 font-editorial text-[clamp(1.15rem,4vw,3.1rem)] leading-none tracking-[-0.03em] whitespace-nowrap text-white">
                Arnold Kevin Desouza
              </h1>
              <p className="mt-5 max-w-[46ch] text-[clamp(1.02rem,1.25vw,1.4rem)] leading-[1.42] text-white/82">
                I turn complex datasets into decision-ready systems: resilient
                pipelines, useful dashboards, and automation that won&apos;t
                become next quarter&apos;s cleanup job.
              </p>
            </div>

            <p className="text-[clamp(0.95rem,1.15vw,1.35rem)] leading-tight tracking-tight text-white/95">
              <span className="font-semibold">Python</span>
              <span className="mx-2 text-white/55 sm:mx-3">•</span>
              <span className="font-semibold">SQL</span>
              <span className="mx-2 text-white/55 sm:mx-3">•</span>
              <span className="font-semibold uppercase">Tableau</span>
              <span className="mx-2 text-white/55 sm:mx-3">•</span>
              <span className="font-semibold">Power BI</span>
            </p>
          </div>
        </HeroCard>

        <HeroCard className="min-h-0 p-4 sm:p-5 lg:col-span-3 lg:row-span-4 lg:p-5">
          <div className="grid h-full min-h-0 grid-rows-[auto_1fr] gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C1C9FF]/70">
                Tech Arsenal
              </p>
              <h3 className="mt-1 text-2xl font-semibold leading-none text-white sm:text-3xl">
                Stack I Use
              </h3>
            </div>

            <div className="grid h-full min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
              <div className="grid h-full min-h-0 grid-cols-3 grid-rows-2">
                {[
                  { label: "SQL", icon: Database },
                  { label: "Python", icon: Code2 },
                  { label: "ETL", icon: Workflow },
                  { label: "BI", icon: BarChart3 },
                  { label: "DBT", icon: Sparkles },
                  { label: "Maps", icon: MapPin },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex min-h-0 flex-col items-center justify-center gap-2 border-white/10 px-2 py-3 text-white/85 [border-right:1px_solid_rgba(255,255,255,0.08)] [border-bottom:1px_solid_rgba(255,255,255,0.08)] [&:nth-child(3n)]:[border-right:none] [&:nth-last-child(-n+3)]:[border-bottom:none]"
                  >
                    <Icon size={34} strokeWidth={2} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="relative overflow-hidden p-5 sm:p-6 lg:col-span-7 lg:row-span-4 lg:p-6">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/[0.03] to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-5">
            <div>
              <p className="text-[clamp(0.95rem,1vw,1.1rem)] leading-none text-white/95">
                Currently
              </p>
              <h3 className="mt-3 font-editorial text-[clamp(1.4rem,2.1vw,2.3rem)] leading-[1.02] tracking-tight text-white">
                Building better reporting systems and cleaner analytics
                handoffs.
              </h3>
              <p className="mt-4 text-[clamp(1.02rem,1.25vw,1.4rem)] leading-[1.45] text-white/78">
                I focus on repeatable workflows, performance-minded
                transformations, and dashboards that reduce back-and-forth
                instead of creating more of it.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToTarget("projects", lenis as any, 80)}
                data-text="Selected Work"
                className="hero-cta h-11 cursor-pointer rounded-xl bg-white px-5 text-brand-bg"
              >
                <span className="hero-cta-label">Selected Work</span>
              </button>
              <Link
                href="/resume"
                data-text="Resume"
                className="hero-cta hero-cta-secondary h-11 rounded-xl px-4 text-white"
              >
                <span className="hero-cta-label">Resume</span>
              </Link>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="p-5 sm:p-6 lg:col-span-5 lg:row-span-4 lg:p-6">
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/45">
              <Mail size={14} />
              <span>Let&apos;s Work Together</span>
            </div>

            <div>
              <h3 className="font-editorial text-[clamp(1.4rem,2.1vw,2.3rem)] leading-[1.02] tracking-tight font-light text-white">
                Open to full-time and contract roles.
              </h3>
              <p className="mt-3 text-[clamp(1.02rem,1.25vw,1.4rem)] leading-[1.45] text-white/60">
                If you need cleaner analytics, reliable pipelines, or fewer
                spreadsheet emergencies, I&apos;m interested.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
              <a
                href={`mailto:${LINKS.email}`}
                className="truncate rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85 transition hover:bg-white/[0.06]"
              >
                {LINKS.email}
              </a>
              <button
                type="button"
                onClick={() => scrollToTarget("contact", lenis as any, 80)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/[0.06] active:scale-95"
              >
                Contact <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </HeroCard>
      </motion.div>
    </section>
  );
}
