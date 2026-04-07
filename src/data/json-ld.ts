import { getTranslations } from "next-intl/server";

import { MAIN_SITE, SITE_URL } from "@/constants/site";
import { absoluteUrl } from "@/lib/locale-path";
import { listedCourses, resolveLearnMoreUrl } from "@/data/courses";

const provider = {
  "@type": "Organization" as const,
  name: "JA Índio Jiu Jitsu",
  url: MAIN_SITE,
};

export async function buildCoursesItemListJsonLd(locale: string) {
  const tCourse = await getTranslations({ locale, namespace: "courses" });
  const tSeo = await getTranslations({ locale, namespace: "seo" });

  const items: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: tSeo("bundleCourseName"),
        description: tSeo("bundleCourseDescription"),
        url: absoluteUrl("/pacote", locale),
        provider,
      },
    },
  ];

  let position = 2;
  for (const course of listedCourses) {
    const url = course.isPlaceholder
      ? `${absoluteUrl("/", locale)}#cursos`
      : resolveLearnMoreUrl(course);
    items.push({
      "@type": "ListItem",
      position,
      item: {
        "@type": "Course",
        name: tCourse(`${course.id}.title`),
        description: tCourse(`${course.id}.description`),
        url,
        provider,
      },
    });
    position += 1;
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: tSeo("itemListName"),
    description: tSeo("itemListDescription"),
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export async function buildWebSiteJsonLd(locale: string) {
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const base = SITE_URL.replace(/\/$/, "");
  const inLanguage = locale === "pt" ? "pt-BR" : "en-US";

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: tSeo("webSiteName"),
    url: base,
    description: tSeo("webSiteDescription"),
    inLanguage,
    publisher: {
      "@type": "Organization",
      name: "JA Índio Jiu Jitsu",
      url: MAIN_SITE,
    },
  };
}
