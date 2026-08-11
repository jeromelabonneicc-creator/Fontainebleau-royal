export default function Progress() {
  const current = 38000;
  const goal = 75000;
  const pct = Math.round((current / goal) * 100);

  return (
    <section id="avancement" className="section progress-section" data-reveal-section>
      <div className="container progress-grid">
        <div>
          <p className="eyebrow">Avancement</p>
          <h2>Notre objectif :<br/><span className="gold-text">{goal.toLocaleString("fr-FR")} €</span></h2>
        </div>
        <div className="progress-card">
          <div className="progress-numbers">
            <div><strong>{current.toLocaleString("fr-FR")} €</strong><span>collectés</span></div>
            <div className="align-right"><strong>{pct}%</strong><span>de l’objectif</span></div>
          </div>
          <div className="progress-bar"><span data-progress={pct} style={{ width: `${pct}%` }} /></div>
          <p>Ces montants sont des exemples : branche-les ensuite à ta source de données réelle.</p>
        </div>
      </div>
    </section>
  );
}
