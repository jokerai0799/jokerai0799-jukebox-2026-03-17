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
  title: "JukeBox - Discord Music Bot for Your Server",
  description:
    "JukeBox is a Discord music bot with simple playback controls, queue management, and easy server setup. Invite the bot and support the project.",
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
    title: "JukeBox - Discord Music Bot for Your Server",
    description:
      "JukeBox is a Discord music bot with simple playback controls, queue management, and easy server setup.",
    url: "https://jukeboxbot.online",
    siteName: "Jukebox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JukeBox - Discord Music Bot for Your Server",
    description:
      "JukeBox is a Discord music bot with simple playback controls, queue management, and easy server setup.",
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
