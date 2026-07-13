import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const transportModes = [
  {
    name: 'Route nationale',
    icon: '\u{1F697}',
    desc: 'Le réseau routier relie les grandes villes, mais les pistes désertiques restent majoritaires.',
    detail: 'Le réseau routier mauritanien comprend environ 7 700 km de routes dont seulement 3 100 km sont revêtues. Les principales nationales relient Nouakchott à Nouadhibou (N1), Nouakchott à Rosso (N3) et Nouakchott à Néma (N7). Les pistes en terre relient les villages et les oasis de l\'intérieur. La saison des pluies (juillet à septembre) rend de nombreuses pistes impraticables.',
    stats: '3 100 km revêtus',
    color: 'green'
  },
  {
    name: 'Chemin de fer',
    icon: '\u{1F682}',
    desc: 'Le Train des Sables, longest train du monde, relie Zouérate au port de Nouadhibou.',
    detail: 'Le Train des Sables est l\'un des trains les plus emblématiques d\'Afrique. Long de 2,5 km, il traverse le désert entre la mine de fer de Zouérate et le port de Nouadhibou sur 704 km. Il transporte du minerai de fer mais transporte aussi des voyageurs sur la partie entre Nouadhibou et Zouérate. Le voyage dure environ 12 heures et offre un spectacle unique : des centaines de wagons ouverts traversant le Sahara.',
    stats: '704 km, 2,5 km de long',
    color: 'blue'
  },
  {
    name: 'Aéroports',
    icon: '\u{2708}\u{FE0F}',
    desc: 'Trois aéroports internationaux desservent le pays : Nouakchott, Nouadhibou et Atar.',
    detail: 'L\'aéroport international de Nouakchott-Oumtounsy (NKC) est le principal hub du pays, avec des liaisons vers Paris, Casablanca, Istanbul et Dubaï. L\'aéroport de Nouadhibou (NDB) dessert les routes régionales et les vols intérieurs. L\'aéroport d\'Atar (ATR) dessert l\'Adrar et les circuits touristiques du nord.',
    stats: '3 aéroports internationaux',
    color: 'gold'
  },
  {
    name: 'Transport maritime',
    icon: '\u{26F5}',
    desc: 'Les ports de Nouakchott et de Nouadhibou assurent le commerce extérieur et la pêche.',
    detail: 'Le port de Nouakchott, inauguré en 1986, est le principal port du pays avec une capacité de traitement de 2 millions de tonnes par an. Le port de Nouadhibou, plus ancien, est le plus grand port de pêche d\'Afrique de l\'Ouest. Les transports maritimes assurent l\'essentiel du commerce extérieur, les importations et les exportations de minerai.',
    stats: '2 ports principaux',
    color: 'green'
  },
  {
    name: 'Dromadaire',
    icon: '\u{1F42B}',
    desc: 'Le chameau reste le moyen de transport traditionnel des nomades dans le désert profond.',
    detail: 'Le dromadaire est le moyen de transport le plus ancien et le plus adapté aux conditions extrêmes du Sahara. Les nomades maures l\'utilisent pour les déplacements quotidiens, le transport de marchandises et les migrations saisonnières. Un dromadaire peut parcourir 40 km par jour en portant jusqu\'à 200 kg de charge. Les courses de chameaux (« fantasia ») sont un sport traditionnel très populaire.',
    stats: '1,5 million de têtes',
    color: 'blue'
  },
  {
    name: 'Taxis et bus',
    icon: '\u{1F68C}',
    desc: 'Les transports urbains se développent à Nouakchott avec taxis collectifs et bus modernes.',
    detail: 'À Nouakchott, les taxis jaunes (« taxis collectifs ») sont le moyen de transport le plus utilisé par les habitants. Ils suivent des itinéraires fixes et coûtent entre 100 et 300 MRU par trajet. Les bus modernes ont été introduits récemment sur certaines lignes. La ville compte environ 5 000 taxis. Les motos (« bâbâ ») sont de plus en plus populaires pour les trajets courts.',
    stats: '5 000+ taxis à Nouakchott',
    color: 'gold'
  }
];

const infrastructures = [
  { name: 'Route trans-saharienne', desc: 'Axe Nouakchott — Nouadhibou — Tindouf (Algérie), longueur 704 km', status: 'En service' },
  { name: 'Autoroute Nouakchott — Nouadhibou', desc: 'Première autoroute du pays, 470 km, en cours de réalisation', status: 'En construction' },
  { name: 'Port en eaux profondes', desc: 'Nouveau port de Nouakchott, capacité 2,5 Mt/an', status: 'En service' },
  { name: 'Aéroport de Nouakchott-Oumtounsy', desc: 'Nouveau terminal international, capacité 1,5 million passagers/an', status: 'En service' },
  { name: 'Train des Sables — modernisation', desc: 'Réhabilitation de la voie ferrée Zouérate — Nouadhibou', status: 'En cours' },
];

export default function Transport() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Transport & Infrastructures"
        description="Du train des sables le plus long du monde aux pistes du Sahara, la Mauritanie développe ses infrastructures pour connecter les villes et les cultures."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Moyens de transport</h2>
            <p>Du dromadaire au train, comment se déplacer en Mauritanie.</p>
          </div>
          <div className="cards-grid">
            {transportModes.map((mode, i) => (
              <div key={i} className="info-card">
                <div className={`feature-icon ${mode.color}`} style={{ margin: '0 0 16px' }}>{mode.icon}</div>
                <h3>{mode.name}</h3>
                <p style={{ marginTop: 8 }}>{mode.desc}</p>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', marginTop: 12 }}>{mode.stats}</div>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{mode.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Projets d'infrastructure</h2>
            <p>Les grands chantiers qui transforment le pays.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {infrastructures.map((infra, i) => (
              <div key={i} className="info-card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1rem' }}>{infra.name}</h3>
                <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{infra.desc}</p>
                <span className={`badge ${infra.status === 'En service' ? 'badge-green' : 'badge-blue'}`} style={{ marginTop: 12 }}>{infra.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Le Train des Sables</h2>
            <p>Une aventure unique à travers le Sahara.</p>
          </div>
          <div className="two-col">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Le Train des Sables est l'un des voyages les plus spectaculaires au monde. Long de 2,5 kilomètres, il transporte le minerai de fer de la mine de Zouérate au port de Nouadhibou depuis 1963. Les voyageurs audacieux montent à bord des wagons ouverts, assis sur les sacs de minerai, pour un voyage de 12 à 17 heures à travers le Sahara. Le spectacle des dunes dorées au coucher du soleil depuis un wagon de minerai est inoubliable. Ce train est également le plus long convoi ferroviaire au monde.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&fit=crop"
                alt="Train des sables"
                style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', aspectRatio: '4/3', objectFit: 'cover', border: '1px solid var(--glass-border)' }}
              />
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
