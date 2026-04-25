import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QURAI.AI — Microsoft & Oracle 전문 SI 파트너",
  description:
    "겟아이티는 Microsoft & Oracle 빅벤더 전문성과 풀스택 SI 역량을 갖춘 ICT 전문 파트너입니다. 컨설팅부터 구축, 운영까지 대기업과 공공기관이 선택한 신뢰할 수 있는 전문가 그룹.",
  keywords: ["큐라이", "QURAI", "Microsoft", "Oracle", "SI", "ICT", "클라우드", "Azure", "M365"],
  openGraph: {
    title: "Get-IT Co., Ltd. — Microsoft & Oracle 전문 SI 파트너",
    description: "컨설팅부터 구축, 운영까지 - 대기업과 공공기관이 선택한 신뢰할 수 있는 전문가 그룹",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
