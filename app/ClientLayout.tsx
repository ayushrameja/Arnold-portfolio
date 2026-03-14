"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import IntroLoader from "@/components/IntroLoader";
import PageTransitionProvider from "@/components/PageTransitionProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showIntroOnVisit] = useState(() => pathname === "/");
  const [mounted, setMounted] = useState(false);
  const [introComplete, setIntroComplete] = useState(() => !showIntroOnVisit);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const showIntro = mounted && showIntroOnVisit && !introComplete;
  const shouldRenderApp = !showIntroOnVisit || introComplete;
  const handleIntroComplete = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    setIntroComplete(true);
  };

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      {shouldRenderApp && (
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      )}

      {mounted && <Toaster />}
    </>
  );
}
