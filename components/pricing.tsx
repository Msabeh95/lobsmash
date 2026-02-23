"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    "20–30 AI video analyses per month",
    "Advanced tactical breakdowns",
    "Full AI chat mode access",
    "All 50 training modules",
    "Progress tracking & performance insights",
    "Shareable match reports",
  ];

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
            <div className="liquid-glass inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 md:mb-12 border border-white/20">
               Elite Performance
            </div>
            
            <div className="mb-8 md:mb-10">
               <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">LobSmash Pro</h3>
                  <Zap className="text-yellow-300 w-6 h-6 md:w-8 md:h-8 animate-pulse" fill="currentColor"/>
               </div>
               <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tighter">£17.99</span>
                  <span className="text-white/60 text-sm md:text-lg font-medium">/month</span>
               </div>
               <div className="mt-4 inline-block text-white font-bold text-xs bg-white/10 px-3 py-1 rounded-lg">
                  £149/year – Save 30%
               </div>
            </div>
            
            <div className="grid grid-cols-1 gap-y-4 mb-8 md:mb-12">
               {features.map((feature, i) => (
                 <div key={i} className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">
                   <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-white/40" />
                   </div>
                   {feature}
                 </div>
               ))}
            </div>
 
            <Button 
              onClick={scrollToWaitlist}
              className="w-full rounded-[20px] md:rounded-[24px] bg-[#DFDCD4] text-moss-green hover:bg-white font-bold py-6 md:py-8 text-lg md:text-xl transition-all group-hover:-translate-y-1 shadow-2xl"
            >
              Start Improving Today <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
            
            <p className="text-center text-white/60 text-[10px] mt-6 font-bold uppercase tracking-widest">
               Cancel anytime. No commitment.
            </p>
          </div>
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.div>

        {/* Right: Pitch & Justification */}
        <div className="lg:pl-8 text-center lg:text-left">
            <p className="text-moss-green text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Professional Grade Coaching</p>
            <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95] mb-8 tracking-tighter">
              Train Smarter. <br />
              <span className="text-moss-green italic">Improve Faster.</span>
            </h2>
            <div className="space-y-6 mb-12">
               <p className="text-gray-900 text-xl font-medium leading-tight">
                  High-end coaching insights for the price of a single match.
               </p>
               <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                  Traditional padel coaching scales from £60 to £90 per session. Even a standard recreational session costs roughly £15 per player.
               </p>
               <p className="text-gray-900 text-lg font-bold leading-relaxed max-w-md mx-auto lg:mx-0">
                  LobSmash Pro gives you elite, 24/7 technical analysis for less than the cost of one session per month.
               </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 text-left">
                 <div className="w-12 h-12 rounded-2xl bg-moss-green/10 flex items-center justify-center text-moss-green shrink-0"><Check size={24} /></div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Elite Technical Feedback</h4>
                    <p className="text-sm text-gray-500">Stop guessing and start measuring. Every detail of your game, decoded by AI.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 text-left">
                 <div className="w-12 h-12 rounded-2xl bg-moss-green/10 flex items-center justify-center text-moss-green shrink-0"><Check size={24} /></div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Founding Member Beta</h4>
                    <p className="text-sm text-gray-500">Lock in your performance tracking as we expand our elite database.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
