const amounts = [25, 50, 100, 250, 500];

export default function Donation() {
  return (
    <section id="contribuer" className="section donation-section" data-reveal-section>
      <div className="container donation-grid">
        <div>
          <p className="eyebrow">Appel aux dons</p>
          <h2>Fais partie des <span className="gold-text">contributeurs.</span></h2>
          <p className="donation-copy">
            Chaque contribution participe à rendre ce projet possible.
            Choisis un montant ou indique librement ta contribution.
          </p>
        </div>

        <div className="donation-card">
          <p>Je souhaite contribuer à hauteur de</p>
          <div className="amounts">
            {amounts.map(a => <button key={a}>{a} €</button>)}
            <button>Autre</button>
          </div>
          <a className="btn btn-gold btn-full" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer">
            Continuer vers le don →
          </a>
          <small>Précise « ICC Fontainebleau » lors de ton don.</small>
        </div>
      </div>
    </section>
  );
}
