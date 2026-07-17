"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

export function Hero() {
  const { t, tArray } = useTranslation()
  const highlights = tArray("hero.highlights") as string[]

  return (
    <section id="accueil" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-secondary">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[#C9A227] font-medium mb-4 tracking-wide uppercase text-sm">
            {t("hero.badge")}
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
            {t("hero.title1")}{" "}
            <span className="text-primary">{t("hero.title2")}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" asChild className="text-base bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-[#C9A227]/50 text-foreground hover:bg-[#C9A227]/10 hover:border-[#C9A227]">
              <Link href="/services">{t("hero.cta2")}</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-[#C9A227]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
