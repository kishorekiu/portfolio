import React from "react";

interface HighwayMarqueeProps {
  reverse?: boolean;
  className?: string;
}

export default function HighwayMarquee({
  reverse = false,
  className = "",
}: HighwayMarqueeProps) {
  const techStack = [
    "REACT",
    "NEXT.JS",
    "NODE.JS",
    "TYPESCRIPT",
    "REDIS",
    "MONGODB",
    "DOCKER",
    // "AWS",
    "CLAUDE AI",
    "STORYBLOK",
    "TAILWIND",
  ];

  return (
    <div
      className={`flex overflow-hidden whitespace-nowrap opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none ${className}`}
    >
      <div
        // We apply our custom Tailwind animation class based on the 'reverse' prop
        className={`flex gap-8 items-center will-change-transform ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {/* We duplicate the array 4 times to ensure it's wide enough to fill any screen before the 50% snap */}
        {[...techStack, ...techStack, ...techStack, ...techStack].map(
          (tech, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-black text-main-900 uppercase tracking-widest"
            >
              {tech}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
