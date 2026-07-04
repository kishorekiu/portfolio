import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-[#0E1117] selection:bg-blue-500/30 transition-colors duration-500">
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
