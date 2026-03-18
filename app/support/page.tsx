import type { Metadata } from "next";

const supportUrl = "https://buy.stripe.com/6oUaEZfEWc5Lazte5L8Ra00";

const supportAreas = [
  {
    title: "Hosting",
    text: "Helps keep the bot available and responsive for active communities.",
  },
  {
    title: "Maintenance",
    text: "Supports ongoing fixes, updates, and quality-of-life improvements.",
  },
  {
    title: "Roadmap",
    text: "Keeps development moving toward features communities actually want.",
  },
];

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
          {supportAreas.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-base font-semibold text-white">{item.title}</h2>
              <p className="mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/75">
            <h2 className="text-xl font-semibold text-white">Why this page exists</h2>
            <p className="mt-3">
              JukeBox is positioned as a useful Discord music bot first. Support is there to keep the
              project stable, maintain hosting, and make room for practical improvements over time.
            </p>
            <p className="mt-3">
              This is intentionally simple. No bloated pricing matrix. Just a direct way to help keep the
              bot healthy if your server gets value from it.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/75">
            <h2 className="text-xl font-semibold text-white">Related pages</h2>
            <ul className="mt-3 space-y-3">
              <li>
                <a href="/invite" className="text-white hover:text-[#00f5ff]">
                  Invite JukeBox
                </a>{" "}
                if you want to add the bot to your Discord server.
              </li>
              <li>
                Review the <a href="/privacy" className="text-white hover:text-[#00f5ff]">privacy policy</a>{" "}
                for site and bot data handling notes.
              </li>
              <li>
                Go back to the <a href="/" className="text-white hover:text-[#00f5ff]">homepage</a> for
                features, commands, and overview.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
