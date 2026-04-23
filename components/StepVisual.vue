<script setup lang="ts">
const props = defineProps<{
  kind: 'auth' | 'editor' | 'publish'
  lime: string
}>()

const { photos } = useSite()

const shellStyle = {
  height: '260px',
  background: '#1a1a1a',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '6px',
  overflow: 'hidden',
  position: 'relative' as const
}

const editorThumbs = [
  photos.thumb1, photos.thumb2, photos.thumb3, photos.thumb4,
  photos.thumb5, photos.thumb6, photos.thumb7, photos.thumb8
]
</script>

<template>
  <!-- AUTH — device-flow code -->
  <div v-if="props.kind === 'auth'" :style="shellStyle">
    <div :style="{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '18px',
      padding: '32px'
    }">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#f4f2ed">
        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>
      </svg>
      <div :style="{
        fontFamily: `'JetBrains Mono', monospace`,
        fontSize: '36px',
        fontWeight: 700,
        color: '#f4f2ed',
        letterSpacing: '0.15em',
        padding: '14px 28px',
        background: 'rgba(212,245,65,0.08)',
        border: `1px dashed ${props.lime}`,
        borderRadius: '6px'
      }">
        K4T7-MZP9
      </div>
      <div :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: '11px',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        lineHeight: 1.5
      }">
        Enter this code at <span :style="{ color: props.lime }">github.com/login/device</span><br />
        Waiting for you…
      </div>
    </div>
  </div>

  <!-- EDITOR — masonry drop zone -->
  <div v-else-if="props.kind === 'editor'" :style="shellStyle">
    <div :style="{ height: '100%', padding: '12px', display: 'flex', flexDirection: 'column' }">
      <div :style="{
        flex: 1,
        border: `2px dashed ${props.lime}`,
        borderRadius: '4px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: '1fr',
        gap: '4px',
        padding: '8px',
        background: 'rgba(212,245,65,0.05)'
      }">
        <div v-for="(s, i) in editorThumbs" :key="i" :style="{
          background: `url(${s}) center/cover`,
          borderRadius: '2px',
          opacity: i > 5 ? 0.3 : 1
        }" />
      </div>
      <div :style="{
        marginTop: '10px',
        fontFamily: `'JetBrains Mono', monospace`,
        fontSize: '10px',
        color: props.lime,
        display: 'flex',
        justifyContent: 'space-between'
      }">
        <span>24 photos · resizing locally…</span>
        <span>18 / 24</span>
      </div>
    </div>
  </div>

  <!-- PUBLISH — terminal log -->
  <div v-else :style="shellStyle">
    <div :style="{
      padding: '16px',
      fontFamily: `'JetBrains Mono', monospace`,
      fontSize: '11px',
      lineHeight: 1.8,
      color: 'rgba(232,232,232,0.75)'
    }">
      <div><span :style="{ color: props.lime }">✓</span> Resized 24 photos (local)</div>
      <div><span :style="{ color: props.lime }">✓</span> Built site → <span :style="{ color: '#8a8a8a' }">dist/</span></div>
      <div><span :style="{ color: props.lime }">✓</span> git add · commit · push</div>
      <div><span :style="{ color: props.lime }">✓</span> GitHub Pages · deploying…</div>
      <div :style="{ color: 'rgba(232,232,232,0.4)' }">… building release assets</div>
      <div :style="{
        marginTop: '14px',
        paddingTop: '12px',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }">
        <div :style="{ color: '#f4f2ed', fontSize: '12px', marginBottom: '6px' }">
          Live at
        </div>
        <a :style="{
          color: props.lime,
          fontSize: '13px',
          textDecoration: 'underline',
          textDecorationColor: 'rgba(212,245,65,0.4)',
          textUnderlineOffset: '3px'
        }">mira-lind.github.io ↗</a>
      </div>
    </div>
  </div>
</template>
