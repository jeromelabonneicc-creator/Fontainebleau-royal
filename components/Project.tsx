import { Crown, HandHeart, UsersRound } from "lucide-react";
import VisionCarousel from "./VisionCarousel";

export default function Project() {
  return (
    <section id="projet" className="section project" data-reveal-section>
      <div className="container">
        <div className="project-overview">
          <div className="project-overview-copy">
            <p className="eyebrow">Le projet d’implantation</p>
            <h2>Bien plus qu’un local :<br/><span className="gold-text">un lieu de vie.</span></h2>
            <p className="project-lead">
              Ce projet ne consiste pas simplement à louer un local. Il s’agit de permettre à ICC Fontainebleau
              de s’implanter durablement dans un lieu adapté, afin d’être enfin fixée et de ne plus dépendre de salles temporaires.
            </p>
            <p>
              <strong>Fontainebleau Royal</strong> est le nom donné à ce futur lieu de vie polyvalent — un espace « multiplex » —
              dans lequel ICC Fontainebleau pourra rassembler ses activités, accueillir chaque public, former, servir et transmettre.
            </p>
          </div>

          <div className="project-overview-visual" aria-label="Illustrations des activités d’ICC Fontainebleau">
            <figure className="project-visual-main">
              <img src="/images/BATIMENT.png" alt="Projection du futur bâtiment d’ICC Fontainebleau" />
              <figcaption>S’implanter durablement</figcaption>
            </figure>
            <figure className="project-visual-inset">
              <img src="/images/projet/joie-eglise.jpg" alt="Une participante rayonnante de joie au cœur d’un rassemblement d’Église" />
              <figcaption>Vivre la joie ensemble</figcaption>
            </figure>
            <p className="projection-disclaimer">Visuels d’illustration — images non contractuelles.</p>
          </div>
        </div>

        <blockquote className="scripture-panel scripture-panel-project">
          <p>« Ils me feront un sanctuaire, et j’habiterai au milieu d’eux. »</p>
          <cite>Exode 25:8</cite>
        </blockquote>

        <div id="vision" className="vision-section">
          <div className="vision-heading">
            <div>
              <p className="eyebrow">La vision</p>
              <h2>Voir au-delà de<br/><span className="gold-text">la situation actuelle.</span></h2>
            </div>
            <div className="vision-heading-copy">
              <p>
                ICC Fontainebleau prépare un lieu stable, identifiable, adapté à la croissance et capable de soutenir durablement la mission au pays de Fontainebleau.
              </p>
              <p>
                Ce lieu traduira localement la vision que l’Apôtre Yvan Castanou a reçue pour ICC :
                construire des hommes et des femmes qui inspirent et influencent positivement leur environnement pour la gloire de Dieu.
              </p>
            </div>
          </div>

          <VisionCarousel />

          <div className="availability-banner">
            <strong>7 jours sur 7</strong>
            <p>Un lieu disponible tout au long de la semaine pour accueillir la vie de l’Église, prendre soin des personnes, former, prier, servir et se rassembler.</p>
          </div>
        </div>

        <div className="pillar-heading">
          <p className="eyebrow">Deux piliers pour soutenir la vision</p>
          <h2>Une même vision portée dans <span className="gold-text">l’unité et le sacrifice.</span></h2>
          <p className="section-explainer">
            Ce projet ne reposera pas sur l’effort de quelques-uns, mais sur l’engagement de toute la famille ICC Fontainebleau.
            Ces deux piliers définissent la manière dont nous voulons avancer ensemble.
          </p>
        </div>

        <div className="royal-pillars" aria-label="Les deux piliers de Fontainebleau Royal">
          <div className="temple-roof" aria-hidden="true">
            <div className="temple-crown"><Crown /></div>
          </div>
          <div className="temple-beam" aria-hidden="true"><span>01</span><span>02</span></div>
          <div className="temple-columns">
            <article className="temple-column-card">
              <span className="pillar-number">01</span>
              <div className="gold-icon"><UsersRound /></div>
              <h3>Unité</h3>
              <span className="pillar-divider" aria-hidden="true" />
              <p>Un même projet porté par toute l’Église. Chacun comprend l’enjeu, prie, contribue selon ses possibilités et devient acteur de la progression collective.</p>
            </article>
            <div className="mobile-temple-crown" aria-hidden="true"><Crown /></div>
            <article className="temple-column-card">
              <span className="pillar-number">02</span>
              <div className="gold-icon"><HandHeart /></div>
              <h3>Sacrifice</h3>
              <span className="pillar-divider" aria-hidden="true" />
              <p>Accepter qu’un projet de cette ampleur demande un effort réel : dons, renoncements, temps, prière, mobilisation relationnelle et persévérance.</p>
            </article>
          </div>
          <div className="temple-foundation" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
