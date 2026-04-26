"use client";

import { useLanguage } from "../lib/i18n";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-32 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">{t.services.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">{t.services.heading}</span> {t.services.headingHighlight}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <div key={index} className="gradient-border card-hover p-7 rounded-2xl">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              <ul className="space-y-1.5">
                {service.list.map((item, i) => (
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
