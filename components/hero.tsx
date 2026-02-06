"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-40 pb-24 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Left Column: Dark Typography & Refined Hook */}
      <div className="flex-1 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-moss-green text-[9px] font-bold uppercase tracking-[0.6em] pb-3 border-b border-moss-green/10 inline-block">
            The Elite AI Academy
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-6 mb-12"
        >
          <h1 className="text-secondary-foreground text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-none">
            Your AI Padel Coach
          </h1>
          
          <h2 className="text-moss-green text-5xl md:text-7xl font-serif italic leading-[0.9]">
            Master Every Shot
          </h2>
          
          <h3 className="text-secondary-foreground/70 text-sm md:text-lg font-medium max-w-xl leading-relaxed tracking-wide mx-auto lg:mx-0">
            Elite Technical Analysis & Pro Analytics in Your Pocket. <br className="hidden md:block"/>
            Experience the future of the sport.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8"
        >
          <Button 
            onClick={scrollToWaitlist}
            className="rounded-full bg-moss-green text-white hover:bg-moss-green/90 font-bold px-10 py-7 text-base shadow-lg transition-all hover:scale-105 active:scale-95 group uppercase tracking-widest"
          >
            Request Access
          </Button>

          <motion.div 
            className="relative group/badge cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <img 
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1626220800&h=64096d29994c9f1311029e28ac532662" 
                alt="Download on the App Store"
                className="h-[52px] w-auto transition-all duration-300 group-hover/badge:brightness-[0.2] group-hover/badge:blur-[2px]"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[11px] font-bold uppercase tracking-[0.25em] whitespace-nowrap">
                   Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links centered under CTA block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-400"
        >
          <a href="https://www.instagram.com/lobsmash.ai" target="_blank" rel="noopener noreferrer" className="hover:text-moss-green transition-colors transition-transform hover:scale-110">
            <Instagram size={18} />
          </a>
          <a href="https://www.tiktok.com/@lobsmash.ai" target="_blank" rel="noopener noreferrer" className="hover:text-moss-green transition-colors transition-transform hover:scale-110" title="TikTok">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/lobsmash" target="_blank" rel="noopener noreferrer" className="hover:text-moss-green transition-colors transition-transform hover:scale-110">
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      {/* Right Column: High-Density Image (Sharp Asset) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex-1 relative w-full h-[400px] md:h-[550px] group"
      >
        <div className="absolute -inset-4 bg-moss-green/10 blur-3xl rounded-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative w-full h-full rounded-[60px] overflow-hidden shadow-[0_64px_128px_-32px_rgba(123,141,62,0.35)] border border-black/5">
          {/* Refined Player Analysis Academy Imagery */}
          <Image
            src="/padel-player-analysis.png"
            alt="Elite Padel Academy - AI Shot Analysis"
            fill
            className="object-cover transition-transform duration-[4000ms] hover:scale-105"
            quality={90}
            priority
          />
          {/* Minimalist Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
