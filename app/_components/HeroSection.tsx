"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { scrollToTarget } from "@/utils/scroll";

export default function HeroSection() {
  const lenis = useLenis();

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Deep Off-Black Background with Wavy Lines and Falling Dots */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-offBlack" />
        <div className="absolute inset-0 bg-wavy-lines opacity-100" />

        {/* Falling Bright Dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cream falling-dot"
            style={{
              left: `${15 + i * 14}%`,
              animationDuration: `${3 + (i % 3) * 1.5}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}

        {/* Deep, vast radial ambient glow to give depth to the wavy lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1000px] w-[1000px] rounded-full bg-radial from-mutedGold/5 via-sageGreen/5 to-transparent blur-3xl opacity-70" />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={staggerContainer()}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center">
          {/* Increased Size Profile Portrait */}
          <motion.div variants={fadeInUp} className="group relative mb-8">
            {/* Hover Glow */}
            <div className="absolute -inset-4 rounded-full bg-linear-to-b from-mutedGold/40 to-sageGreen/30 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />

            <div className="relative h-48 w-48 overflow-hidden rounded-full shadow-2xl ring-1 ring-cream/20 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <Image
                src="/assets/image/arnold.png"
                alt="Arnold Kevin Desouza"
                fill
                priority
                className="object-cover transition duration-1000 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-mutedGold/5 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </motion.div>

          {/* Editorial Typography */}
          <motion.div variants={fadeInUp} className="w-full relative">
            <h1 className="font-editorial text-5xl font-bold tracking-tight text-cream sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-none">
              Arnold Desouza
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-cream/70 sm:text-2xl">
              Data Analyst & Engineer transforming complex data into singular,
              elegant solutions based in{" "}
              <span className="text-cream">Vancouver, BC</span>.
            </p>

            {/* Sharp, Complex Animated Action Buttons */}
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                type="button"
                onClick={() => scrollToTarget("projects", lenis as any)}
                className="btn-modern btn-primary inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-sm px-10 py-4 text-xs font-semibold tracking-[0.2em] sm:w-auto uppercase shadow-2xl"
              >
                Selected Work
              </button>

              <Link
                href="/resume"
                className="btn-modern btn-secondary inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-sm px-10 py-4 text-xs font-semibold tracking-[0.2em] backdrop-blur-md sm:w-auto uppercase shadow-xl"
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="pointer-events-none absolute left-[5%] xl:left-[10%] top-[15%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-sm border border-zinc-800 bg-offBlack/90 p-5 font-mono text-[11px] text-zinc-500 shadow-2xl backdrop-blur-md"
        >
          <div className="flex gap-1.5 mb-3">
            <div className="h-2 w-2 rounded-sm bg-red-500/50"></div>
            <div className="h-2 w-2 rounded-sm bg-amber-500/50"></div>
            <div className="h-2 w-2 rounded-sm bg-emerald-500/50"></div>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-mutedGold">SELECT</span> skill, expertise
              {" "}
              <span className="text-mutedGold">FROM</span> arnold_portfolio
            </p>
            <p>
              <span className="text-mutedGold">WHERE</span> tool{" "}
              <span className="text-sageGreen">IN</span>{" "}
              <span className="text-zinc-400">
                (&apos;Python&apos;, &apos;SQL&apos;, &apos;Tableau&apos;)
              </span>
            </p>
            <p className="text-zinc-600 mt-2">
              {"//"} Record found. Status: Expert.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Metric - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="pointer-events-none absolute right-[5%] xl:right-[10%] top-[70%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="flex flex-col gap-3 rounded-sm border border-zinc-800 bg-offBlack/90 p-4 shadow-2xl backdrop-blur-md min-w-[160px]"
        >
          <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
            ETL Pipelines Built
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-editorial text-4xl text-cream">24</span>
            <span className="text-sm font-sans text-sageGreen font-semibold">
              sys
            </span>
          </div>
          <div className="h-1 w-full bg-zinc-800 rounded-sm overflow-hidden mt-1 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeOut", delay: 1.5 }}
              className="absolute top-0 left-0 h-full bg-linear-to-r from-mutedGold to-sageGreen"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        variants={fadeInUp}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-cream">
          Scroll
        </span>
        <div className="h-12 w-px bg-linear-to-b from-cream to-transparent opacity-30">
        </div>
      </motion.div>
    </section>
  );
}
