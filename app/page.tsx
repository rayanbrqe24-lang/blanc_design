import Hero from "@/components/sections/Hero";
import HomeJourney from "@/components/sections/journey/HomeJourney";
import JourneyFinalCTA from "@/components/sections/journey/JourneyFinalCTA";

// The Home page is one continuous presentation - hero, then a
// full-viewport scene for every room in the house, ending on a single
// closing chapter. Deeper content (services, full portfolio case studies,
// studio story) lives on their own pages; this page's only job is to make
// someone want to click through to them.
export default function Home() {
  return (
    <main>
      <Hero />
      <HomeJourney />
      <JourneyFinalCTA />
    </main>
  );
}
