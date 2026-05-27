import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/layout/ConsentBanner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Agency | Software, Mobile, Marketing & AI Solutions",
    template: "%s | Digital Agency",
  },
  description:
    "We build scalable digital products. Services include software development, mobile apps, marketing, AI solutions, and content creation.",
  keywords: [
    "digital agency",
    "software development",
    "mobile app development",
    "marketing",
    "AI solutions",
    "content creation",
  ],
  authors: [{ name: "Digital Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Digital Agency",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-text-primary">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-primary">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
