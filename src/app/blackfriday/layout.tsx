import type { ReactNode } from "react";
import { Instrument_Serif } from "next/font/google";

import { fontMontserrat } from "@/app/fonts";
import { AnalyticsWrapper } from "@/components/Analytics";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

import "../globals.css";

const fontDisplay = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export default function BlackFridayLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontMontserrat.variable} ${fontMontserrat.className} ${fontDisplay.variable} min-h-screen bg-dark-theme text-white-theme antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ScrollToTopButton />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
