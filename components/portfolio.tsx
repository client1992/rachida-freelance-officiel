import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Maison d'Artisanat Marocain",
    description: "Une vitrine élégante pour mettre en valeur l'authenticité et le savoir-faire de l'artisanat marocain. Un design chaleureux aux teintes terracotta qui reflète la richesse culturelle et attire une clientèle passionnée par les créations artisanales uniques.",
    url: "https://www.maison-dartisanat-marocain.fr/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202026-04-27%20113839-sQpND0oZk8WJxRLVkiwdeQ7IQPiiYA.png",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C9A227] font-medium mb-3 tracking-wide uppercase text-sm">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Mes réalisations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez un aperçu des sites que j&apos;ai conçus pour mes clients. 
            Chaque projet est pensé pour refléter l&apos;identité unique de chaque entreprise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-1 bg-[#C9A227] mb-4 rounded-full" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <Button asChild variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    Voir le site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
