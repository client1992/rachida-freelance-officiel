import { NextRequest, NextResponse } from "next/server"

const locales = ["fr", "en", "es", "ar"]
const defaultLocale = "fr"

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("locale")?.value
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale

  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().substring(0, 2))
      .find((lang) => locales.includes(lang))
    if (preferred) return preferred
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|api|favicon.png|.*\\..*).*)"],
}
