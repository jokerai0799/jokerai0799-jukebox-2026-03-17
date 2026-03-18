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
  metadataBase: new URL("https://neonixbot.online"),
  title: "Neonix - Discord Music Bot",
  description:
    "Neonix is a Discord music bot with simple playback controls, queue management, and easy server setup. Invite the bot and support the project.",
  keywords: [
    "Neonix",
    "Neonix Discord bot",
    "discord music bot",
    "music bot for discord",
    "discord bot music",
    "youtube music bot for discord",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neonix - Discord Music Bot for Your Server",
    description:
      "Neonix is a Discord music bot with simple playback controls, queue management, and easy server setup.",
    url: "https://neonixbot.online",
    siteName: "Neonix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neonix - Discord Music Bot",
    description:
      "Neonix is a Discord music bot with simple playback controls, queue management, and easy server setup.",
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
