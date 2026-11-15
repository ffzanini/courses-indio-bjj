"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const INTERVAL_MS = 1800;
const DESKTOP_VISIBLE = 3;

export function TestimonialCarousel({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [visible, setVisible] = useState(DESKTOP_VISIBLE);
  const slides = [...items, ...items.slice(0, visible)];

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setVisible(query.matches ? 1 : DESKTOP_VISIBLE);
      setAnimate(false);
      setIndex(0);
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || items.length <= visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, items.length, visible]);

  useEffect(() => {
    if (animate) return;
    const id = window.requestAnimationFrame(() => setAnimate(true));
    return () => window.cancelAnimationFrame(id);
  }, [animate]);

  if (items.length === 0) return null;

  const settle = () => {
    if (index < items.length) return;
    setAnimate(false);
    setIndex(0);
  };

  return (
    <div
      className="relative mt-8 w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "flex ease-[cubic-bezier(0.22,1,0.36,1)]",
            animate ? "transition-transform duration-450" : "transition-none",
          )}
          style={{
            width: `${(slides.length / visible) * 100}%`,
            transform: `translateX(-${(index * 100) / slides.length}%)`,
          }}
          onTransitionEnd={settle}
        >
          {slides.map((item, slideIndex) => (
            <div
              key={`${item.src}-${slideIndex}`}
              className="shrink-0 px-2"
              style={{ width: `${100 / slides.length}%` }}
              aria-hidden={slideIndex >= items.length}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white-theme/15 bg-white-theme md:aspect-[5/4]">
                <Image
                  src={item.src}
                  alt={slideIndex >= items.length ? "" : item.alt}
                  fill
                  quality={75}
                  className="object-contain"
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
