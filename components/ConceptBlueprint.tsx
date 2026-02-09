import React from 'react';
import { motion } from 'framer-motion';

export const ConceptBlueprint: React.FC = () => {
  return (
    <section className="bg-white py-24 border-y border-black relative overflow-hidden text-black">
        {/* Graph Paper Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                
                {/* Text Side */}
                <div className="w-full md:w-1/3">
                    <div className="border border-black p-2 inline-block mb-6 shadow-[4px_4px_0px_#39FF14]">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest">
                            CONFIDENTIAL // LEVEL 4
                        </span>
                    </div>
                    
                    <h2 className="font-syne font-extrabold text-5xl uppercase leading-none mb-6">
                        Design <br/> Schematics
                    </h2>
                    
                    <p className="font-inter font-medium text-lg mb-8 leading-relaxed">
                        Before the fabric is cut, the logic is defined. We approach garment design like architectural engineering. 
                        Every seam has a structural purpose.
                    </p>

                    <div className="space-y-4 font-mono text-xs border-t border-black pt-6">
                        <div className="flex justify-between">
                            <span>PROJECT:</span>
                            <span className="font-bold">TRIHOOD_SHELL_V1</span>
                        </div>
                        <div className="flex justify-between">
                            <span>DATE:</span>
                            <span className="font-bold">2024.02.15</span>
                        </div>
                        <div className="flex justify-between">
                            <span>STATUS:</span>
                            <span className="font-bold text-nexus-green bg-black px-2 py-0.5">APPROVED</span>
                        </div>
                    </div>
                </div>

                {/* Visual Side - Inverted Blueprint Style */}
                <div className="w-full md:w-2/3 relative">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-nexus-black p-1 border-2 border-black shadow-[20px_20px_0px_0px_rgba(57,255,20,0.2)]"
                    >
                        <div className="relative aspect-video overflow-hidden bg-[#001530]"> {/* Blueprint Blue */}
                            {/* Blueprint Lines */}
                            <div className="absolute inset-0 opacity-20" 
                                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                            </div>
                            
                            {/* Image with Filter */}
                            <img 
                                src="https://images.unsplash.com/photo-1617137968427-b2e424153c3d?q=80&w=1600&auto=format&fit=crop" 
                                alt="Technical Drawing" 
                                className="w-full h-full object-cover mix-blend-screen opacity-80 grayscale contrast-150 invert" 
                            />
                            
                            {/* Overlay Measurements */}
                            <motion.div 
                                className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-white"
                                initial={{ width: 0 }}
                                whileInView={{ width: 128 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                             <motion.div 
                                className="absolute top-1/4 left-1/4 h-32 w-[1px] bg-white"
                                initial={{ height: 0 }}
                                whileInView={{ height: 128 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                            <div className="absolute top-[26%] left-[26%] text-white font-mono text-[10px]">
                                AXIS_Y: 440mm
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
};