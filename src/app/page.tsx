import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-clip selection:bg-blue-500/30">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
