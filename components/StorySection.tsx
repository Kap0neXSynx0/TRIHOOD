import React from 'react';
import { motion } from 'framer-motion';

export const StorySection: React.FC = () => {
  return (
    <section className="bg-nexus-white text-nexus-black min-h-screen flex flex-col md:flex-row relative">
        {/* Left: Image Side */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden group">
             <motion.img 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1200&auto=format&fit=crop" 
                alt="Brand Workshop" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            
            {/* Floating Label */}
            <div className="absolute top-8 left-8 bg-nexus-green text-black px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_#39FF14]">
                Established 2024
            </div>
        </div>

        {/* Right: Content Side */}
        <div className="w-full md:w-1/2 flex items-center bg-nexus-charcoal text-white">
            <div className="px-8 py-16 md:p-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-nexus-green font-mono text-sm tracking-widest uppercase mb-4 block shadow-[0_0_5px_#39FF14]">
                        // The Origin Algorithm
                    </span>
                    <h2 className="font-syne font-bold text-4xl md:text-6xl uppercase leading-none mb-8">
                        Forged in <br/> The Concrete
                    </h2>
                    <div className="space-y-6 text-nexus-concrete font-inter text-lg leading-relaxed">
                        <p>
                            NEXUS wasn't born in a boardroom. It emerged from the underground brutalist architecture of the city. We saw a gap between high-performance utility and street-level aesthetics.
                        </p>
                        <p>
                            We don't design clothes. We design armor for the modern metropolis. Each piece is a result of rigorous prototyping, utilizing ballistic nylons and experimental dyeing techniques.
                        </p>
                        <p>
                            This is not fast fashion. This is industrial longevity.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-8">
                        <div>
                            <span className="block text-3xl font-oswald font-bold text-white mb-1">03</span>
                            <span className="text-xs uppercase tracking-widest text-nexus-concrete">Ateliers</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-oswald font-bold text-white mb-1">12</span>
                            <span className="text-xs uppercase tracking-widest text-nexus-concrete">Collections</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-oswald font-bold text-white mb-1">∞</span>
                            <span className="text-xs uppercase tracking-widest text-nexus-concrete">Possibilities</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};