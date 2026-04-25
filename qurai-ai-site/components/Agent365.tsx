const capabilities = [
  {
    icon: "📋",
    title: "Registry (에이전트 등록)",
    desc: "조직 내 모든 AI 에이전트를 하나의 레지스트리에서 중앙 관리합니다. Microsoft Entra에 에이전트 ID를 부여하여 승인되지 않은 섀도우 에이전트를 감지하고 격리할 수 있습니다.",
  },
  {
    icon: "🔐",
    title: "Access Control (접근 제어)",
    desc: "각 에이전트에 고유한 Entra Agent ID를 부여하여 리소스 접근을 정밀하게 제어합니다. 최소 권한 원칙에 따른 정책 템플릿과 적응형 접근 제어를 지원합니다.",
  },
  {
    icon: "📊",
    title: "Visualization (시각화)",
    desc: "통합 대시보드에서 에이전트 활동, 연결 상태, 성능을 실시간으로 모니터링합니다. 역할별 맞춤 보고서와 ROI 측정 지표를 제공합니다.",
  },
  {
    icon: "🔗",
    title: "Interoperability (상호 운용성)",
    desc: "에이전트가 직원과 동일한 Microsoft 365 앱 및 비즈니스 시스템(SharePoint, Dynamics 365 등)에 접근할 수 있습니다. Microsoft, Adobe, ServiceNow, Workday 등 다양한 플랫폼의 에이전트를 지원합니다.",
  },
  {
    icon: "🛡️",
    title: "Security (보안)",
    desc: "Microsoft Defender XDR을 통한 위협 탐지, Purview를 통한 데이터 보호 및 컴플라이언스, 런타임 방어까지 에이전트 전 생애주기에 걸친 보안을 제공합니다.",
  },
  {
    icon: "🤖",
    title: "Autonomous Agents (자율 에이전트)",
    desc: "사용자 프롬프트 없이 이벤트 기반으로 다단계 워크플로를 자동 실행합니다. 고객 에스컬레이션 대응, 미팅 후속 조치, 컴플라이언스 모니터링 등을 자동화합니다.",
  },
];

const useCases = [
  { title: "고객 에스컬레이션 자동 대응", desc: "긴급 이메일 감지 → 고객 이력 조회 → 응답 초안 작성 → 담당자 배정 → Teams 알림" },
  { title: "미팅 후속 조치 자동화", desc: "회의 종료 → 요약 생성 → 액션 아이템 추출 → Planner 태스크 생성 → 후속 이메일 발송" },
  { title: "컴플라이언스 모니터링", desc: "정책 위반 실시간 감시 → 자동 알림 → 감사 로그 기록 → 조치 권고 생성" },
];

export default function Agent365() {
  return (
    <section id="agent365" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">M365 Agent</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">Microsoft 365 Agent</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            AI 에이전트를 직원처럼 관리하는 엔터프라이즈 제어 플레인.
            큐라이는 M365 Agent 도입부터 거버넌스, 보안, 운영까지 전 과정을 지원합니다.
          </p>
        </div>

        {/* What is Agent 365 */}
        <div className="gradient-border p-8 md:p-10 rounded-2xl mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-4">What is M365 Agent?</span>
              <h3 className="text-2xl font-bold text-white mb-4">AI 에이전트를 위한 통합 관리 플랫폼</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Microsoft Agent 365는 엔터프라이즈 AI 에이전트를 위한 <strong className="text-white">제어 플레인(Control Plane)</strong>입니다.
                Microsoft Entra, Purview, Defender XDR과 통합되어, AI 에이전트에 대한 ID 관리, 접근 제어, 보안, 관찰 가능성을 제공합니다.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                자체 개발 에이전트, 오픈소스 에이전트, 서드파티 플랫폼 에이전트 등 출처에 관계없이 하나의 통합된 거버넌스 체계 아래에서
                에이전트를 배포, 조직, 관리할 수 있습니다.
              </p>
              <p className="text-gray-500 text-sm">
                2025년 11월 Ignite에서 발표 | 2026년 5월 1일 GA | $15/user/month 또는 M365 E7 포함
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-2xl">🏢</span>
                <div>
                  <span className="text-white font-semibold text-sm block">Microsoft Entra Agent ID</span>
                  <span className="text-gray-500 text-xs">에이전트별 고유 디지털 ID 부여</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-2xl">🛡️</span>
                <div>
                  <span className="text-white font-semibold text-sm block">Defender + Purview 통합</span>
                  <span className="text-gray-500 text-xs">위협 탐지, DLP, 감사, 내부 위험 관리</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-2xl">📈</span>
                <div>
                  <span className="text-white font-semibold text-sm block">M365 Admin Center 관리</span>
                  <span className="text-gray-500 text-xs">에이전트 배포, 모니터링, 정책 관리</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-2xl">🔄</span>
                <div>
                  <span className="text-white font-semibold text-sm block">Copilot Studio 연동</span>
                  <span className="text-gray-500 text-xs">커스텀 에이전트 빌드 및 배포</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Capabilities */}
        <h3 className="text-2xl font-bold text-white text-center mb-8">핵심 역량 (Key Capabilities)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, index) => (
            <div key={index} className="gradient-border card-hover p-6 rounded-2xl">
              <div className="text-3xl mb-3">{cap.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{cap.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <h3 className="text-2xl font-bold text-white text-center mb-8">실제 활용 사례</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {useCases.map((uc, index) => (
            <div key={index} className="gradient-border p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-300 text-sm font-bold">{index + 1}</span>
                <h4 className="text-white font-bold text-sm">{uc.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>

        {/* QURAI Service */}
        <div className="gradient-border p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-white mb-4">큐라이의 M365 Agent 서비스</h3>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            큐라이는 Microsoft Gold Partner로서 M365 Agent 도입을 위한 전략 컨설팅부터 Copilot Studio 기반 커스텀 에이전트 개발,
            Agent 365 거버넌스 설계, 보안 정책 수립, 그리고 운영 안정화까지 End-to-End 서비스를 제공합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["도입 전략 컨설팅", "커스텀 에이전트 개발", "거버넌스 설계", "보안 정책 수립", "운영 및 최적화", "사용자 교육"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-blue-600/20 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
