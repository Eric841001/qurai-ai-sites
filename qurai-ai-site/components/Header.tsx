"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "회사소개" },
    { href: "#services", label: "사업영역" },
    { href: "#agent365", label: "M365 Agent" },
    { href: "#partners", label: "파트너십" },
    { href: "#references", label: "레퍼런스" },
    { href: "#whyus", label: "Why QURAI" },
    { href: "#contact", label: "문의하기" },
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

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            프로젝트 상담
          </a>
        </nav>

        <button
          className="lg:hidden text-gray-400 hover:text-white"
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

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="block text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white text-sm font-semibold" onClick={() => setIsMenuOpen(false)}>
            프로젝트 상담
          </a>
        </div>
      )}
    </header>
  );
}
