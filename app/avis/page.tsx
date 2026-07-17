"use client"

import { Header } from "@/components/header"
import { Testimonials } from "@/components/testimonials"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function AvisPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Testimonials />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
