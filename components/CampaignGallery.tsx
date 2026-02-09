import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';

const campaigns = [
    { 
        id: "001", 
        title: "Neo-Tokyo Drift", 
        subtitle: "Night Operations",
        img: "https://images.unsplash.com/photo-1543729514-d67b0754226d?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: "002", 
        title: "Concrete Jungle", 
        subtitle: "Urban Camouflage",
        img: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: "003", 
        title: "Digital Static", 
        subtitle: "Signal Lost",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: "004", 
        title: "Industrial Decay", 
        subtitle: "Heavy Industry",
        img: "https://images.unsplash.com/photo-1509631179647-0177f95353cf?q=80&w=1200&auto=format&fit=crop" 
    }
];

export const CampaignGallery: React.FC = () => {
    return (
        <section className="bg-nexus-black py-32 border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
                <div>
                     <span className="text-nexus-green font-mono text-xs tracking-widest uppercase mb-4 block">
                        // Visual Database
                    </span>
                    <h2 className="font-syne font-extrabold text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none">
                        Campaign <br/> <span className="text-transparent text-stroke-green">Log_01</span>
                    </h2>
                </div>
                <div className="hidden md:flex gap-4">
                    <button className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:bg-nexus-green hover:text-black hover:border-nexus-green transition-colors">
                        <ArrowRight size={20} className="rotate-180" />
                    </button>
                    <button className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:bg-nexus-green hover:text-black hover:border-nexus-green transition-colors">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Horizontal Snap Scroll Container - Native CSS for stability */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar">
                {campaigns.map((item, i) => (
                    <motion.div 
                        key={item.id}
                        className="snap-center shrink-0 w-[85vw] md:w-[40vw] relative group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                    >
                        <div className="aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10 relative group-hover:border-nexus-green/50 transition-colors">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                loading="lazy"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-nexus-green text-black px-6 py-3 font-mono text-xs uppercase font-bold tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-[0_0_15px_#39FF14]">
                                    <Maximize2 size={14} /> Expand
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-nexus-green/50"></div>
                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-nexus-green/50"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-nexus-green/50"></div>
                            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-nexus-green/50"></div>
                        </div>

                        <div className="mt-6 flex justify-between items-start border-t border-white/10 pt-4 group-hover:border-nexus-green/50">
                            <div>
                                <span className="font-mono text-nexus-green text-xs block mb-1">
                                    IMG_{item.id}
                                </span>
                                <h3 className="font-oswald text-3xl uppercase font-bold text-white group-hover:text-nexus-green transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                            <span className="font-mono text-xs text-nexus-concrete uppercase tracking-widest mt-1">
                                {item.subtitle}
                            </span>
                        </div>
                    </motion.div>
                ))}
                
                {/* "View All" Card */}
                <div className="snap-center shrink-0 w-[85vw] md:w-[20vw] flex flex-col justify-center items-center border border-white/10 bg-white/5 hover:bg-nexus-green/10 hover:border-nexus-green transition-colors cursor-pointer group">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-nexus-green group-hover:text-nexus-green">
                        <ArrowRight size={24} className="text-white group-hover:text-nexus-green" />
                    </div>
                    <h3 className="font-oswald text-2xl uppercase font-bold text-white mb-2 group-hover:text-nexus-green">Full Archive</h3>
                    <p className="font-mono text-xs text-nexus-concrete">View All 108 Images</p>
                </div>
            </div>
        </section>
    );
};