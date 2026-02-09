import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Wind } from 'lucide-react';

const materials = [
    {
        icon: <Shield size={32} />,
        title: "Ballistic Nylon",
        desc: "Originally developed for military body armor. Tear-resistant, waterproof, and built to withstand the urban environment."
    },
    {
        icon: <Wind size={32} />,
        title: "Gore-Tex Infinite",
        desc: "Breathable waterproofing technology. Keeps you dry without overheating during high-intensity movement."
    },
    {
        icon: <Layers size={32} />,
        title: "Japanese Denim",
        desc: "14oz raw selvedge denim from Okayama. Heavyweight structure that molds to your body over time."
    }
];

export const MaterialsSection: React.FC = () => {
    return (
        <section className="py-24 bg-nexus-black text-white relative border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Text Content */}
                    <div className="relative z-10">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-nexus-green font-mono text-sm tracking-widest uppercase mb-4 block shadow-[0_0_10px_#39FF14]"
                        >
                            Material Science
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-syne font-bold text-4xl md:text-6xl uppercase leading-tight mb-8"
                        >
                            Engineered for <br/> <span className="text-stroke">The Elements</span>
                        </motion.h2>
                        <p className="text-nexus-concrete mb-12 text-lg max-w-md">
                            We don't just pick fabrics; we engineer solutions. Every garment is constructed using industrial-grade materials tested in extreme conditions.
                        </p>

                        <div className="space-y-12">
                            {materials.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex gap-6 group"
                                >
                                    <div className="text-nexus-concrete group-hover:text-nexus-green transition-colors duration-300 drop-shadow-[0_0_5px_#39FF14]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-oswald text-xl uppercase font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                                        <p className="text-sm text-nexus-concrete leading-relaxed max-w-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative h-[600px] w-full group overflow-hidden border border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1550614000-4b9519e0072b?q=80&w=1200&auto=format&fit=crop" 
                            alt="Fabric Macro Detail" 
                            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-transparent to-transparent opacity-80"></div>
                        
                        {/* Technical Overlay */}
                        <div className="absolute bottom-8 left-8 border-l border-nexus-green pl-4">
                            <p className="font-mono text-xs text-nexus-green mb-1">FIG. 001</p>
                            <p className="font-oswald uppercase text-2xl font-bold">Structural Weave</p>
                        </div>

                         <div className="absolute top-8 right-8">
                            <div className="animate-spin-slow w-24 h-24 border border-dashed border-white/30 rounded-full flex items-center justify-center">
                                <span className="font-mono text-[10px] text-white/50">TECH-SPEC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};