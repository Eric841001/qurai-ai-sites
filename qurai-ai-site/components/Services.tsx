const services = [
  {
    icon: "🖥️",
    title: "인프라 (Infra)",
    description: "기업 비즈니스 환경에 최적화된 고성능·고가용성 IT 인프라 환경을 설계하고 구축합니다.",
    items: ["서버/스토리지/네트워크 통합 구축", "DB (Oracle, SQL) 구축 및 튜닝", "백업 및 재해복구(DR)", "가상화 및 클라우드 전환"],
  },
  {
    icon: "⚙️",
    title: "솔루션 (Solution)",
    description: "업무 효율성을 극대화하는 다양한 엔터프라이즈 솔루션을 공급하고 커스터마이징합니다.",
    items: ["전자문서 처리 및 관리", "Rule 기반 업무 자동화", "그룹웨어 및 협업 도구", "데이터 연계 통합 (EAI/ESB)"],
  },
  {
    icon: "🔒",
    title: "보안 (Security)",
    description: "지능화되는 위협으로부터 기업의 정보 자산을 보호하는 통합 보안 체계를 구축합니다.",
    items: ["DB 및 시스템 접근제어", "엔드포인트 보안 및 매체제어", "보안 취약점 진단 및 조치", "망분리 및 자료전송 시스템"],
  },
  {
    icon: "📋",
    title: "ITO (IT Outsourcing)",
    description: "전문 기술 인력이 상주 또는 원격으로 지원하여 안정적인 시스템 운영을 보장합니다.",
    items: ["정보시스템 통합 운영·유지보수", "SLA 기반 헬프데스크 운영", "장애 예방 점검 및 신속 대응", "IT 자산 및 라이선스 관리"],
  },
  {
    icon: "🚀",
    title: "변화관리 (DX·AX)",
    description: "디지털 전환과 AI 도입을 통해 일하는 방식을 혁신하고 기업 경쟁력을 높입니다.",
    items: ["M365 기반 스마트워크 구축", "클라우드 마이그레이션 (Azure, OCI)", "AI 솔루션 도입 및 컨설팅", "M365 Agent 도입 및 거버넌스"],
  },
  {
    icon: "💻",
    title: "애플리케이션 개발",
    description: "고객 비즈니스 요구사항에 맞춘 최적의 애플리케이션을 기획, 설계, 개발합니다.",
    items: [".NET / Java 엔터프라이즈 시스템", "웹/모바일 앱 개발", "레거시 시스템 고도화", "API 연동 및 MSA 아키텍처"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">6대 핵심</span> 사업영역
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            인프라부터 AI/DX까지, End-to-End 풀스택 SI 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="gradient-border card-hover p-7 rounded-2xl">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              <ul className="space-y-1.5">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
