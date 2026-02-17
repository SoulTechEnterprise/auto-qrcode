import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { DemoCardSection } from "@/components/sections/card-section"
import { HowItWorksSection } from "@/components/sections/works-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <DemoCardSection />
        <HowItWorksSection />
      </main>

      <Footer />
    </div>
  )
}