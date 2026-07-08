(function() {
  var chartDefaults = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { labels: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#555', font: { size: 11 } } } }
  };
  function color(c) { return getComputedStyle(document.documentElement).getPropertyValue(c).trim(); }
  function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
  function gridColor() { return isDark() ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'; }
  function textColor() { return isDark() ? '#aaa' : '#666'; }

  var econ = MAURITANIA.economy;
  var demo = MAURITANIA.demographics;

  var chartMap = {
    'chart-gdp': { type: 'line', data: econ.gdpData, labelsKey: 'year', valueKey: 'value', label: 'PIB (milliards $)', colorKey: '--primary', desc: econ.gdpDesc },
    'chart-sectors': { type: 'doughnut', data: econ.sectors, labelsKey: 'name', valueKey: 'value', colors: ['#0D8A3C','#1E88E5','#FF9800','#9C27B0','#00BCD4'], desc: econ.sectorsDesc },
    'chart-exports': { type: 'bar', data: econ.exports, labelsKey: 'product', valueKey: 'value', label: '% des exportations', colors: ['#0D8A3C','#FF9800','#1E88E5','#9C27B0','#E91E63','#607D8B'], desc: econ.exportsDesc, horizontal: true },
    'chart-population': { type: 'bar', data: demo.population, labelsKey: 'year', valueKey: 'value', label: 'Population', color: '--primary', colors: null, desc: demo.popDesc },
    'chart-urbanisation': { type: 'line', data: demo.urbanisation, labelsKey: 'year', valueKey: 'value', label: "Taux d'urbanisation (%)", color: '--secondary', desc: demo.urbanDesc },
    'chart-ethnic': { type: 'pie', data: demo.ethnicGroups, labelsKey: 'group', valueKey: 'value', colors: ['#0D8A3C','#1E88E5','#FF9800','#9C27B0','#E91E63','#00BCD4'], desc: demo.ethnicDesc }
  };

  var createdCharts = {};

  Object.keys(chartMap).forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var cfg = chartMap[id];
    var chartEl = el.querySelector('.flip-front');
    if (!chartEl) return;
    var canvas = document.createElement('canvas');
    chartEl.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var datasets = [];
    if (cfg.type === 'doughnut' || cfg.type === 'pie') {
      datasets = [{
        data: cfg.data.map(function(d) { return d[cfg.valueKey]; }),
        backgroundColor: cfg.colors
      }];
    } else {
      var c = cfg.colors ? cfg.colors[0] : (color(cfg.color) || '#0D8A3C');
      var ds = {
        label: cfg.label || '',
        data: cfg.data.map(function(d) { return d[cfg.valueKey]; }),
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

    var opts = {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: cfg.type !== 'line' && cfg.type !== 'bar' ? { position: 'bottom', labels: { boxWidth: 12, padding: 10, font: { size: 10 } } } : { labels: { font: { size: 11 } } } },
      scales: {}
    };

    if (cfg.type !== 'doughnut' && cfg.type !== 'pie') {
      var xKey = cfg.horizontal ? 'y' : 'x';
      var yKey = cfg.horizontal ? 'x' : 'y';
      opts.scales = {};
      opts.scales[xKey] = { grid: { display: xKey === 'y' ? false : { color: gridColor } }, ticks: { color: textColor() } };
      opts.scales[yKey] = { grid: { color: gridColor() }, ticks: { color: textColor() } };
      if (id === 'chart-urbanisation') opts.scales[yKey].ticks.callback = function(v) { return v + '%'; };
      if (id === 'chart-population') opts.scales[yKey].ticks.callback = function(v) { return v >= 1000000 ? (v/1000000).toFixed(1)+'M' : v; };
      if (cfg.horizontal) opts.indexAxis = 'y';
    }

    var chart = new Chart(ctx, {
      type: cfg.type === 'doughnut' ? 'doughnut' : cfg.type,
      data: { labels: cfg.data.map(function(d) { return d[cfg.labelsKey]; }), datasets: data },
      options: opts
    });
    createdCharts[id] = chart;

    el.querySelector('.flip-back p').textContent = cfg.desc || '';
  });

  document.querySelectorAll('.chart-container').forEach(function(container) {
    container.addEventListener('click', function() {
      this.classList.toggle('flipped');
      Object.keys(createdCharts).forEach(function(id) {
        var ch = createdCharts[id];
        if (ch && ch.resize) setTimeout(function() { ch.resize(); }, 350);
      });
    });
  });
})();