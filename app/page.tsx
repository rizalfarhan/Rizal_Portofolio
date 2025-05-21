import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { GridBackground } from "@/components/grid-background"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <GridBackground />
      <FloatingElements />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
