"use client";

import { useLanguage } from "../lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">{t.about.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.about.heading} <span className="gradient-text">{t.about.headingHighlight}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.about.bgTitle}</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">{t.about.bgText}</p>
            <h3 className="text-xl font-bold text-blue-400 mb-3">{t.about.compTitle}</h3>
            <div className="grid grid-cols-2 gap-3">
              {t.about.competencies.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="gradient-border p-6 rounded-2xl">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-3">{t.about.visionLabel}</span>
              <h4 className="text-xl font-bold text-white mb-2">{t.about.visionTitle}</h4>
              <p className="text-gray-400">{t.about.visionDesc}</p>
            </div>
            <div className="gradient-border p-6 rounded-2xl">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-3">{t.about.missionLabel}</span>
              <h4 className="text-xl font-bold text-white mb-2">{t.about.missionTitle}</h4>
              <p className="text-gray-400">{t.about.missionDesc}</p>
            </div>
            <div className="gradient-border p-6 rounded-2xl text-center">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-md text-xs font-bold text-white mb-3">{t.about.sloganLabel}</span>
              <p className="text-2xl font-bold text-blue-400">&quot;{t.about.slogan}&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
