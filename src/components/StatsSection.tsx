import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: string;
  num?: number;
  suffix?: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!animated) return;
    const durations = [1500, 1200, 1000, 800];
    const startTimes = stats.map(() => Date.now());

    const targets = stats.map(st => {
      if (st.num !== undefined) return st.num;
      const match = st.value.match(/^[\d.,]+/);
      return match ? parseFloat(match[0].replace(',', '.')) : 0;
    });

    function animate() {
      const newCounts = stats.map((_, i) => {
        const elapsed = Date.now() - startTimes[i];
        const duration = durations[i] || 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        return Math.round(targets[i] * eased);
      });
      setCounts(newCounts);
      if (newCounts.some((c, i) => c < targets[i])) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }, [animated, stats]);

  function formatDisplay(stat: StatItem, i: number) {
    if (stat.num !== undefined) {
      const val = counts[i].toLocaleString('fr-FR');
      return stat.suffix ? `${val}${stat.suffix}` : val;
    }
    return stat.value;
  }

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="stat-value">{stat.icon} {formatDisplay(stat, i)}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}