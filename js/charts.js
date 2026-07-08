function formatCompact(v) {
  if (v >= 1e6) return (v / 1e6).toFixed(1).replace('.0','') + 'M';
  if (v >= 1e3) return (v / 1e3).toFixed(1).replace('.0','') + 'k';
  return v;
}

const PALETTE = ['#0D8A3C','#D4A843','#1E88E5','#B8860B','#4CAF50','#F57C00'];
const PALETTE_HOVER = ['#0B7032','#B8860B','#1565C0','#8B6914','#388E3C','#E65100'];

const CHART_DESCRIPTIONS = {
  gdp: 'Le PIB mauritanien est passé de 5,8 à 10,4 milliards de dollars entre 2015 et 2024, soit une croissance de près de 80% en 10 ans. Cette progression est portée par l\'essor du secteur minier et l\'augmentation des investissements étrangers, notamment dans l\'exploitation de l\'or et du cuivre.',
  sectors: 'L\'économie mauritanienne repose sur 5 secteurs clés. Les mines dominent avec 35% du PIB, suivies de la pêche (20%) qui bénéficie des eaux poissonneuses de la côte atlantique. Les services et télécommunications progressent rapidement, tandis que l\'agriculture traditionnelle maintient sa place dans les zones rurales.',
  exports: 'Le minerai de fer est de loin la première ressource d\'exportation (42%) grâce aux gisements de Zouérate. L\'or représente 18% des exportations, plaçant la Mauritanie parmi les producteurs africains émergents. Les produits de la pêche complètent le trio de tête avec 16%.',
  population: 'La population mauritanienne a été multipliée par 5,4 en 64 ans, passant de 854 000 habitants en 1960 à 4,62 millions en 2024. Cette croissance rapide s\'accompagne d\'un défi majeur : offrir éducation, emploi et services de santé à une population jeune et en expansion.',
  urbanisation: "Le taux d'urbanisation est passé de 5% en 1960 à 62% en 2024. Près d'un tiers de la population vit dans la capitale Nouakchott, une des villes à la croissance la plus rapide d'Afrique de l'Ouest. Cette urbanisation accélérée transforme les modes de vie et l'économie du pays.",
  ethnic: 'La société mauritanienne est riche de 6 groupes ethniques principaux. Les Haratines (40%) constituent le groupe le plus nombreux, suivis des Maures Beidanes (30%). Les Peuls (15%), Soninkés (8%), Wolofs (5%) et Bambaras (2%) complètent ce tissu multiculturel qui fait la richesse du pays.',
};

function wrapFlip(el) {
  const wrap = document.createElement('div');
  wrap.className = 'flip-wrap';
  const inner = document.createElement('div');
  inner.className = 'flip-inner';
  const front = document.createElement('div');
  front.className = 'flip-front';
  front.appendChild(el);
  const back = document.createElement('div');
  back.className = 'flip-back';
  const desc = CHART_DESCRIPTIONS[el.dataset.chart];
  if (desc) {
    back.innerHTML = '<div class="flip-label">&#9432; Analyse</div><p>' + desc + '</p>';
  }
  inner.appendChild(front);
  inner.appendChild(back);
  wrap.appendChild(inner);

  var hint = document.createElement('div');
  hint.className = 'flip-hint';
  hint.innerHTML = '&#8634; Voir l\u2019analyse';
  wrap.appendChild(hint);

  wrap.addEventListener('click', function(e) {
    e.currentTarget.closest('.chart-container').classList.toggle('flipped');
  });
  return wrap;
}

function initCharts() {
  const chartEls = document.querySelectorAll('[data-chart]');
  if (!chartEls.length) return;

  Chart.defaults.font.family = "'Plus Jakarta Sans','Inter',system-ui,sans-serif";
  Chart.defaults.font.size = 11;
  Chart.defaults.color = '#4A4A6A';

  chartEls.forEach(el => {
    const parent = el.parentElement;
    const wrap = wrapFlip(el);
    parent.appendChild(wrap);

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    el.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    if (el.dataset.chart === 'gdp') {
      const data = MAURITANIA.economy.gdpData;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(d => d.year),
          datasets: [{
            label: 'PIB (milliards $)',
            data: data.map(d => d.value),
            backgroundColor: '#0D8A3C',
            hoverBackgroundColor: '#0B7032',
            borderRadius: 6,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(26,26,46,0.9)',
              titleFont: { weight: '600' },
              padding: 12,
              cornerRadius: 10,
              callbacks: { label: ctx2 => ' ' + ctx2.parsed.y + ' milliards $' }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
              ticks: { font: { size: 10 }, callback: v => v + ' Md$' }
            },
            x: {
              grid: { display: false },
              ticks: { font: { size: 10 } }
            }
          }
        }
      });
    }

    if (el.dataset.chart === 'sectors') {
      const data = MAURITANIA.economy.sectors;
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.map(d => d.name),
          datasets: [{
            data: data.map(d => d.value),
            backgroundColor: PALETTE.slice(0, data.length),
            hoverBackgroundColor: PALETTE_HOVER.slice(0, data.length),
            borderWidth: 0,
            hoverOffset: 10,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
            legend: {
              position: 'right', align: 'center',
              labels: {
                font: { size: 10 }, padding: 10,
                usePointStyle: true, pointStyle: 'circle', boxWidth: 8,
              }
            },
            tooltip: {
              backgroundColor: 'rgba(26,26,46,0.9)',
              padding: 12, cornerRadius: 10,
              callbacks: { label: ctx2 => ' ' + ctx2.label + ': ' + ctx2.parsed + '%' }
            }
          }
        }
      });
    }

    if (el.dataset.chart === 'exports') {
      const data = MAURITANIA.economy.exports;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(d => d.product),
          datasets: [{
            label: 'Part des exportations',
            data: data.map(d => d.value),
            backgroundColor: '#1E88E5',
            hoverBackgroundColor: '#1565C0',
            borderRadius: 6,
            borderSkipped: false,
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(26,26,46,0.9)',
              padding: 12, cornerRadius: 10,
              callbacks: { label: ctx2 => ' ' + ctx2.parsed.x + '%' }
            }
          },
          scales: {
            x: {
              beginAtZero: true, max: 50,
              grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
              ticks: { font: { size: 10 }, callback: v => v + '%' }
            },
            y: { grid: { display: false }, ticks: { font: { size: 10 } } }
          }
        }
      });
    }

    if (el.dataset.chart === 'population') {
      const data = MAURITANIA.demographics.population;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(d => d.year),
          datasets: [{
            label: 'Population',
            data: data.map(d => d.value),
            borderColor: '#0D8A3C',
            backgroundColor: function(context) {
              if (!context.chart.chartArea) return 'rgba(13,138,60,0.06)';
              const g = context.chart.ctx.createLinearGradient(0, context.chart.chartArea.top, 0, context.chart.chartArea.bottom);
              g.addColorStop(0, 'rgba(13,138,60,0.25)');
              g.addColorStop(1, 'rgba(13,138,60,0.01)');
              return g;
            },
            fill: true, tension: 0.35,
            pointRadius: 4, pointHoverRadius: 7,
            pointBackgroundColor: '#FFFFFF', pointBorderColor: '#0D8A3C',
            pointBorderWidth: 2, borderWidth: 2.5,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(26,26,46,0.9)',
              padding: 12, cornerRadius: 10,
              callbacks: { label: ctx2 => ' ' + ctx2.parsed.y.toLocaleString() + ' hab' }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
              ticks: { font: { size: 10 }, callback: v => formatCompact(v) }
            },
            x: { grid: { display: false }, ticks: { font: { size: 10 } } }
          }
        }
      });
    }

    if (el.dataset.chart === 'urbanisation') {
      const data = MAURITANIA.demographics.urbanisation;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(d => d.year),
          datasets: [{
            label: "Urbanisation",
            data: data.map(d => d.value),
            borderColor: '#D4A843',
            backgroundColor: function(context) {
              if (!context.chart.chartArea) return 'rgba(212,168,67,0.06)';
              const g = context.chart.ctx.createLinearGradient(0, context.chart.chartArea.top, 0, context.chart.chartArea.bottom);
              g.addColorStop(0, 'rgba(212,168,67,0.25)');
              g.addColorStop(1, 'rgba(212,168,67,0.01)');
              return g;
            },
            fill: true, tension: 0.35,
            pointRadius: 4, pointHoverRadius: 7,
            pointBackgroundColor: '#FFFFFF', pointBorderColor: '#D4A843',
            pointBorderWidth: 2, borderWidth: 2.5,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(26,26,46,0.9)',
              padding: 12, cornerRadius: 10,
              callbacks: { label: ctx2 => ' ' + ctx2.parsed.y + '%' }
            }
          },
          scales: {
            y: {
              beginAtZero: true, max: 100,
              grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
              ticks: { font: { size: 10 }, callback: v => v + '%' }
            },
            x: { grid: { display: false }, ticks: { font: { size: 10 } } }
          }
        }
      });
    }

    if (el.dataset.chart === 'ethnic') {
      const data = MAURITANIA.demographics.ethnicGroups;
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.map(d => d.group),
          datasets: [{
            data: data.map(d => d.value),
            backgroundColor: ['#0D8A3C','#D4A843','#1E88E5','#B8860B','#4CAF50','#F57C00'],
            hoverBackgroundColor: ['#0B7032','#B8860B','#1565C0','#8B6914','#388E3C','#E65100'],
            borderWidth: 0, hoverOffset: 10,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          cutout: '42%',
          plugins: {
            legend: {
              position: 'right', align: 'center',
              labels: {
                font: { size: 10 }, padding: 10,
                usePointStyle: true, pointStyle: 'circle', boxWidth: 8,
              }
            },
            tooltip: {
              backgroundColor: 'rgba(26,26,46,0.9)',
              padding: 12, cornerRadius: 10,
              callbacks: { label: ctx2 => ' ' + ctx2.label + ': ' + ctx2.parsed + '%' }
            }
          }
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', initCharts);
