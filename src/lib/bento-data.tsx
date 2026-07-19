import SkeletonDemo from "@/components/bento/demos/SkeletonDemo";
import {
  Calendar,
  MapPin,
  Sparkles,
  Server,
  ShieldCheck,
  Database,
  Image as ImageIcon,
  Loader2,
  ArrowDownToLine,
  Route,
  Fingerprint,
  Zap,
  Bot,
  Layers,
  KeySquare,
  BrainCircuit,
} from "lucide-react";
import React from "react";

export type BentoItem = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  colSpan?: "1" | "2" | "3";
  rowSpan?: "1" | "2";
  customBackground?: string;
  content?: React.ReactNode;
};

// 1. FRONTEND & UI (Consumed by AirbnbUIFeatures.tsx)
export const airbnbUIFeaturesData: BentoItem[] = [
  {
    id: "ssg-skeletons",
    title: "SSG & Skeleton UI",
    description:
      "Static Site Generation for fast initial loads, paired with beautiful SSR skeleton loaders for dynamic content to eliminate layout shift.",
    icon: <Loader2 className="w-6 h-6 text-indigo-500 animate-spin-slow" />,
    colSpan: "2",
    rowSpan: "2",
    content: <SkeletonDemo />,
  },
  {
    id: "infinite-scroll",
    title: "Infinite Pagination",
    description:
      "Cursor-based infinite scrolling fetching exactly 12 listings per batch, keeping the DOM lightweight and system smooth.",
    icon: <ArrowDownToLine className="w-6 h-6 text-emerald-500" />,
    colSpan: "1",
  },
  {
    id: "lazy-carousel",
    title: "Hover-Triggered Image Optimization",
    description:
      "Aggressive Next.js image optimization. Property carousels only fetch high-res images when the user actively hovers over the listing card.",
    icon: <ImageIcon className="w-6 h-6 text-amber-500" />,
    colSpan: "1",
  },
  {
    id: "granular-search",
    title: "Granular Search & Categories",
    description:
      "Complex client-side state managing dynamic category filters and deep granular search parameters.",
    icon: <MapPin className="w-6 h-6 text-rose-500" />,
    colSpan: "2",
  },
];

// 2. MICROSERVICES (Consumed by AirbnbMicroservices.tsx)
export const airbnbMicroservicesData: BentoItem[] = [
  {
    id: "graceful-degradation",
    title: "Type-Safe Error Handling",
    description:
      "Custom Express middleware that silently catches failures and returns safe fallback data, ensuring the client UI never crashes.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    colSpan: "3",
    customBackground: "bg-main-100/60 border-emerald-500/20",
  },
  {
    id: "router-segregation",
    title: "Strict Route Segregation",
    description:
      "Highly maintainable folder structure separating raw controllers, middlewares, and business logic into isolated domains.",
    icon: <Route className="w-6 h-6 text-blue-500" />,
    colSpan: "2",
  },
  {
    id: "auth-middleware",
    title: "Stateless Auth",
    description:
      "JWT verification pipelines injected securely into protected reservation routes.",
    icon: <Fingerprint className="w-6 h-6 text-amber-500" />,
    colSpan: "1",
  },
];

// 3. DATABASE & REDIS (Consumed by AirbnbRedisCache.tsx)
export const airbnbDatabaseData: BentoItem[] = [
  {
    id: "o1-access",
    title: "O(1) Redis Lookups",
    description:
      "We strictly cache raw listings and categories. Bypassing MongoDB entirely for individual listing views via findById caching.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    colSpan: "2",
  },
  {
    id: "cache-skip",
    title: "Selective Caching",
    description:
      "Intelligently skipping Redis for highly volatile, granular search queries to prevent cache pollution and memory bloat.",
    icon: <Server className="w-6 h-6 text-rose-500" />,
    colSpan: "1",
  },
  {
    id: "mongo-aggregation",
    title: "Complex Aggregations",
    description:
      "Robust MongoDB collections utilizing advanced lookup pipelines for cross-referencing categories, reservations, and user data.",
    icon: <Database className="w-8 h-8 text-blue-500" />,
    colSpan: "3",
  },
];

// 4. DEV BLOGS (Consumed by DevBlogsArchitecture.tsx)
export const devBlogsArchitectureData: BentoItem[] = [
  {
    id: "ai-moderation",
    title: "Automated AI Content Moderation",
    description:
      "Integrated OpenAI SDK agents into the submission pipeline. The AI automatically analyzes drafted content, detecting and blocking abusive language or policy violations before it hits the database.",
    icon: <BrainCircuit className="w-8 h-8 text-indigo-500" />,
    colSpan: "3",
    customBackground:
      "bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 dark:border-indigo-900/50",
  },
  {
    id: "redux-session",
    title: "Redux Client State",
    description:
      "Complex global session management across the application, handling real-time user authentication states, draft autosaving, and cross-tab synchronization.",
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    colSpan: "2",
  },
  {
    id: "next-mongo",
    title: "Next.js App Router + MongoDB",
    description:
      "Server Actions executing raw Mongoose queries for zero-API-route data mutations, slashing latency.",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    colSpan: "1",
  },
  {
    id: "jwt-security",
    title: "Secure Auth Pipeline",
    description:
      "Custom authentication flow utilizing HTTP-only cookies and JWTs to prevent XSS attacks while maintaining persistent sessions.",
    icon: <KeySquare className="w-6 h-6 text-amber-500" />,
    colSpan: "3",
  },
];
