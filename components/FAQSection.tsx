import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is your shipping protocol?",
        answer: "We ship worldwide via DHL Express. Orders processed before 12:00 PM EST are dispatched the same day. You will receive a tracking beacon immediately upon dispatch."
    },
    {
        question: "How do I determine my size?",
        answer: "Our garments feature an oversized, industrial fit. We recommend ordering your standard size for the intended silhouette, or sizing down for a closer fit. Refer to the 'Schematics' link on each product page."
    },
    {
        question: "What materials are used?",
        answer: "We primarily utilize ballistic nylon, heavyweight French terry, and Japanese selvedge denim. All fabrics are stress-tested for urban durability."
    },
    {
        question: "What is the return policy?",
        answer: "Returns are accepted within 14 days of receipt, provided the security tag remains intact. The item must be unworn and in original condition."
    }
];

export const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-nexus-black border-t border-white/5 relative">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <div className="mb-16 text-center">
                     <span className="text-nexus-green font-mono text-sm tracking-widest uppercase mb-4 block shadow-[0_0_10px_#39FF14]">
                        // System Support
                    </span>
                    <h2 className="font-syne font-bold text-4xl md:text-5xl text-white uppercase">
                        Protocols & FAQ
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 bg-white/5">
                            <button 
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-oswald text-xl text-white uppercase tracking-wide">
                                    {faq.question}
                                </span>
                                <span className="text-nexus-green">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-nexus-concrete leading-relaxed font-inter">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};