(function() {
  var chartDefaults = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { labels: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#555', font: { size: 11 } } } }
  };
  function color(c) { return getComputedStyle(document.documentElement).getPropertyValue(c).trim(); }
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  var textColor = isDark ? '#aaa' : '#666';

  function getCtx(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    var canvas = document.createElement('canvas');
    el.appendChild(canvas);
    return canvas.getContext('2d');
  }

  var econ = MAURITANIA.economy;
  var demo = MAURITANIA.demographics;

  var ctx1 = getCtx('chart-gdp');
  if (ctx1) {
    new Chart(ctx1, Object.assign({}, chartDefaults, {
      type: 'line',
      data: {
        labels: econ.gdpData.map(function(d) { return d.year; }),
        datasets: [{
          label: 'PIB (milliards $)',
          data: econ.gdpData.map(function(d) { return d.value; }),
          borderColor: color('--primary') || '#0D8A3C',
          backgroundColor: (color('--primary') || '#0D8A3C') + '22',
          fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: color('--primary') || '#0D8A3C'
        }]
      },
      options: {
        scales: { x: { grid: { color: gridColor }, ticks: { color: textColor } }, y: { grid: { color: gridColor }, ticks: { color: textColor } } }
      }
    }));
  }

  var ctx2 = getCtx('chart-sectors');
  if (ctx2) {
    new Chart(ctx2, Object.assign({}, chartDefaults, {
      type: 'doughnut',
      data: {
        labels: econ.sectors.map(function(d) { return d.name; }),
        datasets: [{
          data: econ.sectors.map(function(d) { return d.value; }),
          backgroundColor: ['#0D8A3C','#1E88E5','#FF9800','#9C27B0','#00BCD4']
        }]
      },
      options: { plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } } } }
    }));
  }

  var ctx3 = getCtx('chart-exports');
  if (ctx3) {
    new Chart(ctx3, Object.assign({}, chartDefaults, {
      type: 'bar',
      data: {
        labels: econ.exports.map(function(d) { return d.product; }),
        datasets: [{
          label: '% des exportations',
          data: econ.exports.map(function(d) { return d.value; }),
          backgroundColor: ['#0D8A3C','#FF9800','#1E88E5','#9C27B0','#E91E63','#607D8B'],
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        scales: { x: { grid: { color: gridColor }, ticks: { color: textColor } }, y: { grid: { display: false }, ticks: { color: textColor, font: { size: 10 } } } }
      }
    }));
  }

  var ctx4 = getCtx('chart-population');
  if (ctx4) {
    new Chart(ctx4, Object.assign({}, chartDefaults, {
      type: 'bar',
      data: {
        labels: demo.population.map(function(d) { return d.year; }),
        datasets: [{
          label: 'Population',
          data: demo.population.map(function(d) { return d.value; }),
          backgroundColor: (color('--primary') || '#0D8A3C') + '55',
          borderColor: color('--primary') || '#0D8A3C',
          borderWidth: 2, borderRadius: 4
        }]
      },
      options: {
        scales: { x: { grid: { color: gridColor }, ticks: { color: textColor } }, y: { grid: { color: gridColor }, ticks: { color: textColor, callback: function(v) { return v >= 1000000 ? (v/1000000).toFixed(1)+'M' : v; } } } }
      }
    }));
  }

  var ctx5 = getCtx('chart-urbanisation');
  if (ctx5) {
    new Chart(ctx5, Object.assign({}, chartDefaults, {
      type: 'line',
      data: {
        labels: demo.urbanisation.map(function(d) { return d.year; }),
        datasets: [{
          label: 'Taux d\'urbanisation (%)',
          data: demo.urbanisation.map(function(d) { return d.value; }),
          borderColor: color('--secondary') || '#1E88E5',
          backgroundColor: (color('--secondary') || '#1E88E5') + '22',
          fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: color('--secondary') || '#1E88E5'
        }]
      },
      options: {
        scales: { x: { grid: { color: gridColor }, ticks: { color: textColor } }, y: { grid: { color: gridColor }, ticks: { color: textColor, max: 100, callback: function(v) { return v + '%'; } } } }
      }
    }));
  }

  var ctx6 = getCtx('chart-ethnic');
  if (ctx6) {
    new Chart(ctx6, Object.assign({}, chartDefaults, {
      type: 'pie',
      data: {
        labels: demo.ethnicGroups.map(function(d) { return d.group; }),
        datasets: [{
          data: demo.ethnicGroups.map(function(d) { return d.value; }),
          backgroundColor: ['#0D8A3C','#1E88E5','#FF9800','#9C27B0','#E91E63','#00BCD4']
        }]
      },
      options: { plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 10, font: { size: 10 } } } } }
    }));
  }
})();