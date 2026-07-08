import { useState } from 'react';
import { MAURITANIA } from '../types/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const badgeClass = (type: string) => {
  if (type === 'Plat principal') return 'badge-green';
  if (type === 'Dessert') return 'badge-blue';
  if (type === 'Boisson') return 'badge-gold';
  return 'badge-green';
};

export default function Cuisine() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Cuisine"
        description="La cuisine mauritanienne est un métissage de saveurs africaines, arabes et berbères. Entre plats en sauce, pâtisseries au miel et le fameux thé à la menthe, elle raconte l'histoire d'un peuple fier et hospitalier."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Plats et traditions culinaires</h2>
            <p>Découvrez les mets qui font la richesse gastronomique de la Mauritanie.</p>
          </div>
          <div className="cards-grid">
            {MAURITANIA.cuisine.map((item, i) => (
              <div key={i} className="info-card">
                <figure style={{ margin: '0 0 18px' }}>
                  <img className="card-image" src={item.image} alt={item.name} />
                </figure>
                <h3>{item.name}</h3>
                <span className={`badge ${badgeClass(item.type)}`}>{item.type}</span>
                <p style={{ marginTop: 12 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>La cérémonie du thé</h2>
            <p>Un art de vivre mauritanien</p>
          </div>
          <div className="two-col">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                La cérémonie du thé en Mauritanie est bien plus qu'une simple préparation. C'est un rituel social incontournable qui symbolise l'hospitalité et l'amitié. Le thé à la menthe se prépare dans une théière traditionnelle et se sert en trois verres successifs : le premier est fort comme la mort, le deuxième est doux comme la vie, le troisième est parfumé comme l'amour. Chaque verre est partagé entre les convives, créant des moments de convivialité et d'échange.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&fit=crop"
                alt="Thé à la menthe"
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
