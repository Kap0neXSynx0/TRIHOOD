import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for the ring
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      // Update motion values directly - NO REACT RENDER CYCLE
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = 
            target.tagName.toLowerCase() === 'button' || 
            target.tagName.toLowerCase() === 'a' ||
            target.tagName.toLowerCase() === 'input' ||
            target.closest('button') ||
            target.closest('a') ||
            target.closest('.cursor-pointer');
            
        setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", mouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
        {/* Main Dot - Follows instantly */}
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-nexus-green rounded-full pointer-events-none z-[100] mix-blend-difference will-change-transform shadow-[0_0_10px_#39FF14]"
            style={{ 
                translateX: cursorX, 
                translateY: cursorY,
                x: -4, 
                y: -4 
            }}
        />
        {/* Ring - Follows with spring physics */}
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[100] mix-blend-difference will-change-transform"
            style={{ 
                translateX: cursorXSpring, 
                translateY: cursorYSpring,
                x: -16, 
                y: -16,
            }}
            animate={{ 
                scale: isHovering ? 2.5 : 1,
                borderColor: isHovering ? '#39FF14' : '#FFFFFF',
                backgroundColor: isHovering ? 'rgba(57, 255, 20, 0.1)' : 'transparent'
            }}
            transition={{ duration: 0.2 }}
        />
    </>
  );
};