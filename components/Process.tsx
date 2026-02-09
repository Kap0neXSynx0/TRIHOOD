import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: "01", title: "Material Sourcing", desc: "Japanese technical mills." },
    { num: "02", title: "Pattern Drafting", desc: "Architectural precision." },
    { num: "03", title: "Stress Testing", desc: "Urban environment simulation." },
    { num: "04", title: "Global Deploy", desc: "Secure logistics network." }
];

export const Process: React.FC = () => {
  return (
    <section className="bg-nexus-black py-32 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                
                {/* Visual */}
                <div className="w-full md:w-1/2 relative">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] overflow-hidden border border-white/10 group"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                            alt="Lab Process" 
                            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                        
                        <div className="absolute bottom-8 left-8">
                            <h3 className="font-syne font-bold text-5xl text-white uppercase leading-none mb-2">The <br/> Lab</h3>
                            <p className="font-mono text-nexus-green text-xs tracking-widest shadow-[0_0_10px_#39FF14]">RESTRICTED ACCESS</p>
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pt-12">
                    <h2 className="font-oswald text-3xl text-white uppercase mb-12 tracking-wide border-l-4 border-nexus-green pl-6">
                        Construction Protocol
                    </h2>
                    
                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-center gap-8 py-8 border-b border-white/10 hover:bg-white/5 hover:pl-4 transition-all duration-300 cursor-default"
                            >
                                <span className="font-syne font-bold text-4xl text-transparent text-stroke group-hover:text-nexus-green group-hover:text-stroke-0 transition-all drop-shadow-[0_0_5px_#39FF14]">
                                    {step.num}
                                </span>
                                <div>
                                    <h4 className="font-oswald text-xl text-white uppercase mb-1">{step.title}</h4>
                                    <p className="font-mono text-xs text-nexus-concrete uppercase tracking-widest">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 pl-4 border-l border-white/20">
                         <p className="font-inter text-nexus-concrete leading-relaxed">
                            Each garment is subjected to rigorous durability testing. 
                            If it fails, it is destroyed. We do not sell seconds. 
                            We do not compromise.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};