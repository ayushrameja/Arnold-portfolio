"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";

import { useAppStore } from "@/store/store";
import { STORM_TRIGGER_EVENT } from "@/utils/storm";
import StaggeredText from "@/components/StaggerText";
import { useActiveSection } from "@/hooks";

import logo from "../public/assets/image/logo.svg";
import { scrollToTarget } from "@/utils/scroll";

const MotionLink = motion.create(Link);

const Nav = () => {
  const pathname = usePathname();
  const lenis = useLenis();
  const [enterDelay, setEnterDelay] = useState(0.9);

  const isHomeRoute = pathname === "/";
  const activeHomeSection = useActiveSection(isHomeRoute);
  const isResumeRoute = pathname === "/resume";

  const showExternal = useAppStore((state) => state.showExternal);
  const currentRoute = useAppStore((state) => state.currentRoute);
  const setShowExternal = useAppStore((state) => state.setShowExternal);

  useEffect(() => {
    const handleStorm = (event: Event) => {
      const detail = (event as CustomEvent<{ cause?: string }>).detail ?? {};
      if (detail.cause === "load") {
        setEnterDelay(0.9);
      } else {
        setEnterDelay(0.08);
      }
    };
    window.addEventListener(STORM_TRIGGER_EVENT, handleStorm as EventListener);

    return () =>
      window.removeEventListener(
        STORM_TRIGGER_EVENT,
        handleStorm as EventListener,
      );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isResumeRoute) {
        setShowExternal(false);
        return;
      }

      if (window.scrollY > window.innerHeight * 0.5) {
        setShowExternal(true);
      } else {
        setShowExternal(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isResumeRoute, setShowExternal]);

  useEffect(() => {
    if (isHomeRoute || isResumeRoute) {
      setShowExternal(false);
    }
  }, [isHomeRoute, isResumeRoute, setShowExternal]);

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: enterDelay + i * 0.06,
        duration: 0.22,
        ease: "easeOut",
      },
    }),
  };

  const containerMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: 10 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { delay: enterDelay, duration: 0.32, ease: "easeOut" },
      },
    }),
    [enterDelay],
  );

  const homeLinks = useMemo(
    () => ["About", "Projects", "Contact"] as const,
    [],
  );

  const navLinks = useMemo(() => {
    if (currentRoute === "Home") return null;

    if (isResumeRoute) {
      return [{ label: "Portfolio", href: "/" }];
    }

    return [
      { label: "Portfolio", href: "/" },
      { label: "Resume", href: "/resume" },
    ];
  }, [currentRoute, isResumeRoute]);

  const logoHref = useMemo(() => {
    if (isResumeRoute) return "/resume";
    return "/";
  }, [isResumeRoute]);

  const logoLabel = useMemo(() => {
    if (isResumeRoute) return "Resume";
    return null;
  }, [isResumeRoute]);

  return (
    <motion.nav className="pointer-events-none fixed inset-x-0 bottom-0 z-50 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] pt-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-offBlack via-offBlack/80 to-transparent" />
      <motion.div
        className="pointer-events-auto mx-auto flex w-fit max-w-[min(52rem,calc(100vw-2rem))] items-center gap-2 rounded-sm border border-zinc-800 bg-offBlack/90 p-1.5 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md"
        initial={containerMotion.initial}
        animate={containerMotion.animate}
      >
        <MotionLink
          href={logoHref}
          className={`relative flex h-10 shrink-0 items-center overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-mutedGold/50 ${
            logoLabel ? "px-4" : "w-10 justify-center"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: enterDelay, duration: 0.2, ease: "easeOut" }}
        >
          <div className="relative h-6 w-6 shrink-0">
            <Image src={logo} alt="Arnold Kevin Desouza" fill className="object-contain" />
          </div>
          {logoLabel && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3 flex items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest text-mutedGold"
            >
              <span className="text-zinc-600">·</span>
              <span>{logoLabel}</span>
            </motion.div>
          )}
        </MotionLink>
        <div className="flex items-center gap-1 rounded-sm border border-zinc-800 bg-zinc-900/50 p-1">
          <div className="flex items-center gap-1">
            {currentRoute === "Home"
              ? homeLinks.map((link, i) => (
                <motion.button
                  key={link}
                  type="button"
                  custom={i}
                  onClick={() => scrollToTarget(link.toLowerCase(), lenis as any)}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  className={[
                    "group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-sm px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest transition-all duration-300",
                    activeHomeSection === link.toLowerCase()
                      ? "bg-mutedGold/10 text-mutedGold ring-1 ring-inset ring-mutedGold/20"
                      : "text-zinc-500 hover:bg-zinc-800 hover:text-cream",
                  ].join(" ")}
                >
                  <StaggeredText text={link} />
                </motion.button>
              ))
              : (navLinks ?? []).map((link, i) => (
                <MotionLink
                  key={link.label}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  className="group relative flex items-center justify-center overflow-hidden rounded-sm px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-zinc-500 transition-all duration-300 hover:bg-zinc-800 hover:text-cream"
                  href={link.href}
                >
                  <StaggeredText text={link.label} />
                </MotionLink>
              ))}
          </div>
        </div>
        <AnimatePresence initial={false}>
          {showExternal &&
            !isResumeRoute && (
              <motion.div
                className="hidden sm:block"
                initial={{ opacity: 0, scale: 0.92, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: "auto" }}
                exit={{ opacity: 0, scale: 0.92, width: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link
                  className="btn-modern btn-primary inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-sm px-6 py-[11px] text-[10px] font-semibold uppercase tracking-[0.2em] shadow-xl"
                  href="/resume"
                >
                  Resume
                </Link>
              </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
