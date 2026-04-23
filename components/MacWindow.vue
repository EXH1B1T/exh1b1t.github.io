<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  height?: string | number
  width?: string | number
  accent?: string
  style?: CSSProperties
}>(), {
  title: '',
  width: '100%',
  accent: '#1a1a1a',
  style: () => ({})
})

const rootStyle = computed<CSSProperties>(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  background: props.accent,
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5), 0 20px 40px -20px rgba(0,0,0,0.4)',
  display: 'flex',
  flexDirection: 'column',
  ...props.style
}))
</script>

<template>
  <div :style="rootStyle">
    <div :style="{
      height: '32px',
      background: 'rgba(255,255,255,0.03)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 14px',
      gap: '14px',
      flexShrink: 0
    }">
      <div :style="{ display: 'flex', gap: '6px' }">
        <span :style="{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f57' }" />
        <span :style="{ width: '11px', height: '11px', borderRadius: '50%', background: '#febc2e' }" />
        <span :style="{ width: '11px', height: '11px', borderRadius: '50%', background: '#28c840' }" />
      </div>
      <span v-if="props.title" :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: '11px',
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.02em'
      }">{{ props.title }}</span>
    </div>
    <div :style="{ flex: 1, minHeight: 0, overflow: 'hidden' }">
      <slot />
    </div>
  </div>
</template>
