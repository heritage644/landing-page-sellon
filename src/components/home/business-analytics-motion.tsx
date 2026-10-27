"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessAnalyticsMotion() {
  useEffect(() => {
    const stage = document.querySelector<HTMLElement>("[data-analytics-stage]");
    if (!stage) return;

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const dashboard = stage.querySelector<HTMLElement>("[data-analytics-dashboard]");
        const device = stage.querySelector<HTMLElement>("[data-analytics-device]");
        const bars = Array.from(stage.querySelectorAll<HTMLElement>("[data-analytics-bar]"));
        const donut = stage.querySelector<SVGCircleElement>("[data-analytics-donut]");
        const counters = Array.from(stage.querySelectorAll<HTMLElement>("[data-analytics-counter]"));

        if (dashboard) {
          gsap.fromTo(
            dashboard,
            { opacity: 0, y: 38, scale: 0.96, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.02,
              ease: "power3.out",
              scrollTrigger: {
                trigger: dashboard,
                start: "top 78%",
                once: true,
              },
            },
          );
        }

        if (bars.length) {
          gsap.fromTo(
            bars,
            { scaleY: 0, transformOrigin: "center bottom" },
            {
              scaleY: 1,
              duration: 0.96,
              stagger: 0.1,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: stage,
                start: "top 68%",
                once: true,
              },
            },
          );
        }

        if (donut) {
          gsap.fromTo(
            donut,
            { strokeDasharray: "0 100" },
            {
              strokeDasharray: "78 22",
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: donut,
                start: "top 82%",
                once: true,
              },
            },
          );
        }

        if (counters.length) {
          const counterTweens = counters.map((counter) => {
            const target = Number(counter.dataset.countTarget ?? 0);
            const prefix = counter.dataset.countPrefix ?? "";
            const suffix = counter.dataset.countSuffix ?? "";
            const useCompact = counter.dataset.countFormat === "compact";
            const formatter = new Intl.NumberFormat("en-NG", {
              ...(useCompact ? { notation: "compact" as const, maximumFractionDigits: 2 } : { maximumFractionDigits: 0 }),
            });
            const state = { value: 0 };

            return gsap.to(state, {
              value: target,
              duration: 1.7,
              ease: "power2.out",
              paused: true,
              onUpdate: () => {
                const value = formatter.format(Math.round(state.value));
                counter.textContent = `${prefix}${value}${suffix ? ` ${suffix}` : ""}`;
              },
            });
          });

          ScrollTrigger.create({
            trigger: dashboard ?? stage,
            start: "top 72%",
            once: true,
            onEnter: () => counterTweens.forEach((tween) => tween.play()),
          });
        }

        if (device) {
          gsap.fromTo(
            device,
            { y: 34 },
            {
              y: -34,
              ease: "none",
              scrollTrigger: {
                trigger: stage,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }
      }, stage);

      return () => context.revert();
    });

    return () => motion.revert();
  }, []);

  return null;
}
