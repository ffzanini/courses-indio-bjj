"use client";

import { useEffect, useState } from "react";

import { BlackFridayCta } from "@/components/blackfriday/BlackFridayCta";

export const HERO_CTA_ID = "bf-hero-cta";
const SHOW_AFTER_PX = 220;

export function scrolledPastHeroCta() {
  const hero = document.getElementById(HERO_CTA_ID);
  if (!hero) return false;
  return hero.getBoundingClientRect().bottom < -SHOW_AFTER_PX;
}

export function StickyPurchaseBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(scrolledPastHeroCta());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-dark-theme/95 p-3 backdrop-blur-sm md:hidden">
      <BlackFridayCta href="#checkout" button="sticky" className="w-full" />
    </div>
  );
}
