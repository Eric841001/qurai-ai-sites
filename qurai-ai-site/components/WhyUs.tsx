"use client";

import { useLanguage } from "../lib/i18n";

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="whyus" className="relative py-32 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">{t.whyus.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.whyus.heading} <span className="gradient-text">{t.whyus.headingHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.whyus.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyus.points.map((point, index) => (
            <div key={index} className={`gradient-border card-hover p-7 rounded-2xl ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
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
            QURAI — <span className="text-yellow-400 font-bold">{t.whyus.quoteHighlight1}</span> + <span className="text-yellow-400 font-bold">{t.whyus.quoteHighlight2}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
