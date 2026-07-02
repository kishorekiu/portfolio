"use client";

import React, { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";

export default function SkeletonDemo() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate a network request loop for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded((prev) => !prev);
    }, 3000); // Toggles between skeleton and "loaded" state every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm overflow-hidden group">
      {/* Replay Indicator (Subtle UI touch) */}
      <div className="absolute top-2 right-2 z-10 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <RefreshCcw className="w-3 h-3" />
        <span>Auto-replaying</span>
      </div>

      {!isLoaded ? (
        // THE SKELETON STATE
        <div className="animate-pulse flex flex-col space-y-3">
          {/* Image Skeleton */}
          <div className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full"></div>
          {/* Text Skeletons */}
          <div className="space-y-2">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2"></div>
          </div>
          {/* Footer Skeleton */}
          <div className="flex justify-between items-center pt-2">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/4"></div>
            <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full w-6"></div>
          </div>
        </div>
      ) : (
        // THE LOADED STATE
        <div className="flex flex-col space-y-3 animate-in fade-in duration-500">
          {/* Simulated Loaded Image */}
          <div className="h-32 bg-linear-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-lg w-full flex items-center justify-center border border-zinc-100 dark:border-zinc-800">
            <span className="text-xs font-semibold text-blue-500 dark:text-blue-400">
              Optimized WebP
            </span>
          </div>
          {/* Simulated Text */}
          <div className="space-y-1">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Modern Beachfront Villa
            </div>
            <div className="text-xs text-zinc-500">Entire home · 4 beds</div>
          </div>
          {/* Simulated Footer */}
          <div className="flex justify-between items-center pt-2">
            <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              $250{" "}
              <span className="text-xs font-normal text-zinc-500">/ night</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-500 text-xs">
              ♥
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
