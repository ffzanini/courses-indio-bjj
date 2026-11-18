"use client";

import { useEffect } from "react";

import { FacebookPixel } from "@/components/blackfriday/FacebookPixel";
import { trackEvent } from "@/libs/facebook-pixel";

export function BlackFridayTracking() {
  useEffect(() => {
    trackEvent("ViewContent", {
      page: "blackfriday",
      content_name: "Ultra Black Friday",
      content_category: "offer",
    });
  }, []);

  return <FacebookPixel />;
}
