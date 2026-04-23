<script setup lang="ts">
const props = withDefaults(defineProps<{
  primary?: boolean
  os: 'mac' | 'windows'
  variant?: 'lime' | 'default'
  lime?: string
}>(), {
  primary: false,
  variant: 'default',
  lime: '#d4f541'
})

const isMac = computed(() => props.os === 'mac')
const bg = computed(() =>
  props.primary ? (props.variant === 'lime' ? props.lime : '#f4f2ed') : 'transparent'
)
const fg = computed(() => (props.primary ? '#0f0f0f' : 'rgba(255,255,255,0.9)'))
const border = computed(() =>
  props.primary ? 'none' : '1px solid rgba(255,255,255,0.18)'
)

const onEnter = (e: MouseEvent) => {
  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
}
const onLeave = (e: MouseEvent) => {
  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
}
</script>

<template>
  <button
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      height: '52px',
      padding: '0 24px',
      background: bg,
      color: fg,
      border,
      borderRadius: '6px',
      fontFamily: `'Inter', sans-serif`,
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '-0.005em',
      cursor: 'pointer',
      transition: 'transform .15s, box-shadow .15s'
    }"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <svg v-if="isMac" width="15" height="15" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
    <svg v-else width="13" height="13" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
    </svg>
    <span>Download for {{ isMac ? 'Mac' : 'Windows' }}</span>
    <span :style="{
      fontSize: '11px',
      opacity: 0.5,
      fontVariantNumeric: 'tabular-nums',
      marginLeft: '4px'
    }">{{ isMac ? 'v1.0 · 84MB' : 'v1.0 · 92MB' }}</span>
  </button>
</template>
