"use client"

import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Services />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
