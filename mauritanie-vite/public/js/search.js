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
  if (d.tourism) d.tourism.forEach(function(t) {
    searchIndex.push({ keywords: t.name + ' ' + t.location + ' ' + t.desc, title: t.name, desc: t.desc.substring(0, 80) + '…', url: 'tourism.html' });
  });
  if (d.cuisine) d.cuisine.forEach(function(c) {
    searchIndex.push({ keywords: c.name + ' ' + c.type + ' ' + c.desc, title: c.name, desc: c.type + ' — ' + c.desc.substring(0, 60) + '…', url: 'cuisine.html' });
  });
  if (d.history) d.history.forEach(function(h) {
    searchIndex.push({ keywords: h.year + ' ' + h.title + ' ' + h.desc, title: h.year + ' — ' + h.title, desc: h.desc.substring(0, 80) + '…', url: 'history.html' });
  });
  if (d.geography) {
    if (d.geography.regions) d.geography.regions.forEach(function(r) {
      searchIndex.push({ keywords: r.name + ' ' + r.capital + ' ' + r.desc, title: r.name + ' (' + r.capital + ')', desc: r.desc, url: 'geography.html' });
    });
    if (d.geography.features) d.geography.features.forEach(function(f) {
      searchIndex.push({ keywords: f.name + ' ' + f.desc, title: f.name, desc: f.desc, url: 'geography.html' });
    });
  }
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