"use client";

import { useLanguage } from "../providers/LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={() => setLanguage(language === "en" ? "id" : "en")}
      aria-label="Toggle language"
      title={`Switch to ${language === "en" ? "Indonesian" : "English"}`}
    >
      {language === "en" ? "ID" : "EN"}
    </button>
  );
}
