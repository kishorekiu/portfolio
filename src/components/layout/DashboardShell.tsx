"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import FileTree from "@/components/navigation/FileTree";
import { portfolioFileSystem } from "@/lib/file-system";
import clsx from "clsx";
import TopTabs from "./TopTabs";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Automatically close the mobile drawer when a user clicks a link and navigates
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling on the main body when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="flex h-screen w-full flex-col md:flex-row overflow-hidden">
      {/* Mobile Top Navigation Bar */}
      <div className="flex h-14 w-full items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0E1117] px-4 md:hidden z-20">
        <span className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">
          Explorer
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Sidebar (Desktop static, Mobile off-canvas) */}
      <aside
        className={clsx(
          "absolute md:static top-14 md:top-0 left-0 h-[calc(100vh-3.5rem)] md:h-screen w-64 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/95 dark:bg-[#0E1117]/95 backdrop-blur-md md:backdrop-blur-none z-30 flex flex-col transition-transform duration-300 ease-in-out",
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="hidden md:flex p-4 border-b border-zinc-200 dark:border-zinc-800 text-sm font-semibold tracking-wider text-zinc-500 uppercase">
          Explorer
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          <FileTree nodes={portfolioFileSystem} />
        </div>
      </aside>

      {/* Mobile Backdrop Blur (Closes menu when clicked outside) */}
      {isMobileMenuOpen && (
        <div
          className="absolute inset-0 top-14 z-20 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-[calc(100vh-3.5rem)] md:h-full overflow-hidden relative z-10">
        {/* top tabs */}
        <TopTabs />

        <div className="flex-1 overflow-y-auto p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
