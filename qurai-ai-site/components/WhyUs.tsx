const points = [
  {
    num: "01",
    title: "Microsoft & Oracle 양대 벤더 전문성",
    desc: "국내 소수 기업만이 보유한 양대 글로벌 벤더의 공식 파트너십을 통해, 하이브리드 클라우드 환경에 최적화된 통합 기술지원을 제공합니다.",
    badge: "Dual Gold Partner 자격 보유",
  },
  {
    num: "02",
    title: "검증된 특급 기술 인력 보유",
    desc: "업계 최고 수준의 기술 등급을 보유한 전문 엔지니어들로 팀을 구성하여 고품질 산출물을 보장합니다.",
    badge: "전체 인력 중 특급/고급 50% 이상",
  },
  {
    num: "03",
    title: "대기업 & 공공 검증된 실적",
    desc: "현대, 삼성, SK 등 국내 굴지의 대기업과 경기도교육청 등 까다로운 공공기관의 보안 및 품질 기준을 충족하며 성공적으로 프로젝트를 완수했습니다.",
    badge: "최근 3년 60건+ 성공적 수행",
  },
  {
    num: "04",
    title: "24시간 이내 즉각 대응",
    desc: "전담 엔지니어 배정을 통해 불필요한 절차를 생략하고, 이슈 접수 24시간 이내에 분석 및 1차 조치를 완료하는 신속 대응 체계를 갖추고 있습니다.",
    badge: "Zero-Wait 기술지원 프로세스",
  },
  {
    num: "05",
    title: "End-to-End 풀스택 SI 역량",
    desc: "인프라(H/W) 구축부터 플랫폼, 애플리케이션 개발, AI/DX 도입, M365 Agent 거버넌스까지 IT 전 영역을 아우르는 One-Stop 통합 서비스를 제공합니다.",
    badge: "Infra → DX/AI → Agent 통합 수행",
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="relative py-32 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Why QURAI</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            핵심 <span className="gradient-text">차별화 포인트</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            검증된 기술력과 신속한 대응으로 고객의 비즈니스 성공을 보장합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className={`gradient-border card-hover p-7 rounded-2xl ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="text-sm font-bold text-blue-500 mb-3 block">POINT {point.num}</span>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{point.desc}</p>
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                <span className="text-blue-400 text-xs">✓</span>
                <span className="text-blue-300 text-xs font-medium">{point.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 gradient-border p-6 rounded-2xl text-center">
          <p className="text-gray-300 text-lg">
            큐라이는 <span className="text-yellow-400 font-bold">대형 SI의 기술 전문성</span>과{" "}
            <span className="text-yellow-400 font-bold">중소 SI의 기민함</span>을 동시에 갖춘 최적의 파트너입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
