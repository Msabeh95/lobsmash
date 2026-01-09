"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { FeaturesGrid } from "@/components/features-grid";
import { Facts } from "@/components/facts";
import { Services } from "@/components/services";
import { Pricing } from "@/components/pricing";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-moss-green selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <FeaturesGrid />
      <Facts />
      <Services />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  );
}
