import React from "react";
import { Server, Cpu, ShieldCheck } from "lucide-react";
import DynamicBentoGrid from "./DynamicBentoGrid";
import { airbnbMicroservicesData } from "@/lib/bento-data";

export default function AirbnbMicroservices() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Decoupled Backend Architecture
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Breakdown of service separation between authentication, listing
          queries, and payment processing.
        </p>
      </div>

      <DynamicBentoGrid items={airbnbMicroservicesData} />
    </div>
  );
}
