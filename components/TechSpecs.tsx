import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const specs = [
    { label: "MEMBRANE", value: "Gore-Tex Pro 3L", x: "20%", y: "30%" },
    { label: "HARDWARE", value: "Fidlock® Magnetic V-Buckles", x: "70%", y: "40%" },
    { label: "STORAGE", value: "8x Concealed Utility Pockets", x: "30%", y: "60%" },
    { label: "THERMAL", value: "Primaloft® Gold Insulation", x: "60%", y: "20%" },
    { label: "DURABILITY", value: "Cordura® Ballistic Nylon", x: "80%", y: "70%" },
];

export const TechSpecs: React.FC = () => {
  return (
    <section className="bg-neutral-900 py-32 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-20 text-center">
                <span className="text-nexus-green font-mono text-xs tracking-[0.5em] uppercase mb-4 block">
                    Schematic_View_01
                </span>
                <h2 className="font-syne font-extrabold text-5xl md:text-7xl text-white uppercase tracking-tighter">
                    The <span className="text-transparent text-stroke-green">Architect</span> Parka
                </h2>
            </div>

            <div className="relative w-full max-w-5xl mx-auto aspect-[3/4] md:aspect-[16/9] bg-black border border-nexus-green/30 p-8 md:p-12 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
                <div className="absolute top-4 left-4 text-xs font-mono text-nexus-concrete">
                    FIG. 24-B // TYPE: OUTERWEAR
                </div>
                <div className="absolute top-4 right-4 text-xs font-mono text-nexus-green animate-pulse">
                    STATUS: PROTOTYPE FINAL
                </div>

                {/* Main Image */}
                <img 
                    src="https://images.unsplash.com/photo-1559582798-678dfc71ccd8?q=80&w=2000&auto=format&fit=crop" 
                    alt="Tech Parka Detail" 
                    className="w-full h-full object-cover object-center grayscale contrast-125 opacity-60 hover:opacity-100 transition-opacity duration-700"
                />

                {/* Hotspots */}
                {specs.map((spec, i) => (
                    <motion.div
                        key={i}
                        className="absolute hidden md:flex flex-col items-start group cursor-pointer"
                        style={{ top: spec.y, left: spec.x }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, type: "spring" }}
                    >
                        <div className="relative">
                            <div className="w-4 h-4 bg-nexus-green rounded-full flex items-center justify-center relative z-10">
                                <Plus size={10} className="text-black" />
                            </div>
                            <div className="absolute inset-0 bg-nexus-green rounded-full animate-ping opacity-50"></div>
                            {/* Connecting Line */}
                            <div className="absolute top-2 left-2 w-12 h-[1px] bg-nexus-green origin-left transition-all duration-300 group-hover:w-24"></div>
                        </div>
                        
                        <div className="ml-6 mt-2 bg-black/80 backdrop-blur-md border border-nexus-green/30 p-3 rounded-none transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 min-w-[200px] shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                            <p className="text-nexus-green text-[10px] font-mono tracking-widest uppercase mb-1">
                                {spec.label}
                            </p>
                            <p className="text-white font-oswald text-lg uppercase leading-none">
                                {spec.value}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* Mobile Specs List */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 bg-black/90 p-6 border-t border-nexus-green/20">
                    {specs.slice(0, 3).map((spec, i) => (
                         <div key={i} className="flex justify-between items-center border-b border-white/10 py-2 last:border-0">
                            <span className="text-nexus-concrete text-xs font-mono">{spec.label}</span>
                            <span className="text-white font-oswald text-sm">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-12">
                 <button className="flex items-center gap-4 bg-white text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-nexus-green hover:text-white transition-all duration-300 group shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    View Full Specs
                    <Plus className="group-hover:rotate-90 transition-transform duration-300" />
                 </button>
            </div>
        </div>
    </section>
  );
};