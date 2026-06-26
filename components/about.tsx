import Image from "next/image"
import { Award, MapPin, Target, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "50+", label: "Clients accompagnés" },
  { icon: Award, value: "100%", label: "Satisfaction client" },
  { icon: Target, value: "360°", label: "Vision web complète" },
]

export function About() {
  return (
    <section id="apropos" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <p className="text-[#C9A227] font-medium mb-3 tracking-wide uppercase text-sm">
            À propos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Votre partenaire pour une présence digitale réussie
          </h2>
        </div>

        {/* Two columns: Photo left, Text right */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo - Left side */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C9A227]/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-26%20at%2016.06.41-PgY0O4rD3QQ3urwRPAH6lNqAhbRLGD.jpeg"
                alt="Rachida Bigourn - Chef de projet Marketing Digital"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#C9A227]/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content - Right side */}
          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis <strong className="text-foreground">Rachida Bigourn</strong>, Chef de projet 
                Marketing Digital basée à Paris. Grâce à mon parcours au Digital Campus Paris (75011), 
                j&apos;accompagne les nouvelles entreprises, sociétés, auto-entrepreneurs et commerçants 
                dans la création de leur identité numérique.
              </p>
              <p>
                Ce cursus m&apos;a permis d&apos;acquérir une vision à 360° du web, où le design rencontre 
                la stratégie. Aujourd&apos;hui, je mets ce savoir-faire au service de vos projets pour créer 
                des sites vitrines qui ne sont pas seulement esthétiques, mais véritablement pensés pour 
                booster votre visibilité et votre crédibilité dès le lancement de votre activité.
              </p>
              <p>
                Mon expertise me permet de concevoir des sites performants, faciles à utiliser sur mobile 
                comme sur ordinateur. De la structure du site à la stratégie publicitaire, je m&apos;occupe 
                de tout pour vous livrer un outil clé en main, capable de transformer vos visiteurs en clients.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6 text-muted-foreground">
              <MapPin className="h-5 w-5 text-[#C9A227]" />
              <span>Paris, France</span>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-5 mt-6 border-l-4 border-[#C9A227]">
              <p className="font-serif text-lg italic leading-relaxed">
                &ldquo;Mon objectif : vous offrir un site web qui travaille pour vous, 
                24h/24, 7j/7.&rdquo;
              </p>
              <p className="mt-2 font-medium text-sm">— Rachida Bigourn</p>
            </div>
          </div>
        </div>

        {/* Stats - Below */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-secondary rounded-xl border border-[#C9A227]/20">
              <stat.icon className="h-6 w-6 text-[#C9A227] mx-auto mb-2" />
              <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
