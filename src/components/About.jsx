import { CountUp } from './CountUp';

export function About({ data, lang }) {
  const t = data.about;
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">
          <span className="section-num">01</span>
          <span>{t.label}</span>
        </div>
        <div className="about-grid">
          <h2 className="section-title reveal">{t.title}</h2>
          <div className="about-text">
            {t.paragraphs.map((p, i) => (
              <p key={i} className={`reveal delay-${i + 1}`}>{p}</p>
            ))}
            <div className="stats-grid reveal delay-2" style={{ marginTop: 32 }}>
              {t.stats.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="stat-num"><CountUp value={s.num} /></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
