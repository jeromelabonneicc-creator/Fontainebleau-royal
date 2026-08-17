import { iccStats } from "@/content/campaign";

export default function AboutICC() {
  return (
    <section id="qui-sommes-nous" className="section about-icc" data-reveal-section>
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <h2 className="eyebrow about-title">Qui sommes-nous&#8239;?</h2>
            <p className="about-lead">
              Impact Centre Chrétien (ICC) est une <strong>association loi 1901</strong>, membre de la
              {" "}<strong>Fédération Protestante de France</strong>.
            </p>
            <p className="about-lead">
              Le réseau ICC rassemble chaque semaine plus de <strong>63 000 personnes</strong> au sein de plus de
              {" "}<strong>185 représentations locales</strong> dans le monde entier, ainsi que des dizaines de milliers de
              personnes qui suivent les programmes et événements en ligne.
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
