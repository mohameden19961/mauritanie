import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const indicators = [
  { label: 'Taux d\'alphabétisation', value: '52%', trend: '↑ en hausse', color: 'green' },
  { label: 'Scolarisation primaire', value: '78%', trend: '↑ en hausse', color: 'blue' },
  { label: 'Ratio élèves/enseignant', value: '35:1', trend: '→ stable', color: 'gold' },
  { label: 'Dépenses éducation (% PIB)', value: '3,5%', trend: '↑ en hausse', color: 'green' },
  { label: 'Écoles primaires', value: '2 650+', trend: '↑ en hausse', color: 'blue' },
  { label: 'Universités', value: '8', trend: '↑ en hausse', color: 'gold' },
];

const challenges = [
  {
    title: 'Alphabétisation',
    desc: 'Le taux d\'alphabétisation de 52% cache de fortes disparités : 69% chez les hommes contre 36% chez les femmes, et 67% en milieu urbain contre 33% en milieu rural.',
    detail: 'L\'écart d\'alphabétisation entre hommes et femmes reste préoccupant. Les efforts gouvernementaux se concentrent sur les programmes d\'alphabétisation pour adultes, les écoles coraniques modernisées et l\'éducation des filles en zones rurales.',
    icon: '\u{1F4DA}'
  },
  {
    title: 'Accès à l\'éducation',
    desc: 'Les zones rurales et nomades font face à un manque criant d\'infrastructures scolaires et d\'enseignants qualifiés.',
    detail: 'La Mauritanie a adopté une politique d\'éducation nomade pour les enfants des éleveurs, avec des écoles itinérantes et des programmes d\'enseignement à distance. Le défi reste d\'assurer la continuité de la scolarisation dans un paysage géographique aussi vaste.',
    icon: '\u{1F3EB}'
  },
  {
    title: 'Éducation des filles',
    desc: 'Les taux de scolarisation et d\'achèvement sont significativement plus bas pour les filles, surtout au-delà du primaire.',
    detail: 'Plusieurs facteurs freinent l\'éducation des filles : les mariages précoces, les distances à parcourir, les normes sociales et le manque d\'infrastructures adaptées. Des programmes spécifiques, comme les écoles de filles et les bourses d\'études, tentent de réduire cet écart.',
    icon: '\u{1F467}'
  }
];

const universities = [
  { name: 'Université de Nouakchott', city: 'Nouakchott', founded: 1981, specialties: 'Sciences, Lettres, Droit, Médecine', students: '15 000+' },
  { name: 'Université de Nouakchott Al Aasriya', city: 'Nouakchott', founded: 2016, specialties: 'Sciences et Technologies, Gestion', students: '8 000+' },
  { name: 'Université de Nouadhibou', city: 'Nouadhibou', founded: 2017, specialties: 'Pêche, Océanographie, Commerce', students: '4 000+' },
  { name: 'Université de Kaédi', city: 'Kaédi', founded: 2018, specialties: 'Agriculture, Développement rural', students: '2 500+' },
  { name: 'Université de Néma', city: 'Néma', founded: 2019, specialties: 'Élevage, Commerce local', students: '1 800+' },
  { name: 'Université des Sciences Islamiques', city: 'Nouakchott', founded: 1974, specialties: 'Théologie, Charia, Arabe', students: '3 000+' },
];

export default function Education() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Éducation"
        description="L'éducation en Mauritanie est en pleine transformation, entre héritage des écoles coraniques et modernisation du système scolaire."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Indicateurs clés</h2>
            <p>État des lieux du système éducatif mauritanien.</p>
          </div>
          <div className="stats-grid">
            {indicators.map((ind, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{ind.value}</div>
                <div className="stat-label">{ind.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: 4 }}>{ind.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Défis et enjeux</h2>
            <p>Les obstacles à surmonter pour une éducation pour tous.</p>
          </div>
          <div className="cards-grid">
            {challenges.map((ch, i) => (
              <div key={i} className="info-card">
                <div className={`feature-icon ${i % 2 === 0 ? 'green' : 'blue'}`} style={{ margin: '0 0 16px' }}>{ch.icon}</div>
                <h3>{ch.title}</h3>
                <p style={{ marginTop: 8 }}>{ch.desc}</p>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{ch.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Universités du pays</h2>
            <p>Le réseau universitaire mauritanien en pleine expansion.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {universities.map((uni, i) => (
              <div key={i} className="info-card">
                <div className="feature-icon green" style={{ margin: '0 0 16px' }}>{'\u{1F3EB}'}</div>
                <h3>{uni.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: 4 }}>{uni.city} · Fondée en {uni.founded}</p>
                <p style={{ marginTop: 8 }}>{uni.specialties}</p>
                <div style={{ marginTop: 8, fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)' }}>{uni.students} étudiants</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Éducation coranique</h2>
            <p>Le fondement historique de l'apprentissage en Mauritanie.</p>
          </div>
          <div className="two-col">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                L'éducation coranique est la base historique de l'enseignement en Mauritanie. Les écoles coraniques (« mahadras ») ont formé des générations de lettrés dans les cités saintes de Chinguetti, Ouadane, Tichitt et Oualata. Les maîtres coraniques (« moualim ») enseignent la lecture du Coran, la grammaire arabe, le droit islamique et la logique. Aujourd'hui, le système éducatif modern cherche à intégrer les meilleures pratiques de l'enseignement coranique dans le cursus scolaire national.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&fit=crop"
                alt="Éducation coranique"
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
