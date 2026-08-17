export default function VideoSection() {
  return (
    <section className="section video-section" data-reveal-section>
      <div className="container video-shell">
        <div className="availability-banner video-availability">
          <strong>7 jours sur 7</strong>
          <p><b>Imaginez</b> un lieu disponible tout au long de la semaine pour accueillir la vie de l’Église, prendre soin des personnes, former, prier, servir et se rassembler.</p>
        </div>
        <div className="video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/videos/presentation-fontainebleau-royal-poster.webp"
            aria-label="Présentation de Fontainebleau Royal"
          >
            <source src="/videos/presentation-fontainebleau-royal.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
