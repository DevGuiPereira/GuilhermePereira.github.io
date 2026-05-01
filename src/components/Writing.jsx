export function Writing({ data, lang }) {
  const t = data.writing;
  return (
    <section className="writing-section" id="writing">
      <div className="container">
        <div className="section-label">
          <span className="section-num">05</span>
          <span>{t.label}</span>
        </div>
        <div className="skills-header">
          <h2 className="section-title reveal">{t.title}</h2>
          <p className="section-sub reveal delay-1">{t.sub}</p>
        </div>
        <div className="posts">
          {t.posts.map((p, i) => (
            <a href={p.url || "#"} target={p.url ? "_blank" : undefined} rel="noopener noreferrer" className="post reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="post-date">{p.date}</span>
              <span className="post-title">{p.title}</span>
              <span className="post-tag">{p.tag}</span>
              <span className="post-read">{p.read}</span>
              <span className="post-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
