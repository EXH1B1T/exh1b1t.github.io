# EXH1B1T — Landing Page

Nuxt 3 port of the EXH1B1T landing page, deployed to GitHub Pages at
[exh1b1t.github.io](https://exh1b1t.github.io).

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Production build (static)

```bash
npm run generate  # writes .output/public
npm run preview   # preview the static build locally
```

## Where to edit what

| You want to change…                     | Open                                    |
| --------------------------------------- | --------------------------------------- |
| Default hero variant, headline, OS, accent | `composables/useSite.ts`             |
| Photo URLs (Unsplash)                   | `composables/useSite.ts` (`PHOTOS`)     |
| Value-prop tiles                        | `components/Promise3Up.vue`             |
| "How it works" steps                    | `components/HowItWorks.vue`             |
| Showcase portfolios                     | `components/Showcase.vue`               |
| FAQ Q&A pairs                           | `components/HonestFAQ.vue`              |
| Comparison table rows                   | `components/Comparison.vue`             |
| Testimonials                            | `components/SocialProof.vue`            |
| Footer copy                             | `components/SiteFooter.vue`             |
| Global / responsive CSS                 | `assets/css/`                           |
| Social share / OG meta tags             | `nuxt.config.ts` (`app.head.meta`)      |
| Social share cover image                | `scripts/gen-og.mjs` → `npm run gen:og` |

## Social share cover image

The 1200×630 `public/og.png` is generated from a plain SVG in
[`scripts/gen-og.mjs`](scripts/gen-og.mjs). To refresh after a copy change:

```bash
npm run gen:og
```

The raw SVG is saved next to it at `public/og.svg` for easier future edits.
Meta tags (`og:*`, `twitter:*`) live in `nuxt.config.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/nuxtjs.yml`, which:

1. installs dependencies
2. runs `nuxt generate` (static export)
3. publishes `.output/public` to GitHub Pages

**One-time setup on GitHub:**
`Settings → Pages → Build and deployment → Source: GitHub Actions`.

Because this is a user/org site (`exh1b1t.github.io`), it is served from the
repo root — no `baseURL` tweak needed.
