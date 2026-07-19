"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  PaintBucket,
  DatabaseZap,
  ActivitySquare,
  LayoutTemplate,
  Zap,
  FileCode2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// (Keep your COGNIZANT_HIGHLIGHTS array exactly the same as before)
const COGNIZANT_HIGHLIGHTS = [
  {
    id: "digital-twin",
    title: "Developer Digital Twin & AIOps",
    text: "Pioneered an autonomous incident management agent using Claude Code CLI, Large Language Models (LLMs), and MCP Servers, embedding domain context to execute automated Root Cause Analysis (RCA), issue routing, and system triage for live production environments.",
    icon: BrainCircuit,
    color: "from-violet-500 to-fuchsia-500",
    borderClass: "border-violet-500/50",
    textClass: "text-violet-500 dark:text-violet-400",
  },
  {
    id: "cicd",
    title: "Enterprise CI/CD Automation",
    text: "Spearheaded agentic workflows integrating Atlassian Rovo, Figma APIs, and GitHub Actions, driving an 80% increase in sprint velocity and slashing full-stack development cycles from 10 days to 2 days.",
    icon: Workflow,
    color: "from-blue-500 to-cyan-500",
    borderClass: "border-cyan-500/50",
    textClass: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "component-delivery",
    title: "Automated Component Delivery",
    text: "Architected data extraction pipelines for real-time UI generation via Figma nodes, automating JIRA story analysis, PR creation, and Bit.dev package publishing to accelerate delivery by over 75%.",
    icon: PaintBucket,
    color: "from-emerald-400 to-teal-500",
    borderClass: "border-emerald-500/50",
    textClass: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "redis-audit",
    title: "Redis Architecture Audit",
    text: "Led the production-readiness audit for a dual-write Redis caching architecture, implementing distributed locking mechanisms across Kubernetes pods to manage in-memory and shared state.",
    icon: DatabaseZap,
    color: "from-amber-400 to-orange-500",
    borderClass: "border-amber-500/50",
    textClass: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "redis-telemetry",
    title: "Redis Telemetry & Testing",
    text: "Validated complex cache lifecycles using custom Dynatrace DQL telemetry, and executed K6 high-concurrency load testing (40,000+ requests) to ensure zero data collision.",
    icon: ActivitySquare,
    color: "from-rose-400 to-red-500",
    borderClass: "border-rose-500/50",
    textClass: "text-rose-600 dark:text-rose-400",
  },
  {
    id: "app-router",
    title: "Next.js App Router Migration",
    text: "Orchestrated the comprehensive production audit for the legacy Pages Router to App Router transition across 30+ core pages, ensuring 100% SEO compliance and complete hydration of legacy UI.",
    icon: LayoutTemplate,
    color: "from-blue-600 to-indigo-600",
    borderClass: "border-blue-500/50",
    textClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "performance",
    title: "App Router Performance",
    text: "Drove end-to-end testing protocols focused on maximizing Core Web Vitals, reducing perceived page load times by 25% and improving server-side rendering (SSR) efficiency by over 30%.",
    icon: Zap,
    color: "from-yellow-400 to-amber-500",
    borderClass: "border-yellow-500/50",
    textClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "ci-docs",
    title: "Automated CI Documentation",
    text: "Engineered an automated synchronization pipeline using GitHub Actions and a custom parser to instantly update Confluence pages with newly introduced Storyblok CMS keys upon PR merges, reducing manual update time by over 90%.",
    icon: FileCode2,
    color: "from-indigo-400 to-purple-500",
    borderClass: "border-indigo-500/50",
    textClass: "text-indigo-600 dark:text-indigo-400",
  },
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Ref for the Carousel to handle smart mobile scrolling
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % COGNIZANT_HIGHLIGHTS.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);

    // Smart Mobile Scroll: If on a mobile/tablet, smoothly scroll the screen up to the Carousel
    if (window.innerWidth < 1024 && carouselRef.current) {
      const yOffset = -80; // Offset for sticky navbars
      const element = carouselRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % COGNIZANT_HIGHLIGHTS.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? COGNIZANT_HIGHLIGHTS.length - 1 : prev - 1,
    );
    setIsPlaying(false);
  };

  const activeItem = COGNIZANT_HIGHLIGHTS[activeIndex];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Enterprise Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-main-900">
            Cognizant Technology Solutions.
          </h2>
          <p className="text-base md:text-lg font-medium text-main-600">
            AI-Empowered Full Stack Engineer · DIRECTV Client (Aug 2022 -
            Present)
          </p>
        </div>

        {/* Master-Detail Layout: Note the "items-start" which is crucial for sticky children */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT ON DESKTOP, BOTTOM ON MOBILE: The Bento Grid */}
          <div className="order-2 lg:order-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4">
            {COGNIZANT_HIGHLIGHTS.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleManualSelect(index)}
                  // 1. CRITICAL FIX: Removed `overflow-hidden` so the motion.div can fly outside the button's boundaries
                  className={`
                    group relative flex flex-col items-start p-4 md:p-5 rounded-2xl text-left transition-all duration-300 bg-color-none
                    ${
                      isActive
                        ? `shadow-md border ${item.borderClass} scale-[1.02]`
                        : "border border-main-200/50 hover:border-main-300"
                    }
                  `}
                >
                  {/* 2. BASE BACKGROUND: We put the solid background on a -z-20 layer so it doesn't swallow the flying animation */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-colors duration-300 -z-20
                      ${isActive ? "bg-app" : "bg-main-50 hover:bg-main-100/50"}
                    `}
                  />

                  {/* 3. THE FLYING HIGHLIGHT: Notice rounded-2xl and -z-10 */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className={`absolute inset-0 rounded-2xl pointer-events-none -z-10`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      <div
                        className={`h-full w-full rounded-2xl opacity-10 dark:opacity-20 bg-linear-to-br ${item.color}`}
                      />
                    </motion.div>
                  )}

                  {/* CONTENT (z-10) */}
                  <div className="relative z-10 flex flex-col gap-3">
                    <Icon
                      className={`w-6 h-6 transition-colors duration-300 ${isActive ? item.textClass : "text-main-500 group-hover:text-main-700"}`}
                    />
                    <span
                      className={`text-sm md:text-base font-bold transition-colors duration-300 ${isActive ? "text-main-900" : "text-main-600"}`}
                    >
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT ON DESKTOP, TOP ON MOBILE: The Carousel Viewer */}
          {/* CRITICAL FIXES: sticky, top-24, h-fit, and order-1 (mobile) */}
          <div
            ref={carouselRef}
            className="order-1 lg:order-2 lg:col-span-5 sticky top-24 md:top-32 h-fit flex flex-col bg-app border border-main-200/50 rounded-3xl p-6 md:p-10 shadow-lg"
          >
            {/* Controls */}
            <div className="flex items-center justify-between mb-8 border-b border-main-100/50 pb-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full bg-linear-to-r ${activeItem.color} animate-pulse`}
                />
                <span className="text-xs font-bold text-main-500 uppercase tracking-wider">
                  Highlight {activeIndex + 1} of {COGNIZANT_HIGHLIGHTS.length}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-2 text-main-400 hover:text-main-900 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 text-main-400 hover:text-main-900 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 text-main-400 hover:text-main-900 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Display: Removed absolute inset-0 to allow natural height growth */}
            <div className="relative min-h-45">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <h3
                    className={`text-2xl md:text-3xl font-extrabold ${activeItem.textClass}`}
                  >
                    {activeItem.title}
                  </h3>
                  <p className="text-base md:text-lg text-main-600 leading-relaxed font-medium">
                    {activeItem.text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
