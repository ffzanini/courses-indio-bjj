import { SITE_URL } from "@/constants/site";

/** Sempre prefixa locale: `/pt`, `/pt/pacote`, `/en/pacote`. */
export function pathnameWithLocale(path: string, locale: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") {
    return `/${locale}`;
  }
  return `/${locale}${p}`;
}

export function absoluteUrl(path: string, locale: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  return `${base}${pathnameWithLocale(path, locale)}`;
}
