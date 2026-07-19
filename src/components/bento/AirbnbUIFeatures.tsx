import React from "react";
import DynamicBentoGrid from "./DynamicBentoGrid";
import { airbnbUIFeaturesData } from "@/lib/bento-data";

export default function AirbnbUIFeatures() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-main-900">
          Frontend Engineering & Interactive UI
        </h1>
        <p className="text-sm text-main-500 mt-1">
          Config-driven Bento grid showcasing responsive patterns.
        </p>
      </div>

      <DynamicBentoGrid items={airbnbUIFeaturesData} />
    </div>
  );
}
