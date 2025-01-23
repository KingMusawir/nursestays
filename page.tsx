import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesGrid } from "@/components/FeaturesGrid"
import { StatsSection } from "@/components/StatsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PropertyOwnerForm } from "@/components/PropertyOwnerForm"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navigation />
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
      <TestimonialsSection />
      <PropertyOwnerForm />
      <FAQSection />
      <CTASection />
    </div>
  )
}

