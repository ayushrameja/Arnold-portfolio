"use client";

import { motion } from "framer-motion";

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M25 80 V20 H50 Q72 20 72 36 Q72 50 50 50 H25"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M25 50 H55 Q78 50 78 65 Q78 80 55 80 H25"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export const LogoText = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`font-editorial font-bold tracking-tighter ${className}`}>
      BIKRAM
    </div>
  );
};
