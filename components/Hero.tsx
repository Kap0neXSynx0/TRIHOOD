import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const titleVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + (i * 0.1),
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax Effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-nexus-black transform-gpu">
      
      {/* Background Layer */}
      <motion.div 
        style={{ scale: scaleImg }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
            src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1600&auto=format&fit=crop" 
            alt="TriHood Campaign Hero" 
            className="w-full h-full object-cover object-center"
            loading="eager" // Critical for LCP
            decoding="sync"
        />
        {/* Dynamic Darkening Overlay */}
        <motion.div 
            style={{ opacity: opacityOverlay }}
            className="absolute inset-0 bg-black z-10 will-change-[opacity]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-nexus-black z-10"></div>
      </motion.div>

      {/* Content Layer */}
      <motion.div 
        style={{ y: yText }}
        className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center will-change-transform backface-hidden"
      >
         {/* Top Label */}
         <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.2, duration: 0.8 }}
             className="flex items-center gap-4 mb-6"
        >
            <span className="h-[1px] w-12 bg-nexus-green/50 shadow-[0_0_5px_#39FF14]"></span>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-nexus-green drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">
                Est. 2024 // Tokyo
            </p>
            <span className="h-[1px] w-12 bg-nexus-green/50 shadow-[0_0_5px_#39FF14]"></span>
        </motion.div>

        {/* Main Typography */}
        <div className="relative mb-12">
            <h1 className="font-syne font-extrabold text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter text-white mix-blend-difference z-20 relative select-none">
                <div className="overflow-hidden flex justify-center">
                    {['T', 'R', 'I', 'H', 'O', 'O', 'D'].map((char, i) => (
                        <motion.span 
                            key={i} 
                            custom={i} 
                            variants={titleVariants} 
                            initial="hidden" 
                            animate="visible"
                            className="hover:text-nexus-green transition-colors duration-300 cursor-default"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </h1>
            
            {/* Horizontal Line */}
            <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1, ease: "circOut" }}
                className="absolute top-1/2 left-0 right-0 h-[2px] bg-nexus-green mix-blend-difference shadow-[0_0_20px_#39FF14]"
            />
        </div>

        {/* CTA */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
        >
            <MagneticButton>
                <button className="bg-white text-black font-syne font-bold py-4 px-12 text-sm md:text-lg uppercase tracking-widest hover:bg-nexus-green hover:text-black hover:shadow-[0_0_30px_#39FF14] transition-all duration-300 border border-transparent hover:border-black">
                    Enter Archive
                </button>
            </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Footer / Scroll Hint */}
      <div className="absolute bottom-8 w-full px-12 flex justify-between items-end z-20 text-xs font-mono text-white/40 uppercase">
        <div className="hidden md:block">
            Coordinates<br/>35.6762° N, 139.6503° E
        </div>
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
        >
            <span className="text-nexus-green drop-shadow-[0_0_5px_#39FF14]">Scroll</span>
            <ArrowDown size={14} className="text-nexus-green drop-shadow-[0_0_5px_#39FF14]" />
        </motion.div>
        <div className="hidden md:block text-right">
            Status<br/><span className="text-nexus-green drop-shadow-[0_0_5px_#39FF14]">Online</span>
        </div>
      </div>
    </div>
  );
};