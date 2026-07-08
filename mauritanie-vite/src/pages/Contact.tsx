import { useState } from 'react';
import { MAURITANIA } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const contactItems = [
  { icon: '\u{1F3E0}', iconClass: 'gold', label: 'Adresse', value: MAURITANIA.contact.address },
  { icon: '\u{1F4DE}', iconClass: 'green', label: 'Téléphone', value: MAURITANIA.contact.phone },
  { icon: '\u{2709}\u{FE0F}', iconClass: 'blue', label: 'Email', value: MAURITANIA.contact.email },
  { icon: '\u{1F310}', iconClass: 'blue', label: 'Site Web', value: MAURITANIA.contact.website },
];

export default function Contact() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Contact"
        description="Vous souhaitez en savoir plus sur la Mauritanie ? Contactez-nous et notre équipe vous répondra dans les plus brefs délais."
      />

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2 style={{ marginBottom: 24 }}>Nos coordonnées</h2>
              <div className="contact-info">
                {contactItems.map((item, i) => (
                  <div key={i} className="contact-item">
                    <div className={`contact-icon ${item.iconClass}`}>{item.icon}</div>
                    <div>
                      <h4>{item.label}</h4>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: 24 }}>Envoyez-nous un message</h2>
              <form method="POST" action="#">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Adresse email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="votre@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" name="subject" className="form-control" required>
                    <option value="">Choisissez un sujet</option>
                    <option value="tourisme">Tourisme</option>
                    <option value="culture">Culture</option>
                    <option value="investissement">Investissement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Votre message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer le message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt reveal">
        <div className="container">
          <div className="section-title">
            <h2>Notre emplacement</h2>
            <p>Retrouvez-nous à Nouakchott, la capitale mauritanienne.</p>
          </div>
          <div
            style={{
              width: '100%',
              height: 400,
              borderRadius: 'var(--radius-md)',
              background: 'var(--card-bg)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
            }}
          >
            Carte interactive - Nouakchott, Mauritanie
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxSrc} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
