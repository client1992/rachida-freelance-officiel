import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-27%20at%2011.11.57-vtVczZnzPAmlKMNyyL3Ct8fRlLzsRW.jpeg"
                alt="Rachida Bigourn Logo"
                width={45}
                height={45}
                className="rounded-sm"
              />
              <span className="font-serif text-xl font-semibold">
                BIGOURN Rachida
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Chef de projet Marketing Digital à Paris. 
              Création de sites vitrines professionnels pour entrepreneurs et PME.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-[#C9A227]">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-[#C9A227] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-[#C9A227]">Contact</h3>
            <div className="space-y-2 text-background/70">
              <p>Paris, France</p>
              <a 
                href="mailto:Bigourn.rachida@gmail.com" 
                className="hover:text-[#C9A227] transition-colors block"
              >
                Bigourn.rachida@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} BIGOURN Rachida. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-[#C9A227] transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-[#C9A227] transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
