"use client";

import { useEffect } from "react";

export default function CinematicMotion() {
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal-section]").forEach((section) => {
          const targets = section.querySelectorAll(".eyebrow, h2, article, .scripture-panel, .solidarity-block, .prophecy-intro, .prayer-block, .gallery-card, .faq-list");
          if (!targets.length) return;

          gsap.from(targets, {
            y: 42,
            opacity: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 82%", once: true }
          });
        });

        const bar = document.querySelector<HTMLElement>("[data-progress]");
        if (bar) {
          gsap.from(bar, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 88%", once: true }
          });
        }
      });
    })();

    return () => ctx?.revert();
  }, []);

  return null;
}
