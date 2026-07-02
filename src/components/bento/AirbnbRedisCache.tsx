import React from "react";
import { Database, Zap } from "lucide-react";
import DynamicBentoGrid from "./DynamicBentoGrid";
import { airbnbDatabaseData } from "@/lib/bento-data";

export default function AirbnbRedisCache() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Redis Caching & Latency Optimization
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          High-performance in-memory caching layer slashing database query load
          for frequently accessed listings.
        </p>
      </div>

      <DynamicBentoGrid items={airbnbDatabaseData} />
    </div>
  );
}
