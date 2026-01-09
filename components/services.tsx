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
                   <p className="font-bold text-sm">AI Training Drills</p>
                   <p className="text-xs text-gray-400">Customized workouts for your level.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500"><Users2 size={20}/></div>
                <div>
                   <p className="font-bold text-sm">Community Challenges</p>
                   <p className="text-xs text-gray-400">Compete with players worldwide.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500"><Trophy size={20}/></div>
                <div>
                   <p className="font-bold text-sm">Tourn. Preparation</p>
                   <p className="text-xs text-gray-400">Tactical prep for your next match.</p>
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
             <h3 className="text-white font-bold text-2xl leading-tight mb-4 tracking-tight">AI-Generated Personal Training Plans</h3>
             <p className="text-white/60 text-sm font-light">Get a dynamic weekly plan that evolves as your LobSmash Index™ improves.</p>
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
             <h3 className="text-white font-bold text-2xl leading-tight mb-4 tracking-tight">Statistical Edge on Every Match</h3>
             <p className="text-white/60 text-sm font-light">Understand why you win (and why you lose) with raw data analytics from your match footage.</p>
          </div>
          <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-moss-green flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform cursor-pointer">
             <span className="text-[10px] font-bold uppercase tracking-widest">Live</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
