import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

const menuItems = [
    { title: 'New Arrivals', image: 'https://images.unsplash.com/photo-1523396870177-0295134cf43e?q=80&w=800&auto=format&fit=crop' },
    { title: 'Collections', image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=800&auto=format&fit=crop' },
    { title: 'Accessories', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
    { title: 'Editorial', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop' },
    { title: 'About', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 md:px-12 py-6 flex justify-between items-center ${
          isScrolled ? 'bg-nexus-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-4">
            <MagneticButton onClick={() => setIsMenuOpen(true)} className="hidden md:flex">
                <Menu size={24} className="text-white hover:text-nexus-green transition-colors" />
            </MagneticButton>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white">
                <Menu size={24} />
            </button>
            <span className="text-sm font-bold tracking-widest hidden md:block text-nexus-concrete">MENU</span>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-syne font-bold text-2xl md:text-3xl tracking-tighter text-white">
                TRIHOOD<span className="text-nexus-green">.</span>
            </h1>
        </div>

        <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest cursor-pointer hover:text-nexus-green transition-colors">
                SEARCH <Search size={18} />
            </div>
            <MagneticButton>
                <div className="relative group">
                    <ShoppingBag size={24} className="text-white group-hover:text-nexus-green transition-colors" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-nexus-green rounded-full flex items-center justify-center text-[10px] font-bold text-black shadow-[0_0_10px_#39FF14]">
                        2
                    </div>
                </div>
            </MagneticButton>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-100%' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-nexus-charcoal z-50 flex flex-col md:flex-row"
            >
                {/* Image Preview Panel */}
                <div className="hidden md:block w-1/3 h-full relative overflow-hidden border-r border-white/10 bg-black">
                     <AnimatePresence mode='wait'>
                        {hoveredIndex !== null && (
                            <motion.img
                                key={hoveredIndex}
                                src={menuItems[hoveredIndex].image}
                                alt="Menu Preview"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 0.6, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
                            />
                        )}
                     </AnimatePresence>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Menu Items Panel */}
                <div className="w-full md:w-2/3 h-full flex flex-col justify-center items-center md:items-start md:pl-24 relative">
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-8 right-8 text-white hover:text-nexus-green transition-colors z-20"
                    >
                        <X size={32} />
                    </button>

                    <div className="flex flex-col gap-6 md:gap-8 font-oswald text-5xl md:text-7xl uppercase font-bold tracking-tighter">
                        {menuItems.map((item, i) => (
                            <motion.a
                                key={item.title}
                                href="#"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                                className="hover:text-nexus-green transition-colors text-stroke hover:text-stroke-green hover:text-transparent relative group flex items-center gap-4"
                            >
                                <span className="text-sm font-inter font-normal text-nexus-green opacity-0 group-hover:opacity-100 transition-opacity tracking-widest translate-x-4 group-hover:translate-x-0 duration-300 hidden md:block">
                                    0{i + 1}
                                </span>
                                {item.title}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};