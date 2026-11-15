import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { fontMontserrat } from "@/app/fonts";
import { AnalyticsWrapper } from "@/components/Analytics";
import { HtmlLang } from "@/components/HtmlLang";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { MAIN_SITE, SITE_URL } from "@/constants/site";
import {
  buildCoursesItemListJsonLd,
  buildWebSiteJsonLd,
} from "@/data/json-ld";
import { routing } from "@/i18n/routing";
import { absoluteUrl, pathnameWithLocale } from "@/lib/locale-path";

import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    return {};
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "seo" });
  const titleDefault = t("defaultTitle");
  const description = t("defaultDescription");
  const ogImage = `${MAIN_SITE}/images/visit-card.png`;
  const canonicalPath = pathnameWithLocale("/", locale);
  const ogLocale = locale === "pt" ? "pt_BR" : "en_US";

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
        "x-default": pathnameWithLocale("/", "pt"),
      },
    },
    icons: "/favicon.ico",
    openGraph: {
      type: "website",
      url: absoluteUrl("/", locale),
      siteName: t("webSiteName"),
      locale: ogLocale,
      alternateLocale: locale === "pt" ? ["en_US"] : ["pt_BR"],
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

  const itemList = await buildCoursesItemListJsonLd(locale);
  const webSite = await buildWebSiteJsonLd(locale);
  const lang = locale === "pt" ? "pt-BR" : "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${fontMontserrat.variable} ${fontMontserrat.className} min-h-screen antialiased`}
        suppressHydrationWarning
      >
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
        <HtmlLang />
        {children}
        <ScrollToTopButton />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
