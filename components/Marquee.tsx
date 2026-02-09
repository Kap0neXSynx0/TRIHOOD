import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 25, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden bg-white py-3 border-y-4 border-nexus-green z-30">
      <div className="flex whitespace-nowrap will-change-transform">
        <motion.div
          initial={{ x: direction === 'left' ? "0%" : "-50%" }}
          animate={{ x: direction === 'left' ? "-50%" : "0%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: speed }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-black font-syne font-extrabold text-2xl md:text-4xl uppercase tracking-tighter px-6 italic">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};