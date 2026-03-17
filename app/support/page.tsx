import type { Metadata } from "next";

const supportUrl = "https://buy.stripe.com/6oUaEZfEWc5Lazte5L8Ra00";

export const metadata: Metadata = {
  title: "Support JukeBox | Discord Music Bot",
  description:
    "Support JukeBox to help keep the Discord music bot online, maintained, and improving.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white sm:px-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Support</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Support the JukeBox Discord music bot.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          If JukeBox is useful in your server, support helps cover uptime, maintenance, fixes, and the
          next round of improvements.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:bg-white/90"
          >
            Support via Stripe
          </a>
          <a
            href="/invite"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/85 transition hover:border-white hover:text-white"
          >
            Invite JukeBox
          </a>
        </div>
        <div className="mt-12 grid gap-4 text-sm text-white/75 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-base font-semibold text-white">Hosting</h2>
            <p className="mt-2">Helps keep the bot available and responsive for active communities.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-base font-semibold text-white">Maintenance</h2>
            <p className="mt-2">Supports ongoing fixes, updates, and quality-of-life improvements.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-base font-semibold text-white">Roadmap</h2>
            <p className="mt-2">Keeps development moving toward features communities actually want.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
