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