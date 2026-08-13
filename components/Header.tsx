"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Accueil", "#accueil"],
  ["La vision", "#projet"],
  ["Histoire", "#histoire"],
  ["Galerie", "#galerie"],
  ["Contribuer", "#contribuer"],
  ["Comprendre", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
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
  );
}
