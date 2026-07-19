"use client";

import React from "react";
import { ArrowRight, Sparkles, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ScrambleText from "@/components/ui/ScrambleText";
import SciFiButton from "@/components/ui/SciFiButton";
import HighwayMarquee from "@/components/ui/HighMarquee";

export default function HeroSection() {
  // Staggered animation configuration
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* 1. Highway Marquees (Background Layer) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden pointer-events-none opacity-60 dark:opacity-40 transition-opacity duration-500">
        <HighwayMarquee className="-rotate-6 scale-110 -translate-y-24" />
        <HighwayMarquee
          reverse
          className="-rotate-6 scale-110 translate-y-24"
        />
      </div>

      {/* Animated Glowing Background Mesh */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute w-150 h-125 md:w-200 md:h-150 bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center space-y-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-main-100 border border-main-200 text-xs font-medium text-main-600 shadow-sm">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>
              <ScrambleText
                text="Available for new opportunities in 2026"
                delay={0}
              />
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl px-4 md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-main-900 leading-[1.1]"
        >
          Architecting systems.
          <br className="hidden md:block" />
          {/* Fixed Tailwind bug: bg-linear-to-r -> bg-gradient-to-r */}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
            Perfecting the UI.
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-lg md:text-xl text-main-600 dark:text-main-400 max-w-2xl mx-auto font-medium"
        >
          I am a{" "}
          <span className="font-bold text-main-900 dark:text-main-100">
            <ScrambleText text="Full-Stack Engineer" delay={1500} />
          </span>{" "}
          specializing in high-performance React architectures, Node.js
          microservices, and autonomous AIOps workflows.
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <Link href="/projects/airbnb-clone/readme" className="outline-none">
            <SciFiButton>
              <span className="flex items-center gap-2">
                Enter Workspace <ArrowRight className="w-4 h-4" />
              </span>
            </SciFiButton>
          </Link>

          {/* CRITICAL UX CHANGE: href is now "#skills" for the narrative scroll */}
          <Link
            href="#skills"
            className="group flex items-center gap-2 bg-transparent text-main-900 dark:text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-main-100 dark:hover:bg-main-900"
          >
            Explore Skills
            <TerminalSquare className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator added at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none"
      >
        <div className="w-0.5 h-12 bg-linear-to-b from-main-400 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
