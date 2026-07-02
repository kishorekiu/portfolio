import React from "react";
import { ExternalLink, Terminal, ShieldAlert } from "lucide-react";
import { ReadmeConfig } from "@/lib/readme-data";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function DynamicReadme({ data }: { data: ReadmeConfig }) {
  return (
    <div className="max-w-3xl mx-auto space-y-8 text-zinc-800 dark:text-zinc-300 pb-12">
      {/* Header section with optional icon */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-3">
          {data.title} {data.titleIcon}
        </h1>

        {/* Conditionally rendered Link Buttons */}
        <div className="flex flex-wrap gap-3">
          {data.links.liveUrl && (
            <a
              href={data.links.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Vercel Deployment</span>
            </a>
          )}
          {data.links.frontendRepo && (
            <a
              href={data.links.frontendRepo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-md text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-700"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Frontend Repo</span>
            </a>
          )}
          {data.links.backendRepo && (
            <a
              href={data.links.backendRepo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-md text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-700"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Backend Repo</span>
            </a>
          )}
          {data.links.sourceRepo && (
            <a
              href={data.links.sourceRepo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-md text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-700"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <p className="leading-relaxed">{data.description}</p>

        {/* Dynamic Features List */}
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          {data.featuresListHeading}
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Conditionally rendered Quick Start / Code Block */}
        {data.quickStart && (
          <>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              {data.quickStart.label}
            </h2>
            <div
              className={`border rounded-md p-4 font-mono text-sm ${
                data.quickStart.type === "env"
                  ? "bg-zinc-100 dark:bg-[#0d1117] border-zinc-200 dark:border-zinc-800 text-amber-600 dark:text-amber-400"
                  : "bg-zinc-100 dark:bg-[#0d1117] border-zinc-200 dark:border-zinc-800 text-blue-600 dark:text-blue-400"
              }`}
            >
              {data.quickStart.type === "bash" && (
                <div className="flex items-center space-x-2 text-zinc-500 mb-2 select-none">
                  <Terminal className="w-4 h-4" />
                  <span>bash</span>
                </div>
              )}
              <pre className="whitespace-pre-wrap">{data.quickStart.code}</pre>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
