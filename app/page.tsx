import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
