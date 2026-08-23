import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveTicker from '@/components/LiveTicker';
import MasterCarvingsBanner from '@/components/MasterCarvingsBanner';
import About from '@/components/About';
import CraftGallery from '@/components/CraftGallery';
import SpatialStudio from '@/components/SpatialStudio';
import StoneCollection from '@/components/StoneCollection';
import FinishSelector from '@/components/FinishSelector';
import Process from '@/components/Process';
import ProjectCalculator from '@/components/ProjectCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AmbientParticles from '@/components/AmbientParticles';

export default function HomePage() {
  return (
    <>
      <AmbientParticles />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <LiveTicker />
        <MasterCarvingsBanner />
        <About />
        <CraftGallery />
        <SpatialStudio />
        <StoneCollection />
        <FinishSelector />
        <Process />
        <ProjectCalculator />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

