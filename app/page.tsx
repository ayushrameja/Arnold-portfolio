"use client";

import { motion } from "framer-motion";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";
import ContactSection from "./_components/ContactSection";

/* ── Stagger container for the entire page ── */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Home() {
  return (
    <motion.main
      className="relative overflow-x-clip overflow-y-clip"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ProjectsSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ContactSection />
      </motion.div>
    </motion.main>
  );
}
