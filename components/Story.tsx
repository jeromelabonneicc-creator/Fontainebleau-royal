import { Check, Church, Play, ShieldCheck } from "lucide-react";
import { prayerPoints, projectNeeds, propheticVoices } from "@/content/campaign";

export default function Story() {
  return (
    <section className="section story" data-reveal-section>
      <div className="container">
        <div id="histoire" className="history-block history-block-first">
          <div className="story-grid">
            <div>
              <p className="eyebrow">Une histoire de vision</p>
              <h2>La vision a été<br/><span className="gold-text">annoncée.</span></h2>
            </div>
            <blockquote className="scripture-panel story-scripture">
              <p>
                « L’Éternel m’adressa la parole, et il dit : Écris la prophétie : Grave-la sur des tables,
                afin qu’on la lise couramment. Car c’est une prophétie dont le temps est déjà fixé, elle marche
                vers son terme, et elle ne mentira pas ; si elle tarde, attends-la, car elle s’accomplira,
                elle s’accomplira certainement. »
              </p>
              <cite>Habacuc 2:2-3 — LSG</cite>
            </blockquote>
          </div>

          <p className="prophecy-lead">
            Plusieurs paroles prophétiques ont confirmé la vision du futur lieu. Retrouvez ici les prises de parole des pasteurs qui l’ont portée.
          </p>

          <div className="prophecy-video-grid">
            {propheticVoices.map(({ name, video, poster, objectPosition }) => (
              <article className={`prophecy-video-card ${video ? "has-video" : ""}`} key={name}>
                {video ? (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={poster}
                    style={{ objectPosition }}
                    aria-label={`Parole prophétique — ${name}`}
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                ) : (
                  <div className="prophecy-video-placeholder" aria-label={`Vidéo à venir — ${name}`}>
                    <Play />
                    <span>Vidéo à venir</span>
                  </div>
                )}
                <div className="prophecy-video-caption">
                  <span>Parole prophétique</span>
                  <h3>{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="campaign-stage-heading">
          <p className="eyebrow">Le défi majeur</p>
          <h2>Rendre possible<br/><span className="gold-text">notre implantation.</span></h2>
        </div>

        <article className="challenge-card major-challenge-card">
          <div className="gold-icon"><ShieldCheck /></div>
          <p className="eyebrow">Mobiliser les ressources nécessaires</p>
          <h3>Préparer un lieu de vie aux standards des églises ICC.</h3>
          <p>
            ICC Fontainebleau doit réunir, sur fonds propres, les ressources nécessaires pour louer le futur lieu,
            financer les travaux d’aménagement et d’équipement, réaliser les finitions et rendre l’installation possible,
            sans dépendre de la Cité ou d’organismes extérieurs.
          </p>

          <figure className="challenge-illustration">
            <img
              src="/images/illustrations/exode-vases-or-argent.jpg"
              alt="Illustration du peuple apportant des vases d’or et d’argent pour contribuer à la construction"
            />
            <figcaption>Illustration inspirée d’Exode 11:2</figcaption>
          </figure>

          <div className="challenge-biblical-support">
            <blockquote>
              <p>« Vous êtes […] un peuple acquis, afin que vous annonciez les vertus de celui qui vous a appelés. »</p>
              <cite>1 Pierre 2:9</cite>
            </blockquote>
            <blockquote>
              <p>« Que chacun demande à son voisin et chacune à sa voisine des vases d’argent et des vases d’or. »</p>
              <cite>Exode 11:2</cite>
            </blockquote>
          </div>

          <strong className="challenge-signature">Ce projet sera porté par le peuple que Dieu s’est choisi sur ce territoire.</strong>
          <ul>
            {projectNeeds.map((need) => <li key={need}><Check />{need}</li>)}
          </ul>
        </article>

        <article className="challenge-card spiritual-card">
          <div className="spiritual-card-copy">
            <div className="gold-icon"><Church /></div>
            <p className="eyebrow">La portée spirituelle du projet</p>
            <h3>Un lieu consacré à Dieu.</h3>
            <p>
              Au-delà d’un lieu de rassemblement, nous voulons établir à Fontainebleau un espace mis à part pour Dieu,
              où Son nom sera invoqué, Sa présence recherchée, Sa Parole annoncée et des vies transformées.
            </p>
            <p>
              Dans la Bible, l’autel marque la consécration d’un lieu à Dieu. Lorsqu’Abraham arriva sur le territoire
              où Dieu l’avait conduit, il « bâtit là un autel à l’Éternel, et invoqua le nom de l’Éternel » (Genèse 12:8).
            </p>
            <p>
              Fontainebleau Royal porte aussi cette dimension : établir sur le territoire un lieu dédié à Dieu,
              un point d’ancrage pour la prière, l’adoration, la Parole, la formation et l’annonce de l’Évangile,
              afin que des vies soient transformées et que l’Église puisse durablement accomplir sa mission.
            </p>
          </div>
          <figure className="spiritual-card-visual">
            <img src="/images/activites-eglise/rassemblement-et-priere.jpg" alt="Assemblée réunie pour un temps de prière et d’adoration" />
            <figcaption>Visuel d’illustration</figcaption>
          </figure>
        </article>

        <div className="prayer-block">
          <div className="prayer-heading">
            <p className="eyebrow">Bâtir dans la prière</p>
            <h2 className="prayer-title">Prions <span className="gold-text">ensemble.</span></h2>
            <p className="prayer-copy">
              À l’image de Néhémie, nous ne voulons pas seulement bâtir avec nos forces : nous voulons prier, discerner et agir.
              La prière accompagne chaque étape du projet, depuis la recherche du lieu jusqu’à son aménagement et son ouverture.
            </p>
            <blockquote>
              <p>« Nous priâmes notre Dieu, et nous établîmes une garde jour et nuit. »</p>
              <cite>Néhémie 4:9</cite>
            </blockquote>
          </div>
          <div>
            <p className="prayer-points-intro">Nous nous accordons notamment dans la prière pour :</p>
            <div className="prayer-points">
              {prayerPoints.map(({ point, quote, verse }) => (
                <div key={point}>
                  <span>✦</span>
                  <p>
                    {point}
                    <span className="prayer-point-verse">« {quote} »</span>
                    <cite>{verse}</cite>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="projection-showcase">
          <div className="projection-heading">
            <p className="eyebrow">Se projeter dans le futur lieu</p>
            <h2>Des espaces<br/><span className="gold-text">pour la vie de l’Église.</span></h2>
            <p>Ces images traduisent l’ambition d’aménagement et les usages souhaités. Elles constituent des projections d’intention et ne représentent pas contractuellement le futur lieu.</p>
          </div>
          <div className="projection-grid">
            <figure>
              <img src="/images/projection future salle souhaité/WhatsApp Image 2026-08-13 at 11.03.40.jpeg" alt="Projection d’une salle principale pour les rassemblements" />
              <figcaption>La salle principale</figcaption>
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
      </div>
    </section>
  );
}
