import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { notFound } from "next/navigation";

import { PacotePageContent } from "@/components/PacotePageContent";
import { MAIN_SITE, SITE_URL, bundleCheckoutUrl } from "@/constants/site";
import { routing } from "@/i18n/routing";
import { absoluteUrl, pathnameWithLocale } from "@/lib/locale-path";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "pacote" });
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const title = t("metaTitle");
  const description = t("metaDescription");
  const siteTitle =
    locale === "pt" ? "Cursos online JA Índio" : "JA Índio online courses";

  return {
    title,
    description,
    alternates: {
      canonical: pathnameWithLocale("/pacote", locale),
      languages: {
        "pt-BR": pathnameWithLocale("/pacote", "pt"),
        en: pathnameWithLocale("/pacote", "en"),
      },
    },
    openGraph: {
      title: `${title} | ${siteTitle}`,
      description,
      url: absoluteUrl("/pacote", locale),
      siteName: tSeo("webSiteName"),
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
      images: [{ url: `${MAIN_SITE}/images/visit-card.png` }],
    },
  };
}

export default async function PacotePage({ params }: Props) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "pacote" });
  const tSeo = await getTranslations({ locale, namespace: "seo" });

  const pacoteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: tSeo("pacoteWebPageName"),
    description: t("metaDescription"),
    url: absoluteUrl("/pacote", locale),
    isPartOf: {
      "@type": "WebSite",
      name: tSeo("webSiteName"),
      url: SITE_URL.replace(/\/$/, ""),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pacoteJsonLd) }}
      />
      <PacotePageContent checkout={bundleCheckoutUrl()} />
    </>
  );
}
