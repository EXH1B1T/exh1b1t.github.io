<script setup lang="ts">
const props = withDefaults(defineProps<{
  number?: string
  label: string
  color?: string
  accent?: string
}>(), {
  number: '',
  color: 'rgba(255,255,255,0.4)',
  accent: ''
})

const accentColor = computed(() => props.accent || props.color)
</script>

<template>
  <div :style="{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontFamily: `'JetBrains Mono', monospace`,
    fontSize: '11px',
    color: props.color,
    letterSpacing: '0.08em',
    textTransform: 'uppercase'
  }">
    <span v-if="props.number" :style="{ color: accentColor }">{{ props.number }}</span>
    <span :style="{ width: '24px', height: '1px', background: 'currentColor', opacity: 0.3 }" />
    <span>{{ props.label }}</span>
  </div>
</template>
