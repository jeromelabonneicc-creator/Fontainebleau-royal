const items = [
  ["✝", "Un projet spirituel", "Un lieu consacré à la prière, à l’enseignement et à la transformation des vies."],
  ["◎", "Un impact communautaire", "Un espace pour accueillir, accompagner, former et rassembler."],
  ["⌂", "Une demeure pérenne", "Un lieu capable d’accompagner durablement la croissance de l’église."]
];

export default function Pillars() {
  return (
    <section id="impact" className="section section-dark" data-reveal-section>
      <div className="container">
        <p className="eyebrow">Notre vision</p>
        <h2 className="section-title">Plus qu’une salle.<br/>Un lieu pour <span className="gold-text">bâtir.</span></h2>
        <div className="pillars">
          {items.map(([icon, title, copy]) => (
            <article className="pillar-card" key={title}>
              <div className="pillar-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
