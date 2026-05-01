import { useState, useEffect } from 'react';
import PORTFOLIO_DATA from './data/portfolioData';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [lang, setLang] = useState('pt');
  const [theme, setTheme] = useState('light');
  const accentHue = 155; // Mantivemos o verde como cor padrão

  const data = PORTFOLIO_DATA[lang];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent",
      `oklch(${theme === "dark" ? "0.78" : "0.55"} 0.15 ${accentHue})`
    );
    document.documentElement.style.setProperty(
      "--accent-soft",
      `oklch(${theme === "dark" ? "0.28" : "0.92"} 0.05 ${accentHue})`
    );
    document.documentElement.style.setProperty(
      "--grid-line",
      `oklch(${theme === "dark" ? "0.22" : "0.92"} 0.006 ${accentHue})`
    );
  }, [accentHue, theme]);

  // Scroll reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <NavBar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} data={data} />
      <Hero data={data} lang={lang} />
      <About data={data} lang={lang} />
      <Skills data={data} lang={lang} />
      <Experience data={data} lang={lang} />
      <Education data={data} lang={lang} />
      <Writing data={data} lang={lang} />
      <Contact data={data} lang={lang} />
      <Footer data={data} />
    </>
  );
}

export default App;
