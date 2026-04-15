"use client";

import { motion } from "framer-motion";

/** Restrained padel motifs: court grid + floating ball — decorative only */
export function PadelHeroDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="padel-hero-mesh absolute inset-0 opacity-[0.65]" />
      <div className="absolute -right-8 top-1/4 h-64 w-64 rounded-full bg-[#99e600]/10 blur-3xl" />
      <div className="absolute -left-12 bottom-1/4 h-56 w-56 rounded-full bg-white/8 blur-3xl" />

      <motion.div
        className="absolute bottom-[18%] right-[12%] md:right-[20%]"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      >
        <svg width={44} height={44} viewBox="0 0 44 44" className="drop-shadow-sm">
          <circle cx={22} cy={22} r={18} fill="#99e600" opacity={0.9} />
          <path
            d="M 14 22 Q 22 16 30 22"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.85}
          />
          <path
            d="M 14 24 Q 22 30 30 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.85}
          />
        </svg>
      </motion.div>
    </div>
  );
}
