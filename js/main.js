/* ===== MOBILE NAV ===== */
function toggleMobileNav() {
  const nav = document.querySelector('.nav-links');
  const btn = document.querySelector('.mobile-toggle');
  const overlay = document.querySelector('.nav-overlay');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
  if (overlay) overlay.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

document.querySelectorAll('.nav-links a').forEach(function(link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      toggleMobileNav();
    }
  });
});

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

/* ===== DARK MODE ===== */
function initDarkMode() {
  var saved = localStorage.getItem('theme');
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

  var btns = document.querySelectorAll('.theme-toggle');
  if (btns.length) {
    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var html = document.documentElement;
        var isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? '' : 'dark');
        localStorage.setItem('theme', isDark ? '' : 'dark');
        btns.forEach(function(b) { b.textContent = isDark ? '\u{1F319}' : '\u{2600}\u{FE0F}'; });
      });
    });
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btns.forEach(function(b) { b.textContent = isDark ? '\u{1F319}' : '\u{2600}\u{FE0F}'; });
  }
}
document.addEventListener('DOMContentLoaded', initDarkMode);

/* ===== BACK TO TOP ===== */
function initBackTop() {
  var btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
document.addEventListener('DOMContentLoaded', initBackTop);

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(function(el) { obs.observe(el); });
}
document.addEventListener('DOMContentLoaded', initReveal);

/* ===== ACCORDION ===== */
function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.accordion-item');
      if (!item) return;
      item.classList.toggle('open');
    });
  });
}
document.addEventListener('DOMContentLoaded', initAccordion);

/* ===== LIGHTBOX ===== */
function initLightbox() {
  var lb = document.querySelector('.lightbox');
  if (!lb) return;

  document.querySelectorAll('[data-lightbox]').forEach(function(img) {
    img.addEventListener('click', function() {
      lb.querySelector('img').src = img.src;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lb.querySelector('.lightbox-close').addEventListener('click', function() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  });

  lb.addEventListener('click', function(e) {
    if (e.target === lb) {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}
document.addEventListener('DOMContentLoaded', initLightbox);

/* ===== PROGRESS BARS ===== */
function initProgressBars() {
  var bars = document.querySelectorAll('.progress-fill');
  if (!bars.length) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var w = entry.target.getAttribute('data-width');
        if (w) entry.target.style.width = w;
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(function(bar) { obs.observe(bar); });
}
document.addEventListener('DOMContentLoaded', initProgressBars);

/* ===== SEARCH ===== */
var searchIndex = [];
function buildSearchIndex() {
  var pages = [
    { url: 'index.html', title: 'Accueil', desc: 'Page d\'accueil — découverte de la Mauritanie' },
    { url: 'history.html', title: 'Histoire', desc: 'Histoire de la Mauritanie des origines à nos jours' },
    { url: 'geography.html', title: 'Géographie', desc: 'Géographie, régions et relief de la Mauritanie' },
    { url: 'tourism.html', title: 'Tourisme', desc: 'Sites touristiques et destinations en Mauritanie' },
    { url: 'economy.html', title: 'Économie', desc: 'Économie mauritanienne : PIB, secteurs, exportations' },
    { url: 'demographics.html', title: 'Démographie', desc: 'Population, ethnies et urbanisation de la Mauritanie' },
    { url: 'government.html', title: 'Gouvernement', desc: 'Système politique et institutions mauritaniennes' },
    { url: 'cuisine.html', title: 'Cuisine', desc: 'Gastronomie et plats traditionnels mauritaniens' },
    { url: 'gallery.html', title: 'Galerie', desc: 'Galerie photos de la Mauritanie' },
    { url: 'contact.html', title: 'Contact', desc: 'Contact et informations pratiques sur la Mauritanie' },
    { url: 'pages.html', title: 'Toutes les pages', desc: 'Plan du site — toutes les pages disponibles' }
  ];

  pages.forEach(function(p) {
    searchIndex.push({ keywords: p.title + ' ' + p.desc, title: p.title, desc: p.desc, url: p.url });
  });

  if (typeof MAURITANIA === 'undefined') return;

  var d = MAURITANIA;
  /* Tourisme */
  if (d.tourism) d.tourism.forEach(function(t) {
    searchIndex.push({ keywords: t.name + ' ' + t.location + ' ' + t.desc, title: t.name, desc: t.desc.substring(0, 80) + '…', url: 'tourism.html' });
  });
  /* Cuisine */
  if (d.cuisine) d.cuisine.forEach(function(c) {
    searchIndex.push({ keywords: c.name + ' ' + c.type + ' ' + c.desc, title: c.name, desc: c.type + ' — ' + c.desc.substring(0, 60) + '…', url: 'cuisine.html' });
  });
  /* Histoire */
  if (d.history) d.history.forEach(function(h) {
    searchIndex.push({ keywords: h.year + ' ' + h.title + ' ' + h.desc, title: h.year + ' — ' + h.title, desc: h.desc.substring(0, 80) + '…', url: 'history.html' });
  });
  /* Géographie */
  if (d.geography) {
    if (d.geography.regions) d.geography.regions.forEach(function(r) {
      searchIndex.push({ keywords: r.name + ' ' + r.capital + ' ' + r.desc, title: r.name + ' (' + r.capital + ')', desc: r.desc, url: 'geography.html' });
    });
    if (d.geography.features) d.geography.features.forEach(function(f) {
      searchIndex.push({ keywords: f.name + ' ' + f.desc, title: f.name, desc: f.desc, url: 'geography.html' });
    });
  }
  /* Gouvernement */
  if (d.government) {
    searchIndex.push({ keywords: 'président ' + d.government.president + ' premier ministre ' + d.government.premier + ' constitution capitale ' + d.government.capital, title: d.government.president, desc: 'Président de la Mauritanie', url: 'government.html' });
    searchIndex.push({ keywords: d.government.premier + ' premier ministre gouvernement', title: d.government.premier, desc: 'Premier ministre de la Mauritanie', url: 'government.html' });
    searchIndex.push({ keywords: d.government.type + ' république islamique constitution', title: d.government.type, desc: 'Système politique mauritanien', url: 'government.html' });
  }
}

function initSearch() {
  var input = document.querySelector('.search-section .search-input');
  var results = document.querySelector('.search-section .search-results');
  if (!input || !results) return;

  buildSearchIndex();

  input.addEventListener('input', function() {
    var q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = '';
      results.classList.remove('has-results');
      return;
    }
    var hits = searchIndex.filter(function(item) {
      return item.keywords.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 12);

    if (!hits.length) {
      results.innerHTML = '<div class="search-no">Aucun résultat</div>';
      results.classList.add('has-results');
      return;
    }
    results.innerHTML = hits.map(function(h) {
      return '<a href="' + h.url + '" class="search-item"><div class="si-title">' + h.title + '</div><div class="si-desc">' + h.desc + '</div></a>';
    }).join('');
    results.classList.add('has-results');
  });
}
document.addEventListener('DOMContentLoaded', initSearch);
