"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

export type Locale = "fr" | "en" | "es" | "ar"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved && ["fr", "en", "es", "ar"].includes(saved)) {
      setLocale(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
    localStorage.setItem("locale", locale)
  }, [locale])

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale)
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale, dir: locale === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
