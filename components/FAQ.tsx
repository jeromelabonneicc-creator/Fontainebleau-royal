const faq = [
  ["Pourquoi Fontainebleau Royal ?", "Fontainebleau Royal est le projet de doter ICC Fontainebleau d’un lieu fixe, entièrement dédié à la mission que Dieu nous a confiée."],
  ["Pourquoi ICC Fontainebleau a-t-elle besoin d’un lieu fixe ?", "Pour accueillir durablement, accompagner, former et faire de ce lieu une base d’impact pour le territoire et, au-delà, pour les nations."],
  ["À quoi servira concrètement le futur bâtiment ?", "Il permettra d’accueillir les personnes, d’accompagner les familles, de proposer des formations, du discipulat, des rencontres et les différents programmes de l’église."],
  ["Qu’est-ce qu’un contributeur ?", "Un contributeur est une personne qui choisit de prendre part concrètement à Fontainebleau Royal, par un engagement mensuel ou un don libre."],
  ["Pourquoi contribuer mensuellement ?", "L’engagement mensuel permet de construire le projet dans la durée et d’avoir une meilleure visibilité sur les ressources disponibles."],
  ["Comment les contributions permettent-elles de faire avancer le projet ?", "Elles participent à préparer le futur lieu. Les usages détaillés seront communiqués lorsqu’ils auront été officiellement validés."],
  ["Où en est Fontainebleau Royal aujourd’hui ?", "La campagne de contribution est lancée. La prochaine étape est de réunir les ressources nécessaires à la location du futur bâtiment."],
  ["Puis-je choisir librement le montant ?", "Oui. Chacun reste libre de participer selon ce qu’il a à cœur de donner."],
  ["Comment effectuer ma contribution ?", "Le bouton de contribution renvoie vers le parcours dédié. Il suffit ensuite de préciser « ICC Fontainebleau »."]
];

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section learning-faq" data-reveal-section>
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Comprendre Fontainebleau Royal</p>
          <h2>S’informer avant de<br/><span className="gold-text">contribuer.</span></h2>
          <p className="faq-intro">Cette rubrique évoluera au fil de la campagne avec de nouvelles réponses et de nouveaux contenus.</p>
        </div>
        <div className="faq-list">
          {faq.map(([q, a]) => (
            <details key={q}>
              <summary>{q}<span>+</span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
