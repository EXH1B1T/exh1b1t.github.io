<script setup lang="ts">
const props = defineProps<{
  headline: string
  primaryOs: 'mac' | 'windows'
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const { photos } = useSite()
const secondaryOs = computed<'mac' | 'windows'>(() => (props.primaryOs === 'mac' ? 'windows' : 'mac'))
</script>

<template>
  <section class="hero hero-b" :style="{
    position: 'relative',
    minHeight: '780px',
    background: `linear-gradient(180deg, rgba(15,15,15,0.4) 0%, rgba(15,15,15,0.2) 40%, rgba(15,15,15,0.85) 100%), url(${photos.heroA}) center/cover`,
    color: '#f4f2ed',
    padding: '140px 48px 80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }">
    <TopNav :lime="props.lime" />
    <div :style="{ maxWidth: '1360px', margin: '0 auto', width: '100%' }">
      <div :style="{ maxWidth: '780px' }">
        <div :style="{
          fontFamily: `'JetBrains Mono', monospace`,
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(244,242,237,0.7)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '28px'
        }">
          <span :style="{
            width: '24px',
            height: '1px',
            background: props.limeMode !== 'whisper' ? props.lime : 'currentColor'
          }" />
          <span>EXH1B1T — Free for photographers</span>
        </div>
        <h1 :style="{
          fontFamily: `'Cormorant Garamond', serif`,
          fontWeight: 400,
          fontSize: '128px',
          lineHeight: 0.95,
          letterSpacing: '-0.025em',
          margin: '0 0 28px',
          textShadow: '0 2px 30px rgba(0,0,0,0.3)',
          textWrap: 'balance'
        }">
          {{ props.headline }}
        </h1>
        <p :style="{
          fontFamily: `'Inter', sans-serif`,
          fontSize: '20px',
          lineHeight: 1.5,
          maxWidth: '560px',
          color: 'rgba(244,242,237,0.85)',
          margin: '0 0 40px'
        }">
          A free desktop app. Drag in your photos, click publish, get a clean editorial site on your own GitHub account. No code, no subscription.
        </p>
        <div :style="{ display: 'flex', gap: '12px', flexWrap: 'wrap' }">
          <DownloadBtn primary :os="props.primaryOs" variant="lime" :lime="props.lime" />
          <DownloadBtn :os="secondaryOs" />
        </div>
      </div>
    </div>
    <div :style="{
      position: 'absolute',
      bottom: '20px',
      right: '32px',
      fontFamily: `'JetBrains Mono', monospace`,
      fontSize: '10px',
      color: 'rgba(244,242,237,0.4)',
      letterSpacing: '0.05em'
    }">
      Portfolio by @mira_lindqvist — built with EXH1B1T
    </div>
  </section>
</template>
