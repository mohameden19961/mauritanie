/* ===== STATS COUNTER ===== */
function initStatsCounter() {
  var counters = document.querySelectorAll('.stat-value');
  if (!counters.length) return;
  var section = counters[0].closest('.stats');
  if (!section) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      obs.disconnect();

      var duration = 2000;
      counters.forEach(function(counter) {
        var target = parseFloat(counter.getAttribute('data-target'));
        if (!target) { counter.textContent = '0'; return; }
        var suffix = counter.getAttribute('data-suffix') || '';
        var startTime = null;

        var step = function(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(eased * target);
          counter.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      });
    });
  }, { threshold: 0.3 });

  obs.observe(section);
}

document.addEventListener('DOMContentLoaded', initStatsCounter);