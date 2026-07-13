import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const languages = [
  {
    name: 'Arabe hassaniya',
    speakers: '~2,8 millions',
    role: 'Langue nationale et véhiculaire',
    desc: 'Variété d\'arabe parlée par les Maures, elle est la lingua franca du pays et la langue de la poésie orale.',
    detail: 'L\'hassaniya est un dialecte arabe distinct, enrichi par des emprunts aux langues berbères et aux langues africaines. C\'est la langue de la poésie, du conte et du proverbe. Les griots maures la cultivent dans des récitations épiques qui perpétuent la mémoire tribale. L\'hassaniya se caractérise par des sons gutturaux et une mélodie chantante qui la différencie des autres dialectes arabes.',
    icon: '\u{1F4DD}'
  },
  {
    name: 'Français',
    speakers: '~1,5 million (L2)',
    role: 'Langue de l\'administration et de l\'enseignement',
    desc: 'Héritage colonial devenu langue officielle, utilisée dans l\'administration, les médias et l\'enseignement supérieur.',
    detail: 'Le français est la langue dominante de l\'administration, de la justice et de l\'enseignement supérieur. Il coexiste avec l\'arabe dans tous les documents officiels. La presse écrite, la télévision et les milieux d\'affaires utilisent largement le français, bien qu\'une politique d\'arabisation progressive soit en cours depuis les années 1990.',
    icon: '\u{1F4DA}'
  },
  {
    name: 'Pulaar (Fulfuldé)',
    speakers: '~1 million',
    role: 'Langue des Peuls',
    desc: 'Langue peule parlée dans le sud et le sud-est, riche en vocabulaire pastoral et poétique.',
    detail: 'Le pulaar est la langue des Peuls (Fulbé), pasteurs et éleveurs répartis dans toute l\'Afrique de l\'Ouest. En Mauritanie, il est parlé principalement dans les régions de Brakna, Gorgol, Guidimaka et Hodh El Gharbi. Le pulaar possède un riche vocabulaire pour décrire les troupeaux, les saisons et les relations sociales. Il est aussi la langue du Pulaaku, le code d\'honneur peul.',
    icon: '\u{1F3AD}'
  },
  {
    name: 'Soninké',
    speakers: '~350 000',
    role: 'Langue des Soninkés',
    desc: 'Langue mandingue parlée dans le sud, associée à la civilisation du Ghana médiéval.',
    detail: 'Le soninké est la langue des Soninkés, descendants de l\'ancien Empire du Ghana. Il est parlé dans les régions de Hodh Ech Chargui, Guidimaka et Assaba. Cette langue mandingue possède un système tonal complexe et un riche répertoire de récits historiques qui perpétuent la mémoire de l\'empire du Wagadou (Ghana).',
    icon: '\u{1F4DC}'
  },
  {
    name: 'Wolof',
    speakers: '~200 000',
    role: 'Langue des Wolofs',
    desc: 'Langue mandingue du sud-ouest, partagée avec le Sénégal voisin.',
    detail: 'Le wolof est parlé par la communauté wolof de Mauritanie, concentrée dans la région de Trarza et à Nouakchott. Bien que minoritaire au pays, c\'est la langue la plus parlée au Sénégal, créant des liens culturels transfrontaliers. Le wolof est une langue dynamique qui emprunte facilement aux autres langues.',
    icon: '\u{1F30A}'
  }
];

const culturalElements = [
  { title: 'Poésie orale', desc: 'La tradition poétique hassaniya est l\'un des piliers de la culture mauritanienne. Les poètes (« sha\'er ») jouent un rôle social crucial, résolvant les conflits, célébrant les unions et préservant l\'histoire tribale.', icon: '\u{270D}\u{FE0F}' },
  { title: 'Conte et tradition orale', desc: 'Les contes transmis de génération en génération racontent les exploits des ancêtres, les secrets des caravanes et les leçons de la vie nomade. Le conteur (« maâlem ») est un personnage respecté.', icon: '\u{1F4D6}' },
  { title: 'Proverbes', desc: 'La sagesse mauritanienne s\'exprime à travers des proverbes percutants qui guident le comportement social et les relations interpersonnelles.', icon: '\u{1F4A1}' },
  { title: 'Calligraphie arabe', desc: 'L\'art de la calligraphie arabe est très pratiqué, notamment pour la décoration des mosquées et des écoles coraniques. Les manuscrits de Chinguetti témoignent de cette tradition.', icon: '\u{2702}\u{FE0F}' }
];

const proverbs = [
  { original: 'يدك في الماء ما تحس بالبرد', translation: 'Ta main est dans l\'eau, tu ne sens pas le froid', meaning: 'On ne ressent pas les problèmes d\'autrui.' },
  { original: 'اللي ما يعرف الصبر ما يعرف الكرم', translation: 'Qui ne connaît pas la patience ne connaît pas la générosité', meaning: 'La patience est la mère de toutes les vertus.' },
  { original: 'الليلة ما تنجم والغدا ما ينجيم', translation: 'La nuit ne brille pas et demain ne brille pas', meaning: 'L\'incertitude est la seule certitude.' },
  { original: 'الحصان ما يعرف الركوب إلا من يعرفه', translation: 'Le cheval ne se laisse monter que par celui qui le connaît', meaning: 'Il faut connaître son sujet pour le maîtriser.' },
];

export default function Langues() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Langues & Culture"
        description="La Mauritanie est un carrefour linguistique unique où coexistent arabe hassaniya, français, pulaar, soninké et wolof — chacun porteur d'une richesse culturelle spécifique."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Les langues de Mauritanie</h2>
            <p>Un pays, cinq langues, cinq univers culturels.</p>
          </div>
          <div className="cards-grid">
            {languages.map((lang, i) => (
              <div key={i} className="info-card">
                <div className="feature-icon green" style={{ margin: '0 0 16px' }}>{lang.icon}</div>
                <h3>{lang.name}</h3>
                <span className="badge badge-blue">{lang.speakers}</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent)', margin: '8px 0' }}>{lang.role}</p>
                <p style={{ marginTop: 8 }}>{lang.desc}</p>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{lang.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Traditions orales</h2>
            <p>La richesse culturelle se transmet de bouche à oreille depuis des siècles.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {culturalElements.map((el, i) => (
              <div key={i} className="info-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div className="feature-icon gold" style={{ margin: '0 auto 12px' }}>{el.icon}</div>
                <h3 style={{ fontSize: '1.05rem' }}>{el.title}</h3>
                <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Proverbes mauritaniens</h2>
            <p>La sagesse du peuple mauritanien en quelques mots.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {proverbs.map((p, i) => (
              <div key={i} className="info-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)', marginBottom: 8, direction: 'rtl', fontFamily: 'serif' }}>{p.original}</div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 8 }}>"{p.translation}"</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.meaning}</p>
              </div>
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
