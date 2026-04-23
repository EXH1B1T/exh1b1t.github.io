<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = withDefaults(defineProps<{
  lime: string
  style?: CSSProperties
}>(), {
  style: () => ({})
})

const { photos } = useSite()

const albums = [
  { name: 'Editorial — FW25', count: 24 },
  { name: 'The Icelandic Fjords', count: 58 },
  { name: 'Wedding · Lina & Sam', count: 12 },
  { name: 'Studio Archive', count: 91 },
  { name: 'Notebooks', count: 7 }
]

const grid = [
  { src: photos.thumb1, span: 2 },
  { src: photos.thumb2, span: 1 },
  { src: photos.thumb3, span: 1 },
  { src: photos.thumb4, span: 1 },
  { src: photos.thumb5, span: 2 },
  { src: photos.thumb6, span: 1 },
  { src: photos.thumb7, span: 1 },
  { src: photos.thumb8, span: 1 }
]
</script>

<template>
  <MacWindow title="EXH1B1T — Mira Lindqvist" height="100%" :style="props.style">
    <div :style="{ display: 'flex', height: '100%', background: '#141414' }">
      <!-- Sidebar -->
      <div :style="{
        width: '150px',
        background: '#0f0f0f',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        padding: '14px 0',
        fontFamily: `'Inter', sans-serif`,
        fontSize: '11px'
      }">
        <div :style="{
          padding: '0 14px 10px',
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '9.5px'
        }">
          Albums
        </div>
        <div v-for="(album, i) in albums" :key="i" :style="{
          padding: '7px 14px',
          color: i === 0 ? '#f4f2ed' : 'rgba(255,255,255,0.55)',
          background: i === 0 ? 'rgba(212,245,65,0.08)' : 'transparent',
          borderLeft: i === 0 ? `2px solid ${props.lime}` : '2px solid transparent',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }">
          <span>{{ album.name }}</span>
          <span :style="{ fontSize: '9px', color: 'rgba(255,255,255,0.3)' }">{{ album.count }}</span>
        </div>
        <div :style="{
          margin: '16px 14px 0',
          padding: '8px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          color: 'rgba(255,255,255,0.35)',
          fontSize: '10px'
        }">
          <div :style="{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }">
            <span>mira-lind.github.io</span>
          </div>
          <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
            <span :style="{ width: '5px', height: '5px', borderRadius: '50%', background: props.lime }" />
            <span :style="{ color: 'rgba(255,255,255,0.5)' }">Live · 2m ago</span>
          </div>
        </div>
      </div>

      <!-- Main — masonry grid -->
      <div :style="{ flex: 1, padding: '14px', overflow: 'hidden' }">
        <div :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
          fontFamily: `'Inter', sans-serif`
        }">
          <div>
            <div :style="{ fontSize: '13px', fontWeight: 600, color: '#f4f2ed' }">Editorial — FW25</div>
            <div :style="{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }">
              24 photos · 184 MB · last published 2 min ago
            </div>
          </div>
          <button :style="{
            height: '26px',
            padding: '0 12px',
            background: props.lime,
            color: '#0f0f0f',
            border: 'none',
            borderRadius: '4px',
            fontFamily: `'Inter', sans-serif`,
            fontSize: '11px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer'
          }">
            <span :style="{ width: '5px', height: '5px', borderRadius: '50%', background: '#0f0f0f' }" />
            Publish
          </button>
        </div>
        <div :style="{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '60px',
          gap: '6px'
        }">
          <div v-for="(p, i) in grid" :key="i" :style="{
            gridRow: `span ${p.span}`,
            background: `url(${p.src}) center/cover`,
            borderRadius: '2px',
            position: 'relative',
            border: i === 0 ? `1.5px solid ${props.lime}` : 'none'
          }">
            <div v-if="i === 0" :style="{
              position: 'absolute',
              top: '4px', left: '4px',
              background: props.lime,
              color: '#0f0f0f',
              padding: '2px 5px',
              borderRadius: '2px',
              fontFamily: `'JetBrains Mono', monospace`,
              fontSize: '8px',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }">COVER</div>
          </div>
        </div>
      </div>
    </div>
  </MacWindow>
</template>
