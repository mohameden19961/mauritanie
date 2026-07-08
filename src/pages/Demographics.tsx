import { useEffect, useRef } from 'react';
import { MAURITANIA } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';

function color(c: string): string {
  if (typeof document === 'undefined') return '#0D8A3C';
  return getComputedStyle(document.documentElement).getPropertyValue(c).trim();
}
function isDark(): boolean {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}
function gridColor(): string {
  return isDark() ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
}
function textColor(): string {
  return isDark() ? '#aaa' : '#666';
}

export default function Demographics() {
  const createdCharts = useRef<Record<string, any>>({});

  useEffect(() => {

    const loadChartJS = () => {
      if ((window as any).Chart) {
        initCharts();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = () => initCharts();
      document.head.appendChild(script);
    };

    const initCharts = () => {
      const Chart = (window as any).Chart;
      if (!Chart) return;

      const demo = MAURITANIA.demographics;
      const chartMap: Record<string, any> = {
        'chart-population': { type: 'bar', data: demo.population, labelsKey: 'year', valueKey: 'value', label: 'Population', colorKey: '--primary', desc: demo.popDesc },
        'chart-urbanisation': { type: 'line', data: demo.urbanisation, labelsKey: 'year', valueKey: 'value', label: "Taux d'urbanisation (%)", colorKey: '--secondary', desc: demo.urbanDesc },
        'chart-ethnic': { type: 'pie', data: demo.ethnicGroups, labelsKey: 'group', valueKey: 'value', colors: ['#0D8A3C', '#1E88E5', '#FF9800', '#9C27B0', '#E91E63', '#00BCD4'], desc: demo.ethnicDesc }
      };

      Object.keys(chartMap).forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const cfg = chartMap[id];
        const container = el.closest('.chart-container');
        const front = container ? container.querySelector('.flip-front') : el;
        if (!front) return;

        const canvas = document.createElement('canvas');
        front.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        let datasets: any[] = [];
        if (cfg.type === 'doughnut' || cfg.type === 'pie') {
          datasets = [{
            data: cfg.data.map((d: any) => d[cfg.valueKey]),
            backgroundColor: cfg.colors
          }];
        } else {
          const c = cfg.colors ? cfg.colors[0] : (color(cfg.colorKey) || '#0D8A3C');
          const ds: any = {
            label: cfg.label || '',
            data: cfg.data.map((d: any) => d[cfg.valueKey]),
            backgroundColor: cfg.colors ? cfg.colors : c + '55',
            borderColor: cfg.colors ? undefined : c,
            borderWidth: cfg.colors ? undefined : 2
          };
          if (cfg.type === 'line') {
            ds.fill = true;
            ds.tension = 0.4;
            ds.pointRadius = 4;
            ds.pointBackgroundColor = c;
            ds.backgroundColor = c + '22';
          }
          if (cfg.type === 'bar') {
            ds.borderRadius = 4;
          }
          datasets = [ds];
        }

        const opts: any = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: cfg.type !== 'line' && cfg.type !== 'bar'
              ? { position: 'bottom', labels: { boxWidth: 12, padding: 10, font: { size: 10 } } }
              : { labels: { font: { size: 11 } } }
          },
          scales: {}
        };

        if (cfg.type !== 'doughnut' && cfg.type !== 'pie') {
          const xKey = cfg.horizontal ? 'y' : 'x';
          const yKey = cfg.horizontal ? 'x' : 'y';
          opts.scales[xKey] = { grid: { display: xKey === 'y' }, ticks: { color: textColor() } };
          opts.scales[yKey] = { grid: { color: gridColor() }, ticks: { color: textColor() } };
          if (id === 'chart-urbanisation') {
            opts.scales[yKey].ticks.callback = (v: number) => v + '%';
          }
          if (id === 'chart-population') {
            opts.scales[yKey].ticks.callback = (v: number) => v >= 1000000 ? (v / 1000000).toFixed(1) + 'M' : v;
          }
          if (cfg.horizontal) opts.indexAxis = 'y';
        }

        const chart = new Chart(ctx, {
          type: cfg.type === 'doughnut' ? 'doughnut' : cfg.type,
          data: {
            labels: cfg.data.map((d: any) => d[cfg.labelsKey]),
            datasets
          },
          options: opts
        });
        createdCharts.current[id] = chart;

        if (container) {
          const backP = container.querySelector('.flip-back p');
          if (backP) backP.textContent = cfg.desc || '';
        }
      });

      document.querySelectorAll('.chart-container').forEach((container) => {
        container.addEventListener('click', function (this: HTMLElement) {
          this.classList.toggle('flipped');
          Object.keys(createdCharts.current).forEach((id) => {
            const ch = createdCharts.current[id];
            if (ch && ch.resize) setTimeout(ch.resize, 350);
          });
        });
      });
    };

    loadChartJS();

    return () => {
      Object.keys(createdCharts.current).forEach((id) => {
        const ch = createdCharts.current[id];
        if (ch && ch.destroy) ch.destroy();
      });
      createdCharts.current = {};
    };
  }, []);

  return (
    <>
      <Header />

      <PageHeader
        title="Démographie"
        description="La Mauritanie compte environ 4,6 millions d'habitants. Sa population est jeune et majoritairement urbaine, avec une diversité ethnique riche reflétant son histoire de carrefour entre l'Afrique du Nord et l'Afrique subsaharienne."
        breadcrumbItems={[{ label: 'Démographie' }]}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: -32 }}>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>👥</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>4,62 M</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Population 2024</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>📊</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>62%</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Taux d'urbanisation</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>🧑‍🌾</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-dark)' }}>4,5</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>hab./km²</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>🧑‍🤝‍🧑</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>6</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>groupes ethniques</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="chart-container">
              <div className="chart-title">Évolution de la population</div>
              <div className="flip-wrap">
                <div className="flip-inner">
                  <div className="flip-front"><div id="chart-population" data-chart="population"></div></div>
                  <div className="flip-back"><div className="flip-label">Analyse</div><p></p></div>
                </div>
                <div className="flip-hint">&#x21bb; Cliquez pour l'analyse</div>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-title">Taux d'urbanisation (%)</div>
              <div className="flip-wrap">
                <div className="flip-inner">
                  <div className="flip-front"><div id="chart-urbanisation" data-chart="urbanisation"></div></div>
                  <div className="flip-back"><div className="flip-label">Analyse</div><p></p></div>
                </div>
                <div className="flip-hint">&#x21bb; Cliquez pour l'analyse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="grid-2">
            <div className="chart-container">
              <div className="chart-title">Groupes ethniques</div>
              <div className="flip-wrap">
                <div className="flip-inner">
                  <div className="flip-front"><div id="chart-ethnic" data-chart="ethnic"></div></div>
                  <div className="flip-back"><div className="flip-label">Analyse</div><p></p></div>
                </div>
                <div className="flip-hint">&#x21bb; Cliquez pour l'analyse</div>
              </div>
            </div>
            <div>
              <div className="chart-title" style={{ marginBottom: 16 }}>Population historique</div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Année</th>
                      <th>Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MAURITANIA.demographics.population.map((row, i) => (
                      <tr key={i}>
                        <td>{row.year}</td>
                        <td>{row.value.toLocaleString('fr-FR')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}