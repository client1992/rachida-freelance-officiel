"use client"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { useTranslation } from "@/lib/use-translation"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t, tArray } = useTranslation()

  const guaranteeItems = tArray("contact.guaranteeItems") as string[]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch("https://formspree.io/f/xyklqoel", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          city: formData.get("city"),
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C9A227] font-medium mb-3 tracking-wide uppercase text-sm">
            {t("contact.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.email")}</h3>
                    <a 
                      href="mailto:Bigourn.rachida@gmail.com" 
                      className="text-muted-foreground hover:text-[#C9A227] transition-colors"
                    >
                      Bigourn.rachida@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.location")}</h3>
                    <p className="text-muted-foreground">{t("contact.locationValue")}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.available")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary text-primary-foreground rounded-xl p-6 border-l-4 border-[#C9A227]">
              <h3 className="font-semibold text-lg mb-3">{t("contact.guarantees")}</h3>
              <ul className="space-y-2 text-primary-foreground/90 text-sm">
                {guaranteeItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:Bigourn.rachida@gmail.com"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-[#C9A227] text-[#C9A227] rounded-lg font-medium hover:bg-[#C9A227] hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              {t("contact.directEmail")}
            </a>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-[#C9A227]" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      {t("contact.form.success")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("contact.form.successText")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="name">{t("contact.form.nameLabel")}</FieldLabel>
                          <Input
                            id="name"
                            name="name"
                            placeholder={t("contact.form.namePlaceholder")}
                            required
                            className="border-border focus:border-[#C9A227] focus:ring-[#C9A227]"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="company">{t("contact.form.companyLabel")}</FieldLabel>
                          <Input
                            id="company"
                            name="company"
                            placeholder={t("contact.form.companyPlaceholder")}
                            className="border-border focus:border-[#C9A227] focus:ring-[#C9A227]"
                          />
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel htmlFor="email">{t("contact.form.emailLabel")}</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t("contact.form.emailPlaceholder")}
                          required
                          className="border-border focus:border-[#C9A227] focus:ring-[#C9A227]"
                        />
                      </Field>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="phone">{t("contact.form.phoneLabel")}</FieldLabel>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder={t("contact.form.phonePlaceholder")}
                            className="border-border focus:border-[#C9A227] focus:ring-[#C9A227]"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="city">{t("contact.form.cityLabel")}</FieldLabel>
                          <Input
                            id="city"
                            name="city"
                            placeholder={t("contact.form.cityPlaceholder")}
                            className="border-border focus:border-[#C9A227] focus:ring-[#C9A227]"
                          />
                        </Field>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center mt-4">
                        {t("contact.form.consent")}
                      </p>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
