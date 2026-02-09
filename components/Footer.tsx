import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nexus-black text-white pt-24 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 z-10 relative">
        <div className="md:col-span-2 pr-0 md:pr-12">
            <h2 className="font-syne font-bold text-4xl mb-6">TRIHOOD<span className="text-nexus-green">.</span></h2>
            <p className="text-nexus-concrete max-w-sm mb-8 font-inter leading-relaxed">
                Redefining the boundaries of streetwear through industrial design and luxury aesthetics. 
                Constructed in Tokyo, distributed globally.
            </p>
            <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                    <div key={i} className="p-3 border border-white/10 hover:border-nexus-green hover:text-nexus-green hover:bg-white/5 transition-all duration-300 cursor-pointer group hover:shadow-[0_0_10px_#39FF14]">
                        <Icon size={20} />
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h3 className="font-mono text-xs text-nexus-green font-bold uppercase tracking-widest mb-8">Catalog</h3>
            <ul className="space-y-4 text-nexus-concrete font-oswald text-lg uppercase tracking-wide">
                {['New Arrivals', 'Outerwear', 'Tops', 'Accessories', 'Archive'].map((item) => (
                    <li key={item} className="hover:text-white hover:pl-2 transition-all cursor-pointer flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 text-nexus-green text-xs">/</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className="font-mono text-xs text-nexus-green font-bold uppercase tracking-widest mb-8">System</h3>
            <ul className="space-y-4 text-nexus-concrete font-oswald text-lg uppercase tracking-wide">
                {['Shipping', 'Returns', 'Size Guide', 'Legal', 'Contact'].map((item) => (
                    <li key={item} className="hover:text-white hover:pl-2 transition-all cursor-pointer flex items-center gap-2 group">
                         <span className="opacity-0 group-hover:opacity-100 text-nexus-green text-xs">/</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black py-6">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-nexus-concrete uppercase tracking-widest font-mono">
            <p>&copy; 2024 TRIHOOD STUDIOS. EST. TOKYO.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
                <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
                <span className="cursor-pointer hover:text-white transition-colors">Sitemap</span>
            </div>
          </div>
      </div>
      
      {/* Aesthetic Background Typography */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
         <h1 className="text-[25vw] leading-[0.7] font-syne font-bold text-white whitespace-nowrap text-center translate-y-1/4">
             TRIHOOD
         </h1>
      </div>
    </footer>
  );
};