<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = withDefaults(defineProps<{
  url: string
  height?: string | number
  style?: CSSProperties
}>(), {
  style: () => ({})
})

const rootStyle = computed<CSSProperties>(() => ({
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  background: '#fff',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid rgba(0,0,0,0.08)',
  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.35), 0 15px 30px -10px rgba(0,0,0,0.25)',
  display: 'flex',
  flexDirection: 'column',
  ...props.style
}))
</script>

<template>
  <div :style="rootStyle">
    <div :style="{
      height: '30px',
      background: '#f5f4f1',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      gap: '12px',
      flexShrink: 0
    }">
      <div :style="{ display: 'flex', gap: '5px' }">
        <span :style="{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f57' }" />
        <span :style="{ width: '9px', height: '9px', borderRadius: '50%', background: '#febc2e' }" />
        <span :style="{ width: '9px', height: '9px', borderRadius: '50%', background: '#28c840' }" />
      </div>
      <div :style="{
        flex: 1,
        height: '18px',
        background: '#fff',
        borderRadius: '4px',
        fontFamily: `'JetBrains Mono', monospace`,
        fontSize: '10px',
        color: '#8a8a8a',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        border: '0.5px solid rgba(0,0,0,0.05)'
      }">{{ props.url }}</div>
    </div>
    <div :style="{ flex: 1, minHeight: 0, overflow: 'hidden', background: '#fafaf7' }">
      <slot />
    </div>
  </div>
</template>
