import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Rachida Bigourn | Création de Sites Vitrines à Paris',
  description: 'Chef de projet Marketing Digital à Paris. Je crée des sites vitrines professionnels et optimisés SEO pour entrepreneurs, commerçants et PME. Boostez votre visibilité en ligne.',
  keywords: ['création site vitrine', 'site web Paris', 'marketing digital', 'web design', 'SEO', 'entrepreneur', 'commerçant', 'auto-entrepreneur'],
  authors: [{ name: 'Rachida Bigourn' }],
  creator: 'Rachida Bigourn',
  openGraph: {
    title: 'Rachida Bigourn | Création de Sites Vitrines à Paris',
    description: 'Chef de projet Marketing Digital à Paris. Je crée des sites vitrines professionnels et optimisés SEO pour entrepreneurs, commerçants et PME.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rachida Bigourn | Création de Sites Vitrines à Paris',
    description: 'Chef de projet Marketing Digital à Paris. Je crée des sites vitrines professionnels et optimisés SEO.',
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
