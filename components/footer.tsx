"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-24 px-8 max-w-7xl mx-auto border-t border-black/5 flex flex-col items-center text-center">
      <Link href="/" className="inline-block mb-10">
        <Image 
          src="/lobsmash.png" 
          alt="LobSmash Logo" 
          width={280} 
          height={80} 
          className="h-14 w-auto object-contain opacity-80"
        />
      </Link>

      <div className="flex gap-8 mb-10">
        <a href="https://www.instagram.com/lobsmash.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors transition-transform hover:scale-110">
           <Instagram size={20} />
        </a>
        <a href="https://www.tiktok.com/@lobsmash.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors transition-transform hover:scale-110" title="TikTok">
          <svg 
            width="18" 
            height="18" 
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
        <a href="https://www.linkedin.com/company/lobsmash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors transition-transform hover:scale-110">
           <Linkedin size={20} />
        </a>
      </div>

      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
           © 2026 LobSmash Technologies Inc. All rights reserved.
      </p>
    </footer>
  );
}
