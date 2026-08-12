import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import VideoSection from "@/components/VideoSection";
import Project from "@/components/Project";
import Learning from "@/components/Learning";
import Status from "@/components/Status";
import Contributor from "@/components/Contributor";
import Gallery from "@/components/Gallery";
import Donation from "@/components/Donation";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CinematicMotion from "@/components/CinematicMotion";

export default function Home() {
  return (
    <main>
      <CinematicMotion />
      <Header />
      <Hero />
      <Project />
      <Story />
      <VideoSection />
      <Learning />
      <Status />
      <Contributor />
      <Gallery />
      <Donation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
