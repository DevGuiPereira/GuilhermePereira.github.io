export function Contact({ data, lang }) {
  const t = data.contact;
  const headlineParts = lang === "pt"
    ? ["Vamos conversar", <span className="accent" key="a">sobre dados.</span>]
    : ["Let's talk", <span className="accent" key="a">about data.</span>];
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">
          <span className="section-num">06</span>
          <span>{t.label}</span>
        </div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-headline reveal">
              {headlineParts[0]}<br />{headlineParts[1]}
            </h2>
            <p className="contact-sub reveal delay-1">{t.sub}</p>
          </div>
          <div className="channels reveal delay-2">
            {t.channels.map((c, i) => (
              <a href={c.href} className="channel" key={i}>
                <span className="channel-name">{c.name}</span>
                <span className="channel-value">{c.value}</span>
                <span className="channel-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
