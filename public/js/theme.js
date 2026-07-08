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