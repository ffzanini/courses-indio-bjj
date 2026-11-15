"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** O root layout não re-renderiza na troca de idioma pelo cliente. */
export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0];
    document.documentElement.lang = segment === "en" ? "en" : "pt-BR";
  }, [pathname]);

  return null;
}
