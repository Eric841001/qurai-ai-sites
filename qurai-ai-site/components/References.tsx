const manufacturing = [
  { name: "현대오토에버", period: "2023-2025", desc: "MS 기술지원 및 라이선스 최적화", tags: ["Azure", "M365", "License"] },
  { name: "솔루엠 (SoluM)", period: "2025-2026", desc: "Microsoft 365 스마트 워크플레이스 구축", tags: ["M365", "Teams", "Migration"] },
  { name: "한화시스템", period: "2024", desc: "Azure 클라우드 인프라 구축", tags: ["Azure IaaS", "Hybrid Cloud"] },
  { name: "위아공작기계", period: "2025-2026", desc: "M365 클라우드 협업 환경 구축", tags: ["Teams", "Security", "SaaS"] },
  { name: "현대위아", period: "2024", desc: "해외법인 AD/MECM 구축", tags: ["Active Directory", "MECM", "Global"] },
];

const finance = [
  { name: "한화투자증권", period: "2024", desc: "Microsoft 기술지원 및 인프라 운영", tags: ["Azure", "M365", "Security"] },
  { name: "삼성카드/서비스", period: "2023-2024", desc: "OA 인프라 최적화 및 운영", tags: ["VDI", "Infra Ops", "Windows 11"] },
  { name: "이마트", period: "2023", desc: "Oracle DB 성능 고도화", tags: ["Oracle RAC", "Exadata", "Tuning"] },
];

const itService = [
  { name: "씨디네트웍스", period: "2024", desc: "Global AD 재구축 및 보안 강화", tags: ["Active Directory", "Global Sync", "IDM"] },
  { name: "메가존클라우드", period: "2023-2025", desc: "엔터프라이즈 솔루션 기술 협력", tags: ["Hybrid Cloud", "MECM", "Migration"] },
];

const publicSector = [
  { name: "경기도교육청", period: "2023-2025", desc: "5G 기반 스마트 교육 환경 구축 및 AD/MECM 운영", tags: ["AD", "MECM", "5G Network"] },
  { name: "동행복권", period: "운영 중", desc: "대국민 복권 시스템 DB 기술지원", tags: ["Oracle DB", "24/7 운영"] },
];

interface RefCardProps {
  name: string;
  period: string;
  desc: string;
  tags: string[];
}

function RefCard({ name, period, desc, tags }: RefCardProps) {
  return (
    <div className="gradient-border card-hover p-5 rounded-xl">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-white font-bold">{name}</h4>
        <span className="text-xs text-blue-400 font-semibold whitespace-nowrap ml-2">{period}</span>
      </div>
      <p className="text-gray-400 text-sm mb-3">{desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-0.5 bg-blue-600/20 border border-blue-500/20 rounded text-blue-300 text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function References() {
  return (
    <section id="references" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">References</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            산업군별 <span className="gradient-text">주요 레퍼런스</span>
          </h2>
          <p className="text-gray-400 text-lg">대한민국 대표 기업과 공공기관의 디지털 전환을 성공적으로 수행했습니다.</p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🏭</span> 제조 (Manufacturing)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {manufacturing.map((ref, i) => (
              <RefCard key={i} {...ref} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🏦</span> 금융 / IT서비스
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...finance, ...itService].map((ref, i) => (
              <RefCard key={i} {...ref} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🏛️</span> 공공기관
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicSector.map((ref, i) => (
              <RefCard key={i} {...ref} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
