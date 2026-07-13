import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
import SearchBox from '../components/SearchBox';
import Lightbox from '../components/Lightbox';
import BackToTop from '../components/BackToTop';

const statsData = [
  { value: '1 030 700 km²', label: 'Superficie', icon: '🌍', num: 1030700, suffix: ' km²' },
  { value: '4,62 millions', label: 'Habitants', icon: '👥', num: 462, suffix: ' M' },
  { value: '754 km', label: 'Côte Atlantique', icon: '🌊', num: 754, suffix: ' km' },
  { value: '1960', label: 'Indépendance', icon: '🇲🇷', num: 1960 },
];

const features = [
  { icon: '🏜️', iconClass: 'green', title: 'Désert du Sahara', desc: "Paysages lunaires, dunes majestueuses et l'impressionnant Œil du Sahara." },
  { icon: '🌊', iconClass: 'blue', title: "Banc d'Arguin", desc: 'Parc national classé UNESCO, paradis des oiseaux migrateurs.' },
  { icon: '🏛️', iconClass: 'gold', title: 'Cités anciennes', desc: "Chinguetti et Ouadane, joyaux architecturaux du siècle d'or maure." },
  { icon: '🍲', iconClass: 'green', title: 'Cuisine authentique', desc: 'Saveurs du thé à la menthe, thiéboudienne et méchoui traditionnel.' },
];

const testimonials = [
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face', name: 'Sophie L.', text: "Un voyage inoubliable au cœur du Sahara. Les paysages de l'Adrar sont à couper le souffle." },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face', name: 'Marc D.', text: "Le Parc du Banc d'Arguin est un paradis pour les amateurs d'ornithologie. Magnifique !" },
  { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face', name: 'Aïcha K.', text: 'L\'accueil des Mauritaniens est chaleureux. Le thé à la menthe est une expérience à part entière.' },
];

const newPages = [
  { to: '/faune', icon: '🦎', title: 'Faune & Flore', desc: 'Espèces emblématiques du Sahara et du Sahel.', color: 'green' },
  { to: '/langues', icon: '🗣️', title: 'Langues & Culture', desc: 'Cinq langues, cinq univers culturels.', color: 'blue' },
  { to: '/artisanat', icon: '🧶', title: 'Artisanat', desc: 'Tapis maures, bijoux en argent, poteries.', color: 'gold' },
  { to: '/musique', icon: '🎵', title: 'Musique & Danse', desc: 'Instruments traditionnels et griots.', color: 'green' },
  { to: '/education', icon: '📚', title: 'Éducation', desc: 'Écoles coraniques, universités et défis.', color: 'blue' },
  { to: '/transport', icon: '🚂', title: 'Transport', desc: 'Train des sables, routes et aéroports.', color: 'gold' },
  { to: '/religion', icon: '🕌', title: 'Religion & Traditions', desc: 'Islam, confréries soufies et fêtes.', color: 'green' },
  { to: '/sports', icon: '⚽', title: 'Sports', desc: 'Football, lutte et courses de dromadaires.', color: 'blue' },
];

const historyCards = [
  { icon: '🏛️', year: '1076', label: 'Empire almoravide' },
  { icon: '🇲🇷', year: '1960', label: 'Indépendance' },
  { icon: '🌍', year: '1989', label: "UNESCO Banc d'Arguin" },
  { icon: '🎓', year: '2019', label: 'Transition démocratique' },
];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, _setLightboxSrc] = useState('');

  const openLightbox = (src: string) => {
    _setLightboxSrc(src);
    setLightboxOpen(true);
  };

  return (
    <>
      <Header />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1>Bienvenue en <span>Mauritanie</span></h1>
              <p>Explorez un pays aux mille visages : des dunes dorées du Sahara aux eaux poissonneuses de l'Atlantique, des cités anciennes aux marchés animés de Nouakchott.</p>
              <div className="hero-actions">
                <Link to="/tourism" className="btn btn-primary">Explorer les destinations</Link>
                <Link to="/history" className="btn btn-secondary">Découvrir l'histoire</Link>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=420&fit=crop"
              alt="Paysage mauritanien"
              className="hero-image"
              onClick={() => openLightbox('https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </section>

      <section className="features reveal">
        <div className="container">
          <div className="section-title">
            <h2>Pourquoi visiter la Mauritanie ?</h2>
            <p>Une destination unique où le désert rencontre l'océan, riche d'une histoire millénaire et de traditions vivantes.</p>
          </div>
          <div className="grid-4">
            {features.map((f, i) => (
              <div key={i} className="card feature-card">
                <div className={`feature-icon ${f.iconClass}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection stats={statsData} />

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Explorer davantage</h2>
            <p>Découvrez d'autres facettes de la Mauritanie à travers nos pages thématiques.</p>
          </div>
          <div className="grid-4">
            {newPages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="card feature-card"
                style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
              >
                <div className={`feature-icon ${p.color}`}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/pages" className="btn btn-secondary">Voir toutes les pages</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Une brève histoire</h2>
            <p>Des empires anciens aux temps modernes, la Mauritanie est riche d'un passé fascinant.</p>
          </div>
          <div className="grid-2">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>La Mauritanie est un carrefour de civilisations. Terre des Almoravides qui ont marqué l'histoire de l'Afrique du Nord et de l'Andalousie, elle a vu se succéder empires, émirats et colonisation. Depuis son indépendance en 1960, elle construit une nation moderne tout en préservant ses traditions ancestrales.</p>
              <Link to="/history" className="btn btn-primary" style={{ marginTop: 16 }}>Voir la frise chronologique</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {historyCards.map((c, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: 20 }}>
                  <div style={{ fontSize: '2rem', marginBottom: 4 }}>{c.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{c.year}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Ce que disent les voyageurs</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: 32 }}>
                <img
                  src={t.img}
                  alt={t.name}
                  style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', border: '3px solid var(--glass-border)' }}
                />
                <div style={{ fontSize: '2rem', marginBottom: 8, color: 'var(--accent)', lineHeight: 1 }}>"</div>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 16 }}>{t.text}</p>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section search-section">
        <div className="container">
          <div className="section-title">
            <h2>Rechercher sur le site</h2>
            <p>Trouvez rapidement une destination, un plat, une date historique ou une information.</p>
          </div>
          <div className="card" style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
            <h2>Recherche</h2>
            <SearchBox />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Prêt à découvrir la Mauritanie ?</h2>
            <p>Planifiez votre voyage dès maintenant et partez à l'aventure dans ce joyau du Sahara.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-accent" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>Contactez-nous</Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxSrc} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
