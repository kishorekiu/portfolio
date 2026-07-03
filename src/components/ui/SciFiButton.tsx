"use client";

import React from "react";
import clsx from "clsx";

interface SciFiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SciFiButton({
  children,
  className,
  ...props
}: SciFiButtonProps) {
  return (
    <button
      className={clsx(
        "group relative px-8 py-3 font-mono font-bold tracking-widest uppercase transition-all duration-300",
        // We set overflow-visible here because we want the corner carrots to pop OUTSIDE the button
        "overflow-visible outline-none",
        className,
      )}
      {...props}
    >
      {/* 1. The Main Button Body (Handles clipping the sweeping background) */}
      <div className="absolute inset-0 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900/50 overflow-hidden">
        {/* The Cyberpunk Diagonal Hatch Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,currentColor_4px,currentColor_6px)] pointer-events-none" />

        {/* The Sweeping Background (Top-Left to Bottom-Right Sweep) */}
        <div className="absolute top-0 left-[-20%] w-[150%] h-full bg-zinc-900 dark:bg-white -skew-x-45 translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      </div>

      {/* 2. The Corner Carrots (Absolute positioned outside the clipping mask) */}
      {/* Top Left */}
      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-zinc-900 dark:border-white transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-x-1 group-hover:-translate-y-1 pointer-events-none" />

      {/* Top Right */}
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-zinc-900 dark:border-white transition-all duration-300 ease-out group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1 pointer-events-none" />

      {/* Bottom Left */}
      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-zinc-900 dark:border-white transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-x-1 group-hover:translate-y-1 pointer-events-none" />

      {/* Bottom Right */}
      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-zinc-900 dark:border-white transition-all duration-300 ease-out group-hover:scale-125 group-hover:translate-x-1 group-hover:translate-y-1 pointer-events-none" />

      {/* 3. The Text Content */}
      <span className="relative z-10 text-sm text-zinc-900 dark:text-zinc-300 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors duration-300">
        {children}
      </span>
    </button>
  );
}
