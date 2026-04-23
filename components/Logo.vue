<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: number
  color?: string
  accent?: string
}>(), {
  size: 16,
  color: 'currentColor',
  accent: '#d4f541'
})
</script>

<template>
  <span :style="{
    fontFamily: `'Inter', sans-serif`,
    fontWeight: 700,
    fontSize: `${props.size}px`,
    letterSpacing: '0.14em',
    color: props.color,
    display: 'inline-flex',
    alignItems: 'baseline'
  }">EXH<span :style="{ color: props.accent }">1</span>B<span :style="{ color: props.accent }">1</span>T</span>
</template>
