"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export type ProjectWallPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

type PausableTween = {
  pause: () => unknown;
  play: () => unknown;
};

type ProjectPhotoWallProps = {
  photos: ProjectWallPhoto[];
};

export default function ProjectPhotoWall({ photos }: ProjectPhotoWallProps) {
  const wallRef = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<PausableTween[]>([]);
  const inViewRef = useRef(false);
  const [selectedPhoto, setSelectedPhoto] = useState<ProjectWallPhoto | null>(null);

  const tracks = useMemo(
    () => Array.from({ length: 3 }, (_, row) => photos.filter((_, index) => index % 3 === row)),
    [photos]
  );

  useEffect(() => {
    let cancelled = false;
    let cleanupMotion: (() => void) | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (cancelled || !wallRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rails = Array.from(wallRef.current.querySelectorAll<HTMLElement>(".photo-wall-rail"));
      const durations = [76, 88, 81];
      const tweens = rails.map((rail, index) =>
        gsap.to(rail, {
          xPercent: -50,
          duration: durations[index] ?? 82,
          ease: "none",
          repeat: -1,
          paused: true
        })
      );

      tweensRef.current = tweens;

      const trigger = ScrollTrigger.create({
        trigger: wallRef.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          inViewRef.current = self.isActive;
          tweens.forEach((tween) => (self.isActive ? tween.play() : tween.pause()));
        }
      });

      const pause = () => tweens.forEach((tween) => tween.pause());
      const resume = () => {
        if (inViewRef.current && !selectedPhoto) tweens.forEach((tween) => tween.play());
      };
      const wall = wallRef.current;

      wall.addEventListener("mouseenter", pause);
      wall.addEventListener("mouseleave", resume);
      ScrollTrigger.refresh();

      cleanupMotion = () => {
        wall.removeEventListener("mouseenter", pause);
        wall.removeEventListener("mouseleave", resume);
        trigger.kill();
        tweens.forEach((tween) => tween.kill());
        tweensRef.current = [];
      };
    })();

    return () => {
      cancelled = true;
      cleanupMotion?.();
    };
  }, [selectedPhoto]);

  useEffect(() => {
    if (!selectedPhoto) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    tweensRef.current.forEach((tween) => tween.pause());

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPhoto]);

  const renderCard = (photo: ProjectWallPhoto, index: number, clone = false) => {
    const className = `photo-wall-card photo-wall-card--${index % 6}`;
    const content = (
      <>
        <Image
          src={photo.src}
          alt={clone ? "" : photo.alt}
          fill
          sizes="(max-width: 720px) 54vw, (max-width: 1050px) 38vw, 20vw"
        />
        {photo.caption && <span className="photo-wall-caption">{photo.caption}</span>}
      </>
    );

    if (clone) {
      return (
        <button
          className={className}
          type="button"
          key={`clone-${photo.src}`}
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setSelectedPhoto(photo)}
        >
          {content}
        </button>
      );
    }

    return (
      <button
        className={className}
        type="button"
        key={photo.src}
        onClick={() => setSelectedPhoto(photo)}
        aria-label={`Agrandir la photo : ${photo.alt}`}
      >
        {content}
      </button>
    );
  };

  return (
    <>
      <div className="photo-wall" ref={wallRef} aria-label="Moments de vie à ICC Fontainebleau">
        <div className="photo-wall-motion">
          {tracks.map((track, row) => (
            <div className="photo-wall-track" key={`track-${row}`}>
              <div className="photo-wall-rail">
                <div className="photo-wall-set">
                  {track.map((photo, index) => renderCard(photo, index + row * 2))}
                </div>
                <div className="photo-wall-set" aria-hidden="true">
                  {track.map((photo, index) => renderCard(photo, index + row * 2, true))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="photo-wall-static">
          {photos.map((photo, index) => renderCard(photo, index))}
        </div>

        <p className="projection-disclaimer">Visuels d’illustration — images non contractuelles.</p>
      </div>

      {selectedPhoto && createPortal(
        <div
          className="photo-wall-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo agrandie"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedPhoto(null);
          }}
        >
          <button type="button" className="photo-wall-lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Fermer la photo" autoFocus>
            <X aria-hidden="true" />
          </button>
          <div className="photo-wall-lightbox-image">
            <Image src={selectedPhoto.src} alt={selectedPhoto.alt} fill sizes="92vw" priority />
          </div>
          {selectedPhoto.caption && <p>{selectedPhoto.caption}</p>}
        </div>,
        document.body
      )}
    </>
  );
}
