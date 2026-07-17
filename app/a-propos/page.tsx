"use client"

import { Header } from "@/components/header"
import { About } from "@/components/about"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
