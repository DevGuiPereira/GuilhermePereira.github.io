export function Hero({ data, lang }) {
  const t = data.hero;
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" />
      <div className="container">
        <div className="hero-tag">{t.tag}</div>
        <h1>
          {t.headline.map((line, i) => (
            <span className="line" key={i}>
              <span className="line-inner">
                {i === 1 ? <em className="hero-emph">{line}</em> : line}
              </span>
            </span>
          ))}
        </h1>
        <p className="hero-sub">{t.sub}</p>
        <div className="hero-actions">
          {/* TODO: Inserir link de download do currículo aqui */}
          <a href="assets\GuilhermeReisPereira.pdf" className="btn">
            {t.cta_primary}
            <span className="btn-arrow">↓</span>
          </a>
          <a href="#experience" className="btn ghost">
            {t.cta_secondary}
            <span className="btn-arrow">→</span>
          </a>
        </div>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-label">[ {lang === "pt" ? "Localização" : "Location"} ]</span>
            <span className="hero-meta-value">{t.location}</span>
          </div>
          <div className="hero-meta-item" style={{ alignItems: "center" }}>
            <span className="hero-meta-label">[ {lang === "pt" ? "Status" : "Status"} ]</span>
            <span className="hero-meta-value">{t.meta_left}</span>
          </div>
          <div className="hero-meta-item" style={{ alignItems: "flex-end" }}>
            <span className="hero-meta-label">[ {lang === "pt" ? "Resposta" : "Response"} ]</span>
            <span className="hero-meta-value">{t.meta_right}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
