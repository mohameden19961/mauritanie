import { useState } from 'react';
import { MAURITANIA } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const govFields = [
  { label: 'Type de régime', key: 'type' as const },
  { label: 'Président', key: 'president' as const },
  { label: 'Premier ministre', key: 'premier' as const },
  { label: 'Constitution', key: 'constitution' as const },
  { label: 'Capitale', key: 'capital' as const },
  { label: 'Subdivisions', key: 'subdivisions' as const },
  { label: 'Indépendance', key: 'independance' as const },
];

const timelineEvents = [
  { year: '1960', title: 'Indépendance', desc: 'Proclamation de l\'indépendance le 28 novembre 1960 sous la présidence de Mokhtar Ould Daddah.' },
  { year: '1978', title: 'Premier coup d\'État', desc: 'Un coup d\'État militaire renverse Mokhtar Ould Daddah après la guerre du Sahara.' },
  { year: '1991', title: 'Nouvelle Constitution', desc: 'Adoption de la Constitution du 20 juillet 1991 instaurant le multipartisme.' },
  { year: '2019', title: 'Transition pacifique', desc: 'Première transition pacifique du pouvoir avec l\'élection de Mohamed Ould Cheikh El Ghazouani.' },
  { year: '2024', title: 'Réélection', desc: 'Réélection de Mohamed Ould Cheikh El Ghazouani pour un second mandat.' },
];

const presidents = [
  { name: 'Mokhtar Ould Daddah', period: '1960 - 1978', notes: 'Premier président, père de l\'indépendance' },
  { name: 'Mohamed Khouna Ould Haidalla', period: '1980 - 1984', notes: 'Chef d\'État militaire' },
  { name: 'Maaouiya Ould Sid\'Ahmed Taya', period: '1984 - 2005', notes: 'Long règne de 21 ans' },
  { name: 'Ely Ould Mohamed Vall', period: '2005 - 2007', notes: 'Président de transition' },
  { name: 'Sidi Ould Cheikh Abdallahi', period: '2007 - 2008', notes: 'Premier président élu démocratiquement' },
  { name: 'Mohamed Ould Abdel Aziz', period: '2008 - 2019', notes: 'Arrivé au pouvoir par un coup d\'État' },
  { name: 'Mohamed Ould Cheikh El Ghazouani', period: '2019 - présent', notes: 'Président actuel, réélu en 2024' },
];

const structureCards = [
  { icon: '\u{1F3DB}\u{FE0F}', title: 'Pouvoir exécutif', desc: 'Le président est le chef de l\'État. Il nomme le Premier ministre et le gouvernement. Le mandat présidentiel est de 5 ans, renouvelable une fois.' },
  { icon: '\u{1F3DB}\u{FE0F}', title: 'Pouvoir législatif', desc: 'Le parlement bicaméral comprend l\'Assemblée nationale (157 députés) et le Sénat. Il vote les lois et contrôle l\'action du gouvernement.' },
  { icon: '\u{1F3DB}\u{FE0F}', title: 'Pouvoir judiciaire', desc: 'La Cour suprême est la plus haute juridiction. La charia est une source du droit, et les tribunaux islamiques traitent des affaires personnelles.' },
];

const faqItems = [
  { q: 'Quel est le régime politique de la Mauritanie ?', a: 'La Mauritanie est une république islamique semi-présidentielle. Le président partage le pouvoir exécutif avec le Premier ministre et le gouvernement.' },
  { q: 'Comment est élu le président ?', a: 'Le président est élu au suffrage universel direct pour un mandat de 5 ans, renouvelable une seule fois depuis la réforme constitutionnelle.' },
  { q: 'Quel est le rôle du Parlement ?', a: 'Le Parlement vote les lois et contrôle le gouvernement. Il est composé de l\'Assemblée nationale (157 députés) et du Sénat. La dernière élection législative a eu lieu en 2023.' },
  { q: 'Quelles sont les principales institutions ?', a: 'Les principales institutions sont la Présidence, le Parlement, la Cour suprême, le Haut Conseil d\'État et le Conseil constitutionnel.' },
];

export default function Government() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      <PageHeader
        title="Gouvernement & Politique"
        description="La République Islamique de Mauritanie est un État semi-présidentiel où le président et le parlement partagent le pouvoir exécutif et législatif."
      />

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {govFields.map((field) => (
              <div key={field.key} className="info-card">
                <h3>{field.label}</h3>
                <p>{MAURITANIA.government[field.key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <h2 style={{ marginBottom: 16 }}>Système politique</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>La Mauritanie est une république islamique dont le système politique repose sur la Constitution du 20 juillet 1991. Le président de la République, élu au suffrage universel direct pour un mandat de cinq ans renouvelable une fois, est le chef de l'État et dispose de pouvoirs exécutifs étendus. Il nomme le Premier ministre et le gouvernement.</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>Le parlement est bicaméral, composé de l'Assemblée nationale (157 députés élus pour 5 ans) et du Sénat (supprimé en 2017 puis rétabli). Le pouvoir judiciaire est indépendant, avec la Cour suprême comme plus haute juridiction. L'islam est la religion d'État, et la charia est une source du droit.</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>Depuis l'indépendance en 1960, le pays a connu plusieurs régimes militaires et des transitions démocratiques. L'élection de 2019 a marqué la première transition pacifique du pouvoir, avec l'élection de Mohamed Ould Cheikh El Ghazouani, réélu en 2024.</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&fit=crop"
                alt="Assemblée parlementaire"
                style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', aspectRatio: '4/3', objectFit: 'cover', border: '1px solid var(--glass-border)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Chronologie politique</h2>
            <p>Les événements marquants de l'histoire politique de la Mauritanie.</p>
          </div>
          <div className="timeline">
            {timelineEvents.map((event, i) => (
              <div key={i} className="info-card timeline-item">
                <div className="timeline-year">{event.year}</div>
                <h3>{event.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Liste des présidents</h2>
            <p>Les chefs d'État de la Mauritanie depuis l'indépendance.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--card-bg)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <thead>
                <tr style={{ background: 'var(--primary)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Président</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Période</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {presidents.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '10px 16px', fontWeight: 600 }}>{p.name}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--text-secondary)' }}>{p.period}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--text-secondary)' }}>{p.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Structure politique</h2>
            <p>Les trois pouvoirs qui constituent l'État mauritanien.</p>
          </div>
          <div className="cards-grid">
            {structureCards.map((card, i) => (
              <div key={i} className="info-card">
                <div className="feature-icon gold" style={{ margin: '0 0 16px', fontSize: '1.5rem' }}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Questions fréquentes</h2>
            <p>Réponses aux questions les plus posées sur le gouvernement mauritanien.</p>
          </div>
          <div className="accordion" style={{ maxWidth: 700, margin: '0 auto' }}>
            {faqItems.map((item, i) => (
              <div key={i} className="accordion-item">
                <button
                  className="accordion-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  <span className="arrow">{'\u25BC'}</span>
                </button>
                <div
                  className="accordion-panel"
                  style={{ display: openFaq === i ? 'block' : 'none' }}
                >
                  <div className="accordion-panel-inner">{item.a}</div>
                </div>
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
