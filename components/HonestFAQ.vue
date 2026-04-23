<script setup lang="ts">
const props = defineProps<{
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const qs = [
  {
    q: 'Wait. How is this actually free?',
    a: 'Your site runs on GitHub Pages, which is free for personal sites. The app runs on your computer. We don\'t host anything, so there\'s nothing for us to charge you for — and nothing that can break if our servers go down, because there are no servers.'
  },
  {
    q: 'Do I need a GitHub account?',
    a: 'Yes — and it\'s free too. If you don\'t have one, the app walks you through signup in about a minute. You\'ll never need to touch git or the command line.'
  },
  {
    q: 'Can I use my own domain?',
    a: 'Yes. Point your domain at GitHub Pages and the app walks you through the DNS setup step by step. HTTPS is on by default.'
  },
  {
    q: 'What happens if EXH1B1T shuts down?',
    a: 'Nothing. Your site keeps running on GitHub — your photos, captions, and theme are all in a repo you own. You can keep editing the repo by hand, or pick any static-site tool you like. We are not a dependency of your site.'
  },
  {
    q: 'How long does publishing actually take?',
    a: 'A few seconds for the push. Then GitHub Pages takes about one to five minutes to serve the new version. First-time publishes of a big archive can take ten minutes or so — we\'ll show you a progress bar and tell the truth.'
  },
  {
    q: 'Can I customize the design?',
    a: 'Yes — three ways. Use the default editorial theme, pick from a small set of alternates, or generate a custom one with any AI (ChatGPT, Claude, whatever you like), then install the folder in the app with one click. There\'s a short tutorial that walks through the whole thing — no code knowledge required.'
  }
]

const brandAccent = computed(() => (props.limeMode !== 'whisper' ? props.lime : 'currentColor'))
const pad = (n: number) => String(n).padStart(2, '0')
</script>

<template>
  <section class="sec faq" :style="{
    background: '#0f0f0f',
    color: '#e8e8e8',
    padding: '120px 48px 140px'
  }">
    <div :style="{ maxWidth: '1100px', margin: '0 auto' }">
      <SectionTag
        number="05"
        label="But is it really free?"
        color="rgba(232,232,232,0.4)"
        :accent="props.limeMode !== 'whisper' ? props.lime : 'rgba(232,232,232,0.6)'"
      />
      <h2 :style="{
        fontFamily: `'Cormorant Garamond', serif`,
        fontWeight: 400,
        fontSize: '72px',
        lineHeight: 1.0,
        letterSpacing: '-0.02em',
        margin: '28px 0 24px',
        color: '#f4f2ed',
        maxWidth: '800px',
        textWrap: 'balance'
      }">
        The questions a photographer is <span :style="{ fontStyle: 'italic' }">right</span> to ask.
      </h2>
      <p :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: '17px',
        lineHeight: 1.6,
        color: 'rgba(232,232,232,0.6)',
        maxWidth: '640px',
        margin: '0 0 72px'
      }">
        Everything here is visible on the page on purpose. No dropdowns, no "learn more" links — if we expect you to trust us with your portfolio, we should probably be up-front.
      </p>

      <div :style="{ borderTop: '1px solid rgba(255,255,255,0.1)' }">
        <div v-for="(item, i) in qs" :key="i" class="faq-row" :style="{
          display: 'grid',
          gridTemplateColumns: '80px 1fr 1fr',
          gap: '40px',
          padding: '32px 0 36px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          alignItems: 'baseline'
        }">
          <div :style="{
            fontFamily: `'JetBrains Mono', monospace`,
            fontSize: '11px',
            color: props.limeMode === 'confident' ? props.lime : 'rgba(232,232,232,0.4)',
            letterSpacing: '0.08em',
            paddingTop: '6px'
          }">
            Q{{ pad(i + 1) }}
          </div>
          <h3 :style="{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            margin: 0,
            color: '#f4f2ed',
            textWrap: 'balance'
          }">
            <BrandText :text="item.q" :accent="brandAccent" />
          </h3>
          <p :style="{
            fontFamily: `'Inter', sans-serif`,
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(232,232,232,0.7)',
            margin: 0
          }">
            <BrandText :text="item.a" :accent="brandAccent" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
