"use client"

import { useLanguage, type Locale } from "@/lib/language-context"
import { Globe } from "lucide-react"

const languages: { code: Locale; label: string; name: string; hreflang: string }[] = [
  { code: "fr", label: "FR", name: "Français", hreflang: "fr" },
  { code: "en", label: "EN", name: "English", hreflang: "en" },
  { code: "es", label: "ES", name: "Español", hreflang: "es" },
  { code: "ar", label: "AR", name: "العربية", hreflang: "ar" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <nav aria-label="Langue / Language" role="navigation">
      <div className="flex items-center gap-1 border border-border rounded-lg p-0.5">
        <Globe className="h-3.5 w-3.5 text-muted-foreground ml-1" aria-hidden="true" />
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            lang={lang.code}
            hrefLang={lang.hreflang}
            aria-label={`Changer en ${lang.name}`}
            className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
              locale === lang.code
                ? "bg-[#C9A227] text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
            title={lang.name}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
