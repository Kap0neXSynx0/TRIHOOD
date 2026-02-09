import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const completeTimer = setTimeout(() => {
        onComplete();
    }, 2500);

    return () => {
        clearInterval(timer);
        clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-nexus-green flex flex-col justify-between p-6 md:p-12"
    >
      <div className="flex justify-between items-start">
        <h1 className="font-syne font-bold text-black text-xl md:text-2xl">TRIHOOD<span className="text-white">.</span></h1>
        <div className="text-right font-mono text-xs md:text-sm font-bold text-black">
            <p>SYSTEM_BOOT_SEQUENCE</p>
            <p>V.2.0.4. BETA</p>
        </div>
      </div>

      <div className="w-full">
        <h2 className="font-oswald text-[15vw] leading-none font-bold text-black">
            {count}%
        </h2>
        <div className="w-full h-[2px] bg-black/20 mt-4 relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
            />
        </div>
      </div>

      <div className="flex justify-between items-end font-mono text-xs font-bold text-black">
        <p>INITIALIZING ASSETS...</p>
        <p>EST. 2024</p>
      </div>
    </motion.div>
  );
};