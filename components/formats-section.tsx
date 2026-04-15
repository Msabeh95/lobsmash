"use client";

import { useState } from "react";
import { MarketingCarousel, type CarouselSlide } from "@/components/marketing-carousel";
import { Reveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

const formatSlides: CarouselSlide[] = [
  {
    id: "summit",
    kicker: "Summit",
    title: "Move up or down the courts",
    body: "You move up or down courts by winning. We track the top court—that is how we line up who is ahead.",
  },
  {
    id: "americano",
    kicker: "Americano",
    title: "Rotate partners, total points tell the story",
    body: "You swap partners each game. We add up points from every game to see who is doing best.",
  },
  {
    id: "round-robin",
    kicker: "Round Robin",
    title: "Fair rotations, full scores",
    body: "Everyone gets fair turns against different people. We use full scores from all courts to rank players.",
  },
  {
    id: "mexicano",
    kicker: "Mexicano",
    title: "Mixer energy, points across the session",
    body: "Partners and courts shuffle like a fun mixer. We count points from every game across the session.",
  },
];

export function FormatsSection() {
  const [slide, setSlide] = useState(0);

  return (
    <section
      id="formats"
      className="section-surface-dark section-fill relative overflow-hidden border-court-b px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(153,230,0,0.09),transparent_50%),linear-gradient(180deg,#001a3d_0%,#002d62_45%,#00234d_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#99e600]/[0.06] blur-3xl md:right-[5%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <Reveal>
          <div className="text-center">
            <div
              className="mx-auto mb-6 h-1 w-14 rounded-full bg-[#99e600] shadow-[0_0_28px_rgba(153,230,0,0.35)]"
              aria-hidden
            />
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-white/50">
              LobSmash — league formats
            </p>
            <h2 className="font-display mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
              <span className="block">Rankings that match</span>
              <span className="mt-2 block text-[#99e600] md:mt-3">
                how your night runs.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/72 md:text-lg">
              Choose a format when you create a league—it drives scoring, the
              leaderboard, and how skill updates apply.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 md:mt-12">
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
              Compare formats
            </p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              {formatSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSlide(i)}
                  className={cn(
                    "rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition",
                    i === slide
                      ? "bg-[#99e600] text-[#002d62] shadow-lg shadow-[#99e600]/20"
                      : "border border-white/15 bg-white/[0.06] text-white/75 hover:border-white/25 hover:bg-white/10",
                  )}
                  aria-pressed={i === slide}
                  aria-label={`Show ${s.kicker} format`}
                >
                  {s.kicker}
                </button>
              ))}
            </div>

            <div
              className="rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-md sm:p-8 md:p-10"
            >
              <MarketingCarousel
                slides={formatSlides}
                autoAdvanceMs={0}
                variant="dark"
                index={slide}
                onIndexChange={setSlide}
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/58">
            Each league has a short code and a shareable invite URL. Joining is
            always a request until an owner or admin approves—so codes don&apos;t
            add strangers without consent.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
