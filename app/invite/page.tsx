import type { Metadata } from "next";

const inviteUrl =
  "https://discord.com/oauth2/authorize?client_id=1483251699647774791&scope=bot%20applications.commands&permissions=3148800";

export const metadata: Metadata = {
  title: "Invite JukeBox | Discord Music Bot",
  description:
    "Invite JukeBox, the Discord music bot for simple playback, clean queue controls, and reliable music sessions in your server.",
  alternates: {
    canonical: "/invite",
  },
};

export default function InvitePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white sm:px-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Invite</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Invite JukeBox to your Discord server.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          JukeBox is a Discord music bot built for reliable playback, straightforward commands, and
          shared listening sessions that stay easy to manage.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:bg-white/90"
          >
            Open Discord invite
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/85 transition hover:border-white hover:text-white"
          >
            Back to homepage
          </a>
        </div>

        <div className="mt-12 grid gap-4 text-sm text-white/75 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-base font-semibold text-white">Simple setup</h2>
            <p className="mt-2">Add the bot, grant permissions, and start using music commands quickly.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-base font-semibold text-white">Queue controls</h2>
            <p className="mt-2">Use slash commands to play, queue, pause, resume, skip, and stop tracks.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-base font-semibold text-white">Built for communities</h2>
            <p className="mt-2">Made for active Discord servers that want dependable music without clutter.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
