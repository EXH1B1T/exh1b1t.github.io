<script setup lang="ts">
const props = defineProps<{
  primaryOs: 'mac' | 'windows'
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const secondaryOs = computed<'mac' | 'windows'>(() => (props.primaryOs === 'mac' ? 'windows' : 'mac'))
</script>

<template>
  <section class="sec final-cta" :style="{
    background: '#0f0f0f',
    color: '#e8e8e8',
    padding: '140px 48px 160px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255,255,255,0.06)'
  }">
    <div :style="{
      position: 'absolute',
      top: '64px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '1px',
      height: '48px',
      background: `linear-gradient(180deg, transparent, ${props.limeMode === 'confident' ? props.lime : 'rgba(232,232,232,0.3)'})`
    }" />
    <div :style="{ maxWidth: '900px', margin: '0 auto' }">
      <h2 :style="{
        fontFamily: `'Cormorant Garamond', serif`,
        fontWeight: 400,
        fontSize: '128px',
        lineHeight: 0.98,
        letterSpacing: '-0.025em',
        margin: '0 0 28px',
        color: '#f4f2ed',
        textWrap: 'balance'
      }">
        Your portfolio. Your site. <span :style="{ fontStyle: 'italic' }">No rent.</span>
      </h2>
      <p :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: '19px',
        lineHeight: 1.5,
        color: 'rgba(232,232,232,0.7)',
        maxWidth: '580px',
        margin: '0 auto 48px'
      }">
        Free desktop app. Publishes to your own GitHub account. Mac and Windows. Nothing to sign up for.
      </p>
      <div :style="{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }">
        <DownloadBtn primary :os="props.primaryOs" variant="lime" :lime="props.lime" />
        <DownloadBtn :os="secondaryOs" />
      </div>
      <div :style="{
        marginTop: '28px',
        fontFamily: `'Inter', sans-serif`,
        fontSize: '13px',
        color: 'rgba(232,232,232,0.45)'
      }">
        Or <a :style="{
          color: props.lime,
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          textDecorationColor: 'rgba(212,245,65,0.4)',
          cursor: 'pointer'
        }">see the source on GitHub →</a>
      </div>
    </div>
  </section>
</template>
