"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function TopLineMotion() {
  useGSAP(() => {
    const words = gsap.utils.toArray<HTMLElement>("[data-top-word]");
    if (!words.length) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // wait for your entrance animation (~1.8s) to finish
      const tl = gsap.timeline({ delay: 1.8 });

      tl.fromTo(
        words,
        { y: -20, rotate: 8 },
        { y: 0, rotate: 0, duration: 1, ease: "expo.out", stagger: 0.08 },
      )
        .to(words, {
          x: 12,
          rotate: 6,
          duration: 1.2,
          ease: "back.inOut",
          stagger: 0.05,
        })
        // looping wobble, started once the steps above are done
        .to(words, {
          rotate: 2,
          x: 0,
          duration: 2,
          ease: "power3.inOut",
          yoyo: true,
          repeat: -1,
          stagger: { each: 0.1, yoyo: true },
        });
    });

    return () => mm.revert();
  });

  return null;
}