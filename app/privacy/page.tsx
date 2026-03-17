import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JukeBox",
  description:
    "Read the JukeBox privacy policy for the Discord music bot website and related service operations.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white sm:px-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Privacy</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">JukeBox privacy policy</h1>
        <div className="mt-8 space-y-6 text-white/75">
          <section>
            <h2 className="text-xl font-semibold text-white">What this covers</h2>
            <p className="mt-2">
              This page covers the JukeBox website and the JukeBox Discord music bot at a high level.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Website data</h2>
            <p className="mt-2">
              The website may collect standard technical information such as IP address, browser type,
              device information, and basic analytics provided by the hosting platform to keep the site
              secure and operating properly.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Bot usage data</h2>
            <p className="mt-2">
              JukeBox may process server, channel, user, and command-related data needed to respond to
              music commands, maintain queues, and keep the service functioning inside Discord.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Payments and support</h2>
            <p className="mt-2">
              Support payments are handled by Stripe through its own systems and policies. Payment card
              details are not stored directly by this website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Changes</h2>
            <p className="mt-2">
              This policy may be updated as the project evolves. Continued use of the site or bot after
              updates means you accept the revised policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
