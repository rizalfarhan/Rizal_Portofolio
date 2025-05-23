import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { GridBackground } from "@/components/grid-background"
import { FloatingElements } from "@/components/floating-elements"
import Certifications from "@/components/certifications-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <GridBackground />
      <FloatingElements />
      <Header />
<main>
  <section id="hero" className="py-0 scroll-mt-[88px]"><HeroSection /></section>
  <section id="about" className="py-10 scroll-mt-[60px]"><AboutSection /></section>
  <section id="skills" className="py-10 scroll-mt-[60px]"><SkillsSection /></section>
  <section id="portfolio" className="py-10 scroll-mt-[60px]"><PortfolioSection /></section>
  <section id="certifications" className="py-10 scroll-mt-[60px]"><Certifications /></section>
  <section id="contact" className="py-20 scroll-mt-[30px]"><ContactSection /></section>
</main>
      <Footer />
    </div>
  )
}
