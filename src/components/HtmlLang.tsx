"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

/** Sincroniza <html lang> com o locale ativo (root layout não conhece [locale]). */
export function HtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  return null;
}
