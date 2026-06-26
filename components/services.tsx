"use client"

import { Globe, Palette, Search, Smartphone, TrendingUp, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/use-translation"

const iconMap = [Globe, Smartphone, Search, Palette, TrendingUp, Wrench]

export function Services() {
  const { t, tArray } = useTranslation()
  const services = tArray("services.items") as { title: string; description: string }[]

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C9A227] font-medium mb-3 tracking-wide uppercase text-sm">
            {t("services.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[index] || Globe
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg hover:border-[#C9A227]/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-[#C9A227]/10 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-[#C9A227] transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
