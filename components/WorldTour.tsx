import React from 'react';
import { motion } from 'framer-motion';

const locations = [
    { city: "TOKYO", district: "SHIBUYA PARCO", date: "OCT 12 - 14", status: "COMPLETED" },
    { city: "BERLIN", district: "KREUZBERG FACTORY", date: "OCT 28 - 30", status: "ACTIVE" },
    { city: "NEW YORK", district: "SOHO WAREHOUSE", date: "NOV 05 - 10", status: "UPCOMING" },
    { city: "LONDON", district: "180 STUDIOS", date: "NOV 15 - 18", status: "PENDING" },
    { city: "SEOUL", district: "SEONGSU-DONG", date: "DEC 01 - 05", status: "LOCKED" },
];

export const WorldTour: React.FC = () => {
  return (
    <section className="bg-nexus-charcoal py-24 border-y border-white/5 relative overflow-hidden">
         {/* Background Map Graphic (Abstract) */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                     <h2 className="font-syne font-extrabold text-5xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-4">
                        Global <br/> <span className="text-nexus-green">Activations</span>
                    </h2>
                    <p className="font-mono text-nexus-concrete text-sm tracking-widest">
                        // PHYSICAL TOUCHPOINTS
                    </p>
                </div>
                <div className="text-right hidden md:block">
                     <p className="font-oswald text-xl text-white">WORLD TOUR 2024/25</p>
                     <p className="text-nexus-green animate-pulse shadow-[0_0_10px_#39FF14]">SYSTEM ONLINE</p>
                </div>
            </div>

            <div className="w-full border-t-2 border-white">
                {locations.map((loc, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer px-4"
                    >
                        <div className="w-full md:w-1/3 mb-2 md:mb-0">
                            <span className="font-syne font-bold text-4xl md:text-5xl text-transparent text-stroke group-hover:text-white group-hover:text-stroke-0 transition-all duration-300 uppercase">
                                {loc.city}
                            </span>
                        </div>
                        
                        <div className="w-full md:w-1/3 mb-2 md:mb-0">
                            <span className="font-mono text-nexus-concrete text-sm uppercase tracking-widest group-hover:text-nexus-green transition-colors">
                                [{loc.district}]
                            </span>
                        </div>

                        <div className="w-full md:w-1/3 flex justify-between md:justify-end gap-8 items-center">
                            <span className="font-oswald text-lg text-white uppercase">
                                {loc.date}
                            </span>
                            <span className={`font-mono text-xs font-bold px-3 py-1 border ${
                                loc.status === 'ACTIVE' ? 'bg-nexus-green text-black border-nexus-green shadow-[0_0_10px_#39FF14]' : 
                                loc.status === 'COMPLETED' ? 'text-nexus-concrete border-nexus-concrete line-through' :
                                'text-white border-white'
                            }`}>
                                {loc.status}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-12 text-center md:text-left">
                <p className="font-inter text-nexus-concrete text-sm max-w-xl">
                    *Access to pop-up terminals requires RSVP via the NEXUS App. Priority access granted to Archive Members holding a Drop 01 purchase receipt.
                </p>
            </div>
        </div>
    </section>
  );
};