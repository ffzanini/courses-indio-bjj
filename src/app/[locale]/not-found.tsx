import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import { pathnameWithLocale } from "@/lib/locale-path";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-lg text-muted-foreground">{t("title")}</p>
      <Link
        href={pathnameWithLocale("/", locale)}
        className="font-semibold text-secondary hover:underline"
      >
        {t("home")}
      </Link>
    </div>
  );
}
