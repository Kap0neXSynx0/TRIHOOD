import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Activity, Droplets, Zap } from 'lucide-react';

const samples = [
    {
        id: 'cordura',
        name: 'Cordura® Ballistic',
        spec: '1050D Nylon 6,6',
        features: ['Abrasion Resistant', 'Water Repellent', 'Military Grade'],
        description: 'Originally developed for military body armor. Our 1050D Ballistic Nylon offers unparalleled tear resistance while maintaining a refined matte finish suitable for urban deployment.',
        stats: { weight: '380 GSM', tear: '2500 N', water: '2000 MM' }
    },
    {
        id: 'goretex',
        name: 'Gore-Tex® Pro',
        spec: '3-Layer Membrane',
        features: ['Waterproof', 'Windproof', 'Breathable'],
        description: 'The gold standard in weather protection. The 3-layer construction bonds the membrane between a rugged outer shell and a robust inner lining, creating a fortress against the elements.',
        stats: { weight: '140 GSM', tear: '800 N', water: '28000 MM' }
    },
    {
        id: 'kevlar',
        name: 'Kevlar® Weave',
        spec: 'Para-aramid Synthetic',
        features: ['Cut Resistant', 'Heat Resistant', 'High Tensile'],
        description: 'Strategically placed reinforcement panels utilize Kevlar fibers. Five times stronger than steel on an equal weight basis, providing critical protection in high-wear zones.',
        stats: { weight: '220 GSM', tear: '5000 N', water: 'N/A' }
    }
];

export const MaterialsLab: React.FC = () => {
    const [activeSample, setActiveSample] = useState(samples[0]);

    return (
        <section className="bg-nexus-white py-24 md:py-32 border-b border-black/10 relative overflow-hidden text-nexus-black">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-16">
                    
                    {/* Left: Interactive Menu */}
                    <div className="w-full md:w-1/3">
                        <div className="flex items-center gap-2 mb-8 text-nexus-green">
                            <Microscope size={24} />
                            <span className="font-mono text-sm font-bold uppercase tracking-widest">Material Lab</span>
                        </div>
                        
                        <h2 className="font-syne font-extrabold text-5xl uppercase leading-[0.9] mb-12">
                            Fabric <br/> Analysis
                        </h2>

                        <div className="space-y-4">
                            {samples.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setActiveSample(s)}
                                    className={`w-full text-left p-6 border transition-all duration-300 group relative overflow-hidden ${
                                        activeSample.id === s.id 
                                            ? 'bg-nexus-black text-white border-nexus-green' 
                                            : 'bg-transparent border-black/10 hover:border-nexus-green'
                                    }`}
                                >
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div>
                                            <h3 className="font-oswald text-xl uppercase font-bold">{s.name}</h3>
                                            <p className={`font-mono text-xs mt-1 ${activeSample.id === s.id ? 'text-nexus-green' : 'text-nexus-charcoal'}`}>
                                                {s.spec}
                                            </p>
                                        </div>
                                        {activeSample.id === s.id && <Activity size={18} className="text-nexus-green animate-pulse" />}
                                    </div>
                                    {activeSample.id !== s.id && (
                                        <div className="absolute inset-0 bg-black/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Data Display */}
                    <div className="w-full md:w-2/3 bg-white border border-black/10 p-8 md:p-12 shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSample.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="h-full flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-8 border-b-2 border-nexus-green pb-6">
                                    <div>
                                        <h3 className="font-syne font-bold text-4xl uppercase mb-2">{activeSample.name}</h3>
                                        <div className="flex gap-2">
                                            {activeSample.features.map(f => (
                                                <span key={f} className="font-mono text-[10px] uppercase font-bold bg-nexus-green/10 text-nexus-green px-2 py-1 border border-nexus-green/20">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right font-mono text-xs font-bold text-nexus-charcoal hidden md:block">
                                        <p>REF: {activeSample.id.toUpperCase()}_001</p>
                                        <p>LOT: 24-B</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                    <p className="font-inter text-lg leading-relaxed text-nexus-charcoal">
                                        {activeSample.description}
                                    </p>
                                    
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-nexus-white p-4 border border-black/5">
                                            <p className="font-mono text-[10px] text-nexus-concrete uppercase mb-1">Weight</p>
                                            <p className="font-oswald text-xl font-bold">{activeSample.stats.weight}</p>
                                        </div>
                                        <div className="bg-nexus-white p-4 border border-black/5">
                                            <p className="font-mono text-[10px] text-nexus-concrete uppercase mb-1">Tear Strength</p>
                                            <p className="font-oswald text-xl font-bold">{activeSample.stats.tear}</p>
                                        </div>
                                        <div className="bg-nexus-white p-4 border border-black/5 col-span-2">
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="font-mono text-[10px] text-nexus-concrete uppercase">Water Column</p>
                                                <Droplets size={14} className="text-nexus-charcoal" />
                                            </div>
                                            <p className="font-oswald text-xl font-bold">{activeSample.stats.water}</p>
                                            <div className="w-full h-1 bg-black/10 mt-2">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-nexus-green"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-black/10 flex justify-between items-center">
                                    <span className="font-mono text-xs font-bold uppercase text-nexus-green">Authorized Material</span>
                                    <Zap size={20} className="text-nexus-green" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};