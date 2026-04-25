"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            프로젝트 <span className="gradient-text">상담 문의</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            귀사의 IT 프로젝트에 대해 말씀해 주시면, 24시간 이내에 최적의 솔루션 제안서를 보내드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="gradient-border p-6 rounded-2xl">
              <h4 className="text-white font-bold mb-4">회사 정보</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500 block">회사명</span>
                  <span className="text-gray-300">(주) 큐라이</span>
                </div>
                <div>
                  <span className="text-gray-500 block">영문명</span>
                  <span className="text-gray-300">QURAI Co., Ltd.</span>
                </div>
                <div>
                  <span className="text-gray-500 block">설립</span>
                  <span className="text-gray-300">2020년 12월</span>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 rounded-2xl">
              <h4 className="text-white font-bold mb-3">파트너십</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-600/30 rounded text-blue-300 text-xs font-bold">Gold</span>
                  <span className="text-gray-300">Microsoft Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-orange-600/30 rounded text-orange-300 text-xs font-bold">Gold</span>
                  <span className="text-gray-300">Oracle Partner</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="gradient-border p-12 rounded-2xl text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">감사합니다!</h3>
                <p className="text-gray-400">24시간 이내에 담당자가 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="gradient-border p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">담당자명 *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="이름"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">이메일 *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-300 mb-2">회사명</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="회사명 (선택)"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">프로젝트 내용 *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    placeholder="프로젝트 규모, 기술 요구사항, 일정 등을 자유롭게 작성해 주세요..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-[1.02]"
                >
                  상담 요청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
