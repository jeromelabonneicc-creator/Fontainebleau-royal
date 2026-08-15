const faq = [
  {
    question: "Pourquoi Fontainebleau Royal ?",
    answer: "Fontainebleau Royal est le projet d’implantation porté par ICC Fontainebleau pour louer, aménager et équiper un lieu de vie polyvalent. Il permettra à l’Église d’être enfin fixée, de ne plus dépendre de salles temporaires et de déployer ses activités tout au long de la semaine."
  },
  {
    question: "ICC Fontainebleau achète-t-elle une salle ?",
    answer: "Non. Le projet concerne la location à long terme d’un futur lieu, ainsi que les travaux d’aménagement, les finitions, l’équipement et l’installation nécessaires pour l’occuper."
  },
  {
    question: "À quoi serviront les contributions ?",
    answer: "Elles permettront de couvrir la location et les dépenses directement liées aux travaux, à l’aménagement, aux finitions, à l’équipement et à l’installation du futur lieu."
  },
  {
    question: "Quelles actions solidaires sont concernées ?",
    answer: "Le SEF organise déjà un restaurant solidaire, des paniers alimentaires, des kits d’hygiène, un vestiaire solidaire et des permanences d’assistance sociale, administrative et professionnelle. Le futur lieu offrira un cadre stable pour poursuivre et développer ces actions en local, aussi bien le week-end qu’en semaine."
  },
  {
    question: "Quelles formations seront proposées ?",
    answer: "Le lieu accueillera plusieurs formats en local :",
    items: [
      "le Parcours de Croissance de la Nouvelle Création (PCNC)",
      "les forums d’orientation",
      "l’Académie biblique",
      "les accompagnements professionnels et l’accompagnement des familles",
      "la formation « Restauration et Transformation Totale » afin de guérir des blessures intérieures",
      "la formation des leaders",
      "les formations aux métiers des médias, de la technologie et du numérique",
      "la formation en gestion et intelligence financière"
    ]
  },
  {
    question: "Comment contribuer ?",
    answer: "Le montant reste entièrement libre. Vous pouvez contribuer de plusieurs manières :",
    items: [
      "en ligne, par une contribution mensuelle ou un don libre sur le parcours dédié, en précisant « ICC Fontainebleau »",
      "par chèque à l’ordre d’ICC, en précisant « ICC Fontainebleau » au dos du chèque",
      "en espèces, notamment les dimanches, lors des événements, des rencontres dans les maisons ou d’autres rencontres organisées sur le territoire"
    ]
  }
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
          {faq.map(({ question, answer, items }) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <div className="faq-answer">
                <p>{answer}</p>
                {items && (
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
