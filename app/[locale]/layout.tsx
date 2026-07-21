import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { LanguageProvider } from "@/lib/language-context"
import { notFound } from "next/navigation"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const locales = ["en", "es", "ar"]

const metadataBase = "https://rachidabigourn.fr"

const seoData: Record<
  string,
  { title: string; description: string; ogLocale: string }
> = {
  en: {
    title: "Digital Marketing Project Manager in Paris | Rachida Bigourn",
    description:
      "Professional, elegant and high-performing showcase websites for SMEs, artisans and entrepreneurs in Paris and worldwide. Free quote!",
    ogLocale: "en_US",
  },
  es: {
    title: "Director de Proyectos de Marketing Digital en París | Rachida Bigourn",
    description:
      "Sitios web vitrina profesionales, elegantes y de alto rendimiento para PYMES, artesanos y emprendedores en París y a nivel internacional. ¡Presupuesto gratuito!",
    ogLocale: "es_ES",
  },
  ar: {
    title: "مديرة مشاريع التسويق الرقمي في باريس | رشيدة بيغورن",
    description:
      "إنشاء مواقع عرض احترافية وأنيقة وعالية الأداء للشركات الصغيرة والمتوسطة والحرفيين ورواد الأعمال في باريس وحول العالم. عرض أسعار مجاني!",
    ogLocale: "ar_SA",
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Metadata {
  return params.then(({ locale }) => {
    const data = seoData[locale] || seoData.en

    return {
      title: data.title,
      description: data.description,
      keywords: [
        "Chef de projet marketing digital",
        "création site vitrine Paris",
        "référencement naturel",
        "SEO international",
        "Rachida Bigourn",
        "site internet professionnel",
      ],
      authors: [{ name: "Rachida Bigourn", url: metadataBase }],
      creator: "Rachida Bigourn",
      icons: { icon: "/favicon.png" },
      openGraph: {
        title: data.title,
        description: data.description,
        url: `${metadataBase}/${locale}`,
        siteName: "Rachida Bigourn - Marketing Digital",
        locale: data.ogLocale,
        type: "website",
      },
      alternates: {
        canonical: `${metadataBase}/${locale}`,
        languages: {
          fr: metadataBase,
          en: `${metadataBase}/en`,
          es: `${metadataBase}/es`,
          ar: `${metadataBase}/ar`,
          "x-default": metadataBase,
        },
      },
    }
  })
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${inter.variable} ${playfair.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        <LanguageProvider initialLocale={locale as "en" | "es" | "ar"}>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
          {process.env.NODE_ENV === "production" && (
            <>
              <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-X8C7MGSQFW"
                strategy="afterInteractive"
              />
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
