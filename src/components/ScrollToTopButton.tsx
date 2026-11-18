"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RiArrowUpLine } from "react-icons/ri";

import { stickyPurchaseVisible } from "@/components/blackfriday/StickyPurchaseBar";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const label = pathname.startsWith("/en") ? "Back to top" : "Voltar ao topo";
  const onBlackFriday = pathname.includes("/blackfriday");
  const [abovePurchaseBar, setAbovePurchaseBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 100);
      setAbovePurchaseBar(onBlackFriday && stickyPurchaseVisible());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onBlackFriday]);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 z-50 cursor-pointer rounded-full bg-primary-ja p-2 opacity-80 transition-[transform,bottom] hover:scale-110 ${abovePurchaseBar ? "bottom-28 md:bottom-12" : "bottom-12"}`}
    >
      <RiArrowUpLine size={24} className="text-dark-theme" />
    </button>
  );
}
