<script setup lang="ts">
const props = defineProps<{
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const { photos } = useSite()

const sites = [
  {
    name: 'Mira Lindqvist',
    discipline: 'Fashion · Editorial',
    url: 'mira-lind.github.io',
    photos: [photos.show1a, photos.show1b, photos.show1c],
    accent: '#1a1a1a'
  },
  {
    name: 'Atlas & Paper',
    discipline: 'Landscape · Travel',
    url: 'atlas-paper.github.io',
    photos: [photos.show2a, photos.show2b, photos.show2c],
    accent: '#f4f2ed'
  },
  {
    name: 'Lina & Sam Studio',
    discipline: 'Weddings · Documentary',
    url: 'lina-sam.github.io',
    photos: [photos.show3a, photos.show3b, photos.show3c],
    accent: '#f4f2ed'
  },
  {
    name: 'Hajime Tanaka',
    discipline: 'Street · Reportage',
    url: 'hajime-t.github.io',
    photos: [photos.show4a, photos.show4b, photos.show4c],
    accent: '#1a1a1a'
  }
]
</script>

<template>
  <section class="sec showcase" :style="{
    background: '#f4f2ed',
    color: '#0f0f0f',
    padding: '120px 48px 140px'
  }">
    <div :style="{ maxWidth: '1360px', margin: '0 auto' }">
      <div :style="{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '72px',
        flexWrap: 'wrap',
        gap: '32px'
      }">
        <div>
          <SectionTag
            number="04"
            label="Sites built with EXH1B1T"
            color="rgba(15,15,15,0.4)"
            :accent="props.limeMode === 'confident' ? '#0f0f0f' : 'rgba(15,15,15,0.5)'"
          />
          <h2 :style="{
            fontFamily: `'Cormorant Garamond', serif`,
            fontWeight: 400,
            fontSize: '72px',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            margin: '28px 0 0',
            maxWidth: '900px',
            textWrap: 'balance'
          }">
            The kind of site that makes a client <span :style="{ fontStyle: 'italic' }">stop scrolling.</span>
          </h2>
        </div>
        <div :style="{
          fontFamily: `'Inter', sans-serif`,
          fontSize: '13px',
          color: 'rgba(15,15,15,0.5)',
          letterSpacing: '0.02em',
          paddingBottom: '8px'
        }">
          Real portfolios, real URLs. Tap any to visit the live site.
        </div>
      </div>

      <div class="showcase-grid" :style="{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px'
      }">
        <ShowcaseCard v-for="(s, i) in sites" :key="i" :site="s" :lime="props.lime" />
      </div>
    </div>
  </section>
</template>
