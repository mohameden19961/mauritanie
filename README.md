# 🇲🇷 Mauritanie — Site Vitrine

Un site web moderne, interactif et **internationalisé** dédié à la découverte de la **Mauritanie** : histoire, géographie, tourisme, économie, culture et traditions.

Design **glassmorphique**, graphiques dynamiques, **mode sombre**, **3 langues (Français / English / العربية)** avec support **RTL** pour l'arabe, et animations fluides.

🔗 **Démo en ligne** → [mauritanie.vercel.app](https://mauritanie.vercel.app)

---

## ✨ Fonctionnalités

| | | |
|---|---|---|
| 🌐 | **3 langues (FR / EN / AR)** | Sélecteur de langue dans le header, préférence sauvegardée dans `localStorage`, mise en page **RTL automatique** pour l'arabe (police Noto Arabic, `dir="rtl"`) |
| 🌙 | **Dark Mode** | Toggle en un clic, préférence sauvegardée dans `localStorage` |
| 📊 | **Graphiques Chart.js** | PIB, secteurs économiques, population, urbanisation, ethnies |
| 🌍 | **Globe 3D** | Globe tournant avec le drapeau mauritanien (Three.js) |
| 🗺️ | **Cartes interactives** | Wilayas et géolocalisation (Leaflet) |
| 🎨 | **Éditeur de motifs** | Création de motifs traditionnels mauritaniens (Fabric.js) sur la page Artisanat |
| 🔄 | **Flip Cards** | Cliquez sur un graphique pour voir l'analyse détaillée (rotation 180°) |
| 🖼️ | **Lightbox** | Galerie photo plein écran avec fond flouté |
| 📈 | **Progress Bars** | Animées au scroll sur la page Économie |
| ❓ | **Accordéon FAQ** | Questions fréquentes sur la page Contact |
| 🔍 | **Recherche multi-langue** | Recherche instantanée dans toutes les pages, index recalculé selon la langue |
| ⬆️ | **Back to Top** | Apparaît au défilement, retour fluide en haut de page |
| 📱 | **Responsive** | Navigation adaptée mobile avec menu hamburger |
| 🎨 | **Glassmorphism** | Effet verre avec `backdrop-filter: blur()` sur toutes les cartes |
| 📜 | **Scroll Reveal** | Apparition progressive des sections au défilement (GSAP + Intersection Observer) |

---

## 🗺️ Pages (19 routes)

| Route | Page | Description |
|---|---|---|
| `/` | Accueil | Hero, statistiques clés, fonctionnalités, carte des régions |
| `/history` | Histoire | Timeline des grands empires aux temps modernes |
| `/geography` | Géographie | Paysages, climat, fleuve Sénégal, train des sables |
| `/tourism` | Tourisme | Destinations incontournables : Chinguetti, Banc d'Arguin, Oualata… |
| `/economy` | Économie | Graphiques (PIB, secteurs), barres de progression animées |
| `/demographics` | Démographie | Population, urbanisation, ethnies (graphiques dynamiques) |
| `/government` | Gouvernement | Structure politique et administrative (modale de détails) |
| `/cuisine` | Cuisine | Spécialités culinaires et traditions gastronomiques |
| `/gallery` | Galerie | Photographies plein écran avec lightbox |
| `/contact` | Contact | Formulaire, FAQ en accordéon, infos pratiques |
| `/pages` | Index | Toutes les pages du site en un coup d'œil |
| `/faune` | Faune & Flore | Biodiversité : parc du Banc d'Arguin, espèces emblématiques |
| `/langues` | Langues & Culture | Arabe, hassaniya, poular, soninké, wolof |
| `/artisanat` | Artisanat | Tapis, bijoux, poteries + **éditeur de motifs interactif** |
| `/musique` | Musique & Danse | Instruments, griots + **hymne national en vidéo** |
| `/education` | Éducation | Système éducatif, écoles coraniques, universités |
| `/transport` | Transport | Train des sables, routes, aéroports |
| `/religion` | Religion & Traditions | Islam, confréries soufies, fêtes religieuses |
| `/sports` | Sports | Football, lutte, courses de dromadaires, olympisme |

---

## 🛠️ Technologies

### Stack principale
- **[Vite](https://vite.dev/)** + **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — Build ultra-rapide, code typé
- **[React Router 7](https://reactrouter.com/)** — Routage SPA (19 pages)

### Bibliothèques
| Bibliothèque | Utilisation |
|---|---|
| **[Chart.js](https://www.chart.js.org/)** | Graphiques interactifs (PIB, démographie, économie) |
| **[Three.js](https://threejs.org/)** | Globe 3D avec le drapeau (accueil) |
| **[Leaflet](https://leafletjs.com/)** | Cartes interactives des wilayas |
| **[Fabric.js](http://fabricjs.com/)** | Éditeur de motifs de l'Artisanat |
| **[GSAP](https://gsap.com/)** | Animations et scroll reveal |
| **[SweetAlert2](https://sweetalert2.github.io/)** | Alertes et confirmations élégantes |

### Internationalisation (i18n)
- **Provider maison** `src/i18n/index.tsx` : contexte React `useI18n()` exposant `t()` et `tpl()`
- **Traduction par chaîne française** : le français est la source et le fallback
- Dictionnaires JSON : `src/i18n/locales/en.json` et `ar.json`
- **RTL arabe** : bloc `[dir="rtl"]` dans `variables.css`, polices Noto Kufi/Sans Arabic

---

## 📁 Structure du projet

```
src/
├── App.tsx                    # Routes (React Router)
├── main.tsx                   # Point d'entrée, englobe <LanguageProvider>
├── components/                # Header, Footer, Lightbox, SearchBox, etc.
├── hooks/                     # useTheme, useScrollReveal
├── i18n/
│   ├── index.tsx              # LanguageProvider, useI18n, gestion RTL
│   └── locales/
│       ├── en.json            # Dictionnaire anglais (865 clés)
│       └── ar.json            # Dictionnaire arabe (865 clés)
├── pages/                     # 19 pages (une par route)
├── styles/                    # CSS modulaire (variables, glass, dark mode…)
└── types/
    └── data.ts                # Données structurées (traduites via t())
```

---

## 🚀 Installation

Prérequis : **Node.js ≥ 20** et npm.

```bash
# 1. Cloner le dépôt
git clone https://github.com/mohameden19961/mauritanie.git
cd mauritanie

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

---

## 🔧 Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Compilation TypeScript + build de production (`dist/`) |
| `npm run preview` | Prévisualiser le build de production en local |
| `npm run lint` | Analyse statique du code avec **oxlint** |

---

## ☁️ Déploiement

L'application est déployée en continu sur **Vercel** via l'URL **https://mauritanie.vercel.app**.

```bash
# Manuellement (depuis la racine du projet)
npm i -g vercel
vercel --prod
```

À chaque push sur la branche `migration/react-vite`, Vercel redéploie automatiquement le site.

---

## 🧠 Architecture & fonctionnement

- **Données et i18n** : les textes statiques sont traduits via `t("phrase française")`. Les données structurées (`src/types/data.ts`) sont servies à l'interface puis traduites dynamiquement par `t()` — les dictionnaires couvrent donc aussi les contenus de données.
- **RTL** : quand l'arabe est sélectionné, `<html dir="rtl">` inverse toute la mise en page (flexbox, menu, navigation) automatiquement ; des règles ciblées ajustent les menus et marges.
- **Recherche** : `SearchBox` indexe les pages et les données, et reconstruit l'index à chaque changement de langue.
- **Persistance** : langue (`mauritanie-lang`) et thème sont conservés dans `localStorage` entre les visites.

---

## 🤝 Contribution

1. Fork le dépôt et crée une branche : `git checkout -b feature/nouvelle-page`
2. Implémente tes changements (pages dans `src/pages/`, styles dans `src/styles/`)
3. Vérifie : `npm run lint && npm run build`
4. Ouvre une Pull Request 🚀

---

## 📄 Licence

Site éducatif à but de démonstration — contenu libre pour l'apprentissage.

---

Réalisé avec ❤️ pour explorer la richesse culturelle et géographique de la Mauritanie.
