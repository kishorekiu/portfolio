import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradient Mesh (Placeholder) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-100/20 via-zinc-50 to-white dark:from-blue-900/20 dark:via-[#0E1117] dark:to-[#0E1117] -z-10" />

      <div className="max-w-3xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-white">
          Architecting systems.
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
            Perfecting the UI.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Full-Stack Software Engineer specializing in high-performance React
          architectures, Node.js microservices, and pixel-perfect design
          systems.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/projects/airbnb-clone/readme"
            className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Enter Workspace <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
