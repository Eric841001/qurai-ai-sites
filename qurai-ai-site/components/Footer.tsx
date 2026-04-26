"use client";

import { useLanguage } from "../lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#partners", label: t.nav.partners },
    { href: "#references", label: t.nav.references },
    { href: "#whyus", label: t.nav.whyus },
    { href: "#contact", label: t.nav.contact },
  ];

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
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-4">{t.footer.desc}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-600/20 rounded text-blue-300 text-xs font-bold">Microsoft Gold</span>
              <span className="px-2 py-1 bg-orange-600/20
