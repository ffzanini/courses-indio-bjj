"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function BrazilFlag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 513 342"
      className="h-6 w-8 rounded-sm"
      aria-hidden
    >
      <path fill="#009b3a" d="M0 0h513v342H0z" />
      <path fill="#fedf00" d="m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7z" />
      <circle fill="#FFF" cx="256.5" cy="171" r="80.4" />
      <path
        fill="#002776"
        d="M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zM334.9 186c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z"
      />
    </svg>
  );
}

function UnitedStatesFlag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 513 342"
      className="h-6 w-8 rounded-sm"
      aria-hidden
    >
      <path fill="#FFF" d="M0 0h513v342H0z" />
      <g fill="#D80027">
        <path d="M0 0h513v26.3H0zM0 52.6h513v26.3H0zM0 105.2h513v26.3H0zM0 157.8h513v26.3H0zM0 210.5h513v26.3H0zM0 263.1h513v26.3H0zM0 315.7h513V342H0z" />
      </g>
      <path fill="#2E52B2" d="M0 0h256.5v184.1H0z" />
      <g fill="#FFF">
        <path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zM104.1 138.9l-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zM160.6 138.9l-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zM216.8 138.9l-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zM43.8 75.3l-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zM156.3 75.3l-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zM212.8 75.3l-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zM43.8 24.7l-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zM100 24.7l-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zM156.3 24.7l-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zM212.8 24.7l-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z" />
      </g>
    </svg>
  );
}

export function LocaleSwitcher({
  locale,
  label,
}: {
  locale: string;
  label: string;
  tone?: "light" | "dark" | "plain";
}) {
  const pathname = usePathname();
  const target = locale === "pt" ? "en" : "pt";
  const nextPathname = pathname.replace(
    new RegExp(`^/${locale}(?=/|$)`),
    `/${target}`,
  );

  return (
    <Link
      href={nextPathname}
      hrefLang={target}
      aria-label={label}
      className="flex cursor-pointer items-center justify-center rounded-sm transition-opacity hover:opacity-80"
    >
      {target === "en" ? <UnitedStatesFlag /> : <BrazilFlag />}
    </Link>
  );
}
