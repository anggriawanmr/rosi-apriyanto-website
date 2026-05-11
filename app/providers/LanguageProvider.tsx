"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved language
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      // Use browser language or default to English
      const browserLang = navigator.language.split("-")[0];
      const initialLang = (browserLang === "id" ? "id" : "en") as Language;
      setLanguageState(initialLang);
      document.documentElement.lang = initialLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  if (!mounted) {
    // During SSR/hydration, provide default context
    return (
      <LanguageContext.Provider
        value={{ language: "en", setLanguage: () => {} }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback for SSR or when provider is not available
    return {
      language: "en" as Language,
      setLanguage: () => {},
    };
  }
  return context;
}
