"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OrangeSectionStackPin() {
  useEffect(() => {
    const stack = document.querySelector<HTMLElement>("[data-orange-section-stack]");
    const panel = stack?.querySelector<HTMLElement>(".enterprise-spotlight");
    if (!panel) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const pin = ScrollTrigger.create({
        trigger: panel,
        start: "top top+=104",
        end: () => `+=${panel.offsetHeight}`,
        pin: panel,
        // The next section stays in flow and slides over the pinned panel; its text is not transformed.
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        window.cancelAnimationFrame(refreshFrame);
        pin.kill();
      };
    });

    return () => media.revert();
  }, []);

  return null;
}
