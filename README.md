# Dijkstra Zorg en Begeleiding — Website

Portfolio/zakelijke website voor Jeroen Dijkstra, sociotherapeut ZZP.

---

## Live URLs

| Omgeving | URL |
|----------|-----|
| Website (live) | https://dijkstra-zorg.vercel.app |
| Sanity Studio (CMS) | https://dijkstra-zorg.sanity.studio |
| GitHub | https://github.com/renesurhuizum/dijkstra-zorg |
| Vercel dashboard | https://vercel.com/renes-projects-496a9c7c/dijkstra-zorg |

---

## Tech stack

| Technologie | Versie | Rol |
|-------------|--------|-----|
| React | 19 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 8 | Build tool en dev server |
| Tailwind CSS | v4 | Utility-first styling |
| Sanity CMS | v3 | Content beheer (headless) |
| Vercel | — | Hosting en deployment |

---

## Waarom deze keuzes?

### React + Vite
Lichtgewicht setup voor een single-page portfolio. Geen server-side rendering nodig — de site bevat geen dynamische gebruikersdata. Vite bouwt de site in <1 seconde.

### Tailwind CSS v4
Utility classes direct in de JSX — geen aparte CSS-bestanden per component nodig. Versie 4 werkt met `@import "tailwindcss"` in plaats van de oude PostCSS-configuratie.

**Belangrijk: Tailwind v4 CSS layer bug**
Global CSS-resets (zoals `* { margin: 0 }`) moeten altijd binnen `@layer base {}` staan. Unlayered CSS heeft hogere prioriteit dan Tailwind utility classes en overschrijft dan bijv. `mx-auto`. Zie `src/index.css`.

### Sanity CMS
Gekozen boven alternatieven (TinaCMS, WordPress, Webflow) omdat:
- **Gratis** voor dit gebruik (free tier: 500K API calls/maand, 5GB storage)
- **Design blijft intact** — Sanity is puur een data-bron, de React-site bepaalt de uitstraling
- **Gebruiksvriendelijk** voor Jeroen — visuele editor zonder code
- **Geen herinstallatie nodig** — Sanity Studio draait op een eigen URL

### Vercel
Zero-config deployment voor Vite/React. Gratis hobby tier is ruim voldoende voor een ZZP-website.

---

## Architectuur: hoe content stroomt

```
Jeroen typt in Sanity Studio
        ↓ klikt "Publish"
Sanity slaat op + stuurt webhook
        ↓ HTTP POST naar Vercel
Vercel start nieuwe build (~60 sec)
        ↓
React site haalt data op via Sanity API
        ↓
Bezoekers zien de bijgewerkte site
```

### Content flow in code

1. `src/lib/sanity.ts` — Sanity client (project ID: `gowerghf`) + GROQ query
2. `src/lib/content-context.tsx` — React Context die de data fetcht en beschikbaar stelt
3. `src/App.tsx` — wraps alles in `<ContentProvider>`
4. Alle componenten — gebruiken `useContent()` hook om data op te halen

De `src/content.ts` dient als **fallback**: als Sanity niet bereikbaar is, toont de site de hardcoded content.

---

## Project structuur

```
dijkstra-zorg/
├── src/
│   ├── components/         # React componenten (Hero, About, Services, etc.)
│   ├── lib/
│   │   ├── sanity.ts       # Sanity client + GROQ query
│   │   └── content-context.tsx  # Context provider voor content
│   ├── content.ts          # Fallback content (hardcoded)
│   └── index.css           # Global styles + @keyframes animaties
├── studio/                 # Sanity Studio (aparte Node-app)
│   ├── schemaTypes/
│   │   └── siteContent.ts  # Schema: alle bewerkbare velden
│   ├── sanity.config.ts    # Studio configuratie
│   └── sanity.cli.ts       # CLI configuratie (nodig voor deploy)
├── public/                 # Statische bestanden
└── index.html              # HTML entry point (SEO meta tags hier)
```

---

## Bewerkbare content (via Sanity Studio)

Jeroen kan via https://dijkstra-zorg.sanity.studio aanpassen:

- Naam, bedrijfsnaam, functietitel
- Telefoonnummer en e-mailadres
- Werkgebied
- Biografie (meerdere alinea's)
- Kernwaarden
- Opleidingen & registraties
- Werkervaring
- Diensten (titel, omschrijving, voor wie, werkwijze)
- Werkgebied details en tarieven
- Praktijkinformatie (aanmelding, no-show, KVK, etc.)
- Profielfoto (met automatische crop/hotspot)

**Wat niet via Sanity bewerkbaar is:** kleuren, fonts en layout. Die zijn bewust in code gezet als merkidentiteit — zo kan Jeroen ze niet per ongeluk breken.

---

## Lokaal ontwikkelen

```bash
# Website
npm install
npm run dev          # start op http://localhost:5173

# Sanity Studio (apart)
cd studio
npm install
npx sanity dev       # start op http://localhost:3333
```

### Sanity credentials
- Project ID: `gowerghf`
- Dataset: `production`
- Studio URL: `dijkstra-zorg.sanity.studio`

---

## Deployen

### Website (automatisch)
Elke `git push` naar `main` triggert automatisch een Vercel deploy.
Elke Sanity **Publish** triggert ook een Vercel deploy via webhook.

### Handmatig
```bash
vercel --prod
```

### Sanity Studio updaten
```bash
cd studio
npx sanity deploy
```

---

## Visueel ontwerp

### Kleurenschema
| Kleur | Hex | Gebruik |
|-------|-----|---------|
| Donkerbruin (hero/contact) | `#2C2218` | Hero en contact secties |
| Donkerbruin (diep) | `#1C1917` | Contact sectie boekend |
| Oranje accent | `#E8530A` | CTA's, labels, accenten |
| Wit | `#FFFFFF` | Achtergrond lichte secties |
| Stone-50 | Tailwind | Achtergrond afwisselende secties |

### Typografie
- Headlines: Plus Jakarta Sans (Google Fonts, geladen via CSS)
- Body: Inter / system-ui

### Animaties
- `fadeInUp` — staggered tekst entrance in de hero
- `slowSpin` — langzame rotatie van de spiraal SVG in de foto-placeholder

---

## Belangrijke lessen / gotchas

**1. Tailwind v4: CSS layers**
Alle custom CSS moet in `@layer base {}`. Unlayered CSS wint altijd van `@layer utilities`, waardoor utility classes zoals `mx-auto` niet werken.

**2. Max-width consistentie**
Header en alle content-secties moeten dezelfde `max-w-*` gebruiken (hier: `max-w-5xl`). Anders lijkt content links uitgelijnd op brede schermen.

**3. Sanity CLI vereist sanity.cli.ts**
`sanity.config.ts` is voor de Studio UI. `sanity.cli.ts` is een apart bestand dat de CLI-commando's (zoals `sanity deploy` en `sanity dataset import`) nodig hebben om het project te vinden.

**4. @sanity/image-url types**
Importeer `SanityImageSource` uit `'@sanity/image-url'` (de main export), niet uit het subpad `'@sanity/image-url/lib/types/types'` — dat bestaat niet in de geïnstalleerde versie.

---

## SEO

Meta tags zijn ingesteld in `index.html`:
- `lang="nl"`
- Title, description, og:title, og:description, robots

De site is een React SPA — zoekmachines zien statische HTML. Voor betere lokale SEO:
- **Google My Business** aanmaken (meest impactvolle actie voor een lokale ZZP'er)
- Eventueel pre-rendering toevoegen via `vite-plugin-prerender`
