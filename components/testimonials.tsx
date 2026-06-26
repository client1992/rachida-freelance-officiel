"use client"

import { MessageSquare } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

export function Testimonials() {
  const { t } = useTranslation()

  return (
    <section id="avis" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C9A227] font-medium mb-3 tracking-wide uppercase text-sm">
            {t("testimonials.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="h-10 w-10 text-[#C9A227]" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              {t("testimonials.cardTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("testimonials.cardText")}
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <a 
                href="#laisser-avis" 
                className="text-primary font-medium hover:text-[#C9A227] transition-colors"
              >
                {t("testimonials.leaveReview")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
