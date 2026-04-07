import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { resolvePreferredLocale } from "@/lib/resolve-locale";

/**
 * Rota real para `/`: sem isso o App Router não encontra página (só existe `[locale]`).
 * Redireciona no servidor conforme NEXT_LOCALE e Accept-Language — funciona mesmo se o middleware falhar no dev.
 */
export const dynamic = "force-dynamic";

export default async function RootPage() {
  const cookieStore = await cookies();
  const headerList = await headers();

  const locale = resolvePreferredLocale({
    cookieLocale: cookieStore.get("NEXT_LOCALE")?.value,
    acceptLanguage: headerList.get("accept-language"),
  });

  redirect(`/${locale}`);
}
