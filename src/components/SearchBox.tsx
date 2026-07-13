import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MAURITANIA } from '../types/data';

interface SearchItem {
  keywords: string;
  title: string;
  desc: string;
  url: string;
}

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [index, setIndex] = useState<SearchItem[]>([]);

  const buildIndex = useCallback(() => {
    const items: SearchItem[] = [
      { keywords: 'Accueil découverte Mauritanie', title: 'Accueil', desc: "Page d'accueil — découverte de la Mauritanie", url: '/' },
      { keywords: 'Histoire Mauritanie des origines à nos jours', title: 'Histoire', desc: 'Histoire de la Mauritanie des origines à nos jours', url: '/history' },
      { keywords: 'Géographie régions relief Mauritanie', title: 'Géographie', desc: 'Géographie, régions et relief de la Mauritanie', url: '/geography' },
      { keywords: 'Tourisme sites destinations Mauritanie', title: 'Tourisme', desc: 'Sites touristiques et destinations en Mauritanie', url: '/tourism' },
      { keywords: 'Économie PIB secteurs exportations Mauritanie', title: 'Économie', desc: 'Économie mauritanienne : PIB, secteurs, exportations', url: '/economy' },
      { keywords: 'Démographie population ethnies urbanisation Mauritanie', title: 'Démographie', desc: 'Population, ethnies et urbanisation de la Mauritanie', url: '/demographics' },
      { keywords: 'Gouvernement politique institutions Mauritanie', title: 'Gouvernement', desc: 'Système politique et institutions mauritaniennes', url: '/government' },
      { keywords: 'Cuisine gastronomie plats traditionnels Mauritaniens', title: 'Cuisine', desc: 'Gastronomie et plats traditionnels mauritaniens', url: '/cuisine' },
      { keywords: 'Galerie photos Mauritanie', title: 'Galerie', desc: 'Galerie photos de la Mauritanie', url: '/gallery' },
      { keywords: 'Contact informations pratiques Mauritanie', title: 'Contact', desc: 'Contact et informations pratiques sur la Mauritanie', url: '/contact' },
      { keywords: 'Toutes les pages plan du site', title: 'Toutes les pages', desc: 'Plan du site — toutes les pages disponibles', url: '/pages' },
      { keywords: 'Faune flore animaux oiseaux Sahel Sahara Banc d\'Arguin', title: 'Faune & Flore', desc: 'Espèces emblématiques, ornithologie et flore désertique', url: '/faune' },
      { keywords: 'Langues culture arabe français pulaar soninké wolof traditions orales', title: 'Langues & Culture', desc: 'Langues, traditions orales et proverbes mauritaniens', url: '/langues' },
      { keywords: 'Artisanat tapis bijoux poterie cuir bois sculpture artisanal', title: 'Artisanat', desc: 'Tapis maures, bijoux en argent, poteries et cuirs', url: '/artisanat' },
      { keywords: 'Musique danse instruments tidinit ardin tbal griots chants', title: 'Musique & Danse', desc: 'Instruments traditionnels, griots et danses', url: '/musique' },
      { keywords: 'Éducation école université alphabétisation coranique mahadra', title: 'Éducation', desc: 'Système éducatif, universités et écoles coraniques', url: '/education' },
      { keywords: 'Transport route train sable aéroport port dromadaire infrastructure', title: 'Transport & Infrastructures', desc: 'Routes, train des sables, aéroports et ports', url: '/transport' },
      { keywords: 'Religion islam mosquée marabout Ramadan confrérie soufie fête', title: 'Religion & Traditions', desc: 'Islam, confréries soufies et fêtes religieuses', url: '/religion' },
      { keywords: 'Sports football lutte dromadaire cyclisme olympique CAN', title: 'Sports', desc: 'Football, lutte traditionnelle, courses de chameaux', url: '/sports' },
    ];

    const d = MAURITANIA;
    if (d.tourism) d.tourism.forEach(t => {
      items.push({ keywords: `${t.name} ${t.location} ${t.desc}`, title: t.name, desc: t.desc.substring(0, 80) + '…', url: '/tourism' });
    });
    if (d.cuisine) d.cuisine.forEach(c => {
      items.push({ keywords: `${c.name} ${c.type} ${c.desc}`, title: c.name, desc: c.type + ' — ' + c.desc.substring(0, 60) + '…', url: '/cuisine' });
    });
    if (d.history) d.history.forEach(h => {
      items.push({ keywords: `${h.year} ${h.title} ${h.desc}`, title: h.year + ' — ' + h.title, desc: h.desc.substring(0, 80) + '…', url: '/history' });
    });
    if (d.geography) {
      d.geography.regions.forEach(r => {
        items.push({ keywords: `${r.name} ${r.capital} ${r.desc}`, title: r.name + ' (' + r.capital + ')', desc: r.desc, url: '/geography' });
      });
      d.geography.features.forEach(f => {
        items.push({ keywords: `${f.name} ${f.desc}`, title: f.name, desc: f.desc, url: '/geography' });
      });
    }
    if (d.government) {
      items.push({ keywords: `président ${d.government.president} premier ministre constitution capitale`, title: d.government.president, desc: 'Président de la Mauritanie', url: '/government' });
      items.push({ keywords: `${d.government.premier} premier ministre gouvernement`, title: d.government.premier, desc: 'Premier ministre de la Mauritanie', url: '/government' });
      items.push({ keywords: `${d.government.type} république islamique constitution`, title: d.government.type, desc: 'Système politique mauritanien', url: '/government' });
    }
    setIndex(items);
  }, []);

  useEffect(() => {
    buildIndex();
  }, [buildIndex]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }
    const hits = index
      .filter(item => item.keywords.toLowerCase().indexOf(q) !== -1)
      .slice(0, 12);
    setResults(hits);
  }, [query, index]);

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: '100%' }}
      />
      {results.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10,
          background: 'var(--background)', border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)', marginTop: 8, overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {results.map((r, i) => (
            <Link
              key={i}
              to={r.url}
              style={{
                display: 'block', padding: '12px 16px', borderBottom: i < results.length - 1 ? '1px solid var(--glass-border)' : 'none',
                textDecoration: 'none', transition: 'var(--transition)'
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(13,138,60,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', marginBottom: 2 }}>{r.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{r.desc}</div>
            </Link>
          ))}
        </div>
      )}
      {query.trim() && results.length === 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10,
          padding: 16, background: 'var(--background)', border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)', marginTop: 8, textAlign: 'center',
          color: 'var(--text-muted)', fontSize: '0.9rem', boxShadow: 'var(--shadow-lg)'
        }}>
          Aucun résultat
        </div>
      )}
    </div>
  );
}