import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import enJson from './locales/en.json';
import arJson from './locales/ar.json';

export type Lang = 'fr' | 'en' | 'ar';

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: 'fr', label: 'Français', native: 'Français' },
  { code: 'en', label: 'English', native: 'English' },
  { code: 'ar', label: 'العربية', native: 'العربية' },
];

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: string) => string;
  tpl: (s: string, vars?: Record<string, string | number>) => string;
}

const STORAGE_KEY = 'mauritanie-lang';
const dicts: Record<Exclude<Lang, 'fr'>, Record<string, string>> = {
  en: enJson as Record<string, string>,
  ar: arJson as Record<string, string>,
};

const I18nContext = createContext<I18nContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: (s) => s,
  tpl: (s) => s,
});

function resolve(lang: Lang, key: string): string {
  if (lang === 'fr') return key;
  const d = dicts[lang];
  if (d && d[key] !== undefined && d[key] !== '') return d[key];
  return key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return saved === 'en' || saved === 'ar' ? saved : 'fr';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  const t = (s: string) => resolve(lang, s);

  const tpl = (s: string, vars?: Record<string, string | number>) => {
    let out = resolve(lang, s);
    if (vars) {
      Object.keys(vars).forEach((k) => {
        out = out.replaceAll(`{${k}}`, String(vars[k]));
      });
    }
    return out;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: setLangState, t, tpl }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
