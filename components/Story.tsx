import { historyTopics } from "@/content/campaign";

export default function Story() {
  return (
    <section id="histoire" className="section story" data-reveal-section>
      <div className="container story-grid">
        <div>
          <p className="eyebrow">L’histoire de Fontainebleau Royal</p>
          <h2>Une histoire commencée <span className="gold-text">bien avant la campagne.</span></h2>
        </div>
        <div className="story-copy">
          <p>
            Fontainebleau Royal est né d’une vision portée dans la prière, de messages reçus
            et d’étapes qui ont conduit ICC Fontainebleau à préparer son futur lieu.
          </p>
          <p>Cette histoire sera enrichie au fil de la campagne.</p>
        </div>
      </div>
      <div className="container history-list">
        {historyTopics.map((topic, index) => <div key={topic}><span>0{index + 1}</span><p>{topic}</p></div>)}
      </div>
    </section>
  );
}
