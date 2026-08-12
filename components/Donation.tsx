export default function Donation() {
  return (
    <section id="contribuer" className="section donation-section" data-reveal-section>
      <div className="container donation-grid">
        <div>
          <p className="eyebrow">Contribuer</p>
          <h2>Mensuellement ou par <span className="gold-text">un don libre.</span></h2>
          <p className="donation-copy">
            L’engagement mensuel nous permet de construire le projet dans la durée et d’avoir
            une meilleure visibilité sur les ressources disponibles pour notre futur lieu.
          </p>
          <p className="donation-copy">Chacun reste libre du montant de sa contribution.</p>
        </div>

        <div className="contribution-options">
          <article className="contribution-option featured">
            <span>Dans la durée</span>
            <h3>Contribution mensuelle</h3>
            <p>Un engagement régulier qui permet de construire le projet avec davantage de visibilité.</p>
            <a className="btn btn-gold btn-full" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer">Contribuer mensuellement →</a>
          </article>
          <article className="contribution-option">
            <span>En toute liberté</span>
            <h3>Don libre</h3>
            <p>Une contribution ponctuelle, selon le montant que vous avez à cœur de donner.</p>
            <a className="btn btn-outline btn-full" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer">Faire un don libre →</a>
          </article>
          <small>Précisez « ICC Fontainebleau » lors de votre contribution.</small>
        </div>
      </div>
    </section>
  );
}
