import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const facts = [
  { label: 'Religion officielle', value: 'Islam sunnite (rite malékite)', icon: '\u{1F54C}' },
  { label: 'Population musulmane', value: '~100%', icon: '\u{1F54A}' },
  { label: 'Mosquées', value: 'Plusieurs milliers', icon: '\u{1F54D}' },
  { label: 'Fête nationale', value: 'Aïd El Fitr / Aïd El Adha', icon: '\u{1F381}' },
];

const practices = [
  {
    name: 'La prière quotidienne',
    desc: 'Cinq prières obligatoires (salat) rythment la vie quotidienne de chaque musulman mauritanien.',
    detail: 'Les appels à la prière (adhan) résonnent cinq fois par jour dans toutes les villes et villages du pays. Les mosquées sont toujours pleines, notamment pour la prière du Vendredi (salat al-jumua). Les commerces ferment pendant les heures de prière, et la vie sociale s\'organise autour de ces moments sacrés.',
    icon: '\u{1F54C}'
  },
  {
    name: 'Le Ramadan',
    desc: 'Le mois sacré est vécu avec une ferveur particulière, avec des prières nocturnes et des iftars collectifs.',
    detail: 'Le Ramadan est la période la plus intense de l\'année religieuse en Mauritanie. Les mosquées organisent des « tarawih » (prières nocturnes) et des iftars (repas de rupture du jeûne) pour les fidèles. Les marchés s\'animent le soir, et les familles se réunissent pour rompre le jeûne ensemble. Le Ramadan est aussi une période de charité et de solidarité.',
    icon: '\u{1F54E}'
  },
  {
    name: 'Les marabouts',
    desc: 'Les chefs religieux (« marabouts ») jouent un rôle social et spirituel considérable.',
    detail: 'Les marabouts sont les guides spirituels de la société mauritanienne. Ils dirigent des confréries soufies, enseignent le Coran et conseillent les familles. Les grandes familles maraboutiques (Idaw Ali, Idaw M-Barek, Tijaani) ont une influence sociale considérable. Les fidèles viennent de tout le pays pour demander les conseils et les bénédictions des marabouts respectés.',
    icon: '\u{1F54A}'
  },
  {
    name: 'Le Magal de Touba',
    desc: 'Fête religieuse annuelle commémorant l\'exil du fondateur de la confrérie Mouride.',
    detail: 'Bien que le Magal de Touba soit principalement célébré au Sénégal, les communautés mauritaniennes participent activement à cette célébration. Les confréries soufies (Mouride, Tijaniyya, Layene) sont très présentes en Mauritanie, et leurs cérémonies annuelles rassemblent des milliers de fidèles.',
    icon: '\u{1F54B}'
  },
  {
    name: 'Les fêtes religieuses',
    desc: 'Aïd El Fitr, Aïd El Adha, Mawlid et le 27e Ramadan sont les moments forts du calendrier religieux.',
    detail: 'Le calendrier religieux rythme la vie mauritanienne. L\'Aïd El Fitr marque la fin du Ramadan avec des prières collectives et des festins. L\'Aïd El Adha (Tabaski) commémore le sacrifice d\'Abraham avec l\'immolation d\'un mouton. Le Mawlid célèbre la naissance du Prophète avec des chants religieux et des processions.',
    icon: '\u{1F381}'
  },
  {
    name: 'L\'école coranique',
    desc: 'Les « mahadras » forment les jeunes dans la lecture du Coran et les sciences islamiques.',
    detail: 'L\'école coranique (mahadra) est la première école de la vie d\'un enfant mauritanien. Les enfants commencent l\'apprentissage du Coran dès l\'âge de 4-5 ans, par cœur et en récitation. Les maîtres coraniques (moualim) sont respectés et les cérémonies de « khattam » (achèvement de la lecture du Coran) sont des événements familiaux importants.',
    icon: '\u{1F4D6}'
  }
];

const holidays = [
  { name: 'Aïd El Fitr', type: 'Religieuse', description: 'Fin du Ramadan, prières et festins familiaux', month: 'Variable (fin de Ramadan)' },
  { name: 'Aïd El Adha', type: 'Religieuse', description: 'Fête du sacrifice, immolation d\'un mouton', month: 'Variable (70 jours après l\'Aïd El Fitr)' },
  { name: 'Mawlid', type: 'Religieuse', description: 'Naissance du Prophète, processions et chants', month: 'Variable (12 Rabi al-Awwal)' },
  { name: 'Fête de l\'Indépendance', type: 'Nationale', description: '28 novembre, défilé et cérémonies officielles', month: 'Novembre' },
  { name: 'Fête du Travail', type: 'Nationale', description: '1er mai, manifestations syndicales', month: 'Mai' },
  { name: 'Journée des Forces Armées', type: 'Nationale', description: 'Militaire et patriotique', month: 'Juillet' },
];

export default function Religion() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Religion & Traditions"
        description="L'islam sunnite de rite malékite est la religion de la totalité de la population. Les confréries soufies, les marabouts et les écoles coraniques structurent la vie spirituelle et sociale."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>L'islam en Mauritanie</h2>
            <p>Une foi profonde au quotidien.</p>
          </div>
          <div className="stats-grid">
            {facts.map((fact, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{fact.icon}</div>
                <div className="stat-value" style={{ fontSize: '1rem' }}>{fact.value}</div>
                <div className="stat-label">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Pratiques religieuses</h2>
            <p>Comment la foi façonne la vie quotidienne.</p>
          </div>
          <div className="cards-grid">
            {practices.map((pr, i) => (
              <div key={i} className="info-card">
                <div className={`feature-icon ${i % 2 === 0 ? 'green' : 'blue'}`} style={{ margin: '0 0 16px' }}>{pr.icon}</div>
                <h3>{pr.name}</h3>
                <p style={{ marginTop: 8 }}>{pr.desc}</p>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{pr.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Calendrier des fêtes</h2>
            <p>Les moments forts de l'année religieuse et nationale.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {holidays.map((h, i) => (
              <div key={i} className="info-card" style={{ padding: '20px' }}>
                <div className="feature-icon gold" style={{ margin: '0 auto 12px', width: 'fit-content' }}>{'\u{1F389}'}</div>
                <h3 style={{ textAlign: 'center', fontSize: '1rem' }}>{h.name}</h3>
                <span className={`badge ${h.type === 'Religieuse' ? 'badge-blue' : 'badge-green'}`} style={{ margin: '8px auto', display: 'block', width: 'fit-content' }}>{h.type}</span>
                <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>{h.description}</p>
                <p style={{ marginTop: 8, fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>{h.month}</p>
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
