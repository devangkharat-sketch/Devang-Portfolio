import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HonestIntro from "@/components/HonestIntro";
import Services from "@/components/Services";
import PracticeWork from "@/components/PracticeWork";
import WorkProcess from "@/components/WorkProcess";
import WhyChooseMe from "@/components/WhyChooseMe";
import Expectations from "@/components/Expectations";
import AboutSection from "@/components/AboutSection";
import FirstClientOffer from "@/components/FirstClientOffer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-brand-cyan/30">
      <Navbar />
      <HeroSection />
      <HonestIntro />
      <Services />
      <PracticeWork />
      <WorkProcess />
      <WhyChooseMe />
      <Expectations />
      <AboutSection />
      <FirstClientOffer />
      <Contact />
      <Footer />
    </main>
  );
}
