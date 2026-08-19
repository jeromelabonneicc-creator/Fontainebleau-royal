"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

const CLE_STOCKAGE = "ftb-consentement-mesure";
const ID_PROJET_CLARITY = "y4r221hvip";
export const EVENEMENT_OUVERTURE = "ftb:ouvrir-consentement";

type Choix = "accepte" | "refuse";

function lireChoix(): Choix | null {
  try {
    const valeur = window.localStorage.getItem(CLE_STOCKAGE);
    return valeur === "accepte" || valeur === "refuse" ? valeur : null;
  } catch {
    return null;
  }
}

function effacerCookiesClarity() {
  for (const nom of ["_clck", "_clsk"]) {
    document.cookie = `${nom}=; max-age=0; path=/`;
    document.cookie = `${nom}=; max-age=0; path=/; domain=.${window.location.hostname}`;
  }
}

export default function CookieConsent() {
  const [choix, setChoix] = useState<Choix | null>(null);
  const [banniereVisible, setBanniereVisible] = useState(false);
  const [monte, setMonte] = useState(false);

  useEffect(() => {
    const enregistre = lireChoix();
    setChoix(enregistre);
    setBanniereVisible(enregistre === null);
    setMonte(true);
  }, []);

  useEffect(() => {
    const ouvrir = () => setBanniereVisible(true);
    window.addEventListener(EVENEMENT_OUVERTURE, ouvrir);
    return () => window.removeEventListener(EVENEMENT_OUVERTURE, ouvrir);
  }, []);

  const decider = useCallback(
    (valeur: Choix) => {
      try {
        window.localStorage.setItem(CLE_STOCKAGE, valeur);
      } catch {
        /* stockage indisponible : le choix ne sera pas mémorisé */
      }
      setBanniereVisible(false);

      if (valeur === "refuse") {
        effacerCookiesClarity();
        // Si Clarity tournait déjà (consentement retiré en cours de visite),
        // seul un rechargement garantit qu'il ne collecte plus rien.
        if (choix === "accepte") {
          window.location.reload();
          return;
        }
      }
      setChoix(valeur);
    },
    [choix]
  );

  return (
    <>
      {choix === "accepte" && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${ID_PROJET_CLARITY}");`}
        </Script>
      )}

      {monte && banniereVisible && (
        <div
          className="consent-banner"
          role="dialog"
          aria-modal="false"
          aria-labelledby="consent-titre"
          aria-describedby="consent-texte"
        >
          <div className="consent-inner">
            <div className="consent-copy">
              <strong id="consent-titre">Votre vie privée</strong>
              <p id="consent-texte">
                Nous souhaitons mesurer l’audience de ce site pour comprendre comment il est consulté et
                l’améliorer. Cet outil (Microsoft&nbsp;Clarity) enregistre les pages vues et les interactions.
                Il n’est activé que si vous l’acceptez, et vous pouvez revenir sur votre choix à tout moment
                en bas de page.
              </p>
            </div>
            <div className="consent-actions">
              <button type="button" className="consent-btn consent-btn-refuser" onClick={() => decider("refuse")}>
                Refuser
              </button>
              <button type="button" className="consent-btn consent-btn-accepter" onClick={() => decider("accepte")}>
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
