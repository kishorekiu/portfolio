"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FileCode2, X } from "lucide-react";
import clsx from "clsx";

export default function TopTabs() {
  const pathname = usePathname();

  // Extract the "filename" from the URL path
  // e.g., "/projects/airbnb-clone/ui-features" -> "ui-features"
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentFile = pathSegments[pathSegments.length - 1] || "overview";

  // Format it nicely to look like a file if it doesn't have an extension
  const displayFileName = currentFile.includes(".")
    ? currentFile
    : `${currentFile}.tsx`;

  return (
    <div className="h-10 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0E1117] flex items-end px-2 overflow-x-auto hide-scrollbar">
      {/* Active Tab */}
      <div
        className={clsx(
          "flex items-center space-x-2 px-4 py-2 border-t-2 border-r border-l border-b-0 text-sm min-w-fit max-w-50 cursor-default transition-colors",
          "border-blue-500 bg-white dark:bg-[#0E1117] text-blue-600 dark:text-blue-400 border-r-zinc-200 dark:border-r-zinc-800 border-l-zinc-200 dark:border-l-zinc-800",
        )}
      >
        <FileCode2 className="w-4 h-4 opacity-80" />
        <span className="truncate">{displayFileName}</span>
        <button className="ml-2 p-0.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 opacity-60 hover:opacity-100 transition-opacity">
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Mock Inactive Tab to sell the IDE look (Optional) */}
      <div className="flex items-center space-x-2 px-4 py-2 border-b text-sm min-w-fit max-w-50 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 cursor-pointer transition-colors border-r border-zinc-200 dark:border-zinc-800">
        <span className="truncate opacity-70">README.md</span>
      </div>
    </div>
  );
}
