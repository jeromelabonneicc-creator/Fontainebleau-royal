import { learningTopics } from "@/content/campaign";

export default function Learning() {
  return (
    <section id="comprendre" className="section learning-section" data-reveal-section>
      <div className="container">
        <div className="learning-intro">
          <div>
            <p className="eyebrow">Comprendre Fontainebleau Royal</p>
            <h2>Comprendre avant de <span className="gold-text">contribuer.</span></h2>
          </div>
          <p>Cette rubrique accueillera progressivement les contenus pédagogiques et les archives de la campagne.</p>
        </div>
        <div className="learning-grid">
          {learningTopics.map((topic, index) => (
            <article className="learning-card" key={topic}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{topic}</h3>
              <p>Contenu à venir</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
