import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=450&fit=crop', title: 'Désert du Sahara' },
  { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=450&fit=crop', title: 'Architecture traditionnelle' },
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=450&fit=crop', title: 'Côte Atlantique' },
  { src: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&h=450&fit=crop', title: 'Oasis de l\'Adrar' },
  { src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=450&fit=crop', title: 'Structure de Richat' },
  { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=450&fit=crop', title: 'Caravane de chameaux' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop', title: 'Nuit étoilée saharienne' },
  { src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=450&fit=crop', title: 'Vallée du fleuve Sénégal' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=450&fit=crop', title: 'Nouakchott, la capitale' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState('');
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxIsOpen(true);
  };

  return (
    <>
      <Header />

      <PageHeader
        title="Galerie"
        description="Plongez dans l'âme mauritanienne à travers ces images captivantes : déserts infinis, cités millénaires, côtes sauvages et traditions vivantes."
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{ cursor: 'pointer' }}
                onClick={() => openLightbox(item.src)}
              >
                <img src={item.src} alt={item.title} />
                <div className="overlay">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxIsOpen} imageSrc={selectedImage} onClose={() => setLightboxIsOpen(false)} />
    </>
  );
}
