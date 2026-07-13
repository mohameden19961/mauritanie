import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const instruments = [
  {
    name: 'Tidinit',
    type: 'Cordes',
    desc: 'L\'instrument emblématique des Maures, une cithare à cordes pincées en bois et en peau de chèvre.',
    detail: 'Le tidinit est le précurseur de la guitare africaine. Cet instrument à cordres pincées, fabriqué en bois de tamaris et en peau de chèvre, accompagne les griots maures dans leurs récitations poétiques et épiques. Il possède généralement entre 4 et 6 cordes et produit un son doux et mélancolique. Les plus grands tidinitistes sont considérés comme des trésors nationaux.',
    sound: 'Doux, mélancolique, résonnant'
  },
  {
    name: 'Ardin',
    type: 'Cordes',
    desc: 'La harpe des femmes maures, joué lors des cérémonies et des fêtes.',
    detail: 'L\'ardin est une petite harpe à 7 cordes exclusivement jouée par les femmes. Cet instrument delicate produit des mélodies douces et contemplatives. Il est associé aux moments intimes — berceuses, chants d\'amour, cérémonies de coiffure. L\'ardin est un symbole de la féminité et de l\'élégance dans la culture maure.',
    sound: 'Doux, cristallin, contemplatif'
  },
  {
    name: 'Tbal',
    type: 'Percussions',
    desc: 'Le grand tambour cérémoniel, battu lors des mariages, des naissances et des fêtes religieuses.',
    detail: 'Le tbal est un grand tambour à membrane unique, fabriqué avec un tronc d\'arbre creusé et une peau de chèvre tendue. Il est l\'instrument le plus utilisé lors des cérémonies traditionnelles. Le rythme du tbal est hypnotique et puissant, capable de porter les danses collectives pendant des heures. Les tbalistes professionnels sont des figures essentielles de la vie sociale.',
    sound: 'Puissant, profond, hypnotique'
  },
  {
    name: 'Galago (Tama)',
    type: 'Percussions',
    desc: 'Le tambour à cordes croisées, dont la tension varie pour changer le ton en jouant.',
    detail: 'Le galago ou tama est un petit tambour dont la membrane est serrée par des cordes croisées sur les côtés. En pressant ces cordes contre sa poitrine pendant qu\'il joue, le musicien peut modifier la tension de la peau et ainsi produire des variations de ton spectaculaires. Cet instrument est utilisé dans les rythmes plus rapides et plus dansants, notamment lors des cérémonies de baptême et des fêtes.',
    sound: 'Vif, expressif, ton variable'
  },
  {
    name: 'Tendé',
    type: 'Percussions',
    desc: 'Le mortier à grains transformé en instrument de musique par les femmes.',
    detail: 'Le tendé est un grand mortier en bois traditionnellement utilisé pour piler le mil. Lors des cérémonies de « tندé » (nom qui lui vient du mortier lui-même), les femmes chantent et battent le rythme sur les parois du mortier avec des pilons en bois. Cette tradition est à l\'origine de nombreux chants populaires mauritaniens et constitue un moment fort de la vie communautaire.',
    sound: 'Cadencé, festif, communautaire'
  }
];

const traditions = [
  { title: 'Griots et poètes', desc: 'Les griots (« maâlem ») sont les dépositaires de la mémoire orale. Ils chantent les exploits des ancêtres, les lignées tribales et les événements historiques lors de cérémonies officielles et privées.', icon: '\u{1F3AD}' },
  { title: 'Chants de mariage', desc: 'Les mariages mauritaniens sont accompagnés de chants spécifiques : les chants de la dot (« sdaq »), les chants de joie et les berceuses nuptiales.', icon: '\u{1F492}' },
  { title: 'Danse des épées', desc: 'La danse traditionnelle avec les épées (« raïcha ») est pratiquée lors des fêtes et des cérémonies, symbole de bravoure et de tradition guerrière.', icon: '\u{2694}\u{FE0F}' },
  { title: 'Musique soufie', desc: 'Le chant religieux soufi, avec ses« dhikr » et ses « madih », occupe une place importante dans la vie spirituelle mauritanienne.', icon: '\u{1F54C}' },
];

export default function Musique() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Musique & Danse"
        description="La musique mauritanienne est un univers de cordes vibrantes, de percussions puissantes et de chants ancestraux, porté par la tradition orale des griots."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Instruments traditionnels</h2>
            <p>Le son de la Mauritanie se joue sur des instruments ancestraux.</p>
          </div>
          <div className="cards-grid">
            {instruments.map((inst, i) => (
              <div key={i} className="info-card">
                <div className={`feature-icon ${i % 2 === 0 ? 'green' : 'blue'}`} style={{ margin: '0 0 16px' }}>{'{ }\uFE0F'}</div>
                <span className={`badge ${inst.type === 'Cordes' ? 'badge-blue' : 'badge-green'}`}>{inst.type}</span>
                <h3 style={{ marginTop: 12 }}>{inst.name}</h3>
                <p style={{ marginTop: 8 }}>{inst.desc}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent)', marginTop: 8, fontStyle: 'italic' }}>{inst.sound}</p>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{inst.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Traditions musicales</h2>
            <p>Les dimensions sociales et spirituelles de la musique.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {traditions.map((t, i) => (
              <div key={i} className="info-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div className="feature-icon gold" style={{ margin: '0 auto 12px' }}>{t.icon}</div>
                <h3 style={{ fontSize: '1.05rem' }}>{t.title}</h3>
                <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>La femme et la musique</h2>
            <p>Un rôle central dans la transmission culturelle.</p>
          </div>
          <div className="two-col">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Les femmes jouent un rôle fondamental dans la musique mauritanien. Les artistes féminines, notamment les « layalat » (chanteuses), sont les gardiennes de la tradition orale féminine. Elles chantent lors des mariages, des naissances et des cérémonies de coiffure. Les chanteuses contemporaines comme Dimi Mint Abba et Malouma Mattala ont porté la musique mauritanienne sur la scène internationale, mêlant les traditions anciennes aux influences modernes. L'ardin, exclusivement joué par les femmes, est le symbole de cette tradition musicale féminine.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&fit=crop"
                alt="Musique traditionnelle"
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
