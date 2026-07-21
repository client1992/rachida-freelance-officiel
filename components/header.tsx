"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "@/lib/use-translation"

const locales = ["fr", "en", "es", "ar"]

function getLocale(pathname: string): string {
  const segments = pathname.split("/")
  return locales.includes(segments[1]) ? segments[1] : "fr"
}

function localePath(pathname: string, href: string): string {
  const locale = getLocale(pathname)
  if (href === "/") return `/${locale}`
  return `/${locale}${href}`
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/apropos", label: t("nav.about") },
    { href: "/avis", label: t("nav.testimonials") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={localePath(pathname, "/")} className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-27%20at%2011.11.57-vtVczZnzPAmlKMNyyL3Ct8fRlLzsRW.jpeg"
              alt="Rachida Bigourn Logo RB"
              width={50}
              height={50}
              className="rounded-sm"
            />
            <span className="font-serif text-lg md:text-xl font-semibold text-foreground tracking-wide hidden sm:block">
              RACHIDA BIGOURN
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localePath(pathname, link.href)}
                  className="text-muted-foreground hover:text-[#C9A227] transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground ml-2">
                <Link href={localePath(pathname, "/contact")}>{t("nav.quote")}</Link>
              </Button>
            </nav>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localePath(pathname, link.href)}
                  className="text-muted-foreground hover:text-[#C9A227] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={localePath(pathname, "/contact")} onClick={() => setIsMenuOpen(false)}>
                  {t("nav.quote")}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
