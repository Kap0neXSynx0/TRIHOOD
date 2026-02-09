import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const articles = [
    { 
        id: "001", 
        title: "The Architecture of Silence", 
        date: "OCT 24, 2024", 
        category: "DESIGN STUDY",
        image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=800&auto=format&fit=crop"
    },
    { 
        id: "002", 
        title: "Dystopian Comfort: A Manifesto", 
        date: "NOV 02, 2024", 
        category: "PHILOSOPHY",
        image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=800&auto=format&fit=crop"
    },
    { 
        id: "003", 
        title: "Raw Materials: Graphene Weave", 
        date: "NOV 15, 2024", 
        category: "R&D",
        image: "https://images.unsplash.com/photo-1550614000-4b9519e0072b?q=80&w=800&auto=format&fit=crop"
    },
    { 
        id: "004", 
        title: "Tokyo Pop-Up Retrospective", 
        date: "DEC 01, 2024", 
        category: "EVENT LOG",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop"
    }
];

export const Transmissions: React.FC = () => {
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  return (
    <section className="py-24 bg-nexus-charcoal relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
            <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
                 <h2 className="font-syne font-extrabold text-5xl md:text-7xl text-white uppercase tracking-tighter">
                    Signal <br/> <span className="text-nexus-green">Transmissions</span>
                </h2>
                <div className="hidden md:block text-right">
                    <p className="text-nexus-concrete font-mono text-sm">INCOMING DATA STREAM</p>
                    <p className="text-white font-mono text-sm">ENCRYPTION: NONE</p>
                </div>
            </div>

            <div className="flex flex-col">
                {articles.map((article) => (
                    <motion.div 
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredDoc(article.image)}
                        onMouseLeave={() => setHoveredDoc(null)}
                        className="group relative border-b border-white/10 py-8 md:py-12 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center transition-colors hover:bg-white/5 px-4"
                    >
                        <div className="flex items-start gap-6 md:gap-12">
                            <span className="font-mono text-nexus-green text-sm pt-2">LOG_{article.id}</span>
                            <div>
                                <h3 className="font-oswald text-2xl md:text-4xl text-white uppercase font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                    {article.title}
                                </h3>
                                <span className="font-mono text-xs text-nexus-concrete bg-black/30 px-2 py-1 uppercase border border-white/5">
                                    {article.category}
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0 flex items-center gap-8 pl-14 md:pl-0">
                            <span className="font-mono text-nexus-concrete text-sm">{article.date}</span>
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-nexus-green group-hover:border-nexus-green group-hover:text-black transition-all">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Floating Image Preview */}
        <AnimatePresence>
            {hoveredDoc && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[400px] h-[300px] pointer-events-none hidden md:block mix-blend-lighten"
                >
                    <img 
                        src={hoveredDoc} 
                        alt="Preview" 
                        className="w-full h-full object-cover grayscale contrast-125 border-2 border-nexus-green shadow-[0_0_20px_#39FF14]"
                    />
                    <div className="absolute -bottom-6 left-0 bg-nexus-green text-black px-2 py-1 font-mono text-xs font-bold">
                        PREVIEW_MODE
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  );
};