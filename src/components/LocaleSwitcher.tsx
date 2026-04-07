"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("localeSwitcher");
  const target = locale === "pt" ? "en" : "pt";
  const label = locale === "pt" ? t("switchToEn") : t("switchToPt");

  return (
    <Link
      href={pathname}
      locale={target}
      className="rounded-full border border-foreground/20 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-guard-passing-theme hover:text-guard-passing-theme-dark"
      hrefLang={target}
    >
      {label}
    </Link>
  );
}
