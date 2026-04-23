<script setup lang="ts">
const props = withDefaults(defineProps<{
  compact?: boolean
}>(), {
  compact: false
})

const { photos } = useSite()
const tiles = [photos.thumb1, photos.thumb2, photos.thumb3, photos.thumb4, photos.thumb5, photos.thumb6]
</script>

<template>
  <div :style="{
    height: '100%',
    background: '#fafaf7',
    padding: props.compact ? '14px 16px' : '28px 40px',
    overflow: 'hidden'
  }">
    <div :style="{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: props.compact ? '12px' : '24px'
    }">
      <div :style="{
        fontFamily: `'Cormorant Garamond', serif`,
        fontSize: props.compact ? '14px' : '22px',
        fontWeight: 500,
        color: '#1a1a1a',
        letterSpacing: '-0.01em'
      }">
        Mira Lindqvist
      </div>
      <div :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: props.compact ? '8px' : '10px',
        color: '#8a8a8a',
        display: 'flex',
        gap: props.compact ? '8px' : '16px'
      }">
        <span>Work</span><span>About</span><span>Contact</span>
      </div>
    </div>
    <div :style="{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: props.compact ? '4px' : '8px',
      gridAutoRows: props.compact ? '44px' : '80px'
    }">
      <div v-for="(s, i) in tiles" :key="i" :style="{
        gridRow: i % 4 === 0 ? 'span 2' : 'span 1',
        background: `url(${s}) center/cover`
      }" />
    </div>
  </div>
</template>
