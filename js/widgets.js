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