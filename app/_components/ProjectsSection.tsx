"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";

import type { Project } from "@/types/project";
import { projects } from "@/utils/projectData";
import { scrollFadeUp } from "@/lib/animations";
import TextReveal from "@/components/TextReveal";

export default function ProjectsSection() {
  const totalOutcomes = projects.reduce(
    (count, project) => count + project.points.length,
    0,
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={scrollFadeUp}
          className="grid gap-4 lg:grid-cols-12"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 lg:col-span-8 lg:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-[70px]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                <Sparkles size={12} className="text-[#C1C9FF]" />
                Featured Projects
              </div>

              <div className="mt-5 max-w-4xl">
                <TextReveal
                  as="h2"
                  className="font-editorial text-4xl leading-none tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                  Selected Work
                </TextReveal>
                <TextReveal
                  as="p"
                  delay={0.08}
                  className="mt-5 max-w-[60ch] text-base leading-relaxed text-white/75 sm:text-lg"
                >
                  A curated set of analytics and data engineering work focused
                  on resilient pipelines, reporting systems, and fewer
                  spreadsheet-related crimes.
                </TextReveal>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Projects
              </p>
              <p className="mt-2 font-editorial text-4xl leading-none text-white">
                {projects.length}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Production-facing data work across hospitality, aviation, auto,
                and healthcare domains.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Outcomes Logged
                </p>
                <Layers3 size={14} className="text-[#C1C9FF]/90" />
              </div>
              <p className="mt-2 font-editorial text-4xl leading-none text-white">
                {totalOutcomes}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Highlights summarized per project. The real work was messier,
                naturally.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 space-y-4 sm:mt-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scrollFadeUp}
            >
              <ProjectCard project={project} index={index + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(20,25,57,0.18)] backdrop-blur-md transition duration-300 hover:bg-white/[0.07] sm:p-5 lg:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 left-1/4 h-44 w-44 rounded-full bg-[#C1C9FF]/15 blur-3xl" />
      </div>

      <div className="relative grid gap-4 lg:grid-cols-12 lg:gap-6">
        <div className="min-w-0 lg:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-2 text-[11px] font-semibold text-white/80">
              {String(index).padStart(2, "0")}
            </span>
            <span className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
              {project.role}
            </span>
          </div>

          <h3 className="mt-4 font-editorial text-2xl leading-tight tracking-tight text-white sm:text-3xl">
            {project.name}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
            {project.client}
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Stack / Tooling
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/75"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {project.link && (
            <div className="mt-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/[0.08]"
              >
                View Project
                <ArrowUpRight size={14} />
              </Link>
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Key Outcomes
                </p>
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-semibold text-white/65">
                  {project.points.length}
                </span>
              </div>

              <ul className="mt-4 space-y-3.5">
                {project.points.map((point: string, pointIndex: number) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C1C9FF] ring-4 ring-white/5"
                    />
                    <span className="text-sm leading-relaxed text-white/82 sm:text-[0.95rem]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:w-[170px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Client
                </p>
                <p className="mt-2 text-sm leading-snug text-white/80">
                  {project.client}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-snug text-white/80">
                  {project.skills.slice(0, 2).join(" + ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
