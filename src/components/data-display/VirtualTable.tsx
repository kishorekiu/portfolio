"use client";

import React, { useRef, useState, useMemo } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Activity, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import clsx from "clsx";

// Simulate 100,000 rows of enterprise system logs
const ROW_COUNT = 100000;

export default function VirtualTable() {
  const parentRef = useRef<HTMLDivElement>(null);

  // Generate mock data on the client to avoid 100k rows in the server HTML payload
  const rows = useMemo(() => {
    return Array.from({ length: ROW_COUNT }).map((_, i) => {
      const isError = Math.random() > 0.98;
      const latency = Math.floor(Math.random() * (isError ? 1200 : 150)) + 10;
      return {
        id: `REQ-${100000 + i}`,
        timestamp: new Date(Date.now() - i * 10000)
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),
        status: isError ? 500 : 200,
        latency,
        endpoint: isError
          ? "/api/v1/checkout/process"
          : "/api/v1/listings/search",
      };
    });
  }, []);

  // The TanStack Virtualizer hook
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48, // Estimated height of each row in px
    overscan: 5, // Number of items to render outside the visible area to prevent flickering
  });

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Header Metrics */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-500" />
            System Request Logs
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            DOM Virtualization rendering {ROW_COUNT.toLocaleString()} rows at
            60fps.
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded text-sm font-mono border border-zinc-200 dark:border-zinc-800">
            Memory Load: <span className="text-emerald-500 font-bold">Low</span>
          </div>
        </div>
      </div>

      {/* The Scrollable Container */}
      <div
        ref={parentRef}
        className="flex-1 overflow-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 12rem)" }}
      >
        {/* The massive virtual height container */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {/* Only rendering the visible rows */}
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const row = rows[virtualRow.index];
            const isError = row.status === 500;

            return (
              <div
                key={virtualRow.index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className={clsx(
                  "flex items-center px-4 border-b border-zinc-100 dark:border-zinc-900 text-sm font-mono transition-colors",
                  virtualRow.index % 2 === 0
                    ? "bg-zinc-50/50 dark:bg-zinc-900/20"
                    : "bg-transparent",
                  "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                )}
              >
                <div className="w-24 text-zinc-500">{row.id}</div>
                <div className="w-48 text-zinc-500 hidden md:block">
                  {row.timestamp}
                </div>
                <div className="w-24 flex items-center">
                  {isError ? (
                    <span className="flex items-center text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded">
                      <AlertCircle className="w-3 h-3 mr-1" /> 500
                    </span>
                  ) : (
                    <span className="flex items-center text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> 200
                    </span>
                  )}
                </div>
                <div className="flex-1 text-zinc-700 dark:text-zinc-300 truncate pr-4">
                  {row.endpoint}
                </div>
                <div
                  className={clsx(
                    "w-24 text-right flex items-center justify-end",
                    isError ? "text-rose-500" : "text-zinc-500",
                  )}
                >
                  <Clock className="w-3 h-3 mr-1 opacity-50" />
                  {row.latency}ms
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
