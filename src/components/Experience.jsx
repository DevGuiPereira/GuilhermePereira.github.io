import { useState, useEffect, useRef } from 'react';
import { useInView } from './useInView';

function ExperienceItem({ item, lang }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div className={`exp-item ${inView ? "in-view" : ""}`} ref={ref}>
      <div className="exp-period">{item.period}</div>
      <div className="exp-content">
        <h3 className="exp-role">{item.role}</h3>
        <div className="exp-company">
          {item.company}
          <span className="sep">/</span>
          {item.location}
        </div>
        <ul className="exp-bullets">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="exp-tags">
          {item.tags.map((tag, i) => <span className="tag" key={i}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

export function Experience({ data, lang }) {
  const t = data.experience;
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height;
      const seen = Math.max(0, Math.min(total, window.innerHeight * 0.5 - rect.top));
      setProgress((seen / total) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-label">
          <span className="section-num">03</span>
          <span>{t.label}</span>
        </div>
        <h2 className="section-title reveal">{t.title}</h2>
        <div className="timeline">
          <div className="timeline-line" />
          <div className="timeline-progress" style={{ height: `${progress}%` }} />
          {t.items.map((item, i) => (
            <ExperienceItem key={i} item={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
