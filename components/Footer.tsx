"use client";

import { EVENEMENT_OUVERTURE } from "./CookieConsent";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><strong>ICC Fontainebleau</strong><span>Fontainebleau Royal</span></div>
        <div className="footer-legal">
          <button
            type="button"
            className="footer-consent-link"
            onClick={() => window.dispatchEvent(new Event(EVENEMENT_OUVERTURE))}
          >
            Gérer les cookies
          </button>
          <p>© {new Date().getFullYear()} ICC Fontainebleau</p>
        </div>
      </div>
    </footer>
  );
}
