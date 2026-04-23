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

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:

1. installs dependencies
2. runs `nuxt generate` (static export)
3. publishes `.output/public` to GitHub Pages

**One-time setup on GitHub:**
`Settings → Pages → Build and deployment → Source: GitHub Actions`.

Because this is a user/org site (`exh1b1t.github.io`), it is served from the
repo root — no `baseURL` tweak needed.
