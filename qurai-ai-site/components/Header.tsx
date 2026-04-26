"use client";

import { useState } from "react";
import { useLanguage } from "../lib/i18n";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#agent365", label: t.nav.agent365 },
    { href: "#partners", label: t.nav.partners },
    { href: "#references", label: t.nav.references },
    { href: "#whyus", label: t.nav.whyus },
    { href: "#contact", label: t.nav.contact },
  ];

  const langs: { code: "en" | "ko" | "ja"; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ko", label: "한" },
    { code: "ja", label: "日" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <span className="text-xl font-bold gradient-text">QURAI</span>
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-1 ml-2 px-1 py-1 bg-white/5 rounded-full border border-white/10">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === l.code
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a href="#contact" className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            {t.nav.cta}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center gap-1 px-1 py-1 bg-white/5 rounded-full border border-white/10">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === l.code
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="block text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white text-sm font-semibold" onClick={() => setIsMenuOpen(false)}>
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
