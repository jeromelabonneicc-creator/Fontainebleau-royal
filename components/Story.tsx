import { Check, Church, Play, ShieldCheck } from "lucide-react";
import { projectNeeds, propheticVoices } from "@/content/campaign";
import PrayerAccordion from "./PrayerAccordion";

export default function Story() {
  return (
    <section className="section story" data-reveal-section>
      <div className="container">
        <div id="histoire" className="history-block history-block-first">
          <div className="story-grid">
            <div>
              <h2 className="story-prophecy-title">Ils ont déclaré et prophétisé <span className="gold-text">à ce sujet.</span></h2>
            </div>
            <blockquote className="scripture-panel story-scripture">
              <p>
                « L’Éternel m’adressa la parole, et il dit : Écris la prophétie : Grave-la sur des tables,
                afin qu’on la lise couramment. Car <strong>c’est une prophétie dont le temps est déjà fixé, elle marche
                vers son terme</strong>, et elle ne mentira pas ; si elle tarde, attends-la, car elle s’accomplira,
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

          <blockquote className="challenge-scripture">
            <p>« Que chacun demande à son voisin et chacune à sa voisine des vases d’argent et des vases d’or. »</p>
            <cite>Exode 11:2</cite>
          </blockquote>

          <ul>
            {projectNeeds.map((need) => <li key={need}><Check />{need}</li>)}
          </ul>
        </article>

        <article className="challenge-card spiritual-card">
          <div className="spiritual-card-copy">
            <div className="gold-icon"><Church /></div>
            <p className="eyebrow">La portée spirituelle du projet</p>
            <h3>Un lieu consacré à Dieu : <span className="spiritual-title-emphasis">un autel royal&nbsp;!</span></h3>
            <p>
              Au-delà d’un lieu de rassemblement, d’adoration, de formation, de refuge, de soutien… nous voulons établir
              à Fontainebleau un espace mis à part pour Dieu, où Son nom sera invoqué, Sa présence recherchée,
              Sa Parole annoncée et des vies transformées.
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
            <img src="/images/WORSHIP.png" alt="Projection d’une salle dédiée à l’adoration et aux rassemblements" />
            <figcaption>Visuel d’illustration</figcaption>
          </figure>
        </article>

        <div className="prayer-block">
          <div className="prayer-heading">
            <p className="eyebrow">Bâtir dans la prière</p>
            <h2 className="prayer-title">Prions <span className="gold-text">ensemble.</span></h2>
            <p className="prayer-copy">
              À l’image de Néhémie, nous ne voulons pas bâtir sur la base de nos propres forces. Nous voulons d’abord activer
              l’arme de la prière : nous voulons prier, discerner et agir.
            </p>
            <p className="prayer-copy">
              La prière accompagne chaque étape du projet, depuis la recherche du lieu jusqu’à son aménagement et son ouverture.
            </p>
            <blockquote>
              <p>« Nous priâmes notre Dieu, et nous établîmes une garde jour et nuit. »</p>
              <cite>Néhémie 4:9</cite>
            </blockquote>
          </div>
          <div className="prayer-topics">
            <p className="prayer-points-intro">Accordons-nous dans la prière sur ces sujets :</p>
            <PrayerAccordion />
          </div>
        </div>

      </div>
    </section>
  );
}
