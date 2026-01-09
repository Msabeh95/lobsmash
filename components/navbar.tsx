"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="liquid-glass rounded-full px-8 py-2 flex justify-between items-center bg-transparent">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image 
            src="/lobsmash.png" 
            alt="LobSmash Logo" 
            width={320} 
            height={80} 
            className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900/60">
          <Link href="#features" className="hover:text-gray-900 transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-gray-900 transition-colors">How it Works</Link>
          <Link href="#analytics" className="hover:text-gray-900 transition-colors">Analytics</Link>
          <Link href="#membership" className="hover:text-gray-900 transition-colors">Membership</Link>
        </div>

        <motion.button 
          onClick={scrollToWaitlist}
          className="relative group overflow-hidden rounded-full bg-gray-900 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all active:scale-95"
          initial="initial"
          whileHover="hover"
        >
          {/* Circle Expand Effect */}
          <motion.div
            variants={{
              initial: { scale: 0, x: "-50%", y: "-50%" },
              hover: { scale: 1.5 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute left-[80%] top-[50%] -z-10 h-32 w-32 rounded-full bg-moss-green"
          />
          
          <span className="relative z-10 flex items-center gap-2">
            Secure Elite Access 
            <motion.div
              variants={{
                initial: { rotate: 0 },
                hover: { rotate: 90 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <ArrowRight className="w-3 h-3" />
            </motion.div>
          </span>
        </motion.button>
      </div>
    </nav>
  );
}
