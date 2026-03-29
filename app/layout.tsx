import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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

const siteUrl = "https://neonixbot.online";
const defaultTitle = "Neonix - Discord Music Bot";
const defaultDescription =
  "Neonix is a Discord music bot with simple playback controls, queue management, and easy server setup. Invite the bot and support the project.";
const ogImage = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Neonix",
  },
  description: defaultDescription,
  applicationName: "Neonix",
  keywords: [
    "Neonix",
    "Neonix Discord bot",
    "discord music bot",
    "music bot for discord",
    "discord bot music",
    "soundcloud discord bot",
    "discord queue bot",
    "music bot for Discord server",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Neonix",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Neonix Discord music bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] text-white antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
