const inviteUrl =
  "https://discord.com/oauth2/authorize?client_id=1483251699647774791&scope=bot%20applications.commands&permissions=3148800";
const supportUrl = "https://discord.gg/jukebox";

const stats = [
  { label: "Servers queued", value: "2.3K+" },
  { label: "Tracks played weekly", value: "48K" },
  { label: "Latency", value: "< 150 ms" },
];

const features = [
  {
    title: "Fast, simple playback",
    description:
      "Play tracks, queue songs, skip cleanly, and keep music flowing without turning your server into a control panel nightmare.",
    detail: "Built for everyday Discord use",
  },
  {
    title: "Server-friendly controls",
    description:
      "DJ role controls, queue management, and moderator-friendly behavior keep shared listening sessions under control.",
    detail: "Made for real communities",
  },
  {
    title: "Built to keep improving",
    description:
      "Jukebox keeps growing with better automation, smarter queue tools, and quality-of-life upgrades shaped by the communities using it.",
    detail: "Community-backed roadmap",
  },
];

const steps = [
  {
    title: "Invite Jukebox",
    description:
      "Add the bot to your server, let it join voice, and keep the setup dead simple for members and moderators.",
  },
  {
    title: "Queue your music",
    description:
      "Use straightforward slash commands to play songs, manage the queue, and keep the mood moving.",
  },
  {
    title: "Support the project",
    description:
      "If Jukebox becomes part of your server, back the project through the support community so it stays reliable, online, and actively improved.",
  },
];

const commands = [
  {
    name: "/play",
    usage: "/play <song or link>",
    description: "Queue a song or playlist and start playback fast.",
  },
  {
    name: "/queue",
    usage: "/queue",
    description: "See what is coming up and keep the session organized.",
  },
  {
    name: "/skip",
    usage: "/skip",
    description: "Move on cleanly when the room is ready for the next track.",
  },
  {
    name: "/pause",
    usage: "/pause",
    description: "Pause the current track without losing the queue.",
  },
  {
    name: "/resume",
    usage: "/resume",
    description: "Pick the music back up right where it left off.",
  },
  {
    name: "/stop",
    usage: "/stop",
    description: "Clear playback when the session is over.",
  },
];

const supportWays = [
  "Join the support server and stay close to updates.",
  "Share feedback, issues, and feature ideas from real server use.",
  "Help keep Jukebox sustainable so uptime and improvements stay a priority.",
  "Bring other communities in if you want to help the project grow.",
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-[-10%] h-[420px] opacity-70 blur-3xl"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(247,37,133,0.35) 0%, rgba(247,37,133,0) 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-25%] h-[520px] opacity-50 blur-[120px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,255,0.25) 0%, rgba(0,245,255,0) 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        <header className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#f72585]" />
            Community-supported Discord music bot
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase text-white/70">
              Jukebox · Your Discord music machine
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Bring JukeBox to your server — and help keep it running.
            </h1>
            <p className="max-w-3xl text-lg text-white/70 sm:text-xl">
              Jukebox gives your server a clean, retro-styled music experience with simple controls,
              smooth queue handling, and a support-driven roadmap focused on keeping the bot online,
              reliable, and worth using every day.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/75 backdrop-blur sm:p-6">
            <p className="font-semibold uppercase tracking-[0.28em] text-white/55">
              Keep Jukebox operational
            </p>
            <p className="mt-3 max-w-3xl text-base text-white/80">
              If Jukebox improves your server, backing the project through the support community helps
              cover the work behind uptime, fixes, and the next round of improvements.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={supportUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#f72585] via-[#d91ef5] to-[#00f5ff] px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(247,37,133,0.45)] transition hover:translate-y-0.5"
            >
              Support the project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={inviteUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              Invite the bot
            </a>
          </div>

          <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </header>

        <section id="features" className="mt-20 space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Features
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Built for real server sessions.
            </h2>
            <p className="max-w-2xl text-white/70">
              Jukebox is designed to feel clean, fast, and fun now — with the project supported in a
              way that keeps the essentials strong and the experience getting better over time.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  {feature.detail}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              How it works
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Invite it, queue tracks, keep the room moving.
            </h2>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-lg font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-white/70">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#11062d]/90 to-[#030014]/60 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Why people back it
            </p>
            <ul className="mt-6 space-y-5 text-sm text-white/80">
              {supportWays.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-1 h-2.5 w-2.5 rounded-full ${
                      ["bg-[#f72585]", "bg-[#00f5ff]", "bg-[#f7b500]", "bg-[#ac6bff]"][index]
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-24 space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Commands
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Quick controls your server will actually use.
            </h2>
            <p className="max-w-2xl text-white/70">
              Simple commands first. The goal is a bot that feels easy to run, dependable in voice,
              and worth supporting because it stays sharp.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {commands.map((command) => (
              <div
                key={command.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 backdrop-blur"
              >
                <div className="flex items-center justify-between text-white">
                  <p className="text-base font-semibold">{command.name}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Live
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-white/70">{command.usage}</p>
                <p className="mt-3 text-white/70">{command.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Support Jukebox
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Help keep the bot stable, available, and improving.
            </h2>
            <p className="max-w-2xl text-white/70">
              Jukebox is meant to be useful first. If your community enjoys it, supporting the project
              helps keep hosting, maintenance, and product improvements moving in the right direction.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-4 text-sm text-white/75">
                <p>
                  Backing the project is about keeping Jukebox healthy: faster fixes, better reliability,
                  and a clearer path for the features communities actually ask for.
                </p>
                <p>
                  No bloated pricing grid. No split between free and paid messaging. Just a clean ask:
                  if Jukebox earns a place in your server, help keep it going.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href={supportUrl}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:bg-white/90"
                >
                  Join the support server
                </a>
                <a
                  href={inviteUrl}
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white/90 transition hover:text-white"
                >
                  Invite Jukebox
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[32px] border border-white/15 bg-gradient-to-r from-[#130229]/95 via-[#240142]/80 to-[#031b27]/90 p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Ready to groove?
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Invite Jukebox now — and back it if you want to keep it strong.
              </h2>
              <p className="max-w-2xl text-white/70">
                Add Jukebox to your server, start a queue, and if it becomes part of the routine,
                support the project that keeps it online and improving.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={supportUrl}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:bg-white/90"
              >
                Support Jukebox
              </a>
              <a
                href={inviteUrl}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white/90 transition hover:text-white"
              >
                Launch invite
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Jukebox · Greg Co. · Crafted for Discord communities.</span>
          <div className="flex items-center gap-4 text-xs">
            <a href="#features" className="uppercase tracking-[0.3em] text-white/60 hover:text-white">
              Features
            </a>
            <span className="uppercase tracking-[0.3em] text-white/40">Community supported</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
