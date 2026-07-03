"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Full-Stack Software Engineer",
    company: "Tech Startup / Product Company",
    date: "2024 - Present",
    location: "Remote",
    description:
      "Architected scalable microservices using Node.js and Express. Implemented Redis caching strategies that reduced database load by 40%. Led the frontend migration to Next.js App Router, heavily utilizing Server Components and optimistic UI mutations for zero-latency interactions.",
    tech: ["Next.js", "Node.js", "Redis", "MongoDB", "Framer Motion"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Agency / Mid-level Corp",
    date: "2022 - 2024",
    location: "Hybrid",
    description:
      "Spearheaded the development of complex, data-heavy dashboards. Implemented DOM virtualization techniques to render 100,000+ rows of data without dropping frame rates. Built dynamic, config-driven Bento UI ecosystems.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Initial Tech Role",
    date: "2021 - 2022",
    location: "On-site",
    description:
      "Integrated third-party APIs and OpenAI SDK agents to automate content moderation. Managed MongoDB aggregations and built secure JWT authentication pipelines to ensure robust session management across tabs.",
    tech: ["JavaScript", "Express", "Mongoose", "JWT"],
  },
  {
    id: 1,
    role: "Full-Stack Software Engineer",
    company: "Tech Startup / Product Company",
    date: "2024 - Present",
    location: "Remote",
    description:
      "Architected scalable microservices using Node.js and Express. Implemented Redis caching strategies that reduced database load by 40%. Led the frontend migration to Next.js App Router, heavily utilizing Server Components and optimistic UI mutations for zero-latency interactions.",
    tech: ["Next.js", "Node.js", "Redis", "MongoDB", "Framer Motion"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Agency / Mid-level Corp",
    date: "2022 - 2024",
    location: "Hybrid",
    description:
      "Spearheaded the development of complex, data-heavy dashboards. Implemented DOM virtualization techniques to render 100,000+ rows of data without dropping frame rates. Built dynamic, config-driven Bento UI ecosystems.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Initial Tech Role",
    date: "2021 - 2022",
    location: "On-site",
    description:
      "Integrated third-party APIs and OpenAI SDK agents to automate content moderation. Managed MongoDB aggregations and built secure JWT authentication pipelines to ensure robust session management across tabs.",
    tech: ["JavaScript", "Express", "Mongoose", "JWT"],
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
        <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
          Professional History
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl font-medium">
          A track record of shipping highly scalable architectures and
          pixel-perfect user interfaces.
        </p>
      </div>

      <div className="relative">
        {/* The Background Line (Dim) */}
        <div className="absolute left-3.75 md:left-5.75 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

        {/* The Glowing Animated Line */}
        <motion.div
          className="absolute left-3.75 md:left-5.75 top-0 w-0.5 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] origin-top"
          style={{ height: lineHeight }}
        />

        <div className="space-y-16">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className="relative pl-12 md:pl-20 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-2 top-1.5 flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0E1117] group-hover:border-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 z-10">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
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
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop Date (Sticky on scroll) */}
                <div className="hidden md:block w-40 shrink-0 relative">
                  <div className="sticky top-24 text-right">
                    <span className="text-sm font-bold text-zinc-400 dark:text-zinc-500">
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
