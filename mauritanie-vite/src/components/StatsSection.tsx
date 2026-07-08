interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="stat-value">{stat.icon} {stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}