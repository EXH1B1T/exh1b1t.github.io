<script setup lang="ts">
defineProps<{
  lime: string
}>()

const { defaults } = useSite()
const preLaunch = defaults.preLaunch
const badgeText = preLaunch ? defaults.preLaunchBadge : 'v1.0 · free forever'
</script>

<template>
  <nav class="topnav" :style="{
    position: 'absolute',
    top: 0, left: 0, right: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '28px 48px',
    color: '#e8e8e8'
  }">
    <Logo :size="14" />
    <a v-if="preLaunch" :href="defaults.notifyUrl" :style="{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: `'JetBrains Mono', monospace`,
      fontSize: '11px',
      color: 'rgba(232,232,232,0.75)',
      textDecoration: 'none',
      letterSpacing: '0.02em'
    }">
      <span :style="{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: lime,
        boxShadow: `0 0 8px ${lime}`
      }" />
      {{ badgeText }}
    </a>
    <div v-else :style="{ display: 'flex', alignItems: 'center', gap: '16px' }">
      <span :style="{
        fontFamily: `'JetBrains Mono', monospace`,
        fontSize: '11px',
        color: 'rgba(232,232,232,0.5)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }">
        <span :style="{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: lime,
          boxShadow: `0 0 8px ${lime}`
        }" />
        {{ badgeText }}
      </span>
    </div>
  </nav>
</template>
