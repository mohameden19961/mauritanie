import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const STORAGE_KEY = 'pwa-install-dismissed';
const DELAY_MS = 5000;

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      localStorage.setItem(STORAGE_KEY, '1');
      setVisible(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    if (!deferredPrompt || visible) return;
    const timer = window.setTimeout(() => setVisible(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [deferredPrompt, visible]);

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    setDeferredPrompt(null);
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div className="install-prompt" role="dialog" aria-live="polite">
      <div className="install-prompt-icon">
        <img src="/images/icon-192.png" alt="" width="44" height="44" />
      </div>
      <div className="install-prompt-text">
        <strong>{t('Installer Mauritanie')}</strong>
        <span>{t("Accédez au site hors ligne, en un clic depuis votre écran d'accueil.")}</span>
      </div>
      <div className="install-prompt-actions">
        <button className="btn btn-primary" onClick={install}>{t('Installer')}</button>
        <button className="install-prompt-close" onClick={dismiss} aria-label={t('Fermer')}>✕</button>
      </div>
    </div>
  );
}
