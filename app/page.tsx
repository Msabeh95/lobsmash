import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { DemoSection } from "@/components/demo-section";
import { HeroHighlights } from "@/components/hero-highlights";
import { AudienceSection } from "@/components/audience-section";
import { FormatsSection } from "@/components/formats-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PricingSection } from "@/components/pricing-section";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--surface-page)] font-sans text-[#002d62] selection:bg-[#99e600] selection:text-[#002d62]">
      <ScrollToTopOnLoad />
      <Navbar />
      <Hero />
      <DemoSection />
      <HeroHighlights />
      <AudienceSection />
      <FormatsSection />
      <HowItWorksSection />
      <PricingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
