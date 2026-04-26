import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "../components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qurai.ai"),
  title: "QURAI — Enterprise AI Agents for Microsoft 365",
  description: "QURAI delivers enterprise AI decision intelligence through Microsoft 365 AI Agents. Secure, governed, and audit-ready AI automation for Teams, SharePoint, Outlook, and beyond.",
  keywords: ["QURAI", "AI Agents", "Microsoft 365", "Enterprise AI", "Azure OpenAI", "Decision Intelligence", "M365 Agent", "큐라이"],
  openGraph: {
    title: "QURAI — Enterprise AI Agents for Microsoft 365",
    description: "Transform enterprise decision-making with secure, governed AI agents for Microsoft 365.",
    url: "https://qurai.ai",
    siteName: "QURAI",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR", "ja_JP"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QURAI — Enterprise AI Agents for Microsoft 365",
    description: "Transform enterprise decision-making with secure, governed AI agents.",
  },
  alternates: {
    canonical: "https://qurai.ai",
    languages: { "ko": "https://qurai.co.kr", "en": "https://qurai.ai" },
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
