"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzYxq5m2sgmNIj0dysNIeY5uQDrE4DQvVpwKKH0O7WSrU9S-RCuDSpNrd55n9PNntMG/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-beige rounded-[48px] p-8 md:p-16 overflow-hidden border border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center min-h-[400px]">
        
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-moss-green text-[9px] font-bold uppercase tracking-[0.5em] pb-2 border-b border-moss-green/10 inline-block">
              Founding Membership
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-gray-900 leading-tight"
          >
            Requested Access <br className="hidden md:block" />
            Is Now Open.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base mb-10 font-medium leading-relaxed max-w-xl mx-auto"
          >
            Join an elite group of founding members. Experience the future of padel through the LobSmash AI engine.
          </motion.p>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-moss-green/5 border border-moss-green/10 p-8 rounded-[32px] shadow-sm inline-block"
            >
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-moss-green">Access Requested.</h3>
              <p className="text-gray-600 text-sm">Verification email is on its way to your inbox.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto w-full">
              <div className="flex-1 relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-moss-green/30 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Official Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/5 hover:bg-black/10 focus:bg-white focus:shadow-xl py-5 pl-12 pr-6 rounded-full border border-black/5 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400 font-medium"
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={status === "loading"}
                className="rounded-full bg-moss-green text-white hover:bg-moss-green/90 font-bold px-12 py-5 h-auto text-[11px] transition-all active:scale-95 uppercase tracking-[0.2em] shadow-lg"
              >
                {status === "loading" ? "Processing" : "Secure Early Access"}
              </Button>
            </form>
          )}
          
          <div className="mt-12 flex items-center justify-center gap-12 opacity-40">
             <div className="text-center">
                <p className="text-gray-900 font-bold text-base mb-0.5">279</p>
                <p className="text-[9px] uppercase font-bold tracking-[0.1em]">Sign ups</p>
             </div>
             <div className="w-[1px] h-8 bg-black/10" />
             <div className="text-center">
                <p className="text-gray-900 font-bold text-base mb-0.5">Phase 1</p>
                <p className="text-[9px] uppercase font-bold tracking-[0.1em]">Onboarding</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
