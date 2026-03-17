import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jukeboxbot.online"),
  title: "Jukebox · Your Discord music machine",
  description:
    "Jukebox is a Discord music bot with clean controls, reliable playback, and a retro-inspired experience for active communities.",
  keywords: [
    "discord music bot",
    "music bot for discord",
    "discord bot music",
    "jukebox discord bot",
    "discord music",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jukebox · Your Discord music machine",
    description:
      "Invite JukeBox to your server and bring it to life with clean controls and reliable music playback.",
    url: "https://jukeboxbot.online",
    siteName: "Jukebox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jukebox · Your Discord music machine",
    description:
      "Invite JukeBox to your server and bring it to life with clean controls and reliable music playback.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
