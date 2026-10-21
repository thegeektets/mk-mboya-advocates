# MK Mboya Advocates LLP

Public website for **MK Mboya Advocates LLP** — a founder-led Kenyan boutique at the intersection of corporate, investment and climate/energy law.

Copy is taken from the firm outline of 17 August 2026. Visual language follows the MyCFO NG / Leemify proposal site (dark slate, turquoise accent, large type, card rhythm) — not a generic white-navy law template.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Plus Jakarta Sans
- Vercel

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Links

- Local path: `C:\Users\Hp\Projects\mk-mboya-advocates`
- GitHub: https://github.com/thegeektets/mk-mboya-advocates
- Vercel project: https://vercel.com/thegeektets/mk-mboya-advocates
- Live: https://mk-mboya-advocates.vercel.app

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, stats, who we are, expertise snapshot |
| `/about` | Firm story and values |
| `/expertise` | Practice areas |
| `/expertise/[slug]` | Each practice area |
| `/people` | Founder-led boutique (credentials from outline only) |
| `/insights` | Outlet placeholders — no invented article titles |
| `/contact` | Form → mailto draft |
| `/privacy` `/disclaimer` | Short legal stubs |
| `/logo-lab` | Logo/colour experiments (noindex) |

## Brand (live)

- Deep teal `#19343C`
- Turquoise accent `#00E2BD`
- Cloud white `#F4F8F7`
- Original navy `#0B3A7A` and leaf `#6FBE4A` kept in `/public/logo/`
- Live header: **refined lockup** (MK + leaf mark, tighter MBOYA tracking, teal LLP rule) on dark slate

See `docs/BRAND.md`.

## Tracking

- `docs/TODO.md` — remaining work
- `docs/STATUS.md` — repo, deploy, blockers
