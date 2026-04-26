"use client";

import { useLanguage } from "../lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">{t.hero.badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-white">{t.hero.heading1}</span>
          <br />
          <span className="gradient-text">{t.hero.heading2}</span>
          <br />
          <span className="text-white">{t.hero.heading3}</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <p className="text-base text-blue-400 font-semibold mb-10">
          &quot;{t.hero.slogan}&quot;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105">
            {t.hero.ctaPrimary}
          </a>
          <a href="#services" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all">
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {t.hero.stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
