"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

const locales = ["fr", "en", "es", "ar"]

function getLocale(pathname: string): string {
  const segments = pathname.split("/")
  return locales.includes(segments[1]) ? segments[1] : "fr"
}

export function CtaFinal() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const locale = getLocale(pathname)

  return (
    <section className="py-16 md:py-24 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A227]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-background mb-6 text-balance">
          {t("cta.title")}
        </h2>
        <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto text-pretty">
          {t("cta.subtitle")}
        </p>
        <Button 
          size="lg" 
          asChild 
          className="bg-[#C9A227] hover:bg-[#C9A227]/90 text-foreground text-lg px-8 py-6 font-semibold"
        >
          <Link href={`/${locale}/contact`}>
            {t("cta.button")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
