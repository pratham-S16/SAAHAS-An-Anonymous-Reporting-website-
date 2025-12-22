import Image from "next/image";
import HeroSection from "./components/herosection";
import QuickAccessCards from "./components/quickcards";
import WhyThisMatters from "./components/purpose";
import HowItWorks from "./components/timeline";
import LegalAidSection from "./components/legalaid";
import LegalAidHero from "./components/legalaid";
import AwarenessEducation from "./components/AwarenessEdu";
import TrustTransparency from "./components/TrustTransparency";
import Footer from "./components/Footer";
import { Header } from "./report/components/Header";

export default function Home() {
  return (
    <div>

    <Header/>
   <main>
    <HeroSection/>
    <QuickAccessCards/>
    <WhyThisMatters/>
    <HowItWorks/>
    <LegalAidHero/>
    <AwarenessEducation/>
    <TrustTransparency/>
    <Footer/>
   </main>
   </div>
  );
}
