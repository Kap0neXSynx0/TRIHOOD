import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Manifesto: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
              delay: i * 0.05,
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1]
          }
      })
  };

  const words1 = "We exist in the void between the physical and the digital. TRIHOOD is an experiment in industrial luxury.".split(" ");
  const words2 = "Every garment is a prototype. Every stitch is calculated. This is not fashion. This is an update for your avatar.".split(" ");

  return (
    <section className="py-32 bg-nexus-black border-y border-white/5 relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <span className="bg-nexus-green text-black font-bold uppercase px-2 py-1 mb-8 inline-block font-mono tracking-widest text-xs shadow-[0_0_10px_#39FF14]">
                    Mission Statement
                </span>
                
                <h2 className="font-syne font-bold text-5xl md:text-8xl text-white uppercase leading-[0.85] mb-12 max-w-5xl mix-blend-difference">
                    Clothing for the <br/>
                    <span className="text-transparent text-stroke-green">Post-Digital Age</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    <div className="font-inter text-nexus-concrete text-lg md:text-xl leading-relaxed border-l-2 border-nexus-green pl-8">
                        <p className="flex flex-wrap gap-x-2">
                            {words1.map((word, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={textVariants}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </p>
                    </div>
                    <div className="font-inter text-nexus-concrete text-lg md:text-xl leading-relaxed">
                        <p className="flex flex-wrap gap-x-2">
                             {words2.map((word, i) => (
                                <motion.span
                                    key={i}
                                    custom={i + 20}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={textVariants}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Large Scrolling Background Text */}
        <motion.div 
            className="absolute bottom-10 left-0 w-full opacity-[0.04] pointer-events-none whitespace-nowrap z-0"
            style={{ x }}
        >
            <span className="font-oswald font-bold text-[25vw] text-white leading-none">
                TRIHOOD ARCHIVE SYSTEM
            </span>
        </motion.div>
    </section>
  );
};