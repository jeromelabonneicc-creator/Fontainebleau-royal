const faq = [
  ["Pourquoi Fontainebleau Royal ?", "Fontainebleau Royal est le projet d’implantation porté par ICC Fontainebleau pour louer, aménager et équiper un lieu de vie polyvalent. Il permettra à l’Église d’être enfin fixée, de ne plus dépendre de salles temporaires et de déployer ses activités tout au long de la semaine."],
  ["ICC Fontainebleau achète-t-elle une salle ?", "Non. Le projet concerne la location d’un futur lieu ainsi que les travaux d’aménagement, les finitions, l’équipement et l’installation nécessaires pour l’occuper."],
  ["À quoi serviront les contributions ?", "Elles permettront de couvrir la location et les dépenses directement liées à l’aménagement et à l’installation du futur lieu."],
  ["Quelles actions solidaires sont concernées ?", "Le SEF organise déjà un restaurant solidaire, des paniers alimentaires, des kits d’hygiène, un vestiaire solidaire et des permanences d’assistance sociale, administrative et professionnelle. Le futur lieu offrira un cadre stable pour poursuivre et développer ces actions."],
  ["Quelles formations seront proposées ?", "Le lieu accueillera plusieurs formats en local : le Parcours de Croissance de la Nouvelle Création (PCNC), les forums d’orientation, l’Académie biblique et des accompagnements professionnels."],
  ["Comment contribuer ?", "Vous pouvez choisir une contribution mensuelle ou un don libre sur le parcours dédié, puis préciser « ICC Fontainebleau ». Le montant reste entièrement libre."]
];

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section learning-faq" data-reveal-section>
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Comprendre Fontainebleau Royal</p>
          <h2>S’informer avant de<br/><span className="gold-text">contribuer.</span></h2>
          <p className="faq-intro">Les réponses essentielles sur le lieu, les contributions et les actions qui y seront accueillies.</p>
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
