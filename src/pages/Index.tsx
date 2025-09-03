import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;