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
  metadataBase: new URL("https://next-theme-toggle.megh.me"),
  title: "Next Theme Toggle – Add Dark/Light Mode to Next.js in Seconds",
  description:
    "Add a sleek dark/light theme toggle to your Next.js project instantly. One CLI command, zero setup, and full customization. Built for lazy perfectionists.",
  keywords:
    "next.js theme toggle, dark mode, light mode, theme switch, next-themes, CLI tool, developer tools, tailwind theme, react theme, toggle component, UI themes, nextjs dark mode, nextjs CLI, boilerplate theme toggle",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Next Theme Toggle – Add Dark/Light Mode to Next.js in Seconds",
    description:
      "A powerful CLI tool to add beautiful dark/light mode support in your Next.js app in seconds. It just works.",
    url: "https://next-theme-toggle.megh.me",
    siteName: "Next Theme Toggle",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Next Theme Toggle – Add Dark/Light Mode to Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Theme Toggle – Add Dark/Light Mode to Next.js in Seconds",
    description:
      "Drop in dark/light mode support to your Next.js project with a single command. Powered by next-themes, Tailwind, and pure laziness.",
    images: ["/banner.png"],
    creator: "@meghtrix",
  },
  alternates: {
    canonical: "https://next-theme-toggle.megh.me",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
