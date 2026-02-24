"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Suspense, useCallback, useEffect, useState } from "react";

import InitialLoader from "@/components/InitialLoader";
import SmoothScroll from "@/components/SmoothScroll";
import TopNav from "@/components/TopNav";
import { Toaster } from "@/components/ui/sonner";
import StormTransition from "@/components/StormTransition";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
  }, [pathname]);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    if (showLoader) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [showLoader]);

  return (
    <SmoothScroll>
      <div className="relative bg-brand-bg">
        {!showLoader && <TopNav />}
        <div className="relative" id="app-shell">
          <Suspense fallback={<LoadingSpinner />}>
            <div id="page-shell">{!showLoader && children}</div>
          </Suspense>
        </div>
        <Toaster />
        <StormTransition />
        <AnimatePresence initial={false}>
          {showLoader ? (
            <InitialLoader
              key={pathname}
              onComplete={handleLoaderComplete}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-brand-bg">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
    </div>
  );
}
