"use client";

import React, { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  delay?: number;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText({ text, delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              // If the index is less than our current iteration, show the real letter
              if (index < iteration) return text[index];

              // Otherwise, show a random hacker character
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );

        // Once we've revealed all letters, stop the interval
        if (iteration >= text.length) {
          clearInterval(interval);
        }

        // Adjust this fraction to control the speed of the reveal
        // Smaller number = slower reveal. (e.g., 1/3 means it takes 3 ticks to reveal 1 letter)
        iteration += 1 / 3;
      }, 30); // 30ms per tick
    };

    // Wait for the requested delay before starting
    const timeout = setTimeout(startScramble, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <span className="font-mono">{displayText}</span>;
}
