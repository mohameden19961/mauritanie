import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const pagesList = [
  { to: '/', icon: '\u{1F3E0}', title: 'Accueil', desc: 'Page d\'accueil du site dédié à la Mauritanie.' },
  { to: '/history', icon: '\u{1F4DC}', title: 'Histoire', desc: 'Voyage à travers les millénaires de l\'histoire mauritanienne.' },
  { to: '/geography', icon: '\u{1F30D}', title: 'Géographie', desc: 'Découvrez les paysages variés de la Mauritanie.' },
  { to: '/tourism', icon: '\u{2708}\u{FE0F}', title: 'Tourisme', desc: 'Les destinations incontournables de la Mauritanie.' },
  { to: '/economy', icon: '\u{1F4BC}', title: 'Économie', desc: 'Données économiques et secteurs clés du pays.' },
  { to: '/demographics', icon: '\u{1F465}', title: 'Démographie', desc: 'Population, ethnies et répartition sur le territoire.' },
  { to: '/government', icon: '\u{1F3DB}\u{FE0F}', title: 'Gouvernement', desc: 'Structure politique et institutions mauritaniennes.' },
  { to: '/cuisine', icon: '\u{1F37D}\u{FE0F}', title: 'Cuisine', desc: 'Spécialités culinaires et traditions gastronomiques.' },
  { to: '/gallery', icon: '\u{1F5BC}\u{FE0F}', title: 'Galerie', desc: 'Photographies des paysages et scènes de vie.' },
  { to: '/contact', icon: '\u{1F4E7}', title: 'Contact', desc: 'Contactez-nous pour en savoir plus sur la Mauritanie.' },
];

const iconColors = ['green', 'blue', 'gold', 'green', 'blue', 'gold', 'green', 'blue', 'gold', 'green'];

export default function Pages() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Toutes les pages"
        description="Explorez chaque facette de la Mauritanie à travers nos pages dédiées."
      />

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {pagesList.map((page, i) => (
              <Link
                key={page.to}
                to={page.to}
                className="info-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className={`feature-icon ${iconColors[i]}`} style={{ margin: '0 0 16px' }}>{page.icon}</div>
                <h3>{page.title}</h3>
                <p>{page.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxSrc} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
