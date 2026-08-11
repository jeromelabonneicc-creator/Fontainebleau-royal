"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import KeyRing from "./KeyRing";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 721px)", () => {
          gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-mini-pills", {
            y: 30,
            opacity: 0,
            stagger: 0.09,
            duration: 0.9,
            ease: "power3.out"
          });
        });

        mm.add("(max-width: 720px)", () => {
          const content = gsap.utils.toArray<HTMLElement>(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-mini-pills");
          const keyring = document.querySelector<HTMLElement>(".keyring-fixed");
          const loader = document.querySelector<HTMLElement>(".mobile-key-loader");
          const loaderFill = document.querySelector<HTMLElement>(".mobile-key-loader-track span");
          const loaderValue = document.querySelector<HTMLElement>(".mobile-key-loader-value");
          gsap.set(content, { opacity: 0, y: 34 });
          if (!keyring) {
            gsap.set(content, { opacity: 1, y: 0 });
            return;
          }
          gsap.set(keyring, { opacity: 1, filter: "brightness(1)" });
          gsap.set(loader, { opacity: 1 });
          gsap.set(loaderFill, { scaleX: 0, transformOrigin: "left center" });

          const progress = { value: 0 };
          const reveal = gsap.timeline();

          reveal
            .to(progress, {
              value: 100,
              duration: 1.25,
              ease: "power1.inOut",
              onUpdate: () => {
                if (loaderValue) loaderValue.textContent = `${Math.round(progress.value)}%`;
              }
            }, 0)
            .to(loaderFill, { scaleX: 1, duration: 1.25, ease: "power1.inOut" }, 0)
            .to(loader, { opacity: 0, duration: .22, ease: "power2.out" }, 1.25)
            .to(keyring, {
              x: () => window.innerWidth * .28,
              opacity: .82,
              filter: "brightness(.2)",
              duration: .9,
              ease: "power3.inOut"
            }, 1.35)
            .to(content, {
              opacity: 1,
              y: 0,
              stagger: .075,
              duration: .78,
              ease: "power3.out"
            }, 1.7);
        });

        return () => mm.revert();
      }, ref);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="accueil" className="hero section" ref={ref}>
      <KeyRing />
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <div className="hero-kicker">
            <span />
            <b>♛</b>
            <strong>Fontainebleau Royal</strong>
            <span />
          </div>

          <h1 className="hero-title">
            <span>APPEL</span>
            <span className="hero-small">AUX</span>
            <span className="gold-text">DONS</span>
          </h1>

          <p className="hero-copy">
            Ensemble, participons au financement de la future salle d’ICC Fontainebleau.
          </p>

          <div className="hero-actions">
            <a className="btn btn-gold" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer">Contribuer au projet <ArrowRight size={18}/></a>
            <a className="btn btn-outline" href="#projet">Découvrir le projet <ArrowRight size={18}/></a>
          </div>

          <div className="hero-mini-pills">
            <div><span>✝</span><b>Un projet<br/>spirituel</b></div>
            <div><span>◎</span><b>Un impact<br/>communautaire</b></div>
            <div><span>⌂</span><b>Une demeure<br/>pérenne</b></div>
          </div>
        </div>

        <div className="keyring-space" aria-hidden="true" />
      </div>
    </section>
  );
}
