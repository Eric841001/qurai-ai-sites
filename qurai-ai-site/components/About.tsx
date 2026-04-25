export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            회사 개요 &amp; <span className="gradient-text">Vision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">설립 배경</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              큐라이는 급변하는 IT 환경 속에서 기업의 디지털 혁신을 선도하고자 2020년 설립되었습니다.
              Microsoft와 Oracle 등 글로벌 빅벤더 기술에 대한 깊이 있는 이해와 풍부한 실무 경험을 바탕으로,
              단순한 시스템 구축을 넘어 고객 비즈니스의 성공을 위한 최적의 IT 파트너가 되고자 합니다.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mb-3">Core Competency</h3>
            <div className="grid grid-cols-2 gap-3">
              {["Dual Gold Partnership", "Full-Stack SI", "App Development", "Proven Security"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="gradient-border p-6 rounded-2xl">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-3">Vision</span>
              <h4 className="text-xl font-bold text-white mb-2">Digital Transformation Partner</h4>
              <p className="text-gray-400">고객의 비즈니스 가치를 극대화하는 대한민국 최고의 ICT 전문 파트너</p>
            </div>

            <div className="gradient-border p-6 rounded-2xl">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-3">Mission</span>
              <h4 className="text-xl font-bold text-white mb-2">Customer Success First</h4>
              <p className="text-gray-400">최적의 IT 인프라와 솔루션 제공을 통해 고객의 정보 자산을 안전하고 효율적으로 운영</p>
            </div>

            <div className="gradient-border p-6 rounded-2xl text-center">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-3">Slogan</span>
              <p className="text-2xl font-bold text-blue-400">&quot;Where Intelligence Meets Enterprise&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
