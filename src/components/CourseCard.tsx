import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import type { ListedCourse } from "@/data/courses";
import { resolveLearnMoreUrl } from "@/data/courses";
import { pathnameWithLocale } from "@/lib/locale-path";

const CARD_IMAGE_WIDTH = 400;
const CARD_IMAGE_HEIGHT = 600;

function CourseImage({
  course,
  title,
}: {
  course: ListedCourse;
  title: string;
}) {
  if (course.cardImageUrl) {
    return (
      <Image
        src={course.cardImageUrl}
        alt={title}
        width={CARD_IMAGE_WIDTH}
        height={CARD_IMAGE_HEIGHT}
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }

  if (!course.imageUrl) return null;

  const isSvg = course.imageUrl.endsWith(".svg");

  return (
    <Image
      src={course.imageUrl}
      alt={title}
      fill
      quality={75}
      unoptimized={isSvg}
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}

export async function CourseCard({
  course,
  index,
}: {
  course: ListedCourse;
  index: number;
}) {
  const locale = await getLocale();
  const t = await getTranslations("courses");
  const tCard = await getTranslations("courseCard");
  const title = t(`${course.id}.title`);
  const description = t(`${course.id}.description`);
  const learnMore =
    course.learnMoreOnMainSite || course.learnMorePath.startsWith("#")
      ? resolveLearnMoreUrl(course)
      : pathnameWithLocale(course.learnMorePath, locale);
  const learnMoreExternal = learnMore.startsWith("http");
  const hasCheckout = Boolean(course.checkoutUrl);

  return (
    <article
      style={{ animationDelay: `${index * 60}ms` }}
      className="rise-in flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-dark-theme/10 transition-shadow hover:ring-secondary/40"
    >
      <div
        className={
          course.cardImageUrl
            ? "w-full bg-foreground/5"
            : "relative aspect-square w-full overflow-hidden bg-foreground/5"
        }
      >
        {course.cardImageUrl || course.imageUrl ? (
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
            className="flex items-center justify-center bg-secondary py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
        ) : learnMoreExternal ? (
          <a
            href={learnMore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-l border-foreground/10 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            {tCard("learnMore")}
          </a>
        ) : (
          <Link
            href={learnMore}
            className="flex items-center justify-center border-l border-foreground/10 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            {tCard("learnMore")}
          </Link>
        )}
      </div>
    </article>
  );
}
