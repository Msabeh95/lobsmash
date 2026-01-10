"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="membership" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: App Pro Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-moss-green rounded-[40px] md:rounded-[48px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden group border border-white/10"
        >
          <div className="relative z-10">
            <div className="liquid-glass inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 md:mb-12 border border-white/20">The Pro Experience</div>
            
            <div className="mb-8 md:mb-12">
               <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">Pro Access</h3>
                  <Zap className="text-yellow-300 w-6 h-6 md:w-8 md:h-8 animate-pulse" fill="currentColor"/>
               </div>
               <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tighter">£79</span>
                  <span className="text-white/60 text-sm md:text-lg font-medium">/lifetime access</span>
               </div>
               <p className="text-white/60 text-xs md:text-sm mt-4 font-light">Join as a Founding Member. One-time payment, unlimited AI growth.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-y-4 mb-8 md:mb-12">
               <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest"><Check className="w-4 h-4 md:w-5 md:h-5 text-white/40" /> Unlimited Video Analysis</div>
               <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest"><Check className="w-4 h-4 md:w-5 md:h-5 text-white/40" /> Advanced Tactical Heatmaps</div>
               <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest"><Check className="w-4 h-4 md:w-5 md:h-5 text-white/40" /> Personalized Daily Training Feed</div>
               <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest"><Check className="w-4 h-4 md:w-5 md:h-5 text-white/40" /> Private Coach Messaging (AI Powered)</div>
            </div>
 
            <Button className="w-full rounded-[20px] md:rounded-[24px] bg-[#DFDCD4] text-moss-green hover:bg-white font-bold py-6 md:py-8 text-lg md:text-xl transition-all group-hover:-translate-y-1 shadow-2xl">
              Get Pro Early Access <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.div>

        {/* Right: Pitch */}
        <div className="lg:pl-8">
            <p className="text-moss-green text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Founding Member Access</p>
            <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95] mb-8 tracking-tighter">
              Upgrade your <br />
              <span className="text-moss-green italic">entire game.</span>
            </h2>
            <div className="space-y-6 mb-12">
               <p className="text-gray-900 text-xl font-medium leading-tight">
                  Coaching-quality insights for a fraction of the price.
               </p>
               <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                  Traditional coaching can cost £60–£90 per session. 
                  LobSmash gives you personalised feedback—any time you play.
               </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-moss-green/10 flex items-center justify-center text-moss-green shrink-0"><Check size={24} /></div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Elite Community Access</h4>
                    <p className="text-sm text-gray-500">Join the top 1% of padel enthusiasts in private discussions.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-moss-green/10 flex items-center justify-center text-moss-green shrink-0"><Check size={24} /></div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Lifetime Waitlist Benefits</h4>
                    <p className="text-sm text-gray-400">Locked-in pricing for all founding members on launch day.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
