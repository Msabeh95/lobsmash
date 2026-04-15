"use client";

import { motion } from "framer-motion";
import { Shield, UserCog, Users } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion-reveal";

const audiences = [
  {
    title: "Club or league organisers",
    icon: UserCog,
    description:
      "Create leagues, approve join requests, share codes and invite links, and oversee rosters and sessions—all in one place.",
  },
  {
    title: "Admins",
    icon: Shield,
    description:
      "Help manage the league alongside the owner. Permissions follow your role so the right people can enter results and keep nights moving.",
  },
  {
    title: "Players",
    icon: Users,
    description:
      "Join leagues, play in sessions, see format-aware standings, track skill over time, and connect with friends.",
  },
] as const;

export function AudienceSection() {
  return (
    <section
      id="for-teams"
      className="section-surface-light section-fill relative overflow-hidden border-court-b px-6"
    >
      <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#99e600]/[0.07] blur-3xl md:right-[8%]" />
      <div className="absolute bottom-0 left-0 -z-10 h-48 w-48 rounded-full bg-[#002d62]/[0.04] blur-2xl" />

      <div className="relative mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="text-center">
            <div
              className="mx-auto mb-6 h-1 w-14 rounded-full bg-[#99e600] shadow-[0_0_24px_rgba(153,230,0,0.45)]"
              aria-hidden
            />
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#002d62]/50">
              LobSmash — who it&apos;s for
            </p>
            <h2 className="font-display mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              <span className="block text-[#002d62]">Three roles.</span>
              <span className="mt-2 block text-[#99e600] md:mt-3">One home.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#002d62]/72 md:text-lg">
              From the organiser who runs the night to the player chasing the
              next point—padel-first: doubles, courts, partners, walls.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-14 flex flex-col gap-5 md:mt-16 md:gap-6">
          {audiences.map(({ title, icon: Icon, description }, index) => (
            <RevealItem key={title}>
              <motion.article
                initial={false}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="group relative overflow-hidden rounded-2xl border border-[#002d62]/[0.09] bg-[var(--surface-page)] p-6 shadow-[0_12px_40px_-20px_rgba(0,45,98,0.2)] md:p-8"
              >
                <div
                  className="absolute inset-y-3 left-0 w-1 rounded-full bg-gradient-to-b from-[#99e600] to-[#7bc400] opacity-90"
                  aria-hidden
                />
                <div className="flex flex-col gap-5 pl-5 sm:flex-row sm:items-start sm:gap-8 sm:pl-6">
                  <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                    <span className="font-display text-3xl font-extrabold leading-none tabular-nums text-[#002d62]/[0.12] transition group-hover:text-[#99e600]/30 md:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#002d62]/10 bg-[var(--surface-page)] text-[#002d62] shadow-inner">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#002d62] md:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#002d62]/75 md:text-base">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
