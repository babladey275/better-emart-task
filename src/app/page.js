import AcuteSection from "@/components/acute/AcuteSection";
import Hero from "@/components/hero/Hero";
import OurServices from "@/components/service/OurServices";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <OurServices />
      <AcuteSection />
    </div>
  );
}
