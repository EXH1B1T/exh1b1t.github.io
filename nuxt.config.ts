const SITE_URL     = 'https://exh1b1t.github.io'
const SITE_TITLE   = 'EXH1B1T — A portfolio site you actually own'
const SITE_DESC    = 'A free desktop app that turns a folder of photos into a published portfolio site on your own GitHub account. Drag, drop, publish. No code, no subscription, no catch.'
const OG_IMAGE_URL = `${SITE_URL}/og.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/global.css', '~/assets/css/responsive.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: SITE_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: SITE_DESC },
        { name: 'theme-color', content: '#0f0f0f' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'EXH1B1T' },
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESC },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:image', content: OG_IMAGE_URL },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: SITE_TITLE },

        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESC },
        { name: 'twitter:image', content: OG_IMAGE_URL },
        { name: 'twitter:image:alt', content: SITE_TITLE }
      ],
      link: [
        { rel: 'canonical', href: `${SITE_URL}/` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap'
        }
      ]
    }
  },
  nitro: {
    preset: 'github-pages'
  }
})
