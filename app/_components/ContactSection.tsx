"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { LINKS } from "@/constants/links";
import { useContactForm } from "@/hooks";
import { scrollFadeUp } from "@/lib/animations";
import TextReveal from "@/components/TextReveal";

export default function ContactSection() {
  const { formState, isSubmitting, isSubmitted, submittedName, updateField, handleSubmit, reset } = useContactForm();

  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden bg-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="grid gap-4 lg:grid-cols-12">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(20,25,57,0.18)] backdrop-blur-md sm:p-6 lg:col-span-8 lg:p-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={scrollFadeUp}
          >
            <div className="pointer-events-none absolute inset-0 opacity-80">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/8 blur-3xl" />
              <div className="absolute -bottom-12 left-1/4 h-48 w-48 rounded-full bg-[#C1C9FF]/12 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="max-w-2xl">
                  <TextReveal as="p" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Contact
                  </TextReveal>
                  <TextReveal
                    as="h2"
                    delay={0.08}
                    className="mt-3 font-editorial text-3xl leading-none tracking-tight text-white sm:text-4xl"
                  >
                    Ping me, let&apos;s build something
                  </TextReveal>
                  <TextReveal
                    as="p"
                    delay={0.15}
                    className="mt-3 text-sm leading-relaxed text-white/72 md:text-base"
                  >
                    Short message is perfect. I usually reply fast, unless a dashboard just broke five minutes before
                    someone&apos;s leadership meeting.
                  </TextReveal>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70">
                  Usually replies in 24-48h
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 lg:p-6">
                  {isSubmitted ? (
                    <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                        <CheckCircle2 className="h-7 w-7 text-[#C1C9FF]" />
                      </div>
                      <h3 className="mt-5 font-editorial text-2xl tracking-tight text-white">
                        Message sent
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-white/70">
                        {submittedName ? `Thanks, ${submittedName}. ` : null}
                        I got your note and I&apos;ll reply soon.
                      </p>
                      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <button
                          type="button"
                          onClick={reset}
                          className="btn-modern btn-primary inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-xl"
                        >
                          Send another
                        </button>
                        <Link
                          href={`mailto:${LINKS.email}`}
                          className="btn-modern btn-secondary inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-xl"
                        >
                          Email instead
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-white/80">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          required
                          placeholder="Your name"
                          className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-[#C1C9FF]/50 focus:ring-2 focus:ring-white/10"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-white/80">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          required
                          placeholder="you@domain.com"
                          className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-[#C1C9FF]/50 focus:ring-2 focus:ring-white/10"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-white/80">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          value={formState.message}
                          onChange={(e) => updateField("message", e.target.value)}
                          required
                          placeholder="What are you building, and what do you need help with?"
                          className="mt-2 h-36 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-[#C1C9FF]/50 focus:ring-2 focus:ring-white/10"
                        />
                      </div>

                      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                        <p className="text-sm text-white/68">
                          Prefer email?{" "}
                          <Link
                            href={`mailto:${LINKS.email}`}
                            className="font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-[#C1C9FF]/60 hover:text-[#C1C9FF]"
                          >
                            {LINKS.email}
                          </Link>
                        </p>
                        <motion.div
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className="btn-modern btn-primary inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {isSubmitting ? "Sending..." : isSubmitted ? "Sent!" : "Send Message"}
                          </button>
                        </motion.div>
                      </div>
                    </form>
                  )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={scrollFadeUp}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Availability
              </p>
              <p className="mt-2 font-editorial text-3xl leading-none text-white">
                Open
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Full-time and contract work in analytics, reporting, and data engineering.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(20,25,57,0.16)] backdrop-blur-md sm:p-6">
              <h3 className="font-editorial text-2xl tracking-tight text-white">Links</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/68">
                Professional lurking encouraged. Please no Jira tickets about my vibe.
              </p>

              <div className="mt-5 grid gap-3">
                <ContactLink href={`mailto:${LINKS.email}`}>Mail</ContactLink>
                <ContactLink href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </ContactLink>
                <ContactLink href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </ContactLink>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(20,25,57,0.16)] backdrop-blur-md sm:p-6">
              <h3 className="font-editorial text-2xl tracking-tight text-white">
                What I&apos;m Great At
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                The stuff that keeps reporting from becoming interpretive art.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-xl border border-white/15 bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
                  Data Analytics & Visualization
                </span>
                <span className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/75">
                  Machine Learning & AI
                </span>
                <span className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/75">
                  Cloud & Data Engineering
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/[0.08]"
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden
        size={14}
        className="text-white/55 transition-colors group-hover:text-[#C1C9FF]"
      />
    </Link>
  );
}
