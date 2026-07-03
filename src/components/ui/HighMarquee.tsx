import React from "react";
import { motion } from "framer-motion";

const HighwayMarquee = ({
  reverse = false,
  className,
}: {
  reverse?: boolean;
  className?: string;
}) => {
  const techStack = [
    "REACT",
    "NEXT.JS",
    "NODE.JS",
    "TYPESCRIPT",
    "REDIS",
    "MONGODB",
    "DOCKER",
    "AWS",
    "TAILWIND",
    "GRAPHQL",
  ];

  return (
    <div
      className={`flex overflow-hidden whitespace-nowrap opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none ${className}`}
    >
      <motion.div
        className="flex gap-8 items-center"
        // Move from 0% to -50% (or vice versa). Because we duplicated the array 4 times,
        // shifting it by exactly 50% creates a seamless, infinite optical illusion.
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...techStack, ...techStack, ...techStack, ...techStack].map(
          (tech, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-widest"
            >
              {tech}
            </span>
          ),
        )}
      </motion.div>
    </div>
  );
};

export default HighwayMarquee;
