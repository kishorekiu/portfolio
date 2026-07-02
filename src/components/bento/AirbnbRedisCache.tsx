import React from "react";
import { Database, Zap } from "lucide-react";

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

      <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-100 font-mono text-sm overflow-x-auto">
        <div className="flex items-center space-x-2 text-zinc-400 pb-3 border-b border-zinc-800 mb-3">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>redis-strategy.config.ts</span>
        </div>
        <pre className="text-xs leading-relaxed text-emerald-400">
          {`// Strategy: Cache-Aside Pattern for High-Frequency Property Reads
const getPropertyDetails = async (propertyId: string) => {
  const cacheKey = \`listing:details:\${propertyId}\`;

  // 1. Check Redis in-memory cache (~2ms response)
  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) return JSON.parse(cachedData);

  // 2. Fallback to primary database on cache miss
  const propertyData = await db.properties.findUnique({ where: { id: propertyId } });

  // 3. Populate cache with a 1-hour TTL
  if (propertyData) {
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(propertyData));
  }

  return propertyData;
};`}
        </pre>
      </div>
    </div>
  );
}
