export type FileNode = {
  name: string;
  type: "folder" | "file";
  path?: string;
  children?: FileNode[];
};

export const portfolioFileSystem: FileNode[] = [
  {
    name: "projects",
    type: "folder",
    children: [
      {
        name: "airbnb-clone",
        type: "folder",
        children: [
          {
            name: "ui-features.tsx",
            type: "file",
            path: "/projects/airbnb-clone/ui-features",
          },
          {
            name: "microservices.ts",
            type: "file",
            path: "/projects/airbnb-clone/microservices",
          },
          {
            name: "redis-cache.config",
            type: "file",
            path: "/projects/airbnb-clone/redis-cache",
          },
        ],
      },
      {
        name: "dev-blogs",
        type: "folder",
        children: [
          {
            name: "ai-moderation.ts",
            type: "file",
            path: "/projects/dev-blogs/ai-moderation",
          },
          {
            name: "architecture.md",
            type: "file",
            path: "/projects/dev-blogs/architecture",
          },
        ],
      },
    ],
  },
  {
    name: "metrics",
    type: "folder",
    children: [
      { name: "100k-virtualization.json", type: "file", path: "/metrics" },
    ],
  },
];
