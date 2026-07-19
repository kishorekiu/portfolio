"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Return a transparent placeholder of the exact same size to prevent layout shift
  if (!mounted) {
    return <div className="w-10 h-10 rounded-full" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      // 1. The Starting Position (Off-screen right, rotated, shrunk, and invisible)
      initial={{ x: 100, rotate: 180, opacity: 0, scale: 0.5 }}
      // 2. The Final State (Includes the 1.2 scale bounce keyframes!)
      animate={{ x: 0, rotate: 0, opacity: 1, scale: [0.5, 1.2, 1] }}
      // 3. The Physics Configuration
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // That ultra-smooth Apple ease curve
        scale: { duration: 0.6, times: [0, 0.6, 1] }, // Forces the 1.2 scale to hit exactly at the 60% mark of the animation
      }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // Updated classes for much higher contrast against the page backgrounds
      className="flex items-center justify-center w-10 h-10 rounded-full bg-main-200/90 border border-main-300/80 backdrop-blur-xl shadow-xl text-main-600 hover:text-main-900 transition-colors hover:bg-main-300/90 outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </motion.button>
  );
}
