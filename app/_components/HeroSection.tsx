"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";
import { LINKS } from "@/constants/links";

type SocialLink = {
  href: string;
  label: string;
  icon: ThemedIcon;
  external?: boolean;
};

type StackItem = {
  label: string;
  icon: ThemedIcon;
};

type ThemedIcon = {
  lightSrc: string;
  darkSrc: string;
  width: number;
  height: number;
};

function heroIcon(name: string, width: number, height: number): ThemedIcon {
  return {
    lightSrc: `/assets/icons/hero/light/${name}.svg`,
    darkSrc: `/assets/icons/hero/dark/${name}.svg`,
    width,
    height,
  };
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: LINKS.linkedin,
    label: "LinkedIn",
    icon: heroIcon("linkedin", 29, 34),
    external: true,
  },
  {
    href: LINKS.github,
    label: "GitHub",
    icon: heroIcon("github", 35, 35),
    external: true,
  },
  {
    href: `mailto:${LINKS.email}`,
    label: "Email",
    icon: heroIcon("email", 29, 29),
  },
];

const STACK_ITEMS: StackItem[] = [
  { label: "SQL", icon: heroIcon("sql", 35, 35) },
  { label: "Python", icon: heroIcon("python", 35, 35) },
  { label: "ETL", icon: heroIcon("etl", 35, 35) },
  { label: "BI", icon: heroIcon("bi", 29, 29) },
  { label: "DBT", icon: heroIcon("dbt", 30, 30) },
  { label: "Pipeline", icon: heroIcon("pipeline", 33, 33) },
];

const VANCOUVER_TIME = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Vancouver",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function getVancouverTime() {
  return VANCOUVER_TIME.format(new Date());
}

function ThemeSvgAsset({
  icon,
  className,
}: {
  icon: ThemedIcon;
  className?: string;
}) {
  return (
    <span className={`relative block shrink-0 ${className ?? ""}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon.lightSrc}
        alt=""
        width={icon.width}
        height={icon.height}
        className="theme-asset-light h-full w-full object-contain"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon.darkSrc}
        alt=""
        width={icon.width}
        height={icon.height}
        className="theme-asset-dark absolute inset-0 h-full w-full object-contain"
      />
    </span>
  );
}



function HeroTopBar({ timeLabel }: { timeLabel: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="ui-surface-card ui-card-shadow inline-flex h-9 items-center justify-center gap-2 rounded-full border px-3 sm:h-11 sm:gap-2.5 sm:px-5">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full bg-emerald-500 animate-status-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />
          <span className="hidden text-sm font-medium tracking-tight text-[var(--text-primary)] sm:inline sm:text-base">
            Open to work
          </span>
        </div>
        <ThemeToggle />
      </div>

      <div className="text-center">
        <p className="font-logo text-[clamp(1.75rem,4vw,3.125rem)] leading-none tracking-[0.02em] text-[var(--text-primary)]">
          AKD
        </p>
      </div>

      <div className="text-right">
        <p suppressHydrationWarning className="text-xs tracking-tight text-[var(--text-muted)] sm:text-base lg:text-[clamp(1rem,1.6vw,1.5625rem)]">
          {timeLabel}
        </p>
        <p className="text-sm font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg md:text-xl lg:text-[clamp(1rem,1.6vw,1.5625rem)]">
          Vancouver, BC
        </p>
      </div>
    </div>
  );
}

function Card({
  className,
  children,
  as: Component = "div",
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
}) {
  return (
    <Component
      className={`ui-surface-card ui-card-shadow rounded-[18px] border p-4 sm:rounded-[20px] sm:p-5 md:p-4 ${className ?? ""}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default function HeroSection() {
  const [timeLabel, setTimeLabel] = useState(getVancouverTime);
  // #region agent log
  const box2Ref = useRef<HTMLDivElement>(null);
  const box5Ref = useRef<HTMLDivElement>(null);
  const outerGridRef = useRef<HTMLDivElement>(null);
  // #endregion

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLabel(getVancouverTime());
    }, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  // #region agent log
  useEffect(() => {
    const measure = () => {
      const vw = window.innerWidth;
      const box2 = box2Ref.current?.getBoundingClientRect();
      const box5 = box5Ref.current?.getBoundingClientRect();
      const lgActive = window.matchMedia("(min-width: 1024px)").matches;
      const xlActive = window.matchMedia("(min-width: 1280px)").matches;
      const gridCols = outerGridRef.current ? window.getComputedStyle(outerGridRef.current).gridTemplateColumns : null;
      console.log('[DEBUG 4d97a2]', JSON.stringify({viewportWidth:vw,lgActive,xlActive,gridCols,box2:{w:Math.round(box2?.width??0),h:Math.round(box2?.height??0)},box5:{w:Math.round(box5?.width??0),h:Math.round(box5?.height??0)}}));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  // #endregion

  return (
    <section
      id="about"
      className="ui-surface-page bg-dot-pattern relative isolate min-h-dvh overflow-x-clip text-[var(--text-primary)]"
      aria-label="Hero"
    >
      <div className="mx-auto grid min-h-dvh w-full max-w-[1280px] grid-rows-[auto_1fr] px-4 pb-4 pt-2 sm:px-6 sm:pb-5 sm:pt-3 md:px-10 md:pb-6 md:pt-4 xl:px-[52px]">
        <div className="sticky top-0 z-30 py-2 sm:py-3 md:py-4 [background-color:var(--surface-page)]">
          <HeroTopBar timeLabel={timeLabel} />
        </div>

        <div className="grid min-h-0 place-items-center py-3 sm:py-4 md:py-5">
          <div ref={outerGridRef} className="grid w-full gap-[clamp(5px,0.8vw,10px)] md:grid-cols-[minmax(0,2fr)_minmax(14rem,1fr)] md:grid-rows-[1fr_1fr] xl:grid-cols-[minmax(0,1fr)_24.125rem]">
            {/* Box 1 – Intro (row 1, col 1) */}
            <Card className="md:rounded-none md:rounded-tl-[20px] md:h-[clamp(180px,33vh,301px)] xl:p-[clamp(12px,1.5vw,20px)]">
              <div className="grid h-full items-center gap-4 sm:gap-6 md:grid-cols-[minmax(10rem,clamp(10rem,18vw,15.875rem))_minmax(0,1fr)] md:gap-[clamp(1rem,2vw,1.75rem)] xl:gap-[clamp(1.5rem,2.5vw,2.25rem)]">
                <div className="relative mx-auto aspect-square w-full max-w-[clamp(10rem,18vw,15.875rem)] overflow-hidden rounded-[16px] bg-[var(--surface-inset)] md:mx-0">
                  <Image
                    src="/assets/image/arnold.png"
                    alt="Arnold Kevin Desouza portrait"
                    fill
                    sizes="(max-width: 768px) 80vw, 254px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="min-w-0 md:max-w-[29rem]">
                  <p className="text-sm leading-tight text-[var(--text-subtle)] sm:text-base md:text-[clamp(0.875rem,1.4vw,1.25rem)]">
                    Hello, I&apos;m
                  </p>
                  <h1 className="mt-1 text-2xl font-semibold leading-[1.05] tracking-tight [text-wrap:balance] sm:text-3xl md:text-[clamp(1.25rem,2.2vw,1.875rem)]">
                    Arnold Kevin Desouza
                  </h1>
                  <p className="mt-[clamp(1.5rem,3vw,2.5rem)] max-w-[29rem] text-sm leading-snug text-[var(--text-primary)] [text-wrap:pretty] sm:text-base md:text-[clamp(0.875rem,1.4vw,1.25rem)] md:leading-[1.28]">
                    I turn complex datasets into decision-ready systems: resilient
                    pipelines, useful dashboards, and automation that won&apos;t become
                    next quarter&apos;s cleanup job.
                  </p>
                </div>
              </div>
            </Card>

            {/* Box 4 – Social links (row 1, col 2) */}
            <Card className="flex flex-col justify-center md:rounded-none md:rounded-tr-[20px] md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2.5vw,33px)]">
              <div className="flex w-full flex-col gap-1 sm:gap-1">
                {SOCIAL_LINKS.map(({ href, label, icon, external }, index) => {
                  let radiusClass = "";
                  if (index === 0) {
                    radiusClass = "rounded-t-[20px]";
                  } else if (index === SOCIAL_LINKS.length - 1) {
                    radiusClass = "rounded-b-[20px]";
                  }

                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer noopener" : undefined}
                      className={`ui-surface-inset group relative block w-full cursor-pointer overflow-hidden transition-all duration-300 hover:z-10 hover:-translate-y-[2px] hover:bg-[var(--surface-page)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:ring-1 hover:ring-[var(--border-subtle)] dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.02)] ${radiusClass}`}
                      aria-label={label}
                    >
                      <div className="relative z-10 flex w-full items-center justify-between px-5 py-3 sm:px-6 sm:py-3.5 transition-opacity duration-300 group-hover:opacity-0">
                        <div className="flex items-center gap-4 sm:gap-5">
                          <div className="flex size-[20px] shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:size-[24px]">
                            <ThemeSvgAsset icon={icon} className="size-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>
                          <span className="text-[14px] font-medium tracking-tight text-[var(--text-primary)] sm:text-[15px] xl:text-[16px]">
                            {label}
                          </span>
                        </div>
                        <ArrowRight className="mr-1 size-4 text-[var(--text-subtle)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[var(--text-primary)]" />
                      </div>

                      {/* Google-Style Hover Overlay */}
                      <div className="absolute inset-0 z-20 flex bg-[var(--text-primary)] text-[var(--surface-page)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex shrink-0 items-center bg-[var(--text-primary)] pl-5 pr-2 sm:pl-6 sm:pr-4 z-10 h-full">
                          <ArrowUpRight className="size-4 sm:size-5" />
                        </div>
                        <div className="flex-1 flex items-center h-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                          <div className="animate-marquee-ltr flex w-max gap-4 font-display text-lg tracking-widest text-[var(--surface-page)] pt-0.5">
                            {Array.from({ length: 12 }).map((_, i) => <span key={i} className="whitespace-nowrap uppercase">{label}</span>)}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Box 2-3 – Experience & Resume (row 2, col 1) */}
            {/* #region agent log */}<div ref={box2Ref} className="grid gap-[clamp(5px,0.8vw,10px)] md:grid-cols-2">{/* #endregion */}
              <Card as="a" href={LINKS.github} target="_blank" rel="noreferrer noopener" className="group relative block cursor-pointer overflow-hidden md:rounded-none md:rounded-bl-[20px] md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2vw,29px)] xl:py-[clamp(14px,1.8vw,24px)]">
                <div className="flex h-full flex-col relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-[clamp(1rem,1.6vw,1.4rem)]">
                    Experience
                  </h2>
                  <p className="mt-[clamp(1rem,1.5vw,2rem)] max-w-[28ch] text-base leading-snug text-[var(--text-primary)] [text-wrap:pretty] sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)] md:leading-[1.28]">
                    I build <strong>repeatable workflows</strong>,{" "}
                    <strong>fast transformations</strong>, and low-friction{" "}
                    <strong>dashboards</strong>.
                  </p>
                  <div className="mt-auto inline-flex w-fit items-center gap-1 text-base font-medium underline underline-offset-4 transition sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)]">
                    See work <ArrowRight className="size-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between bg-[var(--text-primary)] text-[var(--surface-page)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4 sm:p-5 xl:px-[clamp(16px,2vw,29px)] xl:py-[clamp(14px,1.8vw,24px)]">
                    <ArrowUpRight className="size-6 sm:size-8" />
                  </div>
                  <div className="flex items-center overflow-hidden pb-4 sm:pb-5 xl:pb-[clamp(14px,1.8vw,24px)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="animate-marquee-ltr flex w-max gap-6 px-4 font-display text-4xl sm:text-5xl uppercase tracking-widest text-[var(--surface-page)]">
                      {Array.from({ length: 8 }).map((_, i) => <span key={i}>EXPERIENCE</span>)}
                    </div>
                  </div>
                </div>
              </Card>

              <Card as={Link} href="/resume" className="group relative block cursor-pointer overflow-hidden md:rounded-none md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2vw,29px)] xl:py-[clamp(14px,1.8vw,24px)]">
                <div className="flex h-full flex-col relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-[clamp(1rem,1.6vw,1.4rem)]">
                    Resume
                  </h2>
                  <p className="mt-[clamp(1rem,1.5vw,2rem)] max-w-[28ch] text-base leading-snug text-[var(--text-primary)] [text-wrap:pretty] sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)] md:leading-[1.28]">
                    A quick <strong>overview of what I&apos;ve worked on</strong> and{" "}
                    <strong>what I&apos;m good at</strong>.
                  </p>
                  <div className="mt-auto inline-flex w-fit items-center gap-1 text-base font-medium underline underline-offset-4 transition sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)]">
                    View Resume <ArrowRight className="size-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between bg-[var(--text-primary)] text-[var(--surface-page)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4 sm:p-5 xl:px-[clamp(16px,2vw,29px)] xl:py-[clamp(14px,1.8vw,24px)]">
                    <ArrowUpRight className="size-6 sm:size-8" />
                  </div>
                  <div className="flex items-center overflow-hidden pb-4 sm:pb-5 xl:pb-[clamp(14px,1.8vw,24px)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="animate-marquee-ltr flex w-max gap-6 px-4 font-display text-4xl sm:text-5xl uppercase tracking-widest text-[var(--surface-page)]">
                      {Array.from({ length: 8 }).map((_, i) => <span key={i}>RESUME</span>)}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Box 5 – Tech stack (row 2, col 2) */}
            {/* #region agent log */}<div ref={box5Ref} className="h-full">{/* #endregion */}
            <Card className="md:rounded-none md:rounded-br-[20px] md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2vw,29px)] xl:py-[clamp(14px,1.8vw,24px)]">
              <div className="flex h-full flex-col">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-[clamp(1rem,1.6vw,1.4rem)]">
                  Core Stack
                </h2>
                <div className="mt-[clamp(1rem,1.5vw,2rem)] grid w-full grid-cols-2 gap-[2px]">
                  {STACK_ITEMS.map(({ label, icon }, index) => {
                    let radiusClass = "";
                    if (index === 0) {
                      radiusClass = "rounded-tl-[20px]";
                    } else if (index === 1) {
                      radiusClass = "rounded-tr-[20px]";
                    } else if (index === STACK_ITEMS.length - 2) {
                      radiusClass = "rounded-bl-[20px]";
                    } else if (index === STACK_ITEMS.length - 1) {
                      radiusClass = "rounded-br-[20px]";
                    }

                    return (
                      <div
                        key={label}
                        className={`ui-surface-inset flex cursor-default items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 hover:bg-[var(--surface-page)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:ring-1 hover:ring-[var(--border-subtle)] dark:hover:shadow-[0_2px_8px_rgba(255,255,255,0.03)] transition-all duration-300 hover:scale-[1.02] hover:z-10 ${radiusClass}`}
                      >
                        <div className="flex size-[1.1rem] shrink-0 items-center justify-center sm:size-[1.2rem]">
                          <ThemeSvgAsset icon={icon} className="size-full object-contain opacity-85" />
                        </div>
                        <span className="min-w-0 truncate text-[13px] font-medium tracking-wide text-[var(--text-primary)] sm:text-[14px]">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
            {/* #region agent log */}</div>{/* #endregion */}
          </div>
        </div>
      </div>
    </section>
  );
}
