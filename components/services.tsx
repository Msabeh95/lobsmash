"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Users2, Trophy } from "lucide-react";

export function Services() {
  return (
    <section id="how-it-works" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-24">
        <div>
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">The Ecosystem</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 tracking-tight">
            A complete training suite, <span className="text-moss-green">reimagined.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            From mental preparation to on-court coordination, we provide the tools that were previously only available to the World Padel Tour pros.
          </p>
          
          <div className="space-y-6">
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-moss-green/10 flex items-center justify-center text-moss-green"><BrainCircuit size={20}/></div>
                <div>
                   <p className="font-bold text-sm">Analyze</p>
                   <p className="text-xs text-gray-400">Shot detection, footwork & consistency.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500"><Users2 size={20}/></div>
                <div>
                   <p className="font-bold text-sm">Train</p>
                   <p className="text-xs text-gray-400">Weekly plans & Drills Library.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500"><Trophy size={20}/></div>
                <div>
                   <p className="font-bold text-sm">Insights</p>
                   <p className="text-xs text-gray-400">Tactical score & trend analysis.</p>
                </div>
             </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-[48px] overflow-hidden group shadow-2xl border border-black/5"
        >
          <Image src="/padel-action.png" alt="Training Ecosystem" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
             <div className="liquid-glass inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-white mb-6 border border-white/20">Training Engine</div>
             <h3 className="text-white font-bold text-2xl leading-tight mb-4 tracking-tight">Personalized Training System</h3>
             <p className="text-white/60 text-sm font-light">Customized weekly AI plans with drills for Volleys, Smashes, Bandejas, and Defensive play.</p>
          </div>
          <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer group/btn">
             <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative h-[600px] rounded-[48px] overflow-hidden group shadow-2xl border border-black/5"
        >
          <Image src="/padel-balls.png" alt="Deep Analytics" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
             <div className="liquid-glass inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-white mb-6 border border-white/20">Data Intelligence</div>
             <h3 className="text-white font-bold text-2xl leading-tight mb-4 tracking-tight">Deep Performance Insights</h3>
             <p className="text-white/60 text-sm font-light">Track your Apex Index™ progress with shot accuracy charts and tactical metrics.</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
