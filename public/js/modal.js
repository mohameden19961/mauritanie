/* ===== DETAIL MODAL ===== */
function openDetail(type, index) {
  var data;
  if (type === 'history') data = MAURITANIA.history[index];
  else if (type === 'tourism') data = MAURITANIA.tourism[index];
  if (!data) return;

  var modal = document.querySelector('.detail-modal');
  var body = modal.querySelector('.detail-modal-body');
  if (!modal || !body) return;

  var html = '';
  if (type === 'history') {
    html = '<div class="dm-badge">' + data.year + '</div><h2>' + data.title + '</h2><p class="dm-desc">' + data.desc + '</p><div class="dm-detail"><p>' + data.detail + '</p></div>';
  } else if (type === 'tourism') {
    var stars = '';
    for (var r = 0; r < (data.rating || 0); r++) stars += '\u2605';
    html = '<div class="dm-img" style="background-image:url(' + data.image + '&w=800&fit=crop)"></div><div class="dm-body"><span class="badge badge-green">' + data.location + '</span>';
    if (data.type) html += '<span class="badge badge-blue" style="margin-left:6px;">' + data.type + '</span>';
    if (data.bestTime) html += '<span class="badge badge-gold" style="margin-left:6px;">\uD83D\uDCC5 ' + data.bestTime + '</span>';
    html += '<h2>' + data.name + '</h2>';
    if (stars) html += '<div class="dm-stars">' + stars + '</div>';
    html += '<p class="dm-desc">' + data.desc + '</p><div class="dm-detail"><p>' + data.detail + '</p></div></div>';
  }

  body.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function initDetailModal() {
  var modal = document.querySelector('.detail-modal');
  if (!modal) return;

  modal.querySelector('.detail-modal-close').addEventListener('click', function() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}
document.addEventListener('DOMContentLoaded', initDetailModal);