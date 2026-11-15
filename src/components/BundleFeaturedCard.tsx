import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import { bundleThemeKeys } from "@/data/courses";
import { pathnameWithLocale } from "@/lib/locale-path";

export async function BundleFeaturedCard({
  bundleCheckoutHref,
  learnMoreHref,
}: {
  bundleCheckoutHref: string | null;
  learnMoreHref: string;
}) {
  const t = await getTranslations("bundle");
  const locale = await getLocale();
  const hasCheckout = Boolean(bundleCheckoutHref);

  return (
    <section className="rise-in-bundle relative overflow-hidden rounded-3xl border border-primary-ja/50 bg-dark-theme text-white-theme shadow-xl">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-ja/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden
      />

      <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex items-center rounded-full bg-primary-ja px-3 py-1 text-xs font-bold uppercase tracking-wide text-dark-theme">
            {t("badge")}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-xl text-lg text-white-theme/85">
            {t("subtitle")}
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {bundleThemeKeys.map((key) => (
              <li
                key={key}
                className="flex items-center gap-2 text-sm text-white-theme/90"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-ja"
                  aria-hidden
                />
                {t(`themes.${key}`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white-theme/15 bg-white-theme/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-white-theme/80">
              {t("promoLabel")}
            </p>
            <p className="mt-2 text-2xl font-bold text-primary-ja">
              {t("promoHighlight")}
            </p>
            <p className="mt-1 text-sm text-white-theme/70">{t("promoNote")}</p>
          </div>

          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-white-theme/20 sm:grid-cols-2">
            {hasCheckout ? (
              <a
                href={bundleCheckoutHref!}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-primary-ja py-4 text-center text-base font-bold text-dark-theme transition-opacity hover:opacity-90"
              >
                {t("buyNow")}
              </a>
            ) : (
              <span className="flex items-center justify-center bg-white-theme/10 py-4 text-center text-base font-semibold text-white-theme/60">
                {t("buyNowSoon")}
              </span>
            )}
            <Link
              href={pathnameWithLocale(learnMoreHref, locale)}
              className="flex items-center justify-center border-t border-white-theme/20 py-4 text-center text-base font-semibold text-white-theme transition-colors hover:bg-white-theme/10 sm:border-l sm:border-t-0"
            >
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
