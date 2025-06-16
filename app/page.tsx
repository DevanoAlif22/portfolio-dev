// app/page.tsx
import HeroSection from "@/app/main/components/hero-section";
import AboutSection from "@/app/main/components/about-section";
import ExperienceSection from "@/app/main/components/experience-section";
import ServicesSection from "@/app/main/components/services-section";
import SkillsSection from "@/app/main/components/skills-section";
import WorkSection from "@/app/main/components/work-section";
import MarqueeSection from "@/app/main/components/marquee-section";

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <MarqueeSection
        text="Passionate Developer • Creative Designer • Problem Solver • Innovation Driven"
        variant="primary"
        speed="normal"
        direction="left"
      />

      <AboutSection />

      <MarqueeSection
        text="Years of Experience • Countless Projects • Happy Clients • Quality Code"
        variant="secondary"
        speed="slow"
        direction="right"
      />

      <ExperienceSection />

      <MarqueeSection
        text="Full Stack • Frontend • Backend • Mobile • Web • Cloud • Speaker"
        variant="accent"
        speed="fast"
        direction="left"
      />

      <ServicesSection />

      <MarqueeSection
        text="React • Next.js • TypeScript • Node.js • MYSQL • PostgreSQL • Laravel"
        variant="primary"
        speed="normal"
        direction="right"
      />

      <SkillsSection />

      <MarqueeSection
        text="Portfolio • Projects • Case Studies • Open Source • Contributions"
        variant="secondary"
        speed="slow"
        direction="left"
      />

      <WorkSection />
    </main>
  );
}
