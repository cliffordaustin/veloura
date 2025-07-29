import Hero from "@/components/Hero";
import RoomsShowcase from "@/components/RoomsShowcase";
import OfferingsSection from "@/components/OfferingsSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <RoomsShowcase />
      <OfferingsSection />
      <Footer />
    </main>
  );
}
