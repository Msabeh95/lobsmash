"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { appSignUpUrl } from "@/lib/app-url";
import { Reveal } from "@/components/motion-reveal";

export function FinalCta() {
  return (
    <section className="section-surface-light border-court-b px-6 py-20 md:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center rounded-[2rem] border border-[#002d62]/12 bg-[var(--surface-page)] px-8 py-14 text-center text-[#002d62] shadow-xl shadow-[#002d62]/10 md:px-16 md:py-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#002d62]/45">
            LobSmash
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
            Run your league on LobSmash
          </h2>
          <p className="mt-4 max-w-lg text-sm text-[#002d62]/80 md:text-base">
            Join codes, sessions on multiple courts, format-aware standings, and
            a skill rating that travels with you.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={appSignUpUrl()}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#99e600] px-10 py-4 text-sm font-bold uppercase tracking-wide text-[#002d62] transition hover:bg-[#b3ff33]"
            >
              Create free account
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
