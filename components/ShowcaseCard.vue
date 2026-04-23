<script setup lang="ts">
const props = defineProps<{
  site: {
    name: string
    discipline: string
    url: string
    photos: readonly string[]
    accent: string
  }
  lime: string
}>()

const hover = ref(false)
const darkSite = computed(() => props.site.accent === '#1a1a1a')
</script>

<template>
  <a
    :style="{ display: 'block', color: 'inherit', textDecoration: 'none', cursor: 'pointer' }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div :style="{
      background: props.site.accent,
      color: darkSite ? '#f4f2ed' : '#0f0f0f',
      borderRadius: '6px',
      padding: '28px 28px 0',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid rgba(15,15,15,0.08)',
      transition: 'transform .25s, box-shadow .25s',
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? '0 20px 40px -15px rgba(0,0,0,0.25)' : '0 1px 2px rgba(0,0,0,0.05)'
    }">
      <div :style="{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '20px'
      }">
        <div :style="{
          fontFamily: `'Cormorant Garamond', serif`,
          fontSize: '28px',
          fontWeight: 500,
          letterSpacing: '-0.01em'
        }">
          {{ props.site.name }}
        </div>
        <div :style="{
          fontFamily: `'JetBrains Mono', monospace`,
          fontSize: '10px',
          opacity: 0.55,
          letterSpacing: '0.04em'
        }">
          {{ props.site.url }} ↗
        </div>
      </div>
      <div :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: '12px',
        opacity: 0.6,
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }">
        — {{ props.site.discipline }}
      </div>
      <div :style="{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '6px',
        height: '320px'
      }">
        <div :style="{
          gridRow: 'span 2',
          background: `url(${props.site.photos[0]}) center/cover`
        }" />
        <div :style="{ background: `url(${props.site.photos[1]}) center/cover` }" />
        <div :style="{ background: `url(${props.site.photos[2]}) center/cover` }" />
      </div>
    </div>
  </a>
</template>
