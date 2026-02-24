"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { LINKS } from "@/constants/links";
import { useContactForm } from "@/hooks";
import { scrollFadeUp } from "@/lib/animations";
import TextReveal from "@/components/TextReveal";

export default function ContactSection() {
  const { formState, isSubmitting, isSubmitted, submittedName, updateField, handleSubmit, reset } = useContactForm();

  return (
    <section id="contact" className="relative overflow-hidden bg-offBlack px-6 py-32 z-10">
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-wavy-lines opacity-100" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-radial from-sageGreen/5 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-6xl relative z-10">
        <motion.div
          className="relative overflow-hidden rounded-sm border border-zinc-800/80 bg-offBlack/80 shadow-2xl backdrop-blur-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={scrollFadeUp}
        >
          {/* Dynamic Hover Glow Array equivalent */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mutedGold/10 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-sageGreen/10 blur-3xl" />
          </div>

          <div className="relative p-8 md:p-10">
            <div className="max-w-2xl">
              <TextReveal as="p" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Contact
              </TextReveal>
              <TextReveal as="h2" delay={0.08} className="mt-4 font-editorial text-4xl font-bold tracking-tight text-cream sm:text-5xl">
                Ping me, let&apos;s build something
              </TextReveal>
              <TextReveal as="p" delay={0.15} className="mt-4 text-sm font-light leading-relaxed text-cream/70 md:text-base">
                Short message is perfect. I usually reply fast (assuming Slack isn&apos;t on fire).
              </TextReveal>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-7">
                <div className="h-full rounded-sm border border-zinc-800 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-sm">
                  {isSubmitted ? (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-zinc-800 bg-offBlack shadow-2xl">
                        <CheckCircle2 className="h-7 w-7 text-sageGreen" />
                      </div>
                      <h3 className="mt-5 font-editorial text-2xl font-bold tracking-tight text-cream">
                        Message sent
                      </h3>
                      <p className="mt-2 max-w-sm text-sm font-light text-cream/70">
                        {submittedName ? `Thanks, ${submittedName}. ` : null}
                        I got your note and I&apos;ll reply soon.
                      </p>
                      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <button
                          type="button"
                          onClick={reset}
                          className="btn-modern btn-primary inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-sm px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-xl"
                        >
                          Send another
                        </button>
                        <Link
                          href={`mailto:${LINKS.email}`}
                          className="btn-modern btn-secondary inline-flex items-center justify-center overflow-hidden rounded-sm px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-xl"
                        >
                          Email instead
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-cream/80">
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
                          className="mt-2 w-full rounded-sm border border-zinc-800 bg-offBlack px-4 py-3.5 text-sm text-cream outline-none placeholder:text-zinc-600 transition-colors focus:border-sageGreen/50 focus:ring-1 focus:ring-sageGreen/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-cream/80">
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
                          className="mt-2 w-full rounded-sm border border-zinc-800 bg-offBlack px-4 py-3.5 text-sm text-cream outline-none placeholder:text-zinc-600 transition-colors focus:border-sageGreen/50 focus:ring-1 focus:ring-sageGreen/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-cream/80">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          value={formState.message}
                          onChange={(e) => updateField("message", e.target.value)}
                          required
                          placeholder="What are you building, and what do you need help with?"
                          className="mt-2 h-36 w-full resize-none rounded-sm border border-zinc-800 bg-offBlack px-4 py-3.5 text-sm text-cream outline-none placeholder:text-zinc-600 transition-colors focus:border-sageGreen/50 focus:ring-1 focus:ring-sageGreen/20"
                        />
                      </div>

                      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                        <p className="text-sm font-light text-cream/70">
                          Prefer email?{" "}
                          <Link
                            href={`mailto:${LINKS.email}`}
                            className="font-medium text-cream underline decoration-zinc-700 underline-offset-4 transition hover:decoration-sageGreen/50 hover:text-sageGreen"
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
                            className="btn-modern btn-primary inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-sm px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {isSubmitting ? "Sending..." : isSubmitted ? "Sent!" : "Send Message"}
                          </button>
                        </motion.div>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              <div className="grid gap-8 lg:col-span-5">
                <div className="rounded-sm border border-zinc-800 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-sm">
                  <h3 className="font-editorial text-2xl font-bold tracking-tight text-cream">Links</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-cream/70">
                    Stalk professionally. Please do not open a Jira ticket about my personality.
                  </p>

                  <div className="mt-6 grid gap-3">
                    <Link
                      href={`mailto:${LINKS.email}`}
                      className="group inline-flex items-center justify-between rounded-sm border border-zinc-800 bg-offBlack px-4 py-3.5 text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:border-sageGreen/30 hover:bg-zinc-900/80"
                    >
                      <span>Mail</span>
                      <span
                        className="text-zinc-600 transition-colors group-hover:text-sageGreen"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </Link>
                    <Link
                      href={LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between rounded-sm border border-zinc-800 bg-offBlack px-4 py-3.5 text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:border-sageGreen/30 hover:bg-zinc-900/80"
                    >
                      <span>LinkedIn</span>
                      <span
                        className="text-zinc-600 transition-colors group-hover:text-sageGreen"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </Link>
                    <Link
                      href={LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between rounded-sm border border-zinc-800 bg-offBlack px-4 py-3.5 text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:border-sageGreen/30 hover:bg-zinc-900/80"
                    >
                      <span>GitHub</span>
                      <span
                        className="text-zinc-600 transition-colors group-hover:text-sageGreen"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="rounded-sm border border-zinc-800 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-sm">
                  <h3 className="font-editorial text-2xl font-bold tracking-tight text-cream">What I&apos;m Great At</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-sm border border-sageGreen/20 bg-sageGreen/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-sageGreen">
                      Data Analytics & Visualization
                    </span>
                    <span className="rounded-sm border border-zinc-800/80 bg-zinc-800/30 px-3 py-1.5 text-[11px] font-mono text-zinc-400">
                      Machine Learning & AI
                    </span>
                    <span className="rounded-sm border border-zinc-800/80 bg-zinc-800/30 px-3 py-1.5 text-[11px] font-mono text-zinc-400">
                      Cloud & Data Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
