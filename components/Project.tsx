const blocks = [
  ["01", "Un nouveau lieu", "Une salle pensée pour accueillir les cultes, les familles et les différents ministères."],
  ["02", "Plus de capacité", "Permettre à davantage de personnes d’être accueillies dans de bonnes conditions."],
  ["03", "Un lieu adapté", "Des espaces dédiés au culte, aux enfants, aux formations et aux événements."],
  ["04", "Un projet financé ensemble", "Chaque contribution nous rapproche de l’ouverture de cette nouvelle demeure."]
];

export default function Project() {
  return (
    <section id="projet" className="section project" data-reveal-section>
      <div className="container">
        <div className="project-heading">
          <div>
            <p className="eyebrow">Le projet</p>
            <h2>Pourquoi <span className="gold-text">ce lieu ?</span></h2>
          </div>
          <p>
            Le site transforme l’émotion de la campagne en informations claires :
            ce qui est financé, pourquoi, et ce que cela rend possible.
          </p>
        </div>
        <div className="project-grid">
          {blocks.map(([n, title, copy]) => (
            <article className="project-card" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
