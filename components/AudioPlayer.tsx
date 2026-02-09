import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-4"
    >
        <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="group flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-nexus-red transition-colors"
        >
            <div className="text-white group-hover:text-nexus-red transition-colors">
                {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </div>
            <div className="flex gap-[2px] items-end h-3">
                 {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`w-[2px] bg-white group-hover:bg-nexus-red transition-colors ${isPlaying ? 'animate-pulse' : ''}`}
                        animate={{ height: isPlaying ? [4, 12, 6, 10, 4] : 2 }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 0.5, 
                            delay: i * 0.1,
                            ease: "easeInOut" 
                        }}
                    />
                 ))}
            </div>
            <span className="text-[10px] font-mono font-bold text-nexus-concrete uppercase w-12">
                {isPlaying ? 'Sound On' : 'Muted'}
            </span>
        </button>
    </motion.div>
  );
};