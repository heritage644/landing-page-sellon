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
    media.add(
      "(min-width: 64rem) and (min-height: 50rem) and (prefers-reduced-motion: no-preference)",
      () => {
        const pin = ScrollTrigger.create({
          trigger: panel,
          start: "top top+=104",
          end: () => `+=${panel.offsetHeight}`,
          pin: panel,
          // Keep the next section in normal flow so it can slide over the pinned panel.
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          window.cancelAnimationFrame(refreshFrame);
          pin.kill();
        };
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
