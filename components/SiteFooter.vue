<script setup lang="ts">
defineProps<{
  lime: string
}>()

const { defaults } = useSite()
const versionLine = defaults.preLaunch
  ? 'Pre-launch · shipping soon'
  : 'v1.0.0 · shipped Apr 2026'
</script>

<template>
  <footer class="site-footer" :style="{
    background: '#0a0a0a',
    color: 'rgba(232,232,232,0.55)',
    padding: '56px 48px 32px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    fontFamily: `'Inter', sans-serif`,
    fontSize: '13px'
  }">
    <div :style="{ maxWidth: '1360px', margin: '0 auto' }">
      <div :style="{
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }">
        <Logo :size="14" color="#e8e8e8" />
        <p :style="{ margin: '18px 0 0', maxWidth: '420px', lineHeight: 1.55 }">
          A free desktop app that publishes beautiful portfolio sites to your own GitHub account. Built by photographers, for photographers.
        </p>
      </div>
      <div :style="{
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        fontFamily: `'JetBrains Mono', monospace`,
        fontSize: '11px',
        color: 'rgba(232,232,232,0.4)',
        letterSpacing: '0.04em'
      }">
        <div :style="{ display: 'flex', alignItems: 'center', gap: '14px' }">
          <span>© 2026 EXH1B1T</span>
          <span :style="{ width: '3px', height: '3px', borderRadius: '50%', background: 'currentColor' }" />
          <span>EXH1B1T.github.io</span>
          <span :style="{ width: '3px', height: '3px', borderRadius: '50%', background: 'currentColor' }" />
          <span>MIT licensed</span>
        </div>
        <div :style="{ display: 'flex', alignItems: 'center', gap: '6px' }">
          <span :style="{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: lime,
            boxShadow: `0 0 6px ${lime}`
          }" />
          <span>{{ versionLine }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
