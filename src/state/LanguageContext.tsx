import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LanguageCode = "en" | "am";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (value: LanguageCode) => void;
  isAmharic: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "habesha.language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "am" ? "am" : "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    const root = document.documentElement;
    root.lang = language === "am" ? "am" : "en";
    root.dir = "ltr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      isAmharic: language === "am"
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
