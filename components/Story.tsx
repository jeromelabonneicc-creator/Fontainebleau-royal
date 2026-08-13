import { Check, Church, Quote, ShieldCheck } from "lucide-react";
import { prayerPoints, projectNeeds, propheticVoices } from "@/content/campaign";

export default function Story() {
  return (
    <section className="section story" data-reveal-section>
      <div className="container">
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
          <strong className="challenge-signature">Un projet porté par ICC Fontainebleau et par les contributeurs du territoire.</strong>
          <ul>
            {projectNeeds.map((need) => <li key={need}><Check />{need}</li>)}
          </ul>
        </article>

        <article className="challenge-card spiritual-card">
          <div className="spiritual-card-copy">
            <div className="gold-icon"><Church /></div>
            <p className="eyebrow">La portée spirituelle du projet</p>
            <h3>Un lieu consacré à Dieu n’est pas neutre.</h3>
            <p>
              Fontainebleau Royal deviendra un point d’ancrage pour la prière, la Parole, l’adoration, les conversions,
              la formation, la communion et l’expansion. Le projet dépasse une question de confort :
              il inscrit durablement la présence et la mission d’ICC Fontainebleau sur le territoire.
            </p>
            <strong>Ce qui est semé aujourd’hui pourra servir des générations de croyants, de familles et de personnes à atteindre.</strong>
          </div>
          <figure className="spiritual-card-visual">
            <img src="/images/WORSHIP.png" alt="Projection d’un lieu consacré à l’adoration et à la Parole" />
            <figcaption>Un autel au service de la mission</figcaption>
          </figure>
        </article>

        <div className="prayer-block">
          <div className="prayer-heading">
            <p className="eyebrow">Un projet, une mobilisation</p>
            <h2 className="prayer-title">Prions <span className="gold-text">ensembles.</span></h2>
            <p className="prayer-copy">
              À l’image de Néhémie et du peuple rassemblé pour relever les murailles de Jérusalem,
              nous voulons rester unis, fidèles à la tâche et pleinement engagés malgré les obstacles.
              Notre arme puissante et efficace pour accompagner chaque étape de ce projet, c’est la prière.
            </p>
            <blockquote>
              <p>« Nous priâmes notre Dieu, et nous établîmes une garde jour et nuit pour nous défendre contre leurs attaques. »</p>
              <cite>Néhémie 4:9</cite>
            </blockquote>
          </div>
          <div>
            <p className="prayer-points-intro">Aujourd’hui, nous nous mobilisons et nous prions ensemble pour :</p>
            <div className="prayer-points">
              {prayerPoints.map((point) => <div key={point}><span>✦</span><p>{point}</p></div>)}
            </div>
          </div>
        </div>

        <div id="histoire" className="history-block">
          <div className="story-grid">
            <div>
              <p className="eyebrow">Une histoire de vision</p>
              <h2>Écrire la vision.<br/><span className="gold-text">Préparer la demeure.</span></h2>
            </div>
            <blockquote className="scripture-panel story-scripture">
              <p>« Mets la vision par écrit, grave-la sur des tables afin qu’on la lise couramment. »</p>
              <cite>Habacuc 2:2 — Segond 21</cite>
            </blockquote>
          </div>

          <div className="prophecy-intro">
            <p>Fontainebleau Royal s’inscrit dans une vision portée dans la prière et confirmée par plusieurs paroles prophétiques reçues au sujet du futur lieu.</p>
            <span>Les paroles exactes seront ajoutées après leur transmission et leur validation.</span>
          </div>

          <div className="prophecy-grid">
            {propheticVoices.map((name) => (
              <article className="prophecy-card" key={name}>
                <Quote />
                <p>Parole à venir</p>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
