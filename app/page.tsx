import { CalendarSection } from "@/components/sections/CalendarSection";
import { Countdown } from "@/components/sections/Countdown";
import { EventInfo } from "@/components/sections/EventInfo";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { LocationSection } from "@/components/sections/LocationSection";
import { PartyTimeline } from "@/components/sections/PartyTimeline";
import { RSVPWhatsapp } from "@/components/sections/RSVPWhatsapp";
import { ShareSection } from "@/components/sections/ShareSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

const Home = () => {
  return (
    <main className="invitation-surface min-h-screen overflow-hidden text-ink">
      <Hero />
      <SectionDivider />
      <Countdown />
      <EventInfo />
      <SectionDivider />
      <PartyTimeline />
      <LocationSection />
      <SectionDivider />
      <RSVPWhatsapp />
      <CalendarSection />
      <ShareSection />
      <Footer />
    </main>
  );
};

export default Home;
