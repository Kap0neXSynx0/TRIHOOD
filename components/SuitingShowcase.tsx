import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SuitingShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="bg-nexus-white text-nexus-black py-0 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <div className="flex flex-col justify-center px-6 md:px-24 py-24 order-2 md:order-1 relative z-10">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-mono text-sm tracking-widest uppercase mb-4 text-nexus-green bg-black px-2 py-1 inline-block"
                >
                    Technical Tailoring // Series 001
                </motion.span>
                <motion.h2 
                    className="font-syne font-bold text-5xl md:text-7xl mb-8 uppercase leading-[0.9]"
                    style={{ y: textY }}
                >
                    Redefining <br/> The Suit
                </motion.h2>
                <p className="font-inter text-lg md:text-xl max-w-md mb-12 text-nexus-charcoal">
                    Constructed from Japanese technical nylon. Water-resistant, breathable, and designed for the modern commute. 
                    Merging traditional silhouettes with industrial functionality.
                </p>
                <div className="space-y-6">
                    <div className="flex justify-between border-b border-black/10 pb-4">
                        <span className="font-oswald uppercase text-xl font-bold">Tech Blazer</span>
                        <span className="font-mono">$550.00</span>
                    </div>
                    <div className="flex justify-between border-b border-black/10 pb-4">
                        <span className="font-oswald uppercase text-xl font-bold">Wide Pleated Pant</span>
                        <span className="font-mono">$320.00</span>
                    </div>
                    <div className="flex justify-between border-b border-black/10 pb-4">
                        <span className="font-oswald uppercase text-xl font-bold">Utility Shirt</span>
                        <span className="font-mono">$240.00</span>
                    </div>
                </div>
                <button className="mt-12 bg-nexus-black text-white px-8 py-4 uppercase font-bold tracking-widest hover:bg-nexus-green hover:text-black transition-colors self-start shadow-[5px_5px_0px_#39FF14]">
                    View Tailoring
                </button>
            </div>

            <div className="relative h-[60vh] md:h-auto overflow-hidden order-1 md:order-2" ref={containerRef}>
                <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                     <img 
                        src="https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=1200&auto=format&fit=crop" 
                        alt="Technical Suit Detail" 
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                </motion.div>
                {/* Overlay Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion text-white pointer-events-none">
                     <h3 className="font-oswald font-bold text-[8vw] uppercase opacity-20 whitespace-nowrap">
                         Precision
                     </h3>
                </div>
            </div>
        </div>
    </section>
  );
};