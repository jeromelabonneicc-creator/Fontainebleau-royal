import {
  MessageCircleHeart,
  Shirt,
  ShoppingBasket,
  Sparkles,
  UtensilsCrossed
} from "lucide-react";
import { solidarityActions } from "@/content/campaign";

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

          <div className="sef-visuals" aria-label="Illustrations des actions solidaires du SEF">
            <figure className="sef-visual sef-visual-primary">
              <img src="/images/Le Sef/photo-1593113598332-cd288d649433.jpeg" alt="Bénévoles participant à une distribution alimentaire" />
              <figcaption><strong>Distribution et paniers alimentaires</strong><span>Visuel d’illustration</span></figcaption>
            </figure>
            <figure className="sef-visual">
              <img src="/images/Le Sef/photo-restaurant-solidaire.jpeg" alt="Repas frais illustrant le restaurant solidaire" />
              <figcaption><strong>Restaurant solidaire</strong><span>Visuel d’illustration</span></figcaption>
            </figure>
            <figure className="sef-visual">
              <img src="/images/Le Sef/photo-permanence sociale.jpeg" alt="Groupe uni illustrant l’accompagnement de proximité" />
              <figcaption><strong>Accompagnement de proximité</strong><span>Visuel d’illustration</span></figcaption>
            </figure>
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
