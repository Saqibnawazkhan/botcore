# BOTCORE

Precision-engineered digital experiences for the next epoch. A marketing site for the BOTCORE studio, built with a dark cyberpunk aesthetic and a strict green / black / grey palette.

## Tech Stack

- **Vite** + **React 18**
- **React Router v6** — `/`, `/reps`, `/services`, `/labs`, `/studio`, `/about`
- **Tailwind CSS v3** — custom `botcore.*` color tokens, fluid `clamp()` typography utilities
- **Framer Motion** — scroll reveals, hover transitions, marquee, glitch
- **lucide-react** — icon set (brand icons inlined for trademark reasons)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

Requires Node 20+.

## Structure

```
src/
├── main.jsx                  # ReactDOM + BrowserRouter
├── App.jsx                   # Routes + shared Navbar / Footer
├── index.css                 # Tailwind + clamp utilities + effects
├── pages/
│   ├── Home.jsx              # Hero + About + Portfolio + Capabilities +
│   │                         # Voyage + Values + Team + Blog + CTA
│   ├── Reps.jsx / Services.jsx / Labs.jsx / Studio.jsx / About.jsx
└── components/
    ├── Navbar.jsx / Footer.jsx
    ├── Hero.jsx              # Background video + headline + CTAs
    ├── AboutSection.jsx
    ├── Portfolio.jsx         # 8 project cards
    ├── Capabilities.jsx      # 5 discipline cards
    ├── SystematicVoyage.jsx  # Learn → Plan → Build → Launch → Measure
    ├── CoreValues.jsx
    ├── TeamSection.jsx
    ├── BlogSection.jsx       # Mission Control posts
    ├── LaunchCTA.jsx
    ├── Marquee.jsx
    └── visuals.jsx           # Step SVG illustrations
```

## Deployment on Vercel

1. Push to GitHub (this repo).
2. Import the repo in the [Vercel dashboard](https://vercel.com/new).
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` — Output: `dist`.
5. Deploy. No env vars required.

## Customizing

- **Hero background video**: swap the `<source src="...">` in `src/components/Hero.jsx`.
- **Color palette**: `tailwind.config.js` → `theme.extend.colors.botcore`.
- **Fonts**: Google Fonts link in `index.html` (Space Grotesk / Space Mono / Syne).
- **Heading sizes**: `clamp()` utilities in `src/index.css` (`.h-hero`, `.h-section`, `.h-card`, `.h-cta`).
