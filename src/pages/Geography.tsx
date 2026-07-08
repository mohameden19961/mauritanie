import { useState } from 'react';
import { MAURITANIA } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const regionIcons = ['🏜️', '⛰️', '🌾', '⚓', '🌿', '🌴', '🌵', '🌾', '⛏️', '🏙️', '🏛️', '⛰️', '🌊'];

const featureIcons = ['🏜️', '🌊', '🦩', '🏖️', '⛰️'];

export default function Geography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Géographie & Culture"
        description="Immensité saharienne, côte atlantique et richesses culturelles — la Mauritanie offre une diversité géographique exceptionnelle."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: -32 }}>
            <div className="card" style={{ textAlign: 'center', padding: '24px 16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🌍</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>1 030 700</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>km² de superficie</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '24px 16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🏜️</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--secondary)' }}>75%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>couvert par le Sahara</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '24px 16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🌊</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-dark)' }}>754</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>km de côte atlantique</div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '24px 16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🏛️</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>15</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>wilayas (régions)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Régions de Mauritanie</h2>
            <p>Le pays est divisé en 15 wilayas (régions), chacune avec ses particularités.</p>
          </div>
          <div className="cards-grid">
            {MAURITANIA.geography.regions.map((region, i) => (
              <div key={i} className="info-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <div className="feature-icon green" style={{ margin: 0, fontSize: '1.3rem' }}>{regionIcons[i]}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{region.name}</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Capitale : {region.capital}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{region.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Carte de la Mauritanie</h2>
            <p>Explorez le territoire mauritanien et ses régions.</p>
          </div>
          <div className="two-col">
            <div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/images/mauritanie-div-map.gif" alt="Carte des régions de Mauritanie" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: 16 }}>Aperçu géographique</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>La Mauritanie s'étend sur 1 030 700 km², ce qui en fait le 29e plus grand pays du monde. Elle est bordée par l'océan Atlantique à l'ouest, le Sahara occidental et l'Algérie au nord, le Mali à l'est et au sud, et le Sénégal au sud-ouest.</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>Le territoire est divisé en 15 wilayas, avec Nouakchott comme capitale. Les deux tiers du pays sont recouverts par le désert du Sahara, tandis que la bande sahélienne au sud et la côte atlantique offrent des paysages plus verdoyants.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Caractéristiques naturelles</h2>
            <p>Des paysages variés entre désert, fleuve et océan.</p>
          </div>
          <div className="two-col">
            <div>
              <div style={{ display: 'grid', gap: 16 }}>
                {MAURITANIA.geography.features.map((feature, i) => (
                  <div key={i} className="info-card" style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div className="feature-icon green" style={{ width: 40, height: 40, borderRadius: 10, fontSize: '1.1rem', margin: 0, flexShrink: 0 }}>{featureIcons[i]}</div>
                      <div>
                        <h3 style={{ fontSize: '0.95rem', margin: '0 0 2px' }}>{feature.name}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop" alt="Désert du Sahara" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', aspectRatio: '4/3', objectFit: 'cover', border: '1px solid var(--glass-border)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Climat et environnement</h2>
            <p>Un climat aride à désertique avec des variations nord-sud marquées.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div className="feature-icon green" style={{ margin: 0 }}>☀️</div>
                <h3 style={{ margin: 0 }}>Climat du Nord</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>Désertique hyper-aride avec des températures atteignant 45°C en été et des précipitations inférieures à 50 mm par an. Les nuits peuvent être très froides en hiver, descendant jusqu'à 5°C dans l'Adrar.</p>
            </div>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div className="feature-icon blue" style={{ margin: 0 }}>🌦️</div>
                <h3 style={{ margin: 0 }}>Climat du Sud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>Sahélien avec une saison des pluies de juillet à septembre (200-600 mm/an). La région du fleuve Sénégal bénéficie d'un climat plus humide propice à l'agriculture et aux pâturages.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxSrc} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
