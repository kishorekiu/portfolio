"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Terminal, Server, Sparkles } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "../bento/DynamicReadme";

// 1. PROJECT DATA
const PROJECTS = [
  {
    id: "digital-twin-portfolio",
    title: "Interactive UI Engine",
    tagline: "The site you are currently exploring.",
    description:
      "A hardware-accelerated, single-page narrative scroll engineered with Next.js App Router and Framer Motion. Features include dynamic CSS stacking contexts, custom hooks for scroll-linked animations, and Edge-compiled dynamic SVGs.",
    tech: ["Next.js", "Framer Motion", "Tailwind v4", "Lucide", "Vercel Edge"],
    link: "#",
    icon: Terminal,
    color:
      "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20",
    spotlight: "rgba(59, 130, 246, 0.12)", // Soft blue glow (works in both themes)
  },
  {
    id: "dev-blogs",
    title: "Dev Blogs (AIOps Platform)",
    tagline: "AI-Moderated Technical Publishing",
    description:
      "Built an autonomous blogging architecture integrating an OpenAI moderation agent. The system automatically intercepts, analyzes, and flags content via a custom CI/CD pipeline, showcasing LLM integration in production workflows.",
    tech: ["Next.js", "OpenAI SDK", "Node.js", "MongoDB", "Tailwind"],
    link: "/projects/dev-blogs/readme",
    icon: Sparkles,
    color:
      "from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/20 dark:to-fuchsia-500/20",
    spotlight: "rgba(139, 92, 246, 0.12)", // Soft violet glow
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Enterprise Architecture",
    tagline: "High-Concurrency Booking Engine",
    description:
      "Engineered a dual-read Redis caching architecture to bypass Express cold starts. Validated complex cache lifecycles handling 40,000+ requests with zero data collision using Upstash REST APIs and MongoDB.",
    tech: ["Upstash Redis", "Express", "MongoDB", "React", "TanStack Query"],
    link: "/projects/airbnb-clone/readme",
    icon: Server,
    color:
      "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
    spotlight: "rgba(16, 185, 129, 0.12)", // Soft emerald glow
  },
];

// 2. THE SPOTLIGHT CARD COMPONENT
function SpotlightCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // The math for the glass stack effect
  const stickyTop = `calc(120px + ${index * 40}px)`;

  return (
    <div
      className="sticky w-full transition-all duration-500"
      style={{ top: stickyTop }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col md:flex-row w-full bg-app border border-main-200 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-main-300 h-auto md:h-100"
      >
        {/* The Dynamic Mouse Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                ${project.spotlight},
                transparent 80%
              )
            `,
          }}
        />

        {/* Left Column: Text & Meta */}
        <div className="relative z-10 flex flex-col justify-between p-8 md:p-12 w-full md:w-3/5 h-full border-b md:border-b-0 md:border-r border-main-200/50">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-main-100 border border-main-200 shadow-sm">
                <project.icon className="w-5 h-5 text-main-600" />
              </div>
              <span className="text-sm font-bold tracking-wider text-main-500 uppercase">
                {project.tagline}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-main-900 mb-4">
              {project.title}
            </h3>

            <p className="text-main-600 text-base md:text-lg leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-main-100 border border-main-200 text-main-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visual / CTA Area */}
        <div
          className={`relative z-10 w-full md:w-2/5 h-full bg-linear-to-br ${project.color} flex flex-col items-center justify-center p-8 transition-opacity`}
        >
          {/* Abstract Wireframe Graphic (Adapts to light/dark) */}
          <div className="absolute inset-0 bg-[radial-gradient(#00000015_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-size-[16px_16px] opacity-50 dark:opacity-30 mix-blend-overlay" />

          <Link href={project.link} className="relative z-20 group/btn">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-main-900 text-app font-bold hover:scale-105 transition-transform duration-300 shadow-xl">
              Boot Workspace
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </button>
          </Link>

          <Link
            href={project.link}
            className="relative z-20 mt-6 flex items-center gap-2 text-sm font-bold text-main-600 hover:text-main-900 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            View Source Architecture
          </Link>
        </div>
      </div>
    </div>
  );
}

// 3. THE MAIN SECTION
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      // Changed bg color to support light mode properly
      className="relative w-full min-h-screen py-32 px-4 sm:px-6 bg-main-50 transition-colors duration-500"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-main-200/50 border border-main-300 text-xs font-bold text-main-700 uppercase tracking-wider">
            Production Builds
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-main-900">
            Deployed Systems.
          </h2>
          <p className="text-lg text-main-600 max-w-2xl font-medium">
            A selection of full-stack architectures and AI integrations built to
            enterprise specifications.
          </p>
        </div>

        {/* The Sticky Stacking Container */}
        <div className="relative flex flex-col gap-8 pb-48">
          {PROJECTS.map((project, index) => (
            <SpotlightCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
