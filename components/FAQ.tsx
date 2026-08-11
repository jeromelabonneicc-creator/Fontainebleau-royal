const faq = [
  ["À quoi servira ma contribution ?", "Elle participe au financement de la location et de la mise en place de la future salle d’ICC Fontainebleau."],
  ["Puis-je choisir librement le montant ?", "Oui. Le site propose des montants rapides, mais chacun reste libre de contribuer selon ses possibilités."],
  ["Comment effectuer mon don ?", "Le bouton de contribution renvoie vers le parcours de don. Il suffit ensuite de préciser « ICC Fontainebleau »."]
];

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section" data-reveal-section>
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>Les réponses aux<br/><span className="gold-text">questions essentielles.</span></h2>
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
