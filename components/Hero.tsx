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
          gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-scripture, .hero-actions", {
            y: 30,
            opacity: 0,
            stagger: 0.09,
            duration: 0.9,
            ease: "power3.out"
          });
        });

        mm.add("(max-width: 720px)", () => {
          const content = gsap.utils.toArray<HTMLElement>(".hero-kicker, .hero-title, .hero-copy, .hero-scripture, .hero-actions");
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
              opacity: 1,
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
            <strong>Appel aux dons</strong>
            <span />
          </div>

          <h1 className="hero-title hero-title-campaign">
            <span className="hero-title-main">Fontainebleau <span className="gold-text">Royal</span></span>
            <span className="hero-title-lead">Ensemble, mobilisons-nous !</span>
            <span className="hero-title-place">Préparons un lieu de vie à la gloire de Dieu au pays de Fontainebleau.</span>
          </h1>

          <p className="hero-copy">
            Nous ne cherchons pas simplement à louer des murs. Nous préparons un lieu pour accueillir, équiper, servir et transmettre.
          </p>

          <blockquote className="hero-scripture">
            <p>« J’ai donné une demeure à mon peuple […] et je l’ai planté pour qu’il y soit fixé et ne soit plus agité. »</p>
            <cite>2 Samuel 7:10</cite>
          </blockquote>

          <div className="hero-actions">
            <a className="btn btn-gold" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer">Contribuer au projet <ArrowRight size={18}/></a>
            <a className="btn btn-outline" href="#projet">Découvrir le projet <ArrowRight size={18}/></a>
          </div>

        </div>

        <div className="keyring-space" aria-hidden="true" />
      </div>
    </section>
  );
}
