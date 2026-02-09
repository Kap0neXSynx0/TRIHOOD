import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Film } from 'lucide-react';

const archiveItems = [
    { 
        id: "ARCHIVE_01", 
        title: "Ghost Protocol", 
        date: "2024.10.05",
        desc: "Urban camouflage study in high-density metropolitan zones.",
        image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1400&auto=format&fit=crop"
    },
    { 
        id: "ARCHIVE_02", 
        title: "Night Vision", 
        date: "2024.10.12",
        desc: "Low-light utility testing. ISO 3200.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop"
    },
    { 
        id: "ARCHIVE_03", 
        title: "Concrete Structure", 
        date: "2024.10.20",
        desc: "Architectural integration. Brutalist forms.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
    },
    { 
        id: "ARCHIVE_04", 
        title: "Signal Lost", 
        date: "2024.11.01",
        desc: "Interference patterns and static noise textures.",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop"
    },
    { 
        id: "ARCHIVE_05", 
        title: "System Reboot", 
        date: "2024.11.15",
        desc: "Core functionality restoration.",
        image: "https://images.unsplash.com/photo-1509631179647-0177f95353cf?q=80&w=1400&auto=format&fit=crop"
    }
];

export const VisualArchive: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Precise scroll mapping: Move left by (Total Width - Viewport Width)
    // We roughly estimate the content width to be around 400vw based on items
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    
    return (
        <section ref={targetRef} className="relative h-[400vh] bg-nexus-black border-y border-white/10">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                
                {/* Header (Absolute) */}
                <div className="absolute top-8 left-8 md:left-12 z-20 flex justify-between w-[90%] items-start pointer-events-none mix-blend-difference">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Film size={16} className="text-nexus-green animate-pulse" />
                            <span className="font-mono text-xs text-white tracking-widest uppercase">
                                Database_Visual_Log
                            </span>
                        </div>
                        <h2 className="font-syne font-extrabold text-5xl md:text-8xl text-white uppercase leading-none">
                            Visual <br/> Archive
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                         <p className="font-mono text-xs text-white">SCROLL TO NAVIGATE</p>
                         <p className="font-mono text-xs text-nexus-green">>>>></p>
                    </div>
                </div>

                {/* Film Strip Track */}
                <motion.div style={{ x }} className="flex items-center gap-12 md:gap-24 px-[5vw] w-max">
                    {/* Intro Block */}
                    <div className="w-[30vw] md:w-[20vw] flex-shrink-0">
                         <p className="font-inter text-nexus-concrete text-sm md:text-lg leading-relaxed border-l-2 border-nexus-green pl-6">
                             A collection of visual data collected from field operations. 
                             Raw, unfiltered, and encrypted for archive members only.
                         </p>
                    </div>

                    {archiveItems.map((item, i) => (
                        <div key={item.id} className="relative group w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 bg-neutral-900 overflow-hidden border border-white/10">
                            {/* Film Perforation Deco */}
                            <div className="absolute top-0 left-0 w-full h-4 bg-black z-20 flex justify-between px-2 items-center">
                                {[...Array(20)].map((_, idx) => (
                                    <div key={idx} className="w-1 h-2 bg-white/20 rounded-sm"></div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-4 bg-black z-20 flex justify-between px-2 items-center">
                                {[...Array(20)].map((_, idx) => (
                                    <div key={idx} className="w-1 h-2 bg-white/20 rounded-sm"></div>
                                ))}
                            </div>

                            {/* Main Image */}
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
                            />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 pointer-events-none">
                                <div className="flex justify-between items-start">
                                    <span className="bg-nexus-green text-black font-mono text-xs font-bold px-2 py-1 shadow-[0_0_10px_#39FF14]">
                                        {item.id}
                                    </span>
                                    <span className="font-mono text-xs text-white/50 border border-white/20 px-2 py-1">
                                        {item.date}
                                    </span>
                                </div>
                                
                                <div>
                                    <h3 className="font-oswald text-5xl md:text-7xl text-white uppercase font-bold mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="font-mono text-sm text-nexus-concrete bg-black/80 inline-block px-4 py-2 backdrop-blur-md max-w-md border-l-2 border-nexus-green">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Interactions */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-nexus-green hover:text-black text-white backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.5)]">
                                <ArrowRight size={24} />
                            </div>
                        </div>
                    ))}

                    {/* End Card */}
                    <div className="w-[80vw] md:w-[40vw] h-[60vh] md:h-[70vh] flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10">
                        <div className="text-center">
                            <h3 className="font-syne font-bold text-4xl text-white uppercase mb-6">End of Reel</h3>
                            <button className="bg-nexus-green text-black px-8 py-3 font-mono font-bold uppercase hover:bg-white transition-colors shadow-[0_0_15px_#39FF14]">
                                Return to Top
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Progress Bar specific to this section */}
                <div className="absolute bottom-12 left-8 md:left-12 right-8 md:right-12 h-[2px] bg-white/10 z-20">
                    <motion.div 
                        style={{ scaleX: scrollYProgress }} 
                        className="h-full bg-nexus-green origin-left shadow-[0_0_10px_#39FF14]"
                    />
                </div>
            </div>
        </section>
    );
};