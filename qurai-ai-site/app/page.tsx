"use client";

import { useState } from "react";
import { useLanguage } from "../lib/i18n";
import {
  Shield, Lock, Eye, ShieldCheck, Brain, Cpu, Zap, Sparkles, Bot,
  BarChart3, TrendingUp, Users, MessageSquare, Mail,
  FileText, FileSearch, Settings, Layers, Search,
  AlertTriangle, Clock, Menu, X, ChevronRight, ArrowRight,
  CheckCircle, CircleDot, Workflow
} from "lucide-react";

/* ═══════════════ SVG LOGO ═══════════════ */

function QLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="qg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="50%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#00D1FF" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="17" r="13" stroke="url(#qg)" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <line x1="26" y1="25" x2="35" y2="34" stroke="url(#qg)" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

/* ═══════════════ ICON MAPS ═══════════════ */

const PROBLEM_ICONS = [Workflow, Clock, FileText, AlertTriangle];
const AGENT_ICONS = [MessageSquare, FileSearch, Mail, Brain, ShieldCheck];
const UC_ICONS = [TrendingUp, Shield, Settings, BarChart3];
const SEC_ICONS = [Shield, Eye, Lock, FileText, Users, CheckCircle];
const PHASE_ICONS = [Search, Layers, Cpu, Users, BarChart3];

const ARCH_LAYERS = [
  { label: "Microsoft 365 Applications", items: ["Teams", "SharePoint", "Outlook", "Excel", "Power Platform"], color: "from-[#2F6BFF]/20 to-[#2F6BFF]/5", core: false },
  { label: "Microsoft Graph API", items: ["Users", "Mail", "Files", "Calendar", "Security"], color: "from-[#2F6BFF]/15 to-[#00D1FF]/10", core: false },
  { label: "QURAI Agent Orchestration", items: ["Agent Registry", "Workflow Engine", "Context Manager", "Memory Store", "Tool Router"], color: "from-[#2F6BFF]/30 to-[#00D1FF]/20", core: true },
  { label: "Azure OpenAI / LLM Layer", items: ["GPT-4o", "Embeddings", "Fine-tuning", "RAG Pipeline", "Prompt Governance"], color: "from-[#00D1FF]/15 to-[#00D1FF]/5", core: false },
  { label: "Enterprise Governance", items: ["Entra ID", "Purview", "DLP", "Audit Logs", "RBAC"], color: "from-white/[0.04] to-white/[0.02]", core: false },
];

/* ═══════════════ HEADER ═══════════════ */

function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const nav = t.nav;

  const links = [
    { href: "#platform", label: nav.platform },
    { href: "#usecases", label: nav.usecases },
    { href: "#architecture", label: nav.arch },
    { href: "#security", label: nav.security },
    { href: "#consulting", label: nav.consulting },
  ];

  const langs: { code: "en" | "ko" | "ja"; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ko", label: "한" },
    { code: "ja", label: "日" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-2xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <QLogo size={32} />
          <span className="text-lg font-bold tracking-wider gradient-text">QURAI</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="text-[13px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-2 px-1 py-1 bg-white/[0.03] rounded-full border border-white/[0.06]">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${lang === l.code ? "bg-[#2F6BFF] text-white" : "text-slate-500 hover:text-white"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="#cta" className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#2F6BFF] to-[#00D1FF] rounded-lg glow-btn">
            {nav.cta}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center gap-1 px-1 py-1 bg-white/[0.03] rounded-full border border-white/[0.06]">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === l.code ? "bg-[#2F6BFF] text-white" : "text-slate-500 hover:text-white"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button className="text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#050816]/95 backdrop-blur-2xl border-t border-white/[0.04] px-6 py-6 space-y-4">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="block text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className="block text-center px-5 py-3 bg-gradient-to-r from-[#2F6BFF] to-[#00D1FF] rounded-lg text-white text-sm font-semibold" onClick={() => setOpen(false)}>
            {nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}

/* ═══════════════ HERO ═══════════════ */

function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050816] to-[#0f172a]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-[20%] w-[600px] h-[600px] bg-[#2F6BFF]/8 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-[20%] w-[500px] h-[500px] bg-[#00D1FF]/6 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6BFF]/10 border border-[#2F6BFF]/20 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span className="text-xs font-semibold text-[#00D1FF] tracking-wide">{h.badge}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4">
              <span className="text-white">{h.h1a}</span>
              <br />
              <span className="text-white">{h.h1b}</span>
              <span className="gradient-text">{h.h1c}</span>
            </h1>

            <p className="text-sm font-mono tracking-[0.3em] text-[#00D1FF]/60 uppercase mb-6">AI That Decides.</p>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">{h.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2F6BFF] to-[#00D1FF] rounded-xl text-white font-semibold glow-btn">
                {h.cta1} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#platform" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold border border-white/10 hover:bg-white/[0.03] transition-all">
                {h.cta2} <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/[0.04]">
              {[
                { v: h.s1v, l: h.s1l },
                { v: h.s2v, l: h.s2l },
                { v: h.s3v, l: h.s3l },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl font-bold gradient-text">{s.v}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="glass-card p-6 shadow-[0_0_80px_rgba(47,107,255,0.06)] animate-float">
              <div className="text-center mb-5">
                <span className="text-[10px] font-mono text-[#00D1FF] tracking-[0.25em] uppercase">QURAI Agent Platform</span>
                <div className="h-px bg-gradient-to-r from-transparent via-[#2F6BFF]/30 to-transparent mt-3" />
              </div>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {["Teams", "SharePoint", "Outlook", "Excel"].map((n) => (
                  <div key={n} className="bg-[#2F6BFF]/10 border border-[#2F6BFF]/15 rounded-lg p-3 text-center">
                    <span className="text-[11px] font-semibold text-white">{n}</span>
                    <span className="block text-[9px] text-slate-500 mt-0.5">Agent</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 my-2 px-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2F6BFF]/20" />
                <ChevronRight className="w-3 h-3 text-[#2F6BFF]/40 rotate-90" />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2F6BFF]/20" />
              </div>
              <div className="bg-gradient-to-r from-[#2F6BFF]/20 to-[#00D1FF]/15 border border-[#2F6BFF]/20 rounded-lg p-3 text-center mb-3">
                <Bot className="w-4 h-4 text-[#00D1FF] mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-[#00D1FF]">QURAI Orchestration Engine</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="glass rounded-lg p-2.5 text-center">
                  <span className="text-[10px] text-slate-400">Microsoft Graph</span>
                </div>
                <div className="glass rounded-lg p-2.5 text-center">
                  <span className="text-[10px] text-slate-400">Azure OpenAI</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Entra ID", "Purview", "DLP"].map((n) => (
                  <div key={n} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-2 text-center">
                    <Lock className="w-3 h-3 text-slate-600 mx-auto mb-0.5" />
                    <span className="text-[9px] text-slate-500">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ PROBLEMS ═══════════════ */

function ProblemSection() {
  const { t } = useLanguage();
  const p = t.problems;

  return (
    <section className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D1FF]">{p.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {p.title}<span className="gradient-text">{p.highlight}</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{p.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {p.items.map((item, i) => {
            const Icon = PROBLEM_ICONS[i];
            return (
              <div key={i} className="glass-card p-7">
                <div className="w-11 h-11 rounded-xl bg-[#2F6BFF]/10 border border-[#2F6BFF]/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#2F6BFF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ PLATFORM ═══════════════ */

function PlatformSection() {
  const { t } = useLanguage();
  const p = t.platform;

  return (
    <section id="platform" className="relative py-28 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D1FF]">{p.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {p.title}<span className="gradient-text">{p.highlight}</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{p.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.agents.map((a, i) => {
            const Icon = AGENT_ICONS[i];
            return (
              <div key={i} className={`glass-card p-7 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2F6BFF]/20 to-[#00D1FF]/10 border border-[#2F6BFF]/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{a.name}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{a.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {a.features.map((f, j) => (
                    <span key={j} className="px-2.5 py-1 bg-[#2F6BFF]/8 border border-[#2F6BFF]/12 rounded-md text-[11px] text-[#00D1FF] font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ USE CASES ═══════════════ */

function UseCasesSection() {
  const { t } = useLanguage();
  const u = t.usecases;

  return (
    <section id="usecases" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D1FF]">{u.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {u.title}<span className="gradient-text">{u.highlight}</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{u.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {u.items.map((uc, i) => {
            const Icon = UC_ICONS[i];
            return (
              <div key={i} className="glass-card p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F6BFF]/20 to-[#00D1FF]/10 border border-[#2F6BFF]/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#2F6BFF]">{uc.role}</span>
                    <h3 className="text-base font-bold text-white">{uc.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{uc.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {uc.outcomes.map((o, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00D1FF]" />
                      <span className="text-[12px] text-slate-300">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ ARCHITECTURE ═══════════════ */

function ArchitectureSection() {
  const { t } = useLanguage();
  const a = t.arch;

  return (
    <section id="architecture" className="relative py-28 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D1FF]">{a.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {a.title}<span className="gradient-text">{a.highlight}</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{a.sub}</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-3">
          {ARCH_LAYERS.map((layer, i) => (
            <div key={i}>
              <div className={`bg-gradient-to-r ${layer.color} border border-white/[0.06] rounded-xl p-5`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-white">{layer.label}</h4>
                  {layer.core && (
                    <span className="px-2.5 py-0.5 bg-[#2F6BFF]/20 border border-[#2F6BFF]/20 rounded text-[10px] text-[#00D1FF] font-bold">QURAI CORE</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item, j) => (
                    <span key={j} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg text-[11px] text-slate-300 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < ARCH_LAYERS.length - 1 && (
                <div className="flex justify-center py-1">
                  <ChevronRight className="w-4 h-4 text-[#2F6BFF]/30 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ SECURITY ═══════════════ */

function SecuritySection() {
  const { t } = useLanguage();
  const s = t.security;

  return (
    <section id="security" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D1FF]">{s.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {s.title}<span className="gradient-text">{s.highlight}</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{s.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((item, i) => {
            const Icon = SEC_ICONS[i];
            return (
              <div key={i} className="glass-card p-7">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#00D1FF]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 glass-card p-6 text-center">
          <p className="text-slate-400 text-sm">{s.compliance}</p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ CONSULTING ═══════════════ */

function ConsultingSection() {
  const { t } = useLanguage();
  const c = t.consulting;

  return (
    <section id="consulting" className="relative py-28 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D1FF]">{c.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {c.title}<span className="gradient-text">{c.highlight}</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{c.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {c.phases.map((phase, i) => {
            const Icon = PHASE_ICONS[i];
            return (
              <div key={i} className="glass-card p-6 text-center relative">
                <div className="text-[10px] font-mono text-[#2F6BFF] tracking-widest mb-4">{phase.num}</div>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2F6BFF]/15 to-[#00D1FF]/10 border border-[#2F6BFF]/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-[#00D1FF]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed mb-4">{phase.desc}</p>
                <div className="space-y-1.5">
                  {phase.deliverables.map((d, j) => (
                    <div key={j} className="flex items-center gap-1.5 justify-center">
                      <CircleDot className="w-2.5 h-2.5 text-[#2F6BFF]" />
                      <span className="text-[10px] text-slate-400">{d}</span>
                    </div>
                  ))}
                </div>
                {i < c.phases.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-4 h-4 text-[#2F6BFF]/30" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ CTA + CONTACT FORM ═══════════════ */

function CTASection() {
  const { t } = useLanguage();
  const ct = t.cta;
  const cf = t.contact;
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="cta" className="relative py-28">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2F6BFF]/8 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6BFF]/10 border border-[#2F6BFF]/20 mb-8">
            <Zap className="w-3.5 h-3.5 text-[#00D1FF]" />
            <span className="text-xs font-semibold text-[#00D1FF]">{ct.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            {ct.title}<br />
            <span className="gradient-text">{ct.highlight}</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">{ct.sub}</p>
        </div>

        {status === "sent" ? (
          <div className="glass-card p-12 text-center max-w-lg mx-auto">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-2">{cf.thankTitle}</h3>
            <p className="text-slate-400">{cf.thankDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{cf.name}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#2F6BFF]/50 focus:ring-1 focus:ring-[#2F6BFF]/50 transition-all"
                  placeholder={cf.namePh}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{cf.email}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#2F6BFF]/50 focus:ring-1 focus:ring-[#2F6BFF]/50 transition-all"
                  placeholder={cf.emailPh}
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-300 mb-2">{cf.company}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#2F6BFF]/50 focus:ring-1 focus:ring-[#2F6BFF]/50 transition-all"
                placeholder={cf.companyPh}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">{cf.msg}</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#2F6BFF]/50 focus:ring-1 focus:ring-[#2F6BFF]/50 transition-all resize-none"
                placeholder={cf.msgPh}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-gradient-to-r from-[#2F6BFF] to-[#00D1FF] rounded-xl text-white font-semibold text-lg glow-btn disabled:opacity-50"
            >
              {status === "sending" ? cf.sending : cf.submit}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        )}

        <p className="text-slate-600 text-xs text-center mt-8">{ct.bottom}</p>
      </div>
    </section>
  );
}

/* ═══════════════ FOOTER ═══════════════ */

function FooterSection() {
  const { t } = useLanguage();
  const f = t.footer;
  const nav = t.nav;

  const platformLinks = ["Teams Agent", "SharePoint Agent", "Outlook Agent", "Decision Agent", "Security Agent"];
  const companyLinks = [
    { label: nav.arch, href: "#architecture" },
    { label: nav.security, href: "#security" },
    { label: nav.consulting, href: "#consulting" },
    { label: nav.usecases, href: "#usecases" },
    { label: nav.cta, href: "#cta" },
  ];

  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <QLogo size={28} />
              <span className="text-base font-bold gradient-text tracking-wider">QURAI</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-4">{f.desc}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-[#2F6BFF]/10 border border-[#2F6BFF]/15 rounded text-[10px] text-[#00D1FF] font-bold">Microsoft Gold</span>
              <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/15 rounded text-[10px] text-orange-400 font-bold">Oracle Gold</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.col1}</h4>
            <ul className="space-y-2.5">
              {platformLinks.map((l, i) => (
                <li key={i}>
                  <a href="#platform" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.col2}</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">{f.copy}</p>
          <p className="text-slate-600 text-[11px]">{f.slogan}</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════ PAGE EXPORT ═══════════════ */

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <PlatformSection />
        <UseCasesSection />
        <ArchitectureSection />
        <SecuritySection />
        <ConsultingSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
