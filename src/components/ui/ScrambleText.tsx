"use client";

import React, { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  delay?: number;
}

// Swapped to uppercase alphanumeric for a perfectly smooth, baseline-consistent shuffle
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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

              // Skip spaces so they don't shuffle (makes it look much cleaner)
              if (text[index] === " ") return " ";

              // Otherwise, show a random uppercase character
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(startScramble, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <span className="font-mono">{displayText}</span>;
}
