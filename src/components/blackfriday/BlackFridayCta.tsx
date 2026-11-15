"use client";

import { blackfridayCtaLabel } from "@/data/blackfriday";
import { trackEvent } from "@/libs/facebook-pixel";
import { cn } from "@/lib/utils";

export function BlackFridayCta({
  href,
  label = blackfridayCtaLabel,
  size = "default",
  className,
  button = "blackfriday_cta",
  solid = false,
}: {
  href: string | null;
  label?: string;
  size?: "default" | "large";
  className?: string;
  button?: string;
  solid?: boolean;
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full text-center font-bold tracking-wide uppercase transition",
    size === "large"
      ? "px-8 py-5 text-base sm:text-lg"
      : "px-6 py-3.5 text-sm",
    href || solid
      ? "bg-primary-ja text-dark-theme shadow-[0_12px_40px_rgba(209,255,0,0.35)]"
      : "cursor-not-allowed bg-white-theme/10 text-white-theme/50",
    href && "hover:brightness-110",
    !href && "cursor-not-allowed",
    className,
  );

  if (!href) {
    return (
      <span className={classes} aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      onClick={() =>
        trackEvent("ButtonClick", { page: "blackfriday", button })
      }
    >
      {label}
    </a>
  );
}
