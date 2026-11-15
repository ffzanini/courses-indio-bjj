import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { HomePage } from "@/components/HomePage";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <HomePage />;
}
