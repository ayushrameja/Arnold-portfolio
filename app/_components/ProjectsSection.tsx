"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { Project } from "@/types/project";
import { projects } from "@/utils/projectData";
import { scrollFadeUp } from "@/lib/animations";
import TextReveal from "@/components/TextReveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-offBlack px-6 py-32">
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-wavy-lines opacity-100" />
        <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-radial from-mutedGold/5 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <TextReveal as="h2" className="font-editorial text-5xl font-bold tracking-tight text-cream sm:text-6xl md:text-7xl">
              Selected Work
            </TextReveal>
            <TextReveal as="p" delay={0.1} className="mt-6 text-lg font-light leading-relaxed text-cream/70 sm:text-xl md:text-2xl">
              A curated selection of projects demonstrating complex data transformations and elegant engineering solutions.
            </TextReveal>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scrollFadeUp}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-zinc-800 bg-offBlack/80 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-mutedGold/30 hover:bg-offBlack">
      {/* Dynamic Hover Glow Array */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-mutedGold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-28 h-72 w-72 rounded-full bg-sageGreen/10 blur-3xl" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="min-w-0 lg:col-span-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-cream/70">
                {project.client}
              </span>
              <span className="rounded-sm border border-mutedGold/20 bg-mutedGold/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-mutedGold">
                {project.role}
              </span>
            </div>

            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-800 bg-offBlack px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-sageGreen/50 hover:text-sageGreen"
              >
                <span>View Project</span>
                <span aria-hidden className="text-sageGreen/70">
                  ↗
                </span>
              </Link>
            )}
          </div>

          <h3 className="mt-8 font-editorial text-4xl font-bold tracking-tight text-cream sm:text-5xl group-hover:text-mutedGold transition-colors duration-500">
            {project.name}
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-sm border border-zinc-800/80 bg-zinc-800/30 px-3 py-1 text-[11px] font-mono text-zinc-400 transition-colors group-hover:border-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:col-span-7 lg:border-l lg:border-zinc-800 lg:pl-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Key Outcomes
          </p>

          <ul className="mt-6 space-y-5">
            {project.points.map((point: string, index: number) => (
              <li key={index} className="flex gap-4 items-start">
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-sageGreen/80 ring-2 ring-sageGreen/20"
                />
                <span className="text-sm font-light leading-relaxed text-cream/80 md:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
