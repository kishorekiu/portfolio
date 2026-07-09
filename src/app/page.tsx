import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-clip bg-white dark:bg-[#0E1117] selection:bg-blue-500/30 transition-colors duration-500">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
