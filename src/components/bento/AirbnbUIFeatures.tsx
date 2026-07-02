"use client";

import React from "react";
import { Sparkles, Calendar, MapPin, LayoutGrid } from "lucide-react";

export default function AirbnbUIFeatures() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Frontend Engineering & Interactive UI
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Bento grid showcasing responsive patterns, dynamic date-range pickers,
          and optimistic UI updates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-55">
        {/* Cell 1: Date Range Picker */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
          <Calendar className="w-6 h-6 text-blue-500" />
          <div>
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              Dynamic Reservation Engine
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Custom date-range selector handling overlapping booking
              validations cleanly on the client side before committing
              mutations.
            </p>
          </div>
        </div>

        {/* Cell 2: Mapbox State */}
        <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
          <MapPin className="w-6 h-6 text-emerald-500" />
          <div>
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              Geo-Filtering
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Viewport-bound listings recalculation with debounced state
              updates.
            </p>
          </div>
        </div>

        {/* Cell 3: Optimistic UI */}
        <div className="md:col-span-3 p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
          <div className="max-w-xl">
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              Optimistic Wishlist Mutations
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Zero-latency UI feedback when favoriting properties, leveraging
              React state transitions backed by background synchronization.
            </p>
          </div>
          <Sparkles className="w-10 h-10 text-amber-500 opacity-80" />
        </div>
      </div>
    </div>
  );
}
