"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { appSignUpUrl } from "@/lib/app-url";
import { PadelHeroDecoration } from "@/components/padel-hero-decoration";

export function Hero() {
  return (
    <section className="section-surface-dark relative flex min-h-[100dvh] flex-col overflow-hidden border-court-b">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#00336f] via-[#002d62] to-[#001a3d]"
        aria-hidden
      />
      <PadelHeroDecoration />

      <p
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-[42%] select-none font-display text-[clamp(3rem,16vw,12rem)] font-extrabold leading-none text-white/[0.05] md:-translate-y-[38%]"
        aria-hidden
      >
        LobSmash
      </p>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-2xl text-center"
        >
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.4em] text-white/55">
            LobSmash
          </span>

          <h1 className="font-display mx-auto mt-6 max-w-4xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:mt-7 sm:text-5xl md:text-6xl lg:max-w-5xl lg:text-[2.85rem] lg:leading-[1.08]">
            <span className="block">Run your league.</span>
            <span className="mt-2 block text-[#99e600] sm:mt-3">
              Climb your LobSmash Rating.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Create leagues, track matches, and compete with a dynamic rating
            that ranks every player.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`${appSignUpUrl()}?intent=league`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#99e600] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#002d62] shadow-md shadow-[#99e600]/25 transition hover:bg-[#b3ff33] hover:shadow-lg sm:px-9"
              >
                Start a League
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </motion.div>
            <Link
              href={`${appSignUpUrl()}?intent=player`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/35 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/10"
            >
              Join as a Player
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
