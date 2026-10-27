"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalReachMotion() {
  useEffect(() => {
    const stage = document.querySelector<HTMLElement>("[data-global-map]");
    if (!stage) return;

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const map = stage.querySelector<SVGElement>(".global-map-svg");
        const pins = Array.from(stage.querySelectorAll<HTMLElement>("[data-map-pin]"));
        const badges = Array.from(stage.querySelectorAll<HTMLElement>("[data-market-badge]"));
        let isInView = false;
        let introComplete = false;

        const floatTweens = badges.map((badge, index) =>
          gsap.to(badge, {
            y: index % 2 === 0 ? -7 : -5,
            duration: 2.4 + index * 0.14,
            delay: index * 0.12,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            paused: true,
          }),
        );
        const pinPulseTweens = pins.map((pin, index) =>
          gsap.to(pin, {
            scale: 1.18,
            duration: 1.9 + index * 0.1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            paused: true,
          }),
        );

        const updateMotion = (shouldPlay: boolean) => {
          const active = shouldPlay && introComplete && isInView;
          [...floatTweens, ...pinPulseTweens].forEach((tween) => {
            if (active) tween.play();
            else tween.pause();
          });
        };

        ScrollTrigger.create({
          trigger: stage,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            isInView = true;
            updateMotion(true);
          },
          onEnterBack: () => {
            isInView = true;
            updateMotion(true);
          },
          onLeave: () => {
            isInView = false;
            updateMotion(false);
          },
          onLeaveBack: () => {
            isInView = false;
            updateMotion(false);
          },
        });

        const reveal = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top 76%",
            once: true,
          },
          onComplete: () => {
            introComplete = true;
            updateMotion(true);
          },
        });

        if (map) {
          reveal.fromTo(
            map,
            { opacity: 0, y: 32, scale: 0.955, filter: "blur(7px)" },
            { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.02, ease: "power3.out" },
            0,
          );
        }

        if (pins.length) {
          reveal.fromTo(
            pins,
            { opacity: 0, scale: 0, y: 10, rotate: -12 },
            { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 0.64, stagger: 0.1, ease: "back.out(2)" },
            0.22,
          );
        }

        if (badges.length) {
          reveal.fromTo(
            badges,
            { opacity: 0, y: 28, scale: 0.88, rotateX: -18, filter: "blur(7px)" },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 0.82,
              stagger: 0.13,
              ease: "back.out(1.45)",
            },
            0.34,
          );
        }
      }, stage);

      return () => context.revert();
    });

    return () => motion.revert();
  }, []);

  return null;
}
