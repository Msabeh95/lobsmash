"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "450k+", label: "Swings Analyzed" },
  { value: "12,900", label: "Matches Processed" },
  { value: "98.4%", label: "AI Prediction Accuracy" },
  { value: "152", label: "Active Pro Coaches" },
];

export function Facts() {
  return (
    <section id="analytics" className="py-24 px-8 max-w-7xl mx-auto border-t border-black/5">
      <div className="text-center mb-16">
        <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Live Platform Metrics</p>
        <h2 className="text-2xl font-bold tracking-tight">Our neural engine is constantly learning from the best.</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <h3 className="text-5xl font-bold mb-2 tracking-tighter group-hover:text-moss-green transition-colors">{stat.value}</h3>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.15em]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
