"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  BrainCircuit,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const EXPERIENCE_DATA = [
  {
    id: "directv-associate",
    company: "Cognizant Technology Solutions (DIRECTV)",
    role: "Associate (Full Stack & AI)",
    date: "Feb 2024 - Present", // Adjust month as needed
    location: "Hyderabad, India",
    description:
      "Transitioned into deep domain architecture, full-stack performance tuning, and engineering custom AI automation pipelines for enterprise incident management.",
    icon: BrainCircuit,
    highlights: [
      "Engineered a custom Developer Digital Twin (Autonomous AIOps Agent) using Claude Code CLI and MCP Servers.",
      "Embedded personalized debugging strategies and deep domain context into the AI, enabling it to autonomously triage, route, and identify root-cause families for live production incidents.",
      "Led the production-readiness audit for a dual-write Redis caching architecture, implementing distributed locking mechanisms across Kubernetes pods.",
      "Validating complex cache lifecycles and server telemetry utilizing Dynatrace DQL and ArgoCD.",
    ],
    tech: [
      "Next.js App Router",
      "Redis",
      "Claude CLI",
      "MCP Servers",
      "Dynatrace",
      "ArgoCD",
    ],
  },
  {
    id: "directv-programmer-analyst",
    company: "Cognizant Technology Solutions (DIRECTV)",
    role: "Programmer Analyst",
    date: "Aug 2022 - Jan 2024",
    location: "Hyderabad, India",
    description:
      "Focused on highly scalable frontend architectures, component system design, and rigorous performance optimizations.",
    icon: Briefcase,
    highlights: [
      "Architected pixel-perfect, highly accessible user interfaces through strict Figma-to-code execution.",
      "Drove end-to-end testing protocols focused on maximizing Core Web Vitals and server-side rendering (SSR) efficiency.",
      "Enforced CATO compliance and optimized complex React component logic using efficient data structures.",
      "Orchestrated the comprehensive production audit for the legacy Pages Router to App Router transition across 30+ core pages.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Figma",
      "Web Performance",
    ],
  },
];

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform the scroll progress (0 to 1) into a height percentage (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main
      className="min-h-screen pt-12 pb-32 px-6 max-w-4xl mx-auto"
      ref={containerRef}
    >
      <div className="space-y-3 mb-16 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-4xl font-extrabold tracking-tight text-main-900 md:text-5xl">
          Professional History
        </h2>
        <p className="text-main-500 max-w-xl font-medium">
          A track record of shipping highly scalable architectures and
          pixel-perfect user interfaces.
        </p>
      </div>

      <div className="relative">
        {/* The Background Line (Dim) */}
        <div className="absolute left-3.75 md:left-5.75 top-0 bottom-0 w-0.5 bg-main-200 " />

        {/* The Glowing Animated Line */}
        <motion.div
          className="absolute left-3.75 md:left-5.75 top-0 w-0.5 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] origin-top"
          style={{ height: lineHeight }}
        />

        <div className="space-y-16">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className="relative pl-12 md:pl-20 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-2 top-1.5 flex items-center justify-center w-8 h-8 rounded-full border-2 border-main-200 bg-app group-hover:border-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 z-10">
                <Briefcase className="w-3.5 h-3.5 text-main-400 group-hover:text-blue-500 transition-colors" />
              </div>

              {/* Content Card */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                {/* Mobile Date (Hidden on Desktop) */}
                <div className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-blue-500 bg-blue-50 dark:bg-blue-500/10 w-fit px-2.5 py-1 rounded-full mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {job.date}
                </div>

                {/* Role and Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-main-900 ">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-main-600 ">
                      <span className="font-semibold text-main-800 ">
                        {job.company}
                      </span>
                      {job.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {job.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-main-600 leading-relaxed text-sm md:text-base">
                    {job.description}
                  </p>

                  {/* NEW: Experience Highlights */}
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="space-y-3 mt-4">
                      {job.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm md:text-base text-main-600 group/bullet"
                        >
                          {/* Custom glowing bullet point */}
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0 group-hover/bullet:bg-blue-500 group-hover/bullet:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack - added extra padding top to separate from highlights */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-main-100 border border-main-200 text-main-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop Date (Sticky on scroll) */}
                <div className="hidden md:block w-40 shrink-0 relative">
                  <div className="sticky top-24 text-right">
                    <span className="text-sm font-bold text-main-400">
                      {job.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
