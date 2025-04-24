import Hero from "@/components/hero/Hero";
import OurServices from "@/components/service/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <OurServices />
    </div>
  );
}
