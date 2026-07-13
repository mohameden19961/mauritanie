import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';

const crafts = [
  {
    name: 'Tissage des tapis maures',
    category: 'Textile',
    desc: 'Les tapis « hanib » sont tissés à la main par les femmes maures, avec des motifs géométriques ancestraux.',
    detail: 'Le tissage des tapis est une tradition exclusivement féminine en Mauritanie. Les tissages « hanib » utilisent la laine des chèvres et des moutons locaux, teinte avec des pigments naturels. Les motifs — losanges, zigzags, losanges croisés — portent des significations symboliques liées à la protection, la fertilité et l\'identité tribale. Un seul tapis peut prendre plusieurs mois de travail.',
    color: 'green'
  },
  {
    name: 'Bijoux en argent et ambre',
    category: 'Bijouterie',
    desc: 'Les artisans de Nouakchott et de Chinguetti créent des pièces en argent ciselé ornées d\'ambre et de corail.',
    detail: 'La bijouterie mauritanienne, héritière des traditions berbères et maures, est reconnue pour ses pièces en argent massif. Les colliers, bracelets et bagues sont ornés d\'ambre jaune (« karf »), de corail rouge et de pierres semi-précieuses. Les femmes maures portent ces bijoux lors des cérémonies et des mariages, et ils constituent un élément essentiel de la dot traditionnelle.',
    color: 'blue'
  },
  {
    name: 'Poterie traditionnelle',
    category: 'Céramique',
    desc: 'Les potières du sud façonnent des canaris, des jarres et des marmites en terre cuite.',
    detail: 'La poterie mauritanienne se distingue par sa rusticité et ses formes fonctionnelles. Les potières des régions du sud — Gorgol, Guidimaka, Brakna — utilisent des techniques transmises de mère en fille. Les canaris à eau (« darba »), les jarres à mil et les marmites de cuisson sont décorés de motifs géométriques incisés et peints.',
    color: 'gold'
  },
  {
    name: 'Maroquinerie nomade',
    category: 'Cuir',
    desc: 'Sacs, sandales et accessoires en cuir tanné artisanalement, décorés de motifs traditionnels.',
    detail: 'Le cuir est une matière première essentielle de l\'artisanat nomade. Les sacs à dos maures (« tara »), les sandales en cuir et les brides de dromadaires sont façonnés avec des outils simples mais une grande habileté. Le tannage utilise des tanins naturels d\'écorces d\'acacia. Les découpes et incisions créent des motifs géométriques qui identifient l\'origine tribale.',
    color: 'green'
  },
  {
    name: 'Bois sculpté',
    category: 'Sculpture',
    desc: 'Pilons, planches à pain et mobilier en bois de tamaris et d\'acacia sculpté à la main.',
    detail: 'Le bois est une ressource rare en Mauritanie, ce qui rend la sculpture d\'autant plus précieuse. Les artisans travaillent principalement le tamaris, l\'acacia et le jujubier pour créer des objets du quotidien : pilons à mil, planches à pâte, tabourets et coffres. Les motifs sculptés reprennent les symboles géométriques présents dans la tapisserie et l\'architecture.',
    color: 'blue'
  },
  {
    name: 'Vannerie et objets en fibres',
    category: 'Fibres',
    desc: 'Paniers, nattes et chapeaux tissés à partir de fibres de palmier et d\'alfa.',
    detail: 'La vannerie est un artisanat omniprésent en Mauritanie, particulièrement dans les oasis de l\'Adrar et les zones sahéliennes. Les fibres de palmier-dattier, d\'alfa et de roseau sont transformées en paniers (« ghaba »), nattes, chapeaux et cages à oiseaux. La technique de tissage varie selon les régions, créant des motifs distinctifs.',
    color: 'gold'
  }
];

export default function Artisanat() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc] = useState('');

  return (
    <>
      <Header />

      <PageHeader
        title="Artisanat"
        description="L'artisanat mauritanien est le reflet d'un héritage culturel millénaire : tapisseries maures, bijoux en argent, poteries et objets nomades, chaque pièce raconte une histoire."
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Les métiers de l'artisanat</h2>
            <p>Un savoir-faire transmis de génération en génération.</p>
          </div>
          <div className="cards-grid">
            {crafts.map((craft, i) => (
              <div key={i} className="info-card">
                <div className={`feature-icon ${craft.color}`} style={{ margin: '0 0 16px' }}>{'{ }\uFE0F'}</div>
                <span className={`badge ${craft.color === 'green' ? 'badge-green' : craft.color === 'blue' ? 'badge-blue' : 'badge-gold'}`}>{craft.category}</span>
                <h3 style={{ marginTop: 12 }}>{craft.name}</h3>
                <p style={{ marginTop: 8 }}>{craft.desc}</p>
                <details style={{ marginTop: 8 }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.9rem', color: 'var(--accent)' }}>En savoir plus</summary>
                  <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{craft.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Les marchés artisanaux</h2>
            <p>Où trouver les trésors de l'artisanat mauritanien.</p>
          </div>
          <div className="two-col">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Le Grand Marché de Nouakchott est le cœur battant de l'artisanat mauritanien. Ses allées étroites regorgent de bijoux en argent, de tapis tissés à la main, de poteries colorées et de cuirs odorants. Les artisans viennent de tout le pays pour vendre leurs créations. À Nouadhibou, le marché aux poissons est accompagné d'un quartier artisanal spécialisé dans la maroquinerie et la bijouterie. Dans l'Adrar, les oasis de Chinguetti et d'Atar accueillent des foires artisanales où les tapis maures et les objets en bois sculpté sont reines.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&fit=crop"
                alt="Marché artisanal"
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
