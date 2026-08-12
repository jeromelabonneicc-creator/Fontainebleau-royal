import { Check, Church, Quote, ShieldCheck } from "lucide-react";
import { prayerPoints, projectNeeds, propheticVoices } from "@/content/campaign";

export default function Story() {
  return (
    <section id="histoire" className="section story" data-reveal-section>
      <div className="container">
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

        <div className="challenge-grid">
          <article className="challenge-card">
            <div className="gold-icon"><ShieldCheck /></div>
            <p className="eyebrow">Le défi majeur</p>
            <h3>Mobiliser les ressources nécessaires.</h3>
            <p>Un projet porté par ICC Fontainebleau et par les contributeurs du territoire.</p>
            <ul>
              {projectNeeds.map((need) => <li key={need}><Check />{need}</li>)}
            </ul>
          </article>
          <article className="challenge-card spiritual-card">
            <div className="gold-icon"><Church /></div>
            <p className="eyebrow">La portée spirituelle</p>
            <h3>Un lieu consacré à Dieu.</h3>
            <p>Un lieu de prière, d’adoration, d’enseignement de la Parole, de salut, de formation, de communion fraternelle et d’envoi.</p>
            <strong>Un autel au service de la mission sur le territoire.</strong>
          </article>
        </div>

        <div className="prayer-block">
          <div className="prayer-heading">
            <p className="eyebrow">Bâtir dans la prière</p>
            <blockquote>
              <p>« Nous priâmes notre Dieu, et nous établîmes une garde jour et nuit. »</p>
              <cite>Néhémie 4:9</cite>
            </blockquote>
          </div>
          <div className="prayer-points">
            {prayerPoints.map((point) => <div key={point}><span>✦</span><p>{point}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
