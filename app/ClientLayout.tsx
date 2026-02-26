"use client";

import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {children}
      {mounted && <Toaster />}
    </>
  );
}
