import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Awards from "@/components/sections/Awards";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import InteriorDesign from "@/components/sections/InteriorDesign";
import ConstructionServices from "@/components/sections/ConstructionServices";
import ProjectTimeline from "@/components/sections/ProjectTimeline";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Stats from "@/components/sections/Stats";
import Philosophy from "@/components/sections/Philosophy";
import Articles from "@/components/sections/Articles";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Clients />
      <FeaturedProjects />
      <Process />
      <InteriorDesign />
      <ConstructionServices />
      <ProjectTimeline />
      <VideoShowcase />
      <Gallery />
      <Testimonials />
      <Awards />
      <Philosophy />
      <Articles />
      <InstagramFeed />
      <ContactCTA />
    </main>
  );
}
