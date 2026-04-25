export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-lg font-bold gradient-text">QURAI</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-4">
              Microsoft &amp; Oracle 빅벤더 전문성과 풀스택 SI 역량을 갖춘 ICT 전문 파트너.
              컨설팅부터 구축, 운영까지 고객의 디지털 전환을 함께합니다.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-600/20 rounded text-blue-300 text-xs font-bold">Microsoft Gold</span>
              <span className="px-2 py-1 bg-orange-600/20 rounded text-orange-300 text-xs font-bold">Oracle Gold</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">사업영역</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">인프라 구축</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">솔루션 공급</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">보안 체계</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">IT 아웃소싱</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">DX/AX 혁신</a></li>
              <li><a href="#agent365" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">M365 Agent</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">회사소개</a></li>
              <li><a href="#partners" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">파트너십</a></li>
              <li><a href="#references" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">레퍼런스</a></li>
              <li><a href="#whyus" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Why QURAI</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2020-2026 QURAI Co., Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Microsoft &amp; Oracle 전문 SI 파트너 | (주) 큐라이
          </p>
        </div>
      </div>
    </footer>
  );
}
