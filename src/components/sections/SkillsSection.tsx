"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// The highly curated, ATS-friendly skills data
const SKILLS_CATEGORIES = [
  {
    title: "Frontend & UI Engineering",
    description:
      "Building hardware-accelerated, pixel-perfect user interfaces.",
    skills: [
      "Next.js (App Router)",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "Material UI",
      "Storyblok CMS",
      "Redux",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend, Data & APIs",
    description: "Architecting robust microservices and caching layers.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis (Upstash)",
      "Server Actions",
      "REST APIs",
      "TanStack Query",
      "Microservices",
    ],
  },
  {
    title: "AI & Automation",
    description: "Shipping autonomous agents and intelligent CI/CD workflows.",
    skills: [
      "Claude Code CLI",
      "MCP Servers",
      "OpenAI SDK",
      "GitHub Copilot",
      "AI Workflows",
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    description: "Deploying, scaling, and monitoring in the cloud.",
    skills: [
      "Vercel",
      "Render",
      "AWS",
      "Docker",
      "Kubernetes",
      "Dynatrace (DQL)",
      "ArgoCD",
      "GitHub Actions",
      "Git",
    ],
  },
];

export default function SkillsSection() {
  // Scroll animations for the section header
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Staggered animations for the Bento cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      // py-24 ensures massive breathing room between sections. px-4 ensures mobile safety.
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      {/* 1. BACKGROUND LAYER (-z-10) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Subtle dot matrix grid that adapts to light/dark mode */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-size-[24px_24px] opacity-50" />

        {/* Soft gradient mask so the grid fades out at the edges of the section */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white dark:from-[#0E1117] dark:via-transparent dark:to-[#0E1117]" />
      </div>

      {/* 2. CONTENT LAYER (z-10) */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="flex flex-col items-start md:items-center text-left md:text-center space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Technical Arsenal.
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A comprehensive breakdown of the tools and frameworks I use to
            engineer scalable, high-performance web applications.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          // grid-cols-1 for mobile, grid-cols-2 for desktop
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {SKILLS_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              // glassmorphism UI: translucent background with a subtle border
              className="group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-sm overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
            >
              {/* Subtle hover glow effect inside the card */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {category.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-sm transition-colors group-hover:border-blue-200 dark:group-hover:border-blue-900/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
