import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/home/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radar | Stay Ahead with Curated Intelligence",
  description: "Radar filters the noise and brings you the signal. Join thousands of high-performers who stay informed without the burn-out. Curated feeds, expert sources, and weekly digests.",
  openGraph: {
    title: "Radar | Stay Ahead with Curated Intelligence",
    description: "The intelligence layer for high-performers. Curated feeds and expert insights.",
    images: ["/images/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
