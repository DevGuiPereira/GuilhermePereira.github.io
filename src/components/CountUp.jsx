import { useState, useEffect } from 'react';
import { useInView } from './useInView';

export function CountUp({ value, duration = 1400 }) {
  const [display, setDisplay] = useState("0");
  const [ref, inView] = useInView(0.5);
  const isPercent = String(value).includes("%");
  const numeric = parseFloat(String(value));

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = numeric * eased;
      const formatted = isPercent
        ? Math.round(cur) + "%"
        : Math.round(cur).toString();
      setDisplay(formatted);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, isPercent, duration]);

  return <span ref={ref}>{display}</span>;
}
