import type { Metadata } from "next";
import type { AbstractIntlMessages } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CourseIntl } from "@/components/courses/CourseIntl";
import { CourseReturn } from "@/components/CourseReturn";
import DrillsContent from "@/components/courses/DrillsContent";
import EscapesContent from "@/components/courses/EscapesContent";
import { FacebookPixel } from "@/components/courses/FacebookPixel";
import GuardpassingContent from "@/components/courses/GuardpassingContent";
import HalfguardContent from "@/components/courses/HalfguardContent";
import NogiContent from "@/components/courses/NogiContent";
import OpenguardContent from "@/components/courses/OpenguardContent";
import { SiteFooter } from "@/components/SiteFooter";
import { MAIN_SITE } from "@/constants/site";
import { routing } from "@/i18n/routing";
import { absoluteUrl, pathnameWithLocale } from "@/lib/locale-path";

const COURSE_PAGES = {
  drills: DrillsContent,
  halfguard: HalfguardContent,
  nogi: NogiContent,
  openguard: OpenguardContent,
  guardpassing: GuardpassingContent,
  escapes: EscapesContent,
} as const;

type CourseSlug = keyof typeof COURSE_PAGES;
type Locale = (typeof routing.locales)[number];

type Props = { params: Promise<{ locale: string; course: string }> };

function isCourseSlug(value: string): value is CourseSlug {
  return value in COURSE_PAGES;
}

function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(COURSE_PAGES).map((course) => ({ course }));
}

async function loadCopy(locale: Locale, course: CourseSlug) {
  const loaders = {
    pt: {
      drills: () => import("@/content/courses/pt/drills.json"),
      halfguard: () => import("@/content/courses/pt/halfguard.json"),
      nogi: () => import("@/content/courses/pt/nogi.json"),
      openguard: () => import("@/content/courses/pt/openguard.json"),
      guardpassing: () => import("@/content/courses/pt/guardpassing.json"),
      escapes: () => import("@/content/courses/pt/escapes.json"),
      professor: () => import("@/content/courses/pt/professor.json"),
      common: () => import("@/content/courses/pt/common.json"),
      seo: () => import("@/content/courses/pt/seo.json"),
    },
    en: {
      drills: () => import("@/content/courses/en/drills.json"),
      halfguard: () => import("@/content/courses/en/halfguard.json"),
      nogi: () => import("@/content/courses/en/nogi.json"),
      openguard: () => import("@/content/courses/en/openguard.json"),
      guardpassing: () => import("@/content/courses/en/guardpassing.json"),
      escapes: () => import("@/content/courses/en/escapes.json"),
      professor: () => import("@/content/courses/en/professor.json"),
      common: () => import("@/content/courses/en/common.json"),
      seo: () => import("@/content/courses/en/seo.json"),
    },
  } as const;

  const bundle = loaders[locale];
  const [copy, professor, common, seo] = await Promise.all([
    bundle[course](),
    bundle.professor(),
    bundle.common(),
    bundle.seo(),
  ]);

  return {
    copy: copy.default,
    professor: professor.default,
    common: common.default,
    seo: seo.default,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, course } = await params;
  if (!isLocale(locale) || !isCourseSlug(course)) return {};

  setRequestLocale(locale);
  const { seo } = await loadCopy(locale, course);
  const title = seo[`${course}_title`];
  const description = seo[`${course}_description`];
  const image = `${MAIN_SITE}/images/visit-card.png`;

  return {
    title,
    description,
    alternates: {
      canonical: pathnameWithLocale(`/${course}`, locale),
      languages: {
        "pt-BR": pathnameWithLocale(`/${course}`, "pt"),
        en: pathnameWithLocale(`/${course}`, "en"),
        "x-default": pathnameWithLocale(`/${course}`, "pt"),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/${course}`, locale),
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? ["en_US"] : ["pt_BR"],
      type: "website",
      images: [{ url: image, width: 1120, height: 630, alt: title }],
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const { locale, course } = await params;
  if (!isLocale(locale) || !isCourseSlug(course)) notFound();

  setRequestLocale(locale);
  const { copy, professor, common, seo } = await loadCopy(locale, course);
  const Content = COURSE_PAGES[course];
  const title = seo[`${course}_title`];
  const description = seo[`${course}_description`];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    url: absoluteUrl(`/${course}`, locale),
    provider: {
      "@type": "Organization",
      name: "JA Índio Jiu Jitsu",
      url: MAIN_SITE,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FacebookPixel />
      <CourseReturn />
      <CourseIntl
        locale={locale}
        messages={
          {
            [course]: copy,
            professor,
            common,
          } as AbstractIntlMessages
        }
      >
        <Content />
      </CourseIntl>
      <SiteFooter />
    </>
  );
}
