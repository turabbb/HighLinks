import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustIndicators } from "@/components/trust-indicators"
import { ServicesSection } from "@/components/services-section"
import { DestinationsSection } from "@/components/destinations-section"
import { PartnersSection } from "@/components/partners-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { CeoMessageSection } from "@/components/ceo-message-section"
import { NewsSection } from "@/components/news-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustIndicators />
      <ServicesSection />
      <DestinationsSection />
      <PartnersSection />
      <WhyChooseSection />
      <SuccessStoriesSection />
      <CeoMessageSection />
      <NewsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
