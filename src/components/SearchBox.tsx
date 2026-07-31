import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MAURITANIA } from '../types/data';
import { useI18n } from '../i18n';

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
  const { t } = useI18n();

  const buildIndex = useCallback(() => {
    const items: SearchItem[] = [
      { keywords: t('Accueil découverte Mauritanie'), title: t('Accueil'), desc: t("Page d'accueil — découverte de la Mauritanie"), url: '/' },
      { keywords: t('Histoire Mauritanie des origines à nos jours'), title: t('Histoire'), desc: t('Histoire de la Mauritanie des origines à nos jours'), url: '/history' },
      { keywords: t('Géographie régions relief Mauritanie'), title: t('Géographie'), desc: t('Géographie, régions et relief de la Mauritanie'), url: '/geography' },
      { keywords: t('Tourisme sites destinations Mauritanie'), title: t('Tourisme'), desc: t('Sites touristiques et destinations en Mauritanie'), url: '/tourism' },
      { keywords: t('Économie PIB secteurs exportations Mauritanie'), title: t('Économie'), desc: t('Économie mauritanienne : PIB, secteurs, exportations'), url: '/economy' },
      { keywords: t('Démographie population ethnies urbanisation Mauritanie'), title: t('Démographie'), desc: t('Population, ethnies et urbanisation de la Mauritanie'), url: '/demographics' },
      { keywords: t('Gouvernement politique institutions Mauritanie'), title: t('Gouvernement'), desc: t('Système politique et institutions mauritaniennes'), url: '/government' },
      { keywords: t('Cuisine gastronomie plats traditionnels Mauritaniens'), title: t('Cuisine'), desc: t('Gastronomie et plats traditionnels mauritaniens'), url: '/cuisine' },
      { keywords: t('Galerie photos Mauritanie'), title: t('Galerie'), desc: t('Galerie photos de la Mauritanie'), url: '/gallery' },
      { keywords: t('Contact informations pratiques Mauritanie'), title: t('Contact'), desc: t('Contact et informations pratiques sur la Mauritanie'), url: '/contact' },
      { keywords: t('Toutes les pages plan du site'), title: t('Toutes les pages'), desc: t('Plan du site — toutes les pages disponibles'), url: '/pages' },
      { keywords: t("Faune flore animaux oiseaux Sahel Sahara Banc d'Arguin"), title: t('Faune & Flore'), desc: t('Espèces emblématiques, ornithologie et flore désertique'), url: '/faune' },
      { keywords: t('Langues culture arabe français pulaar soninké wolof traditions orales'), title: t('Langues & Culture'), desc: t('Langues, traditions orales et proverbes mauritaniens'), url: '/langues' },
      { keywords: t('Artisanat tapis bijoux poterie cuir bois sculpture artisanal'), title: t('Artisanat'), desc: t('Tapis maures, bijoux en argent, poteries et cuirs'), url: '/artisanat' },
      { keywords: t('Musique danse instruments tidinit ardin tbal griots chants'), title: t('Musique & Danse'), desc: t('Instruments traditionnels, griots et danses'), url: '/musique' },
      { keywords: t('Éducation école université alphabétisation coranique mahadra'), title: t('Éducation'), desc: t('Système éducatif, universités et écoles coraniques'), url: '/education' },
      { keywords: t('Transport route train sable aéroport port dromadaire infrastructure'), title: t('Transport & Infrastructures'), desc: t('Routes, train des sables, aéroports et ports'), url: '/transport' },
      { keywords: t('Religion islam mosquée marabout Ramadan confrérie soufie fête'), title: t('Religion & Traditions'), desc: t('Islam, confréries soufies et fêtes religieuses'), url: '/religion' },
      { keywords: t('Sports football lutte dromadaire cyclisme olympique CAN'), title: t('Sports'), desc: t('Football, lutte traditionnelle, courses de chameaux'), url: '/sports' },
    ];

    const d = MAURITANIA;
    if (d.tourism) d.tourism.forEach(ti => {
      items.push({ keywords: `${t(ti.name)} ${t(ti.location)} ${t(ti.desc)}`, title: t(ti.name), desc: t(ti.desc).substring(0, 80) + '…', url: '/tourism' });
    });
    if (d.cuisine) d.cuisine.forEach(c => {
      items.push({ keywords: `${t(c.name)} ${t(c.type)} ${t(c.desc)}`, title: t(c.name), desc: t(c.type) + ' — ' + t(c.desc).substring(0, 60) + '…', url: '/cuisine' });
    });
    if (d.history) d.history.forEach(h => {
      items.push({ keywords: `${h.year} ${t(h.title)} ${t(h.desc)}`, title: h.year + ' — ' + t(h.title), desc: t(h.desc).substring(0, 80) + '…', url: '/history' });
    });
    if (d.geography) {
      d.geography.regions.forEach(r => {
        items.push({ keywords: `${t(r.name)} ${r.capital} ${t(r.desc)}`, title: t(r.name) + ' (' + r.capital + ')', desc: t(r.desc), url: '/geography' });
      });
      d.geography.features.forEach(f => {
        items.push({ keywords: `${t(f.name)} ${t(f.desc)}`, title: t(f.name), desc: t(f.desc), url: '/geography' });
      });
    }
    if (d.government) {
      items.push({ keywords: t('président') + ' ' + d.government.president + ' ' + t('premier ministre') + ' ' + t('constitution') + ' ' + t('capitale'), title: d.government.president, desc: t('Président de la Mauritanie'), url: '/government' });
      items.push({ keywords: `${d.government.premier} ${t('premier ministre')} ${t('gouvernement')}`, title: d.government.premier, desc: t('Premier ministre de la Mauritanie'), url: '/government' });
      items.push({ keywords: `${d.government.type} ${t('république islamique')} ${t('constitution')}`, title: d.government.type, desc: t('Système politique mauritanien'), url: '/government' });
    }
    setIndex(items);
  }, [t]);

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
        placeholder={t('Rechercher...')}
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
          {t('Aucun résultat')}
        </div>
      )}
    </div>
  );
}
