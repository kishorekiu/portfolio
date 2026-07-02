import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FileTree from "@/components/navigation/FileTree";
import { portfolioFileSystem } from "@/lib/file-system";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | IDE Dashboard",
  description: "Modern Frontend Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-[#0E1117] text-zinc-900 dark:text-zinc-100 h-screen overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-full">
            {/* Sidebar / File Explorer */}
            <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0E1117] flex flex-col">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                Explorer
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                <FileTree nodes={portfolioFileSystem} />
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Future Top Tabs Component will go here */}
              <div className="h-10 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0E1117] flex items-center px-4 text-sm text-zinc-500">
                Top Tabs Placeholder
              </div>

              <div className="flex-1 overflow-y-auto p-8">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
