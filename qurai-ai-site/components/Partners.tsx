const msItems = {
  "Cloud & Modern Work": ["Microsoft 365 Deploy", "Azure Cloud Transition", "Intune & EMS", "Teams Collaboration"],
  "Infrastructure & Security": ["AD / Entra ID 구축", "MECM (SCCM) 운영", "AIP 보안 적용", "Windows Server"],
  "Dev & Data": ["SQL Server Tuning", "Visual Studio Dev"],
  "AI & Agent": ["M365 Copilot", "Agent 365", "Copilot Studio", "Power Platform"],
};

const oracleItems = {
  "Database & Systems": ["Oracle DB 19c/21c", "Exadata 구축/운영", "ODA (Appliance)", "Data Warehousing"],
  "Oracle Cloud (OCI)": ["OCI Migration (IaaS)", "Oracle PaaS & SaaS", "Hybrid Cloud 구성", "Cloud Backup & DR"],
  "Middleware & Integration": ["WebLogic Server", "GoldenGate (CDC)"],
};

export default function Partners() {
  return (
    <section id="partners" className="relative py-32 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Partnership</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">Microsoft &amp; Oracle</span> 파트너십
          </h2>
          <p className="text-gray-400 text-lg">양대 글로벌 벤더의 Gold Partner로서 검증된 전문성을 보유하고 있습니다.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="gradient-border p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Microsoft</h3>
              <span className="px-4 py-1.5 bg-blue-600 rounded-full text-white text-xs font-bold">Gold Partner</span>
            </div>
            {Object.entries(msItems).map(([category, items]) => (
              <div key={category} className="mb-5">
                <h4 className="text-blue-400 font-semibold text-sm mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="gradient-border p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Oracle</h3>
              <span className="px-4 py-1.5 bg-orange-600 rounded-full text-white text-xs font-bold">Gold Partner</span>
            </div>
            {Object.entries(oracleItems).map(([category, items]) => (
              <div key={category} className="mb-5">
                <h4 className="text-orange-400 font-semibold text-sm mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
