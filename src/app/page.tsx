import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ModesSection } from "@/components/home/modes-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { CtaSection } from "@/components/home/cta-section";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ModesSection />
      <HowItWorksSection />
      <CtaSection />
      
    </>
  );
}