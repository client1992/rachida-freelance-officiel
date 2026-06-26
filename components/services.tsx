import { Globe, Palette, Search, Smartphone, TrendingUp, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Création de site vitrine",
    description:
      "Un site web professionnel qui reflète votre identité et met en valeur vos services. Design sur mesure adapté à votre activité.",
  },
  {
    icon: Smartphone,
    title: "Design responsive",
    description:
      "Votre site s'adapte parfaitement à tous les écrans : mobile, tablette et ordinateur pour une expérience utilisateur optimale.",
  },
  {
    icon: Search,
    title: "Optimisation SEO",
    description:
      "Votre site est conçu pour être visible sur Google. Je mets en place les bonnes pratiques pour améliorer votre référencement naturel.",
  },
  {
    icon: Palette,
    title: "Identité visuelle",
    description:
      "Création d'une identité graphique cohérente : choix des couleurs, typographies et éléments visuels qui vous représentent.",
  },
  {
    icon: TrendingUp,
    title: "Stratégie digitale",
    description:
      "Conseil en stratégie web et accompagnement pour maximiser votre présence en ligne et atteindre vos objectifs commerciaux.",
  },
  {
    icon: Wrench,
    title: "Maintenance & support",
    description:
      "Un accompagnement continu pour maintenir votre site à jour, sécurisé et performant au fil du temps.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C9A227] font-medium mb-3 tracking-wide uppercase text-sm">
            Mes services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Des solutions complètes pour votre succès digital
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            De la conception à la mise en ligne, je m&apos;occupe de tout pour vous livrer 
            un site web performant et prêt à convertir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:shadow-lg hover:border-[#C9A227]/30 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-[#C9A227]/10 flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-[#C9A227] transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
