import { useState, useEffect } from 'react';

export function NavBar({ lang, setLang, theme, toggleTheme, data }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: data.nav.about },
    { id: "skills", label: data.nav.skills },
    { id: "experience", label: data.nav.experience },
    { id: "education", label: data.nav.education },
    { id: "writing", label: data.nav.writing },
    { id: "contact", label: data.nav.contact },
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">GP</span>
          <span>Guilherme Pereira</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a href={`#${l.id}`} key={l.id}>{l.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="nav-btn"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label="Toggle language"
          >
            {lang === "pt" ? "PT / EN" : "EN / PT"}
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="6.34" y2="6.34" /><line x1="17.66" y1="17.66" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="6.34" y2="17.66" /><line x1="17.66" y1="6.34" x2="19.07" y2="4.93" /></svg>
            )}
          </button>
          {/* TODO: Inserir link de download do currículo aqui */}
          <a href="assets\GuilhermeReisPereira.pdf" className="nav-btn primary">
            {data.nav.resume} ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
