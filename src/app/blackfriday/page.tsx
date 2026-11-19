import type { Metadata } from "next";

import { BlackFridayPage } from "@/components/blackfriday/BlackFridayPage";
import { MAIN_SITE, SITE_URL, blackfridayCheckoutUrl } from "@/constants/site";

const title = "Ultra Black Friday | Cursos online JA Índio Jiu Jitsu";
const description =
  "Todos os cursos de Jiu-Jitsu do Índio, com acesso vitalício. A condição imperdível vai até sexta-feira, dia 20.";
const canonical = "/blackfriday";
const ogImage = `${MAIN_SITE}/images/visit-card.png`;

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical,
  },
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: canonical,
    siteName: "Cursos online JA Índio Jiu Jitsu",
    locale: "pt_BR",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1120,
        height: 630,
        alt: "Ultra Black Friday JA Índio Jiu Jitsu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <BlackFridayPage checkoutHref={blackfridayCheckoutUrl()} />;
}
