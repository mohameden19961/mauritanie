import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const sports = [
  {
    name: 'Football',
    participants: '3,5 millions de pratiquants',
    desc: 'Le sport le plus populaire du pays. La Ligue 1 mauritanienne compte 14 équipes et la sélection nationale a participé à la CAN 2019.',
    detail: 'Le football est de loin le sport le plus pratiqué et suivi en Mauritanie. Le championnat national (Ligue 1) comprend 14 équipes dont le FC Nouadhibou, ASC Mauritanie et FC de l\'Avenir. L\'équipe nationale, surnommée « Les Mourabitounes », a fait ses débuts à la Coupe d\'Afrique des Nations en 2019. Les stades municipaux de Nouakchott et de Nouadhibou sont des foyers d\'énergie le week-end.',
    icon: '\u26BD'
  },
  {
    name: 'Lutte traditionnelle',
    participants: '150 000+ pratiquants',
    desc: 'La lutte maure est un sport ancestral qui se pratique lors des fêtes et des cérémonies.',
    detail: 'La lutte traditionnelle est un sport profondément ancré dans la culture mauritanienne. Les combats (« tahta ») se déroulent sur du sable, sans règles strictes, et les combattants portent des short de cuir. Les tournois de lutte sont des événements sociaux majeurs, accompagnés de musique, de chants et de festins. Les champions de lutte sont des héros locaux très respectés.',
    icon: '\u{1F93A}'
  },
  {
    name: 'Course de dromadaires',
    participants: '50 000+ spectateurs par course',
    desc: 'Les courses de chameaux sont un spectacle unique au Sahara, avec des enjeux financiers importants.',
    detail: 'Les courses de dromadaires sont le sport équestre du Sahara. Les animaux, souvent équipés de caméras et de GPS, parcourent des distances de 20 à 50 km dans les dunes. Les propriétaires de dromadaires rivalisent pour remporter des prix qui peuvent atteindre des millions d\'ouguiyas. Les courses ont lieu principalement en hiver, lors des festivals culturels de l\'Adrar et du Tagant.',
    icon: '\u{1F42B}'
  },
  {
    name: 'Tir à l\'arc',
    participants: '5 000 pratiquants',
    desc: 'Pratique traditionnelle des Peuls et des Soninkés, le tir à l\'arc est un sport de précision et de concentration.',
    detail: 'Le tir à l\'arc traditionnel est pratiqué principalement par les communautés peules et soninkées du sud. Les arcs en bois sont fabriqués artisanalement et les compétitions ont lieu lors des fêtes agraires. Ce sport demande une grande précision et une concentration exceptionnelle. Les tournois sont accompagnés de danses et de chants traditionnels.',
    icon: '\u{1F3F9}\u{FE0F}'
  },
  {
    name: 'Cyclisme',
    participants: '20 000 pratiquants',
    desc: 'Le cyclisme gagne en popularité, avec des courses à travers le désert et les pistes du Sahara.',
    detail: 'Le cyclisme s\'est développé ces dernières années, porté par les défis du terrain désertique. Des courses comme le « Tour de Mauritanie » parcourent les routes et pistes du pays sur des centaines de kilomètres. Le cyclisme est aussi un moyen de transport économique dans les villes, notamment pour les livreurs.',
    icon: '\u{1F6B2}'
  },
  {
    name: 'Handball',
    participants: '8 000 pratiquants',
    desc: 'Sport collectif en essor, le handball est soutenu par la fédération nationale.',
    detail: 'Le handball est en pleine croissance en Mauritanie, notamment dans les centres urbains. La ligue nationale comprend des équipes masculines et féminines. Le handball est pratiqué dans les écoles et les centres sportifs, et la sélection nationale participe aux compétitions régionales en Afrique de l\'Ouest.',
    icon: '\u{1F3D0}\u{FE0F}'
  }
];

const olympicHistory = [
  { year: '2000', city: 'Sydney', athletes: 4, sport: 'Athlétisme, Lutte', highlight: 'Première participation à des Jeux olympiques' },
  { year: '2004', city: 'Athènes', athletes: 2, sport: 'Athlétisme', highlight: 'Représentation en courses de fond' },
  { year: '2008', city: 'Pékin', athletes: 2, sport: 'Athlétisme', highlight: 'Épreuves de demi-fond' },
  { year: '2012', city: 'Londres', athletes: 2, sport: 'Athlétisme, Judo', highlight: 'Première participation en judo' },
  { year: '2016', city: 'Rio', athletes: 2, sport: 'Athlétisme', highlight: 'Course du marathon' },
  { year: '2020', city: 'Tokyo', athletes: 2, sport: 'Athlétisme', highlight: 'Représentation en courses de fond' },
  { year: '2024', city: 'Paris', athletes: 3, sport: 'Athlétisme, Judo', highlight: '3 athlètes qualifiés' },
];

export default function Sports() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Sports"
        description="Du football au stade aux courses de dromadaires dans le Sahara, le sport mauritanien mêle passion moderne et traditions ancestrales."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Disciplines populaires</h2>
            <p>Les sports qui animent la Mauritanie.</p>
          </div>
          <div className="cards-grid">
            {sports.map((sport, i) => (
              <div key={i} className="info-card">
                <div className={`feature-icon ${i % 2 === 0 ? 'green' : 'blue'}`} style={{ margin: '0 0 16px' }}>{sport.icon}</div>
                <h3>{sport.name}</h3>
                <span className="badge badge-gold">{sport.participants}</span>
                <p style={{ marginTop: 12 }}>{sport.desc}</p>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{sport.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Mauritanie aux Jeux Olympiques</h2>
            <p>Représenter le pays sur la scène mondiale.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {olympicHistory.map((o, i) => (
              <div key={i} className="info-card" style={{ textAlign: 'center', padding: '20px 16px' }}>
                <div className="feature-icon green" style={{ margin: '0 auto 12px', width: 'fit-content' }}>{'\u{1F3C5}'}</div>
                <h3 style={{ fontSize: '1rem' }}>{o.city} {o.year}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>{o.athletes} athlètes · {o.sport}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: 4 }}>{o.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>La lutte : un sport de champions</h2>
            <p>La discipline la plus traditional de Mauritanie.</p>
          </div>
          <div className="two-col">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                La lutte traditionnelle mauritanienne est bien plus qu'un sport : c'est un rituel social qui perpétue les valeurs de bravoure, d'honneur et de respect. Les combats se déroulent sur un ring de sable, sans temps limite, jusqu'à ce qu'un combattant soit mis dos au sol. Les champions de lutte sont des figures vénérées de la société, et les tournois attirent des milliers de spectateurs. Les « maâlems » (maîtres de lutte) transmettent leur savoir de père en fils depuis des générations.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=800&fit=crop"
                alt="Lutte traditionnelle"
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
