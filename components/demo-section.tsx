"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { Reveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

type DemoAudience = "players" | "owners";

const tabs: { id: DemoAudience; label: string }[] = [
  { id: "players", label: "For Players" },
  { id: "owners", label: "For League owners" },
];

const placeholderCopy: Record<
  DemoAudience,
  { title: string; subtitle: string }
> = {
  players: {
    title: "Player demo",
    subtitle: "Join codes, sessions, standings, and skill—video coming soon.",
  },
  owners: {
    title: "League owner demo",
    subtitle: "Create leagues, run sessions, and share codes—video coming soon.",
  },
};

export function DemoSection() {
  const [audience, setAudience] = useState<DemoAudience>("players");
  const tablistId = useId();

  return (
    <section
      id="demo"
      className="section-surface-light section-fill scroll-mt-28 border-court-b px-6"
      aria-labelledby={`${tablistId}-heading`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[#002d62]/55">
            LobSmash — demo
          </p>
          <h2
            id={`${tablistId}-heading`}
            className="font-display mt-3 text-center text-3xl font-bold text-[#002d62] md:text-4xl"
          >
            See LobSmash in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#002d62]/75">
            One place for padel leagues: simple join codes, sessions on multiple
            courts, format-aware standings, and a skill rating that updates as
            you play—whether you&apos;re on court or running the night.
          </p>
        </Reveal>

        <div
          className="mx-auto mt-10 flex max-w-md flex-col items-stretch gap-3 sm:mx-0 sm:max-w-none sm:flex-row sm:justify-center"
          role="tablist"
          aria-label="Choose demo audience"
        >
          {tabs.map(({ id, label }) => {
            const selected = audience === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                id={`${tablistId}-tab-${id}`}
                aria-selected={selected}
                aria-controls={`${tablistId}-panel`}
                tabIndex={0}
                className={cn(
                  "rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99e600]",
                  selected
                    ? "bg-[#99e600] text-[#002d62] shadow-md shadow-[#99e600]/25"
                    : "border border-[#002d62]/20 bg-[#002d62]/[0.04] text-[#002d62]/90 hover:border-[#002d62]/30 hover:bg-[#002d62]/[0.07]",
                )}
                onClick={() => setAudience(id)}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div
          id={`${tablistId}-panel`}
          role="tabpanel"
          aria-labelledby={`${tablistId}-tab-${audience}`}
          className="relative mx-auto mt-10 max-w-4xl"
        >
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[#002d62]/12 bg-[var(--surface-page)] shadow-[0_24px_48px_-24px_rgba(0,45,98,0.15)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={audience}
                role="presentation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#002d62]/15 bg-[var(--surface-page)] text-[#002d62]/70 shadow-sm">
                  <Play className="h-7 w-7 pl-0.5" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="font-display text-lg font-bold text-[#002d62] md:text-xl">
                  {placeholderCopy[audience].title}
                </p>
                <p className="max-w-md text-sm text-[#002d62]/65">
                  {placeholderCopy[audience].subtitle}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#002d62]/40">
                  Video placeholder
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
