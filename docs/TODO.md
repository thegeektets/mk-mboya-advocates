# Done vs remaining

Last updated: 21 Oct 2026. Copy stays faithful to the 17 Aug 2026 outline — do not invent partners, bios, articles, or contact details.

## Links

| What | URL |
| --- | --- |
| Live site | https://mk-mboya-advocates.vercel.app |
| GitHub repo | https://github.com/thegeektets/mk-mboya-advocates |
| Vercel dashboard | https://vercel.com/griffin-mutetis-projects/mk-mboya-advocates |
| Logo experiments | https://mk-mboya-advocates.vercel.app/logo-lab |
| Local | `C:\Users\Hp\Projects\mk-mboya-advocates` — `npm run dev` |

---

## Done

### Repo and deploy

- [x] New Next.js 16 App Router + TypeScript project (not inside Bikelease)
- [x] Local git at `C:\Users\Hp\Projects\mk-mboya-advocates`
- [x] GitHub remote: https://github.com/thegeektets/mk-mboya-advocates (public)
- [x] GitHub homepage set to the live Vercel URL
- [x] Vercel project `mk-mboya-advocates` linked to GitHub
- [x] Production deploy: https://mk-mboya-advocates.vercel.app
- [x] Tailwind v4 PostCSS so production CSS actually paints
- [x] `npm run build` passes
- [x] README with `npm run dev`

### Site and copy

- [x] MyCFO-like look: dark slate, turquoise, large type, cards, molecule graphic
- [x] Shared header (logo + nav) and footer (logo, LLP, Nairobi)
- [x] Pages from the outline: Home, About, Expertise (+ 6 subpages), People, Insights, Contact, Privacy, Disclaimer
- [x] Copy from the Word outline (practice areas, values, landing, founder credentials)
- [x] Contact form UI → `/api/contact` mailto draft (no backend secrets)
- [x] SEO: metadata, Open Graph, favicon from MK+leaf
- [x] Responsive layout (desktop + mobile)
- [x] Browser sanity-check of home + About on the live URL

### Brand

- [x] Original navy/green lockup kept in `public/logo/`
- [x] Variants A (original), B (inverted), C (refined) + bubble monogram
- [x] Live header = **variant C refined lockup** (teal leaf on slate)
- [x] `/logo-lab` (noindex) to compare treatments
- [x] Brand notes in `docs/BRAND.md`

---

## Not done (needs the firm)

These are blocked on information that is **not in the Word outline**.

- [ ] Confirm chambers email (site currently uses proposed `chambers@mkmboya.law`)
- [ ] Phone number
- [ ] Physical address or P.O. Box (outline: “once secured”)
- [ ] Founding partner given name, portrait, and CV narrative (outline: “lift from CV”)
- [ ] Client sign-off on live logo (refined teal vs original navy/green)
- [ ] Custom domain: `mkmboya.ke` / `mkmboya.africa` / `mkmboya.law` + attach to Vercel
- [ ] Of-counsel names/bios when the network is named

## Not done (content / product)

- [ ] Republish Mail & Guardian, Business Daily Africa, Power Shift Africa pieces on Insights (placeholders only today)
- [ ] Real form backend (Resend / Formspree) if mailto is not enough
- [ ] Analytics — only after a real privacy notice
- [ ] Full privacy policy if cookies/analytics go live
- [ ] Nairobi photography (optional; hero is CSS + molecule graphic)
- [ ] Hide or password-protect `/logo-lab` before client-facing launch if they do not want experiments public
- [ ] Confirm GitHub auto-deploy on every `git push` (first follow-up deploy was triggered via Vercel API)

## Nice to have

- [ ] Local `vercel` CLI login (MCP deploy worked; CLI on this machine is logged out)
- [ ] Apple/social share image designed as a 1200×630 crop (OG currently uses inverted lockup)
- [ ] 404 page in the same visual language (Next default is fine for now)
