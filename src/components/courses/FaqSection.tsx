"use client";

import { useState } from "react";
import { RiArrowDownLine } from "react-icons/ri";

import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  tone?: "light" | "dark";
}

export function FaqSection({ items, tone = "light" }: Readonly<FAQProps>) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const dark = tone === "dark";

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors duration-300",
              dark
                ? "border-white/10 bg-[#121212]"
                : "border-foreground/20 bg-card",
              isOpen && dark && "border-primary-ja/50",
            )}
          >
            <button
              onClick={() => toggle(index)}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left font-semibold",
                dark ? "text-white-theme" : "text-foreground",
              )}
            >
              <span>{item.question}</span>
              {dark ? (
                <span
                  className={cn(
                    "text-xl leading-none text-primary-ja transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden
                >
                  +
                </span>
              ) : (
                <RiArrowDownLine
                  size={20}
                  className={cn(
                    "shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              )}
            </button>
            <div
              className={cn(
                "grid overflow-hidden px-4 transition-all duration-300",
                dark ? "text-white-theme/75" : "text-muted-foreground",
                isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
