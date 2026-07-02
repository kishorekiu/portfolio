"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, TerminalSquare, User, Zap } from "lucide-react";
import clsx from "clsx";

export default function FloatingNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Skills", href: "/skills", icon: <Zap className="w-5 h-5" /> },
    {
      name: "Workspace",
      href: "/projects/airbnb-clone/readme",
      icon: <TerminalSquare className="w-5 h-5" />,
    },
    {
      name: "Experience",
      href: "/experience",
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-lg">
        {navItems.map((item) => {
          // Highlight 'Workspace' if we are anywhere inside /projects or /metrics
          const isActive =
            item.name === "Workspace"
              ? pathname.startsWith("/projects") ||
                pathname.startsWith("/metrics")
              : pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
                isActive
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100",
              )}
            >
              {item.icon}

              {/* Tooltip on Hover */}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded-md shadow-sm whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
