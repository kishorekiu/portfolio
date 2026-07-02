"use client";

import React from "react";
import { ArrowRight, Sparkles, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function HomePage() {
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
    <main className="flex min-h-screen flex-col items-center justify-center p-6 relative overflow-hidden bg-white dark:bg-[#0E1117]">
      {/* Animated Glowing Background Mesh */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute w-200 h-150 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute right-[-10%] top-[-10%] w-150 h-150 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Available for new opportunities in 2026</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-zinc-900 dark:text-white leading-[1.1]"
        >
          Architecting systems.
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
            Perfecting the UI.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium"
        >
          I am a Full-Stack Engineer specializing in high-performance React
          architectures, Node.js microservices, and pixel-perfect design
          systems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Link
            href="/projects/airbnb-clone/readme"
            className="group flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/20 dark:shadow-white/10"
          >
            Enter Workspace
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/skills"
            className="group flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-full font-semibold transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95"
          >
            Explore Skills
            <TerminalSquare className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
