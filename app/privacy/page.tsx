import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://neonixbot.online";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Neonix privacy policy for the Discord music bot website and related service operations.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Neonix Privacy Policy",
    description:
      "Read the Neonix privacy policy for the Discord music bot website and related service operations.",
    url: `${siteUrl}/privacy`,
    type: "article",
  },
  twitter: {
    title: "Neonix Privacy Policy",
    description:
      "Read the Neonix privacy policy for the Discord music bot website and related service operations.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white sm:px-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Privacy</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Neonix privacy policy</h1>
        <div className="mt-8 space-y-6 text-white/75">
          <section>
            <h2 className="text-xl font-semibold text-white">What this covers</h2>
            <p className="mt-2">
              This page covers the Neonix website and the Neonix Discord music bot at a high level.
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
              Neonix may process server, channel, user, and command-related data needed to respond to
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
            <h2 className="text-xl font-semibold text-white">How this information is used</h2>
            <p className="mt-2">
              Information is used to operate the Neonix website, run the Discord music bot, keep the
              service stable, investigate issues, and maintain a safe experience for communities using it.
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

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6 text-white/75">
          <h2 className="text-xl font-semibold text-white">Related pages</h2>
          <p className="mt-3">
            You can return to the <Link href="/" className="text-white hover:text-[#00f5ff]">homepage</Link>,
            visit the <Link href="/invite" className="text-white hover:text-[#00f5ff]">invite page</Link>, or
            view the <Link href="/support" className="text-white hover:text-[#00f5ff]">support page</Link> for
            more about Neonix.
          </p>
        </div>
      </div>
    </main>
  );
}
