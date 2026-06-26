"use client"

import Image from "next/image"
import { Award, MapPin, Target, Users } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

const iconMap = [Users, Award, Target] as const

export function About() {
  const { t, tArray } = useTranslation()
  const stats = tArray("about.stats") as { value: string; label: string }[]

  return (
    <section id="apropos" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C9A227] font-medium mb-3 tracking-wide uppercase text-sm">
            {t("about.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C9A227]/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2016.06.41-PgY0O4rD3QQ3urwRPAH6lNqAhbRLGD.jpeg"
                alt="Rachida Bigourn - Chef de projet Marketing Digital"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#C9A227]/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl -z-10" />
          </div>

          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("about.paragraph1") }} />
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>

            <div className="flex items-center gap-2 mt-6 text-muted-foreground">
              <MapPin className="h-5 w-5 text-[#C9A227]" />
              <span>{t("about.location")}</span>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-5 mt-6 border-l-4 border-[#C9A227]">
              <p className="font-serif text-lg italic leading-relaxed">
                &ldquo;{t("about.quote")}&rdquo;
              </p>
              <p className="mt-2 font-medium text-sm">— Rachida Bigourn</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = iconMap[index] || Award
            return (
              <div key={index} className="text-center p-4 bg-secondary rounded-xl border border-[#C9A227]/20">
                <Icon className="h-6 w-6 text-[#C9A227] mx-auto mb-2" />
                <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
