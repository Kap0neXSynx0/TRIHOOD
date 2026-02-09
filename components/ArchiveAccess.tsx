import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, Fingerprint } from 'lucide-react';

export const ArchiveAccess: React.FC = () => {
  return (
    <section className="py-32 bg-nexus-white border-b border-black/10 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
            
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-nexus-green animate-pulse rounded-full shadow-[0_0_5px_#39FF14]"></div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-nexus-charcoal">
                            Restricted Area
                        </span>
                    </div>
                    
                    <h2 className="font-syne font-extrabold text-5xl md:text-7xl text-black uppercase leading-[0.9] mb-8">
                        TriHood <br/> <span className="text-nexus-green text-stroke-green text-transparent" style={{ WebkitTextStroke: '1px #39FF14', color: '#39FF14' }}>Archive</span> Access
                    </h2>
                    
                    <p className="font-inter text-nexus-charcoal text-lg leading-relaxed mb-8 max-w-md">
                        Join the inner circle. Members receive early access to prototype drops, invite-only pop-up coordinates, and private discord channel entry.
                    </p>

                    <ul className="space-y-4 mb-10 font-mono text-sm">
                        <li className="flex items-center gap-4">
                            <ShieldCheck size={18} className="text-nexus-green" />
                            <span>PRIORITY SHIPPING PROTOCOLS</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Fingerprint size={18} className="text-nexus-green" />
                            <span>DIGITAL ASSET CLAIMING</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <QrCode size={18} className="text-nexus-green" />
                            <span>OFFLINE EVENT RSVP</span>
                        </li>
                    </ul>

                    <button className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-nexus-green hover:text-black transition-colors border-2 border-transparent hover:border-black flex items-center gap-4 group shadow-[5px_5px_0px_#39FF14]">
                        Initialize ID
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </motion.div>
            </div>

            {/* Right: ID Card Visual */}
            <div className="w-full md:w-1/2 flex justify-center perspective-1000">
                <motion.div 
                    initial={{ rotateY: 15, rotateX: 5 }}
                    whileInView={{ rotateY: -5, rotateX: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-[350px] h-[550px] bg-black rounded-xl overflow-hidden border border-nexus-green/30 shadow-[0_0_40px_rgba(57,255,20,0.2)] group"
                >
                    {/* Card Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                        <div className="flex justify-between items-start">
                            <span className="font-syne font-bold text-2xl text-white">TRIHOOD.</span>
                            <QrCode size={40} className="text-nexus-green bg-nexus-green/10 p-1 rounded" />
                        </div>
                        
                        <div className="space-y-2">
                             <div className="w-24 h-32 bg-neutral-800 mb-4 overflow-hidden border border-nexus-green/20">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80" alt="Member" />
                             </div>
                             <div className="font-mono text-xs text-nexus-concrete">
                                <p>NAME: [REDACTED]</p>
                                <p>ID: TH-8842-01</p>
                                <p>LEVEL: INITIATE</p>
                                <p>EXP: ∞</p>
                             </div>
                        </div>

                        <div className="border-t border-white/20 pt-4">
                            <div className="flex justify-between items-end">
                                <span className="font-oswald text-4xl text-transparent text-stroke-green font-bold">MEMBER</span>
                                <div className="h-2 w-12 bg-nexus-green animate-pulse shadow-[0_0_10px_#39FF14]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Holographic Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-nexus-green/10 to-transparent z-30 pointer-events-none group-hover:opacity-50 transition-opacity"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-10"></div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};