import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-court-t bg-[#002d62] px-8 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <Link href="/" className="mb-6 inline-block">
          <Image
            src="/lobsmash-logo-removebg-preview.png"
            alt="LobSmash"
            width={220}
            height={64}
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        <p className="mb-8 max-w-md font-display text-sm font-semibold text-white/90 md:text-base">
          LobSmash — the padel league home for standings, sessions, and skill.
        </p>

        <p className="mb-10 max-w-lg text-sm text-white/70">
          Built with Next.js, React, Tailwind CSS, Clerk, and Supabase.
          Technical setup and self-hosting live in the project README.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/45">
          <a href="#for-teams" className="transition hover:text-white">
            Who it&apos;s for
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#skill" className="transition hover:text-white">
            Skill
          </a>
        </div>

        <div className="mb-10 flex gap-8">
          <a
            href="https://www.instagram.com/lobsmash.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition hover:scale-110 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.tiktok.com/@lobsmash.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition hover:scale-110 hover:text-white"
            aria-label="TikTok"
            title="TikTok"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/lobsmash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition hover:scale-110 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
          © {new Date().getFullYear()} LobSmash Technologies Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
