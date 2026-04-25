"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <span className="text-xl font-bold gradient-text">QURAI.AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
          <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden text-gray-400 hover:text-white"
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
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          <a href="#features" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#about" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#contact" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <a href="#contact" className="block px-5 py-2 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white text-sm font-semibold" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
