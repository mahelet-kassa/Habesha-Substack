# Habesha | Substack

Bilingual long-form publishing platform for English and Amharic writers.

## Stack
- React + TypeScript
- Vite
- React Router

## Quick start
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
This project is configured for project pages at:
`https://mahelet-kassa.github.io/Habesha-Substack/`

If you want a root site (`https://mahelet-kassa.github.io/`), update
`vite.config.ts` to use `base: "/"`.

## Core pages
- `/` Home feed
- `/editor` Writing studio
- `/@author/post-title` Post detail
- `/@author` Profile & archive
- `/subscribe/:authorHandle` Subscribe & payments
- `/analytics` Insights
- `/search` Discovery

## Notes
- Language and theme preferences are stored locally.
- UI is designed to be editorial-first with bilingual support.
