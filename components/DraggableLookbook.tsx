import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const looks = [
    { 
        id: "01", 
        title: "URBAN_GHOST", 
        subtitle: "Stealth Protocols",
        img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: "02", 
        title: "NIGHT_OPS", 
        subtitle: "Low Light Utility",
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: "03", 
        title: "CONCRETE", 
        subtitle: "Structural Integration",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: "04", 
        title: "STATIC_NOISE", 
        subtitle: "Signal Disruption",
        img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: "05", 
        title: "SYSTEM_ERR", 
        subtitle: "Glitch Aesthetics",
        img: "https://images.unsplash.com/photo-1509631179647-0177f95353cf?q=80&w=1200&auto=format&fit=crop" 
    }
];

export const DraggableLookbook: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Smoother horizontal scroll mapping
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
    
    // Parallax effect for text elements
    const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-nexus-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                
                {/* Section Header (Fixed) */}
                <div className="absolute top-8 left-6 md:left-12 z-20 mix-blend-difference text-white pointer-events-none">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-nexus-green animate-pulse"></div>
                        <span className="font-mono text-xs tracking-widest uppercase">
                            Archive_View_V.04
                        </span>
                     </div>
                     <h2 className="font-syne font-extrabold text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                        Visual <br/> Archives
                    </h2>
                </div>

                {/* Horizontal Track */}
                <motion.div style={{ x }} className="flex gap-0 h-full items-center pl-[5vw]">
                    {looks.map((look, i) => (
                        <div key={look.id} className="relative h-full w-[80vw] md:w-[45vw] flex-shrink-0 flex items-center justify-center px-4 md:px-8">
                            <div className="relative w-full h-[60vh] overflow-hidden bg-black group border border-black/10">
                                {/* Image with internal parallax */}
                                <motion.div 
                                    className="w-full h-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <img 
                                        src={look.img} 
                                        alt={look.title} 
                                        className="h-full w-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                                    />
                                </motion.div>
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                
                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="overflow-hidden mb-2">
                                        <motion.span 
                                            className="block text-nexus-green font-mono text-xs tracking-widest mb-1 shadow-[0_0_10px_#39FF14]"
                                            initial={{ y: 20 }}
                                            whileInView={{ y: 0 }}
                                        >
                                            LOOK_{look.id}
                                        </motion.span>
                                    </div>
                                    <h3 className="text-white font-oswald text-4xl md:text-5xl uppercase font-bold leading-none mb-2">
                                        {look.title}
                                    </h3>
                                    <p className="text-nexus-concrete font-mono text-xs uppercase tracking-wide border-l border-nexus-green pl-3">
                                        {look.subtitle}
                                    </p>
                                </div>

                                {/* Hover Reveal Corner */}
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="text-white -rotate-45" size={32} />
                                </div>
                            </div>

                            {/* Large Background Number Parallax */}
                            <motion.span 
                                style={{ x: textParallax }}
                                className="absolute -bottom-12 -right-12 font-syne font-bold text-[20vw] text-nexus-black/5 pointer-events-none select-none z-[-1]"
                            >
                                {look.id}
                            </motion.span>
                        </div>
                    ))}
                    
                    {/* End Card */}
                    <div className="relative h-full w-[50vw] flex-shrink-0 flex items-center justify-center bg-nexus-black text-white ml-12">
                         <div className="text-center">
                             <h3 className="font-syne font-bold text-6xl mb-6">End of <br/> Archive</h3>
                             <button className="border border-white/20 px-8 py-4 uppercase font-mono text-sm hover:bg-white hover:text-black transition-colors">
                                 Back to Top
                             </button>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};