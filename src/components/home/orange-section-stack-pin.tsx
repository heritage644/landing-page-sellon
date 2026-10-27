"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OrangeSectionStackPin() {
  useEffect(() => {
    const stack = document.querySelector<HTMLElement>("[data-orange-section-stack]");
    const panel = stack?.querySelector<HTMLElement>(".enterprise-spotlight");
    const content = panel?.querySelector<HTMLElement>(".enterprise-spotlight-layout");
    if (!panel || !content) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const pinTop = 104;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: `top top+=${pinTop}`,
          end: () => `+=${panel.offsetHeight}`,
          scrub: 0.6,
          pin: panel,
          // Keep the next section in normal flow so it can slide over the pinned panel.
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        content,
        {
          // On short screens, scroll the pinned section's content through the viewport too.
          y: () => -Math.max(0, panel.offsetHeight - (window.innerHeight - pinTop)),
          ease: "none",
        },
        0,
      );

      const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        window.cancelAnimationFrame(refreshFrame);
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => media.revert();
  }, []);

  return null;
}
