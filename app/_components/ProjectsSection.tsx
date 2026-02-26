import { projects } from "@/utils/projectData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="ui-surface-page bg-dot-pattern relative isolate scroll-mt-4 px-4 pb-6 sm:scroll-mt-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10 xl:px-[52px]"
    >
      {/* Subtle gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(96,102,149,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139,135,120,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1280px]">
        <header className="px-1 pb-4 pt-1 sm:pb-6 md:pb-7">
          <div
            aria-hidden="true"
            className="mb-4 h-6 w-full max-w-[16rem] rounded-full opacity-70 bg-dot-pattern [mask-image:linear-gradient(to_right,black,transparent)]"
          />
          <h2 className="max-w-[18ch] font-display text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.95] tracking-tight text-[var(--text-primary)] [text-wrap:balance]">
            Projects
          </h2>
          <p className="mt-2 max-w-[42ch] text-sm leading-snug text-[var(--text-subtle)] sm:text-base md:text-lg">
            Resume-backed work across pipelines, analytics, and operational reporting.
          </p>
        </header>

        <div className="grid gap-3 sm:gap-4 md:gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="ui-surface-card ui-card-shadow rounded-[18px] border p-5 transition-all duration-300 hover:-translate-y-[1px] hover:ring-1 hover:ring-[var(--surface-stroke)] sm:rounded-[20px] sm:p-6 md:p-7 lg:p-8"
            >
              <div className="grid gap-6 sm:gap-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium tracking-tight text-[var(--text-muted)] sm:text-base">
                      {project.role} · {project.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight [text-wrap:balance] sm:text-[1.9rem] md:text-[2.05rem]">
                      {project.title.charAt(0).toUpperCase() + project.title.slice(1)}
                    </h3>
                  </div>
                  <div className="ui-surface-inset shrink-0 rounded-2xl px-4 py-3 text-left sm:text-right">
                    <p className="whitespace-nowrap text-sm font-medium tracking-tight text-[var(--text-primary)] sm:text-base">
                      {project.period}
                    </p>
                    <p className="mt-0.5 whitespace-nowrap text-xs tracking-tight text-[var(--text-muted)] sm:text-sm">
                      {project.location}
                    </p>
                  </div>
                </div>

                <p className="max-w-[78ch] text-base leading-relaxed text-[var(--text-subtle)] sm:text-lg">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="ui-surface-inset inline-flex items-center gap-2 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5"
                    >
                      <p className="font-display text-sm font-semibold tracking-tight sm:text-base">
                        {metric.value}
                      </p>
                      <p className="text-xs tracking-tight text-[var(--text-muted)] sm:text-sm">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="grid gap-3 sm:gap-3.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed text-[var(--text-primary)] sm:text-lg"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.58em] size-1.5 shrink-0 rounded-full bg-[var(--text-primary)] opacity-70"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="ui-surface-inset rounded-full px-3.5 py-2 text-xs font-medium tracking-tight text-[var(--text-primary)] sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
