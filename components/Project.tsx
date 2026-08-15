import { Crown, HandHeart, UsersRound } from "lucide-react";

export default function Project() {
  return (
    <section id="projet" className="section project" data-reveal-section>
      <div className="container">
        <div className="project-overview">
          <div className="project-overview-copy">
            <p className="eyebrow">Le projet d’implantation</p>
            <h2>Bien plus qu’un local :<br/><span className="gold-text">un lieu de vie.</span></h2>
            <p className="project-lead">
              Ce projet a pour ambition de permettre à <strong>ICC Fontainebleau de s’implanter durablement dans un lieu adapté à sa vision et à son développement</strong>.
            </p>
            <p>
              <strong>Fontainebleau Royal</strong> sera un espace polyvalent, pensé pour rassembler les différentes activités de l’Église,
              accueillir tous les publics, former, accompagner, servir et transmettre.
            </p>
            <p>
              Plus qu’un simple lieu de rassemblement, il a vocation à devenir <strong>un véritable lieu de vie, de croissance et d’impact pour le territoire</strong>.
            </p>
          </div>

          <div className="project-overview-visual" aria-label="Illustrations des activités d’ICC Fontainebleau">
            <figure className="project-visual-main">
              <img src="/images/BATIMENT.png" alt="Projection du futur bâtiment d’ICC Fontainebleau" />
              <figcaption>S’implanter durablement</figcaption>
            </figure>
            <figure className="project-visual-inset">
              <img src="/images/projet/joie-eglise.jpg" alt="Une assemblée chrétienne multiculturelle réunie dans la joie" />
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
              <h2>Implanter un lieu qui <span className="gold-text">transforme des vies</span> et impacte le territoire.</h2>
            </div>
            <div className="vision-heading-copy">
              <p>
                Ce lieu traduira localement la vision globale que l’apôtre Yvan Castanou a reçu pour les églises Impact Centre Chrétien :
              </p>
              <p className="vision-statement">
                Construire des hommes et des femmes qui inspirent et influencent positivement leur environnement pour la gloire de Dieu.
              </p>
            </div>
          </div>

          <p className="vision-pillars-intro">Deux piliers majeurs soutiendront ce projet d’implantation :</p>
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
              <div className="pillar-copy">
                <strong>Un même projet porté par toute l’Église.</strong>
                <p>Le peuple que Dieu s’est acquis sur le territoire se mobilise autour d’une même vision : comprendre l’enjeu, prier et contribuer selon ses possibilités.</p>
                <p>Et au-delà d’ICC Fontainebleau, toute personne qui a à cœur de soutenir cette implantation peut également prendre part dans cette histoire.</p>
              </div>
            </article>
            <article className="temple-column-card">
              <span className="pillar-number">02</span>
              <div className="gold-icon"><HandHeart /></div>
              <h3>Sacrifice</h3>
              <span className="pillar-divider" aria-hidden="true" />
              <p>Accepter qu’un projet de cette ampleur demande un effort réel : dons, renoncements, temps, prière, mobilisation et persévérance.</p>
            </article>
          </div>
          <div className="temple-foundation" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
