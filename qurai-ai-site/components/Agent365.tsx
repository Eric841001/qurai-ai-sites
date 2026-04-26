"use client";

import { useLanguage } from "../lib/i18n";

export default function Agent365() {
  const { t } = useLanguage();

  return (
    <section id="agent365" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">{t.agent365.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">{t.agent365.heading}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">{t.agent365.subtitle}</p>
        </div>

        <div className="gradient-border p-8 md:p-10 rounded-2xl mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-4">{t.agent365.whatIsLabel}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{t.agent365.whatIsTitle}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">{t.agent365.whatIsDesc1}</p>
              <p className="text-gray-400 leading-relaxed mb-4">{t.agent365.whatIsDesc2}</p>
              <p className="text-gray-500 text-sm">{t.agent365.whatIsNote}</p>
            </div>
            <div className="space-y-3">
              {t.agent365.infoBoxes.map((box, i) => {
                const icons = ["🏢", "🛡️", "📈", "🔄"];
                return (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-2xl">{icons[i]}</span>
                    <div>
                      <span className="text-white font-semibold text-sm block">{box.title}</span>
                      <span className="text-gray-500 text-xs">{box.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-8">{t.agent365.capTitle}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.agent365.capabilities.map((cap, index) => (
            <div key={index} className="gradient-border card-hover p-6 rounded-2xl">
              <div className="text-3xl mb-3">{cap.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{cap.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-8">{t.agent365.useCaseTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.agent365.useCases.map((uc, index) => (
            <div key={index} className="gradient-border p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-300 text-sm font-bold">{index + 1}</span>
                <h4 className="text-white font-bold text-sm">{uc.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>

        <div className="gradient-border p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-white mb-4">{t.agent365.serviceTitle}</h3>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">{t.agent365.serviceDesc}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {t.agent365.serviceTags.map((tag, i) => (
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
