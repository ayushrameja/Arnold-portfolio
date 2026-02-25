"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

function socialRowRadius(index: number, total: number) {
  if (index === 0) {
    return "md:rounded-none md:rounded-tl-[20px] md:rounded-tr-[20px]";
  }

  if (index === total - 1) {
    return "md:rounded-none md:rounded-bl-[20px] md:rounded-br-[20px]";
  }

  return "md:rounded-none";
}

function stackTileRadius(index: number) {
  if (index === 0) {
    return "md:rounded-none md:rounded-tl-[20px]";
  }

  if (index === 2) {
    return "md:rounded-none md:rounded-tr-[20px]";
  }

  if (index === 3) {
    return "md:rounded-none md:rounded-bl-[20px]";
  }

  if (index === 5) {
    return "md:rounded-none md:rounded-br-[20px]";
  }

  return "md:rounded-none";
}

function HeroTopBar({ timeLabel }: { timeLabel: string }) {
  return (
    <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
      <div className="order-2 flex flex-wrap items-center gap-3 sm:order-1 sm:gap-4">
        <p className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-[var(--text-primary)] sm:text-base md:text-lg lg:text-[clamp(1rem,1.6vw,1.5625rem)]">
          <span
            aria-hidden="true"
            className="size-2 rounded-full [background-color:var(--text-primary)] opacity-80 animate-status-pulse"
          />
          Open for Work
        </p>
        <ThemeToggle />
      </div>

      <div className="order-1 text-center sm:order-2">
        <p className="font-display text-[clamp(1.75rem,4vw,3.125rem)] leading-none tracking-[0.02em] text-[var(--text-primary)]">
          AKD
        </p>
      </div>

      <div className="order-3 text-left sm:text-right">
        <p suppressHydrationWarning className="text-sm tracking-tight text-[var(--text-muted)] sm:text-base lg:text-[clamp(1rem,1.6vw,1.5625rem)]">
          {timeLabel}
        </p>
        <p className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg md:text-xl lg:text-[clamp(1rem,1.6vw,1.5625rem)]">
          Vancouver, BC
        </p>
      </div>
    </div>
  );
}

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`ui-surface-card ui-card-shadow rounded-[18px] border p-4 sm:rounded-[20px] sm:p-5 md:p-4 ${className ?? ""}`}
    >
      {children}
    </div>
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
      className="ui-surface-page relative isolate min-h-dvh overflow-x-clip text-[var(--text-primary)]"
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
                  <p className="mt-[clamp(0.75rem,1.2vw,1.25rem)] max-w-[29rem] text-sm leading-snug text-[var(--text-primary)] [text-wrap:pretty] sm:text-base md:text-[clamp(0.875rem,1.4vw,1.25rem)] md:leading-[1.28]">
                    I turn complex datasets into decision-ready systems: resilient
                    pipelines, useful dashboards, and automation that won&apos;t become
                    next quarter&apos;s cleanup job.
                  </p>
                </div>
              </div>
            </Card>

            {/* Box 4 – Social links (row 1, col 2) */}
            <Card className="md:rounded-none md:rounded-tr-[20px] md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2.5vw,33px)] xl:py-[clamp(20px,2.5vw,40px)]">
              <div className="grid h-full place-content-center gap-[5px]">
                {SOCIAL_LINKS.map(({ href, label, icon, external }, index) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer noopener" : undefined}
                    className={`ui-surface-inset group flex min-h-[clamp(3rem,5.5vw,4.35rem)] items-center justify-between gap-45 rounded-[0.9rem] px-4 py-2 transition hover:translate-y-[-1px] hover:opacity-95 sm:rounded-[1rem] sm:px-5 xl:px-[14px] ${socialRowRadius(index, SOCIAL_LINKS.length)}`}
                    aria-label={label}
                  >
                    <span className="inline-flex items-center gap-3">
                      <ThemeSvgAsset icon={icon} className="h-6 w-6 sm:h-7 sm:w-7 xl:h-[35px] xl:w-[35px]" />
                    </span>
                    <span className="text-base tracking-tight text-[var(--text-subtle)] transition group-hover:text-[var(--text-primary)] sm:text-lg xl:text-[22.5px]">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Box 2-3 – Experience & Resume (row 2, col 1) */}
            {/* #region agent log */}<div ref={box2Ref} className="grid gap-[clamp(5px,0.8vw,10px)] md:grid-cols-2">{/* #endregion */}
              <Card className="md:rounded-none md:rounded-bl-[20px] md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2vw,29px)] xl:py-[clamp(14px,1.8vw,24px)]">
                <div className="flex h-full flex-col">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-[clamp(1rem,1.6vw,1.4rem)]">
                    Experience
                  </h2>
                  <p className="mt-[clamp(1rem,1.5vw,2rem)] max-w-[28ch] text-base leading-snug text-[var(--text-primary)] [text-wrap:pretty] sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)] md:leading-[1.28]">
                    I build <strong>repeatable workflows</strong>,{" "}
                    <strong>fast transformations</strong>, and low-friction{" "}
                    <strong>dashboards</strong>.
                  </p>
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-auto inline-flex w-fit items-center gap-1 text-base font-medium underline underline-offset-4 transition hover:opacity-80 sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)]"
                  >
                    See work <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </Card>

              <Card className="md:rounded-none md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2vw,29px)] xl:py-[clamp(14px,1.8vw,24px)]">
                <div className="flex h-full flex-col">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-[clamp(1rem,1.6vw,1.4rem)]">
                    Resume
                  </h2>
                  <p className="mt-[clamp(1rem,1.5vw,2rem)] max-w-[28ch] text-base leading-snug text-[var(--text-primary)] [text-wrap:pretty] sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)] md:leading-[1.28]">
                    A quick <strong>overview of what I&apos;ve worked on</strong> and{" "}
                    <strong>what I&apos;m good at</strong>.
                  </p>
                  <Link
                    href="/resume"
                    className="mt-auto inline-flex w-fit items-center gap-1 text-base font-medium underline underline-offset-4 transition hover:opacity-80 sm:text-lg md:text-[clamp(0.875rem,1.4vw,1.25rem)]"
                  >
                    View Resume <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </div>

            {/* Box 5 – Tech stack (row 2, col 2) */}
            {/* #region agent log */}<div ref={box5Ref}>{/* #endregion */}
            <Card className="md:rounded-none md:rounded-br-[20px] md:h-[clamp(180px,33vh,301px)] xl:px-[clamp(16px,2.2vw,30px)] xl:pb-[clamp(20px,2.8vw,38px)] xl:pt-[clamp(20px,2.8vw,39px)]">
              <div className="grid h-full grid-cols-3 place-content-center gap-[5px]">
                {STACK_ITEMS.map(({ label, icon }, index) => (
                  <div
                    key={label}
                    className={`ui-surface-inset flex min-h-[clamp(4rem,8vw,6.8rem)] flex-col items-center justify-center rounded-[0.9rem] px-3 py-2 text-center sm:rounded-[1rem] ${stackTileRadius(index)}`}
                  >
                    <ThemeSvgAsset icon={icon} className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem] xl:h-[32px] xl:w-[32px]" />
                    <p className="mt-2 text-xs font-semibold tracking-tight text-[var(--text-subtle)] sm:text-sm xl:text-[15px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            {/* #region agent log */}</div>{/* #endregion */}
          </div>
        </div>
      </div>
    </section>
  );
}
