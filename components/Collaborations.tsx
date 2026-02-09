import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Triangle, Circle, Square, Aperture, Box } from 'lucide-react';

const partners = [
    { name: "AETHER DYNAMICS", icon: <Hexagon size={40} /> },
    { name: "ONYX LABS", icon: <Triangle size={40} /> },
    { name: "VECTOR ZERO", icon: <Circle size={40} /> },
    { name: "CARBON SYSTEMS", icon: <Square size={40} /> },
    { name: "HYPER REAL", icon: <Aperture size={40} /> },
    { name: "MODULAR CORP", icon: <Box size={40} /> },
];

export const Collaborations: React.FC = () => {
  return (
    <section className="bg-white py-12 border-y-4 border-black overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
            <h3 className="font-mono text-xs font-bold text-black uppercase tracking-widest text-center">
                Technical Partners & Supply Chain
            </h3>
        </div>
        
        <div className="flex overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div 
                className="flex gap-16 md:gap-32 px-16"
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                    <div key={i} className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer flex-shrink-0">
                        <div className="text-black">
                            {partner.icon}
                        </div>
                        <span className="font-oswald font-bold text-2xl uppercase tracking-tighter text-black whitespace-nowrap">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};