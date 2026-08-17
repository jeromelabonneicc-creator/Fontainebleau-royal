"use client";

import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  ["/images/SALLE.webp", "La salle"],
  ["/images/BATIMENT.webp", "Le bâtiment"],
  ["/images/WORSHIP.webp", "Worship"]
];

export default function Gallery() {
  const [active, setActive] = useState<string[] | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section id="galerie" className="section gallery-section" data-reveal-section>
      <div className="container">
        <p className="eyebrow">La vision en images</p>
        <div className="gallery">
          {images.map(([src, label], i) => (
            <figure key={`${src}-${label}`} className={`gallery-card gallery-card-${i + 1}`}>
              <button className="gallery-open" type="button" onClick={() => setActive([src, label])} aria-label={`Agrandir : ${label}`}>
                <img src={src} alt={label} />
                <span className="gallery-zoom"><ZoomIn size={18} /> Agrandir</span>
              </button>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active[1]} onMouseDown={() => setActive(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Fermer"><X /></button>
          <div className="lightbox-frame" onMouseDown={(event) => event.stopPropagation()}>
            <img src={active[0]} alt={active[1]} />
            <p>{active[1]}</p>
          </div>
        </div>
      )}
    </section>
  );
}
