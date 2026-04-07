import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { HtmlLang } from "@/components/HtmlLang";
import { MAIN_SITE, SITE_URL } from "@/constants/site";
import {
  buildCoursesItemListJsonLd,
  buildWebSiteJsonLd,
} from "@/data/json-ld";
import { routing } from "@/i18n/routing";
import { absoluteUrl, pathnameWithLocale } from "@/lib/locale-path";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "seo" });
  const titleDefault = t("defaultTitle");
  const description = t("defaultDescription");
  const ogImage = `${MAIN_SITE}/images/visit-card.png`;
  const canonicalPath = pathnameWithLocale("/", locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: titleDefault,
      template: `%s | ${locale === "pt" ? "Cursos online JA Índio" : "JA Índio online courses"}`,
    },
    description,
    keywords: t("keywords"),
    authors: [{ name: "JA Índio Jiu Jitsu", url: MAIN_SITE }],
    creator: "JA Índio Jiu Jitsu",
    alternates: {
      canonical: canonicalPath,
      languages: {
        "pt-BR": pathnameWithLocale("/", "pt"),
        en: pathnameWithLocale("/", "en"),
      },
    },
    icons: {
      icon: `${MAIN_SITE}/favicon.ico`,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl("/", locale),
      siteName: t("webSiteName"),
      locale: locale === "pt" ? "pt_BR" : "en_US",
      title: titleDefault,
      description,
      images: [
        {
          url: ogImage,
          width: 1120,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const itemList = await buildCoursesItemListJsonLd(locale);
  const webSite = await buildWebSiteJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSite),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemList),
        }}
      />
      <NextIntlClientProvider messages={messages}>
        <HtmlLang />
        {children}
      </NextIntlClientProvider>
      <Analytics mode="production" />
      <SpeedInsights />
    </>
  );
}
