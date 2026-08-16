import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import VideoSection from "@/components/VideoSection";
import Project from "@/components/Project";
import Mission from "@/components/Mission";
import Donation from "@/components/Donation";
import FAQ from "@/components/FAQ";
import AboutICC from "@/components/AboutICC";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CinematicMotion from "@/components/CinematicMotion";

export default function Home() {
  return (
    <main>
      <CinematicMotion />
      <Header />
      <Hero />
      <VideoSection />
      <Project />
      <Story />
      <Mission />
      <Donation />
      <FAQ />
      <AboutICC />
      <FinalCTA />
      <Footer />
    </main>
  );
}
