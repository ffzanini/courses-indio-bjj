"use client";

import { useEffect, useState } from "react";

import {
  BF_ACQUIRE_ID,
  BlackFridayCta,
} from "@/components/blackfriday/BlackFridayCta";

const NEAR_PX = 220;

export function stickyPurchaseVisible() {
  const nodes = document.querySelectorAll("[data-bf-inline-cta]");
  if (nodes.length === 0) return false;
  const height = window.innerHeight;
  for (const node of nodes) {
    const rect = node.getBoundingClientRect();
    const near = rect.bottom > -NEAR_PX && rect.top < height + NEAR_PX;
    if (near) return false;
  }
  return true;
}

function scrollToAcquire() {
  const target = document.getElementById(BF_ACQUIRE_ID);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "center",
  });
}

export function StickyPurchaseBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = stickyPurchaseVisible();
      setVisible((current) => (current === next ? current : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-dark-theme/95 p-3 backdrop-blur-sm md:hidden">
      <BlackFridayCta
        href={`#${BF_ACQUIRE_ID}`}
        button="sticky"
        className="w-full"
        onClick={(event) => {
          event.preventDefault();
          scrollToAcquire();
        }}
      />
    </div>
  );
}
