import Image from "next/image";
import HeroSection from "./components/herosection";
import QuickAccessCards from "./components/quickcards";
import WhyThisMatters from "./components/purpose";
import HowItWorks from "./components/timeline";
import LegalAidSection from "./components/legalaid";
import LegalAidHero from "./components/legalaid";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <QuickAccessCards/>
    <WhyThisMatters/>
    <HowItWorks/>
    <LegalAidHero/>
   </main>
  );
}
