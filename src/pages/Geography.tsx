import { useState, useEffect, useRef } from 'react';
import { MAURITANIA } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const regionIcons = ['🏜️', '🌾', '🌿', '⚓', '🌊', '🌱', '🏜️', '🌵', '⛏️', '🏙️', '🏛️', '🏘️', '⛰️', '⛏️', '🌾'];
const featureIcons = ['🏜️', '🌊', '🦩', '🏖️', '⛰️'];

const regionCoords: Record<string, [number, number]> = {
  'Adrar': [20.5, -11.0],
  'Assaba': [16.6, -11.5],
  'Brakna': [16.2, -13.5],
  'Dakhlet Nouadhibou': [20.5, -16.0],
  'Gorgol': [16.0, -12.7],
  'Guidimaka': [15.3, -12.2],
  'Hodh Ech Chargui': [16.6, -7.2],
  'Hodh El Gharbi': [15.8, -9.3],
  'Inchiri': [20.0, -15.5],
  'Nouakchott-Nord': [18.12, -15.98],
  'Nouakchott-Ouest': [18.09, -15.98],
  'Nouakchott-Sud': [18.06, -15.96],
  'Tagant': [18.5, -11.0],
  'Tiris Zemmour': [22.7, -12.5],
  'Trarza': [16.6, -15.8],
};

const touristSites = [
  { name: "Parc du Banc d'Arguin", lat: 19.8, lng: -16.2, desc: "Site UNESCO, paradis des oiseaux migrateurs" },
  { name: "Chinguetti", lat: 20.46, lng: -12.37, desc: "Cité sainte et bibliothèques anciennes" },
  { name: "Structure de Richat (Œil du Sahara)", lat: 21.12, lng: -11.40, desc: "Formation géologique de 50 km de diamètre" },
  { name: "Terjit", lat: 20.30, lng: -12.93, desc: "Oasis luxuriante dans les gorges de l'Adrar" },
  { name: "Nouakchott", lat: 18.09, lng: -15.98, desc: "Capitale et cœur administratif du pays" },
  { name: "Nouadhibou", lat: 20.94, lng: -17.03, desc: "Deuxième ville, port de pêche majeur" },
  { name: "Zouérate", lat: 22.73, lng: -12.47, desc: "Centre minier du fer" },
  { name: "Tichitt", lat: 18.43, lng: -9.48, desc: "Ancienne cité caravanière classée UNESCO" },
];

function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [18.07, -15.96],
      zoom: 6,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 18,
    }).addTo(map);

    const markerIcon = L.divIcon({
      html: '<div style="width:12px;height:12px;background:#0d8a3c;border-radius:50%;border:2px solid white;box-shadow:0 0 6px rgba(0,0,0,0.3)"></div>',
      className: '',
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });

    const tourIcon = L.divIcon({
      html: '<div style="width:14px;height:14px;background:#d4af37;border-radius:50%;border:2px solid white;box-shadow:0 0 8px rgba(0,0,0,0.4)"></div>',
      className: '',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    MAURITANIA.geography.regions.forEach((region, i) => {
      const coords = regionCoords[region.name];
      if (coords) {
        L.marker(coords, { icon: markerIcon })
          .addTo(map)
          .bindPopup(`<div style="font-family:sans-serif"><b>${regionIcons[i]} ${region.name}</b><br><small>Capitale: ${region.capital}</small><br>${region.desc}</div>`);
      }
    });

    touristSites.forEach(site => {
      L.marker([site.lat, site.lng], { icon: tourIcon })
        .addTo(map)
        .bindPopup(`<div style="font-family:sans-serif"><b>📍 ${site.name}</b><br>${site.desc}</div>`);
    });

    const LegendControl = L.Control.extend({
      onAdd: function() {
        const div = L.DomUtil.create('div');
        div.style.cssText = 'background:white;padding:10px 14px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);font-family:sans-serif;font-size:12px;line-height:1.8';
        div.innerHTML = '<b>Légende</b><br><span style="display:inline-block;width:10px;height:10px;background:#0d8a3c;border-radius:50%;margin-right:6px"></span>Capitale de wilaya<br><span style="display:inline-block;width:10px;height:10px;background:#d4af37;border-radius:50%;margin-right:6px"></span>Site touristique';
        return div;
      }
    });
    new LegendControl({ position: 'bottomright' }).addTo(map);

    mapInstance.current = map;
    setTimeout(() => map.invalidateSize(), 300);

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: 500, borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} />;
}

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
            <h2>Carte interactive Leaflet</h2>
            <p>Cliquez sur les marqueurs pour explorer les wilayas et sites touristiques.</p>
          </div>
          <MapComponent />
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
