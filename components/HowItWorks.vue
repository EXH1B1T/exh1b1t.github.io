<script setup lang="ts">
const props = defineProps<{
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const steps = [
  {
    n: '01',
    title: 'Connect your GitHub.',
    body: 'One-click sign-in using GitHub\'s device flow. We never see your password, and there\'s no server holding a token. The app stores it locally.',
    meta: '~30 seconds',
    visual: 'auth' as const
  },
  {
    n: '02',
    title: 'Drag in your photos.',
    body: 'Organize into albums, write captions, pick a cover. EXH1B1T resizes to 2400px, writes clean filenames, and auto-generates thumbnails — all on your machine.',
    meta: '~2 minutes for a small archive',
    visual: 'editor' as const
  },
  {
    n: '03',
    title: 'Click Publish.',
    body: 'EXH1B1T commits your site to your GitHub repo and pushes. GitHub Pages serves it at your live URL in a few minutes. Point a custom domain at it whenever you\'re ready.',
    meta: '~1–5 minutes to go live',
    visual: 'publish' as const
  }
]

const brandAccent = computed(() => (props.limeMode !== 'whisper' ? props.lime : 'currentColor'))
</script>

<template>
  <section class="sec how" :style="{
    background: '#0f0f0f',
    color: '#e8e8e8',
    padding: '120px 48px 140px'
  }">
    <div :style="{ maxWidth: '1360px', margin: '0 auto' }">
      <div :style="{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '80px',
        flexWrap: 'wrap',
        gap: '40px'
      }">
        <div>
          <SectionTag
            number="03"
            label="How it works"
            color="rgba(232,232,232,0.4)"
            :accent="props.limeMode !== 'whisper' ? props.lime : 'rgba(232,232,232,0.6)'"
          />
          <h2 :style="{
            fontFamily: `'Cormorant Garamond', serif`,
            fontWeight: 400,
            fontSize: '72px',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            margin: '28px 0 0',
            maxWidth: '860px',
            textWrap: 'balance',
            color: '#f4f2ed'
          }">
            From a folder of photos to <span :style="{ fontStyle: 'italic' }">a live site</span> in three steps.
          </h2>
        </div>
        <div :style="{
          fontFamily: `'Inter', sans-serif`,
          fontSize: '14px',
          color: 'rgba(232,232,232,0.5)',
          maxWidth: '320px',
          lineHeight: 1.55,
          paddingBottom: '8px'
        }">
          Short because it really is short. The longest thing you'll do is pick a cover photo.
        </div>
      </div>

      <div class="how-grid" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }">
        <div v-for="(s, i) in steps" :key="i">
          <StepVisual :kind="s.visual" :lime="props.lime" />
          <div :style="{ marginTop: '24px', display: 'flex', alignItems: 'baseline', gap: '14px' }">
            <span :style="{
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize: '48px',
              fontWeight: 400,
              fontStyle: 'italic',
              color: props.limeMode === 'confident' ? props.lime : 'rgba(232,232,232,0.3)',
              lineHeight: 1
            }">{{ s.n }}</span>
            <h3 :style="{
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              margin: 0,
              color: '#f4f2ed',
              textWrap: 'balance',
              flex: 1
            }">{{ s.title }}</h3>
          </div>
          <p :style="{
            fontFamily: `'Inter', sans-serif`,
            fontSize: '14.5px',
            lineHeight: 1.6,
            color: 'rgba(232,232,232,0.65)',
            margin: '18px 0 16px'
          }">
            <BrandText :text="s.body" :accent="brandAccent" />
          </p>
          <div :style="{
            fontFamily: `'JetBrains Mono', monospace`,
            fontSize: '11px',
            letterSpacing: '0.05em',
            color: 'rgba(232,232,232,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }">
            <span :style="{ width: '4px', height: '4px', borderRadius: '50%', background: props.lime }" />
            {{ s.meta }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
