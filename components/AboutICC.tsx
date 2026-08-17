import { iccStats } from "@/content/campaign";

export default function AboutICC() {
  return (
    <section id="qui-sommes-nous" className="section about-icc" data-reveal-section>
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <h2 className="eyebrow about-title">Qui sommes-nous&#8239;?</h2>
            <p className="about-lead">
              Impact Centre Chrétien (ICC) est une <strong>église protestante</strong> membre de la <strong>CEAF</strong> et de la
              {" "}<strong>Fédération Protestante de France</strong> qui rassemble plus de <strong>63 000 personnes</strong> chaque
              dimanche au sein de plus de <strong>185 églises locales</strong> dans le monde entier, et des dizaines de milliers de
              personnes qui suivent chaque semaine la retransmission de ses cultes sur Internet.
            </p>
            <p className="about-pastors">
              <strong>Yvan Castanou</strong> est le pasteur principal des églises ICC. Il œuvre dans le ministère aux côtés de son
              épouse, le docteur <strong>Modestine Castanou</strong>, pasteure associée.
            </p>
          </div>

          <figure className="about-portrait">
            <img src="/images/pasteurs-castanou.webp" alt="Yvan et Modestine Castanou, pasteurs des églises ICC" />
          </figure>
        </div>

        <div className="about-stats">
          {iccStats.map(({ value, label }) => (
            <div className="about-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
