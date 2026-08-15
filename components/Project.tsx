import { Crown, HandHeart, UsersRound } from "lucide-react";
import { readdirSync } from "node:fs";
import path from "node:path";
import ProjectPhotoWall, { type ProjectWallPhoto } from "./ProjectPhotoWall";

function getProjectWallPhotos(): ProjectWallPhoto[] {
  const photosDirectory = path.join(process.cwd(), "public", "images", "projet");
  const supportedImage = /\.(avif|jpe?g|png|webp)$/i;

  let files: string[] = [];
  try {
    files = readdirSync(photosDirectory)
      .filter((file) => supportedImage.test(file))
      .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }));
  } catch {
    files = [];
  }

  return [
    {
      src: "/images/BATIMENT.png",
      alt: "Projection du futur bâtiment d’ICC Fontainebleau",
      caption: "S’implanter durablement"
    },
    ...files.map((file, index) => ({
      src: `/images/projet/${file}`,
      alt: `Moment de joie et de communion à ICC Fontainebleau ${index + 1}`,
      caption: file === "joie-eglise.jpg" ? "Vivre la joie ensemble" : undefined
    }))
  ];
}

export default function Project() {
  const projectWallPhotos = getProjectWallPhotos();

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

          <div className="project-overview-visual">
            <ProjectPhotoWall photos={projectWallPhotos} />
          </div>
        </div>

        <blockquote className="scripture-panel scripture-panel-project">
          <p>« Ils me feront un sanctuaire, et j’habiterai au milieu d’eux. »</p>
          <cite>Exode 25:8</cite>
        </blockquote>

        <div className="projection-showcase">
          <div className="projection-heading">
            <p className="eyebrow">Se projeter dans le futur lieu</p>
            <h2>Des espaces<br/><span className="gold-text">pour la vie de l’Église.</span></h2>
            <p>Ces images traduisent l’ambition d’aménagement et les usages souhaités. Elles constituent des projections d’intention et ne représentent pas contractuellement le futur lieu.</p>
          </div>
          <div className="projection-grid">
            <figure>
              <img src="/images/projection future salle souhaité/WhatsApp Image 2026-08-13 at 11.03.40.jpeg" alt="Projection d’une salle annexe pour les rassemblements" />
              <figcaption>La salle annexe</figcaption>
            </figure>
            <figure>
              <img src="/images/projection future salle souhaité/WhatsApp Image 2026-08-13 at 11.03.41.jpeg" alt="Projection d’une salle polyvalente pour les groupes et formations" />
              <figcaption>Les groupes et les formations</figcaption>
            </figure>
            <figure>
              <img src="/images/projection future salle souhaité/WhatsApp Image 2026-08-13 at 11.03.41 (1).jpeg" alt="Projection d’un espace de convivialité et de restauration" />
              <figcaption>La convivialité et le service</figcaption>
            </figure>
            <figure>
              <img src="/images/projections/salle-enfants.jpg" alt="Projection d’une salle accueillante dédiée aux enfants" />
              <figcaption>La salle des enfants</figcaption>
            </figure>
          </div>
          <p className="projection-legal">Projections d’intention — visuels non contractuels.</p>
        </div>

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
                <p>Et au-delà d’ICC Fontainebleau, toute personne qui a à cœur de soutenir cette implantation peut également prendre part à cette histoire.</p>
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
