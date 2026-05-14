# Charles Awuah Cobbinah — Portfolio

Personal site for **Charles Awuah Cobbinah** — Functional Safety & Risk Analysis Engineer for autonomous machines, intelligent vehicles, robotics, rail signalling and industrial process plants.

Live site: _add your deployed URL here_
LinkedIn: [linkedin.com/in/charlesawuahcobbinah](https://www.linkedin.com/in/charlesawuahcobbinah)

---

## Scope

The site is structured as an engineering dossier rather than a marketing page:

| Section | Content |
|---|---|
| `01 / About` | Approach to functional safety and operational risk — clauses cited, not vibes. |
| `02 / Projects` | Filterable risk artifacts: HARA, FMEA, FTA, STPA, SOTIF, PL determination. |
| `03 / Standards` | Coverage matrix — ISO 26262, 21448, 13849, 12100, 3691-4, IEC 62061, NFPA 502, EN 50129, ARP4761. |
| `04 / Experience` | Career trajectory across safety, reliability, field service, and assembly. |
| `05 / Contact` | Direct lines for apprenticeship and first-position roles. |

---

## Tech stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (TanStack Router + Vite SSR)
- **UI:** React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix primitives)
- **Build:** Vite 7
- **Deploy target:** Cloudflare Workers (via `@cloudflare/vite-plugin` + Wrangler)

---

## Running locally

```bash
# Install dependencies (npm, pnpm, bun, or yarn — pick one)
npm install

# Dev server with HMR
npm run dev

# Production build
npm run build

# Preview the production build
npm run preview
```

Node.js ≥ 20 is recommended.

---

## Deployment

The project is wired for **Cloudflare Workers** via `wrangler.jsonc`:

```bash
# One-time
npm install -g wrangler
wrangler login

# Deploy
npm run build
wrangler deploy
```

Alternative platforms (Vercel, Netlify, Cloudflare Pages) work too — they will detect Vite automatically. If deploying to a static-only host, remove the Cloudflare plugin and adjust `tanstackStart` for static export.

---

## Project structure

```
src/
├── routes/             # File-based routing — one file per page
│   ├── __root.tsx      # Shell (head, error & 404 components)
│   ├── index.tsx       # Hero / landing
│   ├── about.tsx
│   ├── projects.tsx
│   ├── standards.tsx
│   ├── experience.tsx
│   └── contact.tsx
├── components/
│   ├── site-chrome.tsx # Header + footer
│   ├── section-head.tsx
│   ├── project-card.tsx
│   └── ui/             # shadcn/ui primitives
├── assets/             # Portrait image
├── lib/                # Error capture & SSR error page
├── styles.css          # Tailwind v4 + design tokens
└── server.ts           # SSR entry with branded error handling
public/
└── charles-awuah-cobbinah-cv.pdf
```

---

## License

Source code: MIT. CV content, portrait, and project descriptions are © Charles Awuah Cobbinah and not licensed for reuse.
