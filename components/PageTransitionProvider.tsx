"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

/* ────────────────────────────────────────────────────────
 *  Context – exposes navigateWithTransition to child components
 * ──────────────────────────────────────────────────────── */
interface TransitionCtx {
  navigateWithTransition: (href: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionCtx>({
  navigateWithTransition: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

/* ────────────────────────────────────────────────────────
 *  Provider – wraps children, manages exit overlay
 * ──────────────────────────────────────────────────────── */
const EXIT_DURATION = 0.5; // fade out time (seconds)

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (href === pathname) return;
      router.push(href);
    },
    [pathname, router],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <TransitionContext.Provider
      value={{ navigateWithTransition, isTransitioning: false }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
