<script setup lang="ts">
const props = defineProps<{
  headline: string
  primaryOs: 'mac' | 'windows'
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const secondaryOs = computed<'mac' | 'windows'>(() => (props.primaryOs === 'mac' ? 'windows' : 'mac'))

// Split headline; italicize last "meaningful" word for editorial flair.
const words = computed(() => {
  const arr = props.headline.split(' ')
  const lastShort = arr[arr.length - 1].length < 4
  return arr.map((word, i) => {
    const isLast = i === arr.length - 1 || (lastShort && i === arr.length - 2)
    return { word, italic: isLast, trailingSpace: i < arr.length - 1 }
  })
})
</script>

<template>
  <section class="hero hero-a" :style="{
    position: 'relative',
    background: '#0f0f0f',
    color: '#e8e8e8',
    padding: '140px 48px 100px',
    overflow: 'hidden'
  }">
    <TopNav :lime="props.lime" />
    <div :style="{ maxWidth: '1360px', margin: '0 auto' }">
      <div class="hero-a-grid" :style="{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: '80px',
        alignItems: 'center'
      }">
        <!-- Left — copy -->
        <div>
          <SectionTag
            number="01"
            label="A free app for photographers"
            color="rgba(232,232,232,0.4)"
            :accent="props.limeMode !== 'whisper' ? props.lime : 'rgba(232,232,232,0.6)'"
          />
          <h1 :style="{
            fontFamily: `'Cormorant Garamond', serif`,
            fontWeight: 400,
            fontSize: '96px',
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            margin: '32px 0 28px',
            color: '#f4f2ed',
            textWrap: 'balance'
          }">
            <span v-for="(w, i) in words" :key="i" :style="{ fontStyle: w.italic ? 'italic' : 'normal' }">{{ w.word }}{{ w.trailingSpace ? ' ' : '' }}</span>
          </h1>
          <p :style="{
            fontFamily: `'Inter', sans-serif`,
            fontSize: '18px',
            lineHeight: 1.55,
            color: 'rgba(232,232,232,0.7)',
            maxWidth: '520px',
            margin: '0 0 40px',
            fontWeight: 400,
            letterSpacing: '-0.005em'
          }">
            A free desktop app that turns a folder of photos into a published portfolio site on your own GitHub account. Drag, drop, publish. No code, no subscription, no catch.
          </p>
          <div :style="{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }">
            <DownloadBtn primary :os="props.primaryOs" variant="lime" :lime="props.lime" />
            <DownloadBtn :os="secondaryOs" />
          </div>
          <div :style="{
            marginTop: '24px',
            fontFamily: `'Inter', sans-serif`,
            fontSize: '12.5px',
            color: 'rgba(232,232,232,0.45)',
            display: 'flex',
            gap: '18px',
            alignItems: 'center'
          }">
            <span>Free forever.</span>
            <span :style="{ width: '3px', height: '3px', borderRadius: '50%', background: 'currentColor' }" />
            <span>Mac &amp; Windows.</span>
            <span :style="{ width: '3px', height: '3px', borderRadius: '50%', background: 'currentColor' }" />
            <span>No account needed to try.</span>
          </div>
        </div>

        <!-- Right — app screenshot composition -->
        <div class="hero-a-stage" :style="{ position: 'relative', height: '580px' }">
          <AppEditorMock :lime="props.lime" :style="{
            position: 'absolute',
            inset: 0,
            transform: 'translateX(40px)'
          }" />
          <BrowserWindow url="mira-lind.github.io" :height="300" :style="{
            position: 'absolute',
            bottom: '-40px',
            left: '-30px',
            width: '360px',
            transform: 'rotate(-2deg)'
          }">
            <PortfolioPreview compact />
          </BrowserWindow>
        </div>
      </div>
    </div>
  </section>
</template>
