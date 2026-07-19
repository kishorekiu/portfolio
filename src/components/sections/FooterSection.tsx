"use client";

import React from "react";
// Import your existing Highway and Cyberpunk button components here
// import HighwayMarquee from "@/components/ui/HighwayMarquee";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-200 flex items-center justify-center overflow-hidden"
    >
      {/* 1. BACKGROUND LAYER (-z-10) */}
      <div className="absolute inset-0 -z-10">
        {/* We will drop the Highway Marquee and glowing radial gradients here */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* 2. CONTENT LAYER (z-10) */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl px-6 mx-auto text-center">
        {/* We will drop the Scramble text and Cyberpunk Button here */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Frontend & UI Engine
        </h1>
        <p className="mt-6 text-main-400 max-w-2xl text-lg">
          Placeholder for your scramble text and intro.
        </p>
      </div>
    </section>
  );
}
