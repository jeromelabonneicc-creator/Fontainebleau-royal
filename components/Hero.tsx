"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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
        gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-mini-pills", {
          y: 30,
          opacity: 0,
          stagger: 0.09,
          duration: 0.9,
          ease: "power3.out"
        });
      }, ref);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="accueil" className="hero section" ref={ref}>
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
