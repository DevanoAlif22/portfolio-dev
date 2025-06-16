import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/services-section";
import SkillsSection from "./components/skills-section";
import WorkSection from "./components/work-section";
import ExperienceSection from "./components/experience-section";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <WorkSection />
      <ExperienceSection />
    </div>
  );
}
