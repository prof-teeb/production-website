import FeaturesSection from "@/Components/FeaturesSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import HowItWorksSection from "@/Components/HowItWorksSection";
import Navigation from "@/Components/Navigation";
import PricingSection from "@/Components/PricingSection";
import TestimonialsSection from "@/Components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
      <TestimonialsSection/>
      <HowItWorksSection/>
      <FeaturesSection/>
      <PricingSection/>
      <Footer/>
    </div>
  );
}
