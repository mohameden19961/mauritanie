import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BackToTop from '../components/BackToTop';
import Lightbox from '../components/Lightbox';
import * as fabric from 'fabric';
import Swal from 'sweetalert2';

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

function PatternEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const [tool, setTool] = useState<'rect' | 'circle' | 'line' | 'diamond' | 'zigzag'>('rect');
  const [color, setColor] = useState('#0d8a3c');

  const colors = ['#0d8a3c', '#1a73e8', '#d4af37', '#8B4513', '#2e8b57', '#cd853f', '#dc143c', '#4a4a4a', '#ffffff'];

  useEffect(() => {
    if (!canvasRef.current || fabricRef.current) return;
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: '#f5f0e8',
    });
    fabricRef.current = canvas;

    const drawBasePattern = () => {
      for (let x = 0; x < 600; x += 60) {
        canvas.add(new fabric.Line([x, 0, x, 400], { stroke: '#d4c5a0', strokeWidth: 0.5, selectable: false }));
      }
      for (let y = 0; y < 400; y += 60) {
        canvas.add(new fabric.Line([0, y, 600, y], { stroke: '#d4c5a0', strokeWidth: 0.5, selectable: false }));
      }
      const border = new fabric.Rect({
        left: 15, top: 15, width: 570, height: 370,
        fill: 'transparent', stroke: '#8B4513', strokeWidth: 3, selectable: false,
      });
      canvas.add(border);
    };
    drawBasePattern();

    return () => { canvas.dispose(); fabricRef.current = null; };
  }, []);

  const addObject = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const cx = 300, cy = 200;
    let obj: fabric.Object;

    switch (tool) {
      case 'rect':
        obj = new fabric.Rect({ left: cx - 40, top: cy - 25, width: 80, height: 50, fill: 'transparent', stroke: color, strokeWidth: 2, angle: 0 });
        break;
      case 'circle':
        obj = new fabric.Circle({ left: cx - 30, top: cy - 30, radius: 30, fill: 'transparent', stroke: color, strokeWidth: 2 });
        break;
      case 'line':
        obj = new fabric.Line([cx - 50, cy, cx + 50, cy], { stroke: color, strokeWidth: 2 });
        break;
      case 'diamond': {
        const pts = [{ x: cx, y: cy - 35 }, { x: cx + 45, y: cy }, { x: cx, y: cy + 35 }, { x: cx - 45, y: cy }];
        obj = new fabric.Polygon(pts, { fill: 'transparent', stroke: color, strokeWidth: 2 });
        break;
      }
      case 'zigzag': {
        const zigPts: { x: number; y: number }[] = [];
        for (let i = 0; i <= 6; i++) {
          zigPts.push({ x: cx - 90 + i * 30, y: cy + (i % 2 === 0 ? -20 : 20) });
        }
        obj = new fabric.Polyline(zigPts, { fill: 'transparent', stroke: color, strokeWidth: 2 });
        break;
      }
      default:
        return;
    }
    canvas.add(obj);
    canvas.setActiveObject(obj);
    canvas.renderAll();
  };

  const duplicatePattern = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const json = canvas.toJSON();
    const objects = json.objects || [];
    objects.forEach((obj: Record<string, unknown>) => {
      obj.left = ((obj.left as number) || 0) + 600;
      obj.top = ((obj.top as number) || 0) + 400;
    });
    canvas.loadFromJSON({ version: json.version, objects }, () => {
      canvas.renderAll();
    });
    Swal.fire({
      title: 'Motif dupliqué !',
      text: 'Le motif a été répété pour créer un effet de tissage.',
      icon: 'info',
      confirmButtonColor: '#0d8a3c',
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const clearCanvas = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    canvas.clear();
    canvas.backgroundColor = '#f5f0e8';
    for (let x = 0; x < 600; x += 60) {
      canvas.add(new fabric.Line([x, 0, x, 400], { stroke: '#d4c5a0', strokeWidth: 0.5, selectable: false }));
    }
    for (let y = 0; y < 400; y += 60) {
      canvas.add(new fabric.Line([0, y, 600, y], { stroke: '#d4c5a0', strokeWidth: 0.5, selectable: false }));
    }
    canvas.add(new fabric.Rect({
      left: 15, top: 15, width: 570, height: 370,
      fill: 'transparent', stroke: '#8B4513', strokeWidth: 3, selectable: false,
    }));
    canvas.renderAll();
  };

  const exportCanvas = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const dataURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'motif-mauritanien.png';
    link.href = dataURL;
    link.click();
  };

  return (
    <div style={{ marginTop: 16 }}>
      <div className="card" style={{ padding: 20, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Forme :</span>
          {(['rect', 'circle', 'line', 'diamond', 'zigzag'] as const).map(t => (
            <button key={t} onClick={() => setTool(t)} className={`btn ${tool === t ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              {t === 'rect' ? '矩形' : t === 'circle' ? 'Cercle' : t === 'line' ? 'Ligne' : t === 'diamond' ? 'Losange' : 'Zigzag'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Couleur :</span>
          {colors.map(c => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{
                width: 28, height: 28, borderRadius: '50%', border: color === c ? '3px solid #333' : '2px solid #ccc',
                background: c, cursor: 'pointer', transition: '0.2s',
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button onClick={addObject} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Ajouter</button>
          <button onClick={duplicatePattern} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Répéter le motif</button>
          <button onClick={clearCanvas} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Effacer</button>
          <button onClick={exportCanvas} className="btn btn-accent" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Télécharger PNG</button>
        </div>
      </div>
      <div style={{ overflow: 'auto', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)' }}>
        <canvas ref={canvasRef} />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 8, textAlign: 'center' }}>
        Cliquez sur un objet pour le déplacer, redimensionner ou tourner. Glissez pour créer des motifs traditionnels mauritaniens.
      </p>
    </div>
  );
}

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
            <h2>Créez votre motif traditionnel</h2>
            <p>Utilisez cet éditeur interactif pour créer des motifs inspirés de l'artisanat mauritanien.</p>
          </div>
          <PatternEditor />
        </div>
      </section>

      <section className="section">
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
