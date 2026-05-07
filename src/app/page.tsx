import Hero from "@/components/Hero";
import FeaturedUniversities from "@/components/FeaturedUniversities";
import WhyAlbania from "@/components/WhyAlbania";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedUniversities />
      <WhyAlbania />
      <StatsSection />
      <Testimonials />
    </>
  );
}
