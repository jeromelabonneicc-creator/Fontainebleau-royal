const faq = [
  ["Pourquoi Fontainebleau Royal ?", "Pour louer et aménager un lieu stable, consacré à Dieu, capable d’accueillir durablement la famille ICC Fontainebleau et de servir le territoire."],
  ["ICC Fontainebleau achète-t-elle une salle ?", "Non. Le projet concerne la location d’un futur lieu ainsi que les travaux d’aménagement, les finitions, l’équipement et l’installation nécessaires pour l’occuper."],
  ["À quoi serviront les contributions ?", "Elles permettront de couvrir la location et les dépenses directement liées à l’aménagement et à l’installation du futur lieu."],
  ["Quelles actions solidaires sont concernées ?", "Le SEF organise déjà un restaurant solidaire, des paniers alimentaires, des kits d’hygiène, un vestiaire solidaire et des permanences d’assistance sociale, administrative et professionnelle. Le futur lieu offrira un cadre stable pour poursuivre et développer ces actions."],
  ["Qu’est-ce que le PCNC ?", "Le Parcours de Croissance de la Nouvelle Création accompagne le disciple : bienvenue dans le Royaume (001), fondements du Royaume (101), maturité spirituelle (201), Restauration Transformation Totale (RTT) et École des bergers (Poïmaino)."],
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
