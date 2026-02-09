import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden flex flex-col items-center justify-center text-center border-t-8 border-nexus-green">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-2xl border-4 border-black p-8 md:p-12 shadow-[10px_10px_0px_0px_#39FF14]"
        >
            <h2 className="font-syne font-extrabold text-5xl md:text-7xl text-black uppercase tracking-tighter leading-[0.9] mb-6">
                Join The <br/> Cult
            </h2>
            <p className="font-inter text-black font-bold uppercase tracking-widest mb-10 text-sm bg-nexus-green/20 inline-block px-4 py-1">
                Unlock Drop 02 Access Codes
            </p>
            
            <form className="flex flex-col gap-4 w-full">
                <input 
                    type="email" 
                    placeholder="ENTER EMAIL_ADDRESS" 
                    className="w-full bg-neutral-100 text-black placeholder-black/50 px-6 py-5 font-mono uppercase border-2 border-black focus:outline-none focus:border-nexus-green focus:bg-white transition-colors text-lg"
                />
                <button className="w-full bg-black text-white px-8 py-5 font-bold font-syne text-xl uppercase tracking-widest hover:bg-nexus-green hover:text-black transition-colors flex items-center justify-center gap-4 border-2 border-black group">
                    Initialize <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
            </form>
        </motion.div>
    </section>
  );
};