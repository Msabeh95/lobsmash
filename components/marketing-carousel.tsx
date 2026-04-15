"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  id: string;
  title: string;
  body: string;
  kicker?: string;
};

type MarketingCarouselProps = {
  slides: CarouselSlide[];
  className?: string;
  variant?: "light" | "dark";
  autoAdvanceMs?: number;
  /** Controlled index (enables external tabs / pills). */
  index?: number;
  onIndexChange?: (index: number) => void;
};

export function MarketingCarousel({
  slides,
  className,
  variant = "light",
  autoAdvanceMs = 0,
  index: controlledIndex,
  onIndexChange,
}: MarketingCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = controlledIndex !== undefined;
  const index = isControlled ? controlledIndex! : internalIndex;
  const len = slides.length;

  const goTo = useCallback(
    (raw: number) => {
      const next = ((raw % len) + len) % len;
      if (!isControlled) setInternalIndex(next);
      onIndexChange?.(next);
    },
    [len, isControlled, onIndexChange],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!autoAdvanceMs || len <= 1 || isControlled) return;
    const t = setInterval(
      () => setInternalIndex((prev) => (prev + 1) % len),
      autoAdvanceMs,
    );
    return () => clearInterval(t);
  }, [autoAdvanceMs, len, isControlled]);

  const isDark = variant === "dark";
  const ctrl = isDark
    ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
    : "border-white/25 bg-white/5 text-white hover:bg-white/10";

  return (
    <div className={cn("relative flex flex-col", className)}>
      <div
        className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[300px] md:min-h-[320px]"
        aria-roledescription="carousel"
        aria-label="Highlights"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col justify-center px-1 sm:px-2"
          >
            {slides[index].kicker ? (
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#99e600]">
                {slides[index].kicker}
              </p>
            ) : null}
            <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              {slides[index].title}
            </h3>
            <p
              className={cn(
                "mt-4 max-w-md text-sm leading-relaxed sm:text-base",
                isDark ? "text-white/75" : "text-white/70",
              )}
            >
              {slides[index].body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-1.5" role="tablist" aria-label="Slide">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-8 bg-[#99e600]"
                  : "w-1.5 bg-white/25 hover:bg-white/40",
              )}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition",
              ctrl,
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition",
              ctrl,
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
