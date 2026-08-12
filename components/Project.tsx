import { missionAxes } from "@/content/campaign";

export default function Project() {
  return (
    <section id="projet" className="section project" data-reveal-section>
      <div className="container">
        <div className="project-heading">
          <div>
            <p className="eyebrow">Pourquoi ce projet ?</p>
            <h2>Un lieu fixe au service de <span className="gold-text">la mission.</span></h2>
          </div>
          <p>
            Fontainebleau Royal, c’est le projet de doter ICC Fontainebleau d’un lieu fixe,
            entièrement dédié à la mission que Dieu nous a confiée.
          </p>
        </div>

        <div className="project-statement">
          <p>Ce lieu n’est pas une fin en soi.</p>
          <strong>Il sera un outil pour accueillir, servir, former, transformer et déployer la vision.</strong>
        </div>

        <div className="mission-heading">
          <p className="eyebrow">Ce que Fontainebleau Royal permettra</p>
          <h2>Un bâtiment pour <span className="gold-text">agir concrètement.</span></h2>
        </div>
        <div className="project-grid mission-grid">
          {missionAxes.map(({ number, title, copy }) => (
            <article className="project-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
