export function Footer({ data }) {
  const t = data.footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-tag">{t.tag}</div>
          <div className="footer-copy">{t.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
