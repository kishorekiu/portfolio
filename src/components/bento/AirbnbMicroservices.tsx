import React from "react";
import { Server, Cpu, ShieldCheck } from "lucide-react";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-3">
          <div className="flex items-center space-x-2 text-indigo-500">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Auth & Identity Service
            </span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Isolated JWT authentication layer managing stateless sessions,
            role-based access control (Host vs. Guest), and OAuth providers.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-3">
          <div className="flex items-center space-x-2 text-rose-500">
            <Server className="w-5 h-5" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Reservation & Locking Engine
            </span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Handles concurrency control during checkout to ensure two users
            cannot book the exact same date range simultaneously.
          </p>
        </div>
      </div>
    </div>
  );
}
