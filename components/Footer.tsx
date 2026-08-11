export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><strong>ICC Fontainebleau</strong><span>Fontainebleau Royal</span></div>
        <p>© {new Date().getFullYear()} ICC Fontainebleau</p>
      </div>
    </footer>
  );
}
