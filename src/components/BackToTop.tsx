import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-top${visible ? ' visible' : ''}`}
      aria-label={t('Retour en haut')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {'\u2191'}
    </button>
  );
}