import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "QURAI — Microsoft & Oracle 전문 SI 파트너",
  description:
    "큐라이는 Microsoft & Oracle 빅벤더 전문성과 풀스택 SI 역량을 갖춘 ICT 전문 파트너입니다.",
  keywords: ["QURAI", "큐라이", "Microsoft", "Oracle", "SI", "ICT", "Azure", "M365", "M365 Agent"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
