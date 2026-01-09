"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Video, BarChart3 } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="px-8 max-w-7xl mx-auto pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[550px]">
        {/* Card 1: AI Swing Analysis */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#111827] rounded-[50px] p-12 flex flex-col items-start justify-between text-white border border-white/5 relative overflow-hidden group shadow-2xl"
        >
          <div className="relative z-10 w-full">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-16 border border-white/10 text-moss-green transition-transform group-hover:rotate-6">
               <Video className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold leading-none mb-6 font-sans uppercase tracking-tighter">
              Clinical <br />
              Swing Precision
            </h3>
            <p className="text-white/40 text-base leading-relaxed max-w-xs font-light">
              Our neural engine deconstructs every millisecond of your motion. Achieve World Padel Tour standards with automated biometric feedback.
            </p>
          </div>
          
          <div className="relative z-10 py-4 px-1 border-b border-white/10 w-full">
             <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">LobSmash Vision™ Enabled</p>
          </div>

        </motion.div>

        {/* Card 2: Tactical Insights */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[50px] overflow-hidden group shadow-2xl border border-black/5"
        >
          <Image
            src="/padel-coach.png"
            alt="Elite Tactical Analysis"
            fill
            className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/5 to-transparent flex flex-col items-start justify-end p-12">
             <span className="text-black/40 text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Strategic Mastery</span>
             <h3 className="text-gray-900 text-2xl font-extrabold uppercase tracking-tighter mb-6 font-sans leading-none">Tactical Match Decoding</h3>
             <div className="liquid-glass w-full px-8 py-3 rounded-full text-gray-900 text-xs font-bold uppercase tracking-widest border border-black/10 text-center">
                Request Strategy Blueprint
             </div>
          </div>
        </motion.div>

        {/* Card 3: Performance Tracking */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[50px] p-12 flex flex-col border border-black/5 shadow-xl group transition-all duration-500"
        >
          <div className="flex justify-between items-start mb-16">
             <div>
                <h2 className="text-7xl font-light tracking-tighter text-black/90">92.4</h2>
                <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.4em] mt-2">The Apex Index™</p>
             </div>
             <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-moss-green">
                <BarChart3 className="w-6 h-6" />
             </div>
          </div>
          
          <p className="text-gray-500 mb-16 text-base font-light leading-relaxed">
            Measure your status against the elite. A mathematical representation of your on-court dominance.
          </p>
          
          <div className="space-y-8 mt-auto">
            <div className="space-y-3">
              <div className="flex justify-between text-[9px] font-bold uppercase tracking-[0.4em]">
                <span>Neural Output</span>
                <span className="text-moss-green">94%</span>
              </div>
              <div className="h-[2px] w-full bg-black/[0.03] overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "94%" }}
                   viewport={{ once: true }}
                   className="h-full bg-moss-green" 
                 />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[9px] font-bold uppercase tracking-[0.4em]">
                <span>Structural Bias</span>
                <span className="text-moss-green">81%</span>
              </div>
              <div className="h-[2px] w-full bg-black/[0.03] overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "81%" }}
                   viewport={{ once: true }}
                   className="h-full bg-moss-green" 
                 />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
