import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import { SiteFooter } from "@/components/SiteFooter";
import { MAIN_SITE } from "@/constants/site";
import { bundleThemeKeys } from "@/data/courses";
import { pathnameWithLocale } from "@/lib/locale-path";

export async function PacotePageContent({
  checkout,
}: {
  checkout: string | null;
}) {
  const locale = await getLocale();
  const t = await getTranslations("pacote");
  const tBundle = await getTranslations("bundle");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-foreground/10 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href={pathnameWithLocale("/", locale)}
            className="text-sm font-semibold text-secondary hover:underline"
          >
            {t("back")}
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-12 sm:px-6">
        <h1 className="text-4xl font-bold text-foreground">{t("title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("description")}</p>

        <ul className="mt-8 list-inside list-disc space-y-2 text-foreground">
          {bundleThemeKeys.map((key) => (
            <li key={key}>{tBundle(`themes.${key}`)}</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {checkout ? (
            <a
              href={checkout}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary-ja px-8 py-3 text-center text-base font-bold text-dark-theme hover:opacity-90"
            >
              {t("buyNow")}
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full bg-foreground/10 px-8 py-3 text-center text-base font-semibold text-muted-foreground">
              {t("checkoutSoon")}
            </span>
          )}
          <a
            href={MAIN_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-foreground/20 px-8 py-3 text-center text-base font-semibold text-foreground transition-colors hover:border-primary-ja hover:text-secondary"
          >
            {t("academySite")}
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
