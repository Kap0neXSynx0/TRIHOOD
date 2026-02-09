import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  imgFront: string;
  imgBack: string;
  tag: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="group cursor-pointer flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5 w-full group-hover:border-nexus-green/50 transition-colors duration-300">
        <img 
          src={product.imgFront} 
          alt={product.name} 
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 group-hover:opacity-0 filter contrast-110"
        />
        <img 
          src={product.imgBack} 
          alt={`${product.name} Alt`} 
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-700 contrast-110"
        />
        
        {/* Hover Actions - Clean Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
             <button className="bg-nexus-green text-black px-6 py-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-[0_0_15px_#39FF14]">
                <ShoppingBag size={14} /> Quick Add
             </button>
        </div>

        {/* Tags - Minimal */}
        <div className="absolute top-3 left-3 z-20">
             <span className="bg-nexus-black/80 backdrop-blur-sm text-nexus-green border border-nexus-green/30 text-[9px] font-mono px-2 py-1 uppercase tracking-wider">
                {product.tag}
             </span>
        </div>
      </div>

      {/* Info - Cleanly separated from image to reduce "mess" */}
      <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-3 group-hover:border-nexus-green/50 transition-colors">
        <div className="flex justify-between items-start">
            <h3 className="font-oswald text-lg uppercase tracking-wide text-white group-hover:text-nexus-green transition-colors duration-300 leading-none">
                {product.name}
            </h3>
            <span className="font-mono text-sm text-nexus-concrete">{product.price}</span>
        </div>
        <div className="flex justify-between items-center mt-1">
             <p className="text-[10px] font-mono text-nexus-concrete uppercase tracking-widest">
                Edition 01 // FW24
             </p>
             <Plus size={12} className="text-white/30 group-hover:text-nexus-green transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};