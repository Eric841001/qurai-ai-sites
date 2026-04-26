"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

type Language = "en" | "ko" | "ja";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
}>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : lang === "ko" ? "ko" : "ja";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
