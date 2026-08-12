import { campaignSteps } from "@/content/campaign";

export default function Status() {
  return (
    <section id="avancement" className="section status-section" data-reveal-section>
      <div className="container status-layout">
        <div>
          <p className="eyebrow">Où en sommes-nous ?</p>
          <h2>Suivre l’avancement de <span className="gold-text">Fontainebleau Royal.</span></h2>
          <p className="status-copy">Cette section évoluera au rythme des prochaines étapes du projet.</p>
        </div>
        <div className="status-list">
          {campaignSteps.map((step) => (
            <article className={`status-item status-${step.status}`} key={step.label}>
              <span />
              <div><p>{step.label}</p><h3>{step.title}</h3></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
