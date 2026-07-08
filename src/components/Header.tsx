import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

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
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMobile = () => setMobileOpen(prev => !prev);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src="/images/drapeaumauritanie.png" alt="Drapeau Mauritanie" style={{ height: 24, width: 'auto', borderRadius: 2 }} />
          Mauritanie
        </Link>
        <button className="theme-toggle header-theme-toggle" aria-label="Mode sombre" onClick={toggleTheme}>
          {theme === 'dark' ? '\u{1F319}' : '\u{2600}\u{FE0F}'}
        </button>
        <button className={`mobile-toggle${mobileOpen ? ' open' : ''}`} onClick={toggleMobile}>
          <span className="icon-open">{'\u22EE'}</span>
          <span className="icon-close">{'\u2715'}</span>
        </button>
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
                {item.label}
              </Link>
            </li>
          ))}
          <li className="nav-theme">
            <button className="theme-toggle" aria-label="Mode sombre" onClick={toggleTheme}>
              {theme === 'dark' ? '\u{1F319}' : '\u{2600}\u{FE0F}'}
            </button>
          </li>
        </ul>
        <div className={`nav-overlay${mobileOpen ? ' open' : ''}`} onClick={toggleMobile}></div>
      </div>
    </header>
  );
}