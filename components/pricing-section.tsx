import Link from "next/link";
import { Check } from "lucide-react";
import { appSignUpUrl } from "@/lib/app-url";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion-reveal";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  href: string;
  featured?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "For players who join leagues and want standings, skill, and friends in one place.",
    cta: "Start free",
    href: appSignUpUrl(),
    features: [
      "Player profile and @username",
      "Join unlimited leagues as a member",
      "Play in sessions and view format-aware standings",
      "Global skill rating and history",
      "Friends and friends leaderboard",
      "Public league preview links (/join/code)",
    ],
  },
  {
    name: "Club",
    price: "$29",
    cadence: "month",
    description: "For organisers running a single club or league with full control.",
    cta: "Get Club",
    href: appSignUpUrl(),
    featured: true,
    features: [
      "Everything in Free",
      "Create and own up to 3 active leagues",
      "Owner and admin roles, join approvals",
      "All formats: Summit, Americano, Round Robin, Mexicano",
      "Session wizard, results, editable sessions where allowed",
      "Email support (48h)",
    ],
  },
  {
    name: "Organization",
    price: "$79",
    cadence: "month",
    description: "For multi-league programmes, venues, or schools with higher volume.",
    cta: "Get Organization",
    href: appSignUpUrl(),
    features: [
      "Everything in Club",
      "Up to 15 active leagues",
      "Priority email support (24h)",
      "Export-friendly session and standings data (CSV) where available",
      "Pair stats and advanced leaderboard views (format-dependent)",
      "Roadmap input and early feature access",
    ],
  },
  {
    name: "Custom",
    price: "Let's talk",
    cadence: "tailored",
    description: "Enterprise, federations, and white-glove rollout.",
    cta: "Contact sales",
    href: "mailto:hello@lobsmash.com?subject=LobSmash%20Custom%20plan",
    features: [
      "Unlimited leagues and dedicated success planning",
      "SSO / SCIM (when available on your stack)",
      "Custom contracts, SLAs, and invoicing",
      "White-label and branding options",
      "Dedicated support channel and onboarding",
      "Custom integrations and API access (roadmap-dependent)",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-surface-dark section-fill scroll-mt-28 border-court-y px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
            LobSmash — pricing
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold text-white md:text-4xl">
            From free to fully tailored
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            Start at zero for players. Scale when you run LobSmash leagues and
            need more capacity and support. Final pricing may vary by region and
            billing cadence—contact us for Custom.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-8 lg:grid-cols-4">
          {tiers.map((tier) => (
            <RevealItem key={tier.name}>
            <div
              className={
                tier.featured
                  ? "relative flex h-full flex-col rounded-2xl border-2 border-[#99e600] bg-[#99e600]/10 p-8 shadow-md"
                  : "flex h-full flex-col rounded-2xl border border-white/20 bg-white/5 p-8"
              }
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#99e600] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#002d62]">
                  Popular
                </span>
              ) : null}
              <h3 className="font-display text-xl font-bold text-white">
                {tier.name}
              </h3>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-1 gap-y-0">
                <span className="font-display text-3xl font-extrabold text-white">
                  {tier.price}
                </span>
                {tier.cadence !== "tailored" && tier.cadence !== "forever" ? (
                  <span className="text-sm text-white/65">/ {tier.cadence}</span>
                ) : (
                  <span className="text-sm capitalize text-white/65">
                    {tier.cadence}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-white/90">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#99e600]"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {tier.href.startsWith("mailto:") ? (
                <a
                  href={tier.href}
                  className={
                    tier.featured
                      ? "mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#99e600] py-3.5 text-center text-sm font-bold uppercase tracking-wide text-[#002d62] transition hover:bg-[#b3ff33]"
                      : "mt-8 inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-transparent py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/50 hover:bg-white/10"
                  }
                >
                  {tier.cta}
                </a>
              ) : (
                <Link
                  href={tier.href}
                  className={
                    tier.featured
                      ? "mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#99e600] py-3.5 text-center text-sm font-bold uppercase tracking-wide text-[#002d62] transition hover:bg-[#b3ff33]"
                      : "mt-8 inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-transparent py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/50 hover:bg-white/10"
                  }
                >
                  {tier.cta}
                </Link>
              )}
            </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

