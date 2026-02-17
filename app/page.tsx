import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { CareTeam } from "@/components/care-team"
import { IntegrationsSection } from "@/components/integrations-section"
import { FaqSection } from "@/components/faq-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <FeaturesSection />
        <CareTeam />
        <IntegrationsSection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}
