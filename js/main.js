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
  counters.forEach(function(counter) {
    var target = parseInt(counter.getAttribute('data-target'));
    if (!target) return;
    var increment = Math.ceil(target / 50);
    var current = 0;
    var update = function() {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
        return;
      }
      counter.textContent = current.toLocaleString() + (counter.getAttribute('data-suffix') || '');
      requestAnimationFrame(update);
    };
    update();
  });
}

if (document.querySelector('.stat-value')) {
  initStatsCounter();
}

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
