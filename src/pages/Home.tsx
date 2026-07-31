import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
import SearchBox from '../components/SearchBox';
import Lightbox from '../components/Lightbox';
import BackToTop from '../components/BackToTop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { useI18n } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: '1 030 700 km²', label: 'Superficie', icon: '🌍', num: 1030700, suffix: ' km²' },
  { value: '4,62 millions', label: 'Habitants', icon: '👥', num: 4.62, suffix: ' M', decimals: 2 },
  { value: '754 km', label: 'Côte Atlantique', icon: '🌊', num: 754, suffix: ' km' },
  { value: '1960', label: 'Indépendance', icon: '🇲🇷', num: 1960 },
];

const features = [
  { icon: '🏜️', iconClass: 'green', title: 'Désert du Sahara', desc: "Paysages lunaires, dunes majestueuses et l'impressionnant Œil du Sahara." },
  { icon: '🌊', iconClass: 'blue', title: "Banc d'Arguin", desc: 'Parc national classé UNESCO, paradis des oiseaux migrateurs.' },
  { icon: '🏛️', iconClass: 'gold', title: 'Cités anciennes', desc: "Chinguetti et Ouadane, joyaux architecturaux du siècle d'or maure." },
  { icon: '🍲', iconClass: 'green', title: 'Cuisine authentique', desc: 'Saveurs du thé à la menthe, thiéboudienne et méchoui traditionnel.' },
];

const testimonials = [
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face', name: 'Sophie L.', text: "Un voyage inoubliable au cœur du Sahara. Les paysages de l'Adrar sont à couper le souffle." },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face', name: 'Marc D.', text: "Le Parc du Banc d'Arguin est un paradis pour les amateurs d'ornithologie. Magnifique !" },
  { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face', name: 'Aïcha K.', text: 'L\'accueil des Mauritaniens est chaleureux. Le thé à la menthe est une expérience à part entière.' },
];

const newPages = [
  { to: '/faune', icon: '🦎', title: 'Faune & Flore', desc: 'Espèces emblématiques du Sahara et du Sahel.', color: 'green' },
  { to: '/langues', icon: '🗣️', title: 'Langues & Culture', desc: 'Cinq langues, cinq univers culturels.', color: 'blue' },
  { to: '/artisanat', icon: '🧶', title: 'Artisanat', desc: 'Tapis maures, bijoux en argent, poteries.', color: 'gold' },
  { to: '/musique', icon: '🎵', title: 'Musique & Danse', desc: 'Instruments traditionnels et griots.', color: 'green' },
  { to: '/education', icon: '📚', title: 'Éducation', desc: 'Écoles coraniques, universités et défis.', color: 'blue' },
  { to: '/transport', icon: '🚂', title: 'Transport', desc: 'Train des sables, routes et aéroports.', color: 'gold' },
  { to: '/religion', icon: '🕌', title: 'Religion & Traditions', desc: 'Islam, confréries soufies et fêtes.', color: 'green' },
  { to: '/sports', icon: '⚽', title: 'Sports', desc: 'Football, lutte et courses de dromadaires.', color: 'blue' },
];

const historyCards = [
  { icon: '🏛️', year: '1076', label: 'Empire almoravide' },
  { icon: '🇲🇷', year: '1960', label: 'Indépendance' },
  { icon: '🌍', year: '1989', label: "UNESCO Banc d'Arguin" },
  { icon: '🎓', year: '2019', label: 'Transition démocratique' },
];

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, outer: number, inner: number) {
  const spikes = 5;
  const step = Math.PI / spikes;
  let rot = -Math.PI / 2;
  ctx.beginPath();
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outer, cy + Math.sin(rot) * outer);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * inner, cy + Math.sin(rot) * inner);
    rot += step;
  }
  ctx.closePath();
  ctx.fill();
}

function drawFlagEmblem(ctx: CanvasRenderingContext2D, cx: number) {
  ctx.fillStyle = '#F5C518';
  ctx.beginPath();
  ctx.arc(cx, 270, 85, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#0D8A3C';
  ctx.beginPath();
  ctx.arc(cx, 236, 62, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#F5C518';
  drawStar(ctx, cx, 198, 24, 10);
}

function createFlagTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#0D8A3C';
  ctx.fillRect(0, 0, 1024, 512);

  ctx.fillStyle = '#D32F2F';
  ctx.fillRect(0, 0, 1024, 110);
  ctx.fillRect(0, 402, 1024, 110);

  drawFlagEmblem(ctx, 256);
  drawFlagEmblem(ctx, 768);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  return texture;
}

function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const w = 280, h = 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const geo = new THREE.SphereGeometry(1.2, 64, 64);
    const mat = new THREE.MeshPhongMaterial({
      map: createFlagTexture(),
      shininess: 30,
    });
    const globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    const wireGeo = new THREE.SphereGeometry(1.22, 32, 32);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.08 });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wire);

    const spotGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const spotMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
    const spot = new THREE.Mesh(spotGeo, spotMat);
    const phi = (90 - 18.07) * (Math.PI / 180);
    const theta = (-15.96) * (Math.PI / 180);
    spot.position.set(
      -1.22 * Math.sin(phi) * Math.cos(theta),
      1.22 * Math.cos(phi),
      1.22 * Math.sin(phi) * Math.sin(theta)
    );
    scene.add(spot);

    const ambLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      wire.rotation.y += 0.003;
      spot.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: 280, height: 280, margin: '0 auto' }} />;
}

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, _setLightboxSrc] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const newPagesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        const heroText = heroRef.current.querySelector('.hero-text');
        const heroGlobe = heroRef.current.querySelector('.hero-globe');
        if (heroText) {
          gsap.fromTo(heroText,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', clearProps: 'all' }
          );
        }
        if (heroGlobe) {
          gsap.fromTo(heroGlobe,
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out', clearProps: 'all' }
          );
        }
      }

      if (featuresRef.current) {
        const featureCards = featuresRef.current.querySelectorAll('.feature-card');
        if (featureCards.length) {
          gsap.fromTo(featureCards,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', clearProps: 'all',
              scrollTrigger: { trigger: featuresRef.current, start: 'top 85%', once: true }
            }
          );
        }
      }

      if (newPagesRef.current) {
        const newPageCards = newPagesRef.current.querySelectorAll('.feature-card');
        if (newPageCards.length) {
          gsap.fromTo(newPageCards,
            { scale: 0.85, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)', clearProps: 'all',
              scrollTrigger: { trigger: newPagesRef.current, start: 'top 85%', once: true }
            }
          );
        }
      }

      if (testimonialsRef.current) {
        const testimonialCards = testimonialsRef.current.querySelectorAll('.card');
        if (testimonialCards.length) {
          gsap.fromTo(testimonialCards,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power2.out', clearProps: 'all',
              scrollTrigger: { trigger: testimonialsRef.current, start: 'top 85%', once: true }
            }
          );
        }
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />

      <section className="hero" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">🇲🇷 {t('Le Trésor du Sahara')}</span>
              <h1>{t('Bienvenue en')} <span>{t('Mauritanie')}</span></h1>
              <p>{t("Explorez un pays aux mille visages : des dunes dorées du Sahara aux eaux poissonneuses de l'Atlantique, des cités anciennes aux marchés animés de Nouakchott.")}</p>
              <div className="hero-actions">
                <Link to="/tourism" className="btn btn-accent">{t('Explorer les destinations')}</Link>
                <Link to="/history" className="btn btn-outline-light">{t("Découvrir l'histoire")}</Link>
              </div>
            </div>
            <div className="hero-globe">
              <Globe />
            </div>
          </div>
        </div>
      </section>

      <section className="features" ref={featuresRef}>
        <div className="container">
          <div className="section-title">
            <h2>{t('Pourquoi visiter la Mauritanie ?')}</h2>
            <p>{t("Une destination unique où le désert rencontre l'océan, riche d'une histoire millénaire et de traditions vivantes.")}</p>
          </div>
          <div className="grid-4">
            {features.map((f, i) => (
              <div key={i} className="card feature-card">
                <div className={`feature-icon ${f.iconClass}`}>{f.icon}</div>
                <h3>{t(f.title)}</h3>
                <p>{t(f.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection stats={statsData} />

      <section className="section-alt" ref={newPagesRef}>
        <div className="container">
          <div className="section-title">
            <h2>{t('Explorer davantage')}</h2>
            <p>{t("Découvrez d'autres facettes de la Mauritanie à travers nos pages thématiques.")}</p>
          </div>
          <div className="grid-4">
            {newPages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="card feature-card"
                style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
              >
                <div className={`feature-icon ${p.color}`}>{p.icon}</div>
                <h3>{t(p.title)}</h3>
                <p>{t(p.desc)}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/pages" className="btn btn-secondary">{t('Voir toutes les pages')}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t('Une brève histoire')}</h2>
            <p>{t("Des empires anciens aux temps modernes, la Mauritanie est riche d'un passé fascinant.")}</p>
          </div>
          <div className="grid-2">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>{t("La Mauritanie est un carrefour de civilisations. Terre des Almoravides qui ont marqué l'histoire de l'Afrique du Nord et de l'Andalousie, elle a vu se succéder empires, émirats et colonisation. Depuis son indépendance en 1960, elle construit une nation moderne tout en préservant ses traditions ancestrales.")}</p>
              <Link to="/history" className="btn btn-primary" style={{ marginTop: 16 }}>{t('Voir la frise chronologique')}</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {historyCards.map((c, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: 20 }}>
                  <div style={{ fontSize: '2rem', marginBottom: 4 }}>{c.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{c.year}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t(c.label)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div
            className="card"
            style={{
              display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
              justifyContent: 'space-between', padding: '32px 36px',
              background: 'linear-gradient(135deg, rgba(13,138,60,0.10), rgba(212,168,67,0.14))',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1, minWidth: 260 }}>
              <div className="feature-icon gold" style={{ margin: 0, width: 64, height: 64, fontSize: '1.8rem' }}>{'\u{1F3B5}'}</div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 4 }}>{t("L'hymne national de la Mauritanie")}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t("Écoutez l'hymne « Nechid El Watani » et découvrez la section vidéos de la musique mauritanienne.")}</p>
              </div>
            </div>
            <Link to="/musique#videos" className="btn btn-accent" style={{ flexShrink: 0 }}>
              {t("Écouter l'hymne")} {'\u25B6'}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-alt" ref={testimonialsRef}>
        <div className="container">
          <div className="section-title">
            <h2>{t('Ce que disent les voyageurs')}</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((tm, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: 32 }}>
                <img
                  src={tm.img}
                  alt={tm.name}
                  style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', border: '3px solid var(--glass-border)' }}
                />
                <div style={{ fontSize: '2rem', marginBottom: 8, color: 'var(--accent)', lineHeight: 1 }}>"</div>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 16 }}>{t(tm.text)}</p>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>— {tm.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section search-section">
        <div className="container">
          <div className="section-title">
            <h2>{t('Rechercher sur le site')}</h2>
            <p>{t('Trouvez rapidement une destination, un plat, une date historique ou une information.')}</p>
          </div>
          <div className="card" style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
            <h2>{t('Recherche')}</h2>
            <SearchBox />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t('Prêt à découvrir la Mauritanie ?')}</h2>
            <p>{t("Planifiez votre voyage dès maintenant et partez à l'aventure dans ce joyau du Sahara.")}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-accent" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>{t('Contactez-nous')}</Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxSrc} onClose={() => setLightboxOpen(false)} />
    </>
  );
}
