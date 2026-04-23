<script setup lang="ts">
const props = defineProps<{
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const tiles = [
  {
    n: '01',
    title: 'Free. Not "free trial" — free.',
    body: 'The app runs on your machine. Your site runs on GitHub Pages. There are no servers we\'d have to pay for, and nothing we\'d have to charge you for.',
    accent: 'No monthly fee. No account tier. No upsell.'
  },
  {
    n: '02',
    title: 'Your site, your files, your domain.',
    body: 'Everything lives in a repo on your own GitHub. The photos, the captions, the theme, the built site. You can walk away any time — nothing is locked behind us.',
    accent: 'If EXH1B1T shuts down, your site keeps running.'
  },
  {
    n: '03',
    title: 'Designed like a real portfolio.',
    body: 'Editorial typography, proper masonry, a clean lightbox. The default theme is restrained on purpose — your images are the loudest thing on the page.',
    accent: 'Built for photographs, not for landing pages.'
  }
]

const brandAccent = computed(() => (props.limeMode !== 'whisper' ? props.lime : 'currentColor'))
</script>

<template>
  <section class="sec promise" :style="{
    background: '#f4f2ed',
    color: '#0f0f0f',
    padding: '120px 48px 140px'
  }">
    <div :style="{ maxWidth: '1360px', margin: '0 auto' }">
      <SectionTag
        number="02"
        label="The promise"
        color="rgba(15,15,15,0.4)"
        :accent="props.limeMode === 'confident' ? '#000' : 'rgba(15,15,15,0.5)'"
      />
      <h2 :style="{
        fontFamily: `'Cormorant Garamond', serif`,
        fontWeight: 400,
        fontSize: '72px',
        lineHeight: 1.0,
        letterSpacing: '-0.02em',
        margin: '28px 0 80px',
        maxWidth: '860px',
        textWrap: 'balance'
      }">
        Three things we won't budge on, no matter what.
      </h2>
      <div class="promise-grid" :style="{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'rgba(15,15,15,0.1)',
        borderTop: '1px solid rgba(15,15,15,0.1)',
        borderBottom: '1px solid rgba(15,15,15,0.1)'
      }">
        <div v-for="(t, i) in tiles" :key="i" :style="{
          background: '#f4f2ed',
          padding: '40px 36px 48px',
          position: 'relative'
        }">
          <div :style="{
            fontFamily: `'JetBrains Mono', monospace`,
            fontSize: '11px',
            color: 'rgba(15,15,15,0.5)',
            letterSpacing: '0.08em',
            marginBottom: '24px'
          }">
            — {{ t.n }}
          </div>
          <h3 :style="{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: '36px',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            margin: '0 0 20px',
            textWrap: 'balance'
          }">
            {{ t.title }}
          </h3>
          <p :style="{
            fontFamily: `'Inter', sans-serif`,
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'rgba(15,15,15,0.7)',
            margin: '0 0 24px'
          }">
            <BrandText :text="t.body" :accent="brandAccent" />
          </p>
          <div :style="{
            fontFamily: `'Inter', sans-serif`,
            fontSize: '13px',
            fontWeight: 500,
            color: '#0f0f0f',
            paddingTop: '20px',
            borderTop: '1px solid rgba(15,15,15,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }">
            <span :style="{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: props.limeMode === 'confident' ? props.lime : '#0f0f0f'
            }" />
            <BrandText :text="t.accent" :accent="props.limeMode === 'confident' ? props.lime : 'currentColor'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
