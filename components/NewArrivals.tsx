import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from './ProductCard';

const categories = ["ALL", "OUTERWEAR", "TOPS", "BOTTOMS", "GEAR"];

const products = [
  { 
      id: 1, 
      category: "OUTERWEAR",
      name: 'Oversized Bomber', 
      price: '$450.00', 
      imgFront: 'https://images.unsplash.com/photo-1551488852-d814c9379410?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1551488852-d814c9379410?auto=format&fit=crop&w=500&q=80', 
      tag: 'Heavyweight' 
  },
  { 
      id: 2, 
      category: "GEAR",
      name: 'Tactical Vest', 
      price: '$220.00', 
      imgFront: 'https://images.unsplash.com/photo-1512353087810-25dfcd100962?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1512353087810-25dfcd100962?auto=format&fit=crop&w=500&q=80', 
      tag: 'Utility' 
  },
  { 
      id: 3, 
      category: "TOPS",
      name: 'Graphic Hoodie', 
      price: '$180.00', 
      imgFront: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=500&q=80', 
      tag: 'Limited' 
  },
  { 
      id: 4, 
      category: "BOTTOMS",
      name: 'Technical Pant', 
      price: '$350.00', 
      imgFront: 'https://images.unsplash.com/photo-1605518216938-7f31b471844c?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1605518216938-7f31b471844c?auto=format&fit=crop&w=500&q=80', 
      tag: 'Waterproof' 
  },
  { 
      id: 5, 
      category: "OUTERWEAR",
      name: 'Shell Parka', 
      price: '$550.00', 
      imgFront: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?auto=format&fit=crop&w=500&q=80', 
      tag: 'Gore-Tex' 
  },
  { 
      id: 6, 
      category: "TOPS",
      name: 'Mock Neck Layer', 
      price: '$120.00', 
      imgFront: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=500&q=80', 
      tag: 'Thermal' 
  },
  { 
      id: 7, 
      category: "BOTTOMS",
      name: 'Cargo Short', 
      price: '$200.00', 
      imgFront: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f6?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f6?auto=format&fit=crop&w=500&q=80', 
      tag: 'Ripstop' 
  },
  { 
      id: 8, 
      category: "GEAR",
      name: 'Crossbody Bag', 
      price: '$150.00', 
      imgFront: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80', 
      imgBack: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80', 
      tag: 'Cordura' 
  }
];

export const NewArrivals: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProducts = activeCategory === "ALL" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-32 bg-nexus-charcoal relative min-h-screen border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
            <div className="mb-8 md:mb-0">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-nexus-green animate-pulse"></div>
                    <span className="text-nexus-green font-mono text-xs tracking-[0.3em] uppercase">
                        System_Inventory
                    </span>
                </div>
                <h2 className="font-syne font-extrabold text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.85]">
                    Ready To <br/><span className="text-transparent text-stroke-green">Wear</span>
                </h2>
            </div>
            
            {/* Filter Controls */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <div className="flex gap-4 md:gap-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`font-mono text-sm tracking-widest uppercase transition-all duration-300 relative group py-2 ${
                                activeCategory === cat ? 'text-nexus-green' : 'text-nexus-concrete hover:text-white'
                            }`}
                        >
                            {cat}
                            <span className={`absolute bottom-0 left-0 h-[2px] bg-nexus-green transition-all duration-300 ${
                                activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Product Grid - Removed layout prop for performance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </AnimatePresence>
        </div>
        
        {/* Footer of Section */}
        <div className="mt-24 text-center">
             <button className="bg-transparent border border-white/20 text-white px-12 py-4 font-mono text-xs uppercase tracking-widest hover:bg-nexus-green hover:text-black hover:border-nexus-green transition-all duration-300">
                Load Full Archive
             </button>
        </div>
      </div>
    </section>
  );
};