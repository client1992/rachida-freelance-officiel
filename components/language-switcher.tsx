"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"
import { type Locale } from "@/lib/language-context"

const languages: { code: Locale; label: string; name: string; hreflang: string }[] = [
  { code: "fr", label: "FR", name: "Français", hreflang: "fr" },
  { code: "en", label: "EN", name: "English", hreflang: "en" },
  { code: "es", label: "ES", name: "Español", hreflang: "es" },
  { code: "ar", label: "AR", name: "العربية", hreflang: "ar" },
]

const nonFrLocales = ["en", "es", "ar"]

function getCurrentLocale(pathname: string): Locale {
  const segments = pathname.split("/")
  if (nonFrLocales.includes(segments[1])) return segments[1] as Locale
  return "fr"
}

function getLocalePath(pathname: string, locale: Locale): string {
  if (locale === "fr") {
    return pathname.replace(/^\/(en|es|ar)/, "") || "/"
  }
  const stripped = pathname.replace(/^\/(en|es|ar)/, "") || "/"
  return `/${locale}${stripped === "/" ? "" : stripped}`
}

export function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLocale = getCurrentLocale(pathname)

  return (
    <nav aria-label="Langue / Language" role="navigation">
      <div className="flex items-center gap-1 border border-border rounded-lg p-0.5">
        <Globe className="h-3.5 w-3.5 text-muted-foreground ml-1" aria-hidden="true" />
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={getLocalePath(pathname, lang.code)}
            lang={lang.code}
            hrefLang={lang.hreflang}
            aria-label={`Changer en ${lang.name}`}
            title={lang.name}
            className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
              currentLocale === lang.code
                ? "bg-[#C9A227] text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {lang.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
