import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Droplets, Shield, Zap } from 'lucide-react';

const materials = [
    {
        id: 'graphene',
        name: 'Graphene Mesh',
        description: 'Conductive thermal regulation. The lightest, strongest material known to man woven into everyday armor.',
        stat: '200x STRONGER THAN STEEL',
        icon: <Zap size={24} />,
        image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'dyneema',
        name: 'Dyneema® Bonded',
        description: 'Bio-based fibers floating in a resin matrix. Impervious to water, wind, and tearing.',
        stat: '15x STRONGER THAN STEEL',
        icon: <Shield size={24} />,
        image: 'https://images.unsplash.com/photo-1617137968427-b2e424153c3d?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'ceramic',
        name: 'Ceramic Coating',
        description: 'Micro-ceramic particles applied to nylon for abrasion resistance without compromising breathability.',
        stat: 'HEAT RESISTANT TO 1200°C',
        icon: <Cpu size={24} />,
        image: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1200&auto=format&fit=crop'
    }
];

export const FabricTechnology: React.FC = () => {
    const [activeId, setActiveId] = useState(materials[0].id);

    return (
        <section className="bg-nexus-black py-32 relative overflow-hidden border-t border-white/10">
            {/* Split Layout */}
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row h-auto lg:h-[800px]">
                
                {/* Left: Navigation & Context */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center pr-0 lg:pr-16 mb-12 lg:mb-0 z-10">
                    <span className="text-nexus-green font-mono text-xs tracking-widest uppercase mb-6 shadow-[0_0_5px_#39FF14]">
                        Research & Development
                    </span>
                    <h2 className="font-syne font-extrabold text-5xl text-white uppercase leading-[0.9] mb-12">
                        Material <br/> <span className="text-transparent text-stroke">Science</span>
                    </h2>

                    <div className="space-y-6">
                        {materials.map((mat) => (
                            <div 
                                key={mat.id}
                                onClick={() => setActiveId(mat.id)}
                                className={`cursor-pointer border-l-2 pl-6 py-2 transition-all duration-300 group ${
                                    activeId === mat.id ? 'border-nexus-green' : 'border-white/10 hover:border-white/50'
                                }`}
                            >
                                <h3 className={`font-oswald text-xl uppercase font-bold mb-1 transition-colors ${
                                    activeId === mat.id ? 'text-white' : 'text-white/40 group-hover:text-white'
                                }`}>
                                    {mat.name}
                                </h3>
                                <AnimatePresence>
                                    {activeId === mat.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="font-inter text-sm text-nexus-concrete mt-2 mb-3">
                                                {mat.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-nexus-green font-mono text-xs font-bold drop-shadow-[0_0_5px_#39FF14]">
                                                {mat.icon}
                                                <span>{mat.stat}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Immersive Visual */}
                <div className="w-full lg:w-2/3 relative bg-neutral-900 overflow-hidden border border-white/5">
                    <AnimatePresence mode="wait">
                        {materials.map((mat) => mat.id === activeId && (
                            <motion.div
                                key={mat.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <img 
                                    src={mat.image} 
                                    alt={mat.name} 
                                    className="w-full h-full object-cover grayscale contrast-125"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-nexus-black via-transparent to-transparent opacity-80 lg:opacity-50"></div>
                                
                                {/* Overlay UI */}
                                <div className="absolute top-8 right-8 border border-white/20 p-4 bg-black/50 backdrop-blur-md">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 bg-nexus-green animate-pulse rounded-full"></div>
                                        <span className="font-mono text-[10px] text-white uppercase">Microscope Feed</span>
                                    </div>
                                    <div className="font-mono text-xs text-nexus-concrete">
                                        MAGNIFICATION: 500x<br/>
                                        SAMPLE: {mat.id.toUpperCase()}_004
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};