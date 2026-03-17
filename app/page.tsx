const inviteUrl =
  "https://discord.com/oauth2/authorize?client_id=000000000000000000&scope=bot+applications.commands&permissions=36700160";
const supportUrl = "https://discord.gg/jukebox";

const stats = [
  { label: "Servers vibing", value: "2.3K+" },
  { label: "Tracks spun weekly", value: "48K" },
  { label: "Latency", value: "< 150 ms" },
];

const features = [
  {
    title: "Hi-fi streaming",
    description:
      "Lossless-inspired playback with smart volume leveling so every track stays punchy without clipping.",
    detail: "Powered by regional relays",
  },
  {
    title: "Mood-aware queue",
    description:
      "Blend YouTube, Spotify, and SoundCloud links in a single queue with automatic crossfades.",
    detail: "Drop-ins stay seamless",
  },
  {
    title: "Resident DJ",
    description:
      "Scene-saving presets for lo-fi lounges, raid nights, or karaoke chaos—switch vibes instantly.",
    detail: "Per-channel memories",
  },
];

const steps = [
  {
    title: "Invite Jukebox",
    description:
      "Drop it into any server channel where music is allowed. Discord permissions are handled for you.",
  },
  {
    title: "Queue a track",
    description:
      "Use slash commands or legacy prefixes—drag in a link, playlist, or search keyword and let it spin.",
  },
  {
    title: "Lock in the vibe",
    description:
      "Pin favorite mixes, loop sets, or hand controls to mods. Jukebox keeps the neon glow rolling.",
  },
];

const commands = [
  {
    name: "/play",
    usage: "/play <song or link>",
    description: "Instantly queue a track from YouTube, Spotify, or SoundCloud.",
  },
  {
    name: "/mix",
    usage: "/mix <synthwave | chill | hype>",
    description: "Applies curated EQ + FX chains that match your channel's mood.",
  },
  {
    name: "/queue",
    usage: "/queue",
    description: "See what's lined up, drag-to-reorder, or save the set as a preset.",
  },
  {
    name: "/skip",
    usage: "/skip",
    description: "Smart skip that auto-fades and respects DJ/mod priority.",
  },
  {
    name: "/rewind",
    usage: "/rewind 30",
    description: "Jump back to the good part without restarting the whole song.",
  },
  {
    name: "/link",
    usage: "/link",
    description: "Pair your web dashboard to manage queues when you're AFK.",
  },
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
            Synthwave audio engine
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase text-white/70">
              Jukebox · Your Discord music machine
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Spin neon-grade sets with a bot that feels like a real DJ booth.
            </h1>
            <p className="max-w-3xl text-lg text-white/70 sm:text-xl">
              Jukebox keeps community nights smooth with zero skipping, buttery transitions, and a
              retro UI that anyone can drive. Drop it into your Discord and let the glow take over.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={inviteUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#f72585] via-[#d91ef5] to-[#00f5ff] px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(247,37,133,0.45)] transition hover:translate-y-0.5"
            >
              Invite the bot
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={supportUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              Join support server
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built for late-night sessions.</h2>
            <p className="max-w-2xl text-white/70">
              From small friend servers to massive communities, Jukebox keeps the room humming with
              clever automation and tactile controls.
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
              Queue, blend, and hand off like a pro.
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
              Why servers love it
            </p>
            <ul className="mt-6 space-y-5 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f72585]" />
                Auto level-matching keeps raids from blowing out headphones.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00f5ff]" />
                Live waveform preview lets mods see when to drop callouts.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f7b500]" />
                Passive mode pauses playback the moment the voice channel empties.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ac6bff]" />
                Presets remember volume, filters, and crossfade lengths per channel.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-24 space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Commands
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Quick controls your DJs actually use.
            </h2>
            <p className="max-w-2xl text-white/70">
              Slash commands keep things clean, while legacy prefixes stay available for muscle
              memory. Highlight reel below.
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

        <section className="mt-24 rounded-[32px] border border-white/15 bg-gradient-to-r from-[#130229]/95 via-[#240142]/80 to-[#031b27]/90 p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Ready to groove?
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Drop Jukebox into your next watch party or raid night.
              </h2>
              <p className="max-w-2xl text-white/70">
                Invite link and support server are live. Swap them for your production URLs whenever
                you&apos;re ready to deploy.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={inviteUrl}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:bg-white/90"
              >
                Launch invite
              </a>
              <a
                href={supportUrl}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white/90 transition hover:text-white"
              >
                Support lounge
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Jukebox. Crafted for Discord communities.</span>
          <div className="flex items-center gap-4 text-xs">
            <a href="#features" className="uppercase tracking-[0.3em] text-white/60 hover:text-white">
              Features
            </a>
            <a href="#" className="uppercase tracking-[0.3em] text-white/60 hover:text-white">
              Docs soon
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
