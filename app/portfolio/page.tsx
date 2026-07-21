"use client"

import { Header } from "@/components/header"
import { Portfolio } from "@/components/portfolio"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Portfolio />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
