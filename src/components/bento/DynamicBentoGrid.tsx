import React from "react";
import { BentoItem } from "@/lib/bento-data";
import clsx from "clsx";

interface DynamicBentoGridProps {
  items: BentoItem[];
}

export default function DynamicBentoGrid({ items }: DynamicBentoGridProps) {
  // Tailwind mapping dictionary for dynamic spans
  const colSpanClasses: Record<string, string> = {
    "1": "md:col-span-1",
    "2": "md:col-span-2",
    "3": "md:col-span-3",
  };

  const rowSpanClasses: Record<string, string> = {
    "1": "md:row-span-1",
    "2": "md:row-span-2",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
      {items.map((item) => (
        <div
          key={item.id}
          className={clsx(
            "p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md",
            colSpanClasses[item.colSpan || "1"],
            rowSpanClasses[item.rowSpan || "1"],
            item.customBackground || "bg-zinc-100 dark:bg-zinc-900/60",
          )}
        >
          {/* Top Section: Icon & Content */}
          <div className="mb-4">
            {item.icon && <div className="mb-4">{item.icon}</div>}
            {item.content && <div className="mt-2">{item.content}</div>}
          </div>

          {/* Bottom Section: Text */}
          <div className="mt-auto">
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
