import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    {
        name: 'Footwear',
        image: 'https://images.unsplash.com/photo-1605218427368-35b019b885a1?q=80&w=1000&auto=format&fit=crop', 
        count: '12 Items'
    },
    {
        name: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop', 
        count: '24 Items'
    },
    {
        name: 'Tops',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
        count: '36 Items'
    }
];

export const CategorySection: React.FC = () => {
    return (
        <section className="bg-nexus-black border-b border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {categories.map((cat, i) => (
                    <motion.div 
                        key={cat.name} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="relative h-[60vh] group overflow-hidden border-b md:border-b-0 md:border-r border-white/5 last:border-r-0 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-nexus-charcoal overflow-hidden">
                            <img 
                                src={cat.image} 
                                alt={cat.name}
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                                <span className="text-[10px] font-bold text-nexus-white tracking-widest border border-white/20 px-2 py-1 bg-black/50 backdrop-blur-sm uppercase">
                                    {cat.count}
                                </span>
                                <div className="bg-white text-black p-2 rounded-full transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                     <ArrowUpRight size={16} />
                                </div>
                            </div>

                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-oswald text-5xl md:text-6xl text-transparent text-stroke group-hover:text-white group-hover:text-stroke-0 transition-all duration-300 uppercase font-bold">
                                    {cat.name}
                                </h3>
                                <div className="h-[2px] w-0 group-hover:w-16 bg-nexus-red mt-4 transition-all duration-500 ease-out delay-75"></div>
                                <p className="text-nexus-red text-xs font-bold tracking-[0.2em] uppercase mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    View Collection
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};