"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown, Folder, FileCode2 } from "lucide-react";
import { FileNode } from "@/lib/file-system";
import clsx from "clsx";

interface FileTreeProps {
  nodes: FileNode[];
  level?: number;
}

export default function FileTree({ nodes, level = 0 }: FileTreeProps) {
  return (
    <ul className="flex flex-col w-full">
      {nodes.map((node, index) => (
        <TreeNode key={`${node.name}-${index}`} node={node} level={level} />
      ))}
    </ul>
  );
}

function TreeNode({ node, level }: { node: FileNode; level: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const isActive = pathname === node.path;
  const paddingLeft = `${level * 12 + 12}px`;

  if (node.type === "folder") {
    return (
      <li>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full py-1 text-sm text-main-600 hover:text-main-900 transition-colors"
          style={{ paddingLeft }}
        >
          {isOpen ? (
            <ChevronDown className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRight className="w-4 h-4 mr-1" />
          )}
          <Folder className="w-4 h-4 mr-2 text-blue-500" />
          {node.name}
        </button>
        {isOpen && node.children && (
          <FileTree nodes={node.children} level={level + 1} />
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={node.path || "#"}
        className={clsx(
          "flex items-center w-full py-1 text-sm transition-colors",
          isActive
            ? "bg-blue-500/10 text-blue-600 border-r-2 border-blue-500"
            : "text-main-600 hover:bg-main-100 hover:text-main-900",
        )}
        style={{ paddingLeft: `${level * 12 + 28}px` }}
      >
        <FileCode2 className="w-4 h-4 mr-2 opacity-70" />
        {node.name}
      </Link>
    </li>
  );
}
