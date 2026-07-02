import React from "react";
import { notFound } from "next/navigation";
import { Layers, Server, Database, FileCode } from "lucide-react";

// Sub-components for our prioritized Airbnb Clone showcase
import AirbnbUIFeatures from "@/components/bento/AirbnbUIFeatures";
import AirbnbMicroservices from "@/components/bento/AirbnbMicroservices";
import AirbnbRedisCache from "@/components/bento/AirbnbRedisCache";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function ProjectCatchAllPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const project = slug[0]; // e.g., 'airbnb-clone' or 'dev-blogs'
  const subPage = slug[1]; // e.g., 'ui-features', 'microservices', etc.

  // 1. AIRBNB CLONE ROUTING (Priority Showcase)
  if (project === "airbnb-clone") {
    switch (subPage) {
      case "ui-features":
        return <AirbnbUIFeatures />;
      case "microservices":
        return <AirbnbMicroservices />;
      case "redis-cache":
        return <AirbnbRedisCache />;
      default:
        return (
          <DefaultProjectOverview
            title="Airbnb Clone Architecture"
            description="Select a module from the explorer on the left to inspect the UI features, microservices architecture, or Redis caching strategy."
          />
        );
    }
  }

  // 2. DEV BLOGS ROUTING
  if (project === "dev-blogs") {
    return (
      <DefaultProjectOverview
        title={`Dev Blogs: ${subPage || "Overview"}`}
        description="Full-stack AI-powered blogging platform built with Next.js, MongoDB, and automated content moderation."
      />
    );
  }

  // If route doesn't match known projects, trigger 404
  if (!project) {
    notFound();
  }

  return (
    <DefaultProjectOverview
      title={slug.join(" / ")}
      description="Inspecting file layout and architecture."
    />
  );
}

// Fallback component when opening a generic folder view
function DefaultProjectOverview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <h1 className="text-2xl font-bold tracking-tight capitalize text-zinc-900 dark:text-zinc-100">
          {title.replace("-", " ")}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          {description}
        </p>
      </div>
      <div className="p-8 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-xl flex flex-col items-center justify-center text-center text-zinc-400 min-h-75">
        <FileCode className="w-12 h-12 mb-3 opacity-50" />
        <p className="text-sm">
          Select a specific file from the Explorer sidebar to view code
          implementation and interactive benchmarks.
        </p>
      </div>
    </div>
  );
}
