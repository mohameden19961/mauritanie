/**
 * Charte graphique officielle — Mauritania Explorer
 * Référence projet : 24068 24139
 * Palette officielle :
 * - Primary / Vert Oasis : #0F5132
 * - Secondary / Ocre Sahara : #C9792C
 * - Neutral 900 : #14221B (texte principal)
 * - Neutral 600 : #566B5F (texte secondaire)
 * - Neutral 200 : #DCE5DF (bordures et séparateurs)
 * - Neutral 50 : #F4F8F5 (fonds de section)
 * - Alert : #EAB308
 */

export const CHARTE = {
  // ---------- Couleurs officielles ----------
  colors: {
    // Fond de section (Neutre 50)
    background: '#F4F8F5',
    // Couleur primaire — Vert Oasis (titres, boutons principaux, en-têtes, navigation)
    primary: '#0F5132',
    primaryDark: '#0A3D26',
    // Couleur secondaire — Ocre Sahara (accents, détails décoratifs)
    secondary: '#C9792C',
    secondaryDark: '#B86A1A',
    // Bordures et séparateurs (Neutre 200)
    border: '#DCE5DF',
    // Texte principal (Neutre 900)
    text: '#14221B',
    // Texte secondaire (Neutre 600)
    textSecondary: '#566B5F',
    textMuted: '#566B5F',
    // Couleur d'état
    alert: '#EAB308',
    // Surface
    surface: '#FFFFFF',
    surfaceAlpha: 'rgba(255, 255, 255, 0.6)',
  },
  // ---------- Typographie (Nunito) ----------
  typography: {
    fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, sans-serif",
    fontFamilyArabic: "'Nunito', 'Noto Kufi Arabic', 'Noto Sans Arabic', 'Segoe UI', Tahoma, Arial, sans-serif",
    h1: '32px',
    h2: '24px',
    h3: '20px',
    h4: '16px',
    body: '16px',
    small: '14px',
    caption: '12px',
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
  },
  // ---------- Espacements & rayons (grille de 8px) ----------
  spacing: {
    xs: '8px',   // 8px : espacement interne des boutons
    sm: '16px',  // 16px : marges mobiles
    md: '24px',  // 24px : espace entre les blocs
    lg: '32px',  // 32px : espace entre les sections
    xl: '48px',
    xxl: '64px',
  },
  radius: {
    button: '8px',  // 8px : boutons et champs de saisie
    input: '8px',
    card: '16px',   // 16px : cartes et images
    sm: '8px',
    md: '16px',
    lg: '16px',
    pill: '100px',
  },
  // ---------- Hauteur de l'en-tête ----------
  headerHeight: '64px',
  headerBandHeight: '4px',
} as const;

export type CharteTokens = typeof CHARTE;

