import React from 'react';
import { motion } from 'framer-motion';

export const Soundscape: React.FC = () => {
  return (
    <section className="bg-nexus-black py-20 border-t border-white/10 overflow-hidden relative transform-gpu">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase mb-4">
                    Sonic <span className="text-nexus-red">Identity</span>
                </h2>
                <p className="font-mono text-nexus-concrete text-xs tracking-widest uppercase">
                    Frequency Response: 20Hz - 20kHz
                </p>
            </motion.div>

            {/* Visualizer Animation - GPU Optimized */}
            <div className="flex items-center justify-center gap-1 md:gap-2 h-32 md:h-48 w-full max-w-4xl opacity-80">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 md:w-4 bg-white rounded-full origin-bottom will-change-transform"
                        animate={{ 
                            scaleY: [0.2, 0.8, 0.4, 0.9, 0.3], // Using scaleY instead of height for performance
                            backgroundColor: ["#FFFFFF", "#39FF14", "#FFFFFF"]
                        }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 1.5, 
                            ease: "easeInOut",
                            delay: i * 0.05,
                            repeatType: "mirror"
                        }}
                    />
                ))}
            </div>

            <div className="mt-12 max-w-xl">
                 <p className="font-inter text-nexus-concrete text-sm leading-relaxed">
                    TRIHOOD collaborates with underground noise artists to create bespoke soundscapes for each drop. 
                    The audio signature is as brutal and refined as the garments themselves.
                 </p>
                 <button className="mt-8 border border-white/20 text-white px-6 py-3 font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                     Listen to Mix 01
                 </button>
            </div>
        </div>

        {/* Background Gradient - Optimized (No more blur filter) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(57,255,20,0.08)_0%,transparent_70%)] pointer-events-none"></div>
    </section>
  );
};