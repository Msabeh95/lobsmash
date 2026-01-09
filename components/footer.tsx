"use client";

import Link from "next/link";
import Image from "next/image";
import { Smartphone, BookOpen, ShieldCheck, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-24 px-8 max-w-7xl mx-auto border-t border-black/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        <div className="md:w-1/3">
          <Link href="/" className="inline-block mb-10">
            <Image 
              src="/lobsmash.png" 
              alt="LobSmash Logo" 
              width={280} 
              height={80} 
              className="h-14 w-auto object-contain opacity-80"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
            The intelligent training partner for the next generation of padel players. Master your game with AI-driven insights.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 flex-1 w-full md:w-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-moss-green" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">App</p>
            </div>
            <ul className="space-y-4 text-xs font-medium uppercase tracking-widest opacity-60">
              <li><Link href="#features" className="hover:text-moss-green transition-colors">AI Analysis</Link></li>
              <li><Link href="#how-it-works" className="hover:text-moss-green transition-colors">Training Plans</Link></li>
              <li><Link href="#membership" className="hover:text-moss-green transition-colors">Pro Membership</Link></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-moss-green" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Resources</p>
            </div>
            <ul className="space-y-4 text-xs font-medium uppercase tracking-widest opacity-60">
              <li><a href="#" className="hover:text-moss-green transition-colors">Padel Academy</a></li>
              <li><a href="#" className="hover:text-moss-green transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-moss-green transition-colors">App Status</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-moss-green" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Legal</p>
            </div>
            <ul className="space-y-4 text-xs font-medium uppercase tracking-widest opacity-60">
              <li><Link href="#" className="hover:text-moss-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-moss-green transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
           © 2026 LobSmash Technologies Inc. All rights reserved.
        </p>
        <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter size={18} />
            </a>
        </div>
      </div>
    </footer>
  );
}
