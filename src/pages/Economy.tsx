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

export default function Economy() {
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

      const econ = MAURITANIA.economy;
      const chartMap: Record<string, any> = {
        'chart-gdp': { type: 'line', data: econ.gdpData, labelsKey: 'year', valueKey: 'value', label: 'PIB (milliards $)', colorKey: '--primary', desc: econ.gdpDesc },
        'chart-sectors': { type: 'doughnut', data: econ.sectors, labelsKey: 'name', valueKey: 'value', colors: ['#0D8A3C', '#1E88E5', '#FF9800', '#9C27B0', '#00BCD4'], desc: econ.sectorsDesc },
        'chart-exports': { type: 'bar', data: econ.exports, labelsKey: 'product', valueKey: 'value', label: '% des exportations', colors: ['#0D8A3C', '#FF9800', '#1E88E5', '#9C27B0', '#E91E63', '#607D8B'], desc: econ.exportsDesc, horizontal: true }
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
            if (ch && ch.resize) setTimeout(() => ch.resize(), 350);
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
        title="Économie de la Mauritanie"
        description="Une économie en pleine transformation portée par les ressources minières, la pêche et un secteur agricole en développement."
        breadcrumbItems={[{ label: 'Économie' }]}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: -32 }}>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>💰</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>10,4 Md$</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>PIB 2024</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>📈</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>3,2%</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Croissance annuelle</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>🪙</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-dark)' }}>2 250 $</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>PIB par habitant</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 4 }}>⛏️</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>35%</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Part des mines</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Indicateurs économiques</h2>
          </div>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div className="progress-group">
              <div className="progress-label"><span>Mines</span><span>35%</span></div>
              <div className="progress-track"><div className="progress-fill" data-width="35%"></div></div>
            </div>
            <div className="progress-group">
              <div className="progress-label"><span>Pêche</span><span>20%</span></div>
              <div className="progress-track"><div className="progress-fill blue" data-width="20%"></div></div>
            </div>
            <div className="progress-group">
              <div className="progress-label"><span>Services & Télécoms</span><span>18%</span></div>
              <div className="progress-track"><div className="progress-fill gold" data-width="18%"></div></div>
            </div>
            <div className="progress-group">
              <div className="progress-label"><span>Agriculture & Élevage</span><span>15%</span></div>
              <div className="progress-track"><div className="progress-fill" data-width="15%"></div></div>
            </div>
            <div className="progress-group">
              <div className="progress-label"><span>Construction & Énergie</span><span>12%</span></div>
              <div className="progress-track"><div className="progress-fill blue" data-width="12%"></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2 style={{ marginBottom: 16 }}>Secteurs clés</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>L'économie mauritanienne repose principalement sur l'exploitation minière, qui représente environ 35% du PIB. Le minerai de fer, extrait à Zouérate, constitue la première ressource du pays. La Mauritanie est également devenue un producteur important d'or et de cuivre, attirant des investissements étrangers significatifs.</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>La pêche est le deuxième pilier économique. Avec 754 km de côtes parmi les plus poissonneuses d'Afrique, ce secteur emploie des dizaines de milliers de personnes. Les eaux mauritaniennes attirent des flottes de pêche internationales, et Nouadhibou est le principal centre de transformation et d'exportation des produits halieutiques.</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>L'agriculture et l'élevage occupent une place importante dans l'économie traditionnelle. La culture du mil, du sorgho et des dattes, ainsi que l'élevage bovin, ovin et camelin, soutiennent les moyens de subsistance d'une grande partie de la population rurale. Le secteur des services et télécommunications est en pleine expansion, porté par la digitalisation et le développement des infrastructures.</p>
            </div>
            <div className="chart-container">
              <div className="chart-title">Évolution du PIB (en milliards $)</div>
              <div className="flip-wrap">
                <div className="flip-inner">
                  <div className="flip-front"><div id="chart-gdp" data-chart="gdp"></div></div>
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
              <div className="chart-title">Répartition par secteur</div>
              <div className="flip-wrap">
                <div className="flip-inner">
                  <div className="flip-front"><div id="chart-sectors" data-chart="sectors"></div></div>
                  <div className="flip-back"><div className="flip-label">Analyse</div><p></p></div>
                </div>
                <div className="flip-hint">&#x21bb; Cliquez pour l'analyse</div>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-title">Principales exportations (%)</div>
              <div className="flip-wrap">
                <div className="flip-inner">
                  <div className="flip-front"><div id="chart-exports" data-chart="exports"></div></div>
                  <div className="flip-back"><div className="flip-label">Analyse</div><p></p></div>
                </div>
                <div className="flip-hint">&#x21bb; Cliquez pour l'analyse</div>
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