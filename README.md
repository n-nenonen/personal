# Noora Nenonen — Personal portfolio site.

**Live site:** https://n-nenonen.github.io/personal/

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173/personal/`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/LandingPage.tsx` — main landing page from Figma
- `src/components/WorkSection.tsx` — project cards
- `src/data/portfolio.ts` — editable project and contact data

## Deployment

Pushes to `main` deploy automatically via GitHub Actions. Enable **Settings → Pages → Source: GitHub Actions** if this is the first deploy.
