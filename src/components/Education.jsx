export function Education({ data, lang }) {
  const t = data.education;
  return (
    <section id="education">
      <div className="container">
        <div className="section-label">
          <span className="section-num">04</span>
          <span>{t.label}</span>
        </div>
        <h2 className="section-title reveal">{t.title}</h2>
        <div className="edu-grid">
          <div className="reveal">
            <div className="edu-block-title">{lang === "pt" ? "Formação acadêmica" : "Academic background"}</div>
            {t.degrees.map((d, i) => (
              <div className="degree" key={i}>
                <div className="degree-period">{d.period}</div>
                <h3 className="degree-title">{d.title}</h3>
                <div className="degree-school">{d.school}</div>
                <p className="degree-detail">{d.detail}</p>
              </div>
            ))}
          </div>
          <div className="reveal delay-1">
            <div className="edu-block-title">{lang === "pt" ? "Cursos" : "Courses"}</div>
            <div className="cert-list">
              {t.courses.map((c, i) => (
                <div className="cert" key={i}>
                  <div>
                    {c.url
                      ? <a className="cert-name cert-link" href={c.url} target="_blank" rel="noopener noreferrer">{c.name} ↗</a>
                      : <div className="cert-name">{c.name}</div>
                    }
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                  <div className="cert-year">{c.year}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal delay-2">
            <div className="edu-block-title">{lang === "pt" ? "Certificações" : "Certifications"}</div>
            <div className="cert-list">
              {t.certs.map((c, i) => (
                <div className="cert" key={i}>
                  <div>
                    {c.url
                      ? <a className="cert-name cert-link" href={c.url} target="_blank" rel="noopener noreferrer">{c.name} ↗</a>
                      : <div className="cert-name">{c.name}</div>
                    }
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                  <div className="cert-year">{c.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
