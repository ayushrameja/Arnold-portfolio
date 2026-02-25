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

const tierStyles = {
  primary: "rounded-2xl border border-white/12 bg-white/6",
  secondary: "rounded-2xl border border-white/10 bg-white/5",
  tertiary: "rounded-2xl border border-white/8 bg-white/4",
} as const;

function HeroCard({
  children,
  className,
  tier = "secondary",
}: {
  children: React.ReactNode;
  className?: string;
  tier?: "primary" | "secondary" | "tertiary";
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`${tierStyles[tier]} ${className ?? ""}`}
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
      className="relative flex min-h-dvh items-center justify-center bg-transparent px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-3 sm:gap-4 lg:h-[min(920px,calc(100dvh-2.5rem))] lg:grid-cols-12 lg:grid-rows-10 lg:gap-4"
      >
        <HeroCard
          tier="primary"
          className="hero-name-card relative order-1 min-h-0 overflow-hidden p-6 sm:p-8 lg:order-0 lg:col-span-9 lg:row-span-4 lg:p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/4 blur-[80px]" />

          <div className="relative z-10 flex h-full min-h-0 flex-col justify-between gap-4">
            <div>
              <p className="text-[clamp(1.05rem,1.35vw,1.45rem)] leading-none text-white/95">
                Hi, I&apos;m
              </p>
              <h1 className="mt-2 font-editorial text-[clamp(2rem,5vw,3.75rem)] leading-none tracking-[-0.03em] whitespace-nowrap text-white">
                Arnold Kevin Desouza
              </h1>
              <p className="mt-6 max-w-[54ch] text-[clamp(1.02rem,1.25vw,1.4rem)] leading-[1.42] text-white/82">
                I turn complex datasets into decision-ready systems: resilient
                pipelines, useful dashboards, and automation that won&apos;t
                become next quarter&apos;s cleanup job.
              </p>
            </div>

            <p className="mt-auto text-[clamp(0.95rem,1.15vw,1.35rem)] leading-tight tracking-tight text-white/95">
              <span className="font-semibold">Python</span>
              <span className="mx-2 text-white/55 sm:mx-3">&bull;</span>
              <span className="font-semibold">SQL</span>
              <span className="mx-2 text-white/55 sm:mx-3">&bull;</span>
              <span className="font-semibold uppercase">Tableau</span>
              <span className="mx-2 text-white/55 sm:mx-3">&bull;</span>
              <span className="font-semibold">Power BI</span>
            </p>
          </div>
        </HeroCard>

        <HeroCard
          tier="tertiary"
          className="order-5 p-4 sm:p-5 lg:order-0 lg:col-span-3 lg:row-span-2 lg:p-5"
        >
          <div className="grid h-full grid-rows-[auto_1fr] gap-3">
            <h3 className="font-editorial text-xl leading-none font-light text-white">
              Socials
            </h3>

            <div className="grid h-full min-h-[72px] items-center">
              <div className="grid h-full min-h-[60px] grid-cols-4 overflow-hidden rounded-xl border border-white/10 bg-white/4">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid place-items-center text-white/80 transition hover:bg-white/6 hover:text-white"
                >
                  <Linkedin size={24} strokeWidth={2} />
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid place-items-center border-l border-white/10 text-white/80 transition hover:bg-white/6 hover:text-white"
                >
                  <Github size={24} strokeWidth={2} />
                </a>
                <a
                  href="/resume"
                  aria-label="Resume"
                  className="grid place-items-center border-l border-white/10 text-white/80 transition hover:bg-white/6 hover:text-white"
                >
                  <Briefcase size={24} strokeWidth={2} />
                </a>
                <a
                  href={`mailto:${LINKS.email}`}
                  aria-label="Email"
                  className="grid place-items-center border-l border-white/10 text-white/80 transition hover:bg-white/6 hover:text-white"
                >
                  <Mail size={24} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard
          tier="tertiary"
          className="order-6 p-4 sm:p-5 lg:order-0 lg:col-span-3 lg:row-span-2 lg:p-5"
        >
          <div className="grid h-full content-center gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Local Time
              </p>
              <p className="mt-1 font-editorial text-2xl leading-none font-light text-white sm:text-[2rem]">
                {localTime || "\u2014:\u2014"}
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

        <HeroCard className="relative order-2 min-h-[340px] overflow-hidden p-3 lg:order-0 lg:col-span-3 lg:row-span-4 lg:min-h-0">
          <div className="relative h-full w-full overflow-hidden rounded-xl ring-1 ring-inset ring-white/10">
            <Image
              src="/assets/image/arnold.png"
              alt="Arnold Kevin Desouza"
              fill
              priority
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
            />
          </div>
        </HeroCard>

        <HeroCard
          tier="primary"
          className="relative order-3 overflow-hidden p-5 sm:p-6 lg:order-0 lg:col-span-5 lg:row-span-4 lg:p-6"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-white/3 to-transparent" />
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

        <HeroCard className="order-4 min-h-0 p-4 sm:p-5 lg:order-0 lg:col-span-4 lg:row-span-4 lg:p-5">
          <div className="grid h-full min-h-0 grid-rows-[auto_1fr] gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C1C9FF]/70">
                Tech Arsenal
              </p>
              <h3 className="mt-1 text-2xl font-semibold leading-none text-white sm:text-3xl">
                Stack I Use
              </h3>
            </div>

            <div className="grid h-full min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-white/4">
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
                    className="flex min-h-0 flex-col items-center justify-center gap-2 border-white/10 px-2 py-3 text-white/85 [border-right:1px_solid_rgba(255,255,255,0.08)] [border-bottom:1px_solid_rgba(255,255,255,0.08)] nth-[3n]:[border-right:none] nth-last-[-n+3]:[border-bottom:none]"
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

        <HeroCard
          tier="tertiary"
          className="order-8 p-5 sm:p-6 lg:order-0 lg:col-span-4 lg:row-span-2 lg:p-6"
        >
          <div className="grid h-full place-items-center">
            <div className="grid h-full w-full grid-cols-[1fr_auto_1fr] items-center">
              <div className="flex h-full items-center justify-center">
                <Link
                  href="/"
                  className="font-plaster text-logo-gradient text-[2.5rem] leading-none sm:text-[3rem] lg:text-[3.25rem]"
                >
                  AKD
                </Link>
              </div>
              <span
                className="h-8 w-px bg-white/20 sm:h-10 lg:h-12"
                aria-hidden="true"
              />
              <div className="flex h-full items-center justify-center">
                <span className="text-[1.15rem] font-normal uppercase tracking-[0.08em] text-[#C1C9FF] sm:text-[1.2rem] lg:text-[1.35rem]">
                  Portfolio
                </span>
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="order-7 p-5 sm:p-6 lg:order-0 lg:col-span-8 lg:row-span-2 lg:p-6">
          <div className="flex h-full flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/45">
              <Mail size={14} />
              <span>Let&apos;s Work Together</span>
            </div>

            <h3 className="font-editorial text-[clamp(1.2rem,1.8vw,1.75rem)] leading-[1.05] tracking-tight font-light text-white lg:flex-1">
              Open to full-time and contract roles.
            </h3>

            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <a
                href={`mailto:${LINKS.email}`}
                className="truncate rounded-xl border border-white/10 bg-white/3 px-4 py-2.5 text-sm text-white/85 transition hover:bg-white/6"
              >
                {LINKS.email}
              </a>
              <button
                type="button"
                onClick={() => scrollToTarget("contact", lenis as any, 80)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/3 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/6 active:scale-95"
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
