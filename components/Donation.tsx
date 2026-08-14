import { ShieldCheck } from "lucide-react";

export default function Donation() {
  return (
    <section id="contribuer" className="section donation-section" data-reveal-section>
      <div className="container donation-grid">
        <div>
          <p className="eyebrow">Contribuer</p>
          <h2>Je <span className="gold-text">participe.</span></h2>
          <p className="donation-copy">
            Les contributions permettent de couvrir la location, les travaux d’aménagement,
            les finitions, l’équipement et l’installation du futur lieu.
          </p>
          <p className="donation-copy">Chacun reste libre du montant et du rythme de sa contribution.</p>
        </div>

        <div className="contribution-options">
          <article className="contribution-option featured">
            <span>Dans la durée</span>
            <h3>Contribution mensuelle</h3>
            <p>Un engagement régulier qui soutient la mobilisation jusqu’à l’installation dans le futur lieu.</p>
          </article>
          <article className="contribution-option">
            <span>En toute liberté</span>
            <h3>Don libre</h3>
            <p>Une contribution ponctuelle, selon le montant que vous avez à cœur de donner.</p>
          </article>

          <div className="contribution-action">
            <strong>Précisez « ICC Fontainebleau » lors de votre contribution.</strong>
            <a className="btn btn-gold btn-full" href="https://dons2.egliseicc.com/" target="_blank" rel="noreferrer">Je contribue au projet →</a>
          </div>

          <aside className="donation-disclaimer">
            <div className="gold-icon"><ShieldCheck /></div>
            <div>
              <strong>Donner librement et en conscience</strong>
              <p>
                « Ne vous endettez jamais pour donner à Dieu. Donnez selon votre niveau de foi et votre prospérité,
                <br />{" "}
                Lorsque vous donnez, faites-le en toute conscience et liberté, avec joie, sans contrainte, ni regret. »
              </p>
              <cite>2 Corinthiens 9:7</cite>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
