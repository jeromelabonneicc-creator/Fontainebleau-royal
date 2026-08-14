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
              <p>« Mets la vision par écrit, grave-la sur des tables afin qu’on la lise couramment. »</p>
              <cite>Habacuc 2:2 — Segond 21</cite>
            </blockquote>
          </div>

          <p className="prophecy-lead">
            Plusieurs paroles prophétiques ont confirmé la vision du futur lieu. Retrouvez prochainement ici les prises de parole des pasteurs qui l’ont portée.
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
              Au-delà de sa fonction pratique, ce lieu sera mis à part pour Dieu : un cadre où les personnes pourront prier,
              adorer, recevoir l’enseignement de la Parole, être restaurées, formées et envoyées.
            </p>
            <strong>Un autel au service de la mission.</strong>
            <blockquote className="spiritual-verse">
              <p>« Il bâtit là un autel […] car c’est là que Dieu s’était révélé à lui. »</p>
              <cite>Genèse 35:7</cite>
            </blockquote>
          </div>
          <figure className="spiritual-card-visual">
            <img src="/images/activites-eglise/rassemblement-et-priere.jpg" alt="Assemblée réunie pour un temps de prière et d’adoration" />
            <figcaption>Visuel d’illustration</figcaption>
          </figure>
        </article>

        <div className="prayer-block">
          <div className="prayer-heading">
            <p className="eyebrow">Bâtir dans la prière</p>
            <h2 className="prayer-title">Prions <span className="gold-text">ensembles.</span></h2>
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
          </div>
          <p className="projection-legal">Projections d’intention — visuels non contractuels.</p>
        </div>
      </div>
    </section>
  );
}
