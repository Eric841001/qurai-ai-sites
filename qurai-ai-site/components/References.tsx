"use client";

import { useLanguage } from "../lib/i18n";

const manufacturing = [
  { name: "현대오토에버 (Hyundai AutoEver)", period: "2023-2025", desc_en: "MS Technical Support & License Optimization", desc_ko: "MS 기술지원 및 라이선스 최적화", desc_ja: "MS技術サポート・ライセンス最適化", tags: ["Azure", "M365", "License"] },
  { name: "솔루엠 (SoluM)", period: "2025-2026", desc_en: "Microsoft 365 Smart Workplace Deployment", desc_ko: "Microsoft 365 스마트 워크플레이스 구축", desc_ja: "Microsoft 365スマートワークプレイス構築", tags: ["M365", "Teams", "Migration"] },
  { name: "한화시스템 (Hanwha Systems)", period: "2024", desc_en: "Azure Cloud Infrastructure Deployment", desc_ko: "Azure 클라우드 인프라 구축", desc_ja: "Azureクラウドインフラ構築", tags: ["Azure IaaS", "Hybrid Cloud"] },
  { name: "위아공작기계 (WIA)", period: "2025-2026", desc_en: "M365 Cloud Collaboration Environment", desc_ko: "M365 클라우드 협업 환경 구축", desc_ja: "M365クラウドコラボレーション環境構築", tags: ["Teams", "Security", "SaaS"] },
  { name: "현대위아 (Hyundai WIA)", period: "2024", desc_en: "Global Subsidiary AD/MECM Deployment", desc_ko: "해외법인 AD/MECM 구축", desc_ja: "海外法人AD/MECM構築", tags: ["Active Directory", "MECM", "Global"] },
];

const finance = [
  { name: "한화투자증권 (Hanwha Investment)", period: "2024", desc_en: "Microsoft Technical Support & Infra Operations", desc_ko: "Microsoft 기술지원 및 인프라 운영", desc_ja: "Microsoft技術サポート・インフラ運用", tags: ["Azure", "M365", "Security"] },
  { name: "삼성카드 (Samsung Card)", period: "2023-2024", desc_en: "OA Infrastructure Optimization", desc_ko: "OA 인프라 최적화 및 운영", desc_ja: "OAインフラ最適化・運用", tags: ["VDI", "Infra Ops", "Windows 11"] },
  { name: "이마트 (E-Mart)", period: "2023", desc_en: "Oracle DB Performance Enhancement", desc_ko: "Oracle DB 성능 고도화", desc_ja: "Oracle DBパフォーマンス高度化", tags: ["Oracle RAC", "Exadata", "Tuning"] },
];

const itService = [
  { name: "씨디네트웍스 (CDNetworks)", period: "2024", desc_en: "Global AD Rebuild & Security Enhancement", desc_ko: "Global AD 재구축 및 보안 강화", desc_ja: "Global AD再構築・セキュリティ強化", tags: ["Active Directory", "Global Sync", "IDM"] },
  { name: "메가존클라우드 (Megazone Cloud)", period: "2023-2025", desc_en: "Enterprise Solution Technical Collaboration", desc_ko: "엔터프라이즈 솔루션 기술 협력", desc_ja: "エンタープライズソリューション技術協力", tags: ["Hybrid Cloud", "MECM", "Migration"] },
];

const publicSector = [
  { name: "경기도교육청 (Gyeonggi DOE)", period: "2023-2025", desc_en: "5G Smart Education & AD/MECM Operations", desc_ko: "5G 기반 스마트 교육 환경 구축 및 AD/MECM 운영", desc_ja: "5Gスマート教育環境構築・AD/MECM運用", tags: ["AD", "MECM", "5G Network"] },
  { name: "동행복권 (Dong Haeng Lottery)", period: "Ongoing", desc_en: "National Lottery System DB Support", desc_ko: "대국민 복권 시스템 DB 기술지원", desc_ja: "国民向け宝くじシステムDB技術支援", tags: ["Oracle DB", "24/7"] },
];

export default function References() {
  const { lang, t } = useLanguage();

  const getDesc = (ref: { desc_en: string; desc_ko: string; desc_ja: string }) => {
    if (lang === "ko") return ref.desc_ko;
    if (lang === "ja") return ref.desc_ja;
    return ref.desc_en;
  };

  const RefCard = ({ ref: r }: { ref: typeof manufacturing[0] }) => (
    <div className="gradient-border card-hover p-5 rounded-xl">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-white font-bold">{r.name}</h4>
        <span className="text-xs text-blue-400 font-semibold whitespace-nowrap ml-2">{r.period}</span>
      </div>
      <p className="text-gray-400 text-sm mb-3">{getDesc(r)}</p>
      <div className="flex flex-wrap gap-1.5">
        {r.tags.map((tag, i) => (
          <span key={i} className="px-2 py-0.5 bg-blue-600/20 border border-blue-500/20 rounded text-blue-300 text-xs">{tag}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="references" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">{t.references.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.references.heading} <span className="gradient-text">{t.references.headingHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t.references.subtitle}</p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🏭</span> {t.references.manufacturing}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {manufacturing.map((r, i) => <RefCard key={i} ref={r} />)}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🏦</span> {t.references.financeIt}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...finance, ...itService].map((r, i) => <RefCard key={i} ref={r} />)}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🏛️</span> {t.references.publicSector}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicSector.map((r, i) => <RefCard key={i} ref={r} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
