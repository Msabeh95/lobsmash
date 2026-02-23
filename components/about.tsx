"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="md:w-1/4">
        <p className="text-moss-green/60 text-[10px] font-bold tracking-[0.4em] uppercase">The Platform</p>
      </div>
      
      <div className="md:w-3/4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-gray-900 font-medium leading-[1.2] tracking-tight"
        >
          LobSmash is the world's first AI-powered platform{" "}
          <span className="text-moss-green font-serif italic">built for the committed.</span>{" "}
          We provide automated video analysis, tactical insights, and personalized training plans—bridged by <span className="text-moss-green font-serif italic">Apex</span>, the AI coach that evolves with your game.
        </motion.p>
      </div>
    </section>
  );
}
