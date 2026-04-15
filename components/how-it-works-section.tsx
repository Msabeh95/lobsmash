import { Reveal, RevealItem, RevealStagger } from "@/components/motion-reveal";

/** Mock data — replace with real team info and photos when ready. */
const teamPlaceholders = [
  {
    id: "placeholder-1",
    name: "Alex Rivera",
    title: "Co-founder · Product & leagues",
    email: "alex@example.com",
    location: "Toronto, ON",
    bio: "Former league organiser who wanted fewer spreadsheets on match night. Owns roadmap, partnerships, and the player experience.",
    initials: "AR",
  },
  {
    id: "placeholder-2",
    name: "Jordan Chen",
    title: "Co-founder · Engineering",
    email: "jordan@example.com",
    location: "Vancouver, BC",
    bio: "Full-stack builder focused on reliable sessions, standings, and skill. Previously shipped tools for sports and community products.",
    initials: "JC",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="about-team"
      className="section-surface-light section-fill border-court-y px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[#002d62]/50">
            LobSmash — about the team
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold text-[#002d62] md:text-4xl">
            Built by people who run leagues
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#002d62]/75">
            We are product builders, engineers, and padel enthusiasts focused on
            one mission: help every league run smoother and feel more connected.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid max-w-4xl gap-8 md:mx-auto md:grid-cols-2">
          {teamPlaceholders.map(
            ({ id, name, title, email, location, bio, initials }) => (
              <RevealItem key={id}>
                <div className="flex h-full flex-col rounded-2xl border border-dashed border-[#002d62]/25 bg-[var(--surface-page)] p-8 shadow-sm">
                  <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                    <div
                      className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#002d62]/20 bg-[#002d62]/[0.06] font-display text-lg font-bold text-[#002d62]/60"
                      aria-hidden
                    >
                      {initials}
                    </div>
                    <div className="mt-6 sm:ml-6 sm:mt-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#002d62]/45">
                        Photo placeholder
                      </p>
                      <h3 className="font-display mt-1 text-xl font-bold text-[#002d62]">
                        {name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#3d7a00]">
                        {title}
                      </p>
                      <p className="mt-2 text-xs text-[#002d62]/55">
                        {location} ·{" "}
                        <span className="underline decoration-[#002d62]/20 underline-offset-2">
                          {email}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-[#002d62]/80">
                    {bio}
                  </p>
                </div>
              </RevealItem>
            ),
          )}
        </RevealStagger>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-medium text-[#3d7a00]">
            We are here for the long game, building the most trusted home for
            local padel competition.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
