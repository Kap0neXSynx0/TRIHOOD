import React from 'react';
import { motion } from 'framer-motion';

export const RunwaySection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-nexus-black">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2600&auto=format&fit=crop" 
                alt="Runway Show" 
                className="w-full h-full object-cover opacity-60 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-transparent to-nexus-black/50"></div>
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(57,255,20,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
        </div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-nexus-green font-mono text-sm tracking-[0.5em] uppercase mb-6 bg-black/80 inline-block px-4 py-2 backdrop-blur-md border border-nexus-green/30 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                    Live Transmission
                </p>
                <h2 className="font-syne font-extrabold text-6xl md:text-9xl text-white uppercase tracking-tighter mix-blend-difference mb-8">
                    Runway <br/> SS25
                </h2>
                <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden hover:text-white transition-colors duration-300">
                    <span className="relative z-10">Watch Full Show</span>
                    <div className="absolute inset-0 bg-nexus-green transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                </button>
            </motion.div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 z-20">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-nexus-green rounded-full animate-pulse shadow-[0_0_10px_#39FF14]"></div>
                <span className="text-nexus-green font-mono text-xs tracking-widest">LIVE SIGNAL</span>
            </div>
        </div>
    </section>
  );
};