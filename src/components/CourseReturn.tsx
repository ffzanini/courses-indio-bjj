import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { pathnameWithLocale } from "@/lib/locale-path";

export async function CourseReturn() {
  const locale = await getLocale();
  const t = await getTranslations("common");
  const tLocale = await getTranslations("localeSwitcher");
  const localeLabel =
    locale === "pt" ? tLocale("switchToEn") : tLocale("switchToPt");

  return (
    <div className="bg-dark-theme pt-6 text-white-theme">
      <div className="mx-auto flex w-full max-w-[120rem] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={pathnameWithLocale("/", locale)}
          className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          {t("backHome")}
        </Link>
        <LocaleSwitcher locale={locale} label={localeLabel} tone="plain" />
      </div>
    </div>
  );
}
