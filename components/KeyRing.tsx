"use client";

import { useEffect, useRef } from "react";

export default function KeyRing() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let removePointer: (() => void) | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      if (!wrap.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      ctx = gsap.context(() => {
        gsap.to(".keyring-core", {
          rotate: 4,
          duration: 3.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });

        [".pendant-1", ".pendant-2", ".pendant-3"].forEach((selector, index) => {
          gsap.to(selector, {
            rotate: index === 1 ? 3.5 : -3,
            x: index === 1 ? 7 : -5,
            duration: 2.8 + index * .55,
            delay: index * .18,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            transformOrigin: "50% 0%"
          });
        });

        if (matchMedia("(pointer:fine)").matches) {
          const xTo = gsap.quickTo(wrap.current!, "x", { duration: 1.1, ease: "power3.out" });
          const yTo = gsap.quickTo(wrap.current!, "y", { duration: 1.35, ease: "power3.out" });
          const onMove = (event: PointerEvent) => {
            xTo((event.clientX / innerWidth - .5) * 18);
            yTo((event.clientY / innerHeight - .5) * 12);
          };
          window.addEventListener("pointermove", onMove, { passive: true });
          removePointer = () => window.removeEventListener("pointermove", onMove);
        }

      }, wrap);
    })();

    return () => {
      removePointer?.();
      ctx?.revert();
    };
  }, []);

  return (
    <div className="keyring keyring-fixed" ref={wrap} aria-hidden="true">
      <div className="keyring-core">
        <img className="real-ring" src="/images/keyring/ring.png" alt="" />
        <img className="real-key" src="/images/keyring/key.png" alt="" />
      </div>

      <div className="pendant pendant-1">
        <img className="real-chain" src="/images/keyring/chain-large.png" alt="" />
        <img className="real-frame" src="/images/keyring/frame-large.png" alt="" />
      </div>
      <div className="pendant pendant-2">
        <img className="real-chain" src="/images/keyring/chain-medium.png" alt="" />
        <img className="real-frame" src="/images/keyring/frame-medium.png" alt="" />
      </div>
      <div className="pendant pendant-3">
        <img className="real-chain" src="/images/keyring/chain-small.png" alt="" />
        <img className="real-frame" src="/images/keyring/frame-small.png" alt="" />
      </div>
    </div>
  );
}
