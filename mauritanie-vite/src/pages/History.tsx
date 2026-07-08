import { useState } from 'react';
import { MAURITANIA } from '../types/data';
import type { HistoryEntry } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

export default function History() {
  const [selected, setSelected] = useState<HistoryEntry | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  const defaultImg = 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop';

  return (
    <>
      <Header />

      <PageHeader
        title="Histoire de la Mauritanie"
        description="Voyage à travers les millénaires : des premières civilisations du Sahara à la République islamique moderne, la Mauritanie possède un patrimoine historique riche et fascinant."
      />

      <section className="section">
        <div className="container">
          <div className="timeline">
            {MAURITANIA.history.map((item, i) => (
              <div
                key={i}
                className="info-card timeline-item"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelected(item)}
              >
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="detail-modal open"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <div className="detail-modal-content">
            <button className="detail-modal-close" onClick={() => setSelected(null)}>&times;</button>
            <div className="detail-modal-body">
              <div className="dm-img">
                <img src={defaultImg} alt={selected.title} />
              </div>
              <div className="dm-badge">{selected.year}</div>
              <h2>{selected.title}</h2>
              <div className="dm-desc">{selected.desc}</div>
              <div className="dm-detail">{selected.detail}</div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxSrc} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
