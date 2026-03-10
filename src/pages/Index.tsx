import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import InitiativesSection from "@/components/sections/InitiativesSection";
import DonationModelSection from "@/components/sections/DonationModelSection";
import TransparencySection from "@/components/sections/TransparencySection";
import TimelineSection from "@/components/sections/TimelineSection";
import VolunteersSection from "@/components/sections/VolunteersSection";
import ImpactImageSection from "@/components/sections/ImpactImageSection";
import CountersSection from "@/components/sections/CountersSection";
import FieldJournalsSection from "@/components/sections/FieldJournalsSection";
import EndowmentsSection from "@/components/sections/EndowmentsSection";
import StoriesSection from "@/components/sections/StoriesSection";
import DonateFooter from "@/components/sections/DonateFooter";

const Index = () => (
  <SmoothScroll>
    <Navbar />
    <HeroSection />
    <PartnersSection />
    <InitiativesSection />
    <DonationModelSection />
    <TransparencySection />
    <TimelineSection />
    <VolunteersSection />
    <ImpactImageSection />
    <CountersSection />
    <FieldJournalsSection />
    <EndowmentsSection />
    <StoriesSection />
    <DonateFooter />
  </SmoothScroll>
);

export default Index;
