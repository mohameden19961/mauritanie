import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const animals = [
  {
    name: 'Antilope addax',
    status: 'En danger critique',
    desc: 'Aussi appelée addax du Sahara ou antilope à spiral, c\'est l\'une des rares antilopes adaptées au désert.',
    detail: 'L\'addax est un mammifère emblématique du Sahara mauritanien. Avec ses cornes en spirale et son pelage qui varie du blanc en hiver au gris en été, il peut survivre plusieurs mois sans eau. Malheureusement, chassée intensivement, l\'espèce est aujourd\'hui en danger critique d\'extinction avec moins de 100 individus à l\'état sauvage. Le Parc du Banc d\'Arguin et les aires protégées de l\'Adrar constituent ses derniers refuges.',
    habitat: 'Désert du Sahara, zones arides du nord',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&fit=crop'
  },
  {
    name: 'Phoque moine du Sahara',
    status: 'En danger',
    desc: 'Le seul mammifère marin endémique d\'Afrique, vivant dans les eaux de la Baie du Lévrier.',
    detail: 'Le phoque moine du Sahara est une espèce endémique de la côte mauritanienne. Avec environ 400 individus restants, c\'est le phoque le plus rare au monde. Il vit principalement dans la Baie du Lévrier et sur les rochers du Cap Blanc. Sa population a été décimée par la chasse et la pêche accidentelle, mais des efforts de conservation récents ont ralenti le déclin.',
    habitat: 'Côte atlantique, Baie du Lévrier',
    image: 'https://images.unsplash.com/photo-1580402427914-a6cc67d68f65?w=800&fit=crop'
  },
  {
    name: 'Faucon pèlerin',
    status: 'Vulnérable',
    desc: 'Le rapace le plus rapide du monde, fréquemment observé le long de la côte mauritanienne.',
    detail: 'Le faucon pèlerin est un visiteur régulier de la Mauritanie, particulièrement présent sur la côte atlantique et dans les zones côtières du Banc d\'Arguin. Avec des plongeons pouvant atteindre 390 km/h, c\'est l\'animal le plus rapide de la planète. Les populations migratrices passent par la Mauritanie lors des changements de saison, profitant des concentrations de migrateurs le long du littoral.',
    habitat: 'Côte atlantique, falaises côtières',
    image: 'https://images.unsplash.com/photo-1611689342806-0863700ce8e4?w=800&fit=crop'
  },
  {
    name: 'Chameau dromadaire',
    status: 'Domestique',
    desc: 'Compagnon indispensable des populations nomades, symbole de la vie sahélienne.',
    detail: 'Le dromadaire est au cœur de la civilisation nomade mauritanienne depuis des millénaires. Il fournit lait, viande, cuir, laine et transporte les marchandises à travers le désert. Le cheptel mauritanien compte environ 1,5 million de têtes. Les éleveurs nomades maures entretiennent un lien spirituel et culturel profond avec ces animaux, qui jouent un rôle central dans les mariages, les cérémonies et l\'organisation sociale.',
    habitat: 'Partout en Mauritanie, zones pastorales',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&fit=crop'
  },
  {
    name: 'Tortue luth',
    status: 'En danger',
    desc: 'La plus grande tortue marine au monde, nichant sur les plages de la côte mauritanienne.',
    detail: 'La tortue luth, pouvant atteindre 2 mètres de long et peser 900 kg, fréquente les eaux mauritaniennes pour se nourrir de méduses. Les femelles viennent pondre sur les plages de la côte, notamment dans la région du Banc d\'Arguin. Les plages de Lévrier et de Port Étienne sont des sites de ponte importants. Les menaces incluent la pêche accidentelle, le braconnage des œufs et la perte de leur habitat côtier.',
    habitat: 'Côte atlantique, plages de ponte',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&fit=crop'
  },
  {
    name: 'Gerboise du Sahara',
    status: 'Préoccupation mineure',
    desc: 'Petit rongeur nocturne parfaitement adapté aux températions extrêmes du désert.',
    detail: 'La gerboise du Sahara est un petit mammifère saltateur qui vit dans les dunes sablonneuses de la Mauritanie. Avec ses longues pattes arrière et sa capacité à creuser des terriers profonds, elle survit aux chaleurs torrides du jour et aux froids nocturnes du désert. Elle se nourrit de graines, d\'insectes et de la rosée qu\'elle recueille sur les plantes à l\'aube. Son pelage sable la rend presque invisible dans le paysage désertique.',
    habitat: 'Dunes et zones sablonneuses du Sahara',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop'
  }
];

const birds = [
  { name: 'Flamant rose', count: '50 000+', zone: 'Banc d\'Arguin' },
  { name: 'Pélican frisé', count: '30 000+', zone: 'Banc d\'Arguin' },
  { name: 'Sternes royales', count: '20 000+', zone: 'Côte atlantique' },
  { name: 'Hérons mélangés', count: '15 000+', zone: 'Lagunes côtières' },
  { name: 'Martinets à ventre blanc', count: '10 000+', zone: 'Nouadhibou' },
  { name: 'Oiseaux de proie', count: '2 000+', zone: 'Adrar, Tagant' },
];

export default function Faune() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Faune & Flore"
        description="Du Sahara au littoral atlantique, la Mauritanie abrite une biodiversité surprenante entre désert brûlant, oasis verdoyantes et eaux poissonneuses."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Espèces emblématiques</h2>
            <p>La faune mauritanienne, mélange unique de espèces sahariennes et sahéliennes.</p>
          </div>
          <div className="cards-grid">
            {animals.map((animal, i) => (
              <div key={i} className="info-card">
                <figure
                  style={{ margin: '0 0 18px', cursor: 'pointer' }}
                  onClick={() => { setLightboxSrc(animal.image); setLightboxOpen(true); }}
                >
                  <img className="card-image" src={animal.image} alt={animal.name} />
                </figure>
                <h3>{animal.name}</h3>
                <span className={`badge ${animal.status.includes('danger') ? 'badge-gold' : animal.status.includes('Vulnérable') ? 'badge-blue' : 'badge-green'}`}>
                  {animal.status}
                </span>
                <p style={{ marginTop: 12, fontSize: '0.95rem' }}>{animal.desc}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 8 }}>{animal.habitat}</p>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{animal.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Ornithologie au Banc d'Arguin</h2>
            <p>Un paradis pour les ornithologues du monde entier.</p>
          </div>
          <div style={{ marginBottom: 32 }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 24 }}>
              Le Parc National du Banc d'Arguin est l'un des sites ornithologiques les plus importants d'Afrique. Classé au patrimoine mondial de l'UNESCO depuis 1989, il accueille chaque année plus de 2 millions d'oiseaux migrateurs venus d'Europe et d'Asie. Les eaux peu profondes des lagons, riches en poissons et invertébrés, offrent un festin inégalé pour les flamants, pélicans, sternes, hérons et de nombreuses autres espèces.
            </p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {birds.map((bird, i) => (
              <div key={i} className="info-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div className="feature-icon blue" style={{ margin: '0 auto 12px' }}>{'{ }\uFE0F'}</div>
                <h3 style={{ fontSize: '1.1rem' }}>{bird.name}</h3>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent)', margin: '8px 0' }}>{bird.count}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{bird.zone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Flore désertique</h2>
            <p>La vie végétale s'adapte aux conditions extrêmes du Sahara.</p>
          </div>
          <div className="two-col">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Malgré l'aridité extrême du Sahara, la Mauritanie abrite une flore surprenante. Les acacias, les tamaris et les dattiers d'Oasis forment des écrans de verdure au cœur du désert. Dans le sud, le long du fleuve Sénégal, une végétation plus dense se développe : baobabs, fromagers et manguiers créent une bordure verte qui contraste avec l'immensité sableuse. Les plantes médicinales traditionnelles, comme le guelguet et le moringa, jouent un rôle essentiel dans la pharmacopée locale.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop"
                alt="Paysage désertique mauritanien"
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
