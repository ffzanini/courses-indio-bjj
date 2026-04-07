/**
 * Detecção de locale alinhada ao portfolio-personal (proxy + libs/i18n):
 * cookie NEXT_LOCALE, depois Accept-Language (com q=), fallback pt.
 */
export const APP_LOCALES = ["pt", "en"] as const;

export type AppLocale = (typeof APP_LOCALES)[number];

export function isValidLocale(value: string | undefined | null): value is AppLocale {
  return value === "pt" || value === "en";
}

export function getLocaleFromAcceptLanguage(
  acceptLanguageHeader: string | null | undefined,
): AppLocale {
  if (!acceptLanguageHeader) return "pt";

  const rankedLanguages = acceptLanguageHeader
    .split(",")
    .map((entry) => {
      const [langPart, qPart] = entry.trim().split(";q=");
      const quality = qPart ? Number(qPart) : 1;
      return {
        lang: langPart?.toLowerCase() ?? "",
        q: Number.isFinite(quality) ? quality : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const item of rankedLanguages) {
    if (!item.lang) continue;
    const base = item.lang.split("-")[0] ?? "";
    if (base === "*") continue;
    if (base === "en") return "en";
    if (base === "pt") return "pt";
  }

  return "pt";
}

export function resolvePreferredLocale({
  cookieLocale,
  acceptLanguage,
}: {
  cookieLocale?: string | null;
  acceptLanguage?: string | null;
}): AppLocale {
  if (cookieLocale && isValidLocale(cookieLocale)) return cookieLocale;
  return getLocaleFromAcceptLanguage(acceptLanguage);
}
