/**
 * Charte graphique — Mauritanie
 * Extraite des fichiers SVG dans exports/charte-svg/
 * 00-en-tete, 01-logo, 02-couleurs, 03-typographie,
 * 04-espacements-rayons, 05-composants, 06-icones,
 * 07-ton-des-textes, 08-pied-de-page
 */

export const CHARTE = {
  // ---------- Couleurs (02-couleurs.svg) ----------
  colors: {
    // Fond principal (en-tête, pages)
    background: '#F4F8F5',
    // Couleur primaire — orange cuivré (bande en-tête, pied de page, accents principaux)
    primary: '#C9792C',
    primaryDark: '#B86A1A',
    // Vert foncé (logo, blocs de texte forts)
    greenDark: '#0F5132',
    greenDarkAlpha: 'rgba(15, 81, 50, 0.10)',
    // Bordures et séparateurs
    border: '#DCE5DF',
    // Texte secondaire / muted
    textSecondary: '#566B5F',
    // Texte principal quasi noir
    text: '#1A1A2E',
    // Accents secondaires (composants)
    green: '#2E9E4F',
    red: '#C0392B',
    yellow: '#EAB308',
    dark: '#14221B',
    // Surface claire
    surface: '#FFFFFF',
    surfaceAlpha: 'rgba(255,255,255,0.6)',
  },
  // ---------- Typographie (03-typographie.svg) ----------
  typography: {
    fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, sans-serif",
    fontFamilyArabic: "'Nunito', 'Noto Kufi Arabic', 'Noto Sans Arabic', 'Segoe UI', Tahoma, Arial, sans-serif",
    h1: '3rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    body: '1rem',
    small: '0.875rem',
    lineHeight: 1.7,
    letterSpacing: '-0.02em',
  },
  // ---------- Espacements & rayons (04-espacements-rayons.svg) ----------
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
  },
  radius: {
    sm: '12px',
    md: '20px',
    lg: '28px',
    pill: '100px',
  },
  // ---------- Hauteur de l'en-tête ----------
  headerHeight: '64px',
  headerBandHeight: '4px', // bande orange en haut de l'en-tête
} as const;

export type CharteTokens = typeof CHARTE;
