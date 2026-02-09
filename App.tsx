import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

// Core Layout
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';

// Sections (Ordered by Narrative Flow)
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Manifesto } from './components/Manifesto'; // Chapter 1: The Philosophy
import { Process } from './components/Process'; // Chapter 1.5: Context
import { ConceptBlueprint } from './components/ConceptBlueprint'; // Chapter 1.8: Design
import { NewArrivals } from './components/NewArrivals'; // Chapter 2: The Product
import { DigitalArtifacts } from './components/DigitalArtifacts'; // Chapter 2.5: The Tech
import { MaterialsLab } from './components/MaterialsLab'; // Chapter 3: The Science
import { TechSpecs } from './components/TechSpecs'; // Chapter 3.5: The Detail
import { CampaignGallery } from './components/CampaignGallery'; // Chapter 4: The Look
import { RunwaySection } from './components/RunwaySection';
import { CCTVGrid } from './components/CCTVGrid';
import { ArchiveAccess } from './components/ArchiveAccess'; // Chapter 5: The Community
import { WorldTour } from './components/WorldTour';
import { Newsletter } from './components/Newsletter';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  // Smooth Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Force scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-nexus-black min-h-screen font-inter selection:bg-nexus-green selection:text-black cursor-none overflow-x-hidden text-white antialiased">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative"
        >
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-[90] pointer-events-none opacity-[0.04] bg-noise"></div>

            {/* Reading Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-nexus-green origin-left z-[100] mix-blend-difference shadow-[0_0_10px_#39FF14]"
                style={{ scaleX }}
            />

            <Navbar />
            
            <main className="flex flex-col w-full">
                {/* INTRO */}
                <Hero />
                <Marquee text="SYSTEM_ONLINE /// TRIHOOD_CORP /// EST.2024 ///" speed={30} />
                
                {/* CONTEXT */}
                <Manifesto />
                <ConceptBlueprint /> 
                <Process /> 
                
                {/* PRODUCT & TECH */}
                <NewArrivals />
                <DigitalArtifacts /> 
                <MaterialsLab /> 
                
                {/* VISUALS */}
                <CampaignGallery /> 
                
                {/* IMMERSION */}
                <CCTVGrid />
                <TechSpecs />
                <RunwaySection />
                
                {/* COMMUNITY */}
                <ArchiveAccess />
                <WorldTour />
                
                {/* CLOSING */}
                <Newsletter />
            </main>

            <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default App;