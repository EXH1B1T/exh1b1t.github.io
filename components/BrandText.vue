<script setup lang="ts">
import LogoInline from './LogoInline.vue'

const props = withDefaults(defineProps<{
  text: string
  accent?: string
  color?: string
}>(), {
  accent: '#d4f541',
  color: 'currentColor'
})

const parts = computed(() => props.text.split('EXH1B1T'))
</script>

<template>
  <template v-for="(part, i) in parts" :key="i">
    <template v-if="part">{{ part }}</template>
    <LogoInline v-if="i < parts.length - 1" :accent="props.accent" :color="props.color" />
  </template>
</template>
