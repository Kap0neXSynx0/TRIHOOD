import React from 'react';
import { motion } from 'framer-motion';

export const CollectionGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-nexus-charcoal relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto lg:h-[800px]">
        {/* Large Item: Outerwear/Suit Detail */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden border border-white/5"
        >
             <img 
                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200&auto=format&fit=crop" 
                alt="Formal Streetwear" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
                <h3 className="font-oswald text-4xl md:text-6xl text-white uppercase font-bold">Tailoring</h3>
                <button className="mt-4 text-sm font-bold text-nexus-green uppercase tracking-widest border-b border-nexus-green pb-1 shadow-[0_0_10px_rgba(57,255,20,0.5)]">View Suits</button>
            </div>
        </motion.div>

        {/* Small Item 1: Accessories/Bag */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden border border-white/5"
        >
             <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" 
                alt="Accessories" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
            />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
             <div className="absolute bottom-6 left-6">
                <h3 className="font-oswald text-3xl text-white uppercase font-bold">Essential Gear</h3>
            </div>
        </motion.div>

        {/* Small Item 2: Editorial/Text */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group overflow-hidden border border-white/5 bg-nexus-black flex items-center justify-center p-8"
        >
             <div className="text-center">
                 <p className="text-nexus-green font-bold tracking-widest uppercase mb-2 shadow-[0_0_10px_#39FF14]">Editorial</p>
                 <h3 className="font-syne text-3xl md:text-4xl text-white font-bold mb-4">SUITED & BOOTED</h3>
                 <p className="text-nexus-concrete text-sm mb-6">
                     The line between formal wear and street culture is blurring. 
                     Discover our new range of technical suits and pants.
                 </p>
                 <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors uppercase font-bold text-xs tracking-widest">
                     Read Story
                 </button>
             </div>
        </motion.div>
      </div>
    </section>
  );
};