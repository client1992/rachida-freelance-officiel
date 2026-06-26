"use client"

import { useLanguage, type Locale } from "@/lib/language-context"
import { Globe } from "lucide-react"

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg p-0.5">
      <Globe className="h-3.5 w-3.5 text-muted-foreground ml-1" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
            locale === lang.code
              ? "bg-[#C9A227] text-white"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          title={lang.label}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
