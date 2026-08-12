import {
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Megaphone,
  MessageCircleHeart,
  Shirt,
  ShoppingBasket,
  Sparkles,
  UtensilsCrossed,
  UsersRound
} from "lucide-react";
import { missionActions, solidarityActions } from "@/content/campaign";

const missionIcons = {
  users: UsersRound,
  heart: HeartHandshake,
  graduation: GraduationCap,
  megaphone: Megaphone
};

const solidarityIcons = {
  utensils: UtensilsCrossed,
  basket: ShoppingBasket,
  hygiene: Sparkles,
  shirt: Shirt,
  messages: MessageCircleHeart
};

export default function Project() {
  return (
    <section id="projet" className="section project" data-reveal-section>
      <div className="container">
        <div className="project-heading project-vision-heading">
          <div>
            <p className="eyebrow">La vision du projet</p>
            <h2>Un lieu consacré,<br/>une base d’impact pour <span className="gold-text">le territoire.</span></h2>
          </div>
          <p>
            Fontainebleau Royal prépare la location et l’aménagement d’un lieu stable pour ICC Fontainebleau.
            Le lieu est un outil. La mission est le but.
          </p>
        </div>

        <blockquote className="scripture-panel scripture-panel-project">
          <p>« Ils me feront un sanctuaire, et j’habiterai au milieu d’eux. »</p>
          <cite>Exode 25:8</cite>
        </blockquote>

        <div className="pillar-heading">
          <p className="eyebrow">Deux piliers pour avancer</p>
          <h2>Une même vision portée dans <span className="gold-text">l’unité et le sacrifice.</span></h2>
        </div>
        <div className="royal-pillars">
          <article>
            <div className="gold-icon"><UsersRound /></div>
            <span>01</span>
            <h3>Unité</h3>
            <p>Avancer comme une seule famille, dans la prière, le partage et la mobilisation de chacun autour de la vision.</p>
          </article>
          <article>
            <div className="gold-icon"><HandHeart /></div>
            <span>02</span>
            <h3>Sacrifice</h3>
            <p>Donner avec foi et intention pour rendre possibles la location, l’aménagement et l’installation du futur lieu.</p>
          </article>
        </div>

        <div className="mission-heading">
          <p className="eyebrow">Ce que le lieu permettra</p>
          <h2>Une mission rendue <span className="gold-text">concrète.</span></h2>
        </div>
        <div className="project-grid mission-grid">
          {missionActions.map(({ icon, title, copy }) => {
            const Icon = missionIcons[icon as keyof typeof missionIcons];
            return (
              <article className="project-card" key={title}>
                <div className="gold-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            );
          })}
        </div>

        <div className="solidarity-block">
          <div className="solidarity-heading">
            <div>
              <p className="eyebrow">Actions solidaires & accompagnement</p>
              <h2>Le SEF agit <span className="gold-text">déjà.</span></h2>
            </div>
            <p>Le futur lieu offrira un cadre stable et adapté pour poursuivre et développer ces actions concrètes déjà organisées par le Secours Évangélique de France.</p>
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
