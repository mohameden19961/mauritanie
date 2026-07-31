import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useI18n, LANGUAGES, type Lang } from '../i18n';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/history', label: 'Histoire' },
  { to: '/tourism', label: 'Tourisme' },
  { to: '/economy', label: 'Économie' },
  { to: '/contact', label: 'Contact' },
  { to: '/pages', label: 'Plus', className: 'nav-plus' },
  { to: '/geography', label: 'Géographie', className: 'nav-mobile-hide' },
  { to: '/demographics', label: 'Démographie', className: 'nav-mobile-hide' },
  { to: '/government', label: 'Gouvernement', className: 'nav-mobile-hide' },
  { to: '/cuisine', label: 'Cuisine', className: 'nav-mobile-hide' },
  { to: '/gallery', label: 'Galerie', className: 'nav-mobile-hide' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useI18n();
  const location = useLocation();

  const toggleMobile = () => setMobileOpen(prev => !prev);

  const chooseLang = (l: Lang) => {
    setLang(l);
    setLangOpen(false);
    if (window.innerWidth <= 768) setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setLangOpen(false)}>
          <img src="/images/drapeaumauritanie.png" alt={t('Drapeau de la Mauritanie')} style={{ height: 24, width: 'auto', borderRadius: 2 }} />
          {t('Mauritanie')}
        </Link>
        <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to} className={item.className || ''}>
              <Link
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
                onClick={() => {
                  if (window.innerWidth <= 768) setMobileOpen(false);
                }}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-actions">
          <button className="theme-toggle header-theme-toggle" aria-label="Mode sombre" onClick={toggleTheme}>
            {theme === 'dark' ? '\u{1F319}' : '\u{2600}\u{FE0F}'}
          </button>
          <div className={`lang-switcher${langOpen ? ' open' : ''}`}>
            <button
              className="lang-trigger"
              aria-label="Changer de langue"
              aria-haspopup="true"
              aria-expanded={langOpen}
              onClick={() => setLangOpen(prev => !prev)}
            >
              {'\u{1F310}'}
              <span className="lang-trigger-label">{LANGUAGES.find(l => l.code === lang)?.native}</span>
            </button>
            <ul className="lang-menu">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button className={`lang-option${l.code === lang ? ' active' : ''}`} onClick={() => chooseLang(l.code)}>
                    {l.native}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className={`mobile-toggle${mobileOpen ? ' open' : ''}`} onClick={toggleMobile}>
          <span className="icon-open">{'\u22EE'}</span>
          <span className="icon-close">{'\u2715'}</span>
        </button>
        <div className={`nav-overlay${mobileOpen ? ' open' : ''}`} onClick={toggleMobile}></div>
      </div>
    </header>
  );
}
