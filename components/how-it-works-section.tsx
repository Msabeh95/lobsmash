import { Reveal, RevealItem, RevealStagger } from "@/components/motion-reveal";

const steps = [
  {
    step: "01",
    title: "Sign up & profile",
    body: "Create a secure account, then set your display name, @username, and player profile—play style, side, experience, strengths, and areas to grow.",
  },
  {
    step: "02",
    title: "Create or join a league",
    body: "Start a new league with a format, or request to join with a code or invite link. Organisers approve join requests before you’re in.",
  },
  {
    step: "03",
    title: "Run sessions & enter results",
    body: "Open your league, start a session, and walk through the wizard—teams, courts, and results for your format. Complete the session when the night’s done.",
  },
  {
    step: "04",
    title: "Standings & skill",
    body: "Standings update automatically. Your global skill rating can refine after rated sessions—the more you play, the steadier the signal.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-surface-light section-fill border-court-y px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[#002d62]/50">
            LobSmash — how it works
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold text-[#002d62] md:text-4xl">
            From first login to league night
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#002d62]/75">
            A straight path: profile → league → sessions → standings and skill.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 md:grid-cols-2">
          {steps.map(({ step, title, body }) => (
            <RevealItem key={step}>
              <div className="h-full rounded-2xl border border-[#002d62]/10 bg-[var(--surface-page)] p-8 shadow-sm">
                <span className="font-display text-sm font-bold text-[#3d7a00]">
                  {step}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold text-[#002d62]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#002d62]/80">
                  {body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-medium text-[#3d7a00]">
            Then add friends, compare on the friends leaderboard, and keep your
            profile as your padel home base.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
