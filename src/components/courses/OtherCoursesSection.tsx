"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import { useCourseCopy } from "@/components/courses/use-course-copy";

const COURSES = [
  {
    id: "drills" as const,
    href: "/drills",
    src: "/images/courses/drills-sequencia.webp",
    titleKey: "courseDrillsTitle" as const,
    descKey: "courseDrillsDesc" as const,
  },
  {
    id: "halfguard" as const,
    href: "/halfguard",
    src: "/images/courses/meia-guarda.webp",
    titleKey: "courseHalfGuardTitle" as const,
    descKey: "courseHalfGuardDesc" as const,
  },
  {
    id: "nogi" as const,
    href: "/nogi",
    src: "/images/courses/no-gi.webp",
    titleKey: "courseNogiTitle" as const,
    descKey: "courseNogiDesc" as const,
  },
  {
    id: "guardpassing" as const,
    href: "/guardpassing",
    src: "/images/courses/passagens-de-guarda.jpg",
    titleKey: "courseGuardPassingTitle" as const,
    descKey: "courseGuardPassingDesc" as const,
  },
  {
    id: "openguard" as const,
    href: "/openguard",
    src: "/images/courses/guarda-aberta.webp",
    titleKey: "courseOpenGuardTitle" as const,
    descKey: "courseOpenGuardDesc" as const,
  },
  {
    id: "escapes" as const,
    href: "/escapes",
    src: "/images/courses/saidas-escapadas.webp",
    titleKey: "courseEscapesTitle" as const,
    descKey: "courseEscapesDesc" as const,
  },
] as const;

export type CourseId = (typeof COURSES)[number]["id"];

export function OtherCoursesSection({
  currentCourse,
}: {
  currentCourse: CourseId;
}) {
  const { translations: t } = useCourseCopy();
  const locale = useLocale();
  const otherCourses = COURSES.filter((course) => course.id !== currentCourse);

  return (
    <section
      id="outros-cursos"
      className="cv-auto border-t border-foreground/10 bg-background py-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-center text-3xl font-semibold text-foreground">
          {t.common.otherCourses.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-muted-foreground">
          {t.common.otherCourses.subtitle}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {otherCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Link
                href={`/${locale}${course.href}`}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-foreground/20 bg-background shadow-sm transition-all hover:border-foreground/30 hover:shadow-md"
              >
                <div className="relative aspect-square w-full bg-foreground/5">
                  <Image
                    src={course.src}
                    alt={t.common.nav[course.titleKey]}
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {t.common.nav[course.titleKey]}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground">
                    {t.common.nav[course.descKey]}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    {t.common.buttons.learnMore}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
