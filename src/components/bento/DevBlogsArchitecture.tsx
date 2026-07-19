import React from "react";
import DynamicBentoGrid from "./DynamicBentoGrid";
import { devBlogsArchitectureData } from "@/lib/bento-data";

export default function DevBlogsArchitecture() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-main-900">
          Dev Blogs: AI-Powered Platform
        </h1>
        <p className="text-sm text-main-500 mt-1">
          Full-stack architecture breakdown focusing on OpenAI integrations and
          Next.js data mutations.
        </p>
      </div>

      <DynamicBentoGrid items={devBlogsArchitectureData} />
    </div>
  );
}
