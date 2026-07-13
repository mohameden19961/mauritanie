import { useState, useRef } from 'react';
import { MAURITANIA } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';
import Swal from 'sweetalert2';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const contactItems = [
  { icon: '\u{1F3E0}', iconClass: 'gold', label: 'Adresse', value: MAURITANIA.contact.address },
  { icon: '\u{1F4DE}', iconClass: 'green', label: 'Téléphone', value: MAURITANIA.contact.phone },
  { icon: '\u{2709}\u{FE0F}', iconClass: 'blue', label: 'Email', value: MAURITANIA.contact.email },
  { icon: '\u{1F310}', iconClass: 'blue', label: 'Site Web', value: MAURITANIA.contact.website },
];

function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mapRef.current) return;
    const map = L.map(mapRef.current, { center: [18.09, -15.98], zoom: 13, scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(map);
    const icon = L.divIcon({
      html: '<div style="width:20px;height:20px;background:#0d8a3c;border-radius:50%;border:3px solid white;box-shadow:0 0 10px rgba(0,0,0,0.3)"></div>',
      className: '', iconSize: [20, 20], iconAnchor: [10, 10],
    });
    L.marker([18.09, -15.98], { icon }).addTo(map).bindPopup('<b>Nouakchott, Mauritanie</b><br>BP 184');
    setTimeout(() => map.invalidateSize(), 300);
    return () => { map.remove(); };
  }, []);
  return <div ref={mapRef} style={{ width: '100%', height: 400, borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} />;
}

export default function Contact() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: 'Message envoyé !',
      html: `<p>Merci <b>${formData.name}</b> pour votre message.</p><p>Nous vous répondrons à <b>${formData.email}</b> dans les plus brefs délais.</p>`,
      icon: 'success',
      confirmButtonColor: '#0d8a3c',
      confirmButtonText: 'Parfait !',
      background: 'var(--card-bg)',
      color: 'var(--text)',
      customClass: { popup: 'swal-popup' },
    }).then(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    });
  };

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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text" id="name" name="name" className="form-control" placeholder="Votre nom" required
                    value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Adresse email</label>
                  <input
                    type="email" id="email" name="email" className="form-control" placeholder="votre@email.com" required
                    value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select
                    id="subject" name="subject" className="form-control" required
                    value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="tourisme">Tourisme</option>
                    <option value="culture">Culture</option>
                    <option value="investissement">Investissement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" className="form-control" placeholder="Votre message..." required
                    value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  ></textarea>
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
          <ContactMap />
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxSrc} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
