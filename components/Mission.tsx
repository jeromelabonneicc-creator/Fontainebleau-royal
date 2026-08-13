import {
  Church,
  GraduationCap,
  HeartHandshake,
  LayoutGrid,
  MessageCircleHeart,
  Shirt,
  ShoppingBasket,
  Sparkles,
  UtensilsCrossed
} from "lucide-react";
import { missionActions, solidarityActions } from "@/content/campaign";

const missionIcons = {
  users: LayoutGrid,
  heart: HeartHandshake,
  graduation: GraduationCap,
  church: Church
};

const solidarityIcons = {
  utensils: UtensilsCrossed,
  basket: ShoppingBasket,
  hygiene: Sparkles,
  shirt: Shirt,
  messages: MessageCircleHeart
};

export default function Mission() {
  return (
    <section id="impact" className="section mission-section" data-reveal-section>
      <div className="container">
        <div className="mission-heading mission-heading-first">
          <p className="eyebrow">Ce que le lieu permettra</p>
          <h2>Une mission déployée<br/><span className="gold-text">au quotidien.</span></h2>
          <p className="section-explainer">
            Ce lieu donnera à ICC Fontainebleau les espaces nécessaires pour prendre soin de chaque public,
            équiper les personnes et rassembler l’Église dans un même environnement, tout au long de la semaine.
          </p>
        </div>

        <div className="project-grid mission-grid">
          {missionActions.map(({ icon, brand, title, copy }) => {
            const Icon = missionIcons[icon as keyof typeof missionIcons];
            return (
              <article className={`project-card ${brand === "pcnc" ? "pcnc-card" : ""}`} key={title}>
                {brand === "pcnc"
                  ? <div className="pcnc-logo"><img src="/images/logos/pcnc.png" alt="PCNC — Parcours de Croissance de la Nouvelle Création" /></div>
                  : <div className="gold-icon"><Icon /></div>}
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            );
          })}
        </div>

        <div className="solidarity-block">
          <div className="solidarity-heading">
            <div>
              <div className="sef-logo"><img src="/images/logos/sef.png" alt="Le Secours Évangélique de France" /></div>
              <p className="eyebrow">Le Secours Évangélique de France</p>
              <h2>Le bras tendu de<br/><span className="gold-text">l’action évangélique en France.</span></h2>
            </div>
            <p>
              Le SEF agit déjà auprès des personnes en difficulté au travers d’actions solidaires concrètes.
              Le futur lieu offrira un cadre stable et adapté pour poursuivre ces engagements, accueillir dignement les bénéficiaires et développer l’accompagnement de proximité.
            </p>
          </div>

          <div className="solidarity-grid">
            {solidarityActions.map(({ icon, title, copy }) => {
              const Icon = solidarityIcons[icon as keyof typeof solidarityIcons];
              return (
                <article className="solidarity-card" key={title}>
                  <div className="gold-icon"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
