# MK Mboya Advocates LLP

Public website for **MK Mboya Advocates LLP** — a founder-led Kenyan boutique at the intersection of corporate, investment and climate/energy law.

Copy is taken from the firm outline of 17 August 2026. Visual language follows the MyCFO NG / Leemify proposal site (dark slate, turquoise accent, large type, card rhythm) — not a generic white-navy law template.

## Links

| | |
| --- | --- |
| **Live site** | https://mk-mboya-advocates.vercel.app |
| **GitHub** | https://github.com/thegeektets/mk-mboya-advocates |
| **Vercel dashboard** | https://vercel.com/griffin-mutetis-projects/mk-mboya-advocates |
| **Logo lab** | https://mk-mboya-advocates.vercel.app/logo-lab |
| **Done / remaining** | [`docs/TODO.md`](docs/TODO.md) |

## Status at a glance

**Shipped:** brochure site, MyCFO-style UI, outline copy, logo variants, GitHub + Vercel production.

**Waiting on the firm:** see [`docs/CLIENT-REVIEW.md`](docs/CLIENT-REVIEW.md) — the list to send with the preview.

Full internal checklist: [`docs/TODO.md`](docs/TODO.md).

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

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, stats, who we are, expertise snapshot |
| `/about` | Firm story and values |
| `/expertise` | Practice areas |
| `/expertise/[slug]` | Each practice area |
| `/people` | Founder-led boutique |
| `/insights` | Writing and commentary |
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

- [`docs/TODO.md`](docs/TODO.md) — done vs remaining
- [`docs/STATUS.md`](docs/STATUS.md) — repo, deploy, blockers
- [`docs/BRAND.md`](docs/BRAND.md) — logo treatments
