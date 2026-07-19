"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Layout,
  Database,
  Server,
  BrainCircuit,
  Bot,
  Cloud,
  Container,
  Activity,
  Terminal,
  Code2,
  Workflow,
} from "lucide-react";

export const CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & DBs" },
  { id: "ai", label: "AI & Automation" },
  { id: "devops", label: "DevOps & Tools" },
];

export const SKILLS_DATA = [
  // ==========================================
  // AI & AUTOMATION (The Highlight Pieces)
  // ==========================================
  {
    name: "Claude Code & MCP Servers",
    category: "ai",
    level: "Expert",
    icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
    // Massive 2x2 card to draw the recruiter's eye immediately
    size: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    name: "OpenAI SDK & Copilot",
    category: "ai",
    level: "Advanced",
    icon: <Bot className="w-5 h-5 text-emerald-600" />,
    size: "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    name: "Custom AI Workflows",
    category: "ai",
    level: "Expert",
    icon: <Workflow className="w-5 h-5 text-purple-600" />,
    size: "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
  },

  // ==========================================
  // FRONTEND
  // ==========================================
  {
    name: "Next.js (App Router)",
    category: "frontend",
    level: "Expert",
    icon: <Globe className="w-5 h-5 text-main-900" />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "React.js",
    category: "frontend",
    level: "Expert",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    size: "col-span-2 row-span-1 md:col-span-1",
  },
  {
    name: "Tailwind & MUI 5",
    category: "frontend",
    level: "Advanced",
    icon: <Layout className="w-5 h-5 text-sky-400" />,
    size: "col-span-2 row-span-1 md:col-span-1",
  },
  {
    name: "Storyblok CMS",
    category: "frontend",
    level: "Advanced",
    icon: <Terminal className="w-5 h-5 text-teal-500" />,
    size: "col-span-2 row-span-1 md:col-span-1",
  },

  // ==========================================
  // BACKEND & DATABASES
  // ==========================================
  {
    name: "Node.js & Express",
    category: "backend",
    level: "Advanced",
    icon: <Server className="w-5 h-5 text-green-600" />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "Redis (Distributed Locking)",
    category: "backend",
    level: "Expert",
    icon: <Database className="w-5 h-5 text-red-500" />,
    size: "col-span-2 row-span-1 md:col-span-1",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: "Advanced",
    icon: <Database className="w-5 h-5 text-green-500" />,
    size: "col-span-2 row-span-1 md:col-span-1",
  },

  // ==========================================
  // DEVOPS, TOOLS & TESTING
  // ==========================================
  {
    name: "GitHub Actions CI/CD",
    category: "devops",
    level: "Advanced",
    icon: <Workflow className="w-5 h-5 text-main-700" />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "Docker & AWS",
    category: "devops",
    level: "Intermediate",
    icon: <Container className="w-5 h-5 text-blue-600" />,
    size: "col-span-2 row-span-1 md:col-span-1",
  },
  {
    name: "Dynatrace & K6 Testing",
    category: "devops",
    level: "Intermediate",
    icon: <Activity className="w-5 h-5 text-purple-500" />,
    size: "col-span-2 row-span-1 md:col-span-1",
  },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeTab === "all" || skill.category === activeTab,
  );

  return (
    <main className="min-h-screen pt-12 pb-24 px-6 max-w-5xl mx-auto flex flex-col justify-start">
      {/* Title Header */}
      <div className="space-y-3 mb-12 text-center md:text-left">
        <h2 className="text-4xl font-extrabold tracking-tight text-main-900">
          Technical Ecosystem
        </h2>
        <p className="text-main-500 max-w-xl font-medium">
          A highly specialized toolset cultivated over years of building
          resilient full-stack applications.
        </p>
      </div>

      {/* Filter Tabs Controller */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8 bg-main-100/80 p-1.5 rounded-full border border-main-200/50  self-center md:self-start backdrop-blur-md">
        {CATEGORIES.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-2 text-xs md:text-sm font-semibold capitalize rounded-full transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-white"
                : "text-main-500 hover:text-main-900"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-main-900 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bento Grid Canvas */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(27.5, auto)]"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              key={skill.name}
              className={`group relative p-5 rounded-2xl border border-main-200/60 bg-app shadow-sm flex flex-col justify-between overflow-hidden hover:border-main-500/50 transition-colors duration-300 ${skill.size}`}
            >
              {/* Subtle Card Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-transparent to-transparent group-hover:from-blue-500/3 dark:group-hover:from-blue-500/2 transition-all duration-500 pointer-events-none" />

              {/* Upper Section: Icon and Proficiency Label */}
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-main-50 border border-main-100 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded-md bg-main-100 text-main-500 border border-main-200/40">
                  {skill.level}
                </span>
              </div>

              {/* Lower Section: Skill Name */}
              <div>
                <h3 className="font-bold text-base md:text-lg tracking-tight text-main-800">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
