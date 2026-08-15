"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Accueil", "#accueil"],
  ["Le projet", "#projet"],
  ["La vision", "#vision"],
  ["Histoire", "#histoire"],
  ["Contribuer", "#contribuer"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCtaVisible, setMobileCtaVisible] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    let mediaContext: {
      add: (query: string, callback: () => void | (() => void)) => unknown;
      revert: () => void;
    } | undefined;
    let cancelled = false;

    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (cancelled) return;

      mediaContext = gsap.matchMedia();
      mediaContext.add("(max-width: 720px)", () => {
        const heroActions = document.querySelector<HTMLElement>(".hero-actions");
        if (!heroActions) return;

        const trigger = ScrollTrigger.create({
          trigger: heroActions,
          start: "bottom top",
          onEnter: () => {
            setOpen(false);
            setMobileCtaVisible(true);
          },
          onLeaveBack: () => setMobileCtaVisible(false)
        });

        ScrollTrigger.refresh();
        setMobileCtaVisible(window.scrollY >= trigger.start);

        return () => trigger.kill();
      });
    })();

    return () => {
      cancelled = true;
      mediaContext?.revert();
    };
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""} ${mobileCtaVisible ? "header--mobile-hidden" : ""}`}>
        <a className="brand" href="#accueil" aria-label="ICC Fontainebleau">
          <div className="brand-mark"><img src="/images/logos/icc-fontainebleau.png" alt="" /></div>
          <span>Fontainebleau</span>
        </a>

        <nav className="desktop-nav">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="btn btn-outline desktop-donate" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer">Devenir contributeur</a>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <nav className="mobile-nav" id="mobile-navigation">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a className="btn btn-gold" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Devenir contributeur</a>
          </nav>
        )}
      </header>

      <a
        className={`mobile-sticky-donate ${mobileCtaVisible ? "mobile-sticky-donate--visible" : ""}`}
        href="https://dons2.egliseicc.com/"
        target="_blank"
        rel="noreferrer"
        aria-hidden={!mobileCtaVisible}
        tabIndex={mobileCtaVisible ? 0 : -1}
      >
        <span>Je contribue</span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </>
  );
}
