export default function VideoSection() {
  return (
    <section className="section video-section" data-reveal-section>
      <div className="container video-shell">
        <div className="video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/video-presentation-poster.jpg"
            aria-label="Présentation de Fontainebleau Royal"
          >
            <source src="/images/video-presentation-fontainebleau-royale.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
