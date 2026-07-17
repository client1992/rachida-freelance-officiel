"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
