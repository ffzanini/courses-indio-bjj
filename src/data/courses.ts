import { MAIN_SITE, SITE_URL } from "@/constants/site";

export type CourseAccent =
  | "drills"
  | "halfguard"
  | "nogi"
  | "guardpassing"
  | "openguard"
  | "neutral";

export interface ListedCourse {
  id: string;
  imageUrl: string | null;
  accent: CourseAccent;
  checkoutUrl: string | null;
  learnMorePath: string;
  learnMoreOnMainSite: boolean;
  isPlaceholder?: boolean;
}

export const listedCourses: ListedCourse[] = [
  {
    id: "drills",
    imageUrl: "/images/courses/drills-sequencia.webp",
    accent: "drills",
    checkoutUrl: "https://pay.kiwify.com.br/hkR1jY2",
    learnMorePath: "/drills",
    learnMoreOnMainSite: false,
  },
  {
    id: "halfguard",
    imageUrl: "/images/courses/meia-guarda.webp",
    accent: "halfguard",
    checkoutUrl: "https://pay.kiwify.com.br/T8jqqT5",
    learnMorePath: "/halfguard",
    learnMoreOnMainSite: false,
  },
  {
    id: "nogi",
    imageUrl: "/images/courses/no-gi.webp",
    accent: "nogi",
    checkoutUrl: "https://pay.kiwify.com.br/9vQgsZI",
    learnMorePath: "/nogi",
    learnMoreOnMainSite: false,
  },
  {
    id: "guardpassing",
    imageUrl: "/images/courses/passagens-de-guarda.jpg",
    accent: "guardpassing",
    checkoutUrl: "https://pay.kiwify.com.br/X4gDESY",
    learnMorePath: "/guardpassing",
    learnMoreOnMainSite: false,
  },
  {
    id: "openguard",
    imageUrl: "/images/courses/guarda-aberta.webp",
    accent: "openguard",
    checkoutUrl: "https://pay.kiwify.com.br/BJSNRE2",
    learnMorePath: "/openguard",
    learnMoreOnMainSite: false,
  },
  {
    id: "escapes",
    imageUrl: "/images/courses/saidas-escapadas.webp",
    accent: "neutral",
    checkoutUrl: "https://pay.kiwify.com.br/uXhtF8N",
    learnMorePath: "/escapes",
    learnMoreOnMainSite: false,
  },
];

export function resolveLearnMoreUrl(course: ListedCourse): string {
  if (course.learnMorePath.startsWith("#")) {
    return course.learnMorePath;
  }
  if (course.learnMoreOnMainSite) {
    return `${MAIN_SITE}${course.learnMorePath}`;
  }
  if (course.learnMorePath.startsWith("http")) {
    return course.learnMorePath;
  }
  return `${SITE_URL.replace(/\/$/, "")}${course.learnMorePath}`;
}

/** Ordem das linhas do pacote (chaves em `bundle.themes`). */
export const bundleThemeKeys = [
  "drills",
  "halfguard",
  "nogi",
  "guardpassing",
  "openguard",
  "comingSoon",
] as const;

export function getBundleLearnMorePath(): string {
  return "/pacote";
}
