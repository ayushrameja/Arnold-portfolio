"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { useContactForm } from "@/hooks";
import { LINKS } from "@/constants/links";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
};

const PHONE_DISPLAY = "+1 (778) 522-9460";
const PHONE_HREF = "tel:+17785229460";

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    value: LINKS.email,
    href: `mailto:${LINKS.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "arnold-desouza-13a554206",
    href: LINKS.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "arnolddesouza",
    href: LINKS.github,
    icon: Github,
    external: true,
  },
];

const FOCUS_AREAS = [
  "Data Engineering",
  "Analytics",
  "Dashboards",
  "ETL / ELT",
  "Databricks",
  "Snowflake",
  "Azure",
] as const;

export default function ContactSection() {
  const {
    formState,
    isSubmitting,
    isSubmitted,
    submittedName,
    updateField,
    handleSubmit,
    reset,
  } = useContactForm();

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="ui-surface-page bg-dot-pattern relative isolate scroll-mt-4 px-4 pb-8 pt-1 sm:scroll-mt-6 sm:px-6 sm:pb-10 md:px-10 md:pb-12 xl:px-[52px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-[clamp(5px,0.8vw,10px)]">
          <div className="grid gap-[clamp(5px,0.8vw,10px)] sm:grid-cols-2">
            <div className="ui-surface-card ui-card-shadow rounded-[18px] border p-4 sm:rounded-[20px] sm:p-5 md:p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-stroke)] px-3 py-1.5 text-xs font-medium tracking-[0.14em] uppercase text-[var(--text-muted)]">
                <Sparkles className="size-3.5" aria-hidden="true" />
                Contact
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-[1.03] tracking-tight [text-wrap:balance] sm:text-3xl md:text-4xl">
                Let&apos;s build data systems that survive handoffs.
              </h2>

              <p className="mt-4 max-w-[52ch] text-sm leading-snug text-[var(--text-subtle)] sm:text-base">
                Arnold is based in Vancouver, BC and open to conversations
                around data engineering, analytics, reporting automation, and
                cloud data platform work.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {FOCUS_AREAS.map((area) => (
                  <span
                    key={area}
                    className="ui-surface-inset rounded-full px-3 py-1.5 text-xs font-medium tracking-tight sm:text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-5 ui-surface-inset rounded-[16px] p-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-[var(--text-muted)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium tracking-tight sm:text-base">
                      Vancouver, BC, Canada
                    </p>
                    <p className="mt-1 text-xs leading-snug text-[var(--text-muted)] sm:text-sm">
                      Remote-friendly and comfortable working across time zones
                      (already collaborated with US-based stakeholders).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ui-surface-card ui-card-shadow rounded-[18px] border p-4 sm:rounded-[20px] sm:p-5 md:p-6">
              <p className="text-sm font-medium tracking-tight text-[var(--text-primary)]">
                Reach out directly
              </p>

              <div className="mt-4 grid gap-1">
                {CONTACT_LINKS.map(({ label, value, href, icon: Icon, external }, index) => {
                  const radiusClass =
                    index === 0
                      ? "rounded-t-[16px]"
                      : index === CONTACT_LINKS.length - 1
                        ? "rounded-b-[16px]"
                        : "";

                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer noopener" : undefined}
                      className={`ui-surface-inset group relative block overflow-hidden transition-all duration-300 hover:z-10 hover:-translate-y-[2px] hover:bg-[var(--surface-page)] hover:ring-1 hover:ring-[var(--surface-stroke)] ${radiusClass}`}
                    >
                      <div className="relative z-10 flex items-center justify-between gap-3 px-4 py-3 transition-opacity duration-300 group-hover:opacity-0 sm:px-5 sm:py-3.5">
                        <div className="flex min-w-0 items-center gap-3">
                          <Icon
                            className="size-4 shrink-0 text-[var(--text-subtle)] sm:size-5"
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
                              {label}
                            </p>
                            <p className="truncate text-sm font-medium tracking-tight text-[var(--text-primary)] sm:text-base">
                              {value}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="size-4 shrink-0 text-[var(--text-muted)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[var(--text-primary)]" />
                      </div>

                      <div className="absolute inset-0 z-20 flex bg-[var(--text-primary)] text-[var(--surface-page)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex shrink-0 items-center bg-[var(--text-primary)] pl-4 pr-2 sm:pl-5 sm:pr-3">
                          <ArrowUpRight className="size-4 sm:size-5" />
                        </div>
                        <div className="flex h-full flex-1 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                          <div className="animate-marquee-ltr flex w-max gap-4 font-display text-lg tracking-widest uppercase sm:text-xl">
                            {Array.from({ length: 8 }).map((_, i) => (
                              <span key={i}>{label}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="ui-surface-card ui-card-shadow rounded-[18px] border p-4 sm:rounded-[20px] sm:p-5 md:p-6">
            {!isSubmitted ? (
              <>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-sm">
                      Message Arnold
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                      Project inquiry / role opportunity
                    </h3>
                  </div>
                  <span className="ui-surface-inset rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-[var(--text-primary)] sm:text-sm">
                    Usually faster than most enterprise approvals
                  </span>
                </div>

                <p className="mt-3 max-w-[64ch] text-sm leading-snug text-[var(--text-subtle)] sm:text-base">
                  Share what you&apos;re building, what&apos;s breaking, or what
                  needs to be automated. Pipelines, dashboards, data quality
                  cleanup, and reporting workflows are all fair game.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={formState.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        required
                        placeholder="Jane Doe"
                        className="ui-surface-inset mt-2 block w-full rounded-xl border border-transparent px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none ring-0 transition focus-visible:border-[var(--surface-stroke)] focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formState.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                        placeholder="you@company.com"
                        className="ui-surface-inset mt-2 block w-full rounded-xl border border-transparent px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none ring-0 transition focus-visible:border-[var(--surface-stroke)] focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={formState.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                      placeholder="We need help with Databricks + Snowflake pipelines, dashboard cleanup, and faster validation workflows..."
                      className="ui-surface-inset mt-2 block w-full resize-y rounded-xl border border-transparent px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none ring-0 transition focus-visible:border-[var(--surface-stroke)] focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] sm:text-base"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs leading-snug text-[var(--text-muted)] sm:text-sm">
                      Contact form sends to Arnold&apos;s email. If email delivery
                      is down, the direct links above still work.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--surface-page)] transition hover:-translate-y-[1px] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:text-base"
                    >
                      <Send className="size-4" aria-hidden="true" />
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="grid h-full min-h-[24rem] place-items-center">
                <div className="w-full max-w-xl text-center">
                  <div className="ui-surface-inset mx-auto flex size-14 items-center justify-center rounded-full">
                    <CheckCircle2 className="size-7 text-emerald-500" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-sm">
                    Message sent
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                    Thanks{submittedName ? `, ${submittedName}` : ""}.
                  </h3>
                  <p className="mt-3 text-sm leading-snug text-[var(--text-subtle)] sm:text-base">
                    Arnold should receive your message shortly. If the internet
                    behaves, he&apos;ll get back to you soon.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={reset}
                      className="ui-surface-inset rounded-full px-4 py-2 text-sm font-medium tracking-tight transition hover:-translate-y-[1px] hover:ring-1 hover:ring-[var(--surface-stroke)] sm:text-base"
                    >
                      Send another message
                    </button>
                    <a
                      href={`mailto:${LINKS.email}`}
                      className="inline-flex items-center gap-1 rounded-full border border-[var(--surface-stroke)] px-4 py-2 text-sm font-medium tracking-tight transition hover:-translate-y-[1px] hover:bg-[var(--surface-inset)] sm:text-base"
                    >
                      Email directly
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
