import { useState } from 'react';
import { MAURITANIA } from '../types/data';
import type { TourismEntry } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';

export default function Tourism() {
  const [selectedTourismItem, setSelectedTourismItem] = useState<TourismEntry | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openDetail = (item: TourismEntry) => {
    setSelectedTourismItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTimeout(() => setSelectedTourismItem(null), 300);
  };

  return (
    <>
      <Header />

      <PageHeader
        title="Destinations Touristiques"
        description="Des cités anciennes aux parcs naturels classés UNESCO, explorez les trésors de la Mauritanie."
        breadcrumbItems={[{ label: 'Tourisme' }]}
      />

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {MAURITANIA.tourism.map((item, i) => (
              <div
                key={i}
                className="info-card"
                style={{ padding: 0, cursor: 'pointer' }}
                onClick={() => openDetail(item)}
              >
                <img
                  src={item.image + '&fit=crop'}
                  alt={item.name}
                  style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}
                />
                <div style={{ padding: 20 }}>
                  <span className="badge badge-green">{item.location}</span>
                  <h3 style={{ fontFamily: 'var(--ff-sans)', fontSize: '1.1rem', margin: '12px 0 8px' }}>{item.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalIsOpen && selectedTourismItem && (
        <div
          className="detail-modal open"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="detail-modal-content">
            <button className="detail-modal-close" onClick={closeModal}>&times;</button>
            <div className="detail-modal-body">
              <div className="dm-img">
                <img src={selectedTourismItem.image} alt={selectedTourismItem.name} />
              </div>
              <div className="dm-badge">{selectedTourismItem.type}</div>
              <div className="dm-stars">
                {Array.from({ length: selectedTourismItem.rating }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <h2>{selectedTourismItem.name}</h2>
              <div className="dm-desc">{selectedTourismItem.desc}</div>
              <div className="dm-detail">{selectedTourismItem.detail}</div>
              <p style={{ marginTop: 16, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <strong>Meilleure période :</strong> {selectedTourismItem.bestTime}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
    </>
  );
}