import React from 'react';
import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1617137968427-b2e424153c3d?q=80&w=1000&auto=format&fit=crop", // Model
    "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1000&auto=format&fit=crop", // Concrete
    "https://images.unsplash.com/photo-1550614000-4b9519e0072b?q=80&w=1000&auto=format&fit=crop", // Fabric Texture
    "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop"  // Abstract Red
];

export const Lookbook: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 relative">
        <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
             <h2 className="font-syne font-extrabold text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.8]">
                Visual <br/><span className="text-nexus-green">Data</span>
            </h2>
        </div>

        <div className="px-6 md:px-12 columns-1 md:columns-2 gap-8 space-y-8">
            {images.map((src, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group overflow-hidden break-inside-avoid border-2 border-transparent hover:border-nexus-green transition-colors duration-300"
                >
                    <img 
                        src={src} 
                        alt={`Lookbook ${i}`}
                        className="w-full h-auto object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-nexus-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                        IMG_00{i+1}.RAW
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
};