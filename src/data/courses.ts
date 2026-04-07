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

const asset = (path: string) => `${MAIN_SITE}${path}`;

export const listedCourses: ListedCourse[] = [
  {
    id: "drills",
    imageUrl: asset("/images/courses/indio-curso-drills.webp"),
    accent: "drills",
    checkoutUrl: "https://pay.kiwify.com.br/hkR1jY2",
    learnMorePath: "/courses/drills",
    learnMoreOnMainSite: true,
  },
  {
    id: "halfguard",
    imageUrl: asset("/images/courses/indio-curso-meia-guarda.webp"),
    accent: "halfguard",
    checkoutUrl: "https://pay.kiwify.com.br/T8jqqT5",
    learnMorePath: "/courses/halfguard",
    learnMoreOnMainSite: true,
  },
  {
    id: "nogi",
    imageUrl: asset("/images/courses/indio-curso-nogi.webp"),
    accent: "nogi",
    checkoutUrl: "https://pay.kiwify.com.br/9vQgsZI",
    learnMorePath: "/courses/nogi",
    learnMoreOnMainSite: true,
  },
  {
    id: "guardpassing",
    imageUrl: asset("/images/courses/indio-curso-passagens-guarda.svg"),
    accent: "guardpassing",
    checkoutUrl: "https://pay.kiwify.com.br/X4gDESY",
    learnMorePath: "/courses/guardpassing",
    learnMoreOnMainSite: true,
  },
  {
    id: "openguard",
    imageUrl: asset("/images/courses/indio-curso-guarda-aberta.webp"),
    accent: "openguard",
    checkoutUrl: "https://pay.kiwify.com.br/BJSNRE2",
    learnMorePath: "/courses/openguard",
    learnMoreOnMainSite: true,
  },
  {
    id: "coming-soon",
    imageUrl: null,
    accent: "neutral",
    checkoutUrl: null,
    learnMorePath: "#cursos",
    learnMoreOnMainSite: false,
    isPlaceholder: true,
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
