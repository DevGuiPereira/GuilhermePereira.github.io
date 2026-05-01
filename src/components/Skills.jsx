// import { useInView } from './useInView';

// function SkillBar({ level, delay }) {
//   const [ref, inView] = useInView(0.3);
//   return (
//     <div className="skill-bar" ref={ref}>
//       <div
//         className={`skill-bar-fill ${level >= 80 ? "high" : ""}`}
//         style={{
//           width: inView ? `${level}%` : "0%",
//           transitionDelay: `${delay}ms`,
//         }}
//       />
//     </div>
//   );
// }

export function Skills({ data }) {
  const t = data.skills;
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-label">
          <span className="section-num">02</span>
          <span>{t.label}</span>
        </div>
        <div className="skills-header">
          <h2 className="section-title reveal">{t.title}</h2>
          <p className="section-sub reveal delay-1">{t.sub}</p>
        </div>
        <div className="skills-grid">
          {t.groups.map((group, gi) => (
            <div className="skill-group reveal" key={gi} style={{ transitionDelay: `${gi * 80}ms` }}>
              <div className="skill-group-header">
                <span className="skill-group-name">{group.name}</span>
                <span className="skill-group-num">
                  {String(gi + 1).padStart(2, "0")} / {String(t.groups.length).padStart(2, "0")}
                </span>
              </div>
              {group.items.map((item, i) => (
                <div className="skill-row" key={i}>
                  <span className="skill-name">{item.name}</span>
                  {/* Bars commented out — uncomment to restore:
                  <div className="skill-info">
                    <div className="skill-name-row">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.level}%</span>
                    </div>
                    <SkillBar level={item.level} delay={i * 100} />
                  </div>
                  <span className="skill-years">{item.years}</span>
                  */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
