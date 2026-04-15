"use client";

import { Reveal } from "@/components/motion-reveal";

const heroSlides = [
  {
    id: "formats",
    kicker: "LobSmash — League formats",
    title: "Rules that match your night",
    body: "Summit, Americano, Round Robin, or Mexicano—your leaderboard and scoring follow the format you run, not a generic table.",
  },
  {
    id: "sessions",
    kicker: "LobSmash — Sessions",
    title: "Courts, rosters, official results",
    body: "Run sessions with a guided flow for teams and scores. When a session completes, stats and ratings feed what players see next.",
  },
  {
    id: "skill",
    kicker: "LobSmash — global skill",
    title: "One number across every league",
    body: "Your skill travels with you—every completed session can refine your rating, with steadier movement once you've played enough games. One value across all leagues: reliability-weighted, Elo-style updates, shown as a 0–7 level on your profile with rated games and history over time.",
  },
  {
    id: "community",
    kicker: "LobSmash — Community",
    title: "Identity teammates recognise",
    body: "Profile, @username, friends, and a friends leaderboard—so your group stays connected beyond the last point.",
  },
] as const;

export function HeroHighlights() {
  return (
    <section
      id="highlights"
      className="section-surface-dark section-fill scroll-mt-28 relative border-court-b px-6"
      aria-label="LobSmash product highlights"
    >
      {/* Full-height sideline: centered on the section (page width); lg only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0 hidden lg:block"
      >
        <div className="absolute bottom-0 left-1/2 top-0 w-[var(--court-line-width)] -translate-x-1/2 bg-[var(--court-line-color)]" />
      </div>

      <div className="relative z-10 w-full py-4 md:py-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-0">
          {/* Left half: intro at top of column; sticky on lg */}
          <div className="flex h-full min-h-0 flex-col items-center justify-start lg:pr-8 xl:pr-10">
            <div className="w-full max-w-md text-center lg:sticky lg:top-28 lg:z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/55">
                LobSmash highlights
              </p>
              <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-white md:text-3xl">
                What you get with LobSmash
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Formats, sessions, global skill, and community—scroll the
                highlights while this intro stays in view on larger screens.
              </p>
              <div
                className="mx-auto mt-8 hidden w-16 lg:block"
                style={{
                  height: "var(--court-line-width)",
                  backgroundColor: "var(--court-line-color)",
                }}
                aria-hidden
              />
            </div>
          </div>

          {/* Right half: scrolling highlight panels */}
          <div className="flex min-w-0 flex-col gap-16 lg:gap-0 lg:pl-6 xl:pl-8">
            {heroSlides.map((slide, i) => (
              <Reveal key={slide.id}>
                <article
                  id={slide.id === "skill" ? "skill" : `highlight-${slide.id}`}
                  className="scroll-mt-28 lg:min-h-[min(70vh,520px)] lg:py-8"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                    {String(i + 1).padStart(2, "0")} · {slide.kicker}
                  </p>
                  <h3 className="font-display mt-4 text-xl font-bold text-white md:text-2xl">
                    {slide.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                    {slide.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

