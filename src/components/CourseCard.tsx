"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import type { ListedCourse } from "@/data/courses";
import { resolveLearnMoreUrl } from "@/data/courses";
import { cn } from "@/lib/utils";

const accentRing: Record<ListedCourse["accent"], string> = {
  drills: "ring-drills-theme/40 hover:ring-drills-theme/70",
  halfguard: "ring-half-guard-theme/40 hover:ring-half-guard-theme/70",
  nogi: "ring-nogi-theme/40 hover:ring-nogi-theme/70",
  guardpassing: "ring-guard-passing-theme/40 hover:ring-guard-passing-theme/70",
  openguard: "ring-open-guard-theme/40 hover:ring-open-guard-theme/70",
  neutral: "ring-foreground/15 hover:ring-foreground/25",
};

const accentBar: Record<ListedCourse["accent"], string> = {
  drills: "bg-drills-theme",
  halfguard: "bg-half-guard-theme",
  nogi: "bg-nogi-theme",
  guardpassing: "bg-guard-passing-theme",
  openguard: "bg-open-guard-theme",
  neutral: "bg-foreground/20",
};

const accentCtaBg: Record<ListedCourse["accent"], string> = {
  drills: "bg-drills-theme",
  halfguard: "bg-half-guard-theme",
  nogi: "bg-nogi-theme",
  guardpassing: "bg-guard-passing-theme",
  openguard: "bg-open-guard-theme",
  neutral: "",
};

const accentCtaText: Record<ListedCourse["accent"], string> = {
  drills: "text-white",
  halfguard: "text-dark-theme",
  nogi: "text-dark-theme",
  guardpassing: "text-white",
  openguard: "text-white",
  neutral: "",
};

function CourseImage({
  course,
  title,
}: {
  course: ListedCourse;
  title: string;
}) {
  if (!course.imageUrl) return null;

  const isSvg = course.imageUrl.endsWith(".svg");

  return (
    <Image
      src={course.imageUrl}
      alt={title}
      fill
      unoptimized={isSvg}
      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}

export function CourseCard({
  course,
  index,
}: {
  course: ListedCourse;
  index: number;
}) {
  const t = useTranslations("courses");
  const tCard = useTranslations("courseCard");
  const title = t(`${course.id}.title`);
  const description = t(`${course.id}.description`);
  const learnMore = resolveLearnMoreUrl(course);
  const hasCheckout = Boolean(course.checkoutUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-2 ring-inset transition-shadow",
        accentRing[course.accent],
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-foreground/5">
        <div
          className={cn(
            "absolute left-0 top-0 z-10 h-1 w-full",
            accentBar[course.accent],
          )}
          aria-hidden
        />
        {course.imageUrl ? (
          <CourseImage course={course} title={title} />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-foreground/5 to-foreground/10 px-6 text-center">
            <span className="rounded-full bg-foreground/15 px-3 py-1 text-xs font-semibold text-foreground">
              {tCard("comingSoon")}
            </span>
            <p className="text-sm text-muted-foreground">
              {tCard("placeholderImageNote")}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-0 border-t border-foreground/10">
        {hasCheckout ? (
          <a
            href={course.checkoutUrl!}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center py-3.5 text-center text-sm font-semibold transition-opacity hover:opacity-90",
              accentCtaBg[course.accent],
              accentCtaText[course.accent],
            )}
          >
            {tCard("buyNow")}
          </a>
        ) : (
          <span className="flex cursor-not-allowed items-center justify-center bg-foreground/10 py-3.5 text-center text-sm font-medium text-muted-foreground">
            {tCard("comingSoon")}
          </span>
        )}
        {course.isPlaceholder ? (
          <span className="flex items-center justify-center border-l border-foreground/10 py-3.5 text-center text-sm text-muted-foreground">
            {tCard("learnMoreSoon")}
          </span>
        ) : (
          <a
            href={learnMore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-l border-foreground/10 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            {tCard("learnMore")}
          </a>
        )}
      </div>
    </motion.article>
  );
}
