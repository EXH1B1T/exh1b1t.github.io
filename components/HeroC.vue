<script setup lang="ts">
const props = defineProps<{
  headline: string
  primaryOs: 'mac' | 'windows'
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const secondaryOs = computed<'mac' | 'windows'>(() => (props.primaryOs === 'mac' ? 'windows' : 'mac'))
</script>

<template>
  <section class="hero hero-c" :style="{
    position: 'relative',
    background: '#0f0f0f',
    color: '#e8e8e8',
    padding: '140px 48px 0',
    overflow: 'hidden'
  }">
    <TopNav :lime="props.lime" />
    <div :style="{ maxWidth: '1360px', margin: '0 auto', textAlign: 'center' }">
      <SectionTag
        label="Free desktop app · Mac & Windows"
        color="rgba(232,232,232,0.5)"
        :accent="props.limeMode !== 'whisper' ? props.lime : 'rgba(232,232,232,0.6)'"
      />
      <h1 :style="{
        fontFamily: `'Cormorant Garamond', serif`,
        fontWeight: 400,
        fontSize: '120px',
        lineHeight: 0.98,
        letterSpacing: '-0.025em',
        margin: '28px auto 24px',
        color: '#f4f2ed',
        maxWidth: '1000px',
        textWrap: 'balance'
      }">
        {{ props.headline }}
      </h1>
      <p :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: '19px',
        lineHeight: 1.5,
        color: 'rgba(232,232,232,0.7)',
        maxWidth: '620px',
        margin: '0 auto 36px'
      }">
        A free desktop app that publishes a beautiful portfolio site to your own GitHub account. No code, no subscription, no catch.
      </p>
      <div :style="{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '64px'
      }">
        <DownloadBtn primary :os="props.primaryOs" variant="lime" :lime="props.lime" />
        <DownloadBtn :os="secondaryOs" />
      </div>
    </div>
    <div class="hero-c-dual" :style="{
      maxWidth: '1440px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      padding: '0 24px'
    }">
      <div :style="{ transform: 'translateY(0)' }">
        <AppEditorMock :lime="props.lime" :style="{ height: '420px' }" />
        <div :style="{
          fontFamily: `'JetBrains Mono', monospace`,
          fontSize: '10px',
          color: 'rgba(232,232,232,0.4)',
          textAlign: 'center',
          marginTop: '14px',
          letterSpacing: '0.05em'
        }">EXH1B1T.app — editor</div>
      </div>
      <div>
        <BrowserWindow url="mira-lind.github.io" :height="420">
          <PortfolioPreview />
        </BrowserWindow>
        <div :style="{
          fontFamily: `'JetBrains Mono', monospace`,
          fontSize: '10px',
          color: 'rgba(232,232,232,0.4)',
          textAlign: 'center',
          marginTop: '14px',
          letterSpacing: '0.05em'
        }">mira-lind.github.io — live</div>
      </div>
    </div>
  </section>
</template>
