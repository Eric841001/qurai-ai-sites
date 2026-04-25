import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QURAI.AI — Intelligent AI Solutions",
  description:
    "QURAI.AI delivers cutting-edge artificial intelligence solutions for enterprise. Transform your business with our advanced AI platform.",
  keywords: ["AI", "artificial intelligence", "machine learning", "enterprise AI", "QURAI"],
  openGraph: {
    title: "QURAI.AI — Intelligent AI Solutions",
    description: "Transform your business with cutting-edge AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
