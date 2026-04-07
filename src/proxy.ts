import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";
import { isValidLocale, resolvePreferredLocale } from "@/lib/resolve-locale";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const hasLocalePrefix = isValidLocale(first);

  if (!hasLocalePrefix) {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const locale = resolvePreferredLocale({
      cookieLocale,
      acceptLanguage: request.headers.get("accept-language"),
    });
    const targetPath =
      pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    const url = new URL(targetPath, request.url);
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(pt|en)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
