import type { MetadataRoute } from "next";

import { SITE_URL } from "@/constants/site";

const paths = [
  "",
  "/pacote",
  "/drills",
  "/halfguard",
  "/nogi",
  "/openguard",
  "/guardpassing",
  "/escapes",
] as const;
const locales = ["pt", "en"] as const;

function alternateLanguages(path: string) {
  const base = SITE_URL.replace(/\/$/, "");
  const pt = `${base}/pt${path}`;
  const en = `${base}/en${path}`;

  return {
    "pt-BR": pt,
    en,
    "x-default": pt,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE_URL.replace(/\/$/, "");

  return [
    ...paths.flatMap((path) =>
      locales.map((locale) => ({
        url: `${base}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: alternateLanguages(path),
        },
      })),
    ),
    {
      url: `${base}/blackfriday`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];
}
