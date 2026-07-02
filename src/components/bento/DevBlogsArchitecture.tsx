import React from "react";
import DynamicBentoGrid from "./DynamicBentoGrid";
import { devBlogsArchitectureData } from "@/lib/bento-data";

export default function DevBlogsArchitecture() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Dev Blogs: AI-Powered Platform
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Full-stack architecture breakdown focusing on OpenAI integrations and
          Next.js data mutations.
        </p>
      </div>

      <DynamicBentoGrid items={devBlogsArchitectureData} />
    </div>
  );
}
