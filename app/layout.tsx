import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Chef de projet Marketing Digital à Paris | Rachida Bigourn",
  description: "Création de sites vitrines professionnels, élégants et performants pour PME, artisans et entrepreneurs à Paris et à l'international. Devis gratuit !",
  keywords: ["Chef de projet marketing digital", "création site vitrine Paris", "référencement naturel", "SEO international", "Rachida Bigourn", "site internet professionnel"],
  authors: [{ name: "Rachida Bigourn", url: "https://rachidabigourn.fr" }],
  creator: "Rachida Bigourn",
  openGraph: {
    title: "Chef de projet Marketing Digital à Paris | Rachida Bigourn",
    description: "Création de sites vitrines professionnels et performants. Conçus pour la conversion et optimisés pour le SEO, disponibles partout dans le monde.",
    url: "https://rachidabigourn.fr",
    siteName: "Rachida Bigourn - Marketing Digital",
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
          {process.env.NODE_ENV === 'production' && (
            <>
              <Script src="https://www.googletagmanager.com/gtag/js?id=G-X8C7MGSQFW" strategy="afterInteractive" />
              <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-X8C7MGSQFW');`}
              </Script>
            </>
          )}
        </LanguageProvider>
      </body>
    </html>
  )
}
