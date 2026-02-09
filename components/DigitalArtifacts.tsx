import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Database, Lock, Wifi } from 'lucide-react';

export const DigitalArtifacts: React.FC = () => {
  return (
    <section className="bg-neutral-900 py-32 border-y border-white/5 relative overflow-hidden">
        {/* Glitch Background Effect */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* 3D Card Visual */}
                <div className="perspective-1000 w-full flex justify-center">
                    <motion.div 
                        initial={{ rotateY: -10, rotateX: 5 }}
                        whileInView={{ rotateY: 10, rotateX: -5 }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5, ease: "easeInOut" }}
                        className="relative w-[320px] h-[500px] bg-black border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.15)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-20 pointer-events-none"></div>
                        
                        {/* Card Content */}
                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <Scan size={40} className="text-nexus-green" />
                                <Wifi size={24} className="text-white/50" />
                            </div>
                            
                            <div className="space-y-4">
                                <div className="w-full h-32 bg-nexus-green/5 border border-nexus-green/20 flex items-center justify-center">
                                    <span className="font-mono text-[10px] text-nexus-green">NFC_CHIP_EMBEDDED</span>
                                </div>
                                <div className="font-mono text-xs text-nexus-concrete">
                                    <p>ID: 884-X99-AQ</p>
                                    <p>AUTH: BLOCKCHAIN</p>
                                    <p>OWNER: UNREGISTERED</p>
                                </div>
                            </div>

                            <div className="border-t border-white/20 pt-6">
                                <h3 className="font-syne font-bold text-2xl text-white uppercase">TriHood<br/>Passport</h3>
                            </div>
                        </div>

                        {/* Scanline */}
                        <motion.div 
                            animate={{ top: ['0%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 w-full h-[2px] bg-nexus-green z-30 shadow-[0_0_10px_#39FF14]"
                        />
                    </motion.div>
                </div>

                {/* Text Content */}
                <div>
                    <span className="text-nexus-green font-mono text-sm tracking-widest uppercase mb-4 block">
                        // Digital Twin Technology
                    </span>
                    <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white uppercase leading-none mb-8">
                        Beyond the <br/> <span className="text-transparent text-stroke-green">Physical</span>
                    </h2>
                    
                    <p className="font-inter text-nexus-concrete text-lg mb-12 leading-relaxed">
                        Every TRIHOOD garment contains an encrypted NFC chip. 
                        Scanning it verifies authenticity on the blockchain and unlocks 
                        exclusive digital assets, event access, and future purchase rights.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="p-3 bg-white/5 border border-white/10 h-fit hover:border-nexus-green/50 transition-colors">
                                <Lock size={24} className="text-nexus-green" />
                            </div>
                            <div>
                                <h4 className="font-oswald text-white uppercase text-lg mb-1">Anti-Counterfeit</h4>
                                <p className="font-mono text-xs text-nexus-concrete">Cryptographic verification ensures 100% authenticity.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-white/5 border border-white/10 h-fit hover:border-nexus-green/50 transition-colors">
                                <Database size={24} className="text-nexus-green" />
                            </div>
                            <div>
                                <h4 className="font-oswald text-white uppercase text-lg mb-1">Ownership Ledger</h4>
                                <p className="font-mono text-xs text-nexus-concrete">Transfer ownership digitally when you resell.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                         <button className="text-nexus-green font-mono text-xs font-bold uppercase tracking-widest border-b border-nexus-green pb-1 hover:text-white hover:border-white transition-all shadow-[0_10px_20px_-10px_rgba(57,255,20,0.3)]">
                             Read Whitepaper
                         </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};