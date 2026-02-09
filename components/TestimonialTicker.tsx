import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    { name: "ALEXANDER K.", text: "The quality is absolutely insane. Feels like armor.", location: "BERLIN" },
    { name: "JONAH M.", text: "Best drop of the year. The hoodie weight is perfect.", location: "NEW YORK" },
    { name: "SARAH L.", text: "Shipping was faster than expected. Packaging is top tier.", location: "LONDON" },
    { name: "DAVIS R.", text: "Technical fabrics that actually look good. Finally.", location: "TOKYO" },
    { name: "MARCUS T.", text: "Industrial luxury at its finest. Nexus never misses.", location: "CHICAGO" },
];

export const TestimonialTicker: React.FC = () => {
  return (
    <section className="py-20 bg-nexus-green overflow-hidden border-y border-black">
        <div className="mb-8 text-center px-6">
            <h3 className="font-oswald font-bold text-black text-2xl uppercase tracking-widest">Field Reports</h3>
        </div>
        
        <div className="flex whitespace-nowrap overflow-hidden">
             <motion.div 
                className="flex gap-8"
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
             >
                {[...reviews, ...reviews, ...reviews].map((review, i) => (
                    <div key={i} className="bg-black text-white p-8 w-[350px] md:w-[450px] flex-shrink-0 border border-white/20 relative group hover:-translate-y-2 transition-transform duration-300 shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                        <div className="flex gap-1 text-nexus-green mb-4">
                            {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                        </div>
                        <p className="font-syne font-bold text-xl uppercase leading-tight mb-6">
                            "{review.text}"
                        </p>
                        <div className="flex justify-between items-end border-t border-white/20 pt-4">
                            <span className="font-oswald font-bold tracking-widest text-sm">{review.name}</span>
                            <span className="font-mono text-xs text-nexus-concrete bg-white/10 px-2 py-1">{review.location}</span>
                        </div>
                    </div>
                ))}
             </motion.div>
        </div>
    </section>
  );
};