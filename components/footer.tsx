"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/use-translation"

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/a-propos", label: t("nav.about") },
    { href: "/temoignages", label: t("nav.testimonials") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-27%20at%2011.11.57-vtVczZnzPAmlKMNyyL3Ct8fRlLzsRW.jpeg"
                alt="Rachida Bigourn Logo"
                width={45}
                height={45}
                className="rounded-sm"
              />
              <span className="font-serif text-xl font-semibold">
                {t("footer.brand")}
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#C9A227]">{t("footer.navTitle")}</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-[#C9A227] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#C9A227]">{t("footer.contactTitle")}</h3>
            <div className="space-y-2 text-background/70">
              <p>{t("footer.location")}</p>
              <a 
                href="mailto:Bigourn.rachida@gmail.com" 
                className="hover:text-[#C9A227] transition-colors block"
              >
                Bigourn.rachida@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} BIGOURN Rachida. {t("footer.copyright")}
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-[#C9A227] transition-colors">
              {t("footer.legal")}
            </Link>
            <Link href="#" className="hover:text-[#C9A227] transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
