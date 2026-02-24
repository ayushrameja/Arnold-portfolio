"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useLenis } from "lenis/react";

import { scrollToTarget } from "@/utils/scroll";

const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Contact", id: "contact" },
] as const;

function useVancouverTime() {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Vancouver",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    [],
  );

  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(formatter.format(new Date()));
    const interval = window.setInterval(() => setTime(formatter.format(new Date())), 1000);
    return () => window.clearInterval(interval);
  }, [formatter]);

  return time;
}

export default function TopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const localTime = useVancouverTime();
  const isHomeRoute = pathname === "/";
  
  const [isVisible, setIsVisible] = useState(!isHomeRoute);

  useEffect(() => {
    if (!isHomeRoute) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Show navbar when scrolled past Hero
      setIsVisible(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomeRoute]);

  const onNavClick = (id: string) => {
    if (isHomeRoute) {
      scrollToTarget(id, lenis as any, 80);
      return;
    }
    router.push(`/#${id}`);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="fixed inset-x-0 top-0 z-60 w-full border-b border-white/10 bg-brand-bg/90 backdrop-blur-xl"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center px-6 py-4 sm:px-10">
            <div className="flex items-center gap-3 sm:gap-6 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavClick(item.id)}
                  className="cursor-pointer font-medium tracking-tight text-white/70 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="justify-self-center">
              <Link href="/" className="font-plaster text-logo-gradient inline-block text-2xl leading-none">
                AKD
              </Link>
            </div>

            <div className="justify-self-end text-right text-xs font-medium text-white/70">
              <p className="text-white/90">{localTime}</p>
              <p>Vancouver, BC</p>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
