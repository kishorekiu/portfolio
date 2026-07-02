import { BrainCircuit, Building2 } from "lucide-react";
import React from "react";

export type ReadmeConfig = {
  id: string;
  title: string;
  titleIcon?: React.ReactNode;
  description: string;
  links: {
    liveUrl?: string;
    frontendRepo?: string;
    backendRepo?: string;
    sourceRepo?: string; // For monorepos or single-repo projects
  };
  featuresListHeading: string;
  features: React.ReactNode[];
  quickStart?: {
    type: "bash" | "env";
    label: string;
    code: string;
  };
};

export const airbnbReadmeData: ReadmeConfig = {
  id: "airbnb-clone",
  title: "Airbnb Clone Architecture",
  titleIcon: <Building2 className="w-8 h-8 text-rose-500" />,
  description:
    "A high-performance, full-stack recreation of the Airbnb core booking flow. Built to demonstrate microservice architecture, strict TypeScript schemas, and pixel-perfect UI replication with complex client-side state.",
  links: {
    liveUrl: "https://airbnb-clone-self-theta.vercel.app/",
    frontendRepo: "https://github.com/kishorekiu/airbnb-clone",
    backendRepo: "https://github.com/kishorekiu/airbnb-listing-service",
  },
  featuresListHeading: "Tech Stack Highlights",
  features: [
    <span key="1">
      <strong>Frontend:</strong> Next.js App Router, React, Tailwind CSS, Framer
      Motion
    </span>,
    <span key="2">
      <strong>Backend:</strong> Node.js, Express, strict Route Segregation
    </span>,
    <span key="3">
      <strong>Database & Cache:</strong> MongoDB (Complex Aggregations), Redis
      (O(1) Lookups)
    </span>,
  ],
  quickStart: {
    type: "bash",
    label: "Quick Start (Backend)",
    code: "git clone https://github.com/kishorekiu/airbnb-listing-service.git\ncd airbnb-listing-service\nnpm install\nnpm run dev",
  },
};

export const devBlogsReadmeData: ReadmeConfig = {
  id: "dev-blogs",
  title: "Dev Blogs",
  titleIcon: <BrainCircuit className="w-8 h-8 text-indigo-500" />,
  description:
    "A full-stack AI-powered blogging platform. Designed to handle robust session management and leverage OpenAI SDK agents for automated content moderation before database insertion.",
  links: {
    liveUrl: "https://blogsite-flax.vercel.app/",
    sourceRepo: "https://github.com/kishorekiu/blogsite",
  },
  featuresListHeading: "Core Features",
  features: [
    <span key="1">
      <strong>AI Moderation Pipeline:</strong> Blocks abusive language and
      policy violations in real-time.
    </span>,
    <span key="2">
      <strong>Redux Global State:</strong> Manages complex user authentication
      and cross-tab synchronization.
    </span>,
    <span key="3">
      <strong>Zero-API Mutations:</strong> Utilizing Next.js Server Actions
      directly with Mongoose for hyper-fast data flow.
    </span>,
  ],
  quickStart: {
    type: "env",
    label: "Local Environment Variables",
    code: "# Required .env.local\nOPENAI_API_KEY=sk-...\nMONGODB_URI=mongodb+srv://...\nJWT_SECRET=your_secure_secret",
  },
};
