<script setup lang="ts">
const props = withDefaults(defineProps<{
  accent?: string
  color?: string
}>(), {
  accent: '#d4f541',
  color: 'currentColor'
})
</script>

<template>
  <span :style="{
    fontFamily: `'Inter', sans-serif`,
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: props.color,
    whiteSpace: 'nowrap'
  }">EXH<span :style="{ color: props.accent }">1</span>B<span :style="{ color: props.accent }">1</span>T</span>
</template>
