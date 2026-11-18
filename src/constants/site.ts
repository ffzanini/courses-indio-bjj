export const MAIN_SITE =
  process.env.NEXT_PUBLIC_MAIN_SITE ?? "https://indiobjj.com.br";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cursos.indiobjj.com.br";

export function bundleCheckoutUrl(): string | null {
  const u = process.env.NEXT_PUBLIC_KIWIFY_BUNDLE_URL;
  return u && u.trim() !== "" ? u.trim() : null;
}

export function blackfridayCheckoutUrl(): string {
  const u = process.env.NEXT_PUBLIC_KIWIFY_BLACKFRIDAY_URL;
  return u && u.trim() !== ""
    ? u.trim()
    : "https://pay.kiwify.com.br/4STxkAR";
}
