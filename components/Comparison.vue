<script setup lang="ts">
const props = defineProps<{
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const cols = ['', 'EXH1B1T', 'Squarespace', 'Format', 'Adobe Portfolio']
const rows = [
  ['Monthly price',              '$0',    '$16–$49',  '$7–$25',  'Bundled w/ Adobe CC'],
  ['You own the site',           'Yes',   'No',       'No',      'Kind of'],
  ['Works on your domain',       'Yes',   'Yes',      'Yes',     'Yes'],
  ['Zero code',                  'Yes',   'Yes',      'Yes',     'Yes'],
  ['Image optimization',         'Local', 'Server',   'Server',  'Server'],
  ['Survives us shutting down',  'Yes',   'No',       'No',      'No']
]
</script>

<template>
  <section class="sec compare" :style="{
    background: '#f4f2ed',
    color: '#0f0f0f',
    padding: '120px 48px'
  }">
    <div :style="{ maxWidth: '1360px', margin: '0 auto' }">
      <SectionTag
        number="06"
        label="How it compares"
        color="rgba(15,15,15,0.4)"
        :accent="props.limeMode === 'confident' ? '#0f0f0f' : 'rgba(15,15,15,0.5)'"
      />
      <h2 :style="{
        fontFamily: `'Cormorant Garamond', serif`,
        fontWeight: 400,
        fontSize: '56px',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        margin: '28px 0 56px',
        maxWidth: '840px',
        textWrap: 'balance'
      }">
        We won't say anything bad about the alternatives. The math can speak for itself.
      </h2>

      <div class="compare-table" :style="{
        background: '#fff',
        border: '1px solid rgba(15,15,15,0.1)',
        borderRadius: '6px',
        overflow: 'hidden',
        fontFamily: `'Inter', sans-serif`
      }">
        <div class="compare-grid" :style="{
          display: 'grid',
          gridTemplateColumns: '1.3fr repeat(4, 1fr)',
          fontFamily: `'Inter', sans-serif`,
          fontSize: '13px'
        }">
          <!-- Header row -->
          <div v-for="(c, i) in cols" :key="`h-${i}`" :style="{
            padding: '22px 24px',
            borderBottom: '1px solid rgba(15,15,15,0.1)',
            borderRight: i < cols.length - 1 ? '1px solid rgba(15,15,15,0.06)' : 'none',
            background: i === 1 ? '#0f0f0f' : '#fff',
            color: i === 1 ? '#f4f2ed' : '#0f0f0f',
            fontWeight: i === 0 ? 400 : 600,
            fontSize: i === 0 ? '11px' : '14px',
            textTransform: i === 0 ? 'uppercase' : 'none',
            letterSpacing: i === 0 ? '0.08em' : 'normal',
            fontFamily: i === 0 ? `'JetBrains Mono', monospace` : `'Inter', sans-serif`,
            display: 'flex',
            alignItems: 'center'
          }">
            <Logo v-if="i === 1" :size="13" color="#f4f2ed" />
            <template v-else>{{ c }}</template>
          </div>
          <!-- Data rows -->
          <template v-for="(r, ri) in rows" :key="`r-${ri}`">
            <div v-for="(cell, ci) in r" :key="`${ri}-${ci}`" :style="{
              padding: '18px 24px',
              borderBottom: ri < rows.length - 1 ? '1px solid rgba(15,15,15,0.06)' : 'none',
              borderRight: ci < 4 ? '1px solid rgba(15,15,15,0.06)' : 'none',
              background: ci === 1 ? 'rgba(212,245,65,0.08)' : 'transparent',
              fontSize: ci === 0 ? '13px' : '14px',
              fontWeight: ci === 0 ? 500 : (ci === 1 ? 600 : 400),
              color: ci === 0 ? '#0f0f0f' : (ci === 1 ? '#0f0f0f' : 'rgba(15,15,15,0.65)'),
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }">
              <span v-if="ci === 1 && cell === 'Yes'" :style="{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: props.lime
              }" />
              {{ cell }}
            </div>
          </template>
        </div>
      </div>

      <p :style="{
        fontFamily: `'Inter', sans-serif`,
        fontSize: '12.5px',
        color: 'rgba(15,15,15,0.5)',
        marginTop: '20px',
        letterSpacing: '0.01em'
      }">
        Prices from each platform's public pricing page, April 2026. Your mileage may vary depending on plan, region, and any seasonal offers we haven't heard about.
      </p>
    </div>
  </section>
</template>
