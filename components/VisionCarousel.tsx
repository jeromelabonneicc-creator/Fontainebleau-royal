"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const visionCentres = [
  {
    image: "/images/vision/communion-fraternelle.jpg",
    objectPosition: "50% center",
    title: "Un centre de refuge et de communion",
    copy: "Un lieu où l’amour, l’acceptation, le réconfort et l’espérance restaurent les personnes, et où chacun peut trouver une véritable famille."
  },
  {
    image: "/images/WORSHIP.png",
    objectPosition: "50% center",
    title: "Un centre d’adoration et de puissance spirituelle",
    copy: "Un lieu où la puissance de la Parole transforme chaque personne en véritable adorateur, intensifie la foi et restaure les cœurs."
  },
  {
    image: "/images/SALLE.png",
    objectPosition: "50% center",
    title: "Un centre de transformation et d’édification",
    copy: "Un lieu où l’enseignement, les conférences, les séminaires et les ateliers permettent de grandir, de repousser ses limites et de développer son leadership."
  },
  {
    image: "/images/vision/formation-excellence.jpg",
    objectPosition: "55% center",
    title: "Un centre de formation, d’excellence et d’impact",
    copy: "Un lieu qui équipe chacun pour servir efficacement, cultive l’excellence et déploie la Parole afin d’influencer positivement notre environnement."
  },
  {
    image: "/images/vision/lieu-ouvert-territoire.jpg",
    objectPosition: "50% 38%",
    title: "Un lieu ouvert sur le territoire",
    copy: "Un espace polyvalent capable d’accueillir les activités de l’Église, mais également des mariages, séminaires, conférences et événements compatibles avec la vocation du lieu, afin de contribuer au rayonnement du territoire de Fontainebleau."
  }
];

export default function VisionCarousel() {
  const [active, setActive] = useState(1);
  const [layoutTick, setLayoutTick] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);

  const select = (index: number) => {
    setActive(Math.max(0, Math.min(visionCentres.length - 1, index)));
  };

  useEffect(() => {
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setLayoutTick((value) => value + 1));
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      if (!root.current || cancelled) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mobile = window.matchMedia("(max-width: 720px)").matches;
      const tablet = window.matchMedia("(max-width: 1050px)").matches;
      const spacing = mobile
        ? window.innerWidth * .82
        : tablet
          ? window.innerWidth * .58
          : Math.min(window.innerWidth * .36, 650);

      const slides = Array.from(root.current.querySelectorAll<HTMLElement>(".vision-carousel-slide"));
      const duration = reducedMotion ? 0 : 1.05;

      slides.forEach((slide, index) => {
        const distance = index - active;
        const absoluteDistance = Math.abs(distance);
        const isActive = distance === 0;

        gsap.to(slide, {
          x: distance * spacing,
          y: isActive ? 0 : 20,
          scale: isActive ? 1 : mobile ? .9 : .86,
          autoAlpha: absoluteDistance > 2 ? 0 : isActive ? 1 : absoluteDistance === 1 ? .58 : .24,
          filter: isActive ? "brightness(1) saturate(1)" : "brightness(.48) saturate(.68)",
          zIndex: 10 - absoluteDistance,
          duration,
          ease: "power3.inOut",
          overwrite: "auto"
        });

        const image = slide.querySelector<HTMLElement>(".vision-carousel-image");
        const copy = slide.querySelector<HTMLElement>(".vision-carousel-copy");
        gsap.to(image, {
          scale: isActive ? 1.025 : 1.08,
          duration: reducedMotion ? 0 : 1.35,
          ease: "power3.out",
          overwrite: "auto"
        });
        gsap.to(copy, {
          y: isActive ? 0 : 14,
          opacity: isActive ? 1 : .72,
          duration,
          ease: "power3.out",
          overwrite: "auto"
        });
      });

      cleanup = () => gsap.killTweensOf(slides);
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [active, layoutTick]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 42) return;
    select(distance < 0 ? active + 1 : active - 1);
  };

  return (
    <div className="vision-carousel-shell" ref={root}>
      <div
        className="vision-carousel-stage"
        role="region"
        aria-roledescription="carrousel"
        aria-label="Les cinq dimensions de la vision"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") select(active - 1);
          if (event.key === "ArrowRight") select(active + 1);
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { pointerStart.current = null; }}
      >
        {visionCentres.map(({ image, objectPosition, title, copy }, index) => (
          <div
            className={`vision-carousel-slide ${index === active ? "is-active" : ""}`}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${index + 1} sur ${visionCentres.length}`}
            aria-hidden={index !== active}
            key={title}
          >
            <img className="vision-carousel-image" src={image} alt="" style={{ objectPosition }} />
            <div className="vision-carousel-overlay" />
            <div className="vision-carousel-copy">
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <i aria-hidden="true" />
              <p>{copy}</p>
            </div>
          </div>
        ))}

        <button
          className="vision-carousel-arrow vision-carousel-arrow-prev"
          type="button"
          aria-label="Afficher la vision précédente"
          disabled={active === 0}
          onClick={() => select(active - 1)}
        >
          <ChevronLeft />
        </button>
        <button
          className="vision-carousel-arrow vision-carousel-arrow-next"
          type="button"
          aria-label="Afficher la vision suivante"
          disabled={active === visionCentres.length - 1}
          onClick={() => select(active + 1)}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="vision-carousel-dots" role="tablist" aria-label="Choisir une dimension de la vision">
        {visionCentres.map(({ title }, index) => (
          <button
            type="button"
            role="tab"
            aria-label={`Afficher : ${title}`}
            aria-selected={index === active}
            className={index === active ? "is-active" : ""}
            onClick={() => select(index)}
            key={title}
          />
        ))}
      </div>
    </div>
  );
}
