import React from 'react';

const cams = [
    { label: "CAM_01 // WAREHOUSE", img: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=800&auto=format&fit=crop" },
    { label: "CAM_02 // STREET_LEVEL", img: "https://images.unsplash.com/photo-1506197061617-7f5c0b093236?q=80&w=800&auto=format&fit=crop" },
    { label: "CAM_03 // ATELIER", img: "https://images.unsplash.com/photo-1531608139434-1912ae0713cd?q=80&w=800&auto=format&fit=crop" },
    { label: "CAM_04 // LOADING_DOCK", img: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop" }
];

export const CCTVGrid: React.FC = () => {
  return (
    <section className="bg-black py-4 border-y border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-1">
            {cams.map((cam, i) => (
                <div key={i} className="relative aspect-video bg-neutral-900 overflow-hidden group">
                    <img 
                        src={cam.img} 
                        alt={cam.label} 
                        loading="lazy"
                        className="w-full h-full object-cover opacity-40 grayscale contrast-150 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    
                    {/* Scanlines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(57,255,20,0.03),rgba(0,255,0,0.02),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10"></div>
                    
                    {/* Overlay UI */}
                    <div className="absolute top-2 left-2 flex items-center gap-2 z-20">
                        <div className="w-2 h-2 bg-nexus-green animate-pulse rounded-full shadow-[0_0_5px_#39FF14]"></div>
                        <span className="font-mono text-[8px] md:text-[10px] text-nexus-green font-bold">REC</span>
                    </div>

                    <div className="absolute bottom-2 left-2 z-20">
                        <span className="font-mono text-[8px] md:text-[10px] text-white bg-black/50 px-1 border border-white/10">
                            {cam.label}
                        </span>
                    </div>

                    <div className="absolute top-2 right-2 font-mono text-[8px] text-white/50 z-20">
                        {new Date().toLocaleTimeString()}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};